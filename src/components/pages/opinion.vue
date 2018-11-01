<template>
  <div>
    <div class="row mt-5">
      <div class="col-lg-6 col-md-8 col-sm-6 pb-3">
        <div id="INPUT_BOX">
          <div class="BOX_TOP">
            <a href="#" class="X"></a>
            <div class="BOX_BG">
              <p class="TITLE" :style="{color:title.colorPick}">{{title.text}}</p>
              <p class="content" :style="{color:content.colorPick}">{{content.text}}</p>
              <form action="" class="wq-form" id="form">
                <div class="wq-group">
                  <div class="wq-datetime-group">
                    <ul class="FORM">
                      <li style="width:100%;">
                        <input type="text" name="NickName1" class="wq-input" placeholder="請輸入您的姓名" />
                      </li>
                      <li style="width:100%;">
                        <input type="text" name="email" class="wq-input" placeholder="信箱" />
                      </li>
                      <li style="width:100%;">
                        <div class="styled-select">
                          <select class="wq-select wq-extra" id="_career_type" name="career_type">
                            <option v-for="(item,idx) in items" :key="idx" :value="item.value">{{item.text}}</option>
                          </select>
                        </div>
                      </li>

                      <textarea class="wq-area" name="" id="" cols="10" rows="5"></textarea>

                    </ul>
                  </div>
                </div>
              </form>
              <div class="e_BT">
                <ul class="TWO">
                  <li>
                    <a href="#" id="BT_COLOUR_2" class="BT_COLOUR" v-if="!button.isOne"> {{button.text}}</a>
                  </li>
                  <li :class="{onebtn:button.isOne}">
                    <a href="#" id="BT_COLOUR" class="BT_COLOUR"> 關閉視窗</a>
                  </li>
                </ul>
              </div>
              <div class="bottom">
                <p class="info">課程諮詢專線：(02)2698-0111 分機111，週一至周五09:30-17:30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-4 col-sm-6">
        <div class="col">
          <div class="card">
            <h5 class="card-header">更改</h5>
            <div class="card-body">
              <div class="form-row mb-2">
                <div class="col">
                  <label for="titleText">標題</label>
                  <input type="text" class="form-control mt-2" id="titleText" placeholder="完整鑑定" v-model="title.text">
                </div>
                <div class="col">
                  <label for="titleColor">顏色</label>
                  <input type="text" class="form-control mt-2" id="titleColor" maxlength="7" placeholder="#e6e6e6" v-model.trim="title.colorPick" :style="{background:title.colorPick}">
                </div>
              </div>
              <div class="form-row mb-2">
                <div class="col">
                  <label for="contentText">內文</label>
                  <input type="text" class="form-control mt-2" id="contentText" placeholder="完整鑑定" v-model="content.text">
                </div>
                <div class="col">
                  <label for="contentColor">顏色</label>
                  <input type="text" class="form-control mt-2" id="contentColor" maxlength="7" placeholder="#e6e6e6" v-model.trim="content.colorPick" :style="{background:content.colorPick}">
                </div>
              </div>
              <h2>問題列表新增</h2>
              <div class="form-row mt-2">
                <div class="col-4">
                  <input type="text" class="form-control" placeholder="QA" v-model.trim="input.title">
                </div>
                <div class="col-2">
                  <input type="text" class="form-control" id="inputValue" placeholder="value" v-model.trim="input.value">
                </div>
                <div class="col-2">
                  <button class="btn btn-primary form-control" v-on:click="add">+</button>
                </div>
                <div class="col-4">
                  <button class="btn btn-danger form-control" v-on:click="pop"> 從最後一項刪除 </button>
                </div>
              </div>
              <div class="mt-2 mb-2">
                <h2>按鈕文字</h2>
                <div>
                  <input type="text" class="form-control" placeholder="輔助內文。" maxlength="22" v-model.trim="button.text">
                </div>
                <div class="form-check form-check-inline ">
                  <input class="form-check-input  form-check-inline " type="checkbox" id="contentColor" v-model.trim="button.isOne">
                  <label class="form-check-label  form-check-inline " for="contentColor">僅要關閉視窗</label>
                </div>
              </div>

              <div class="mt-2">
                <label for="inputState">按鈕底色</label>
                <div class="btns  mt-2 ">
                  <div class="  d-flex justify-content-between flex-wrap align-items-content-between ">
                    <button type="button" v-on:click="changeColor" class="btn btn-lg  gradient-1 mt-2" id="gradient-1"></button>
                    <button type="button" v-on:click="changeColor" class="btn btn-lg  gradient-2 mt-2" id="gradient-2"></button>
                    <button type="button" v-on:click="changeColor" class="btn btn-lg  gradient-3 mt-2" id="gradient-3"></button>
                    <button type="button" v-on:click="changeColor" class="btn btn-lg  gradient-4 mt-2" id="gradient-4"></button>
                    <button type="button" v-on:click="changeColor" class="btn btn-lg  gradient-5 mt-2" id="gradient-5"></button>
                    <button type="button" v-on:click="changeColor" class="btn btn-lg  gradient-6 mt-2" id="gradient-6"></button>
                    <button type="button" v-on:click="changeColor" class="btn btn-lg  gradient-7 mt-2" id="gradient-7"></button>
                    <button type="button" v-on:click="changeColor" class="btn btn-lg  gradient-8 mt-2" id="gradient-8"></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <h5 class="card-header">代碼</h5>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <a href="#" class="btn btn-primary">全選+複製</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>
<script src="../../../static/js/wenqu"></script>

<script>
  import wenqu from "../../../static/js/wenqu";
  import $ from "jquery";
  export default {
    data() {
      return {
        title: {
          text: "我是標題",
          colorPick: ""
        },
        content: {
          text:
            "我是一段內文，我是系統字，內文測試我是一段內 文，我是系統字，內文測試。",
          colorPick: ""
        },
        button: {
          isOne: false,
          text: "查看命盤"
        },
        input: {
          title: "",
          value: ""
        },
        items: [
          {
            text: "請選擇你的事業現況",
            value: "-1"
          }
        ],
        buttonText: "立即加入",
        BGColor: "#eeeeee"
      };
    },
    methods: {
      changeColor(e) {
        const heading = document.getElementById("BT_COLOUR");
        const gradient = e.target.id;
        heading.classList = [];
        heading.classList.add(gradient);

        const heading_2 = document.getElementById("BT_COLOUR_2");
        const gradient_2 = e.target.id;
        heading_2.classList = [];
        heading_2.classList.add(gradient_2);
      },
      add() {
        this.items.push({
          text: this.input.title,
          value: this.input.value
        });
        this.input.title = "";
        this.input.value = "";
      },
      pop() {
        this.items.pop();
      }
    }
  };
</script>
<style scoped lang="scss">
  @import "../../../static/css/wenqu.scss";
  * {
    //  border: 1px solid black;
    box-sizing: border-box;
  }
  ul.FORM > li {
    background: #fff;
  }
  ul.FORM p {
    /*反饋紅字*/
    font-size: 1em;
    color: #cc0000;
    font-weight: bold;
  }

  ul.FORM {
    clear: both;
    width: 100%;
    margin: 0 auto;
  }
  ul.FORM li {
    width: 100%;
    float: left;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    margin-bottom: 8px;
  }

  ::-webkit-input-placeholder {
    font-size: 1em;
    color: #999;
  }

  :-moz-placeholder {
    /* Firefox 18- */
    font-size: 1em;
    color: #999;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    font-size: 1em;
    color: #999;
  }

  :-ms-input-placeholder {
    font-size: 1em;
    color: #999;
  }
  #INPUT_BOX {
    // position: fixed;
    width: 500px;
    height: 510px;
    background-color: #fffcf2;
    border: 1px solid #ffc400;
    position: relative;
    box-shadow: 0px 0px 16px rgba($color: #000000, $alpha: 0.4);

    // left: 50%;
    // top: 50%;
    // transform: translate(-50%, -50%);
    // z-index: 9;
  }
  #INPUT_BOX .BOX_TOP a.X {
    display: block;
    width: 40px;
    height: 40px;
    position: absolute;
    background-color: grey;
    opacity: 0.3;
    top: 0;
    right: 0;
    &:hover {
      opacity: 1;
    }
  }
  a.X::before,
  a.X::after {
    content: "";
    position: absolute;
    height: 40px;
    width: 3px;
    left: 50%;
    top: 50%;
    background-color: #fff;
  }
  a.X::before {
    transform: translate(0%, -50%) rotate(45deg);
  }
  a.X::after {
    transform: translate(0%, -50%) rotate(-45deg);
  }

  #INPUT_BOX .BOX_BG {
    width: 90%;
    height: auto;
    margin: 0 auto;
  }
  #INPUT_BOX .BOX_BG > .TITLE {
    width: 100%;
    padding: 15px 0px;
    height: 50px;
    line-height: 30px;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
  }
  #INPUT_BOX .BOX_BG > .content {
    width: 100%;
    height: 80px;
    line-height: 27px;
    font-size: 20px;
    font-weight: bold;
  }

  #INPUT_BOX .BOX_BG .e_BT {
    clear: both;
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding: 10px 0px;
  }
  #INPUT_BOX .BOX_BG .e_BT ul.TWO {
    width: 80%;
    height: auto;
    overflow: hidden;
    margin: 0 auto;
    li {
      float: left;
      width: 50%;
      a {
        display: block;
        width: 160px;
        height: 45px;
        display: block;
        color: #ffffff;
        cursor: pointer;
        margin: 0 auto;
        font-size: 23px;
        border-radius: 40px;
        font-weight: 500;
        line-height: 45px;
        text-align: center;
        text-decoration: none;
      }
    }
  }
  #INPUT_BOX .BOX_BG .e_BT ul.TWO li.onebtn {
    float: none;
    width: 100%;
  }
  #INPUT_BOX a.BT_COLOUR {
    background: #ffc936; /* Old browsers */
    background: -moz-linear-gradient(
      top,
      #ffc936 0%,
      #ffba00 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      #ffc936 0%,
      #ffba00 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      #ffc936 0%,
      #ffba00 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffc936', endColorstr='#ffba00',GradientType=0 );
    border: 1px solid #ffba00;
    box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
    &:hover {
      background: #ffba00; /* Old browsers */
      background: -moz-linear-gradient(
        top,
        #ffba00 0%,
        #ffc936 100%
      ); /* FF3.6-15 */
      background: -webkit-linear-gradient(top, #ffba00 0%, #ffc936 100%);
      /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(
        to bottom,
        #ffba00 0%,
        #ffc936 100%
      ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffba00', endColorstr='#ffc936',GradientType=0 );
    }
  }
  #INPUT_BOX .BOX_BG .bottom .info {
    font-size: 15px;
    line-height: 20px;
    color: #d2201e;
  }
  .gradient-1 {
    background: #ffc936; /* Old browsers */
    background: -moz-linear-gradient(
      top,
      #ffc936 0%,
      #ffba00 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      #ffc936 0%,
      #ffba00 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      #ffc936 0%,
      #ffba00 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffc936', endColorstr='#ffba00',GradientType=40 );
    border: 1px solid #ffba00;
    border-radius: 40px;
    box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
    &:hover {
      background: #ffba00; /* Old browsers */
      background: -moz-linear-gradient(
        top,
        #ffba00 0%,
        #ffc936 100%
      ); /* FF3.6-15 */
      background: -webkit-linear-gradient(
        top,
        #ffba00 0%,
        #ffc936 100%
      ); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(
        to bottom,
        #ffba00 0%,
        #ffc936 100%
      ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffba00', endColorstr='#ffc936',GradientType=0 );
    }
  }
  .gradient-2 {
    background: #21d4fd;
    background: linear-gradient(to bottom, #21d4fd 0%, #b721ff 100%);
    background: -moz-linear-gradient(top, #21d4fd 0%, #b721ff 100%);
    background: -webkit-linear-gradient(top, #21d4fd 0%, #b721ff 100%);
    border-radius: 40px;
    border: 1px solid #21d4fd;
    box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
    filter: progid:DXImageTransform.Micorsoft.gradient(startColorstr="#21D4FD",endColorstr="#B721FF",GradientType=0);
    &:hover {
      background: #b721ff;
      background: linear-gradient(to bottom, #b721ff 0%, #21d4fd 100%);
      background: -moz-linear-gradient(top, #b721ff 0%, #21d4fd 100%);
      background: -webkit-linear-gradient(top, #b721ff 0%, #21d4fd 100%);
      filter: progid:DXImageTransform.Micorsoft.gradient(startColorstr="#B721FF",endColorstr="#21D4FD",GradientType=0);
    }
  }
  .gradient-3 {
    background: #fa8bff;
    background: linear-gradient(to bottom, #fa8bff 0%, #2bff88 100%);
    background: -moz-linear-gradient(top, #fa8bff 0%, #2bff88 100%);
    background: -webkit-linear-gradient(top, #fa8bff 0%, #2bff88 100%);
    border-radius: 40px;
    border: 1px solid #fa8bff;
    box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
    filter: progid:DXImageTransform.Micorsoft.gradient(startColorstr="#FA8BFF",endColorstr="#2BFF88",GradientType=0);
    &:hover {
      background: #2bff88;
      background: linear-gradient(to bottom, #2bff88 0%, #fa8bff 100%);
      background: -moz-linear-gradient(top, #2bff88 0%, #fa8bff 100%);
      background: -webkit-linear-gradient(top, #2bff88 0%, #fa8bff 100%);
      filter: progid:DXImageTransform.Micorsoft.gradient(startColorstr="#2BFF88",endColorstr="#FA8BFF",GradientType=0);
    }
  }
  .gradient-4 {
    background: #ff9a8b;
    background: linear-gradient(to bottom, #ff9a8b 0%, #b721ff 100%);
    background: -moz-linear-gradient(top, #ff9a8b 0%, #b721ff 100%);
    background: -webkit-linear-gradient(top, #ff9a8b 0%, #b721ff 100%);
    border-radius: 40px;
    border: 1px solid #ff9a8b;
    box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
    filter: progid:DXImageTransform.Micorsoft.gradient(startColorstr="#FF9A8B",endColorstr="#B721FF",GradientType=0);
    &:hover {
      background: #ff9a8b;
      background: linear-gradient(to bottom, #b721ff 0%, #ff9a8b 100%);
      background: -moz-linear-gradient(top, #b721ff 0%, #ff9a8b 100%);
      background: -webkit-linear-gradient(top, #b721ff 0%, #ff9a8b 100%);
      filter: progid:DXImageTransform.Micorsoft.gradient(startColorstr="#B721FF",endColorstr="#FF9A8B",GradientType=0);
    }
  }
  .gradient-5 {
    background: #ffdee9;
    background: linear-gradient(to bottom, #ffdee9 0%, #b5fffc 100%);
    background: -moz-linear-gradient(top, #ffdee9 0%, #b5fffc 100%);
    background: -webkit-linear-gradient(top, #ffdee9 0%, #b5fffc 100%);
    border-radius: 40px;
    border: 1px solid #ff9a8b;
    box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
    filter: progid:DXImageTransform.Micorsoft.gradient(startColorstr="#FFDEE9",endColorstr="#B5FFFC",GradientType=0);
    &:hover {
      background: #b5fffc;
      background: linear-gradient(to bottom, #b5fffc 0%, #ffdee9 100%);
      background: -moz-linear-gradient(top, #b5fffc 0%, #ffdee9 100%);
      background: -webkit-linear-gradient(top, #b5fffc 0%, #ffdee9 100%);
      filter: progid:DXImageTransform.Micorsoft.gradient(startColorstr="#B5FFFC",endColorstr="#FFDEE9",GradientType=0);
    }
  }
  .gradient-6 {
    background: #3eecac;
    background: linear-gradient(to bottom, #3eecac 0%, #ee74e1 100%);
    background: -moz-linear-gradient(top, #3eecac 0%, #ee74e1 100%);
    background: -webkit-linear-gradient(top, #3eecac 0%, #ee74e1 100%);
    border-radius: 40px;
    border: 1px solid #3eecac;
    box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
    filter: progid:DXImageTransform.Micorsoft.gradient(startColorstr="#3EECAC",endColorstr="#EE74E1",GradientType=0);
    &:hover {
      background: #ee74e1;
      background: linear-gradient(to bottom, #ee74e1 0%, #3eecac 100%);
      background: -moz-linear-gradient(top, #ee74e1 0%, #3eecac 100%);
      background: -webkit-linear-gradient(top, #ee74e1 0%, #3eecac 100%);
      filter: progid:DXImageTransform.Micorsoft.gradient(startColorstr="#EE74E1",endColorstr="#3EECAC",GradientType=0);
    }
  }
  .gradient-7 {
    background: #ff3cac;
    background: linear-gradient(to bottom, #ff3cac 0%, #2b86c5 100%);
    background: -moz-linear-gradient(top, #ff3cac 0%, #2b86c5 100%);
    background: -webkit-linear-gradient(top, #ff3cac 0%, #2b86c5 100%);
    border-radius: 40px;
    border: 1px solid #ff3cac;
    box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
    filter: progid:DXImageTransform.Micorsoft.gradient(startColorstr="#FF3CAC",endColorstr="#2B86C5",GradientType=0);
    &:hover {
      background: #2b86c5;
      background: linear-gradient(to bottom, #2b86c5 0%, #ff3cac 100%);
      background: -moz-linear-gradient(top, #2b86c5 0%, #ff3cac 100%);
      background: -webkit-linear-gradient(top, #2b86c5 0%, #ff3cac 100%);
      filter: progid:DXImageTransform.Micorsoft.gradient(startColorstr="#2B86C5",endColorstr="#FF3CAC",GradientType=0);
    }
  }
  .gradient-8 {
    background: #08aeea;
    background: linear-gradient(to bottom, #08aeea 0%, #2af598 100%);
    background: -moz-linear-gradient(top, #08aeea 0%, #2af598 100%);
    background: -webkit-linear-gradient(top, #08aeea 0%, #2af598 100%);
    border-radius: 40px;
    border: 1px solid #08aeea;
    box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
    filter: progid:DXImageTransform.Micorsoft.gradient(startColorstr="#08AEEA",endColorstr="#2AF598 ",GradientType=0);
    &:hover {
      background: #2af598;
      background: linear-gradient(to bottom, #2af598 0%, #08aeea 100%);
      background: -moz-linear-gradient(top, #2af598 0%, #08aeea 100%);
      background: -webkit-linear-gradient(top, #2af598 0%, #08aeea 100%);
      filter: progid:DXImageTransform.Micorsoft.gradient(startColorstr="#2AF598",endColorstr="#08AEEA ",GradientType=0);
    }
  }
</style>


