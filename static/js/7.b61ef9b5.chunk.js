(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[7,65],{59:function(t,i,n){"use strict";n.r(i),n.d(i,"d",(function(){return a})),n.d(i,"e",(function(){return u})),n.d(i,"m",(function(){return o})),n.d(i,"n",(function(){return p})),n.d(i,"w",(function(){return c}));var e=/^\w+([.+,-]\w+)*@\w+([.-]\w+)*\.\w{2,}$/,s=/\S/,r=/^[0-9]*$/,h=/^((0?[1-9]|[12][0-9]|3[01])[- /.](0?[1-9]|1[012])[- /.](19|20|21)?[0-9]{2})*$/,u=function(t){if(t&&!e.test(t))return!0},p=function(t){if(t&&!r.test(t))return!0},c=function(t){return s.test(t)},a=function(t){return h.test(t)},o=function(t){var i=t;return i=(i=(i=i.replace(/\D+/g,"")).replace(/^(\d{2})(\d)/,"$1/$2")).replace(/^(\d{2}\/\d{2})(\d)/,"$1/$2")}},91:function(t,i,n){"use strict";n.r(i),n.d(i,"bds_input_chips",(function(){return p}));var e=n(9),s=n(59),r=function(t,i,n,e){function s(t){return t instanceof n?t:new n((function(i){i(t)}))}return new(n||(n=Promise))((function(n,r){function h(t){try{p(e.next(t))}catch(i){r(i)}}function u(t){try{p(e.throw(t))}catch(i){r(i)}}function p(t){t.done?n(t.value):s(t.value).then(h,u)}p((e=e.apply(t,i||[])).next())}))},h=function(t,i){var n,e,s,r,h={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return r={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function u(t){return function(i){return p([t,i])}}function p(r){if(n)throw new TypeError("Generator is already executing.");for(;h;)try{if(n=1,e&&(s=2&r[0]?e.return:r[0]?e.throw||((s=e.return)&&s.call(e),0):e.next)&&!(s=s.call(e,r[1])).done)return s;switch(e=0,s&&(r=[2&r[0],s.value]),r[0]){case 0:case 1:s=r;break;case 4:return h.label++,{value:r[1],done:!1};case 5:h.label++,e=r[1],r=[0];continue;case 7:r=h.ops.pop(),h.trys.pop();continue;default:if(!(s=(s=h.trys).length>0&&s[s.length-1])&&(6===r[0]||2===r[0])){h=0;continue}if(3===r[0]&&(!s||r[1]>s[0]&&r[1]<s[3])){h.label=r[1];break}if(6===r[0]&&h.label<s[1]){h.label=s[1],s=r;break}if(s&&h.label<s[2]){h.label=s[2],h.ops.push(r);break}s[2]&&h.ops.pop(),h.trys.pop();continue}r=i.call(t,h)}catch(u){r=[6,u],e=0}finally{n=s=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},u=function(t,i,n){if(n||2===arguments.length)for(var e,s=0,r=i.length;s<r;s++)!e&&s in i||(e||(e=Array.prototype.slice.call(i,0,s)),e[s]=i[s]);return t.concat(e||Array.prototype.slice.call(i))},p=function(){function t(t){Object(e.r)(this,t),this.bdsChange=Object(e.c)(this,"bdsChange",7),this.bdsChangeChips=Object(e.c)(this,"bdsChangeChips",7),this.bdsBlur=Object(e.c)(this,"bdsBlur",7),this.bdsSubmit=Object(e.c)(this,"bdsSubmit",7),this.internalChips=[],this.chips=[],this.type="text",this.label="",this.icon="",this.delimiters=/,|;/,this.errorMessage="",this.danger=!1,this.value="",this.duplicated=!1,this.disableSubmit=!1,this.disabled=!1,this.helperMessage="",this.inputName="",this.placeholder="",this.dataTest=null}return t.prototype.valueChanged=function(){if(this.chips)if("string"===typeof this.chips)try{this.internalChips=JSON.parse(this.chips)}catch(t){this.internalChips=[]}else this.internalChips=this.chips;else this.internalChips=[]},t.prototype.internalValueChanged=function(){this.bdsChangeChips.emit({data:this.internalChips,value:this.getLastChip()})},t.prototype.isValid=function(){return r(this,void 0,void 0,(function(){return h(this,(function(t){return[2,this.validateChips()]}))}))},t.prototype.get=function(){return r(this,void 0,void 0,(function(){return h(this,(function(t){return[2,this.internalChips]}))}))},t.prototype.clear=function(){return r(this,void 0,void 0,(function(){return h(this,(function(t){return this.internalChips=[],this.value="",[2]}))}))},t.prototype.add=function(t){return r(this,void 0,void 0,(function(){return h(this,(function(i){return this.setChip(t),[2]}))}))},t.prototype.setFocus=function(){return r(this,void 0,void 0,(function(){return h(this,(function(t){return this.nativeInput.setFocus(),[2]}))}))},t.prototype.removeFocus=function(){return r(this,void 0,void 0,(function(){return h(this,(function(t){return this.nativeInput.removeFocus(),[2]}))}))},t.prototype.componentWillLoad=function(){this.valueChanged()},t.prototype.validateChips=function(){var t=this;return"email"!==this.type||!this.internalChips.some((function(i){return!t.validateChip(i)}))},t.prototype.handleOnBlur=function(){this.bdsBlur.emit(this.internalChips)},t.prototype.handleAddChip=function(t){if(!this.disableSubmit){var i=t.detail.value;this.setChip(i),this.value=""}},t.prototype.getLastChip=function(){return this.internalChips[this.internalChips.length-1]},t.prototype.handleBackRemove=function(t){var i=t.detail.value;(null===i||i.length<=0)&&this.internalChips.length&&(this.removeLastChip(),this.bdsChangeChips.emit({data:this.internalChips,value:i}))},t.prototype.verifyAndSubstituteDelimiters=function(t){if(1===t.length&&t[0].match(this.delimiters))return"";var i=t.replace(/;/g,",").replace(/\,+|;+/g,",");return i[0].match(this.delimiters)&&(i=i.substring(1)),i},t.prototype.handleChange=function(t){return r(this,void 0,void 0,(function(){var i,n,e=this;return h(this,(function(s){return i=t.detail.value,this.value=i?i.trim():"",0===i.length?[2]:i.match(this.delimiters)?(n=this.verifyAndSubstituteDelimiters(i))?(n.split(this.delimiters).forEach((function(t){e.setChip(t)})),this.clearInputValues(),[2]):(this.clearInputValues(),[2]):[2]}))}))},t.prototype.clearInputValues=function(t){void 0===t&&(t=""),this.nativeInput.value=t,this.value=t},t.prototype.setChip=function(t){if(!this.duplicated&&this.internalChips.some((function(i){return i.toLowerCase()===t.toLowerCase()})))return;Object(s.w)(t)&&(this.internalChips=u(u([],this.internalChips,!0),[t],!1))},t.prototype.validateChip=function(t){var i=t.trim();return"email"!==this.type||!Object(s.e)(i)},t.prototype.removeLastChip=function(){this.internalChips=this.internalChips.slice(0,this.internalChips.length-1)},t.prototype.removeChip=function(t){var i=t.detail.id;this.internalChips=this.internalChips.filter((function(t,n){return n.toString()!==i}))},t.prototype.renderChips=function(){var t=this;return this.internalChips.length?this.internalChips.map((function(i,n){var s=n.toString();return Object(e.h)("bds-chip",{class:"input-chips__chip",id:s,key:s,variant:"primary",danger:!t.validateChip(i),deletable:!t.disabled,onBdsDelete:function(i){return t.removeChip(i)}},i)})):[]},t.prototype.render=function(){var t=this;return Object(e.h)(e.H,null,Object(e.h)("bds-input",{ref:function(i){return t.nativeInput=i},icon:this.icon,label:this.label,onBdsKeyDownBackspace:function(i){return t.handleBackRemove(i)},onBdsSubmit:function(i){return t.handleAddChip(i)},onBdsOnBlur:function(){return t.handleOnBlur()},onBdsChange:function(i){return t.handleChange(i)},maxlength:this.maxlength,value:this.value,"error-message":this.errorMessage,"helper-message":this.helperMessage,"input-name":this.inputName,placeholder:this.placeholder,danger:this.danger,chips:!0,disabled:this.disabled,"data-test":this.dataTest},Object(e.h)("span",{slot:"inside-input-left"},this.renderChips()),Object(e.h)("div",{slot:"input-right"},Object(e.h)("slot",{name:"input-right"}))))},Object.defineProperty(t,"watchers",{get:function(){return{chips:["valueChanged"],internalChips:["internalValueChanged"]}},enumerable:!1,configurable:!0}),t}();p.style='@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0.sc-bds-input-chips,300.sc-bds-input-chips;0.sc-bds-input-chips,400.sc-bds-input-chips;0.sc-bds-input-chips,600.sc-bds-input-chips;0.sc-bds-input-chips,700.sc-bds-input-chips;0.sc-bds-input-chips,800.sc-bds-input-chips;0.sc-bds-input-chips,900.sc-bds-input-chips;1.sc-bds-input-chips,200.sc-bds-input-chips;1.sc-bds-input-chips,300.sc-bds-input-chips;1.sc-bds-input-chips,400.sc-bds-input-chips;1.sc-bds-input-chips,600.sc-bds-input-chips;1.sc-bds-input-chips,700.sc-bds-input-chips;1.sc-bds-input-chips,800.sc-bds-input-chips;1.sc-bds-input-chips,900&display=swap").sc-bds-input-chips; .sc-bds-input-chips-h{display:block}.input-chips__chip.sc-bds-input-chips{margin:2px 4px 2px 0px}.input-chips__chips.sc-bds-input-chips{-ms-flex:1;flex:1}'}}]);