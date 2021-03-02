<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive :include="home">
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      transitionName: "slide-left"
    };
  },
  watch: {
    $route(to, from) {
      // 通过判断路由自定义的级别来判断是转入还是转出

      if (to.meta.level > from.meta.level) {
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    }
  }
};
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
//动画
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 0.5s;
  width: 100%;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
