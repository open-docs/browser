/* global Conf */
import axios from 'axios'

export default class APIService {

  token = ''
  setToken (token) {
    this.authHeader = {'Authorization': `Bearer ${this.token}`}
  }

  get (url) {
    return axios({
      method: 'get',
      url: `${Conf.url}${url}`,
      headers: this.authHeader
    }).then(res => res.data)
  }

  post (url, data) {
    return axios({
      method: 'post',
      url: `${Conf.url}${url}`,
      headers: this.authHeader,
      data
    })
  }

  put (url, data) {
    return axios({
      method: 'put',
      url: `${Conf.url}${url}`,
      headers: this.authHeader,
      data
    })
  }

}
