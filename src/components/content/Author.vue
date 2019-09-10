<template>
  <div class="myAuthor">
      <header>作者</header>
      <section>
          <div class="img">
              <img :src="author.avatar_url" alt="">
          </div>
          <div class="name">
              昵称：{{author.loginname}}
          </div>
      </section>
      <section>
          <div class="create">
              <span>注册时间</span>
              <span>
                  {{author.create_at|time}}
              </span>
          </div>
      </section>
      <section>
          <div class="score">
              <span>积分：</span>
              <span>{{author.score}}</span>
          </div>
      </section>
  </div>
</template>

<script>
export default {
  name: 'Author',
  props:{
      author:Object
  },
  filters:{
        time(data){
        let myData = new Date(data);
        return myData.getFullYear()+"年"+(myData.getMonth()+1)+"月";
        }
    }
}
</script>

<style lang="less" scoped>
.myAuthor{
    border: 1px solid #ccc;
    box-shadow: 0 3px 20px 0 rgba(0, 0, 0, .05);
    border-radius: 10px;
    header{
        font-weight: bold;
        padding:10px 5px;
    }
    section{
        margin: 10px 10px;
        display: flex;
        line-height: 30px;
        .img{
            width: 30px;
            height: 30px;
            border-radius: 50%;
            overflow: hidden;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .name{
            margin-left:10px;
        }
    }
    @media screen and(max-width: 768px){
        display: none;
    }
}
</style>
