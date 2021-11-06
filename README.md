React 状态中的数据驱动着页面展示


### 创建项目并启动
    全局安装：npm install -g create-react-app (npm i create-react-app -g)
    创建项目：create-react-app my-react(项目名称)
    启动项目：npm start

### react脚手架创建项目目录结构
    node_modules-------第三方依赖模块文件夹

    public--静态资源文件
        favicon.ico  网站页签图片
        index.html  主页面
        logo192.png  logo图
        logo512.png  logo图
        manifest.json 应用加壳的配置文件
        robots.txt 爬虫协议文件

    src-- 源码文件夹
        App.css  App组件样式
        App.js  App组件
        App.test.js  用于给App做测试
        index.css 默认样式
        logo.svg logo图
        reportWebVitals.js 页面性能分析文件（需要web-vitals库的支持）
        setupTests.js 组件单元测试的（需要jest-dom库的支持）

    .gitignore-------git版本管制忽略的配置
    package-lock.json
    package.josn-------应用包配置文件
    README.md-------应用描述说明的readme文件

### 组件提示插件
    vscode 输入react 选择 VS Code ES7 React/Redux/React-Native/JS snippets

### defaultChecked 与 checked 区别
    defaultChecked  第一次可以勾选，后面允许修改(只在第一次起作用)
    checked 写死了，不允许修改，要修改需要使用 onChange

### UUID / nanoid 唯一标识
    npm i uuid 这个库有点大,推荐使用nanoid

    npm i nanoid
        引入 import { nanoid } from 'nanoid'
        nanoid() 直接使用

### 对组件传的参数进行类型限制
    安装 npm i prop-types

### reduce数组

### todoList 案例相关知识点
    1.拆分组件、实现静态组件，注意：className、style的写法
    2.动态初始化列表，如果确定将数据放在哪个组件的state中?
        ————某个组件使用：放在其自身state中
        ————某些组件使用：放在他们共同的父组件state中（官方称此为：状态提升）
    3.关于父子之间通信
        1.【父组件】给【子组件】传递数据：通过props传递
        2.【子组件】给【父组件】传递数据：通过props传递，要求父提前给子传递一个函数
    4.注意 defaultChecked 和 checked 区别，类似的还有 defaultValue 和 value
    5.状态在哪里，操作状态的方法就在哪里

### axios
    安装 npm i axios 
    使用 import axios from 'axios'

### react 配置代理（跨域）
    https://www.cnblogs.com/rzl795/p/15096518.html 
    方法一：

        地址：http://poetry.apiopen.top/sentences

        
        在 package.json 文件下添加配置代理地址  "proxy": "http://poetry.apiopen.top/"

        请求的时候写本地地址，如果本地找到了就用本地的，如果本地没有找到就会转发到代理地址
        axios.get('http://localhost:3000/sentences').then(
            response => console.log("成功了", response.data),
            error => console.log("失败了", error)
        )
        优点：配置简单，前端请求资源时可以不加任何前缀
        缺点：不能配置多个代理
        工作方式：当请求不存在的资源时，那么改请求就会转发给配置的代理（优先匹配前端资源）

    方法二：
        在 src 文件夹下新建 setupProxy.js 名字不能改，react脚手架会自动找这个文件（不能用es6语法 ，需要用CJS语法）

        在 setupProxy.js 文件里面哦诶之具体代理规则：
        const proxy = require("http-proxy-middleware")
        module.exports = function (app) {
            console.log("@@@");
            app.use( 
                proxy('/api1', {// 遇见/api1前缀的请求， 就会触发该代理配置
                    target: 'http://poetry.apiopen.top',//请求转发给谁
                    changeOrigin: true,//控制服务器收到的响应头中Host字段值（默认false）
                    pathRewrite: { '^api1': '' },// 重写请求路径
                })
            )
        }
        优点：可以配置多个代理，可以灵活控制请求是否走代理
        缺点：配置繁琐，前端请求资源时必须加前缀

### react兄弟之间通信 消息订阅与发布 pubsub-js
    安装 npm i pubsub-js
    引入 import PubSub from 'pubsub-js'

    订阅：
        this.token = PubSub.subscribe(消息名字, (消息名字, 数据) => { 操作数据})
        this.token = PubSub.subscribe("hong", (msg, stateObj) => { this.setState(stateObj)})

    发布：
        PubSub.publish(消息名字, 发布的消息)
        PubSub.publish('hong', { isLoading: false, users: response.data.items })

    取消订阅：
        PubSub.unsubscribe(this.token)


### Fetch 
    1. 原生函数，不再使用XMLHttpRequest 对象提交ajax请求
    2. 老版本浏览器可能不支持

### github 案例相关知识点
    1.设计状态时要考虑全面，例如带有网络请求的组件，要考虑请求失败怎么办
    2.ES6小知识点：结构赋值+重命名
        let obj={a:{b:1}}
        const {a} =obj; 传统结构赋值
        const {a:{b}}=obj; 连续解构赋值
        const {a:{b:value}}=obj; 连续解构赋值+重命名
    3.消息订阅与发布机制
        1.先订阅，在发布（理解：有一种隔空对话的感觉）
        2.适用于任何组件之间的通信
        3.要在组件的 componentWillUnmount 中取消订阅
    4.fetch发送请求（关注分离的设计思想）
        try {
            const response = await fetch(`https://api.github.com/search/users?q=${keyword}`)
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log('请求出错',error)
        }
    
### react 路由的基本使用
    安装 npm i react-router-dom
    引入 import { Link, Route ,BrowserRouter } from 'react-router-dom'
    1.明确好界面的导航区、展示区
    2.导航区的a标签改为 Link 标签
        <Link to="/about">About</Link>
    3.展示区写 Route 标签进行路径的匹配
        <Route path="/about" component={About} />
    4.<App>的最外侧包裹了一个 <BrowserRouter> 或 <HashRouter>
    5.<Link>升级版<NavLink>选中自动添加一个active类，如果想用active类 使用activeClassName 自定义类

### react 路由 组件与一般组件
    1.写法不同：
        一般组件：<Demo/>
        路由组件：<Route path="/demo" component={Demo} />
    2.存放位置不同
        一般组件：components
        路由组件：pages
    3.接收到的props不同
        一般组件：组件标签传递了什么就可以接收到什么
        路由组件：接收到三个固定属性
                history:
                    go: ƒ go(n)
                    goBack: ƒ goBack()
                    goForward: ƒ goForward()
                    push: ƒ push(path, state)
                    replace: ƒ replace(path, state)
                location:
                    pathname: "/about"
                    search: ""
                    state: undefined
                match:
                    params: {}
                    path: "/about"
                    url: "/about"

### react 路由 NavLink 与封装 NavLink
    1.NavLink可以实现路由链接的高亮，通过activeClassName指定样式名
    2.标签体内容是一个特殊的标签属性
    3.通过this.props.children可以获取标签内容

### react 路由 Switch的使用
    1.通常情况下，path和component是一一对应关系
    2.Switch可以提高路由匹配效率（单一匹配）
    <Switch>
        <!-- 使用switch包裹后找到匹配的home组件后不再往下匹配，如果不用switch会匹配后面的home组件-->
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
        <Route path="/home" component={Test} />
    </Switch>

###  react 路由 解决多级路径刷新页面样式丢失问题（index.html）
    1.public/index.html 中引入样式时不写 ./ 写 / （常用）
    2.public/index.html 中引入样式时不写 ./ 写 %PUBLIC_URL% （常用）
    3.使用 HashRouter
    
    解决办法一：
        <link rel="stylesheet" href="/css/bootstaop.css"> 路径前面不加.

    解决办法二：
        <link rel="stylesheet" href="%PUBLIC_URL%/css/bootstaop.css">  加上%PUBLIC_URL%
    
    解决办法三：
        使用 <HashRouter>

###  react 路由的严格匹配与模糊匹配
    1.默认使用模糊匹配（输入的路径必须要包含匹配的路径，切顺序要一致）
    2.开启严格匹配 <Route exact={true} path="/home" component={Home} /> 
    3.严格匹配不要随便开启，需要在开，有些时候开启会导致无法继续匹配二级路由
    
###  react 路由的重定向
    1.一般写在所有路由注册的最下方，当所有路由无法匹配时，跳转到 Redirect 指定的路由
    <Switch>
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
        <Redirect to="/about" />
    </Switch>
        
###  react 路由的嵌套（二级路由）
    1.注册子路由时写上父路由的path值
    2.路由的匹配是按照注册路由的顺序进行的

###  react 路由组件传参
    1.params 参数
        路由链接（携带参数）：<Link to={`/home/message/detail/${msg.id}/${msg.title}`}>{msg.title}</Link>
        注册路由（声明接受）：<Route path='/home/message/detail/:id/:title' component={Detail} />
        接受参数：const { id, title } = this.props.match.params

    2.search 参数
        路由链接（携带参数）:<Link to={`/home/message/detail/?id=${msg.id}&title=${msg.title}`}>{msg.title}</Link>
        注册路由（无需声明，正常注册即可）<Route path='/home/message/detail' component={Detail} />
        接收参数： const { search } = this.props.location
                  const { id, title } = qs.parse(search.slice(1))
        备注：获取到的search是urlencoded编码字符，需要借助 querystring 解析

    3.state 参数
        路由链接（携带参数）:<Link to={{ pathname: '/home/message/detail', state: { id: msg.id, title: msg.title } }}>{msg.title}</Link>
        注册路由（无需声明，正常注册即可）<Route path='/home/message/detail' component={Detail} />
        接收参数： const { id, title } = this.props.location.state || {}
                  
        备注：刷新也可以保留参数

### 编程式路由导航
    借助 this.props.history 对象上的API对操作路由跳转、前进、后退
         this.props.history.push()
         this.props.history.replace()
         this.props.history.goBack()
         this.props.history.goForward()
         this.props.history.go()

### withRouter 的使用
    withRouter 可以加工一般组件，让一般组件具备路由组件所特有的API
    withRouter 返回值是一个新组件

### BrowserRouter 与 HashRouter 的区别
    1.底层原理不一样：
        BrowserRouter 使用的是 H5 的 history API ，不兼容IE9及以下版本
        HashRouter 使用的是URL的哈希值
    2.path 表现形式不一样
        BrowserRouter 的路径没有# ，例如：localhost:3000/demo/test
        HashRouter 的路径包含# ，例如：localhost:3000/#/demo/test
    3.刷新后对路由state参数的影响
        BrowserRouter 没有任何影响，因为state保存在history对象中
        HashRouter 刷新后会导致路由state参数的丢失!!!
    4.备注：HashRouter 可以用于解决一下路径错误的相关问题

### React 组件库
    material-ui(国外)   
        官网： http://www.material-ui.com/#/   https://mui.com/zh/#/
    
    ant-design(国内蚂蚁金服)
        官网：http://ant.design/index-cn
        github：https://github.com/ant-design/ant-design
        安装：npm i antd
        css按需引入：https://3x.ant.design/docs/react/use-with-create-react-app-cn
            安装：npm add react-app-rewired customize-cra
            修改：package.json文件

            "scripts": {
                "start": "react-scripts start",
                "build": "react-scripts build",
                "test": "react-scripts test",
                "eject": "react-scripts eject"
            },
            改成：
            "scripts": {
                "start": "react-app-rewired start",
                "build": "react-app-rewired build",
                "test": "react-app-rewired test",
                "eject": "react-scripts eject"
            },
        新建 config-overrides.js 文件  添加配置

        自定义主题
            安装 npm add less less-loader

    vant (有赞团队 基于vue组件库，移动端)
        官网：https://vant-contrib.gitee.io/vant/#/zh-CN/

### redux
    安装 npm add redux

    原理：react Components 组件 相当于顾客
          Action Creators 专门为组件封装成对象{type:'',data:''}交给Store，相当于服务员
                Action 可以是对象 {} 对象就是同步Action
                Action 也可以是函数 function 函数就是异步Action,处理异步action需要一个中间件npm add redux-thunk,然后再store.js中引入applyMiddleware 和 redux-thunk 然后穿第二个参数 const store = createStore(countReducer,applyMiddleware(thunk))
                

          Store 存储状态 相当于老板
          reducers 处理数据，Store收到的处理全部交给reducers然后再返回一个Store对象交给Store 想当于厨师（初始化状态和加工状态）


### redux 求和案例 精简版
    1.去除Count 组件自身状态
    2.src下建立：
        -src
            -redux
                -store.js
                -count_reducer.js
    3.store.js
        a.引入redux中createStore函数，创建一个store
        b.createStore调用时要传入一个为其服务的reducer
        c.记得暴露store对象
    4.count_reducer.js
        a.reducer的本质是一个函数，接收：preState，action 返回加工后的状态
        b.reducer有两个作用：初始化状态，加工状态
        c.reducer被第一次调用时，是store自动触发的，传递的preState是undefined，action：{type:'@@REDUX/INIT_a.2.b.4'}
    5.在index.js中检测store中状态的改变，一旦发生改变，重新渲染<App/>
        备注：redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写


### redux 求和案例 完整版
    新增文件：
        1.count_action.js 专门用于创建action对象
        2.constant.js 放置容易写错action中的type值

### redux 求和案例 异步action
    1.明确：延迟的动作不想交给组件自身，想交给action
    2.何时需要异步action：想要对状态进行操作，但是具体的数据靠异步任务返回。（非必需）
    3.具体编码：
        a.npm add redux-thunk 并配置在store中
        b.创建action的函数不在返回一个对象，而是一个函数，该函数中写异步任务。
        c.异步任务有结果后，分发一个同步的action去真正操作数据。
    4.备注：异步action不是必须要写的，完全可以自己等待异步任务的结果，再去分发同步action

### react-redux 求和案例 基本使用
    1.明确两个概念：
        a.UI组件：不能使用任何redux的api，只负责页面的呈现，交互等
        b.容器组件：负责和redux通信，将结果交给UI组件
    2.如何创建一个容器组件 ———— 靠 react-redux 的 connect 函数
        connect(mapStateToProps, mapDispatchToProps)(UI组件)
        mapStateToProps :映射状态，返回值是一个对象
        mapDispatchToProps：映射操作状态的方法，，返回值是一个对象
    3.备注1：容器组件中的store 是靠props传进去的，而不是在容器组件中直接引入
    4.备注2：mapDispatchToProps,也可以是一个对象

### react-redux 求和案例 优化
    1.容器组件和UI组件整合成一个组件
    2.无需自己给容器传递store ，给<App/> 包裹一个 <Provider stroe={store}> 既可
    3.使用 react-dedux 后也不用再自己检测redux中状态的改变了，容器组件可以自动完成这个工作
    4.mapDispatchToProps 也可以简单的写成一个对象
    5.一个组件要和 redux 打交道 要经过那几步？
        1.定义好UI组件---不暴露
        2.引入 connect 生成一个容器组件，并暴露，写法如下
            connect(state=>({key:value}),// 映射状态
             {key:XXXActive}// 映射操作状态的方法
            )(UI组件)
        3.在ui组件中通过this.props.xxxxx读取和操作状态

### react-redux 求和案例 数据共享版
    1.定义一个person组件，和count组件通过redux共享数据
    2.为person组件编写：reducer、action、配置 constant常量
    3.重点：Person的reducer和Count的Reducer 要使用combineReducers进行合并，合并后总状态是一个对象
    4.交个store的是总reducer 最后注意在组件中取出状态的时候，记得“取到位”

### react-redux 求和案例 开发者工具的使用
    1.npm add redux-devtools-extension
    2.在store中进行配置
        import { composeWithDevTools } from 'redux-devtools-extension'
        const store = createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))


### react-redux 求和案例 最终版
    1.所有变量名字要规范，尽量触发对象的简写形式
    2.reducers文件夹中，新增index.js 专门用于汇总reducer暴露 交给store.js


### Hooks
#### 一、React Hook/Hooks是什么？
    1.hook是 react 16.8.0 版本增加的新特性/新语法
    2.可以让你再函数组件中使用 state 以及其他的 React 特性
#### 二、三个常用的Hook
    1.State Hook ：React.useState()
    2.Effect Hook ：React.useEffect()
    3.Ref Hook ：React.useRef()
#### 三、State Hook
    1.State Hook 让函数组件也可以用state状态，并进行状态数据读写操作
    2.语法： const [count, setCount] = React.useState(0)
    3.useState()说明:
        参数：第一次初始化指定的值在内部缓存
        返回值：包含2个元素的数组，第一个为内部当前状态值，第二个为更新状态的函数
    4.setXxx() 2种写法
        setXxx(newVal):参数为非函数，直接指定新的状态，内容用其覆盖原来的状态值
        setXxx(value=>newValue)：参数为函数，接收原本的状态，返回新的状态值，内容用其覆盖原来的状态值
#### 四、Effect Hook （在函数组件中使用）
    1.Effect Hook 可以在函数组件中执行副作用操作（用于模拟类组件中的生命周期钩子）
    2.React中的副作用操作
        发ajax请求数据获取
        设置订阅、启动定时器
        收到更改真是DOM
    3.语法和说明：
        React.useEffect(() => {
            //再此可以执行任何带副作用操作
            let timer = setInterval(() => {
                setCount(count => count + 1)
            }, 1000)
            return () => { //在组件卸载之前执行
                clearInterval(timer) //在此做一些收尾的工作，比如清除定时器，取消订阅
            }
        }, [stateValue])// 如果指定是[] 回调函数只会在第一次render（）后执行//相当于两个组件，后面数组写谁就是监听谁，不写都监听，空数组谁也不监听
    4.可以吧Effect Hook 看做如下三个函数的组合
        componentDidMount()
        componentDidUpdate()
        componentWillUnmount()
#### 五、Ref Hook
    1.Ref Hook 可以在函数组件中存储、查找组件内的标签或任意其他数据
    2.语法 const refContainer=useRef()
    3.作用：保存标签对象，功能与React.createRef()一样


### Fragment
    1.可以代替div，解析的时候过滤掉，防止多层div嵌套，Fragment可以允许有key属性，遍历使用、
        <Fragment key={id}></Fragment>
    2.也可以写成空标签<></> ,空标签上不可以加其他属性
        <></>
    
### Context 组件通信方式
    常用于【祖组件】与【后代组件】间通信，在应用开发中一般不用context,一般都用它的封装react插件
    使用：
        1. 创建 Context 容器对象
        const MyContext = React.createContext()

        2.渲染子组件时，外面包裹 MyContext.Provider 通过value属性给后代组件传递数据
        <MyContext.Provider value={username}>
            子组件
        </MyContext.Provider>

        3. 后代组件读取数据
        
        第一种方式：仅适用于类组件
        static contextType = MyContext  // 在子组件声明接收 context
        this.context // 读取 context 中的 value 数据
        
        第二种方式：函数组件与类组件都可以
        <MyContext.Consumer>
            {
                value => { //value 是context中的 value 数据
                    return `${value.username}--${value.password}` // 要显示的内容
                }
            }
        </MyContext.Consumer>

### 组件优化 optimze
    component 的2个问题
        1.只要执行setState(),即使不改变状态数据，组件也会重新render()  ===效率低
        2.当前父组件重新render(),就会自动重新render子组件，纵使子组件没有用到父组件的任何数据  ===效率低
    效率高的做法
        只有当组件的state或props数据发生改变时才重新render
    原因
        component中的 shouldComponentUpdate() 总是返回true
    解决
        方法1：
            重写shouldComponentUpdate()方法
            比较新旧state或props数据，如果有变化才返回true，如果没有返回false
        方法2：
            使用PureComponent
            PureComponent 重写了 shouldComponentUpdate()，只有state或props数据有变化才返回true
            注意：
                只是进行state和props数据的浅比较，如果只是数据对象内部数据变了，返回false
                不要直接修改state数据，而是要产生新数据

    项目中一般使用PureComponent来优化

### render props
    如何向组件内部动态传入带内容的结构
    vue中
        使用solt技术，也就是通过组件标签体传入结构<A><B/></A>
    React中
        使用 children props :通过组件标签体传入结构  （标签体内容是一个特殊的标签属性，属性名称是children）
        使用 render props：通过组件标签属性传入结构，一般用render函数属性
    children props
        <A>
            <B>xxxx</B>
        </A>
        {this.props.children}

    render props
         <A render={name => <C name={name} />} />
         A组件：{this.props.render(内部state数据)}
         C组件：读取A组件传入的数据显示{this.props.data}


### serve服务器 运行打包后的项目
    打包： npm run build
    安装： npm i serve -g
    运行： serve build (serve 以哪个文件夹作为跟路径)


### 错误边界
    理解：
        错误边界(Error boundary):用来捕获自己组件产生的错误，渲染出备用页面
    特点：
        只能捕获后代组件生命周期产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误
    使用方式：
        getDerivedStateFromError 配合 componentDidCatch

        state = {
            hasError: ''//用于标识子组件是否产生错误
        }

        // 生命周期函数，一旦后台组件报错，就会触发
        static getDerivedStateFromError(error) {
            console.log(error);
            // 在render之前触发 返回新的state
            return { hasError: error }
        }

        componentDidCatch(error,info){
            console.log("此处统计错误，反馈给服务器，用于通知编码人员进行bug的解决");
        }
    

### 组件通信方式总结
    组件间的关系：
        父子组件
        兄弟组件（非嵌套组件）
        祖孙组件（跨级组件）

    通信方式：
        1.props:
            a.children props
            b.render props
        2.消息订阅-发布：
            pubs-sub、event等等
        3.集中式管理：
            redux、dva等等
        4.conText  
            生产者-消费者模式
    
    比较好的搭配方式：
        父子组件：props
        兄弟组件：消息订阅-发布、集中式管理
        祖孙组件（跨级组件）：消息订阅-发布、集中式管理、conText（开发用的少，封装插件用的多）





    
