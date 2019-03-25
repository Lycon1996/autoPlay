export default {
  /*
  |--------------------------------------------------------------------------
  | 认证方式
  |--------------------------------------------------------------------------
  |跟后端的认证方式,session or jwt.
  |
  */
  authenticator: 'jwt',
  /*
    |--------------------------------------------------------------------------
    | 获取token或者session的url地址,可以是登录页.
    | 可以是完整的地址
    | 注意相对地址要以 / 开头
    |--------------------------------------------------------------------------
    |
    */
  authUrl: 'authorizations',
  /*
  |--------------------------------------------------------------------------
  | jwt配置 例: Authorization: `${tokenType} ${token}`
  |--------------------------------------------------------------------------
  |
  */
  jwtConfig: {
    /*
    |--------------------------------------------------------------------------
    | jwt信息的存放位置,可选localStorage 或者 sessionStorage
    |--------------------------------------------------------------------------
    |
    */
    storageType: 'localStorage',
    /*
    |--------------------------------------------------------------------------
    | token type在Storage中的字段名
    |--------------------------------------------------------------------------
    |
    */
    tokenType: 'inrice_token_type',
    /*
    |--------------------------------------------------------------------------
    | token 在Storage中的字段名
    |--------------------------------------------------------------------------
    |
    */
    token: 'inrice_access_token',
    /*
    |--------------------------------------------------------------------------
    | 不需要进行token校验的url
    |--------------------------------------------------------------------------
    |
    */
    authWhiteList: [
      // 'xxx'
    ]
  }
}