<template>
  <div class="pageButton">
      <ul>
          <li @click="prve(1)">上一页</li>
          <li
            v-for="(item,index) in list"
            :key="index"
            @click="changePage(item,index)"
            :class="pageClick == item?'active':''"
          >
              {{item}}
          </li>
          <li @click="next(1)">下一页</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'pageButton',
  data(){
      return{
          list:[1,2,3,4,5,6,7,'...'],
          pageClick:1
      }
  },
  methods:{
      changePage(item,index){
          this.$emit("changePage",item);
          if(item < 7&&item != "..."){
            this.pageClick = item;
            this.list = [1,2,3,4,5,6,7,'...']
          }
          else if(item>=7&&item != "..."){
              this.pageClick = item;
              this.list = [
                  1,
                  '...',
                  item-2,
                  item-1,
                  item,
                  item+1,
                  item+2,
                  "..."
              ]
          }
          else if(index === 1){
              this.prve(5)
          }else if(index === 7){
              this.next(5)
          }
      },
      prve(pageSize){
            let page = this.pageClick - pageSize;
            if(page>1&&page<7){
                this.list = [1,2,3,4,5,6,7,'...']
            }
            if(page > 7){
              this.list = [
                1,
                '...',
                page-2,
                page-1,
                page,
                page+1,
                page+2,
                "..."
            ];
          }
          this.$emit("changePage",page);
          this.pageClick = page;
      },
      next(pageSize){
            let page = this.pageClick + pageSize;
            if(page>1&&page<7){
                this.list = [1,2,3,4,5,6,7,'...']
            }else{
                this.list=[
                    1,
                    '...',
                    page-2,
                    page-1,
                    page,
                    page+1,
                    page+2,
                    "..."
                ]
            }
            this.$emit("changePage",page);
            this.pageClick = page;
      }
  }
}
</script>

<style lang="less" scoped>
.pageButton{
    width: 100%;
    margin: 20px auto;
    ul{
        display: flex;
        justify-content: center;
        li{
            padding: 10px 10px;
            cursor: pointer;
            &.active{
                background-color: #66ccff;
                border-radius: 5px;
            }
        }
    }
}
</style>
