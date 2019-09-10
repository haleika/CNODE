<template>
  <div class="myHomeItem">
     <ul>
         <li>
             <div class="top">
                 <span>标签</span>
                 <p class="title">题目</p>
             </div>
             <div class="mid">
                 <p>内容</p>
             </div>
             <div class="bottom">
                 <div class="read">
                     <span>评论量/阅读量</span>
                     <span>100/2000</span>
                 </div>
                 <div class="authod">
                     <div class="img">
                         <img src="" alt="">
                     </div>
                     <div class="name">
                         名字
                     </div>
                 </div>
             </div>
         </li>
         <li>2</li>
     </ul>
  </div>
</template>

<script>
export default {
  name: 'myHomeItem',
}
</script>

<style lang="less" scoped>
.myHomeItem{
    width: 100px;
}
</style>
