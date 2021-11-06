# React

### 16.8依赖包

`babel.min.js`  作用：1、es6 转 es5 2、jsx转换成js

`react.development.js` react 核心库

`react.dom.development.js` react 扩展库
    
`prop-types.js`

### 关于虚拟 DOM
 
    1.本质是object类型的对象，（一般对象）
    2.虚拟DOM比较“轻”（身上属性少），真实DOM比较“重”（身上属性多），因为虚拟DOM是 React 内部在用，无需真实DOm上那么多属性
    3.虚拟DOM最终会被 React 转化为真实DOM，呈现在页面上

### XML 早期用于存储和传输数据

    <student>
        <name>Tom</name>
        <age>19</age>
    </student>

    后来用json 存储数据
    {'name':'Tom','age',19}

### jsx 语法规则
    1.定义虚拟 DOM，不要写引号。
    2.标签中混入 JS 表达式时要用{}
    3.样式的类名指定不要用class，要用className
    4.内联样式，要用 style={{ color: 'white',fontSize:20 }} 的形式去写
    5.虚拟DOM必须只有一个跟标签
    6.标签必须闭合
    7.标签首字母
        (1).若小写字母开头，则将改标签转为html中同名标签，若html中无该标签对应的同名元素，则报错
        (2).若大写字母开头，react就去渲染对应的组件，若组件没有定义，则报错

### 注意区分【js语句】 与 【js表达式】
    1.表达式：一个表达式会产生一个值， 可以放在任何一个需要值得地方
        下面这些都是表达式：
            (1).a
            (2).a+b
            (3).demo(1)
            (4).arr.map()
            (5).function test(){}
    2.语句（代码）
        下面这些都是语句（代码）：
            (1). if(){}
            (2). for(){}
            (3). switch(){case:XXX} 

### Class 类
    1.类的构造器不是必须写的，要对实例进行一些初始化操作，如添加指定属性时才写
    2.如果B类继承了A类，且B类中写了构造器，那么B类构造器中的super是必须要调用的
    3.类中所定义的方法，都是放在类的原型对象上，供实例去使用

### 受控组件和非受控组件
    1.现用现取，就是非受控组件

    2.随着你的数据，维护状态就是受控组件。（建议使用受控组件，省略了ref）
      随着你的输入存入状态中，什么时候用什么时候取，这就是受控组件

### 高阶函数和函数柯里化
    高阶函数
        如果一个函数符合下面2个规范中的任何一个，那该函数就是高阶函数
        1、若A函数，接收的参数是一个函数，那么A就可以称之为高阶函数
        2、若A函数，调用的返回值依然是一个函数，哪么A就可以称之为高阶函数
        常见的高阶函数有： Promise、setTimeout、arr.map()  等等

    函数柯里化
        通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式
        function sum(a) {
            return (b) => {
                return (c) => {
                    return a + b + c
                }
            }
        }
        console.log(sum(1)(1)(5)); //7

### React中事件
    React中事件返回值必须是一个函数
        onChange={this.saveFormData}  
        
        onChange={this.saveFormData('username')} 如果加上()就会立即执行这个函数，函数里面必须返回一个函数


### 生命周期的三个阶段（旧）
    1.初始化阶段：由ReactDOM.render() 触发----初次渲染
        constructor()
        componentWillMount()
        render()
        componentDidMount()  ==>常用（一般这个钩子中做一些初始化的事，例如：开启定时器，发送网络请求，订阅消息）
    2.更新阶段：由组件内部this.setState() 或 父组件重新render 触发
        shouldComponentUpdate()
        componentWillUpdate()
        render() ==> 必须使用的一个
        componentDidUpdate()
    3.卸载组件：由ReactDOM.unmountComponentAtNode()触发
        componentWillUnmount()   ==>常用（一般这个钩子中做一些收尾的事，例如：关闭定时器，取消订阅消息）

### 生命周期的三个阶段（新）
    1.初始化阶段：由ReactDOM.render() 触发----初次渲染
        constructor()
        getDerivedStateFromProps()
        render()
        componentDidMount()  ==>常用（一般这个钩子中做一些初始化的事，例如：开启定时器，发送网络请求，订阅消息）
    2.更新阶段：由组件内部this.setState() 或 父组件重新render 触发
        getDerivedStateFromProps()
        shouldComponentUpdate() 
        render() ==> 必须使用的一个
        getSnapshotBeforeUpdate()
        componentDidUpdate()
    3.卸载组件：由ReactDOM.unmountComponentAtNode()触发
        componentWillUnmount()   ==>常用（一般这个钩子中做一些收尾的事，例如：关闭定时器，取消订阅消息）


    重要的钩子
    render：初始化渲染或更新渲染调用
    componentDidMount：开启监听，发生ajax请求
    componentWillUnmount 做一些收尾工作：如清理定时器

### 生命周期旧和新的区别
    旧的生命周期 16.8.4 版本即将废弃三个钩子，需要在前面加上UNSAFE_前缀
    componentWillReceiveProps 组件将要接收新的props参数的钩子  
    componentWillMount  组件将要挂载的钩子
    componentWillUpdate  组件将要更新钩子

    旧的生命周期 17.0.2 新增2个钩子
    getDerivedStateFromProps (派生的状态，状态取决于props，使用场景极其罕见 若state的值在任何时候都取决于props，那么可以使用getDerivedStateFromProps)
    getSnapshotBeforeUpdate   在更新之前获取快照

### react/vue中的key有什么作用
    经典面试题：
     1).react/vue中的key有什么作用？（key的内部原理是什么？）
     2).为什么遍历列表时，key最好不要用index？

     1.虚拟DOM中key的作用
        1).简单的说：key是虚拟DOM对象的标识，在更新显示时key起着极其重要的作用
        2).详细的说：当状态中的数据发生变化时，react会根据【新数据】生成【新的虚拟DOM】，随后React进行【新虚拟DOM】与【就虚拟DOM】的diff比较，比较规则如下：
            a.旧虚拟DOM中找到了与新虚拟DOM相同的key：
                    (1).若虚拟DOM中内容没变，直接使用之前的真实DOM
                    (2).若虚拟DOM中内容变了，则生成新的真实DOM，随后替换掉页面中之前的真实DOM
            b.旧虚拟DOM中未找到与新虚拟DOM相同的key
                    根据数据创建新的真实DOM，随后渲染到页面
     2.用index作为key可以会引发的问题：
        1.若对数据进行：逆序添加、逆序删除等破坏顺序操作：
            会产生没有必要的真实DOM更新==>界面效果没问题，但效率低
        2.如果结构中还包含输入类DOM：
            会产生错的DOM更新==>界面有问题
        3.注意！如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用index作为key是没有问题的

     3.开发中如何选择key？
        1.最好使用每条数据的唯一标识作为key，比如id，手机，身份证号，学号等唯一值
        2.如果确定只是简单的展示数据，用index也是可以的