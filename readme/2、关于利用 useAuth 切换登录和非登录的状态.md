关于利用 useAuth 切换登录和非登录的状态

准备文件
// 需要登录的组件
1、src/views/unauthenticated-app/login.tsx // 登录组件
2、src/views/unauthenticated-app/register.tsx // 注册组件
3、src/views/unauthenticated-app/index.tsx // 用户可切换注册登录

    // 已登录的组价
    4、src/authenticated-app.tsx // 渲染列表及登出按钮

一、在 1 和 2 中利用 useAuth() 分别完成所需要的登录和注册功能
二、再在 3 中定义 UnauthenticatedApp 组件，根据定义的初始化状态 isRegister 判断是应该《登录》 还是《注册》，然后分别渲染《登录组件》 和《注册组件》
三、定义 4 中定义 AuthenticatedApp 组件，组件中渲染 <ProjectList /> 组件 以及登出按钮
四、在 App.tsx 分别引入 <UnauthenticatedApp /> <AuthenticatedApp /> 组件，通过是否有 user 的信息 判断是应该渲染 3 还是 4
