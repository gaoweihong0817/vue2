<template>
  <div class="go">
    <section>
      <van-nav-bar title="城市选择" left-arrow></van-nav-bar>
      <van-search v-model="value" placeholder="请输入搜索关键词" background="#00c5c3" @click="up" />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    up() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped lang="scss">
.go {
  section {
    height: 100px;
    background: #00c5c3;
    .van-nav-bar {
      background: #00c5c3;
    }
  }
}
</style>