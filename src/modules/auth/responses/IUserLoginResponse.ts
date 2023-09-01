interface IUserLoginResponse {
  accessToken: string;
  accessTokenExpireIn: string;
  refreshToken: string;
  refreshTokenExpireIn: string,
  user: {
    id?: number;
    fullname?: string;
    email?: string;
  };
}

export default IUserLoginResponse;
