<template>
  <div class="home">
    <div class="home_container">
      <aside>
        <nav-bar/>
      </aside>
      <div class="homeList">
        <home-list/>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "../components/home/NavBar"
import homeList from "../components/home/HomeList"


export default {
  name: 'home',
  components:{
    navBar,
    homeList
  }
}
</script>

<style lang="less" scoped>
.home{
  padding-top: 80px;
  .home_container{
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .myNav{
      width: 200px;
      text-align: center;
      border-radius: 5px;
      box-shadow: 0 3px 20px 0 rgba(0, 0, 0, .05);
      margin-bottom:20px;
      margin-right: 20px;
      @media screen and (max-width: 768px){
          display: none;
      }
    }
    .homeList{
      width: 100%;
    }
  }
  
}
</style>
