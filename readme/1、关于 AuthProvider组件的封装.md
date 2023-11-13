关于 AuthProvider 组件的封装

- 准备文件
- 1、src/auth-provider.ts
- 2、src/context/auth-context.tsx
- 3、src/context/index.tsx

在 1 下：- 封装对于token 的操作方法（存储，获取，移除），并且封装登录和注册的接口 然后用操作token的方法对token存储和 返回用户信息 （auth）
在 2 下：- 创建 AuthContext 组件，并且封装 AuthProvider 组件，1、在组件中，定义初始化的Auth信息，然后通过封装的login(), register(), logout(), 获取的用户信息，并返回AuthContext.Provider 的tsx结构 返回value={ {user, login, register, logout } }和 children={children} - 封装获取用户的 useAuth hooks 在页面中直接调用 得到用户信息

在 3 下： 封装 AppProviders 的 hooks 返回 关于用户信息的 AuthProvider 组件 （此处封装是为了整理统一，后续还会有其他的结构在此处添加）

然后再src/index.tsx中利用 AppProviders包括 <App /> 并且在 views/login/index.tsx 中校验（获取用户信息）
