<template>
  <div class="Content">
      <div>
          <div class="Content_box" v-if="show1&&show2">
            <div class="Content_left">  
                <author :author="AuthorList"/>
                <recent :recent="AuthorList.recent_topics"/>
                <reply :reply="AuthorList.recent_topics"/>
            </div>
            <div class="Content_right">
                <content-list :Article="Article"/>
            </div>
          </div>
          <div class="Content_box" v-else>拼命加载</div>
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
          Article:{},
          show1:false,
          show2:false
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
                this.show1=true
            })
      },
      getAuthor(){
          requestAuthor(this.$route.query.author)
            .then(res=>{
                // console.log(res)
                this.AuthorList = res;
                this.show2=true
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
    padding-top: 80px;
    .Content_box{
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        .Content_left{
            width: 20%;
            margin-right: 20px;
            @media screen and(max-width:768px){
                display: none;
            }
        }
        .Content_right{
            width: 95%;
            margin: 0 auto;
        }
    }
}
</style>
