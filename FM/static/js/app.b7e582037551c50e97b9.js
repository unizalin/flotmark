webpackJsonp([1],{"0cNF":function(t,e){},"7wO+":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i=s("mtWM"),r=s.n(i),o=s("Rf8U"),n=s.n(o),l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var c=s("VU/8")({name:"App"},l,!1,function(t){s("r/5/")},null,null).exports,d=s("/ocq"),v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"col-md-2 d-none d-md-block bg-light sidebar"},[s("div",{staticClass:"sidebar-sticky"},[t._m(0),t._v(" "),s("ul",{staticClass:"nav flex-column mb-2"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/floattype1"}},[s("i",{staticClass:"fas fa-box-open"}),t._v("計次產品\n        ")])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/floattype2"}},[s("i",{staticClass:"far fa-list-alt"}),t._v(" 雙按鈕\n        ")])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/floattype3"}},[s("i",{staticClass:"fas fa-ticket-alt"}),t._v(" 活動頁\n        ")])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/floattype4"}},[s("i",{staticClass:"fas fa-ticket-alt"}),t._v(" 全圖\n        ")])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/floattype5"}},[s("i",{staticClass:"fas fa-ticket-alt"}),t._v(" 白金宣傳\n        ")])],1)]),t._v(" "),t._m(1),t._v(" "),s("ul",{staticClass:"nav flex-column mb-2"})])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h6",{staticClass:"sidebar-heading d-flex justify-content-between\n      align-items-center px-3 mt-4 mb-1 text-muted"},[e("span",[this._v("浮水公版")]),this._v(" "),e("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}},[e("span",{attrs:{"data-feather":"plus-circle"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h6",{staticClass:"sidebar-heading d-flex justify-content-between\n      align-items-center px-3 mt-4 mb-1 text-muted"},[e("span",[this._v("彈跳公版")]),this._v(" "),e("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}},[e("span",{attrs:{"data-feather":"plus-circle"}})])])}]},m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nav",{staticClass:"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"},[e("a",{staticClass:"navbar-brand col-sm-3 col-md-2 mr-0",attrs:{href:"#"}},[this._v("浮水公版")]),this._v(" "),e("input",{staticClass:"form-control form-control-dark w-100",attrs:{type:"text",placeholder:"Search","aria-label":"Search"}}),this._v(" "),e("ul",{staticClass:"navbar-nav px-3"},[e("li",{staticClass:"nav-item text-nowrap"})])])])}]},u={components:{Sidebar:s("VU/8")(null,v,!1,null,null,null).exports,Navbar:s("VU/8")(null,m,!1,null,null,null).exports}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Navbar"),this._v(" "),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("Sidebar"),this._v(" "),e("main",{staticClass:"col-md-9 ml-sm-auto col-lg-10 px-4",attrs:{role:"main"}},[e("router-view")],1)],1)])],1)},staticRenderFns:[]},f=s("VU/8")(u,_,!1,null,null,null).exports,p=(s("7t+N"),{data:function(){return{text:[{info:"",isBlack:!1,isNormal:!1}],price:[{info:"",isBlack:!1,isNormal:!1}],buttonText:"馬上算",borderColor:"#e6e6e6"}},methods:{changeColor:function(t){var e=document.getElementById("BT_COLOUR"),s=t.target.id;e.classList=[],e.classList.add(s)}}}),C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"row mt-5"},[s("div",{staticClass:"col-3"},[s("div",{attrs:{id:"INPUT_BOX"}},[t._m(0),t._v(" "),s("div",{staticClass:"BOX_BG",style:{"border-color":t.borderColor}},[s("p",{staticClass:"RED"},[s("span",{staticClass:"text",class:{isBlack:t.text.isBlack,isNormal:t.text.isNormal}},[t._v(t._s(t.text.info))]),t._v("NT$ "),s("span",{staticClass:"price",class:{isBlack:t.price.isBlack,isNormal:t.price.isNormal}},[t._v(t._s(t.price.info))])]),t._v(" "),s("div",{staticClass:"e_BT"},[s("ul",{staticClass:"ONE"},[s("li",[s("a",{staticClass:"BT_COLOUR ",attrs:{id:"BT_COLOUR",href:"#"}},[t._v(t._s(t.buttonText))])])])])])])]),t._v(" "),s("div",{staticClass:"col-9"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"card"},[s("h5",{staticClass:"card-header"},[t._v("更改")]),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"form-group mt-2"},[s("label",{attrs:{for:"text"}},[t._v("文字")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.text.info,expression:"text.info",modifiers:{trim:!0}}],staticClass:"form-control mt-2",attrs:{type:"text",id:"text",placeholder:"鐵定價"},domProps:{value:t.text.info},on:{input:function(e){e.target.composing||t.$set(t.text,"info",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),s("div",{staticClass:"form-check form-check-inline mt-2"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.text.isBlack,expression:"text.isBlack",modifiers:{trim:!0}}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"textcolor"},domProps:{checked:Array.isArray(t.text.isBlack)?t._i(t.text.isBlack,null)>-1:t.text.isBlack},on:{change:function(e){var s=t.text.isBlack,a=e.target,i=!!a.checked;if(Array.isArray(s)){var r=t._i(s,null);a.checked?r<0&&t.$set(t.text,"isBlack",s.concat([null])):r>-1&&t.$set(t.text,"isBlack",s.slice(0,r).concat(s.slice(r+1)))}else t.$set(t.text,"isBlack",i)}}}),t._v(" "),s("label",{staticClass:"form-check-label",attrs:{for:"textcolor"}},[t._v("\n                      黑色\n                    ")])]),t._v(" "),s("div",{staticClass:"form-check form-check-inline mt-2"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.text.isNormal,expression:"text.isNormal",modifiers:{trim:!0}}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"fontweight"},domProps:{checked:Array.isArray(t.text.isNormal)?t._i(t.text.isNormal,null)>-1:t.text.isNormal},on:{change:function(e){var s=t.text.isNormal,a=e.target,i=!!a.checked;if(Array.isArray(s)){var r=t._i(s,null);a.checked?r<0&&t.$set(t.text,"isNormal",s.concat([null])):r>-1&&t.$set(t.text,"isNormal",s.slice(0,r).concat(s.slice(r+1)))}else t.$set(t.text,"isNormal",i)}}}),t._v(" "),s("label",{staticClass:"form-check-label",attrs:{for:"fontweight"}},[t._v("\n                      一般體\n                    ")])])]),t._v(" "),s("div",{staticClass:"form-group mt-2 "},[s("label",{attrs:{for:"price"}},[t._v("價錢")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.price.info,expression:"price.info",modifiers:{trim:!0}}],staticClass:"form-control mt-2",attrs:{type:"text",id:"price",placeholder:"360"},domProps:{value:t.price.info},on:{input:function(e){e.target.composing||t.$set(t.price,"info",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),s("div",{staticClass:"form-check form-check-inline mt-2"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.price.isBlack,expression:"price.isBlack",modifiers:{trim:!0}}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"textcolor"},domProps:{checked:Array.isArray(t.price.isBlack)?t._i(t.price.isBlack,null)>-1:t.price.isBlack},on:{change:function(e){var s=t.price.isBlack,a=e.target,i=!!a.checked;if(Array.isArray(s)){var r=t._i(s,null);a.checked?r<0&&t.$set(t.price,"isBlack",s.concat([null])):r>-1&&t.$set(t.price,"isBlack",s.slice(0,r).concat(s.slice(r+1)))}else t.$set(t.price,"isBlack",i)}}}),t._v(" "),s("label",{staticClass:"form-check-label",attrs:{for:"textcolor"}},[t._v("\n                      黑色\n                    ")])]),t._v(" "),s("div",{staticClass:"form-check form-check-inline mt-2"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.price.isNormal,expression:"price.isNormal",modifiers:{trim:!0}}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"fontweight"},domProps:{checked:Array.isArray(t.price.isNormal)?t._i(t.price.isNormal,null)>-1:t.price.isNormal},on:{change:function(e){var s=t.price.isNormal,a=e.target,i=!!a.checked;if(Array.isArray(s)){var r=t._i(s,null);a.checked?r<0&&t.$set(t.price,"isNormal",s.concat([null])):r>-1&&t.$set(t.price,"isNormal",s.slice(0,r).concat(s.slice(r+1)))}else t.$set(t.price,"isNormal",i)}}}),t._v(" "),s("label",{staticClass:"form-check-label",attrs:{for:"fontweight"}},[t._v("\n                      一般體\n                    ")])]),t._v(" "),s("div",{staticClass:"mt-2"},[s("label",{attrs:{for:"border"}},[t._v("邊框顏色")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.borderColor,expression:"borderColor",modifiers:{trim:!0}}],staticClass:"form-control ",style:{background:t.borderColor},attrs:{type:"text",id:"border",placeholder:"#e6e6e6",maxlength:"7"},domProps:{value:t.borderColor},on:{input:function(e){e.target.composing||(t.borderColor=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),s("div",{staticClass:"form mt-2"},[s("label",{attrs:{for:"text"}},[t._v("按鈕文字")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.buttonText,expression:"buttonText",modifiers:{trim:!0}}],staticClass:"form-control ",attrs:{type:"text",id:"text",placeholder:"立即加入"},domProps:{value:t.buttonText},on:{input:function(e){e.target.composing||(t.buttonText=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),s("div",{staticClass:"mt-2"},[s("label",{attrs:{for:"inputState"}},[t._v("按鈕底色")]),t._v(" "),s("div",{staticClass:"btns p2 mt-2 "},[s("div",{staticClass:"col mt-2 p-0 d-flex flex-wrap align-content-between justify-content-between"},[s("button",{staticClass:"btn mt-2 gradient gradient-1 ",attrs:{type:"button",id:"gradient-1"},on:{click:t.changeColor}},[t._v("primary")]),t._v(" "),s("button",{staticClass:"btn mt-2 gradient gradient-2 ",attrs:{type:"button",id:"gradient-2"},on:{click:t.changeColor}},[t._v("Secondary")]),t._v(" "),s("button",{staticClass:"btn mt-2 gradient gradient-3 ",attrs:{type:"button",id:"gradient-3"},on:{click:t.changeColor}},[t._v("Success")]),t._v(" "),s("button",{staticClass:"btn mt-2 gradient gradient-4 ",attrs:{type:"button",id:"gradient-4"},on:{click:t.changeColor}},[t._v("Danger")]),t._v(" "),s("button",{staticClass:"btn mt-2 gradient gradient-5 ",attrs:{type:"button",id:"gradient-5"},on:{click:t.changeColor}},[t._v("Warning")]),t._v(" "),s("button",{staticClass:"btn mt-2 gradient gradient-6 ",attrs:{type:"button",id:"gradient-6"},on:{click:t.changeColor}},[t._v("Info")]),t._v(" "),s("button",{staticClass:"btn mt-2 gradient gradient-7 ",attrs:{type:"button",id:"gradient-7"},on:{click:t.changeColor}},[t._v("Light")]),t._v(" "),s("button",{staticClass:"btn mt-2 gradient gradient-8 ",attrs:{type:"button",id:"gradient-8"},on:{click:t.changeColor}},[t._v("Dark")])])])])])])])]),t._v(" "),t._m(1)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"BOX_TOP"},[e("a",{staticClass:"X",attrs:{href:"#"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-6"},[e("div",{staticClass:"card"},[e("h5",{staticClass:"card-header"},[this._v("代碼")]),this._v(" "),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[this._v("Special title treatment")]),this._v(" "),e("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[this._v("全選+複製")])])])])}]};var h=s("VU/8")(p,C,!1,function(t){s("0cNF")},"data-v-5f512e2e",null).exports,b={data:function(){return{left:[{text:"完整鑑定"},{price:"800"}],right:[{text:"升級白金"},{price:"3,600"}],borderColor:"#e6e6e6"}},methods:{changeColor:function(t){var e=document.getElementById("BT_COLOUR"),s=t.target.id;e.classList=[],e.classList.add(s);var a=document.getElementById("BT_COLOUR_2"),i=t.target.id;a.classList=[],a.classList.add(i)}}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"row mt-5"},[s("div",{staticClass:"col-3"},[s("div",{attrs:{id:"INPUT_BOX"}},[t._m(0),t._v(" "),s("div",{staticClass:"BOX_BG",style:{borderColor:t.borderColor}},[s("div",{staticClass:"e_BT"},[s("ul",{staticClass:"TWO"},[s("li",[s("a",{staticClass:"BT_COLOUR",attrs:{href:"#",id:"BT_COLOUR"}},[t._v(t._s(t.left.text)),s("p",[t._v("("+t._s(t.left.price)+")")])])]),t._v(" "),s("li",[s("a",{staticClass:"BT_COLOUR",attrs:{href:"#",id:"BT_COLOUR_2"}},[t._v(t._s(t.right.text)),s("p",[t._v("("+t._s(t.right.price)+")")])])])])]),t._v(" "),t._m(1)])])]),t._v(" "),s("div",{staticClass:"col-9"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"card"},[s("h5",{staticClass:"card-header"},[t._v("更改")]),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"text-left"},[s("div",{staticClass:"form-row mb-2"},[s("div",{staticClass:"col"},[s("label",{attrs:{for:"text"}},[t._v("文字(Left)")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.left.text,expression:"left.text"}],staticClass:"form-control mt-2",attrs:{type:"text",id:"text",placeholder:"完整鑑定"},domProps:{value:t.left.text},on:{input:function(e){e.target.composing||t.$set(t.left,"text",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"col"},[s("label",{attrs:{for:"price"}},[t._v("價錢(Left)")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.left.price,expression:"left.price"}],staticClass:"form-control mt-2",attrs:{type:"text",id:"price",placeholder:"800"},domProps:{value:t.left.price},on:{input:function(e){e.target.composing||t.$set(t.left,"price",e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"form-row"},[s("div",{staticClass:"col"},[s("label",{attrs:{for:"text"}},[t._v("文字(Right)")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.right.text,expression:"right.text"}],staticClass:"form-control mt-2",attrs:{type:"text",id:"text",placeholder:"升級白金"},domProps:{value:t.right.text},on:{input:function(e){e.target.composing||t.$set(t.right,"text",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"col"},[s("label",{attrs:{for:"price"}},[t._v("價錢(Right)")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.right.price,expression:"right.price"}],staticClass:"form-control mt-2",attrs:{type:"text",id:"price",placeholder:"3,600"},domProps:{value:t.right.price},on:{input:function(e){e.target.composing||t.$set(t.right,"price",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"mt-2"},[s("label",{attrs:{for:"border"}},[t._v("邊框顏色")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.borderColor,expression:"borderColor",modifiers:{trim:!0}},{name:"model",rawName:"v-model",value:t.borderColor,expression:"borderColor"}],staticClass:"form-control mt-2",style:{background:t.borderColor},attrs:{type:"text",id:"border",placeholder:"#e6e6e6",maxlength:"7"},domProps:{value:t.borderColor,value:t.borderColor},on:{input:[function(e){e.target.composing||(t.borderColor=e.target.value)},function(e){e.target.composing||(t.borderColor=e.target.value.trim())}],blur:function(e){t.$forceUpdate()}}})]),t._v(" "),s("div",{staticClass:"mt-2"},[s("label",{attrs:{for:"inputState"}},[t._v("按鈕底色")]),t._v(" "),s("div",{staticClass:"btns  mt-2 "},[s("div",{staticClass:"  d-flex justify-content-between flex-wrap align-items-content-between "},[s("button",{staticClass:"btn gradient-1 mt-2",attrs:{type:"button",id:"gradient-1"},on:{click:t.changeColor}},[t._v("primary")]),t._v(" "),s("button",{staticClass:"btn gradient-2 mt-2",attrs:{type:"button",id:"gradient-2"},on:{click:t.changeColor}},[t._v("Secondary")]),t._v(" "),s("button",{staticClass:"btn gradient-3 mt-2",attrs:{type:"button",id:"gradient-3"},on:{click:t.changeColor}},[t._v("Success")]),t._v(" "),s("button",{staticClass:"btn gradient-4 mt-2",attrs:{type:"button",id:"gradient-4"},on:{click:t.changeColor}},[t._v("Danger")]),t._v(" "),s("button",{staticClass:"btn gradient-5 mt-2",attrs:{type:"button",id:"gradient-5"},on:{click:t.changeColor}},[t._v("Warning")]),t._v(" "),s("button",{staticClass:"btn gradient-6 mt-2",attrs:{type:"button",id:"gradient-6"},on:{click:t.changeColor}},[t._v("Info")]),t._v(" "),s("button",{staticClass:"btn gradient-7 mt-2",attrs:{type:"button",id:"gradient-7"},on:{click:t.changeColor}},[t._v("Light")]),t._v(" "),s("button",{staticClass:"btn gradient-8 mt-2",attrs:{type:"button",id:"gradient-8"},on:{click:t.changeColor}},[t._v("Dark")])])])])])])]),t._v(" "),t._m(2)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"BOX_TOP"},[e("a",{staticClass:"X",attrs:{href:"#"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"TPAY"},[e("span",[this._v("付款")]),this._v("點數、信用卡、手機小額、PayPal")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-6"},[e("div",{staticClass:"card"},[e("h5",{staticClass:"card-header"},[this._v("代碼")]),this._v(" "),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[this._v("Special title treatment")]),this._v(" "),e("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[this._v("全選+複製")])])])])}]};var x=s("VU/8")(b,g,!1,function(t){s("zpwA")},"data-v-35f0ab2a",null).exports,k={data:function(){return{input:"",items:[{text:"Learn VueJs",isRed:!1,isBold:!1},{text:"Learn VueJs",isRed:!0,isBold:!1}],text:[{isRed:!1,isBold:!1}],buttonText:"立即加入",borderColor:"#e6e6e6"}},methods:{add:function(){var t=document.getElementById("textcolor");this.input?(this.items.push({text:this.input,isRed:this.text.isRed,isBold:this.text.isBold}),this.input="",t.removeAttr("checked")):alert("請填資料")},remove:function(t){this.items.splice(t,1)},changeColor:function(t){var e=document.getElementById("BT_COLOUR"),s=t.target.id;e.classList=[],e.classList.add(s)}}},y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"row mt-5"},[s("div",{staticClass:"col-3"},[s("div",{attrs:{id:"INPUT_BOX"}},[t._m(0),t._v(" "),s("div",{staticClass:"BOX_BG",style:{borderColor:t.borderColor}},[s("p",{staticClass:"BLACK"},t._l(t.items,function(e,a){return s("span",{key:a,staticClass:"text",class:{isRed:e.isRed,isBold:e.isBold},attrs:{data:e},on:{click:function(e){t.remove(a)}}},[t._v(t._s(e.text))])})),t._v(" "),s("div",{staticClass:"e_BT"},[s("ul",{staticClass:"ONE"},[s("li",[s("a",{staticClass:"BT_COLOUR",attrs:{id:"BT_COLOUR",href:"#"}},[t._v(t._s(t.buttonText))])])])])])])]),t._v(" "),s("div",{staticClass:"col-9"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"card"},[s("h5",{staticClass:"card-header"},[t._v("更改")]),t._v(" "),s("div",{staticClass:"card-body"},[s("h2",[t._v("上方文字欄")]),t._v(" "),s("div",{staticClass:"form-row mt-2 mb-2"},[s("div",{staticClass:"col-7"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.input,expression:"input",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),s("div",{staticClass:"col-2"},[s("button",{staticClass:"btn btn-primary",on:{click:t.add}},[t._v("+")])]),t._v(" "),s("div",{staticClass:"col-3"},[s("div",{staticClass:"form-check form-check-inline "},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.text.isRed,expression:"text.isRed"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"textcolor"},domProps:{checked:Array.isArray(t.text.isRed)?t._i(t.text.isRed,null)>-1:t.text.isRed},on:{change:function(e){var s=t.text.isRed,a=e.target,i=!!a.checked;if(Array.isArray(s)){var r=t._i(s,null);a.checked?r<0&&t.$set(t.text,"isRed",s.concat([null])):r>-1&&t.$set(t.text,"isRed",s.slice(0,r).concat(s.slice(r+1)))}else t.$set(t.text,"isRed",i)}}}),t._v(" "),s("label",{staticClass:"form-check-label",attrs:{for:"textcolor"}},[t._v("\n                      紅色\n                    ")])]),t._v(" "),s("div",{staticClass:"form-check form-check-inline "},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.text.isBold,expression:"text.isBold"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"fontweight"},domProps:{checked:Array.isArray(t.text.isBold)?t._i(t.text.isBold,null)>-1:t.text.isBold},on:{change:function(e){var s=t.text.isBold,a=e.target,i=!!a.checked;if(Array.isArray(s)){var r=t._i(s,null);a.checked?r<0&&t.$set(t.text,"isBold",s.concat([null])):r>-1&&t.$set(t.text,"isBold",s.slice(0,r).concat(s.slice(r+1)))}else t.$set(t.text,"isBold",i)}}}),t._v(" "),s("label",{staticClass:"form-check-label",attrs:{for:"fontweight"}},[t._v("\n                      粗體\n                    ")])])])]),t._v(" "),s("div",{staticClass:"form-row mt-2"},[s("label",{attrs:{for:"text"}},[t._v("按鈕文字")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.buttonText,expression:"buttonText",modifiers:{trim:!0}}],staticClass:"form-control mt-2",attrs:{type:"text",id:"text",placeholder:"立即加入"},domProps:{value:t.buttonText},on:{input:function(e){e.target.composing||(t.buttonText=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),s("div",{staticClass:"form-row mt-2"},[s("label",{attrs:{for:"border"}},[t._v("邊框顏色")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.borderColor,expression:"borderColor",modifiers:{trim:!0}}],staticClass:"form-control mt-2",style:{background:t.borderColor},attrs:{type:"text",id:"border",placeholder:"#e6e6e6",maxlength:"7"},domProps:{value:t.borderColor},on:{input:function(e){e.target.composing||(t.borderColor=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),s("div",{staticClass:"mt-2"},[s("label",{attrs:{for:"inputState"}},[t._v("按鈕底色")]),t._v(" "),s("div",{staticClass:"btns  mt-2 "},[s("div",{staticClass:"  d-flex justify-content-between flex-wrap align-items-content-between "},[s("button",{staticClass:"btn gradient-1 mt-2",attrs:{type:"button",id:"gradient-1"},on:{click:t.changeColor}},[t._v("primary")]),t._v(" "),s("button",{staticClass:"btn gradient-2 mt-2",attrs:{type:"button",id:"gradient-2"},on:{click:t.changeColor}},[t._v("Secondary")]),t._v(" "),s("button",{staticClass:"btn gradient-3 mt-2",attrs:{type:"button",id:"gradient-3"},on:{click:t.changeColor}},[t._v("Success")]),t._v(" "),s("button",{staticClass:"btn gradient-4 mt-2",attrs:{type:"button",id:"gradient-4"},on:{click:t.changeColor}},[t._v("Danger")]),t._v(" "),s("button",{staticClass:"btn gradient-5 mt-2",attrs:{type:"button",id:"gradient-5"},on:{click:t.changeColor}},[t._v("Warning")]),t._v(" "),s("button",{staticClass:"btn gradient-6 mt-2",attrs:{type:"button",id:"gradient-6"},on:{click:t.changeColor}},[t._v("Info")]),t._v(" "),s("button",{staticClass:"btn gradient-7 mt-2",attrs:{type:"button",id:"gradient-7"},on:{click:t.changeColor}},[t._v("Light")]),t._v(" "),s("button",{staticClass:"btn gradient-8 mt-2",attrs:{type:"button",id:"gradient-8"},on:{click:t.changeColor}},[t._v("Dark")])])])])])])]),t._v(" "),t._m(1)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"BOX_TOP"},[e("a",{staticClass:"X",attrs:{href:"#"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-6"},[e("div",{staticClass:"card"},[e("h5",{staticClass:"card-header"},[this._v("代碼")]),this._v(" "),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[this._v("Special title treatment")]),this._v(" "),e("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[this._v("全選+複製")])])])])}]};var B=s("VU/8")(k,y,!1,function(t){s("TtJ9")},"data-v-1b3a0a4a",null).exports,w={data:function(){return{buttonText:"立即加入"}},methods:{changeColor:function(t){var e=document.getElementById("BT_COLOUR"),s=t.target.id;e.classList=[],e.classList.add(s)}}},N={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"row mt-5"},[s("div",{staticClass:"col-3"},[s("div",{attrs:{id:"INPUT_BOX"}},[t._m(0),t._v(" "),s("div",{staticClass:"BOX_BG"},[s("div",{staticClass:"e_BT"},[s("ul",{staticClass:"ONE"},[s("li",[s("a",{staticClass:"BT_COLOUR",attrs:{id:"BT_COLOUR",href:"#"}},[t._v(t._s(t.buttonText))])])])])])])]),t._v(" "),s("div",{staticClass:"col-9"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"card"},[s("h5",{staticClass:"card-header"},[t._v("更改")]),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"form-group mt-2 "},[s("div",{staticClass:"form-row"},[s("label",{attrs:{for:"text"}},[t._v("按鈕文字")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.buttonText,expression:"buttonText",modifiers:{trim:!0}}],staticClass:"form-control mt-2",attrs:{type:"text",id:"text",placeholder:"立即加入"},domProps:{value:t.buttonText},on:{input:function(e){e.target.composing||(t.buttonText=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})])]),t._v(" "),s("div",{staticClass:"mt-2"},[s("label",{attrs:{for:"inputState"}},[t._v("按鈕底色")]),t._v(" "),s("div",{staticClass:"btns  mt-2 "},[s("div",{staticClass:"  d-flex justify-content-between flex-wrap align-items-content-between "},[s("button",{staticClass:"btn gradient-1 mt-2",attrs:{type:"button",id:"gradient-1"},on:{click:t.changeColor}},[t._v("primary")]),t._v(" "),s("button",{staticClass:"btn gradient-2 mt-2",attrs:{type:"button",id:"gradient-2"},on:{click:t.changeColor}},[t._v("Secondary")]),t._v(" "),s("button",{staticClass:"btn gradient-3 mt-2",attrs:{type:"button",id:"gradient-3"},on:{click:t.changeColor}},[t._v("Success")]),t._v(" "),s("button",{staticClass:"btn gradient-4 mt-2",attrs:{type:"button",id:"gradient-4"},on:{click:t.changeColor}},[t._v("Danger")]),t._v(" "),s("button",{staticClass:"btn gradient-5 mt-2",attrs:{type:"button",id:"gradient-5"},on:{click:t.changeColor}},[t._v("Warning")]),t._v(" "),s("button",{staticClass:"btn gradient-6 mt-2",attrs:{type:"button",id:"gradient-6"},on:{click:t.changeColor}},[t._v("Info")]),t._v(" "),s("button",{staticClass:"btn gradient-7 mt-2",attrs:{type:"button",id:"gradient-7"},on:{click:t.changeColor}},[t._v("Light")]),t._v(" "),s("button",{staticClass:"btn gradient-8 mt-2",attrs:{type:"button",id:"gradient-8"},on:{click:t.changeColor}},[t._v("Dark")])])])])])])]),t._v(" "),t._m(1)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"BOX_TOP"},[e("a",{staticClass:"X",attrs:{href:"#"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-6"},[e("div",{staticClass:"card"},[e("h5",{staticClass:"card-header"},[this._v("代碼")]),this._v(" "),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[this._v("Special title treatment")]),this._v(" "),e("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[this._v("全選+複製")])])])])}]};var $=s("VU/8")(w,N,!1,function(t){s("7wO+")},"data-v-c43677d6",null).exports,R={data:function(){return{input:"",items:[{text:"•服務升級！登入算紫微財 富命盤(價值$480元)",isRed:!0,isBold:!0},{text:"•加碼贈送！張盛舒《愛情 有方》電子書(價值$480 元)",isRed:!0,isBold:!0},{text:"• 批命格、十年大運、歲運 詳 批等熱門服務",isRed:!1,isBold:!1},{text:"• 300元算命金",isRed:!1,isBold:!1},{text:"• 300元算命金",isRed:!1,isBold:!1}],text:[{isRed:!1,isBold:!1}],inf:[{text:"1年期NT$3,600N元",isBlack:!1,isNormal:!1}],buttonText:"立即加入",borderColor:"#e6e6e6"}},methods:{add:function(){this.input?(this.items.push({text:this.input,isRed:this.text.isRed,isBold:this.text.isBold}),this.input=""):alert("請填資料")},remove:function(t){this.items.splice(t,1)},changeColor:function(t){var e=document.getElementById("BT_COLOUR"),s=t.target.id;e.classList=[],e.classList.add(s)}}},T={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"row mt-5"},[s("div",{staticClass:"col-3"},[s("div",{attrs:{id:"INPUT_BOX"}},[t._m(0),t._v(" "),s("div",{staticClass:"BOX_BG",style:{borderColor:t.borderColor}},[s("ul",{staticClass:"content"},t._l(t.items,function(e,a){return s("li",{key:a,class:{isRed:e.isRed,isBold:e.isBold},attrs:{data:e},on:{click:function(e){t.remove(a)}}},[t._v(t._s(e.text))])})),t._v(" "),s("p",{staticClass:"yearprice",class:{isBlack:t.inf.isBlack,isNormal:t.inf.isNormal}},[t._v(t._s(t.inf.text))]),t._v(" "),t._m(1),t._v(" "),t._m(2)])])]),t._v(" "),s("div",{staticClass:"col-9"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"card"},[s("h5",{staticClass:"card-header"},[t._v("更改")]),t._v(" "),s("div",{staticClass:"card-body"},[s("h2",[t._v("上方文字欄")]),t._v(" "),s("div",{staticClass:"form-row mt-2 mb-2"},[s("div",{staticClass:"col-7"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.input,expression:"input",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"value"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),s("div",{staticClass:"col-2"},[s("button",{staticClass:"btn btn-primary",on:{click:t.add}},[t._v("+")])]),t._v(" "),s("div",{staticClass:"col-3"},[s("div",{staticClass:"form-check form-check-inline "},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.text.isRed,expression:"text.isRed",modifiers:{trim:!0}}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"textcolor"},domProps:{checked:Array.isArray(t.text.isRed)?t._i(t.text.isRed,null)>-1:t.text.isRed},on:{change:function(e){var s=t.text.isRed,a=e.target,i=!!a.checked;if(Array.isArray(s)){var r=t._i(s,null);a.checked?r<0&&t.$set(t.text,"isRed",s.concat([null])):r>-1&&t.$set(t.text,"isRed",s.slice(0,r).concat(s.slice(r+1)))}else t.$set(t.text,"isRed",i)}}}),t._v(" "),s("label",{staticClass:"form-check-label",attrs:{for:"textcolor"}},[t._v("\n                      紅色\n                    ")])]),t._v(" "),s("div",{staticClass:"form-check form-check-inline "},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.text.isBold,expression:"text.isBold",modifiers:{trim:!0}}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"fontweight"},domProps:{checked:Array.isArray(t.text.isBold)?t._i(t.text.isBold,null)>-1:t.text.isBold},on:{change:function(e){var s=t.text.isBold,a=e.target,i=!!a.checked;if(Array.isArray(s)){var r=t._i(s,null);a.checked?r<0&&t.$set(t.text,"isBold",s.concat([null])):r>-1&&t.$set(t.text,"isBold",s.slice(0,r).concat(s.slice(r+1)))}else t.$set(t.text,"isBold",i)}}}),t._v(" "),s("label",{staticClass:"form-check-label",attrs:{for:"fontweight"}},[t._v("\n                      粗體\n                    ")])])])]),t._v(" "),s("div",{staticClass:"form-group mt-2"},[s("label",{attrs:{for:"text"}},[t._v("文字")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inf.text,expression:"inf.text",modifiers:{trim:!0}}],staticClass:"form-control mt-2",attrs:{type:"text",id:"text",placeholder:"1年期NT$3,600N元"},domProps:{value:t.inf.text},on:{input:function(e){e.target.composing||t.$set(t.inf,"text",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),s("div",{staticClass:"form-check form-check-inline mt-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.inf.isBlack,expression:"inf.isBlack"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"textcolor"},domProps:{checked:Array.isArray(t.inf.isBlack)?t._i(t.inf.isBlack,null)>-1:t.inf.isBlack},on:{change:function(e){var s=t.inf.isBlack,a=e.target,i=!!a.checked;if(Array.isArray(s)){var r=t._i(s,null);a.checked?r<0&&t.$set(t.inf,"isBlack",s.concat([null])):r>-1&&t.$set(t.inf,"isBlack",s.slice(0,r).concat(s.slice(r+1)))}else t.$set(t.inf,"isBlack",i)}}}),t._v(" "),s("label",{staticClass:"form-check-label",attrs:{for:"textcolor"}},[t._v("\n                      黑色\n                    ")])]),t._v(" "),s("div",{staticClass:"form-check form-check-inline mt-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.inf.isNormal,expression:"inf.isNormal"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"fontweight"},domProps:{checked:Array.isArray(t.inf.isNormal)?t._i(t.inf.isNormal,null)>-1:t.inf.isNormal},on:{change:function(e){var s=t.inf.isNormal,a=e.target,i=!!a.checked;if(Array.isArray(s)){var r=t._i(s,null);a.checked?r<0&&t.$set(t.inf,"isNormal",s.concat([null])):r>-1&&t.$set(t.inf,"isNormal",s.slice(0,r).concat(s.slice(r+1)))}else t.$set(t.inf,"isNormal",i)}}}),t._v(" "),s("label",{staticClass:"form-check-label",attrs:{for:"fontweight"}},[t._v("\n                      一般體\n                    ")])])]),t._v(" "),s("div",{staticClass:"form-row mt-2"},[s("label",{attrs:{for:"text"}},[t._v("按鈕文字")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.buttonText,expression:"buttonText",modifiers:{trim:!0}}],staticClass:"form-control mt-2",attrs:{type:"text",id:"text",placeholder:"立即加入"},domProps:{value:t.buttonText},on:{input:function(e){e.target.composing||(t.buttonText=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),s("div",{staticClass:"form-row mt-2"},[s("label",{attrs:{for:"border"}},[t._v("邊框顏色")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.borderColor,expression:"borderColor",modifiers:{trim:!0}}],staticClass:"form-control mt-2",style:{background:t.borderColor},attrs:{type:"text",id:"border",placeholder:"#e6e6e6",maxlength:"7"},domProps:{value:t.borderColor},on:{input:function(e){e.target.composing||(t.borderColor=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),s("div",{staticClass:"mt-2"},[s("label",{attrs:{for:"inputState"}},[t._v("按鈕底色")]),t._v(" "),s("div",{staticClass:"btns  mt-2 "},[s("div",{staticClass:"  d-flex justify-content-between flex-wrap align-items-content-between "},[s("button",{staticClass:"btn gradient-1 mt-2",attrs:{type:"button",id:"gradient-1"},on:{click:t.changeColor}},[t._v("primary")]),t._v(" "),s("button",{staticClass:"btn gradient-2 mt-2",attrs:{type:"button",id:"gradient-2"},on:{click:t.changeColor}},[t._v("Secondary")]),t._v(" "),s("button",{staticClass:"btn gradient-3 mt-2",attrs:{type:"button",id:"gradient-3"},on:{click:t.changeColor}},[t._v("Success")]),t._v(" "),s("button",{staticClass:"btn gradient-4 mt-2",attrs:{type:"button",id:"gradient-4"},on:{click:t.changeColor}},[t._v("Danger")]),t._v(" "),s("button",{staticClass:"btn gradient-5 mt-2",attrs:{type:"button",id:"gradient-5"},on:{click:t.changeColor}},[t._v("Warning")]),t._v(" "),s("button",{staticClass:"btn gradient-6 mt-2",attrs:{type:"button",id:"gradient-6"},on:{click:t.changeColor}},[t._v("Info")]),t._v(" "),s("button",{staticClass:"btn gradient-7 mt-2",attrs:{type:"button",id:"gradient-7"},on:{click:t.changeColor}},[t._v("Light")]),t._v(" "),s("button",{staticClass:"btn gradient-8 mt-2",attrs:{type:"button",id:"gradient-8"},on:{click:t.changeColor}},[t._v("Dark")])])])])])])]),t._v(" "),t._m(3)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"BOX_TOP"},[e("a",{staticClass:"X",attrs:{href:"#"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"e_BT"},[e("ul",{staticClass:"one"},[e("li",[e("a",{staticClass:"BT_COLOUR_top",attrs:{id:"BT_COLOUR",href:"#"}},[this._v("立即加入")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bottom"},[e("div",{staticClass:"title"},[e("p",[this._v("白金服務諮詢專線")])]),this._v(" "),e("div",{staticClass:"infotext"},[e("p",[this._v("(02) 26980111#512 ")]),e("small",[this._v("服務時間：週一至週五09:00-18:00")]),this._v(" "),e("div",{staticClass:"e_BT"},[e("ul",{staticClass:"one"},[e("li",[e("a",{staticClass:"BT_COLOUR_bottom",attrs:{href:"#"}},[this._v("我想瞭解本服務")])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-6"},[e("div",{staticClass:"card"},[e("h5",{staticClass:"card-header"},[this._v("代碼")]),this._v(" "),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[this._v("Special title treatment")]),this._v(" "),e("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[this._v("全選+複製")])])])])}]};var O=s("VU/8")(R,T,!1,function(t){s("kUXg")},"data-v-03bfe765",null).exports;a.a.use(d.a);var U=new d.a({routes:[{path:"/",name:"Floatmark",component:f,children:[{path:"/floattype1",name:"Floattype1",component:h},{path:"/floattype2",name:"Floattype2",component:x},{path:"/floattype3",name:"Floattype3",component:B},{path:"/floattype4",name:"Floattype4",component:$},{path:"/floattype5",name:"Floattype5",component:O}]}]});s("K3J8");a.a.use(n.a,r.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:U,components:{App:c},template:"<App/>"})},TtJ9:function(t,e){},kUXg:function(t,e){},"r/5/":function(t,e){},zpwA:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b7e582037551c50e97b9.js.map