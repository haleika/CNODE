<template>
  <div class="myNav">
      <nav>
          <ul>
              <li
                v-for="item in list"
                :key="item.id"
                :class="tab == item.id?'nav_item active':'nav_item'"
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
          list:this.$store.state.navList,
          tab:this.$route.params.tab ? this.$route.params.tab : 'all',
      }
  },
  methods:{
      selected(tabId){
          this.tab = tabId
      }
  },
  mounted(){
      console.log(this.tab)
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
    }
    .active{
        background-color: #66ccff;
        color: #fff;
    }
}
</style>
