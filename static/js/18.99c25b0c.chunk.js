(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[18],{72:function(a,t,i){"use strict";i.r(t),i.d(t,"bds_avatar",(function(){return s}));var e=i(9),s=function(){function a(a){var t=this;Object(e.r)(this,a),this.typoSize="fs-20",this.iconSize="large",this.name=null,this.thumbnail=null,this.size="standard",this.upload=!1,this.ellipsis=null,this.dataTest=null,this.selectTypoSize=function(a){switch(a){case"micro":t.typoSize="fs-12",t.iconSize="xx-small";break;case"extra-small":t.typoSize="fs-14",t.iconSize="x-small";break;case"small":t.typoSize="fs-16",t.iconSize="small";break;case"standard":t.typoSize="fs-20",t.iconSize="medium";break;case"large":t.typoSize="fs-24",t.iconSize="large";break;case"extra-large":t.typoSize="fs-32",t.iconSize="x-large";break;default:t.typoSize="fs-20",t.iconSize="medium"}}}return a.prototype.render=function(){var a,t=["purple","brand","green","brown","pink"],i=t[Math.floor(Math.random()*t.length)],s=!this.name||this.ellipsis?"neutral":i,n=this.name?this.name.split(" "):[],o=n.length?n.shift().charAt(0):"",r=n.length?n.pop().charAt(0):"",l=this.upload?"button":"div";return this.selectTypoSize(this.size),Object(e.h)(l,{class:(a={avatar:!0},a["avatar__size--".concat(this.size)]=!0,a["avatar__color--".concat(s)]=!0,a.upload=this.upload,a),"data-test":this.dataTest},this.ellipsis?Object(e.h)("bds-typo",{class:"avatar__ellipsis",variant:this.typoSize,tag:"span"},"+".concat(this.ellipsis)):this.thumbnail?this.upload?Object(e.h)("div",{class:"avatar__btn"},Object(e.h)("img",{class:"avatar__btn__img",src:this.thumbnail}),Object(e.h)("div",{class:"avatar__btn__thumb"},Object(e.h)("bds-icon",{class:"avatar__btn__thumb__icon",name:"edit",theme:"outline",size:this.iconSize}))):Object(e.h)("img",{class:"avatar__img",src:this.thumbnail}):this.name?this.upload?Object(e.h)("div",{class:"avatar__btn"},Object(e.h)("bds-typo",{class:"avatar__btn__text",variant:this.typoSize,tag:"span"},o+r),Object(e.h)("div",{class:"avatar__btn__name"},Object(e.h)("bds-icon",{class:"avatar__btn__name__icon",name:"upload",theme:"outline",size:this.iconSize}))):Object(e.h)("bds-typo",{class:"avatar__text",variant:this.typoSize,tag:"span"},o+r):this.upload?Object(e.h)("div",{class:"avatar__btn"},Object(e.h)("bds-icon",{class:"avatar__btn__icon",name:"user-default",theme:"outline",size:this.iconSize}),Object(e.h)("div",{class:"avatar__btn__empty"},Object(e.h)("bds-icon",{class:"avatar__btn__empty__icon",name:"upload",theme:"outline",size:this.iconSize}))):Object(e.h)("bds-icon",{class:"avatar__icon",name:"user-default",theme:"outline",size:this.iconSize}))},a}();s.style='@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"); @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"); .avatar{margin:0;font-family:"Nunito Sans", "Tahoma", "Helvetica", "Arial", sans-serif;font-style:normal;font-weight:normal;margin:0;-webkit-margin-before:0;margin-block-start:0;-webkit-margin-after:0;margin-block-end:0;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0;padding:0;border:0;border-radius:72px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;overflow:hidden}.avatar__text{color:#ffffff}.avatar__icon{color:#8ca0b3}.avatar__img{width:100%;height:auto}.avatar__ellipsis{color:#505f79}.avatar__btn{position:relative;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.avatar__btn__img{width:100%;height:auto}.avatar__btn__text{color:#ffffff;opacity:1;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}.avatar__btn__icon{color:#8ca0b3;opacity:1;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}.avatar__btn__thumb{position:absolute;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;top:0;left:0;background-color:rgba(80, 95, 121, 0.5);cursor:pointer;opacity:0;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}.avatar__btn__thumb__icon{color:#ffffff}.avatar__btn__name{position:absolute;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;top:0;left:0;cursor:pointer;opacity:0;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}.avatar__btn__name__icon{color:#ffffff}.avatar__btn__empty{position:absolute;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;top:0;left:0;cursor:pointer;opacity:0;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}.avatar__btn__empty__icon{color:#8ca0b3}.avatar__size--micro{width:24px;height:24px}.avatar__size--extra-small{width:32px;height:32px}.avatar__size--small{width:40px;height:40px}.avatar__size--standard{width:56px;height:56px}.avatar__size--large{width:64px;height:64px}.avatar__size--extra-large{width:72px;height:72px}.avatar__color--neutral{background-color:#d2dfe6}.avatar__color--purple{background-color:#c226fb}.avatar__color--brand{background-color:#00c6d7}.avatar__color--green{background-color:#c226fb}.avatar__color--brown{background-color:#f6a721}.avatar__color--pink{background-color:#fb5a8b}.avatar:hover .avatar__btn__thumb{opacity:1}.avatar:hover .avatar__btn__text{opacity:0}.avatar:hover .avatar__btn__icon{opacity:0}.avatar:hover .avatar__btn__name{opacity:1}.avatar:hover .avatar__btn__empty{opacity:1}'}}]);
//# sourceMappingURL=18.99c25b0c.chunk.js.map