<template>
  <div class="header">
    <header>
        <div class="header_box">
            <div class="header_logo">
                <img src="../assets/imgs/cnodejs-logo.svg" alt="">
            </div>
            <div class="header_link">
                <a class="cnode-link" href="https://cnodejs.org">CNode社区官方版入口←</a>
                <button
                    class="iconfont nav-icon"
                    :class="isShow?'icon-cuo':'icon-quanbu'"
                    @click="showNav"
                >
                </button>
            </div>
        </div>
    </header>
    <transition name="slide">
        <nav
            class="nav-container"
            v-show="this.isShow&&this.$store.state.isMobile"
        >
            <my-nav/>
        </nav>
    </transition>
  </div>
</template>

<script>
import myNav from '../components/home/NavBar'
export default {
  name: 'myHeader',
  data(){
      return{
          isShow:false
      }
  },
  components:{
      myNav
  },
  methods:{
      showNav(){
          this.isShow=!this.isShow;
      }
  },
  mounted(){
    window.addEventListener('touchmove',()=>{
      this.isShow == false;
    })
  }
}
</script>

<style lang="less" scoped>
.header{
    width:100%;
    height: 60px;
    background-color: #fff;
    position: fixed;
    top: 0;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.05);
    z-index: 3;
    .nav-container{
        position: relative;
        text-align: center;
        padding: 10px 0;
        width: 100%;
        background-color: #fff;
        z-index: -1;
        border-top: 1px solid rgba(0, 0, 0, 0.05);
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
    }
    header{
        max-width: 1200px;
        margin: 0 auto;
        height: 60px;
        line-height: 60px;
        background-color: #fff;
        .header_box{
            display: flex;
            justify-content: space-between;
            margin: 0 50px;
            line-height: 60px;
            font-size: 16px;
            .header_logo{
                width: 100px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .cnode-link{
                display: block;
                width: auto;
                height: 60px;
                line-height: 60px;
                text-align: center;
                color: #000;
                font-weight: bold;
                margin-right: 5px;
                transition: all 1s;
                &:hover{
                    text-decoration: underline
                }
            }
            .nav-icon{
                height: 60px;
                background: #fff;
                border: none;
                display: none;
                outline: none;
            }
        }
    }
    @media screen and (max-width: 768px) {
        header {
            .header-logo {
                margin-left: 20px;
            }
            .header_box{
                .cnode-link {
                    display: none;
                }
                .header_link{
                    .nav-icon {
                        display: block;
                    }
                }
            }
        }
    }
    .slide-enter-active{
        animation: slide-down 0.4s ease-in-out;
    }
    .slide-leave-active{
        animation: slide-down 0.4s reverse ease-in-out;
    }

    @keyframes slide-down {
        from{
            transform: translateY(-100%);
        }
        to{
            transform: translateY(0);
        }
    }
}
</style>
