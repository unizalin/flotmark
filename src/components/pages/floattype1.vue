<template>
  <div>
    <div class="row mt-5">
      <div class="col-3">
        <div id="INPUT_BOX">
          <div class="BOX_TOP">
            <a href="#" class="X"></a>
          </div>
          <div class="BOX_BG" :style="{'border-color': borderColor}">
            <p class="RED"><span class="text" :class="{isBlack: text.isBlack,isNormal:text.isNormal}">{{text.info}}</span>NT$ <span class="price" :class="{isBlack: price.isBlack,isNormal:price.isNormal}">{{price.info}}</span></p>
            <div class="e_BT">
              <ul class="ONE">
                <li><a id="BT_COLOUR" class="BT_COLOUR " href="#">{{buttonText}}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-9">
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <h5 class="card-header">更改</h5>
              <div class="card-body">
                  <div class="form-group mt-2">
                    <label for="text">文字</label>
                    <input type="text" class="form-control mt-2" id="text" placeholder="鐵定價" v-model.trim="text.info">
                    <div class="form-check form-check-inline mt-2">
                      <input class="form-check-input" type="checkbox" id="textcolor" v-model.trim="text.isBlack">
                      <label class="form-check-label" for="textcolor">
                        黑色
                      </label>
                    </div>
                    <div class="form-check form-check-inline mt-2">
                      <input class="form-check-input" type="checkbox" id="fontweight" v-model.trim="text.isNormal">
                      <label class="form-check-label" for="fontweight">
                        一般體
                      </label>
                    </div>
                  </div>
                  <div class="form-group mt-2 ">
                    <label for="price">價錢</label>
                    <input type="text" class="form-control mt-2" id="price" placeholder="360"  v-model.trim="price.info">
                    <div class="form-check form-check-inline mt-2">
                      <input class="form-check-input" type="checkbox" id="textcolor" v-model.trim="price.isBlack">
                      <label class="form-check-label" for="textcolor">
                        黑色
                      </label>
                    </div>
                    <div class="form-check form-check-inline mt-2">
                      <input class="form-check-input" type="checkbox" id="fontweight" v-model.trim="price.isNormal">
                      <label class="form-check-label" for="fontweight">
                        一般體
                      </label>
                    </div>
                    <div class="mt-2">
                      <label for="border">邊框顏色</label>
                      <input type="text" class="form-control " id="border" placeholder="#e6e6e6" maxlength="7" v-model.trim="borderColor" :style="{background:borderColor}">
                    </div>
                    <div class="form-row mt-2">
                      <label for="text">按鈕文字</label>
                      <input type="text" class="form-control " id="text" placeholder="立即加入" v-model.trim="buttonText">
                    </div>
                    <div class="mt-2">
                      <label for="inputState">按鈕底色</label>
                      <div class="btns p2 mt-2 ">
                        <div class="col mt-2 p-0 df">
                          <button type="button" v-on:click="changeColor" class="btn gradient gradient-2 " id="gradient-2">Secondary</button>
                          <button type="button" v-on:click="changeColor" class="btn gradient gradient-3 " id="gradient-3">Success</button>
                          <button type="button" v-on:click="changeColor" class="btn gradient gradient-4 " id="gradient-4">Danger</button>
                          <button type="button" v-on:click="changeColor" class="btn gradient gradient-5 " id="gradient-5">Warning</button>
                        </div>
                        <div class="col mt-2 p-0">
                          <button type="button" v-on:click="changeColor" class="btn gradient gradient-6 " id="gradient-6">Info</button>
                          <button type="button" v-on:click="changeColor" class="btn gradient gradient-7 " id="gradient-7">Light</button>
                          <button type="button" v-on:click="changeColor" class="btn gradient gradient-8 " id="gradient-8">Dark</button>
                        </div>
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
      text: [
        {
          info: "",
          isBlack: false,
          isNormal: false
        }
      ],
      price: [
        {
          info: "",
          isBlack: false,
          isNormal: false
        }
      ],
      buttonText: "馬上算",
      borderColor: "#e6e6e6"
    };
  },
  methods: {
    changeColor (e) {
      const heading = document.querySelector('.BT_COLOUR');
      const gradient = e.target.id;
      heading.classList = [];
      heading.classList.add(gradient);
  }
}
}
</script>
<style scoped lang="scss">
#INPUT_BOX {
  width: 250px;
  height: 240px;
  /* position: fixed;
  right: 0.8%;
  top: 35%; */
  z-index: 9;
}

#INPUT_BOX .BOX_TOP {
  width: 100%;
  height: 127px;
  background-color: black;
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
  width: 250px;
  height: 113px;
  border: 7px solid #e6e6e6;
  border-top: none;
  clear: both;
  background-color: #fff;
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
#INPUT_BOX .RED {
  padding-top: 20px;
  font-size: 16px;
  text-align: center;
  color: #cc0000;
  line-height: 16px;
  font-weight: bold;
}
#INPUT_BOX .RED span.text.isBlack,
.RED span.price.isBlack {
  color: black;
}
#INPUT_BOX .RED span.text.isNormal,
.RED span.price.isNormal {
  font-weight: normal;
}

#INPUT_BOX a.BT_COLOUR {
  background: #FB2121;
  background: linear-gradient(to bottom, #FB2121, #B21424);
  background: -moz-linear-gradient(top,#FB2121 0%,#B21424 100%);
  background: -webkit-linear-gradient(top,#FB2121 0%,#B21424 100%);
  filter: progid:DXImageTransform.Micorsoft.gradient(startColorstr="#FB2121",endColorstr="#B21424",GradientType=0);//IE6-9
  &:hover{
  background: #B21424;
  background: linear-gradient(to bottom,#B21424, #FB2121);
  background: -moz-linear-gradient(top,#B21424 0%, #FB2121 100%);
  background: -webkit-linear-gradient(top,#B21424 0%,#FB2121  100%);
  filter: progid:DXImageTransform.Micorsoft.gradient(startColorstr="#FB2121",endColorstr="#B21424",GradientType=0);//IE6-9

  }
}

.gradient-2 {
  background: #21D4FD;
  background: linear-gradient(to bottom, #21D4FD 0%, #B721FF 100%);
  background: -moz-linear-gradient(top, #21D4FD 0%,#B721FF 100%);
  background: -webkit-linear-gradient(top, #21D4FD 0%,#B721FF  100%);
  filter: progid:DXImageTransform.Micorsoft.gradient(startColorstr="#21D4FD",endColorstr="#B721FF",GradientType=0);//IE6-9
  &:hover{
    background: #B721FF;
    background: linear-gradient(to bottom, #B721FF 0%, #21D4FD 100%);
    background: -moz-linear-gradient(top,#B721FF  0%,#21D4FD 100%);
    background: -webkit-linear-gradient(top, #B721FF 0%, #21D4FD 100%);
    filter: progid:DXImageTransform.Micorsoft.gradient(startColorstr="#B721FF",endColorstr="#21D4FD",GradientType=0);//IE6-9
  }
}

.gradient-3 {
  background:#FA8BFF;
  background: linear-gradient(to bottom, #FA8BFF 0%, #2BFF88 100%);
  background: -moz-linear-gradient(top,#FA8BFF 0%,#2BFF88 100%);
  background: -webkit-linear-gradient(top,#FA8BFF 0%,#2BFF88 100%);
  filter: progid:DXImageTransform.Micorsoft.gradient(startColorstr="#FA8BFF",endColorstr="#2BFF88",GradientType=0);//IE6-9
  &:hover{
    background:#2BFF88;
    background: linear-gradient(to bottom, #2BFF88 0%, #FA8BFF 100%);
    background: -moz-linear-gradient(top,#2BFF88 0%,#FA8BFF 100%);
    background: -webkit-linear-gradient(top,#2BFF88 0%,#FA8BFF 100%);
    filter: progid:DXImageTransform.Micorsoft.gradient(startColorstr="#2BFF88",endColorstr="#FA8BFF",GradientType=0);//IE6-9
  }
}

.gradient-4 {
  background: #FF9A8B;
  background: linear-gradient(to bottom, #FF9A8B 0%, #B721FF 100%);
  background: -moz-linear-gradient(top, #FF9A8B 0%, #B721FF 100%);
  background: -webkit-linear-gradient(top, #FF9A8B 0%, #B721FF 100%);
  filter: progid:DXImageTransform.Micorsoft.gradient(startColorstr="#FF9A8B",endColorstr="#B721FF",GradientType=0);//IE6-9
  &:hover{
    background: #FF9A8B;
    background: linear-gradient(to bottom, #B721FF 0%, #FF9A8B 100%);
    background: -moz-linear-gradient(top, #B721FF 0%, #FF9A8B 100%);
    background: -webkit-linear-gradient(top, #B721FF 0%, #FF9A8B 100%);
    filter: progid:DXImageTransform.Micorsoft.gradient(startColorstr="#B721FF",endColorstr="#FF9A8B",GradientType=0);//IE6-9

  }
}

.gradient-5 {
  background: #FFDEE9;
  background: linear-gradient(to bottom, #FFDEE9 0%, #B5FFFC 100%);
  background: -moz-linear-gradient(top, #FFDEE9 0%, #B5FFFC 100%);
  background: -webkit-linear-gradient(top, #FFDEE9 0%, #B5FFFC 100%);
  filter: progid:DXImageTransform.Micorsoft.gradient(startColorstr="#FFDEE9",endColorstr="#B5FFFC",GradientType=0);//IE6-9
  &:hover{
    background: #B5FFFC;
    background: linear-gradient(to bottom, #B5FFFC 0%, #FFDEE9 100%);
    background: -moz-linear-gradient(top, #B5FFFC 0%, #FFDEE9 100%);
    background: -webkit-linear-gradient(top, #B5FFFC 0%, #FFDEE9 100%);
    filter: progid:DXImageTransform.Micorsoft.gradient(startColorstr="#B5FFFC",endColorstr="#FFDEE9",GradientType=0);//IE6-9

  }
}

.gradient-6 {
  background: #3EECAC;
  background: linear-gradient(to bottom, #3EECAC 0%, #EE74E1 100%);
  background: -moz-linear-gradient(top, #3EECAC 0%, #EE74E1 100%);
  background: -webkit-linear-gradient(top, #3EECAC 0%, #EE74E1 100%);
  filter: progid:DXImageTransform.Micorsoft.gradient(startColorstr="#3EECAC",endColorstr="#EE74E1",GradientType=0);//IE6-9
  &:hover{
    background: #EE74E1;
    background: linear-gradient(to bottom, #EE74E1 0%, #3EECAC 100%);
    background: -moz-linear-gradient(top, #EE74E1 0%, #3EECAC 100%);
    background: -webkit-linear-gradient(top, #EE74E1 0%, #3EECAC 100%);
    filter: progid:DXImageTransform.Micorsoft.gradient(startColorstr="#EE74E1",endColorstr="#3EECAC",GradientType=0);//IE6-9

  }
}

.gradient-7 {
  background: #FF3CAC;
  background: linear-gradient(to bottom, #FF3CAC 0%, #2B86C5 100%);
  background: -moz-linear-gradient(top, #FF3CAC 0%, #2B86C5 100%);
  background: -webkit-linear-gradient(top, #FF3CAC 0%, #2B86C5 100%);
  filter: progid:DXImageTransform.Micorsoft.gradient(startColorstr="#FF3CAC",endColorstr="#2B86C5",GradientType=0);//IE6-9
  &:hover{
    background: #2B86C5;
    background: linear-gradient(to bottom, #2B86C5 0%, #FF3CAC 100%);
    background: -moz-linear-gradient(top, #2B86C5 0%, #FF3CAC 100%);
    background: -webkit-linear-gradient(top, #2B86C5 0%, #FF3CAC 100%);
    filter: progid:DXImageTransform.Micorsoft.gradient(startColorstr="#2B86C5",endColorstr="#FF3CAC",GradientType=0);//IE6-9

  }
}

.gradient-8 {
  background: #08AEEA;
  background: linear-gradient(to bottom, #08AEEA 0%, #2AF598 100%);
  background: -moz-linear-gradient(top, #08AEEA 0%, #2AF598 100%);
  background: -webkit-linear-gradient(top, #08AEEA 0%, #2AF598 100%);
  filter: progid:DXImageTransform.Micorsoft.gradient(startColorstr="#08AEEA",endColorstr="#2AF598 ",GradientType=0);//IE6-9
  &:hover{
    background: #2AF598;
    background: linear-gradient(to bottom, #2AF598 0%, #08AEEA 100%);
    background: -moz-linear-gradient(top, #2AF598 0%, #08AEEA 100%);
    background: -webkit-linear-gradient(top, #2AF598 0%, #08AEEA 100%);
    filter: progid:DXImageTransform.Micorsoft.gradient(startColorstr="#2AF598",endColorstr="#08AEEA ",GradientType=0);//IE6-9

  }
}

</style>
