<template>
  <div class="myHomeItem">
     <ul>
         <li
            v-for="item in article"
            :key="item.id"
            class="listItem"
            @click="toContent(item.id,item.author.loginname)"
          >
             <div class="left">
                <div class="img">
                     <img :src="item.author.avatar_url" alt="">
                </div>
                <div class="tag">
                    <span v-if="item.good" class="Essence">精华</span>
                    <span v-else-if="item.top" class="Topping">置顶</span>
                    <span v-else class="other">{{tag[item.tab]}}</span>
                </div>
                <div class="title">
                    {{item.title|titleFilter}}
                </div>
             </div>
             <div class="right">
                <div class="read">
                     <span>评论量/阅读量</span>
                     <span>{{item.reply_count}}/{{item.visit_count}}</span>
                </div>
                <div class="time">
                    <span>发表时间：</span>
                    <span>{{item.create_at|time}}</span>
                </div>
             </div>
         </li>
     </ul>
  </div>
</template>

<script>
export default {
  name: 'myHomeItem',
  props:{
      article:Array
  },
  filters:{
      time(data){
        let myData = new Date(data);
        return myData.getFullYear()+"年"+(myData.getMonth()+1)+"月";
      },
      titleFilter(title){
          let len = title.length;
          if(len>20){
              return title.slice(0,20)+"..."
          }else{
              return title;
          }
      }
  },
  data(){
      return{
          tag: this.$store.state.tag
      }
  },
  methods:{
      toContent(ID,Author){
          this.$router.push({
              name:"content",
              query:{
                  id: ID,
                  author:Author
              }
          })
      }
  }
}
</script>

<style lang="less" scoped>
.myHomeItem{
    overflow: hidden;
    .listItem{
        width: 95%;
        display: flex;
        justify-content: space-between;
        font-size: 13px;
        line-height: 30px;
        margin: 5px 5px;
        padding:10px 20px;
        border-bottom: 1px solid rgb(192, 191, 191);
        .left{
            display: flex;
            .img{
                width: 30px;
                height: 30px;
                overflow: hidden;
                border-radius: 50%;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .tag{
                margin: 0 10px;
                span{
                    display:inline-block;
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
        }
        .right{
            display: flex;
            padding-right: 10px;
            @media screen and(max-width:768px){
                display: none;
            }
        }
    }
}
</style>
