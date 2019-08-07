<template>
  <div class="home">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        align="center"
        prop="id"
        label="id"
        width="180">
      </el-table-column>
      <el-table-column
        align="center"
        prop="author"
        label="作者"
        width="180">
      </el-table-column>
      <el-table-column
        align="center"
        prop="display_time"
        label="发布时间"
        width="180">
      </el-table-column>
      <el-table-column
        align="center"
        prop="pageviews"
        label="阅读量"
        width="180">
      </el-table-column>
      <el-table-column
        align="center"
        prop="title"
        label="标题"
        width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import { fetchList } from '../api/article'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      tableData: []
    }
  },
  mounted () {
    this.initTableData()
  },
  methods: {
    initTableData () {
      fetchList().then(res => {
        this.tableData = res.items
      })
    }
  }
}
</script>
