<template>
  <div>
    <div class="row mt-5">
      <div class="col-lg-3 col-md-5">
        <div id="INPUT_BOX">
          <div class="BOX_TOP">
            <a onclick="document.getElementById('INPUT_BOX').style.display='none';return false;" class="X" href="#"></a>
          </div>
          <div class="BOX_BG" :style="{borderColor:BGColor,background:BGColor}">
            <ul class="content">
              <li :class="{isRed: item.isRed,isBold:item.isBold}" v-for="(item,idx) in items" v-on:click="remove(idx)" :key="idx">{{item.text}}</li>
            </ul>
            <p class="yearprice" :class="{isBlack: inf.isBlack,isNormal:inf.isNormal}">{{inf.text}}</p>
            <div class="pq_e_BT">
              <ul class="ONE">
                <li><a id="BT_COLOUR" class="pq_BT_SROUND pq_BG_GRA_RED " href="#">{{buttonText}}</a></li>
              </ul>
            </div>
            <div class="bottom">
              <div class="title">
                <p>白金服務諮詢專線</p>
              </div>
              <div class="infotext">
                <p class="telphone">(02) 26980111#512 </p>
                <span class="service">服務時間：週一至週五09:00-18:00</span>
                <div class="e_BT">
                  <ul class="one">
                    <li><a class="BT_COLOUR_bottom" href="#">我想瞭解本服務</a></li>
                  </ul>
                </div>
              </div>
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
                        <input class="form-check-input" type="checkbox" id="toptextcolor" v-model="text.isRed">
                        <label class="form-check-label" for="toptextcolor">
                          紅色
                        </label>
                      </div>
                      <div class="form-check form-check-inline ">
                        <input class="form-check-input" type="checkbox" id="topfontweight" v-model="text.isBold">
                        <label class="form-check-label" for="topfontweight">
                          粗體
                        </label>
                      </div>
                      <button class="btn btn-danger" v-on:click="pop"> 刪除最後一項 </button>
                    </div>
                  </div>
                </div>
                <div class="form-group mt-2">
                  <label for="text">年費文字資訊</label>
                  <input type="text" class="form-control mt-2" id="text" placeholder="1年期NT$3,600N元" v-model.trim="inf.text">
                  <div class="form-check form-check-inline mt-2">
                    <input class="form-check-input" type="checkbox" id="yeartextcolor" v-model="inf.isBlack">
                    <label class="form-check-label" for="yeartextcolor">
                      黑色
                    </label>
                  </div>
                  <div class="form-check form-check-inline mt-2">
                    <input class="form-check-input" type="checkbox" id="yearfontweight" v-model="inf.isNormal">
                    <label class="form-check-label" for="yearfontweight">
                      一般體
                    </label>
                  </div>
                </div>
                <div class="form-row mt-2">
                  <label for="text">按鈕文字</label>
                  <input type="text" class="form-control mt-2" id="text" placeholder="立即加入" v-model.trim="buttonText">
                </div>
                <div class="form-row mt-2">
                  <label for="border">下方底色</label>
                  <input type="text" class="form-control mt-2" id="border" placeholder="#e6e6e6" maxlength="7" v-model.trim="BGColor" :style="{background:BGColor}">
                </div>
                <div class="mt-2">
                    <label>按鈕邊框</label>
                    <div class="btns p2 mt-2">
                      <div class="col mt-2 p-0 d-flex flex-wrap align-content-between justify-content-between">
                        <button type="button" v-on:click="changeBorder" class="btn btn-outline-primary rounded-0 mt-2" id="pq_BT_REC">直角</button>
                        <button type="button" v-on:click="changeBorder" class="btn btn-outline-secondary mt-2" style="border-radius : 5px" id="pq_BT_SROUND">小圓角</button>
                        <button type="button" v-on:click="changeBorder" class="btn btn-outline-success mt-2" style="border-radius : 10px" id="pq_BT_ROUND">圓角</button>
                        <button type="button" v-on:click="changeBorder" class="btn btn-outline-warning mt-2" style="border-radius : 40px" id="pq_BT_BROUND">大橢圓</button>
                      </div>
                    </div>
                  </div>
                  <div class="mt-2">
                    <label>漸層按鈕</label>
                    <div class="btns p2 mt-2 ">
                      <div class="col mt-2 p-0 d-flex flex-wrap align-content-between justify-content-between">
                        <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_GRA_RED mt-2" id="pq_BG_GRA_RED"></button>
                        <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_GRA_PINK01 mt-2" id="pq_BG_GRA_PINK01"></button>
                        <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_GRA_PINK02 mt-2" id="pq_BG_GRA_PINK02"></button>
                        <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_GRA_ORANGE01 mt-2" id="pq_BG_GRA_ORANGE01"></button>
                        <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_GRA_ORANGE02 mt-2" id="pq_BG_GRA_ORANGE02"></button>
                        <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_GRA_GREEN mt-2" id="pq_BG_GRA_GREEN"></button>
                        <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_GRA_BLUE01 mt-2" id="pq_BG_GRA_BLUE01"></button>
                        <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_GRA_BLUE02 mt-2" id="pq_BG_GRA_BLUE02"></button>
                        <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_GRA_PURPLE01 mt-2" id="pq_BG_GRA_PURPLE01"></button>
                        <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_GRA_PURPLE02 mt-2" id="pq_BG_GRA_PURPLE02"></button>
                      </div>
                    </div>
                  </div>
                  <div class="mt-2">
                    <label>單色</label>
                    <div class="btns p2 mt-2 ">
                      <div class="col mt-2 p-0 d-flex flex-wrap align-content-between justify-content-between">
                        <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_RED mt-2" id="pq_BG_RED"></button>
                        <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_PINK01 mt-2" id="pq_BG_PINK01"></button>
                        <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_PINK02 mt-2" id="pq_BG_PINK02"></button>
                        <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_ORANGE01 mt-2" id="pq_BG_ORANGE01"></button>
                        <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_ORANGE02 mt-2" id="pq_BG_ORANGE02"></button>
                        <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_GREEN mt-2" id="pq_BG_GREEN"></button>
                        <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_BLUE01 mt-2" id="pq_BG_BLUE01"></button>
                        <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_BLUE02 mt-2" id="pq_BG_BLUE02"></button>
                        <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_PURPLE01 mt-2" id="pq_BG_PURPLE01"></button>
                        <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_PURPLE02 mt-2" id="pq_BG_PURPLE02"></button>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
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
          {
            text: "• 服務升級！登入算紫微財 富命盤(價值$480元)",
            isRed: true,
            isBold: true
          },
          {
            text: "• 加碼贈送！張盛舒《愛情 有方》電子書(價值$480 元)",
            isRed: true,
            isBold: true
          },
          {
            text: "• 批命格、十年大運、歲運 詳 批等熱門服務",
            isRed: false,
            isBold: false
          },
          { text: "• 300元算命金", isRed: false, isBold: false },
          {
            text: "• 300元算命金",
            isRed: false,
            isBold: false
          }
        ],
        text: [
          {
            isRed: false,
            isBold: false
          }
        ],
        inf: [
          {
            text: "1年期NT$3,600元",
            isBlack: false,
            isNormal: false
          }
        ],
        buttonText: "立即加入",
        BGColor: "#eeeeee"
      };
    },
    methods: {
      add() {
        if (!this.input) {
          alert("請填資料");
          return;
        }
        this.items.push({
          text: "•  " + this.input,
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
        const heading = document.getElementById("BT_COLOUR").classList;
        const gradient = e.target.id;
        const gr = e.target.classList;
        heading.replace(heading[1],gradient)
      },
      changeBorder(e){
        const heading = document.getElementById("BT_COLOUR").classList;
        const border = e.target.id;
        console.log(typeof(heading[0]))
        console.log(typeof(border));
        heading.replace(heading[0],border)
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
  background-color: #eee;
  width: 220px;
  max-height: 540px;
  position: relative;
  overflow: hidden;
  /* position: fixed;
  right: 0.8%;
  top: 15%; */
  box-shadow: 0px 0px 16px rgba($color: #000000, $alpha: 0.4);

  align-items: center;
}
.BOX_TOP {
  width: 100%;
  min-height: 60px;
  position: relative;
  background-color: #e6e6e6;
}
.BOX_TOP a.X {
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
.BOX_BG {
  width: 100%;
  border-bottom: 7px solid #eeeeee;
}
.BOX_BG .content {
  padding: 8px 14px;
  padding-bottom: 0px;
  max-height: 235px;
  overflow: hidden;
}
.BOX_BG .content li {
  line-height: 23px;
  margin: 4px 0px;
  font-size: 16px;
}
.BOX_BG .content li.isRed {
  color: #cc0000;
}
.BOX_BG .content li.isBold {
  font-weight: bold;
}
.BOX_BG .content li:last-child {
  margin-bottom: 0px;
}
.BOX_BG .content .spot {
  color: #cc0000;
  font-weight: bold;
}
.BOX_BG .yearprice {
  padding: 4px 0px;
  text-align: center;
  font-size: 21px;
  color: #cc0000;
  font-weight: bold;
}
.BOX_BG .yearprice.isBlack {
  color: black;
}
.BOX_BG .yearprice.isNormal {
  font-weight: normal;
}
.pq_e_BT{
  clear: both;
  width: 90%;
  margin: 0 auto;
  .ONE{
    width: 100%;
    height: auto;
    overflow: hidden;
    .pq_BT_SROUND{
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
      -moz-border-radius: 5px;
      -webkit-border-radius: 5px;
      border-radius: 5px;
    }
  }
}
.BOX_BG .e_BT {
  clear: both;
  width: 100%;
  height: auto;
  overflow: hidden;
}
.BOX_BG .e_BT ul.one {
  height: auto;
  overflow: hidden;
  margin: 0 auto;
}
.BOX_BG .e_BT ul.one li a {
  display: block;
  padding: 0;
  width: 190px;
  height: 46px;
  overflow: hidden;
  margin: 0 auto;
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  line-height: 46px;
  color: #ffffff;
  letter-spacing: 1px;
}

.BOX_BG .bottom {
  width: 190px;
  height: 142px;
  margin: 0 auto;
  margin-top: 8px;
  background-color: #ffffff;
}
.BOX_BG .bottom .title {
  height: 35px;
  font-size: 20px;
  text-align: center;
  background-color: #7e66de;
  color: #ffffff;
  p {
    line-height: 35px;
    font-weight: bold;
  }
}
.BOX_BG .bottom .infotext {
  text-align: center;
  height: auto;
  padding: 8px 0px;
}
.BOX_BG .bottom .infotext p.telphone {
  font-weight: bold;
  font-size: 19px;
}
.BOX_BG .bottom .infotext span {
  width: 80%;
  font-size: 8px;
}
.BOX_BG .bottom .e_BT {
  clear: both;
  width: 100%;
  height: auto;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 8px;
}
.BOX_BG .bottom .e_BT ul.one li a {
  display: block;
  width: 170px;
  height: 40px;
  overflow: hidden;
  margin: 0 auto;
  padding: 0;
  text-decoration: none;
  text-align: center;
  font-size: 20px;
  line-height: 40px;
  color: #ffffff;
}
a.BT_COLOUR_bottom {
  background: #d548f8;
  /* Old browsers */
  background: -moz-linear-gradient(top, #d548f8 0%, #9121d1 100%);
  /* FF3.6-15 */
  background: -webkit-linear-gradient(top, #d548f8 0%, #9121d1 100%);
  /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, #d548f8 0%, #9121d1 100%);
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  border-radius: 5px;
  border: 1px solid #9121d1;
  box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d548f8', endColorstr='#9121d1',GradientType=0 ); /* IE6-9 */
  &:hover {
    background: #9121d1; /* Old browsers */
    background: -moz-linear-gradient(
      top,
      #9121d1 0%,
      #d548f8 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      #9121d1 0%,
      #d548f8 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      #9121d1 0%,
      #d548f8 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#9121d1', endColorstr='#d548f8',GradientType=0 ); /* IE6-9 */
  }
}
/*直角*/
.pq_BT_REC{
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
  border-radius: 0px;
  -moz-border-radius: 0px;
  -webkit-border-radius: 0px;
}
/*小圓角 */
.pq_BT_SROUND{
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
      -moz-border-radius: 5px;
      -webkit-border-radius: 5px;
      border-radius: 5px;
    }
/*圓角 */
.pq_BT_ROUND{
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
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
}
/*大園角*/
.pq_BT_BROUND{
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
  -moz-border-radius: 40px;
  -webkit-border-radius: 40px;
  border-radius: 40px;
}

.pq_BG_GRA_RED{
  color: #ffffff;
	border:1px solid #a30000;
	background: #ff0000; /* Old browsers */
	background: -webkit-linear-gradient(#ff0000 0%, #b90000 100%);
	background: -o-linear-gradient(#ff0000 0%, #b90000 100%);
	background: linear-gradient(#ff0000 0%, #b90000 100%); /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff0000', endColorstr='#b90000',GradientType=0 ); /* IE6-9 */
	-moz-box-shadow:inset 0px 0px 2px rgba(255,255,255,1);
	-webkit-box-shadow:inset 0px 0px 2px rgba(255,255,255,1);
	box-shadow:inset 0px 0px 2px rgba(255,255,255,1);
  &:hover{
    color:#fff9bc;
    background: #b90000; /* Old browsers */
    background: -moz-linear-gradient(top, #b90000 0%, #ff0000 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, #b90000 0%,#ff0000 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, #b90000 0%,#ff0000 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b90000', endColorstr='#ff0000',GradientType=0 ); /* IE6-9 */
  }
}


.pq_BG_GRA_PINK01{
  color: #ffffff;
  border:1px solid #e2005a;
	background: #ff0090; /* Old browsers */
	background: -webkit-linear-gradient(#ff0090 0%, #e2005a 100%);
	background: -o-linear-gradient(#ff0090 0%, #e2005a 100%);
	background: linear-gradient(#ff0090 0%, #e2005a 100%); /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff0090', endColorstr='#e2005a',GradientType=0 ); /* IE6-9 */
	-moz-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	-webkit-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
  &:hover {
	color:#fff9bc;
	background: #e2005a; /* Old browsers */
	background: -moz-linear-gradient(top, #e2005a 0%, #ff0090 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(top, #e2005a 0%,#ff0090 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to bottom, #e2005a 0%,#ff0090 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2005a', endColorstr='#ff0090',GradientType=0 ); /* IE6-9 */
  }
}

/*粉色02  */
.pq_BG_GRA_PINK02{
  color: #ffffff;
	border:1px solid #da0061;
	background: #ff8dc0; /* Old browsers */
	background: -webkit-linear-gradient(#ff8dc0 0%, #ff4f9e 100%);
	background: -o-linear-gradient(#ff8dc0 0%, #ff4f9e 100%);
	background: linear-gradient(#ff8dc0 0%, #ff4f9e 100%); /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff8dc0', endColorstr='#ff4f9e',GradientType=0 ); /* IE6-9 */

	-moz-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	-webkit-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
  &:hover{
	color:#fff9bc;
	background: #ff4f9e; /* Old browsers */
	background: -moz-linear-gradient(top, #ff4f9e 0%, #ff8dc0 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(top, #ff4f9e 0%,#ff8dc0 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to bottom, #ff4f9e 0%,#ff8dc0 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff4f9e', endColorstr='#ff8dc0',GradientType=0 ); /* IE6-9 */
  }
}
/*粉色02*/

/*橘黃色01  */
.pq_BG_GRA_ORANGE01{
  color: #ffffff;
	border:1px solid #fe6600;
	background: #ff7200; /* Old browsers */
	background: -webkit-linear-gradient(#ff7200 0%, #e93700 100%);
	background: -o-linear-gradient(#ff7200 0%, #e93700 100%);
	background: linear-gradient(#ff7200 0%, #e93700 100%); /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff7200', endColorstr='#e93700',GradientType=0 ); /* IE6-9 */

	-moz-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	-webkit-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
  &:hover{
	color:#fff9bc;
	background: #e93700; /* Old browsers */
	background: -moz-linear-gradient(top, #e93700 0%, #ff7200 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(top, #e93700 0%,#ff7200 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to bottom, #e93700 0%,#ff7200 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e93700', endColorstr='#ff7200',GradientType=0 ); /* IE6-9 */
  }
}
/*橘黃色01*/

/*橘黃色02  */
.pq_BG_GRA_ORANGE02{
  color: #ffffff;
	border:1px solid #ff8800;
	background: #ffa946; /* Old browsers */
	background: -webkit-linear-gradient(#ffa946 0%, #ff8800 100%);
	background: -o-linear-gradient(#ffa946 0%, #ff8800 100%);
	background: linear-gradient(#ffa946 0%, #ff8800 100%); /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffa946', endColorstr='#ff8800',GradientType=0 ); /* IE6-9 */

	-moz-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	-webkit-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
  &:hover{
	color:#fff9bc;
	background: #ff8800; /* Old browsers */
	background: -moz-linear-gradient(top, #ff8800 0%, #ffa946 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(top, #ff8800 0%,#ffa946 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to bottom, #ff8800 0%,#ffa946 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff8800', endColorstr='#ffa946',GradientType=0 ); /* IE6-9 */
}
}
/*橘黃色02*/

/*綠色01*/
.pq_BG_GRA_GREEN{
  color: #ffffff;
	background: #81b907; /* Old browsers */
	background: -webkit-linear-gradient(#81b907 0%, #347f0b 100%);
	background: -o-linear-gradient(#81b907 0%, #347f0b 100%);
	background: linear-gradient(#81b907 0%, #347f0b 100%); /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#81b907', endColorstr='#347f0b',GradientType=0 ); /* IE6-9 */

	-moz-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	-webkit-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
  &:hover{
	color:#fff9bc;
	background: #347f0b; /* Old browsers */
	background: -moz-linear-gradient(top, #347f0b 0%, #81b907 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(top, #347f0b 0%,#81b907 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to bottom, #347f0b 0%,#81b907 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#347f0b', endColorstr='#81b907',GradientType=0 ); /* IE6-9 */
  }
}
/*綠色01*/

/*藍色01*/
.pq_BG_GRA_BLUE01{
  color: #ffffff;
	border:1px solid #013c9b;
	background: #009bf9; /* Old browsers */
	background: -webkit-linear-gradient(#009bf9 0%, #013796 100%);
	background: -o-linear-gradient(#009bf9 0%, #013796 100%);
	background: linear-gradient(#009bf9 0%, #013796 100%); /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#009bf9', endColorstr='#013796',GradientType=0 ); /* IE6-9 */

	-moz-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	-webkit-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
  &:hover{
	color:#fff9bc;
	background: #013796; /* Old browsers */
	background: -moz-linear-gradient(top, #013796 0%, #009bf9 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(top, #013796 0%,#009bf9 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to bottom, #013796 0%,#009bf9 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#013796', endColorstr='#009bf9',GradientType=0 ); /* IE6-9 */
  }
}
/*藍色01*/

/*藍色02*/
.pq_BG_GRA_BLUE02{
  color: #ffffff;
	border:1px solid #0061b3;
	background: #4badff; /* Old browsers */
	background: -webkit-linear-gradient(#4badff 0%, #3a8ed5 100%);
	background: -o-linear-gradient(#4badff 0%, #3a8ed5 100%);
	background: linear-gradient(#4badff 0%, #3a8ed5 100%); /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4badff', endColorstr='#3a8ed5',GradientType=0 ); /* IE6-9 */

	-moz-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	-webkit-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
  &:hover{
	color:#fff9bc;
	background: #3a8ed5; /* Old browsers */
	background: -moz-linear-gradient(top, #3a8ed5 0%, #4badff 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(top, #3a8ed5 0%,#4badff 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to bottom, #3a8ed5 0%,#4badff 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3a8ed5', endColorstr='#4badff',GradientType=0 ); /* IE6-9 */
  }
}
/*藍色02*/

/*紫色01*/
.pq_BG_GRA_PURPLE01{
  color: #ffffff;
	border:1px solid #760b6a;
	background: #b34fa8; /* Old browsers */
	background: -webkit-linear-gradient(#b34fa8 0%, #760b6a 100%);
	background: -o-linear-gradient(#b34fa8 0%, #760b6a 100%);
	background: linear-gradient(#b34fa8 0%, #760b6a 100%); /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b34fa8', endColorstr='#760b6a',GradientType=0 ); /* IE6-9 */

	-moz-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	-webkit-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
  &:hover{
	color:#fff9bc;
	background: #760b6a; /* Old browsers */
	background: -moz-linear-gradient(top, #760b6a 0%, #b34fa8 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(top, #760b6a 0%,#b34fa8 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to bottom, #760b6a 0%,#b34fa8 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#760b6a', endColorstr='#b34fa8',GradientType=0 ); /* IE6-9 */
  }
}
/*紫色01*/

/*紫色02*/
.pq_BG_GRA_PURPLE02{
  color: #ffffff;
	border:1px solid #a027fe;
	background: #cc66ff; /* Old browsers */
	background: -webkit-linear-gradient(#cc66ff 0%, #a027fe 100%);
	background: -o-linear-gradient(#cc66ff 0%, #a027fe 100%);
	background: linear-gradient(#cc66ff 0%, #a027fe 100%); /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cc66ff', endColorstr='#a027fe',GradientType=0 ); /* IE6-9 */
	-moz-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	-webkit-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
  &:hover{
	color:#fff9bc;
	background: #a027fe; /* Old browsers */
	background: -moz-linear-gradient(top, #a027fe 0%, #cc66ff 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(top, #a027fe 0%,#cc66ff 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to bottom, #a027fe 0%,#cc66ff 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a027fe', endColorstr='#cc66ff',GradientType=0 ); /* IE6-9 */
  }
}
//////////////單色//////////////

/*紅色01*/
.pq_BG_RED{
  color: #ffffff;
	border:1px solid #a30000;
	background: #ff0000;
  &:hover{
	color:#fff9bc;
	background: #b90000; /* Old browsers */}}
/*紅色01*/
/*粉色01*/
.pq_BG_PINK01{
	color:  #ffffff;
  border:1px solid #e2005a;
	background: #ff0090; /* Old browsers */
  &:hover{
	color:#fff9bc;
	background: #e2005a; /* Old browsers */
}
}

/*粉色01*/

/*粉色02*/
.pq_BG_PINK02{
  color:  #ffffff;
	border:1px solid #da0061;
	background: #ff8dc0; /* Old browsers */
  color: #ffffff;
  &:hover{
	color:#fff9bc;
	background: #ff4f9e; /* Old browsers */
}
}
/*粉色02*/

/*橘黃色01*/
.pq_BG_ORANGE01{
  color: #ffffff;
	border:1px solid #fe6600;
	background: #ff7200; /* Old browsers */
  &:hover{
	color:#fff9bc;
	background: #e93700; /* Old browsers */
}
}
/*橘黃色01*/

/*橘黃色02*/
.pq_BG_ORANGE02{
  color:  #ffffff;
	border:1px solid #ff8800;
	background: #ffa946; /* Old browsers */
  &:hover{
	color:#fff9bc;
	background: #ff8800; /* Old browsers */
}
}
/*橘黃色02*/

/*綠色01*/
.pq_BG_GREEN{
  color:  #ffffff;
	border:1px solid #347f0b;
	background: #81b907; /* Old browsers */
  &:hover{
	color:#fff9bc;
	background: #347f0b; /* Old browsers */
}
}
/*綠色01*/

/*藍色01*/
.pq_BG_BLUE01{
  color:  #ffffff;
	border:1px solid #013c9b;
	background: #009bf9; /* Old browsers */
  &:hover{
	color:#fff9bc;
	background: #013796; /* Old browsers */
}
}
/*藍色01*/

/*藍色02*/
.pq_BG_BLUE02{
  color:  #ffffff;
	border:1px solid #0061b3;
	background: #4badff; /* Old browsers */
  &:hover{
	color:#fff9bc;
	background: #3a8ed5; /* Old browsers */
}
}
/*藍色02*/

/*紫色01*/
.pq_BG_PURPLE01{
	color: #ffffff;
  border:1px solid #760b6a;
	background: #b34fa8; /* Old browsers */
  &:hover{
	color:#fff9bc;
	background: #760b6a; /* Old browsers */
}
}
/*紫色01*/

/*紫色02*/
.pq_BG_PURPLE02{
	color:#ffffff;
  border:1px solid #a027fe;
	background: #cc66ff; /* Old browsers */
  &:hover{
  color:#fff9bc;
	background: #a027fe; /* Old browsers */
  }
}
/*紫色02*/
</style>


