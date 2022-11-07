
<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
            <RouterLink to="/index">角色列表</RouterLink>
            <RouterLink to="/user">用户列表</RouterLink>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
export default {
    name: "layout-index",

}
</script>

<style scoped>
.el-container {
    height: 100vh;
}
.el-header{
    background: blue;
}
.el-aside{
    background: black;
}
</style>
