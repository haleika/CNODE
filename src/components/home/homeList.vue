<template>
  <div class="myHomeList">
      <div v-if="dataSueccess">
        <home-item :article="article"/>
        <page-button @changePage="changePage"/>
      </div>
      <div v-else>拼命加载</div>
  </div>
</template>

<script>
import homeItem from "../home/homeItem"
import pageButton from './page'
import { requestTopic } from '@/API/getAPI';
export default {
  name: 'HomeList',
  components:{
    homeItem,
    pageButton
  },
  data(){
    return{
      article:[],
      pageIndex:1,
      dataSueccess:false
    }
  },
  methods:{
    getData(queryParams){
      //获取数据
      requestTopic(queryParams)
        .then((res)=>{
          this.article = res;
          this.dataSueccess = true;
        })
    },
    changePage(item){
      this.pageIndex = item;
    }
  },
  watch:{
    '$route.params.tab'(newTab){
      this.getData({
        tab:newTab,
        page:this.pageIndex
      })
    },
    pageIndex(num){
      this.getData({
        tab:this.$store.state.pageSelect,
        page:num
      })
    }
  },
  mounted(){
    this.getData({
        tab:this.$store.state.pageSelect,
        page:this.pageIndex
      })
  }
}
</script>

<style lang="less" scoped>
.myHomeList{
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 3px 20px 0 rgba(0, 0, 0, .05);
    position: relative;
    background-color: #fff;
    @media screen and (max-width: 768px){
        margin: 0 auto;
        width: 95%;
    }
}
</style>
