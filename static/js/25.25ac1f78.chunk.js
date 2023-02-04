(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[25],{79:function(i,e,t){"use strict";t.r(e),t.d(e,"bds_chip_clickable",(function(){return l}));var c=t(9),l=function(){function i(i){Object(c.r)(this,i),this.chipClickableClose=Object(c.c)(this,"chipClickableClose",7),this.chipClickableClick=Object(c.c)(this,"chipClickableClick",7),this.visible=!0,this.color="default",this.size="standard",this.clickable=!1,this.close=!1,this.disabled=!1,this.dataTest=null}return i.prototype.handleClickKey=function(i){"Enter"!==i.key&&" "!==i.key||this.disabled||(i.preventDefault(),this.chipClickableClick.emit())},i.prototype.handleClick=function(i){this.disabled||(i.preventDefault(),this.chipClickableClick.emit())},i.prototype.handleCloseChip=function(i){i.preventDefault(),this.chipClickableClose.emit({id:this.element.id}),this.visible=!1},i.prototype.handleCloseKey=function(i){"Enter"!==i.key&&" "!==i.key||this.disabled||(i.preventDefault(),this.chipClickableClose.emit({id:this.element.id}),this.visible=!1)},i.prototype.getSizeAvatarChip=function(){return"tall"===this.size?"extra-small":"micro"},i.prototype.getSizeIconChip=function(){return"tall"===this.size?"medium":"x-small"},i.prototype.render=function(){var i;return Object(c.h)(c.H,null,Object(c.h)("div",{class:(i={chip_clickable:!0},i["chip_clickable--".concat(this.color)]=!this.disabled,i["chip_clickable--".concat(this.size)]=!0,i["chip_clickable--hide"]=!this.visible,i["chip_clickable--click"]=this.clickable,i["chip_clickable--disabled"]=this.disabled,i),onClick:this.handleClick.bind(this),"data-test":this.dataTest},this.clickable&&!this.disabled&&Object(c.h)("div",{class:"chip_focus",onKeyDown:this.handleClickKey.bind(this),tabindex:"0"}),this.clickable&&!this.disabled&&Object(c.h)("div",{class:"chip_darker"}),this.icon&&!this.avatar&&Object(c.h)("div",{class:"chip_clickable--icon"},Object(c.h)("bds-icon",{size:this.getSizeIconChip(),name:this.icon})),this.avatar&&Object(c.h)("div",{class:"chip_clickable--avatar"},Object(c.h)("bds-avatar",{size:this.getSizeAvatarChip(),thumbnail:this.avatar})),Object(c.h)("bds-typo",{class:"chip_clickable--text",variant:"fs-12",bold:"bold"},Object(c.h)("slot",null)),this.close&&Object(c.h)("div",{class:"chip_clickable--close",onClick:this.handleCloseChip.bind(this)},!this.disabled&&Object(c.h)("div",{class:"close_focus",onKeyDown:this.handleCloseKey.bind(this),tabindex:"0"}),Object(c.h)("bds-icon",{size:"x-small",theme:"solid",name:"error"}))))},Object.defineProperty(i.prototype,"element",{get:function(){return Object(c.g)(this)},enumerable:!1,configurable:!0}),i}();l.style='@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"); :host{display:block;height:-webkit-max-content;height:-moz-max-content;height:max-content;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box}:host .chip_clickable{display:-ms-flexbox;display:flex;min-width:32px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:32px;border-radius:16px;padding:2px 4px;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-pack:center;justify-content:center;position:relative;z-index:0}:host .chip_clickable--hide{display:none;padding:0;border:none}:host .chip_clickable .chip_focus:focus{position:absolute;width:100%;height:100%;padding:2px;border-radius:4px;outline:#c226fb solid 2px}:host .chip_clickable--click{cursor:pointer}:host .chip_clickable--click .chip_darker{opacity:0;position:absolute;width:100%;height:100%;border-radius:inherit;z-index:1;-webkit-backdrop-filter:brightness(1);backdrop-filter:brightness(1);-webkit-box-sizing:border-box;box-sizing:border-box}:host .chip_clickable--click:hover .chip_darker{opacity:1;-webkit-backdrop-filter:brightness(0.9);backdrop-filter:brightness(0.9)}:host .chip_clickable--click:active .chip_darker{opacity:1;-webkit-backdrop-filter:brightness(0.8);backdrop-filter:brightness(0.8)}:host .chip_clickable--disabled{cursor:default;background-color:#f3f6fa}:host .chip_clickable--disabled .chip_clickable--icon{color:#505f79}:host .chip_clickable--disabled .chip_clickable--text{color:#505f79}:host .chip_clickable--disabled .chip_clickable--close{cursor:default}:host .chip_clickable--icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:20px;padding-left:4px;color:#202c44;z-index:2}:host .chip_clickable--close{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:20px;padding-right:4px;mix-blend-mode:hard-light;color:#202c44;opacity:0.7;z-index:2;position:relative;cursor:pointer}:host .chip_clickable--close .close_focus:focus{position:absolute;width:100%;height:100%;left:-2px;border-radius:4px;outline:#c226fb solid 2px}:host .chip_clickable--text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:20px;margin:0 8px;z-index:2;color:#202c44;font-family:"Nunito Sans", "Tahoma", "Helvetica", "Arial", sans-serif}:host .chip_clickable--tall{height:40px;border-radius:24px}:host .chip_clickable--default{background-color:#b3d4ff}:host .chip_clickable--info{background-color:#80e3eb}:host .chip_clickable--success{background-color:#90e6bc}:host .chip_clickable--warning{background-color:#fff6a8}:host .chip_clickable--danger{background-color:#ffa5a5}:host .chip_clickable--outline{background-color:#ffffff;border:1px solid #b9cbd3}:host .chip_clickable:focus-visible{outline:none}'}}]);
//# sourceMappingURL=25.25ac1f78.chunk.js.map