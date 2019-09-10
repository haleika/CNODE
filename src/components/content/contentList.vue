<template>
  <div class="contentList">
      <div class="contentList">
            contentList
      </div>
      <div class="comment">
          comment
      </div>
  </div>
</template>

<script>
export default {
  name: 'contentList',
  filters:{
        time(data){
        let myData = new Date(data);
        return myData.getFullYear()+"年"+(myData.getMonth()+1)+"月";
        }
    }
}
</script>

<style lang="less" scoped>
.contentList{
}
</style>
