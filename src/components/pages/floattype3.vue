<template>
  <div>
    <div class="row mt-5">
      <div class="col-lg-3 col-md-5">
        <div id="INPUT_BOX">
          <div class="BOX_TOP">
            <a onclick="document.getElementById('INPUT_BOX').style.display='none';return false;" href="#" class="X"></a>
          </div>
          <div class="BOX_BG" :style="{borderColor:borderColor}">
            <p class="BLACK"> <span class="text" :class="{isRed: item.isRed,isBold:item.isBold}" v-for="(item,idx) in items" v-on:click="remove(idx)" :key="idx" :data="item">{{item.text}}</span></p>
            <div class="pq_e_BT">
              <ul class="ONE">
                <li><a id="BT_COLOUR" class="pq_BT_SROUND pq_BG_GRA_RED " href="#">{{buttonText}}</a></li>
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
                <div class="mt-2">
                    <label>邊框</label>
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

.BOX_TOP {
  width: 100%;
  height: 132px;
  background-color: #e6e6e6;
  position: relative;
  .X{
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
  width: 200px;
  height: 118px;
  border: 7px solid #e6e6e6;
  border-top: none;
  clear: both;
  background-color: #fff;
  > p:first-child {
  padding: 15px 15px 0 15px;
  font-size: 15px;
  text-align: center;
  .isRed{
    color: #c00
  }
  .isBold{
    font-weight: bold;
  }
  }
}


.pq_e_BT{
  clear: both;
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding-top: 5px;
  .ONE{
    width: 100%;
    height: auto;
    margin:0 auto;
    overflow: hidden;
    li{
      width: 80%;
      margin: 0 auto;
    }
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


