<template>
    <div>
        <h1>vue3生命周期</h1>
        <div id="dom">{{msg}}</div>
        <button @input ="change">修改</button>
    </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from 'vue';


export default {
    name: "about-index",
    setup(){

        const data = reactive({
            msg:"你好!"
        })
        onBeforeMount(()=>{
            console.log("onBeforeMount", document.querySelector("#dom"));
        })
        onMounted(()=>{
            console.log("onMounted", document.querySelector("#dom"));
            setTimeout(()=>{
                data.msg = "我更好"
            },2000)
        })
        onBeforeUpdate(()=>{
            console.log("onBeforeUpdate", document.querySelector("#dom"));
        })
        onUpdated(()=>{
            console.log("onUpdated", document.querySelector("#dom"));
        })

        return{
            ...toRefs(data)
        }
    },
}
</script>

<style scoped>

</style>
