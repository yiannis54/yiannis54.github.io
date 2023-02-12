(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-366c9aa1"],{"23b0":function(a,t,e){},"454e":function(a,t,e){},4602:function(a,t,e){"use strict";var s=e("23b0"),r=e.n(s);r.a},"6de0":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"colors-demo"}},[e("colors-default"),e("colors-gradient"),e("colors-customization"),e("colors-change-color"),e("colors-change-color-SSR"),e("colors-tailwind")],1)},r=[],n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("vx-card",{attrs:{title:"Default Colors","code-toggler":""}},[e("p",[a._v("We have a series of colors that are used by default. They include:")]),e("vx-list",{attrs:{list:a.defaultColors}}),e("p",{staticClass:"mb-5"},[a._v(" For each color, we think has its functionality in the application as alerts of errors ( "),e("strong",[a._v("danger")]),a._v("), warnings to the user ( "),e("strong",[a._v("warning")]),a._v("), communications of approval ( "),e("strong",[a._v("success")]),a._v("), or main color of the application ( "),e("strong",[a._v("primary")]),a._v("). ")]),e("ul",{staticClass:"demo-alignment text-white"},[e("li",{staticClass:"bg-primary"},[a._v("primary")]),e("li",{staticClass:"bg-success"},[a._v("success")]),e("li",{staticClass:"bg-danger"},[a._v("danger")]),e("li",{staticClass:"bg-warning"},[a._v("warning")]),e("li",{staticClass:"bg-dark"},[a._v("dark")])]),e("template",{slot:"codeContainer"},[a._v(' <ul class="demo-alignment text-white"> <li class="bg-primary">primary</li> <li class="bg-success">success</li> <li class="bg-danger">danger</li> <li class="bg-warning">warning</li> <li class="bg-dark">dark</li> </ul> ')])],2)},l=[],o={data:function(){return{defaultColors:["primary","success","danger","warning","dark"]}}},i=o,c=e("2877"),g=Object(c["a"])(i,n,l,!1,null,null,null),d=g.exports,u=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("vx-card",{attrs:{title:"Gradient Colors","code-toggler":""}},[e("p",[a._v("We have make gradient color based on our default color:")]),e("vx-list",{attrs:{list:a.defaultColors}}),e("p",{staticClass:"mb-5"},[a._v(" For each color, we think has its functionality in the application as alerts of errors ( "),e("strong",[a._v("danger")]),a._v("), warnings to the user ( "),e("strong",[a._v("warning")]),a._v("), communications of approval ( "),e("strong",[a._v("success")]),a._v("), or main color of the application ( "),e("strong",[a._v("primary")]),a._v("). ")]),e("ul",{staticClass:"demo-alignment text-white"},[e("li",{staticClass:"bg-primary-gradient text-center"},[a._v("primary gradient")]),e("li",{staticClass:"bg-success-gradient text-center"},[a._v("success gradient")]),e("li",{staticClass:"bg-danger-gradient text-center"},[a._v("danger gradient")]),e("li",{staticClass:"bg-warning-gradient text-center"},[a._v("warning gradient")]),e("li",{staticClass:"bg-dark-gradient text-center"},[a._v(" dark "),e("br"),a._v("gradient ")])]),e("template",{slot:"codeContainer"},[a._v(' <ul class="demo-alignment text-white"> <li class="bg-primary-gradient">primary gradient</li> <li class="bg-success-gradient">success gradient</li> <li class="bg-danger-gradient">danger gradient</li> <li class="bg-warning-gradient">warning gradient</li> <li class="bg-dark-gradient">dark gradient</li> </ul> ')])],2)},v=[],p={data:function(){return{defaultColors:["primary gradient","success gradient","danger gradient","warning gradient","dark gradient"]}}},m=p,h=Object(c["a"])(m,u,v,!1,null,null,null),_=h.exports,b=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("vx-card",{attrs:{title:"Customize Theme Colors","code-toggler":"","code-language":"js"}},[e("p",[a._v("We almost always need a personalized application with own colors. In Vuesax, you can change the main colors to those that you need and the branding that your application has.")]),e("p",[a._v(" You can change default colors using "),e("code",[a._v("themeColors.js")]),a._v(" file. You can find this file in src folder. ")]),e("vs-alert",{staticClass:"mt-5",attrs:{icon:"warning",active:"true",color:"warning"}},[e("span",[a._v(" Only "),e("strong",[a._v("RGB")]),a._v(" and "),e("strong",[a._v("HEX")]),a._v(" colors are supported. ")])]),e("br"),e("ul",{staticClass:"demo-alignment text-white"},[e("li",{staticStyle:{"background-color":"#5b3cc4"}},[a._v("primary")]),e("li",{staticStyle:{"background-color":"rgb(23, 201, 100)"}},[a._v("success")]),e("li",{staticStyle:{"background-color":"rgb(242, 19, 93)"}},[a._v("danger")]),e("li",{staticStyle:{"background-color":"rgb(255, 130, 0)"}},[a._v("warning")]),e("li",{staticStyle:{"background-color":"rgb(36, 33, 69)"}},[a._v("dark")])]),e("template",{slot:"codeContainer"},[a._v(" Vue.use(Vuesax, { theme: { colors: { primary: '#5b3cc4', success: 'rgb(23, 201, 100)', danger: 'rgb(242, 19, 93)', warning: 'rgb(255, 130, 0)', dark: 'rgb(36, 33, 69)' } } }) ")])],2)},C=[],w={},f=Object(c["a"])(w,b,C,!1,null,null,null),y=f.exports,x=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("vx-card",{attrs:{title:"Change Color","code-toggler":""}},[e("p",[a._v("You can change the color of the application in process of execution with the function $vs.theme which as a parameter requires a json with the colors to change")]),e("p",[a._v("Imagine that in the middle of the application we want the primary color change would be something like this:")]),e("prism",{staticClass:"rounded-lg",attrs:{language:"js"}},[a._v(" this.$vs.theme({ primary:'rgb(5, 173, 88)' // my new color }) ")]),e("p",{staticClass:"mt-5"},[a._v(" By doing this, all "),e("strong",[a._v("Vuesax")]),a._v(" components and other components which uses primary color in the application will change. Select one of the colors to change it and that all the components of this application will have that color. ")]),e("ul",{staticClass:"demo-alignment text-white"},[e("li",{staticClass:"bg-primary"},[e("input",{staticClass:"absolute w-full h-full cursor-pointer opacity-0",attrs:{type:"color",name:"",value:""},on:{change:function(t){return a.changeColor(t.target.value,"primary")}}}),a._v(" primary ")]),e("li",{staticClass:"bg-success"},[e("input",{staticClass:"absolute w-full h-full cursor-pointer opacity-0",attrs:{type:"color",name:"",value:""},on:{change:function(t){return a.changeColor(t.target.value,"success")}}}),a._v(" success ")]),e("li",{staticClass:"bg-danger"},[e("input",{staticClass:"absolute w-full h-full cursor-pointer opacity-0",attrs:{type:"color",name:"",value:""},on:{change:function(t){return a.changeColor(t.target.value,"danger")}}}),a._v(" danger ")]),e("li",{staticClass:"bg-warning"},[e("input",{staticClass:"absolute w-full h-full cursor-pointer opacity-0",attrs:{type:"color",name:"",value:""},on:{change:function(t){return a.changeColor(t.target.value,"warning")}}}),a._v(" warning ")]),e("li",{staticClass:"bg-dark"},[e("input",{staticClass:"absolute w-full h-full cursor-pointer opacity-0",attrs:{type:"color",name:"",value:""},on:{change:function(t){return a.changeColor(t.target.value,"dark")}}}),a._v(" dark ")])]),e("template",{slot:"codeContainer"},[a._v(' <template> <ul class="demo-alignment text-white"> <li class="colorprimaryx"> <input @change="changeColor($event.target.value,\'primary\')" type="color" name="" value=""> primary </li> <li class="colorsuccessx"> <input @change="changeColor($event.target.value,\'success\')" type="color" name="" value=""> success </li> <li class="colordangerx"> <input @change="changeColor($event.target.value,\'danger\')" type="color" name="" value=""> danger </li> <li class="colorwarningx"> <input @change="changeColor($event.target.value,\'warning\')" type="color" name="" value=""> warning </li> <li class="colordarkx"> <input @change="changeColor($event.target.value,\'dark\')" type="color" name="" value=""> dark </li> </ul> </template> <script> export default { methods: { changeColor(colorx, whatColor) { this.$vs.theme({ [whatColor]: colorx }) } } } <\/script> <style lang="css" scoped> .colorprimaryx { background: rgb(var(--vs-primary)) !important; } .colorsuccessx { background: rgb(var(--vs-success)) !important; } .colordangerx { background: rgb(var(--vs-danger)) !important; } .colorwarningx { background: rgb(var(--vs-warning)) !important; } .colordarkx { background: rgb(var(--vs-dark)) !important; } </style> ')])],2)},k=[],$=e("2fa7"),j=e("8d51"),T=e.n(j),S={components:{Prism:T.a},methods:{changeColor:function(a,t){this.$vs.theme(Object($["a"])({},t,a))}}},O=S,E=(e("f78f"),Object(c["a"])(O,x,k,!1,null,"0065b0ec",null)),R=E.exports,Y=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("vx-card",{attrs:{title:"Change Color SSR"}},[e("p",[a._v("To change the main colors in SSR (Server-Side Rendering) for example if you are using nuxt.js the main variables of stylus and those of css")]),e("p",[a._v("To change the variables we must first import them into a .styl file and change the values of the variables by the colors required")]),e("vs-alert",{staticClass:"my-5",attrs:{icon:"warning",active:"true",color:"warning"}},[e("p",{staticClass:"mb-2"},[a._v("In order to change the variables and use them you have to have implemented the stylus loaders, to implement them by npm would be something like this")]),e("code",[a._v("npm i stylus stylus-loader --save-dev")])]),e("vs-alert",{staticClass:"mt-5",attrs:{icon:"warning",active:"true",color:"warning"}},[e("p",[a._v(" The value of the colors can only be "),e("code",[a._v("RGB")]),a._v(" and nothing else is added to the number without the letters "),e("code",[a._v("rgb")]),a._v(" or the parentheses ")]),e("p",[a._v(" For example if the color is "),e("code",[a._v("rgb(50,100,200)")]),a._v(" the value to be implemented is only: "),e("code",[a._v("50,100,A")])])]),e("br"),e("prism",{staticClass:"rounded-lg",attrs:{language:"js"}},[a._v(" // main.styl @import '~vuesax/dist/styles/index.styl' $vs-primary = 50,100,200 :root { --vs-primary: $vs-primary } ")]),e("div",{staticClass:"mt-base"},[e("p",[a._v("The stylus variables of the main colors are:")]),e("prism",{staticClass:"rounded-lg"},[a._v(" $vs-primary $vs-success $vs-danger $vs-warning $vs-dark ")]),e("p",{staticClass:"mt-base"},[a._v("And the css variables are:")]),e("prism",{staticClass:"rounded-lg",attrs:{language:"css"}},[a._v(" --vs-primary --vs-success --vs-danger --vs-warning --vs-dark ")])],1)],1)},z=[],A={components:{Prism:T.a}},B=A,G=Object(c["a"])(B,Y,z,!1,null,null,null),V=G.exports,F=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("vx-card",{attrs:{title:"Tailwind Colors"}},[e("span",[a._v(" Tailwind creates "),e("code",[a._v("text-{color}")]),a._v(" and "),e("code",[a._v("bg-{color}")]),a._v(" for text color and background color. ")]),e("div",{staticClass:"mt-5"},[e("tailwind-text-classes"),e("tailwind-background-classes"),e("tailwind-add-more-colors")],1)])},I=[],P=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("vx-card",{attrs:{title:"Text Classes","code-toggler":"","no-shadow":"","card-border":""}},[e("span",[a._v(" You can use "),e("code",[a._v("text-{color}")]),a._v(" for applying default colors to text. ")]),e("br"),e("span",[a._v(" There is also other tailwind classes like "),e("code",[a._v("text-white")]),a._v(", "),e("code",[a._v("text-black")]),a._v(", "),e("code",[a._v("text-transparent")])]),e("div",{staticClass:"demo-alignment"},[e("span",{staticClass:"text-primary"},[a._v("primary")]),e("span",{staticClass:"text-success"},[a._v("success")]),e("span",{staticClass:"text-danger"},[a._v("danger")]),e("span",{staticClass:"text-warning"},[a._v("warning")]),e("span",{staticClass:"text-dark"},[a._v("dark")]),e("span",{staticClass:"text-white bg-primary p-2 rounded"},[a._v("white")]),e("span",{staticClass:"text-black"},[a._v("black")]),e("span",{staticClass:"text-transparent"},[a._v("transparent")])]),e("template",{slot:"codeContainer"},[a._v(' <div class="demo-alignment"> <span class="text-primary">primary</span> <span class="text-success">success</span> <span class="text-danger">danger</span> <span class="text-warning">warning</span> <span class="text-dark">dark</span> <span class="text-white op-block">white</span> <span class="text-black">black</span> <span class="text-transparent op-block">transparent</span> </div> ')])],2)},W=[],q={},D=Object(c["a"])(q,P,W,!1,null,null,null),J=D.exports,H=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("vx-card",{attrs:{title:"Background Classes","code-toggler":"","no-shadow":"","card-border":""}},[e("span",[a._v(" You can use "),e("code",[a._v("bg-{color}")]),a._v(" for applying default colors to background. ")]),e("br"),e("span",[a._v(" There is also other tailwind classes like "),e("code",[a._v("bg-white")]),a._v(", "),e("code",[a._v("bg-black")]),a._v(", "),e("code",[a._v("bg-transparent")])]),e("ul",{staticClass:"demo-alignment text-white mt-5"},[e("li",{staticClass:"bg-primary"},[a._v("primary")]),e("li",{staticClass:"bg-success"},[a._v("success")]),e("li",{staticClass:"bg-danger"},[a._v("danger")]),e("li",{staticClass:"bg-warning"},[a._v("warning")]),e("li",{staticClass:"bg-dark"},[a._v("dark")]),e("li",{staticClass:"bg-white text-dark"},[a._v("white")]),e("li",{staticClass:"bg-black"},[a._v("black")]),e("li",{staticClass:"bg-transparent text-dark"},[a._v("transparent")])]),e("template",{slot:"codeContainer"},[a._v(' <ul class="demo-alignment text-white"> <li class="bg-primary">primary</li> <li class="bg-success">success</li> <li class="bg-danger">danger</li> <li class="bg-warning">warning</li> <li class="bg-dark">dark</li> <li class="bg-white text-dark">white</li> <li class="bg-black">black</li> <li class="bg-transparent text-dark">transparent</li> </ul> ')])],2)},M=[],X={},K=Object(c["a"])(X,H,M,!1,null,null,null),L=K.exports,N=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("vx-card",{attrs:{title:"Add more colors","no-shadow":"","card-border":""}},[e("p",[a._v(" You can add more colors in "),e("code",[a._v("tailwind.js")]),a._v(" file. You can find this file in root folder. ")]),e("span",{staticClass:"mb-5"},[a._v(" Checkout Color Customization in "),e("a",{attrs:{href:"https://tailwindcss.com/docs/text-color#customizing",target:"_blank"}},[a._v("Tailwind")])]),e("prism",{staticClass:"rounded-lg",attrs:{language:"js"}},[a._v(" colors: { .... 'secondary': '#767c82', .... } ")]),e("template",{slot:"codeContainer"}),e("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[e("span",[a._v(" After registering color you can use "),e("code",[a._v("text-secondary")]),a._v(" and "),e("code",[a._v("bg-secondary")]),a._v(" in theme ")])])],2)},Q=[],U={components:{Prism:T.a}},Z=U,aa=Object(c["a"])(Z,N,Q,!1,null,null,null),ta=aa.exports,ea={components:{TailwindTextClasses:J,TailwindBackgroundClasses:L,TailwindAddMoreColors:ta}},sa=ea,ra=(e("c509"),Object(c["a"])(sa,F,I,!1,null,null,null)),na=ra.exports,la={components:{ColorsDefault:d,ColorsGradient:_,ColorsCustomization:y,ColorsChangeColor:R,ColorsChangeColorSSR:V,ColorsTailwind:na}},oa=la,ia=(e("4602"),Object(c["a"])(oa,s,r,!1,null,null,null));t["default"]=ia.exports},c509:function(a,t,e){"use strict";var s=e("454e"),r=e.n(s);r.a},cf29:function(a,t,e){},f78f:function(a,t,e){"use strict";var s=e("cf29"),r=e.n(s);r.a}}]);
//# sourceMappingURL=chunk-366c9aa1.3fdc61f8.js.map