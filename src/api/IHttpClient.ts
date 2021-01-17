export interface IHttpClientRequestParameters<T> {
  url: string
  requiresToken: boolean
  payload?: T
}
export interface IHttpClient {
  get<T>(parameters: IHttpClientRequestParameters<any>): Promise<T>
  post<T>(parameters: IHttpClientRequestParameters<any>): Promise<T>
}