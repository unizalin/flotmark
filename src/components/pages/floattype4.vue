<template>
  <div class="container">
    <div class="row mt-5 p-5">
      <div class="col-3">
        <div id="INPUT_BOX">
          <div class="BOX_TOP">
            <a href="#" class="X"></a>
          </div>
          <div class="BOX_BG">
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
                <div class="form-group mt-2 ">
                  <div class="form-row">
                    <label for="text">按鈕文字</label>
                    <input type="text" class="form-control mt-2" id="text" placeholder="立即加入" v-model.trim="buttonText">
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
      buttonText: "立即加入"
    };
  }
};
</script>
<style scoped>
* {
  /* border: 1px solid black; */
  box-sizing: border-box;
}
input {
  width: 100%;
}

#INPUT_BOX {
  width: 200px;
  height: 240px;
  /* position: fixed;
  right: 0.8%;
  top: 15%; */
  z-index: 9;
}

#INPUT_BOX .BOX_TOP {
  width: 200px;
  height: 240px;
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
  /* height: 118px; */
  position: relative;
  /* border-right: 7px solid #e6e6e6; */
  /* border-left: 7px solid #e6e6e6; */
  clear: both;
}
#INPUT_BOX .BOX_BG > p:first-child {
  padding: 15px 15px 0 15px;
  font-size: 15px;
  text-align: center;
}
#INPUT_BOX .BOX_BG .e_BT {
  position: absolute;
  bottom: 40px;
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
  font-size: 16px;
  text-align: center;
  color: #cc0000;
  line-height: 16px;
  font-weight: bold;
}
#INPUT_BOX .BOX_FOOT {
  width: 200px;
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


