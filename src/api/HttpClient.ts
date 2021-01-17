import axios, { AxiosRequestConfig } from "axios"
import { IHttpClient, IHttpClientRequestParameters } from "./IHttpClient"

export class HttpClient implements IHttpClient {
  get<T>(parameters: IHttpClientRequestParameters<any>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      // extract the individual parameters
      const { url, requiresToken } = parameters

      // axios request options like headers etc
      const options: AxiosRequestConfig = {
        headers: {}
      }
      if (requiresToken) {
        options.headers.RequestVerificationToken = process.env.REACT_APP_API_TOKEN
      }
      // finally execute the GET request with axios:
      axios
        .get(url, options)
        .then((response: any) => {
          resolve(response.data as T)
        })
        .catch((response: any) => {
          reject(response)
        })

    })
  }
  post<T>(parameters: IHttpClientRequestParameters<any>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { url, requiresToken, payload } = parameters

      // axios request options like headers etc
      const options: AxiosRequestConfig = {
        headers: {}
      }
      if (requiresToken) {
        options.headers.RequestVerificationToken = process.env.REACT_APP_API_TOKEN
      }
      // finally execute the GET request with axios:
      axios
        .post(url, payload, options)
        .then((response: any) => {
          resolve(response.data as T)
        })
        .catch((response: any) => {
          reject(response)
        })
    })
  }
}
export const httpClient = new HttpClient();