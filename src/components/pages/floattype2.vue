<template>
  <div>
    <div class="row mt-5">
      <div class="col-3">
        <div id="INPUT_BOX">
          <div class="BOX_TOP">
            <a href="#" class="X"></a>
          </div>
          <div class="BOX_BG" :style="{borderColor:borderColor}">
            <div class="e_BT">
              <ul class="TWO">
                <li><a href="#" id="BT_COLOUR" class="BT_COLOUR">{{left.text}}<p>({{left.price}})</p></a></li>
                <li><a href="#" id="BT_COLOUR_2" class="BT_COLOUR">{{right.text}}<p>({{right.price}})</p></a></li>
              </ul>
            </div>
            <p class="TPAY"><span>付款</span>點數、信用卡、手機小額、PayPal</p>
          </div>
        </div>
      </div>
      <div class="col-9">
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <h5 class="card-header">更改</h5>
              <div class="card-body">
                <div class="text-left">
                  <div class="form-row mb-2">
                    <div class="col">
                      <label for="text">文字(Left)</label>
                      <input type="text" class="form-control mt-2" id="text" placeholder="完整鑑定" v-model="left.text">
                    </div>
                    <div class="col">
                      <label for="price">價錢(Left)</label>
                      <input type="text" class="form-control mt-2" id="price" placeholder="800"  v-model="left.price">
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col">
                    <label for="text">文字(Right)</label>
                    <input type="text" class="form-control mt-2" id="text" placeholder="升級白金" v-model="right.text">
                  </div>
                  <div class="col">
                    <label for="price">價錢(Right)</label>
                    <input type="text" class="form-control mt-2" id="price" placeholder="3,600"  v-model="right.price">
                  </div>
                </div>
                <div class="mt-2">
                      <label for="border">邊框顏色</label>
                      <input type="text" class="form-control mt-2" id="border" placeholder="#e6e6e6"  v-model.trim="borderColor" maxlength="7" v-model="borderColor" :style="{background:borderColor}">
                </div>
                <div class="mt-2">
                      <label for="inputState">按鈕底色</label>
                      <div class="btns  mt-2 ">
                        <div class="  d-flex justify-content-between flex-wrap align-items-content-between ">
                          <button type="button" v-on:click="changeColor" class="btn gradient-1 mt-2" id="gradient-1">primary</button>
                          <button type="button" v-on:click="changeColor" class="btn gradient-2 mt-2" id="gradient-2">Secondary</button>
                          <button type="button" v-on:click="changeColor" class="btn gradient-3 mt-2" id="gradient-3">Success</button>
                          <button type="button" v-on:click="changeColor" class="btn gradient-4 mt-2" id="gradient-4">Danger</button>
                          <button type="button" v-on:click="changeColor" class="btn gradient-5 mt-2" id="gradient-5">Warning</button>
                          <button type="button" v-on:click="changeColor" class="btn gradient-6 mt-2" id="gradient-6">Info</button>
                          <button type="button" v-on:click="changeColor" class="btn gradient-7 mt-2" id="gradient-7">Light</button>
                          <button type="button" v-on:click="changeColor" class="btn gradient-8 mt-2" id="gradient-8">Dark</button>
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
      left: [{ text: "完整鑑定" }, { price: "800" }],
      right: [{ text: "升級白金" }, { price: "3,600" }],
      borderColor: "#e6e6e6"
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
    }
  }
};
</script>
<style scoped lang="scss">
* {
  /* border: 1px solid black; */
  box-sizing: border-box;
}
#INPUT_BOX {
  width: 250px;
  height: 240px;
  overflow: hidden;
  /* position: fixed;
	z-index:  9;
	top: 35%;
  right: 0.8%; */
}

#INPUT_BOX .BOX_TOP {
  width: 100%;
  height: 120px;
  background-color: #e6e6e6;
  /* background: url(../images/input_box/in_top.png) no-repeat; */
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
  width: 250px;
  height: 113px;
  border: 7px solid #e6e6e6;
  border-top: none;
  clear: both;
  background-color: #fff;
  /* background: url(../images/input_box/in_bg.png) repeat-y; */
}

#INPUT_BOX .BOX_BG .e_BT {
  clear: both;
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding-top: 15px;
}

#INPUT_BOX .BOX_BG .e_BT ul.TWO {
  width: 80%;
  height: auto;
  overflow: hidden;
  margin: 0 auto;
}

#INPUT_BOX .BOX_BG .e_BT ul.TWO li {
  float: left;
  width: 50%;
}

#INPUT_BOX .BOX_BG .e_BT .TWO li a {
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

#INPUT_BOX .BOX_BG .e_BT .TWO li a span {
  font-weight: normal;
}

#INPUT_BOX .BOX_BG .TPAY {
  display: block;
  text-align: center;
  font-size: 12px;
  line-height: 1.5em;
  padding-top: 15px;
  color: #000;
}
#INPUT_BOX .BOX_BG .TPAY span {
  background-color: #ffff99;
  border: 1px solid #666;
  padding: 0 2px;
  margin-right: 5px;
}

#INPUT_BOX .BOX_FOOT {
  width: 250px;
  height: 7px;
  background-color: #e6e6e6;
  /* background: url(../images/input_box/in_foot.png) no-repeat; */
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
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b21424', endColorstr='#fb2121',GradientType=0 );
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


