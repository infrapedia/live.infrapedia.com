(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7da8b47a"],{5435:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"no-overflow-x"},[a("div",{staticClass:"pr8 pl8 pt2 pb4 columns-wrapper no-overflow-x overflow-y-auto"},t._l(t.cableColumns,(function(e,l){return a("div",{key:l},[t.collapseColumns.includes(e.value.toLowerCase())?[t.info[e.value]&&e.showSidebar?a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("p",{staticClass:"label capitalize"},[t._v(t._s(e.label))]),t._l(t.info[e.value],(function(l,s){return a("el-tag",{key:s+"_"+l.name,staticClass:"mr2 cursor-pointer",attrs:{size:"mini"},on:{click:function(a){return t.handleSelection(l._id,e.label)}}},[t._v(" "+t._s(l.name)+" ")])}))],2)],1):t._e()]:e.value.toLowerCase().includes("litcapacity")?[t.info[e.value]&&e.showSidebar&&!t.info.terrestrial?a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("p",{staticClass:"label capitalize"},[t._v(t._s(e.label))]),a("el-table",{attrs:{data:t.info[e.value]}},[a("el-table-column",{attrs:{label:"Year",prop:"year",formatter:t.getYear}}),a("el-table-column",{attrs:{label:"Capacity in Tbps",prop:"cap"}})],1)],1)],1):t._e()]:[a("el-row",{attrs:{gutter:20}},[e.label.toLowerCase().includes("url")&&t.info[e.value]?[a("el-col",{attrs:{span:24}},[a("small",[a("p",{staticClass:"capitalize"},[t._v(" More information: ")])])])]:("Latency"!=e.label||t.info.terrestrial)&&("capacityTBPS"!=e.value||t.info.terrestrial)?"category"==e.value||"systemLength"==e.value&&"Latency"!=e.label?a("el-col",{attrs:{span:10}},[a("p",{staticClass:"label capitalize"},[t._v(t._s(e.label))])]):t.info[e.value]&&"Facilities"==e.label?a("el-col",{attrs:{span:10}},[a("p",{staticClass:"label capitalize"},[t._v(" "+t._s(t.info.terrestrial?e.label+" (On-Net)":e.label+" (POPs)")+" ")])]):t.info[e.value]&&"Latency"!=e.label&&"systemLength"!=e.value&&"capacityTBPS"!=e.value?a("el-col",{attrs:{span:10}},[a("p",{staticClass:"label capitalize"},[t._v(t._s(e.label))])]):t._e():a("el-col",{attrs:{span:10}},[a("p",{staticClass:"label capitalize"},[t._v(t._s(e.label))])]),t.info[e.value]?[e.value.toLowerCase().includes("url")||e.value.toLowerCase().includes("web")?a("el-col",{attrs:{span:12}},t._l(t.info[e.value],(function(e,l){return a("a",{key:l,staticClass:"underline dont-break-out fs-regular mr2 inline-block",staticStyle:{"max-width":"10.4rem"},attrs:{href:e.includes("http://")||e.includes("https://")?e:"http://"+e,target:"_blank"},domProps:{textContent:t._s(e)}})})),0):e.value.includes("activationDateTime")&&"EOL"!=e.label?a("el-col",{attrs:{span:12}},[a("p",{staticClass:"text-bold"},[t._v(" "+t._s(t.convertToYear(t.info[e.value]))+" ")])]):t.isArrCol(t.info[e.value])||"Latency"!=e.label||t.info.terrestrial?e.label.includes("EOL")?a("el-col",{attrs:{span:12}},[a("p",{staticClass:"text-bold"},[t._v(" "+t._s(t.convertToYear(t.calculateEOL(t.info[e.value])))+" ")])]):"systemLength"==e.value&&"Latency"!=e.label?a("el-col",{attrs:{span:12}},[a("p",{staticClass:"text-bold"},[t._v(t._s(t.info[e.value])+" km")])]):"capacityTBPS"!=e.value||t.info.terrestrial?"category"==e.value?a("el-col",{attrs:{span:12}},[a("p",{staticClass:"text-bold"},[t._v(" "+t._s(t.info[e.value]&&""!==t.info[e.value]?t.info[e.value]:"Unknown")+" ")])]):t.isArrCol(t.info[e.value])||"Latency"==e.label||"systemLength"==e.value||"capacityTBPS"==e.value?t._e():a("el-col",{attrs:{span:12}},[a("p",{staticClass:"text-bold"},[t._v(" "+t._s(t.info[e.value])+" ")])]):a("el-col",{attrs:{span:12}},[a("p",{staticClass:"text-bold"},[t._v(t._s(t.info[e.value]))])]):a("el-col",{attrs:{span:12}},[a("p",{staticClass:"text-bold"},[t._v(" "+t._s(t.getCableLatency(t.info[e.value]))+" ms ")])])]:["category"!=e.value||t.info[e.value]?t._e():a("el-col",{attrs:{span:12}},[a("p",{staticClass:"text-bold"},[t._v(" Unknown ")])])],t.info.notes?a("div",{domProps:{innerHTML:t._s(t.info.notes)}}):t._e()],2)]],2)})),0),a("footer",{staticClass:"pr8 pl8 pb8"},[[a("el-divider",{staticClass:"mt0"}),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{xs:24,sm:12,md:24,lg:12}},[a("el-popover",{attrs:{placement:"bottom",width:"100","popper-class":"buy-capacity-popper","visible-arrow":!1,trigger:"manual"},model:{value:t.isMenuOpen,callback:function(e){t.isMenuOpen=e},expression:"isMenuOpen"}},[a("el-card",{attrs:{shadow:"never"}},[a("ul",{staticClass:"pt2 pb2",attrs:{role:"list"}},[a("li",{staticClass:"p4 no-selectable transition cursor-pointer seamless-hoverbg no-outline",class:{dark:t.dark,light:!t.dark},attrs:{tabindex:"1",role:"listitem"},on:{click:t.emitEvent}},[t._v(" Backbone ")])])]),a("div",{staticClass:"cursor-pointer no-outline no-selectable",attrs:{slot:"reference"},on:{click:t.toggleMenu},slot:"reference"},[a("el-button",{staticClass:"mr1 w9 h9 vertical-align",attrs:{type:"warning",circle:""}},[a("fa",{staticClass:"sm-icon mt-1",attrs:{icon:["fas","cart-plus"]}})],1),a("span",{staticClass:"cursor-pointer fs-regular label"},[t._v("Buy capacity")])],1)],1)],1),a("el-col",{attrs:{xs:24,sm:12,md:24,lg:12}},[a("div",{staticClass:"cursor-pointer no-selectable",on:{click:function(e){return t.$emit(t.CREATE_ALERT)}}},[a("el-button",{staticClass:"mr1 w9 h9 vertical-align",attrs:{type:1!==t.info.alert?"info":"warning",circle:""}},[a("fa",{staticClass:"sm-icon mt-1",attrs:{icon:["fas","bell"]}})],1),a("span",{staticClass:"cursor-pointer fs-regular label"},[t._v("Receive alerts")])],1)])],1),a("el-row",{staticClass:"mt8",attrs:{gutter:20}},[a("el-col",{attrs:{xs:24,sm:12,md:24,lg:12}},[a("div",{staticClass:"cursor-pointer no-selectable",on:{click:function(e){return t.$emit(""+t.EDIT_CABLE,{_id:t.info._id,owner:t.info.uuid,terrestrial:t.info.terrestrial})}}},[a("el-button",{staticClass:"mr1 w9 h9 vertical-align",attrs:{type:"warning",circle:""}},[a("fa",{staticClass:"sm-icon mt-1",attrs:{icon:["fas","pen"]}})],1),a("span",{staticClass:"fs-regular label"},[t._v(t._s(t.info.terrestrial?"Edit Network":"Edit this cable"))])],1)]),a("el-col",{attrs:{xs:24,sm:12,md:24,lg:12}},[a("div",{staticClass:"cursor-pointer no-selectable",on:{click:function(e){return t.$emit(t.REPORT_ISSUE)}}},[a("el-button",{staticClass:"mr1 w9 h9 vertical-align",attrs:{type:"warning",circle:""}},[a("fa",{staticClass:"sm-icon mt-1",attrs:{icon:["fas","exclamation-circle"]}})],1),a("span",{staticClass:"cursor-pointer fs-regular label"},[t._v("Report issue")])],1)])],1)],a("div",{staticClass:"flex justify-content-center mt8"},[a("router-link",{attrs:{to:"/vote",title:"Vote for Infrapedia's 2020 Infrastructure Awards"}},[a("el-image",{attrs:{src:"https://cdn1.infrapedia.com/assets/vote2020.png",fit:"contain"}})],1)],1)],2)])},s=[],r=(a("4de4"),a("d81d"),a("2909")),n=a("47f0"),i=a("1315");function o(t){return i["DateTime"].fromISO(t).plus({years:25})}var c=a("fcac"),u={name:"ICableAttributes",props:{info:{type:Object,required:!0},columns:{type:Array,required:!0}},data:function(){return{EDIT_CABLE:c["c"],BUY_CAPACITY:c["a"],REPORT_ISSUE:c["d"],CREATE_ALERT:c["b"],calculateEOL:o,collapse:[],convertToYear:n["a"],isMenuOpen:!1}},computed:{focus:function(){return this.$store.state.map.focus},dark:function(){return this.$store.state.isDark},cableColumns:function(){var t=this,e=Object(r["a"])(this.columns).map((function(e){return Array.isArray(t.info[e.value])&&t.info[e.value].length?e:!(Array.isArray(t.info[e.value])&&!t.info[e.value].length)&&(e.showSidebar?e:void 0)})).filter((function(t){return t}));return"project"==this.info.category&&(e=e.filter((function(t){return"EOL"!=t.label}))),e},isFutureState:function(){var t=this.info.activation_datetime,e=Math.round((new Date).getTime()/1e3);return!!(null!==t&&parseInt(t)>e)},getYear:function(){return function(t){return new Date(t.year).getFullYear()}},collapseColumns:function(){return["org","cls","networks","facilities","owners"]}},methods:{isArrCol:function(t){return Array.isArray(t)},handleSelection:function(t,e){return this.$emit("selection",{id:t,option:e})},getCableLatency:function(t){var e=200;return t/e},toggleMenu:function(){this.isMenuOpen=!this.isMenuOpen},emitEvent:function(){return this.toggleMenu(),this.$emit("".concat(c["a"]),"backbone")}}},p=u,f=(a("6fe0"),a("2877")),v=Object(f["a"])(p,l,s,!1,null,"50983f0e",null);e["default"]=v.exports},"6fe0":function(t,e,a){"use strict";var l=a("d045"),s=a.n(l);s.a},d045:function(t,e,a){}}]);
//# sourceMappingURL=chunk-7da8b47a.f53ce7d0.js.map