import axios from '../config'

export const fetchList = (params) => axios.get('/article/list', params).then(res => res.data)
