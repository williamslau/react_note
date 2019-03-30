
##现在开发，一般都用spa路由
- hash # h5api historyApi 一定会出现404的问题，后期会通过服务端解决这个问题
都会内置fallbackApi
好处是不切换页面，切换的是组件通过路径
- seo的问题（预渲染）


BrowserRouter 浏览器路由
HashRouter   带#的路由

<Route path='/home' exact={true} component={Home}/>
exact 严格匹配 如果不加，在访问时会访问所有带/home的路由 如果有二级页面就不能加这个，因为这就匹配不到了
switch组件匹配到一个后就不会再继续匹配了
