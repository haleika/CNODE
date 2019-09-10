<template>
  <div class="myHomeList">
      <home-item :article="article" v-if="dataSueccess"/>
      <div v-else>拼命加载</div>
  </div>
</template>

<script>
import homeItem from "../home/homeItem"
import { requestTopic } from '@/API/getApi';
export default {
  name: 'HomeList',
  components:{
      homeItem
  },
  data(){
    return{
      article:[],
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
    }
  },
  watch:{
    '$route.params.tab'(newTab){
      this.getData({
        tab:newTab,
        page:1
      })
    }
  },
  mounted(){
    this.getData({
        tab:this.$store.state.pageSelect,
        page:1
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
    @media screen and (max-width: 768px){
        margin: 0 auto;
        width: 95%;
    }
}
</style>
