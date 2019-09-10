<template>
  <div id="app">
    <my-header/>
    <router-view/>
  </div>
</template>

<script>
import myHeader from "@/common/Header";
export default {
  name: 'App',
  components:{
    myHeader
  },
  created(){
    this.getScreen();
  },
  methods:{
    getScreen(){
        let clientWidth =
        document.documentElement.clientWidth || document.body.clientHeight;
        if(clientWidth < 768){
          this.$store.commit("SET_MOBLIE",true)
        }else{
          this.$store.commit("SET_MOBLIE",false)
        }
    },
    setMobile(){
      addEventListener('resize',()=>{
        this.getScreen();
      })
    }
  },
  mounted(){
    this.setMobile();
  }
}
</script>

<style>
#app{
  /* background-color: #333; */
}
</style>
