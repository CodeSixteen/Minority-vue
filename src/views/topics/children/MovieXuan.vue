<template>
  <div class="hello">
    <!--这个里面是布局-->
    <div class="header">
      <!--头部布局-->
      <div class="header_left">
        <p>
          <img src="~@/icons/common/logo.svg" />
        </p>
      </div>
      <div class="header_mo">
        <p>新华国际影城大钟寺店</p>
      </div>
      <div class="header_right">
        <p>
          <img src="~@/icons/common/logo.svg" />
        </p>
      </div>
    </div>
    <div class="section">
      <div class="sec_to">
        <div class="ri_to">
          <p class="text_bl">千与千寻</p>
          <span class="tui" @click="tui">退出登录</span>
          <p class="text_hu">今天06-25 23:25~01:30(日语2D)</p>
        </div>
        <div class="ri_bu">
          <ul>
            <!--座位解释布局-->
            <li>
              <img src="~@/icons/common/logo.svg" /> 可选
            </li>
            <li>
              <img src="~@/icons/common/logo.svg" /> 已售
            </li>
            <li>
              <img src="~@/icons/common/logo.svg" /> 最佳观影区
            </li>
          </ul>
        </div>
      </div>
      <!--这个里面是布局-->
      <div class="sec_bu">
        <div class="sec_le">
          <ul>
            <!--这个是左侧边无功能-->
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
          </ul>
        </div>
        <div class="sec_ri">
          <div class="ss_t">
            <img src="~@/icons/common/logo.svg" />
          </div>
          <div class="ss_b">
            <ul class="a" v-for="(item,index) in ticket" :key="index">
              <!--渲染每一个座位-->
              <li v-for="(v,i) in item" :key="i" @click="chose(v)" class="b" :class="seletClass(v)"></li>
            </ul>
          </div>
          <div class="good">​</div>
        </div>
      </div>
      <div class="add" v-if="selected.length>0">
        <ul>
          <!--你选择的排数-->
          <li v-for="(item,index) in selected" :key="index">{{item.x}}排{{item.y}}座</li>
        </ul>​
      </div>
    </div>

    <div class="footer">
      <div class="footer_top">
        <div class="tj">
          <p>推荐作为</p>
        </div>
        <div class="sectii">
          <!--多选区-->
          <ul class>
            <li @click="conman(1)" class="tuijian">1人</li>
            <!--点击传递一个数-->
            <li @click="conman(2)" class="tuijian">2人</li>
            <li @click="conman(3)" class="tuijian">3人</li>
            <li @click="conman(4)" class="tuijian">4人</li>
          </ul>
        </div>
      </div>
      <div class="footer_mo">
        <!--购买按钮-->
        <button class="xz" @click="goto" :disabled="isdas" :id="isdas==true?'lss':'cla'">{{sum}}请先选座</button>
      </div>
      <div class="footer_bu">
        <img src="~@/icons/common/logo.svg" />
      </div>
    </div>
  </div>
  <!--json说明//0代表可以选座，1代表自己已选，2代表已被别人买走，3代表过道-->
</template> ​

<script>
export default {
  name: "HelloWorld",

  data() {
    return {
      isdas: true, //判断按钮是否锁定

      ticket: [
        {
          code: 200,

          data: [
            [
              {
                state: 0,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              },

              {
                state: 3,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              },

              {
                state: 0,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              },

              {
                state: 0,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              },

              {
                state: 0,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              }
            ],

            [
              {
                state: 0,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              },

              {
                state: 3,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              },

              {
                state: 0,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              },

              {
                state: 0,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              },

              {
                state: 0,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              }
            ],

            [
              {
                state: 0,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              },

              {
                state: 3,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              },

              {
                state: 0,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              },

              {
                state: 0,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              },

              {
                state: 0,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              }
            ],

            [
              {
                state: 0,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              },

              {
                state: 3,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              },

              {
                state: 0,
                isgood: true
              },
              {
                state: 0,
                isgood: true
              },

              {
                state: 0,
                isgood: true
              },
              {
                state: 0,
                isgood: true
              },

              {
                state: 0,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              }
            ],

            [
              {
                state: 0,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              },

              {
                state: 3,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              },

              {
                state: 0,
                isgood: true
              },
              {
                state: 0,
                isgood: true
              },

              {
                state: 0,
                isgood: true
              },
              {
                state: 0,
                isgood: true
              },

              {
                state: 0,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              }
            ],

            [
              {
                state: 0,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              },

              {
                state: 3,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              },

              {
                state: 0,
                isgood: true
              },
              {
                state: 0,
                isgood: true
              },

              {
                state: 0,
                isgood: true
              },
              {
                state: 0,
                isgood: true
              },

              {
                state: 0,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              }
            ],

            [
              {
                state: 2,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              },

              {
                state: 3,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              },

              {
                state: 0,
                isgood: true
              },
              {
                state: 2,
                isgood: false
              },

              {
                state: 2,
                isgood: false
              },
              {
                state: 0,
                isgood: true
              },

              {
                state: 0,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              }
            ],

            [
              {
                state: 0,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              },

              {
                state: 3,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              },

              {
                state: 2,
                isgood: false
              },
              {
                state: 0,
                isgood: true
              },

              {
                state: 0,
                isgood: true
              },
              {
                state: 0,
                isgood: true
              },

              {
                state: 0,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              }
            ],

            [
              {
                state: 0,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              },

              {
                state: 3,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              },

              {
                state: 0,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              },

              {
                state: 0,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              },

              {
                state: 0,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              }
            ],

            [
              {
                state: 0,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              },

              {
                state: 3,
                isgood: false
              },
              {
                state: 3,
                isgood: false
              },

              {
                state: 0,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              },

              {
                state: 0,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              },

              {
                state: 0,
                isgood: false
              },
              {
                state: 0,
                isgood: false
              }
            ]
          ]
        }
      ] //json数据
    };
  },

  computed: {
    sum() {
      return this.selected.length * 40; //计算总价
    },

    selected() {
      //获取座位的位置

      var arr = []; //定义一个空数组，用来渲染你选的那一行那一列的座位

      for (let i = 0; i < this.ticket.length; i++) {
        //遍历你请求到的json这里是排数

        for (let j = 0; j < this.ticket[i].length; j++) {
          //这里是列数

          if (this.ticket[i][j].state == 1) {
            //判断是否等于1，表名座位已经被你选择了

            var tem = {
              x: i + 1,
              y: j + 1
            }; //找到你选座的第几排第几列

            arr.push(tem); //放入空数组中

            console.log(arr);
          }
        }
      }

      if (arr.length == 0) {
        //判断一下数组中有没有内容你是否选票

        this.isdas = true; //让你的按钮锁定
      }

      return arr;
    }
  },

  created() {
    // this.axios.get("../../static/new.json").then(res => {
    //   if (res.data.code == 1) {
    //     //请求成功

    //     console.log(res.data.data);

    //     this.ticket = res.data.data;
    //   } else {
    //     console.log("请求的数据不见了，去看一下你的json文件");
    //   }
    // });
  },

  methods: {
    tui() {
      //点击跳转退出界面
      console.log('推出了');
    //   this.$router.push("tui");
    },

    goto() {
      //登陆页面

    //   if (sessionStorage.getItem("islog") == "true") {
    //     //根据islog的值true或false判断是否登陆

    //     let v = this.sum; //价格

    //     this.$router.push({
    //       //跳转支付页面，传递一个总的价格的参数

    //       path: "/zf",

    //       query: {
    //         user: v
    //       }
    //     });
    //   } else {
    //     //没有登陆跳转登陆页面

    //     this.$router.push("log");
    //   }
    },

    conman(num) {
      //推荐人数

      this.isdas = false; //sum是conman里传递的数

      let n = 0; //一个临时变量

      for (let i = 0; i < this.ticket.length; i++) {
        //遍历行

        for (let j = 0; j < this.ticket[i].length; j++) {
          //遍历列

          if (
            this.ticket[i][j].isgood == true &&
            this.ticket[i][j].state == 0
          ) {
            //判断你json数据的isgood等于true并且state等于0座位可以选择

            this.ticket[i][j].state = 1; //当满足时代表这个座位是你选中的，让他变成已选

            n++; //每选中让state变成选中一个让n加一

            console.log(n, num);

            if (n >= num) {
              //n用来限制for循环的如果n大于或者等于num则证明已经选中了你选的个数，这个时候跳出循环

              return;
            }
          }
        }
      }

      //如果n还是小于num。说明推荐观影区票不够，

      if (n < num) {
        for (let i = 0; i < this.ticket.length; i++) {
          //遍历每一行

          for (let j = 0; j < this.ticket[i].length; j++) {
            //遍历每一列

            if (this.ticket[i][j].state == 0) {
              //判断座位是否为可选

              this.ticket[i][j].state = 1; //可选则选中座位

              n++;

              console.log(n);

              if (n >= num) {
                return;
              }
            }
          }
        }
      }
    },

    chose(v) {
      //单独点击选座

      if (v.state == 0) {
        //v.state是判断json文件的state

        this.isdas = false; //判断是否选票，没有选锁定button，不能点击

        v.state = 1;
      } else if (v.state == 1) {
        //v.state为1证明还有座位

        v.state = 0; //当你选了之后让他变成0
      } else if (v.state == 3) {
        //等于3证明已经卖出，不能选择

        alert("座位bu可以选");
      } else {
      }
    },

    seletClass(v) {
      //样式

      if (v.state == 2) {
        //判断json文件的state返回的数配对不同的class或id样式实现点击座位的变化样式

        return "red";
      } else if (v.state == 1) {
        return "blue";
      } else if (v.state == 3) {
        return "hidden";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
img{
  width: 24px;
  background-color: red;
}
</style>