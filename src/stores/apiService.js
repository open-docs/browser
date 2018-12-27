import axios from 'axios'

export default class APIService {

  get () {

  }

  post () {

  }

  put (url, data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000)
    })
    // return axios.put()
  }

}
