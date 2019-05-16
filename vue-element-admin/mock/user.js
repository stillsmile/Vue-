
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: '我是超级管理员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '超级管理员'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: '我是编辑人',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '正常编辑'
  }
}

export default [
  // user login  //用户登录
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      debugger
      const { username } = config.body
      const token = tokens[username]

      // mock error  // 模拟错误
      if (!token) {
        return {
          code: 60204,
          message: '账户或密码错误.'
          // message: 'Account and password are incorrect.'
        }
      }

      return {
        code: 20000,
        data: token
      }
    }
  },

  // get user info  //获取用户信息
  {
    url: '/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error  // 模拟错误
      if (!info) {
        return {
          code: 50008,
          message: '登录失败，无法获取用户详细信息.'
          // message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout  // 用户退出
  {
    url: '/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
