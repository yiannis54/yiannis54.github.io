(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d208dc0"],{a71e:function(t,o,e){"use strict";e.r(o);var i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"notifications-demo"}},[e("p",{staticClass:"mb-4"},[t._v("Nice, simple, and interactive notifications")]),e("notifications-default"),e("notifications-position"),e("notifications-icon"),e("notifications-fixed-and-function-click"),e("notifications-time")],1)},n=[],c=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("vx-card",{attrs:{title:"Default","code-toggler":""}},[e("p",[t._v(" To add a notification we have the global function "),e("code",[t._v("$vs.notify")]),t._v(". The first parameter is a "),e("code",[t._v("json")]),t._v(" with all the necessary attributes, or if we only want the standard notification we can only add a string with the text of the notification ")]),e("div",{staticClass:"demo-alignment"},[e("vs-button",{attrs:{color:"primary",type:"flat"},on:{click:function(o){return t.$vs.notify({title:"Primary",text:"Lorem ipsum dolor sit amet, consectetur",color:"primary"})}}},[t._v("Notification Primary")]),e("vs-button",{attrs:{color:"success",type:"flat"},on:{click:function(o){return t.$vs.notify({title:"Success",text:"Lorem ipsum dolor sit amet, consectetur",color:"success"})}}},[t._v("Notification Success")]),e("vs-button",{attrs:{color:"danger",type:"flat"},on:{click:function(o){return t.$vs.notify({title:"Danger",text:"Lorem ipsum dolor sit amet, consectetur",color:"danger"})}}},[t._v("Notification Danger")]),e("vs-button",{attrs:{color:"warning",type:"flat"},on:{click:function(o){return t.$vs.notify({title:"Warning",text:"Lorem ipsum dolor sit amet, consectetur",color:"warning"})}}},[t._v("Notification Warning")]),e("vs-button",{attrs:{color:"dark",type:"flat"},on:{click:function(o){return t.$vs.notify({title:"dark",text:"Lorem ipsum dolor sit amet, consectetur",color:"dark"})}}},[t._v("Notification Dark")]),e("vs-button",{attrs:{color:"success",type:"gradient"},on:{click:function(o){return t.random()}}},[t._v("Notification Random Color")])],1),e("template",{slot:"codeContainer"},[t._v(' <template> <div class="demo-alignment"> <vs-button @click="$vs.notify({ title:\'Primary\', text:\'Lorem ipsum dolor sit amet, consectetur\', color:\'primary\'})" color="primary" type="flat">Notification Primary</vs-button> <vs-button @click="$vs.notify({ title:\'Success\', text:\'Lorem ipsum dolor sit amet, consectetur\', color:\'success\'})" color="success" type="flat">Notification Success</vs-button> <vs-button @click="$vs.notify({ title:\'Danger\', text:\'Lorem ipsum dolor sit amet, consectetur\', color:\'danger\'})" color="danger" type="flat">Notification Danger</vs-button> <vs-button @click="$vs.notify({ title:\'Warning\', text:\'Lorem ipsum dolor sit amet, consectetur\', color:\'warning\'})" color="warning" type="flat">Notification Warning</vs-button> <vs-button @click="$vs.notify({ title:\'dark\', text:\'Lorem ipsum dolor sit amet, consectetur\', color:\'dark\'})" color="dark" type="flat">Notification Dark</vs-button> <vs-button @click="random()" color="success" type="gradient">Notification Random Color</vs-button> </div> </template> <script> export default { methods: { random() { function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min)) + min; } let color = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})` this.$vs.notify({ title: \'Color\', text: \'Lorem ipsum dolor sit amet, consectetur\', color: color }) }, } } <\/script> ')])],2)},r=[],s=(e("99af"),{methods:{random:function(){function t(t,o){return Math.floor(Math.random()*(o-t))+t}var o="rgb(".concat(t(0,255),",").concat(t(0,255),",").concat(t(0,255),")");this.$vs.notify({title:"Color",text:"Lorem ipsum dolor sit amet, consectetur",color:o})}}}),a=s,l=e("2877"),u=Object(l["a"])(a,c,r,!1,null,null,null),m=u.exports,f=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("vx-card",{attrs:{title:"Position","code-toggler":""}},[e("p",[t._v(" We can change the place where the notification appears with the property position. A practical example would be: position: 'top-right'. The supported values are ")]),e("vx-list",{staticClass:"mt-3",attrs:{list:t.listPosition}}),e("vs-alert",{staticClass:"mb-1",attrs:{icon:"warning",active:"true",color:"warning"}},[e("span",[t._v("The default notifications appear "),e("code",[t._v("bottom-right")]),t._v(", it is not necessary to add the position property if it is the desired position")])]),e("div",{staticClass:"demo-alignment"},[e("vs-button",{attrs:{color:"primary",type:"flat"},on:{click:function(o){return t.$vs.notify({title:"Position Default",text:"Lorem ipsum dolor sit amet, consectetur",color:"primary"})}}},[t._v("Position Default")]),e("vs-button",{attrs:{color:"success",type:"flat"},on:{click:function(o){return t.$vs.notify({title:"Position top-right",text:"Lorem ipsum dolor sit amet, consectetur",color:"success",position:"top-right"})}}},[t._v("Position Top Right")]),e("vs-button",{attrs:{color:"danger",type:"flat"},on:{click:function(o){return t.$vs.notify({title:"Position top-left",text:"Lorem ipsum dolor sit amet, consectetur",color:"danger",position:"top-left"})}}},[t._v("Position Top Left")]),e("vs-button",{attrs:{color:"warning",type:"flat"},on:{click:function(o){return t.$vs.notify({title:"Position bottom-left",text:"Lorem ipsum dolor sit amet, consectetur",color:"warning",position:"bottom-left"})}}},[t._v("Position Bottom Left")]),e("vs-button",{attrs:{color:"dark",type:"flat"},on:{click:function(o){return t.$vs.notify({title:"Position bottom-center",text:"Lorem ipsum dolor sit amet, consectetur",color:"dark",position:"bottom-center"})}}},[t._v(" Position Bottom Center")]),e("vs-button",{attrs:{color:"success",type:"gradient"},on:{click:function(o){return t.randomCenter()}}},[t._v("Position Top Center Random Color")])],1),e("template",{slot:"codeContainer"},[t._v(" <template> <div class=\"demo-alignment\"> <vs-button color=\"primary\" type=\"flat\" @click=\"$vs.notify({ title:'Position Default', text:'Lorem ipsum dolor sit amet, consectetur', color:'primary'})\">Position Default</vs-button> <vs-button color=\"success\" type=\"flat\" @click=\"$vs.notify({ title:'Position top-right', text:'Lorem ipsum dolor sit amet, consectetur', color:'success', position:'top-right'})\">Position Top Right</vs-button> <vs-button color=\"danger\" type=\"flat\" @click=\"$vs.notify({ title:'Position top-left', text:'Lorem ipsum dolor sit amet, consectetur', color:'danger', position:'top-left'})\">Position Top Left</vs-button> <vs-button color=\"warning\" type=\"flat\" @click=\"$vs.notify({ title:'Position bottom-left', text:'Lorem ipsum dolor sit amet, consectetur', color:'warning', position:'bottom-left'})\">Position Bottom Left</vs-button> <vs-button color=\"dark\" type=\"flat\" @click=\"$vs.notify({ title:'Position bottom-center', text:'Lorem ipsum dolor sit amet, consectetur', color:'dark', position:'bottom-center'})\"> Position Bottom Center</vs-button> <vs-button @click=\"randomCenter()\" color=\"success\" type=\"gradient\">Position Top Center Random Color</vs-button> </div> </template> <script> export default { methods: { randomCenter() { function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min)) + min; } let color = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})` this.$vs.notify({ title: 'Position top-center', text: 'Lorem ipsum dolor sit amet, consectetur', color: color, position: 'top-center' }) } } } <\/script> ")])],2)},p=[],d={data:function(){return{listPosition:["top-right","top-left","top-center","bottom-right","bottom-left"]}},methods:{randomCenter:function(){function t(t,o){return Math.floor(Math.random()*(o-t))+t}var o="rgb(".concat(t(0,255),",").concat(t(0,255),",").concat(t(0,255),")");this.$vs.notify({title:"Position top-center",text:"Lorem ipsum dolor sit amet, consectetur",color:o,position:"top-center"})}}},v=d,y=Object(l["a"])(v,f,p,!1,null,null,null),h=y.exports,k=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("vx-card",{attrs:{title:"Icon","code-toggler":""}},[e("p",[t._v(" Notifications can include icons to improve the user experience and to construct a more pleasant and intuitive notification. To make this, use the "),e("code",[t._v("icon")]),t._v(" property. A practical example would be: "),e("code",[t._v("icon: 'chat'")])]),e("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[e("p",[t._v(" Vuesax uses the Google Material Icons font library by default. For a list of all available icons, visit the official "),e("a",{attrs:{href:"https://material.io/icons/",target:"_blank"}},[t._v("Material Icons page")]),t._v(". ")]),e("p",[t._v(" FontAwesome and other fonts library are supported. Simply use the icon-pack with fa or fas. You still need to include the Font Awesome icons in your project. ")])]),e("div",{staticClass:"demo-alignment"},[e("vs-button",{attrs:{color:"primary",type:"flat"},on:{click:function(o){return t.$vs.notify({title:"Icon mail",text:"Lorem ipsum dolor sit amet, consectetur",color:"primary",iconPack:"feather",icon:"icon-mail"})}}},[t._v("Icon Mail")]),e("vs-button",{attrs:{color:"success",type:"flat"},on:{click:function(o){return t.$vs.notify({title:"Icon mail",text:"Lorem ipsum dolor sit amet, consectetur",color:"success",iconPack:"feather",icon:"icon-check"})}}},[t._v("Icon check_box")]),e("vs-button",{attrs:{color:"danger",type:"flat"},on:{click:function(o){return t.$vs.notify({title:"Icon mail",text:"Lorem ipsum dolor sit amet, consectetur",color:"danger",iconPack:"feather",icon:"icon-heart"})}}},[t._v("Icon favorite")]),e("vs-button",{attrs:{color:"warning",type:"flat"},on:{click:function(o){return t.$vs.notify({title:"Icon mail",text:"Lorem ipsum dolor sit amet, consectetur",color:"warning",iconPack:"feather",icon:"icon-alert-circle"})}}},[t._v("Icon error")]),e("vs-button",{attrs:{color:"dark",type:"flat"},on:{click:function(o){return t.$vs.notify({title:"Icon mail",text:"Lorem ipsum dolor sit amet, consectetur",color:"dark",iconPack:"feather",icon:"icon-message-square"})}}},[t._v("Icon chat")]),e("vs-button",{attrs:{color:"success",type:"gradient"},on:{click:function(o){return t.randomIcon()}}},[t._v("Icon Random Color")])],1),e("template",{slot:"codeContainer"},[t._v(" <template> <div class=\"demo-alignment\"> <vs-button color=\"primary\" type=\"flat\" @click=\"$vs.notify({ title:'Icon mail', text:'Lorem ipsum dolor sit amet, consectetur', color:'primary', iconPack: 'feather', icon:'icon-mail'})\">Icon Mail</vs-button> <vs-button color=\"success\" type=\"flat\" @click=\"$vs.notify({ title:'Icon mail', text:'Lorem ipsum dolor sit amet, consectetur', color:'success', iconPack: 'feather', icon:'icon-check'})\">Icon check_box</vs-button> <vs-button color=\"danger\" type=\"flat\" @click=\"$vs.notify({ title:'Icon mail', text:'Lorem ipsum dolor sit amet, consectetur', color:'danger', iconPack: 'feather', icon:'icon-heart'})\">Icon favorite</vs-button> <vs-button color=\"warning\" type=\"flat\" @click=\"$vs.notify({ title:'Icon mail', text:'Lorem ipsum dolor sit amet, consectetur', color:'warning', iconPack: 'feather', icon:'icon-alert-circle'})\">Icon error</vs-button> <vs-button color=\"dark\" type=\"flat\" @click=\"$vs.notify({ title:'Icon mail', text:'Lorem ipsum dolor sit amet, consectetur', color:'dark', iconPack: 'feather', icon:'icon-message-square'})\">Icon chat</vs-button> <vs-button @click=\"randomIcon()\" color=\"success\" type=\"gradient\">Icon Random Color</vs-button> </div> </template> <script> export default { methods: { randomIcon() { function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min)) + min; } let color = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})` this.$vs.notify({ title: &apos;Icon mail&apos;, text: &apos;Lorem ipsum dolor sit amet, consectetur&apos;, color: color, icon: &apos;verified_user&apos; }) } } } <\/script> ")])],2)},b=[],g={methods:{randomIcon:function(){function t(t,o){return Math.floor(Math.random()*(o-t))+t}var o="rgb(".concat(t(0,255),",").concat(t(0,255),",").concat(t(0,255),")");this.$vs.notify({title:"Icon Award",text:"Lorem ipsum dolor sit amet, consectetur",color:o,icon:"icon-award",iconPack:"feather"})}}},x=g,_=Object(l["a"])(x,k,b,!1,null,null,null),$=_.exports,P=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("vx-card",{attrs:{title:"Fixed and function click","code-toggler":""}},[e("p",[t._v(" Sometimes we need to execute a function when the user clicks on the notification. For this, pass a function to the click property. Example: "),e("code",[t._v("click:()=>{ ... }")])]),e("vs-button",{staticClass:"mt-4",attrs:{type:"gradient",color:"success"},on:{click:function(o){return t.myFunction()}}},[t._v("Run Example")]),e("template",{slot:"codeContainer"},[t._v(" <template> <vs-button @click=\"myFunction()\" type=\"gradient\" color=\"success\" class=\"my-4\">Run Example</vs-button> </template> <script> export default { methods: { myFunction() { this.$vs.notify({ title: 'Function click', text: 'Click on me to execute function', color: 'primary', fixed: true, click: () => { // Secondary function this.$vs.notify({ title: 'Secondary function', text: 'Executed the function when clicking', color: 'success', iconPack: 'feather', icon: 'icon-check' }) }, }) }, } } <\/script> ")])],2)},L=[],I={methods:{myFunction:function(){var t=this;this.$vs.notify({title:"Function click",text:"Click on me to execute function",color:"primary",fixed:!0,click:function(){t.$vs.notify({title:"Secondary function",text:"Executed the function when clicking",color:"success",iconPack:"feather",icon:"icon-check"})}})}}},w=I,C=Object(l["a"])(w,P,L,!1,null,null,null),T=C.exports,R=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("vx-card",{attrs:{title:"Time","code-toggler":""}},[e("p",[t._v(" You can change the total time that the notification stays on the screen with the "),e("code",[t._v("time")]),t._v(" property. Example: "),e("code",[t._v("time: 4000")])]),e("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[e("p",[t._v(" By default the notifications have a time of "),e("strong",[t._v("2000")]),t._v(" (2s) ")])]),e("div",{staticClass:"demo-alignment"},[e("vs-button",{attrs:{color:"primary",type:"flat"},on:{click:function(o){return t.$vs.notify({title:"Time default",text:"Lorem ipsum dolor sit amet consectetur",color:"primary",iconPack:"feather",icon:"icon-clock"})}}},[t._v("Time default")]),e("vs-button",{attrs:{color:"primary",type:"flat"},on:{click:function(o){t.$vs.notify({time:4e3,title:"Time 4s (4000)",text:"Lorem ipsum dolor sit amet consectetur",color:"primary",iconPack:"feather",icon:"icon-clock"})}}},[t._v("Time 4s (4000)")]),e("vs-button",{attrs:{color:"primary",type:"flat"},on:{click:function(o){t.$vs.notify({time:8e3,title:"Time 8s (8000)",text:"Lorem ipsum dolor sit amet consectetur",color:"primary",iconPack:"feather",icon:"icon-clock"})}}},[t._v("Time 8s (8000)")])],1),e("template",{slot:"codeContainer"},[t._v(" <template> <div class=\"demo-alignment\"> <vs-button @click=\"$vs.notify({ title:'Time default', text:'Lorem ipsum dolor sit amet consectetur', color:'primary', iconPack: 'feather', icon: 'icon-clock' })\" color=\"primary\" type=\"flat\">Time default</vs-button> <vs-button @click=\"$vs.notify({ time:4000, title:'Time 4s (4000)', text:'Lorem ipsum dolor sit amet consectetur', color:'primary', iconPack: 'feather', icon: 'icon-clock' })\" color=\"primary\" type=\"flat\">Time 4s (4000)</vs-button> <vs-button @click=\"$vs.notify({ time:8000, title:'Time 8s (8000)', text:'Lorem ipsum dolor sit amet consectetur', color:'primary', iconPack: 'feather', icon: 'icon-clock' })\" color=\"primary\" type=\"flat\">Time 8s (8000)</vs-button> </div> </template> ")])],2)},N=[],M={},F=Object(l["a"])(M,R,N,!1,null,null,null),D=F.exports,E={components:{NotificationsDefault:m,NotificationsPosition:h,NotificationsIcon:$,NotificationsFixedAndFunctionClick:T,NotificationsTime:D}},S=E,j=Object(l["a"])(S,i,n,!1,null,null,null);o["default"]=j.exports}}]);
//# sourceMappingURL=chunk-2d208dc0.06ced3fd.js.map