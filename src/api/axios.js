/*
 * @Author: zhouchao
 * @Date:   2020-04-29 10:11:13
 * @Last Modified by:   zhouchao
 * @Last Modified time: 2020-04-29 11:11:31
 */
import axios from 'axios';

let http = axios.create({
  baseURL: 'http://10.134.3.1:80/',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  },
  transformRequest: [function(data) {
    let newData = '';
    for (let k in data) {
      if (data.hasOwnProperty(k) === true) {
        newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&';
      }
    }
    //去掉最后的&符号
    if (newData.length > 0) {
      newData = newData.slice(0, newData.length - 1);
    }
    console.log('transform request form [' + JSON.stringify(data) + '] to [' + newData + ']');
    return newData;
  }]
});

function apiAxios(method, url, params, response) {
  http({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
  }).then(function(res) {
    response(res);
  }).catch(function(err) {
    console.log(err);
    response(err);
  })
}

export default {
  get: function(url, params, response) {
    return apiAxios('GET', url, params, response)
  },
  post: function(url, params, response) {
    return apiAxios('POST', url, params, response)
  },
  put: function(url, params, response) {
    return apiAxios('PUT', url, params, response)
  },
  delete: function(url, params, response) {
    return apiAxios('DELETE', url, params, response)
  }
}
