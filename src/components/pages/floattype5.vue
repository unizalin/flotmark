<template>
  <div  >
    <div class="row mt-5">
      <div class="col-3">
        <div id="INPUT_BOX">
          <div class="BOX_TOP">
            <a class="X" href="#"></a>
          </div>
          <div class="BOX_BG">
            <ul class="content">
              <li class="spot">•服務升級！登入算紫微財 富命盤(價值$480元)</li>
              <li class="spot">•加碼贈送！張盛舒《愛情 有方》電子書(價值$480 元)</li>
              <li>• 批命格、十年大運、歲運 詳 批等熱門服務 </li>
              <li>• 300元算命金 </li>
              <li>• 總價值超過$12, 000元 </li>
            </ul>
            <p class="yearprice">1年期 NT$3,600元</p>
            <div class="e_BT">
              <ul class="one">
                <li><a class="BT_COLOUR" href="#">立即加入</a></li>
              </ul>
            </div>
            <div class="bottom">
              <div class="title">
                <p>白金服務諮詢專線</p>
              </div>
              <div class="infotext">
                <p>(02) 26980111#512 </p><small>服務時間：週一至週五09:00-18:00</small>
                <div class="e_BT">
                  <ul class="one">
                    <li><a class="BT_COLOUR" href="#">我想瞭解本服務</a></li>
                  </ul>
                </div>
              </div>
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
      text: [{ left: "" }, { right: "" }],
      dprice: [{ left: "" }, { right: "" }],
      button: [{ left: "" }, { right: "" }]
    };
  }
};
</script>
<style scoped>
* {
  /* border: 1px solid black; */
  box-sizing: border-box;
}

#INPUT_BOX {
  background-color: #eee;
  width: 220px;
  height: 540px;
  position: relative;
  /* position: fixed;
  right: 0.8%;
  top: 15%; */
  align-items: center;
}
#INPUT_BOX .BOX_TOP {
  width: 100%;
  min-height: 60px;
  position: relative;
  background-color: #e6e6e6;
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
  width: 100%;
  border-bottom: 7px solid #e7e7e7e7;
}
#INPUT_BOX .BOX_BG .content {
  padding-top: 8px;
}
#INPUT_BOX .BOX_BG .content li {
  line-height: 23px;
  padding: 0px 14px;
  margin: 4px 0px;
  font-size: 16px;
}
#INPUT_BOX .BOX_BG .content li:last-child {
  margin-bottom: 0px;
}
#INPUT_BOX .BOX_BG .content .spot {
  color: #cc0000;
  font-weight: bold;
}
#INPUT_BOX .BOX_BG .yearprice {
  padding: 8px 0px;
  text-align: center;
  font-size: 21px;
  color: #cc0000;
  font-weight: bold;
}
#INPUT_BOX .BOX_BG .e_BT {
  clear: both;
  width: 100%;
  height: auto;
  overflow: hidden;
  padding: 4px 0px;
}
#INPUT_BOX .BOX_BG .e_BT ul.one {
  height: auto;
  overflow: hidden;
  margin: 0 auto;
}
#INPUT_BOX .BOX_BG .e_BT ul.one li a {
  display: block;
  width: 90%;
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
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  background-image: linear-gradient(#ff634a, #d12132);
  color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 0px 8px white inset;
}
#INPUT_BOX .BOX_BG .e_BT ul.one li a:hover {
  background-image: linear-gradient(#d12132, #ff634a);
}
#INPUT_BOX .BOX_BG .bottom {
  width: 90%;
  height: auto;
  margin: 0 auto;
  padding: 8px 0px;
}
#INPUT_BOX .BOX_BG .bottom .title {
  padding: 8px;
  font-size: 20px;
  text-align: center;
  background-color: #7e66de;
  color: #ffffff;
}
#INPUT_BOX .BOX_BG .bottom .infotext {
  text-align: center;
  height: auto;
  background-color: #ffffff;
  padding: 10px 0px;
}
#INPUT_BOX .BOX_BG .bottom .infotext p {
  font-weight: bold;
  font-size: 19px;
}
#INPUT_BOX .BOX_BG .bottom .infotext small {
  width: 100%;
  font-size: 8px;
}
#INPUT_BOX .BOX_BG .bottom .e_BT {
  clear: both;
  width: 100%;
  height: auto;
  overflow: hidden;
  margin: 0 auto;
  padding-top: 5px;
}
#INPUT_BOX .BOX_BG .bottom .e_BT ul.one {
  height: auto;
  overflow: hidden;
  margin: 0 auto;
}
#INPUT_BOX .BOX_BG .bottom .e_BT ul.one li a {
  display: block;
  width: 90%;
  padding: 8px 0;
  height: auto;
  overflow: hidden;
  margin: 0 auto;
  text-decoration: none;
  margin: 0 auto;
  font-size: 20px;
  text-align: center;
  text-decoration: none;
  background-image: linear-gradient(#d548f8, #9121d1);
  color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 0px 8px white inset;
}
#INPUT_BOX .BOX_BG .bottom .e_BT ul.one li a:hover {
  background-image: linear-gradient(#9121d1, #d548f8);
}
#INPUT_BOX .BOX_FOOT {
  position: absolute;
  width: 100%;
  height: 8px;
  bottom: 0;
  left: 0;
  background-color: #e6e6e6;
  /* background: url(../images/input_box/in_foot.png) no-repeat; */
}
</style>


