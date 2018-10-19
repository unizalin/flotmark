<template>
  <div>
    <div class="row mt-5">
      <div class="col-3">
        <div id="INPUT_BOX">
          <div class="BOX_TOP">
            <a href="#" class="X"></a>
          </div>
          <div class="BOX_BG" :style="{borderColor:borderColor}">
            <p class="BLACK"> <span class="text" :class="{isRed: text.isRed,isBold:text.isBold}" v-for="(item,index) in items" v-on:click="remove(index)" @click="item.isRed=!item.isRed"> {{item.label}}</span></p>
            <div class="e_BT">
              <ul class="ONE">
                <li><a class="BT_COLOUR" href="#">{{buttonText}}</a></li>
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
                <h2>上方文字欄</h2>
                <div class="form-row mt-2 mb-2">
                  <div class="col-7">
                    <input type="text" class="form-control"  v-model.trim="input" >
                  </div>
                  <div class="col-2">
                    <button  class="btn btn-primary" v-on:click="add">+</button >
                  </div>
                  <div class="col-3">
                    <div class="form-check form-check-inline ">
                      <input class="form-check-input" type="checkbox" id="textcolor" v-model.trim="text.isRed">
                      <label class="form-check-label" for="textcolor">
                        紅色
                      </label>
                    </div>
                    <div class="form-check form-check-inline ">
                      <input class="form-check-input" type="checkbox" id="fontweight" v-model.trim="text.isBold">
                      <label class="form-check-label" for="fontweight">
                        粗體
                      </label>
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
      items: [{ id: 1, label: "Learn VueJs", isRed: false }],
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
      this.items.push(this.input);
      this.input = "";
    },
    remove(index) {
      this.items.splice(index, 1);
    }
  }
};
</script>
<style scoped>
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
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fb2121', endColorstr='#b21424',GradientType=0 ); /* IE6-9 */
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
</style>


