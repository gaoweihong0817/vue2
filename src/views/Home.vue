<template>
  <div class="home" id="demo">
    <!-- header头部 -->
    <section>
      <van-icon name="arrow-left" />
      <van-search v-model="value" placeholder="请输入搜索关键词" background="#00c5c3" />
      <div class="div_beiji" @click="go">
        北京
        <span>▲</span>
      </div>
    </section>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,key) in List" :key="key">
        <img :src="item.imgUrl" alt />
      </van-swipe-item>
    </van-swipe>
    <!-- 宫格 -->
    <div class="img">
      <van-swipe>
        <van-swipe-item>
          <ul>
            <li v-for="(item,key) in Img" :key="key" v-show="item.id !=='0009'">
              <div>
                <img :src="item.imgUrl" alt class="url" />
                <p>{{item.desc}}</p>
              </div>
            </li>
          </ul>
        </van-swipe-item>

        <van-swipe-item>
          <ul class="ulList">
            <li v-for="(item,key) in Img" :key="key" v-show="item.id ==='0009'">
              <div>
                <img :src="item.imgUrl" alt class="url" />
                <p>{{item.desc}}</p>
              </div>
            </li>
          </ul>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!--  -->
    <nav>热销推荐</nav>
    <!-- <button @click="aaa">按钮</button> -->

    <dl v-for="(item,key) in dl" :key="key" class="Dl">
      <dt>
        <img :src="item.imgUrl" alt class="ImgDl" />
      </dt>
      <dd>
        <h6>{{item.title}}</h6>
        <p>{{item.desc}}</p>
      
          <span @click="edt(item.id)">查看详情</span>
      
      </dd>
    </dl>

    <nav>周末去哪儿</nav>
    <dl v-for="(item,key) in dlList" :key="key" class="DlTwo">
      <dt>
        <img :src="item.imgUrl" alt class="ImgDl" />
      </dt>
      <dd>
        <h6>{{item.title}}</h6>
        <p>{{item.desc}}</p>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      value: "",
      List: [],
      Img: [],
      dl: [],
      dlList: [],
      //动画
      show: true
    };
  },
  methods: {
    async getList() {
      let res = await this.$axios.get("/index.json");
      // console.log(res);
      this.List = res.data.data.swiperList;
      this.Img = res.data.data.iconList;
      this.dl = res.data.data.recommendList;
      this.dlList = res.data.data.weekendList;
    },
    go() {
      this.$router.push("/About");
    },
    edt(id) {
      // console.log(id);
      this.$router.push(`/edt?id=${id}`);
    }
  },
  activated() {
    console.log("home 组件激活拉");
     if(sessionStorage.getItem('scrollH')){
        document.getElementById('demo').scrollTop=sessionStorage.getItem('scrollH')
    }
  },
  deactivated() {
    console.log("home 组件销毁拉");
  },
  beforeRouteLeave(to,from,next){  //离开页面之前将高度存储到sessionStorage。这里不建议用localStorage，因为session在关闭浏览器时会自动清除，而local则需要手动清除，有点麻烦。
    sessionStorage.setItem('scrollH',document.getElementById('demo').scrollTop)
    next()
},

  mounted() {
    this.getList();
  }
};
</script>


<style lang="scss" scoped>
#demo{
  width: 100%;
  height: 500px;
  border: 1px solid #000;
  overflow: auto;
}
section {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background: #00c5c3;
  height: 40px;
  .van-icon {
    font-size: 24px;
  }
  .van-search {
    height: 40px;
  }
  .div_beiji {
    background: #00c5c3;
    border: none;
    font-size: 18px;
    color: #fff;
    height: 40px;
    line-height: 40px;
  }
}
// 轮播图
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
}
.my-swipe {
  width: 100%;
  height: 160px;
  img {
    width: 100%;
    height: 100%;
  }
}

//宫格
.custom-indicator {
  height: 200px;
  position: absolute;
  top: 20px;
}
ul {
  height: 170px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  margin: 1%;
  li {
    width: 22%;
    padding: 2%;
    box-sizing: border-box;
    text-align: center;
  }
}
.url {
  width: 50px;
  height: 50px;
}
nav {
  height: 40px;
  background: #ddd;
  line-height: 40px;
  text-indent: 20px;
  font-size: 18px;
}
.Dl {
  display: flex;
  padding: 1%;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  .ImgDl {
    width: 80px;
    height: 80px;
  }
  dd {
    margin-left: 10px;
    h6 {
      font-size: 20px;
      margin-bottom: 6px;
    }
    p {
      color: #ccc;
      margin-bottom: 6px;
    }
    span {
      display: block;
      width: 60px;
      height: 25px;
      line-height: 25px;
      background: rgb(218, 181, 20);
      border-radius: 4px;
      text-align: center;
      color: #fff;
      font-size: 15px;
    }
  }
}

.DlTwo {
  width: 100%;
  height: 210px;
  dt {
    img {
      width: 100%;
      height: 140px;
    }
  }
  dd {
    h6 {
      text-indent: 10px;
      font-size: 20px;
      margin-bottom: 6px;
    }
    p {
      color: #ccc;
      font-size: 16px;
      text-indent: 10px;
    }
  }
}

.ulList {
  margin: -40px -136px;
  padding: 0px;
}


</style>
