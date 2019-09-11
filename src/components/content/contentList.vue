<template>
  <div class="contentList">
      <div class="contentList_box">
        <div class="top">
          <div class="top_box">
            <div class="icon">
              <span v-if="Article.good" class="Essence">精华</span>
              <span v-else-if="Article.top" class="Topping">置顶</span>
              <span v-else class="other">{{tag[Article.tab]}}</span>
            </div>
            <div class="title">
              <h1>{{Article.title}}</h1>
            </div>
          </div>
          <div class="info">
            <div class="info_box">
              <ul>
                <li>
                  <span>发布于</span>
                  <span>{{Article.last_reply_at|time}}</span>
                </li>
                <li @click="toAuthor(Article.author.loginname)" class="author">
                  <span>作者</span>
                  <span>{{Article.author.loginname}}</span>
                </li>
                <li>
                  <span>{{Article.visit_count}}</span>
                  <span>次浏览</span>
                </li>
                <li>
                  <span>{{Article.reply_count}}</span>
                  <span>个评论</span>
                </li>
                <li>
                  <span>来自</span>
                  <span v-if="Article.tab == 'share'">分享</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="buttom">
          <div
            class="markdown-body article-content"
            v-html="Article.content"
          >
          </div>
        </div>
      </div>
      <div class="comment">
          <h1>评论--{{Article.reply_count}}个</h1>
          <div class="comment_box">
            <ul>
              <li v-for="(item,index) in Article.replies" :key="item.id">
                <div class="img">
                  <img :src="item.author.avatar_url" alt="">
                </div>
                <div class="commentMess">
                  <div class="commentMess_info">
                    <span class="name">{{item.author.loginname}}</span>
                    <span class="lou">{{index+1}}楼</span>
                    <span class="time">发表时间{{item.create_at|time}}</span>
                  </div>
                  <div v-html="item.content" class="content markdown-body">
                  </div>
                </div>
              </li>
            </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'contentList',
  props:{
    Article:Object
  },
  data(){
    return{
      tag: this.$store.state.tag
    }
  },
  filters:{
      time(data){
      let myData = new Date(data);
      return myData.getFullYear()+"年"+(myData.getMonth()+1)+"月";
      }
  },
  methods:{
    toAuthor(aothor){
      this.$router.push({
          name:"author",
          query:{
              name:aothor
          }
      })
    }
  },
  mounted(){
    // console.log(this.Article)
  }
  
}
</script>

<style lang="less" scoped>
.contentList{
  .contentList_box{
    padding: 20px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 3px 20px 0 rgba(0, 0, 0, .05);
    background-color: #fff;
    .top{
      padding-bottom: 10px;
      border-bottom: 1px solid #ccc;
      .top_box{
        display: flex;
        .icon{
          span{
            display: inline-block;
            line-height: 25px;
          }
          .Essence{
              padding:0 10px;
              border-radius: 10px;
              background-color: #e6d81f;
          }
          .Topping{
              padding:0 10px;
              border-radius: 10px;
              background-color: #66ccff;
          }
          .other{
              padding:0 10px;
              border-radius: 10px;
              background-color: rgb(63, 90, 105);
          }
        }
        .title{
          margin-left: 10px;
          h1{
            font-weight: bold;
            font-size: 23px;
          }
        }
      }
      .info{
        font-size: 13px;
        color:rgb(92, 91, 91);
        .info_box{
          ul{
            display: flex;
            padding:10px 0;
            li{
              margin-right: 10px;
            }
            .author:hover{
                cursor: pointer;
                color: #66ccff;
            }
          }
        }
      }
    }
    .buttom{
      .content{

      }
    }
  }
  .comment{
    margin: 20px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 3px 20px 0 rgba(0, 0, 0, .05);
    background-color: #fff;
    h1{
      font-size: 18px;
      padding:10px 10px;
      font-weight: bolder;
    }
    .comment_box{
      padding:10px 10px;
      ul{
        li{
          display: flex;
          padding-bottom: 30px;
          margin-bottom: 10px;
          border-bottom: 1px solid #ccc;
          .img{
            width: 40px;
            height: 40px;
            border-radius: 10px;
            overflow: hidden;
            img{
              width: 100%;
            }
          }
          .commentMess{
            font-size: 13px;
            margin-left: 20px;
            .commentMess_info{
              margin-bottom: 30px;
              .name{
                color: #ccc;
              }
              .lou{
                color: #66ccff;
              }
              .time{
                padding-left: 10px;
              }
            }
            .content{
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}
</style>
