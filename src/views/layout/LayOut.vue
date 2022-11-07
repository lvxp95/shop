<template>
    <div>

        <h1>
            <RouterLink to="/index">角色列表</RouterLink>
            <RouterLink to="/user">用户列表</RouterLink>
        </h1>



        

        <h1>侧边栏</h1>
        <RouterView></RouterView>
    </div>
</template>

<script>
export default {
    name: "layout-index",

}
</script>

<style scoped>

</style>
