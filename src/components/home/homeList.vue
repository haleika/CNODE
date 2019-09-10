<template>
  <div class="myHomeList">
      <home-item/>
  </div>
</template>

<script>
import homeItem from "../home/homeItem"
export default {
  name: 'HomeList',
  components:{
      homeItem
  }
}
</script>

<style lang="less" scoped>
.myHomeList{
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 3px 20px 0 rgba(0, 0, 0, .05);
    position: relative;
    @media screen and (max-width: 768px){
        margin: 0 auto;
        width: 95%;
    }
}
</style>
