(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{412:function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"section__block work"},[e("div",{staticClass:"work__pic"},[e("img",{staticClass:"work__img",attrs:{src:"https://webdev-api.loftschool.com/"+t.work.photo}}),e("ul",{staticClass:"tags work__tags"},t._l(t.tagsArray,function(s,o){return e("li",{staticClass:"tags__item"},[e("span",{staticClass:"tags__title"},[t._v(t._s(s))])])}),0)]),e("div",{staticClass:"work__desc"},[e("h4",{staticClass:"work__title"},[t._v(t._s(t.work.title))]),e("p",{staticClass:"work__text"},[t._v(t._s(t.work.description))]),e("a",{staticClass:"work__link",attrs:{href:t.work.link}},[t._v(t._s(t.work.link))])]),e("div",{staticClass:"control-btns"},[e("button",{staticClass:"control-btn",attrs:{type:"button"},on:{click:t.editWork}},[e("span",{staticClass:"control-btn__text"},[t._v("Править")]),e("span",{staticClass:"control-btn__edit"})]),e("button",{staticClass:"control-btn",attrs:{type:"button"},on:{click:t.deleteThisWork}},[e("span",{staticClass:"control-btn__text"},[t._v("Удалить")]),e("span",{staticClass:"control-btn__del"})])])])};o._withStripped=!0;var r=e(71);function n(t){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{},o=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(s){i(t,s,e[s])})}return t}function i(t,s,e){return s in t?Object.defineProperty(t,s,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[s]=e,t}var a={data:function(){return{editedWork:n({},this.work)}},props:{work:{type:Object,default:function(){return{}},required:!0}},computed:{tagsArray:function(){return this.work.techs.split(",")}},methods:n({},Object(r.b)("works",["deleteWork"]),{editWork:function(){this.$emit("edit-work",this.editedWork)},deleteThisWork:function(){this.deleteWork(this.work)}})},c=e(51),l=Object(c.a)(a,o,[],!1,null,null,null);l.options.__file="src/admin/components/work.vue";s.default=l.exports}}]);