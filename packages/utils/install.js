export const componentInstall = (com) => {

    // 在拿到 com 之后呢，我们需要给这个 com 去挂载一个`install`方法
    // 这样这个 com 组件就变成一个插件了
    // 这样就可以使用`app.use(com)`来安装这个插件了

    // 注意: 只要使用 `app.use()` 安装了这个 com 插件，那么就会自动执行 `install` 方法
    // 注意: 在 `install` 方法中，我们需要给这个 com 组件去挂载一个 `name` 属性

    com.install = (app) => {

        // 自动进行组件的全局注册
        // 注意: 这里的 com 是组件的构造函数，而不是组件的实例对象
        // 注意: 这里的 com.name 是组件的名称，不是组件的构造函数名称
        app.component(com.name, com);

    }
    
    return com
}