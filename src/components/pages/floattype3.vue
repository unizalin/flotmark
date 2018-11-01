<template>
  <div>
    <div class="row mt-5">
      <div class="col-lg-3 col-md-5">
        <div id="INPUT_BOX">
          <div class="BOX_TOP">
            <a href="#" class="X"></a>
          </div>
          <div class="BOX_BG" :style="{borderColor:borderColor}">
            <p class="BLACK"> <span class="text" :class="{isRed: item.isRed,isBold:item.isBold}" v-for="(item,idx) in items" v-on:click="remove(idx)" :key="idx" :data="item">{{item.text}}</span></p>
            <div class="e_BT">
              <ul class="ONE">
                <li><a id="BT_COLOUR" class="BT_COLOUR" href="#">{{buttonText}}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-9 col-md-7 my-2">
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <h5 class="card-header">更改</h5>
              <div class="card-body">
                <div class="from-group">
                  <h2>優惠文字資訊</h2>
                  <div class="form-row mt-2 mb-2">
                    <div class="col-10">
                      <input type="text" class="form-control" v-model.trim="input">
                    </div>
                    <div class="col-2">
                      <button class="btn btn-primary" v-on:click="add">+</button>
                    </div>
                    <div class="col mt-2">
                      <div class="form-check form-check-inline ">
                        <input class="form-check-input" type="checkbox" id="textcolor" v-model="text.isRed">
                        <label class="form-check-label" for="textcolor">
                          紅色
                        </label>
                      </div>
                      <div class="form-check form-check-inline ">
                        <input class="form-check-input" type="checkbox" id="fontweight" v-model="text.isBold">
                        <label class="form-check-label" for="fontweight">
                          粗體
                        </label>
                      </div>
                      <button class="btn btn-danger" v-on:click="pop"> 刪除最後一項 </button>
                    </div>
                  </div>
                </div>
                <div class="form-row mt-2">
                  <label for="text">按鈕文字</label>
                  <input type="text" class="form-control mt-2" id="text" placeholder="立即加入" v-model.trim="buttonText">
                </div>
                <div class="form-row mt-2">
                  <label for="border">邊框顏色</label>
                  <input type="text" class="form-control mt-2" id="border" placeholder="#e6e6e6" maxlength="7" v-model.trim="borderColor" :style="{background:borderColor}">
                </div>
                <div class="mt-2">
                  <label for="inputState">按鈕底色</label>
                  <div class="btns  mt-2 ">
                    <div class="  d-flex justify-content-between flex-wrap align-items-content-between ">
                      <button type="button" v-on:click="changeColor" class="btn gradient-1 mt-2" id="gradient-1"></button>
                      <button type="button" v-on:click="changeColor" class="btn gradient-2 mt-2" id="gradient-2"></button>
                      <button type="button" v-on:click="changeColor" class="btn gradient-3 mt-2" id="gradient-3"></button>
                      <button type="button" v-on:click="changeColor" class="btn gradient-4 mt-2" id="gradient-4"></button>
                      <button type="button" v-on:click="changeColor" class="btn gradient-5 mt-2" id="gradient-5"></button>
                      <button type="button" v-on:click="changeColor" class="btn gradient-6 mt-2" id="gradient-6"></button>
                      <button type="button" v-on:click="changeColor" class="btn gradient-7 mt-2" id="gradient-7"></button>
                      <button type="button" v-on:click="changeColor" class="btn gradient-8 mt-2" id="gradient-8"></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
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
  </div>

</template>
<script>
  import $ from "jquery";
  export default {
    data() {
      return {
        input: "",
        items: [
          { text: "Learn VueJs", isRed: false, isBold: false },
          { text: "Learn VueJs", isRed: true, isBold: false }
        ],
        text: [
          {
            isRed: false,
            isBold: false
          }
        ],
        buttonText: "立即加入",
        borderColor: "#e6e6e6"
      };
    },
    methods: {
      add() {
        let textcolor = document.getElementById("textcolor");
        if (!this.input) {
          alert("請填資料");
          return;
        }
        this.items.push({
          text: this.input,
          isRed: this.text.isRed,
          isBold: this.text.isBold
        });
        this.input = "";
      },
      remove(index) {
        this.items.splice(index, 1);
      },
      pop() {
        this.items.pop();
      },
      changeColor(e) {
        const heading = document.getElementById("BT_COLOUR");
        const gradient = e.target.id;
        heading.classList = [];
        heading.classList.add(gradient);
      }
    }
  };
</script>
<style scoped lang="scss">
  * {
    box-sizing: border-box;
  }
  #INPUT_BOX {
    width: 200px;
    height: 250px;
    /* position: fixed;
      right: 0.8%;
      top: 35%; */
    z-index: 9;
    box-shadow: 0px 0px 16px rgba($color: #000000, $alpha: 0.4);
  }

  #INPUT_BOX .BOX_TOP {
    width: 100%;
    height: 132px;
    background-color: #e6e6e6;
    /* background-image: url(../images/input_box/in_top2.png); */
    position: relative;
  }
  #INPUT_BOX .BOX_TOP a.X {
    display: block;
    width: 40px;
    height: 40px;
    position: absolute;
    background-color: grey;
    top: 0;
    right: 0;
    opacity: 0.3;
    &:hover {
      opacity: 1;
      z-index: 999;
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
    /* background-image: url(../images/input_box/in_bg.png); */
    width: 200px;
    height: 118px;
    border: 7px solid #e6e6e6;
    border-top: none;
    clear: both;
    background-color: #fff;
  }
  #INPUT_BOX .BOX_BG > p:first-child {
    padding: 15px 15px 0 15px;
    font-size: 15px;
    text-align: center;
  }
  #INPUT_BOX .BOX_BG .e_BT {
    clear: both;
    width: 100%;
    height: auto;
    overflow: hidden;
    margin: 0 auto;
    padding-top: 5px;
  }

  #INPUT_BOX .BOX_BG .e_BT ul.ONE {
    width: 80%;
    height: auto;
    overflow: hidden;
    margin: 0 auto;
  }

  #INPUT_BOX .BOX_BG .e_BT li a {
    display: block;
    width: 80%;
    padding: 8px 0;
    height: auto;
    overflow: hidden;
    margin: 0 auto;
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    font-size: 1em;
    line-height: 1.2em;
    color: #ffffff;
  }

  #INPUT_BOX .BOX_BG .e_BT li a span {
    font-weight: normal;
  }
  #INPUT_BOX .BLACK {
    font-size: 16px;
    text-align: center;
    color: #000000;
    line-height: 16px;
    font-weight: normal;
  }
  #INPUT_BOX .BLACK span.text.isRed {
    color: #cc0000;
  }
  #INPUT_BOX .BLACK span.text.isBold {
    font-weight: bold;
  }
  #INPUT_BOX a.BT_COLOUR {
    background: #fb2121; /* Old browsers */
    background: -moz-linear-gradient(
      top,
      #fb2121 0%,
      #b21424 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      #fb2121 0%,
      #b21424 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      #fb2121 0%,
      #b21424 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fb2121', endColorstr='#b21424',GradientType=0 );
    /* IE6-9 */
    border-radius: 5px;
    border: 1px solid #bf3539;
    box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
  }
  #INPUT_BOX a.BT_COLOUR:hover {
    background: #b21424; /* Old browsers */
    background: -moz-linear-gradient(
      top,
      #b21424 0%,
      #fb2121 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      #b21424 0%,
      #fb2121 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      #b21424 0%,
      #fb2121 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b21424', endColorstr='#fb2121',GradientType=0 ); /* IE6-9 */
  }
  .gradient-1 {
    background: #fb2121;
    background: linear-gradient(to bottom, #fb2121, #b21424);
    background: -moz-linear-gradient(top, #fb2121 0%, #b21424 100%);
    background: -webkit-linear-gradient(top, #fb2121 0%, #b21424 100%);
    border-radius: 5px;
    border: 1px solid #fb2121;
    box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
    filter: progid:DXImageTransform.Micorsoft.gradient(startColorstr="#FB2121",endColorstr="#B21424",GradientType=0);
    &:hover {
      background: #b21424;
      background: linear-gradient(to bottom, #b21424, #fb2121);
      background: -moz-linear-gradient(top, #b21424 0%, #fb2121 100%);
      background: -webkit-linear-gradient(top, #b21424 0%, #fb2121 100%);
      filter: progid:DXImageTransform.Micorsoft.gradient(startColorstr="#FB2121",endColorstr="#B21424",GradientType=0);
    }
  }
  .gradient-2 {
    background: #21d4fd;
    background: linear-gradient(to bottom, #21d4fd 0%, #b721ff 100%);
    background: -moz-linear-gradient(top, #21d4fd 0%, #b721ff 100%);
    background: -webkit-linear-gradient(top, #21d4fd 0%, #b721ff 100%);
    border-radius: 5px;
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
    border-radius: 5px;
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
    border-radius: 5px;
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
    border-radius: 5px;
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
    border-radius: 5px;
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
    border-radius: 5px;
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
    border-radius: 5px;
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


