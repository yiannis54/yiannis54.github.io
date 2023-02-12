(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d210f45"],{b9a9:function(e,t,s){"use strict";s.r(t);var c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"chip-demo"}},[s("chip-default"),s("chip-color"),s("chip-icon"),s("chip-closable"),s("chip-add-remove"),s("chip-customize-close-clear-chip-icon")],1)},a=[],i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("vx-card",{attrs:{title:"Default","code-toggler":""}},[s("p",[e._v("Helps you represent simple data with colorful options")]),s("div",{staticClass:"demo-alignment"},[s("vs-chip",[e._v("Basic Chip")]),s("vs-chip",[s("vs-avatar",{attrs:{text:"LD"}}),e._v(" Avatar Text ")],1),s("vs-chip",[s("vs-avatar"),e._v(" Avatar Icon ")],1),s("vs-chip",[s("vs-avatar",{attrs:{src:"https://randomuser.me/api/portraits/men/4.jpg"}}),e._v(" Avatar Image ")],1),e.isDeleted?e._e():s("vs-chip",{attrs:{closable:""},on:{click:function(t){e.isDeleted=!0}}},[e._v(" Closable chip ")])],1),s("template",{slot:"codeContainer"},[e._v(' <template> <div class="demo-alignment"> <vs-chip>Basic Chip</vs-chip> <vs-chip> <vs-avatar text="LD"/> Avatar Text </vs-chip> <vs-chip> <vs-avatar /> Avatar Icon </vs-chip> <vs-chip> <vs-avatar src="https://randomuser.me/api/portraits/men/4.jpg"/> Avatar Image </vs-chip> <vs-chip @click="isDeleted=true" v-if="!isDeleted" closable> Closable chip </vs-chip> </div> </template> <script> export default { data() { return { isDeleted: false, } } } <\/script> ')])],2)},r=[],o={data:function(){return{isDeleted:!1}}},n=o,l=s("2877"),p=Object(l["a"])(n,i,r,!1,null,null,null),v=p.exports,h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("vx-card",{attrs:{title:"Color","code-toggler":""}},[s("p",[e._v("Change the background color of the chip")]),s("vs-alert",{staticClass:"my-3",attrs:{icon:"warning",active:"true",color:"warning"}},[s("span",[e._v("Only "),s("strong",[e._v("RGB")]),e._v(" and "),s("strong",[e._v("HEX")]),e._v(" colors are supported.")])]),s("div",{staticClass:"demo-alignment"},[s("vs-chip",{attrs:{color:"primary"}},[e._v(" Basic Chip ")]),s("vs-chip",{attrs:{color:"success"}},[s("vs-avatar",{attrs:{text:"LD"}}),e._v(" Avatar Text ")],1),s("vs-chip",{attrs:{color:"danger"}},[s("vs-avatar"),e._v(" Avatar Icon ")],1),s("vs-chip",{attrs:{color:"warning"}},[s("vs-avatar",{attrs:{src:"https://randomuser.me/api/portraits/men/4.jpg"}}),e._v(" Avatar Image ")],1),e.isDeleted?e._e():s("vs-chip",{attrs:{closable:"",color:"dark"},on:{click:function(t){e.isDeleted=!0}}},[e._v(" Closable chip ")]),e.isDeleted2?e._e():s("vs-chip",{attrs:{closable:"",color:"#24c1a0","close-icon":"close"},on:{click:function(t){e.isDeleted2=!0}}},[s("vs-avatar",{attrs:{src:"https://randomuser.me/api/portraits/men/16.jpg"}}),e._v(" Closable chip ")],1)],1),s("template",{slot:"codeContainer"},[e._v(' <template> <div class="demo-alignment"> <vs-chip color="primary">Basic Chip</vs-chip> <vs-chip color="success"> <vs-avatar text="LD" /> Avatar Text </vs-chip> <vs-chip color="danger"> <vs-avatar /> Avatar Icon </vs-chip> <vs-chip color="warning"> <vs-avatar src="https://randomuser.me/api/portraits/men/4.jpg" /> Avatar Image </vs-chip> <vs-chip @click="isDeleted=true" v-if="!isDeleted" closable color="dark"> Closable chip </vs-chip> <vs-chip @click="isDeleted2=true" v-if="!isDeleted2" closable color="#24c1a0" close-icon="close"> <vs-avatar src="https://randomuser.me/api/portraits/men/16.jpg" /> Closable chip </vs-chip> </div> </template> <script> export default { data() { return { isDeleted: false, isDeleted2: false, } } } <\/script> ')])],2)},d=[],u={data:function(){return{isDeleted:!1,isDeleted2:!1}}},m=u,b=Object(l["a"])(m,h,d,!1,null,null,null),_=b.exports,f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("vx-card",{attrs:{title:"Icon","code-toggler":""}},[s("p",[e._v("Add a nice icon to the chip")]),s("div",{staticClass:"demo-alignment"},[s("vs-chip",[s("vs-avatar",{attrs:{"icon-pack":"feather",icon:"icon-user"}}),s("span",[e._v("Icon Default")])],1),s("vs-chip",{attrs:{color:"primary"}},[s("vs-avatar",{attrs:{"icon-pack":"feather",icon:"icon-send"}}),s("span",[e._v("Icon send")])],1),s("vs-chip",{attrs:{color:"success"}},[s("vs-avatar",{attrs:{"icon-pack":"feather",icon:"icon-mail"}}),s("span",[e._v("Icon markunread")])],1),s("vs-chip",{attrs:{color:"danger"}},[s("vs-avatar",{attrs:{"icon-pack":"feather",icon:"icon-slash"}}),s("span",[e._v("Icon block")])],1),s("vs-chip",{attrs:{color:"warning"}},[s("vs-avatar",{attrs:{"icon-pack":"feather",icon:"icon-battery"}}),s("span",[e._v("Icon battery_alert")])],1),s("vs-chip",{attrs:{color:"dark"}},[s("vs-avatar",{attrs:{"icon-pack":"feather",icon:"icon-edit"}}),s("span",[e._v("Icon edit")])],1)],1),s("template",{slot:"codeContainer"},[e._v(' <div class="demo-alignment"> <vs-chip> <vs-avatar icon-pack="feather" icon="icon-user" /> <span>Icon Default</span> </vs-chip> <vs-chip color="primary"> <vs-avatar icon-pack="feather" icon="icon-send" /> <span>Icon send</span> </vs-chip> <vs-chip color="success"> <vs-avatar icon-pack="feather" icon="icon-mail" /> <span>Icon markunread</span> </vs-chip> <vs-chip color="danger"> <vs-avatar icon-pack="feather" icon="icon-slash" /> <span>Icon block</span> </vs-chip> <vs-chip color="warning"> <vs-avatar icon-pack="feather" icon="icon-battery" /> <span>Icon battery_alert</span> </vs-chip> <vs-chip color="dark"> <vs-avatar icon-pack="feather" icon="icon-edit" /> <span>Icon edit</span> </vs-chip> </div> ')])],2)},g=[],k={},C=Object(l["a"])(k,f,g,!1,null,null,null),x=C.exports,D=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("vx-card",{attrs:{title:"Closable","code-toggler":""}},[s("p",[e._v("For making a chip closable")]),s("div",{staticClass:"demo-alignment"},[0==e.chips.length?s("vs-button",{attrs:{type:"filled"},on:{click:e.reset}},[e._v("Reset Chips")]):e._e(),e._l(e.chips,(function(t,c){return s("vs-chip",{key:c,attrs:{closable:""},on:{click:function(s){return e.remove(t)}}},[e._v(" "+e._s(t)+" ")])}))],2),s("template",{slot:"codeContainer"},[e._v(' <template> <div class="demo-alignment"> <vs-button v-if="chips.length == 0" @click="reset" type="filled">Reset Chips</vs-button> <vs-chip @click="remove(chip)" v-for="(chip, index) in chips" :key="index" closable> '+e._s("{{ chip }}")+"} </vs-chip> </div> </template> <script> export default { data(){ return { chips:[ 'Dribbble', 'GitHub', 'Behance', 'Vuejs', 'Kdev', ], } }, methods: { reset () { this.chips = [ 'Dribbble', 'GitHub', 'Behance', 'Vuejs', 'Kdev', ] }, remove (item) { this.chips.splice(this.chips.indexOf(item), 1) } } } <\/script> ")])],2)},y=[],w=(s("c975"),s("a434"),{data:function(){return{chips:["Dribbble","GitHub","Behance","Vuejs","Kdev"]}},methods:{reset:function(){this.chips=["Dribbble","GitHub","Behance","Vuejs","Kdev"]},remove:function(e){this.chips.splice(this.chips.indexOf(e),1)}}}),I=w,j=Object(l["a"])(I,D,y,!1,null,null,null),A=j.exports,O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("vx-card",{attrs:{title:"Add and Remove Items","code-toggler":""}},[s("p",[e._v(" You can add and remove chips with the "),s("code",[e._v("vs-chips")]),e._v(" component. For the main parameter, pass the "),s("code",[e._v("items")]),e._v(" property, which is an array representing each chip ")]),s("div",{staticClass:"mt-5"},[s("div",{staticClass:"op-block mb-5"},[e._v(e._s(e.chips))]),s("vs-chips",{attrs:{color:"rgb(145, 32, 159)",placeholder:"New Element"},model:{value:e.chips,callback:function(t){e.chips=t},expression:"chips"}},e._l(e.chips,(function(t,c){return s("vs-chip",{key:t+"-"+c,attrs:{closable:""},on:{click:function(s){return e.remove(t)}}},[e._v(" "+e._s(t)+" ")])})),1)],1),s("template",{slot:"codeContainer"},[e._v(' <template> <div class="op-block mb-4"> '+e._s("{{ chips }}")+' </div> <vs-chips color="rgb(145, 32, 159)" placeholder="New Element" v-model="chips"> <vs-chip :key="chip" @click="remove(chip)" v-for="chip in chips" closable> '+e._s("{{ chip }}")+"} </vs-chip> </vs-chips> </template> <script> export default { data(){ return { chips:[ 'Dribbble', 'GitHub', 'Behance', 'Vuejs', 'Kdev', ], } }, methods: { remove (item) { this.chips.splice(this.chips.indexOf(item), 1) } } } <\/script> ")])],2)},B=[],E={data:function(){return{chips:["Dribbble","GitHub","Behance","Vuejs","Kdev"]}},methods:{remove:function(e){this.chips.splice(this.chips.indexOf(e),1)}}},G=E,H=Object(l["a"])(G,O,B,!1,null,null,null),V=H.exports,K=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("vx-card",{attrs:{title:"Customize Close and Clear Chips Icons","code-toggler":""}},[s("p",[e._v(" You can change the icons used for the close button and the clear button when using multiple chips with the "),s("code",[e._v("vs-chips")]),e._v(" component. ")]),s("p",[e._v(" For the main parameter, pass the "),s("code",[e._v("close-icon")]),e._v(" property, which is the close icon that appears on each chip. You can change the Clear Chips button with the "),s("code",[e._v("remove-icon")]),e._v(" property ")]),s("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[s("p",[e._v(" Vuesax uses the Google Material Icons font library by default. For a list of all available icons, visit the official "),s("a",{attrs:{href:"https://material.io/icons/",target:"_blank"}},[e._v("Material Icons page")]),e._v(". ")]),s("p",[e._v(" FontAwesome and other fonts library are supported. Simply use the icon-pack with fa or fas. You still need to include the Font Awesome icons in your project. ")])]),s("div",{staticClass:"mt-5"},[s("div",{staticClass:"op-block mb-5"},[e._v(e._s(e.chips))]),s("vs-chips",{attrs:{color:"rgb(145, 32, 159)",placeholder:"New Element","remove-icon":"delete_forever"},model:{value:e.chips,callback:function(t){e.chips=t},expression:"chips"}},e._l(e.chips,(function(t,c){return s("vs-chip",{key:t+"-"+c,attrs:{closable:"","close-icon":"delete"},on:{click:function(s){return e.remove(t)}}},[e._v(" "+e._s(t)+" ")])})),1)],1),s("template",{slot:"codeContainer"},[e._v(' <template> <div class="op-block mb-4"> '+e._s("{{ chips }}")+' </div> <vs-chips color="rgb(145, 32, 159)" placeholder="New Element" v-model="chips" remove-icon="delete_forever"> <vs-chip :key="chip" @click="remove(chip)" v-for="chip in chips" closable close-icon="delete"> '+e._s("{{ chip }}")+" </vs-chip> </vs-chips> </template> <script> export default { data(){ return { chips:[ 'Dribbble', 'GitHub', 'Behance', 'Vuejs', 'Kdev', ], } }, methods: { remove (item) { this.chips.splice(this.chips.indexOf(item), 1) } } } <\/script> ")])],2)},$=[],F={data:function(){return{chips:["Dribbble","GitHub","Behance","Vuejs","Kdev"]}},methods:{remove:function(e){this.chips.splice(this.chips.indexOf(e),1)}}},R=F,L=Object(l["a"])(R,K,$,!1,null,null,null),N=L.exports,T={components:{ChipDefault:v,ChipColor:_,ChipIcon:x,ChipClosable:A,ChipAddRemove:V,ChipCustomizeCloseClearChipIcon:N}},Y=T,z=Object(l["a"])(Y,c,a,!1,null,null,null);t["default"]=z.exports}}]);
//# sourceMappingURL=chunk-2d210f45.ae568120.js.map