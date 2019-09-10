<template>
  <div class="Content">
      <div class="Content_box">
          <div class="Content_left">  
            <author :author="AuthorList"/>
            <recent :recent="AuthorList.recent_topics"/>
            <reply :reply="AuthorList.recent_topics"/>
          </div>
          <div class="Content_right">
              <contentList/>
          </div>
      </div>
  </div>
</template>

<script>
import { requestContent,requestAuthor } from "@/API/getAPI"
import Author from "../components/content/Author"
import Recent from "../components/content/recent"
import Reply from "../components/content/reply"
import ContentList from "../components/content/contentList"


export default {
  name: 'Content',
  data(){
      return{
          AuthorList:{},
          Article:{}
      }
  },
  components:{
      Author,
      Recent,
      Reply,
      ContentList
  },
  methods:{
      getContent(){
          requestContent(this.$route.query.id)
            .then(res=>{
                // console.log(res)
                this.Article = res;
            })
      },
      getAuthor(){
          requestAuthor(this.$route.query.author)
            .then(res=>{
                // console.log(res)
                this.AuthorList = res;
            })
      }
  },
  mounted(){
      this.getContent();
      this.getAuthor();
  },
  watch: {
    "$route.query"() {
      this.getContent();
      this.getAuthor();
    }
  }
}
</script>

<style lang="less" scoped>
.Content{
    margin-top: 80px;
    .Content_box{
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        .Content_left{
            width: 20%;
            @media screen and(max-width:768px){
                display: none;
            }
        }
    }
}
</style>
