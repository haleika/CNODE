<template>
  <div class="myNav">
      <nav>
          <ul>
              <li
                v-for="item in list"
                :key="item.id"
                :class="$store.state.pageSelect == item.id?'nav_item active':'nav_item'"
                @click="selected(item.id)"
              >
                  <i
                    class="iconfont"
                    style="font-size:18px;"
                    v-html="item.icon"
                  ></i>
                  {{item.name}}
              </li>
          </ul>
      </nav>
  </div>
</template>

<script>
export default {
  name: 'myNav',
  data(){
      return{
          list:this.$store.state.navList
      }
  },
  methods:{
      selected(tabId){
          this.$router.push(({
                name:'home',
                params:{tab:tabId},
            }))
          this.$store.commit("SET_Page",tabId)
      },
      getUrl(newUrl){
        this.$store.commit("SET_Page",newUrl.tab)
      }
  },
  watch:{
      "$route.params"(newUrl){
          this.getUrl(newUrl)
      }
  },
  created(){
      this.getUrl(this.$route.params)
  }
}
</script>

<style lang="less" scoped>
.myNav{
    background-color: #fff;
    padding: 5px 0;
    .nav_item{
        padding: 15px 0;
        margin: 5px auto;
        width: 80%;
        font-weight: bold;
        border-radius: 5px;
        &:hover{
            cursor: pointer;
        }
    }
    .active{
        background-color: #66ccff;
        color: #fff;
    }
}
</style>
