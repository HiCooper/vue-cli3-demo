<template>
  <div class="app-wrapper" >
    <side-bar class="sidebar-container" />
    <div class="main-container">
      <nav-bar />
      <app-main />
    </div>
  </div>
</template>

<script>
import { NavBar, SideBar, AppMain } from '../components'

export default {
  name: 'HeaderAsideLayout',
  components: {
    NavBar,
    SideBar,
    AppMain
  }
}
</script>

<style lang="less" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}

.main-container {
  min-height: 100vh;
  transition: margin-left 0.28s;
  margin-left: 256px;
  background-color: #f0f2f5;
}
</style>
