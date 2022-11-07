<template>
  <div>
    <p>{{name}}</p>
    <p>{{info}}</p>
    <p v-html="info"></p>
    <p :data="dataVal">我有属性data</p>
    <p class="text" :class="{'red':isRed}">我是红色</p>
    <p v-if="!isTrue">我是v-if</p>
    <p v-show="!isTrue">我是v-show</p>
    <ul>
      <li :key="item.userName" v-for="item in userList">{{item.userName}}</li>
    </ul>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
  export default {
    name: "hello-index",
    setup() {
      const data = reactive({
        name:"小红",
        age:20,
        info: "<i>我是斜体字</i>",
        dataVal: 20,
        isRed: false ,
        isTrue: true,
        userList: [
          {
            userName:"小红"
          },
          {
            userName:"小明"
          },
          {
            userName:"李明"
          },
          {
            userName:"韩梅梅"
          },
        ]
      })

      return {
        ...toRefs(data)
      }
    }

  }
</script>

<style>
  .text{
    color: aqua;
  }
  .red{
    color: red;
  }
</style>