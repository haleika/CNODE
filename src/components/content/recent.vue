<template>
  <div class="recent">
      <div class="top">最近文章</div>
      <ul>
          <li
            v-for="item in recent"
            :key="item.id"
            @click="toPage(item.id,item.author.loginname)"
          >
              <div class="recent_item">
                <div class="title">
                    {{item.title}}
                </div>
                <div class="time">
                    <span>最后回复时间:</span>
                    <span>{{item.last_reply_at|time}}</span>
                </div>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'recent',
  props:{
    recent:Array
  },
  filters:{
        time(data){
        let myData = new Date(data);
        return myData.getFullYear()+"年"+(myData.getMonth()+1)+"月";
        }
    },
    methods:{
        toPage(ID,Author){
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
.recent{
    margin-top:20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 3px 20px 0 rgba(0, 0, 0, .05);
    .top{
        font-weight: bold;
        padding:10px 10px;
    }
    ul{
        li{
            width: 100%;
            border-bottom: 1px solid #ccc;
            padding-bottom:10px;
            &:hover{
                background-color: #ccc;
                cursor: pointer;
            }
            .recent_item{
                .title{
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                    padding:10px 10px;
                }
                .time{
                    padding-left:10px;
                    padding-bottom: 10px;
                }
            }
        }
    }
}
</style>
