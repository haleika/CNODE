<template>
  <div class="AuthorInfo">
      <div class="con">
        <author :author="AuthorList"/>
        <recent :recent="AuthorList.recent_topics"/>
        <reply :reply="AuthorList.recent_topics"/>
      </div>
  </div>
</template>

<script>
import { requestAuthor } from "@/API/getAPI"
import Author from "../components/content/Author"
import Recent from "../components/content/recent"
import Reply from "../components/content/reply"
export default {
  name: 'AuthorInfo',
  components:{
      Author,
      Recent,
      Reply
  },
  data(){
    return{
      AuthorList:{}
    }
  },
  methods:{
      getAuthor(){
          requestAuthor(this.$route.query.name)
            .then(res=>{
                this.AuthorList = res;
            })
      }
  },
  mounted(){
    this.getAuthor()
  },
}
</script>

<style lang="less" scoped>
.AuthorInfo{
  max-width: 1200px;
  padding: 80px 0;
  margin: 0 auto;
  .con{
    width: 100%;
  }
  @media screen and(max-width:768px){
    .con{
      margin: 0 auto;
      width: 95%;
    }
  }
}
</style>
