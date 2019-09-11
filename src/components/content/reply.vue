<template>
  <div class="Reply">
      <div style="font-weight: bold;margin:10px;">最近回复</div>
      <ul>
          <li
            v-for="item in reply"
            :key="item.id"
            @click="toPage(item.id,item.author.loginname)"
          >
              <div class="title">{{item.title}}</div>
              <div class="last">
                <span>最后回复时间：</span>
                <span>{{item.last_reply_at|time}}</span>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Reply',
  props:{
    reply:Array
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
        window.scrollTo(0,0)
    }
  }
}
</script>

<style lang="less" scoped>
.Reply{
    margin-top:20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 3px 20px 0 rgba(0, 0, 0, .05);
    background-color: #fff;
    ul{
      li{
        width: 100%;
        margin: 10px 0;
        line-height: 30px;
        border-bottom: 1px solid #ccc;
        &:hover{
            background-color: #ccc;
            cursor: pointer;
        }
        .title{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding:0 10px;
        }
        .last{
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          padding:0 10px;
        }
      }
    }
}
</style>
