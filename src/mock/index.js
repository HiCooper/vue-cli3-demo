import Mock from 'mockjs'

import articleAPI from './article'

import {fetchList} from '../api/article'

Mock.setup({
  timeout: '350-600'
})

// 文章相关
Mock.mock(fetchList.url, 'get', articleAPI.getList)

export default Mock
