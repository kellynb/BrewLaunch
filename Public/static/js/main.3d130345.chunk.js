(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,n){e.exports=n.p+"static/media/beerLogo.000cdd1b.png"},125:function(e,t,n){e.exports=n(287)},134:function(e,t,n){},15:function(e,t,n){},287:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),s=n.n(c),o=n(290),l=n(19),u=n(35),i=n(30),m=n(118),h=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,p=Object(u.c)({cTanks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CTANKS":return t.value;default:return e}},emptyCTanks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EMPTY_CTANKS":return t.value;default:return e}},selectTank:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TANK":return t.value;case"CHANGE_STATUS":return Object(i.a)({},e,{status:"conditioning"});default:return e}}}),d=Object(u.e)(p,h(Object(u.a)(m.a))),f=(n(134),n(22)),b=n(23),g=n(25),v=n(24),E=n(26),k=n(291),B=n(289),y=n(18),T=n(53),w=n.n(T),C=n(54),O=n.n(C),x=n(41),S=n.n(x),N=n(43),j=n.n(N),I=n(119),D=n.n(I),F=n(52),V=n.n(F),P=n(33),L=n.n(P),A=n(288),M=function(e){return r.a.createElement("div",null,r.a.createElement(V.a,{id:"simple-menu",anchorEl:e.anchorEl,open:Boolean(e.anchorEl),onClose:e.handleClose},r.a.createElement(A.a,{to:"/",className:"links"},r.a.createElement(L.a,{onClick:e.handleClose},"Home")),r.a.createElement(A.a,{to:"/Brew",className:"links"},r.a.createElement(L.a,{onClick:e.handleClose},"Brew")),r.a.createElement(L.a,{onClick:e.handleClose},"Historic Brew")))},R=n(55),U=n.n(R),$=(n(15),function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={anchorEl:null},n.handleClick=function(e){n.setState({anchorEl:e.currentTarget})},n.handleClose=function(){n.setState({anchorEl:null})},n}return Object(E.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.state.anchorEl,t=this.props.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(w.a,{position:"static",className:t.appbar},r.a.createElement(O.a,{className:t.toolbar},r.a.createElement("img",{src:D.a,alt:"Thirsy Planet Logo",id:"logo"}),r.a.createElement(S.a,{variant:"h1",color:"inherit",className:t.grow},"Very Good Brewing Company"),r.a.createElement(j.a,{className:t.menuButton,color:"inherit","aria-owns":e?"simple-menu":void 0,"aria-haspopup":"true",onClick:this.handleClick},r.a.createElement(U.a,null)),r.a.createElement(M,{anchorEl:this.state.anchorEl,handleClose:this.handleClose}))))}}]),t}(a.Component)),q=Object(y.withStyles)({root:{flexGrow:1},appbar:{backgroundColor:"#5c4925"},grow:{fontFamily:"Fira Sans Condensed",color:"#e6e5d4",fontSize:"25px",flexGrow:1},toolbar:{display:"flex",flexDirection:"row",textAlign:"center"},menuButton:{padding:0}})($),z=function(){return r.a.createElement("button",{className:"allButtons"},r.a.createElement(A.a,{to:"/Brew",className:"links"},"Brew Batch"))};function _(){return fetch("/fermenters",{body:JSON.stringify(),headers:{"content-type":"application/json"},method:"GET"})}var G=n(292),Y=function(e){return r.a.createElement("div",null,r.a.createElement("h4",null,"Batch Number: ",e.fermenter.number),r.a.createElement("h4",null,"Beer Style: ",e.fermenter.style),r.a.createElement("h4",null,"Volume: ",e.fermenter.bbls.reduce(function(e,t){return e+t},0)," bbls"),r.a.createElement("h4",null,"Temp: ",e.fermenter.tankTemp[e.fermenter.tankTemp.length-1]?e.fermenter.tankTemp[e.fermenter.tankTemp.length-1].tankTemp:0," F"),r.a.createElement("h4",null,"Starting Brix: ",e.fermenter.brix.reduce(function(e,t,n){return e+(t-e)/(n+1)},0)," brix "),r.a.createElement("h4",null,"Fermenting Brix: ",e.fermenter.fermentingBrix[e.fermenter.fermentingBrix.length-1]?e.fermenter.fermentingBrix[e.fermenter.fermentingBrix.length-1].fermentingBrix:null))},H=function(e){return r.a.createElement("div",{className:"fermenterData"},r.a.createElement("h4",null,"Batch Number: ",e.fermenter.number),r.a.createElement("h4",null,"Beer Style: ",e.fermenter.style),r.a.createElement("h4",null,"Volume: ",e.fermenter.bbls.reduce(function(e,t){return e+t},0)," bbls"),r.a.createElement("h4",null,"Temp: ",e.fermenter.tankTemp[e.fermenter.tankTemp.length-1]?e.fermenter.tankTemp[e.fermenter.tankTemp.length-1].tankTemp:0," F"),r.a.createElement("h4",null,"Final Brix: ",e.fermenter.fermentingBrix[e.fermenter.fermentingBrix.length-1]?e.fermenter.fermentingBrix[e.fermenter.fermentingBrix.length-1].fermentingBrix:null))},K=function(e){return r.a.createElement("div",{className:"fermenterData"},r.a.createElement("h4",null,"Empty"))},J=function(e){return r.a.createElement("section",null,e.tanks.map(function(t,n){return r.a.createElement("div",{className:"cFermenter",key:n,style:{backgroundColor:{fermenting:{backgroundColor:"#5d9732"},conditioning:{backgroundColor:"#3490db"},empty:{backgroundColor:"#d1d0bb"}}[t.status].backgroundColor}},r.a.createElement("button",{onClick:function(){e.setTank(t)},className:"TankNumber"},r.a.createElement("h3",{id:"fermenterVal"},t.tank)),r.a.createElement("div",{className:"fermenterData"},"fermenting"===t.status?r.a.createElement(Y,{fermenter:t}):"conditioning"===t.status?r.a.createElement(H,{fermenter:t}):r.a.createElement(K,{fermenter:t})))}))},W=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).orderTank=function(){for(var e=0,t=1;t<n.props.tanks.length;e++,t++){if(n.props.tanks[e].tank>n.props.tanks[t].tank){var a=n.props.tanks[e],r=n.props.tanks[t];n.props.tanks[t]=a,n.props.tanks[e]=r,n.orderTank()}}},n}return Object(E.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.props.getTanks()}},{key:"render",value:function(){return this.orderTank(),r.a.createElement(J,{tanks:this.props.tanks,setTank:this.props.setTank})}}]),t}(a.Component);var X=Object(G.a)(Object(l.b)(function(e){return{tanks:e.cTanks}},function(e,t){return{getTanks:function(){return e(function(e){return _().then(function(e){return e.json()}).then(function(t){var n=t.reduce(function(e,t){return t.runOff||e.push(t.tank),e},[]);e({type:"GET_CTANKS",value:t}),e({type:"EMPTY_CTANKS",value:n})})})},setTank:function(n){return e(function(e,t){return function(n){n({type:"SET_TANK",value:e}),t.push("/ProductionTank/".concat(e.tank))}}(n,t.history))}}})(W)),Q=function(){return r.a.createElement("main",null,r.a.createElement(q,null),r.a.createElement("section",{className:"topTitle"},r.a.createElement(z,null)),r.a.createElement("section",{id:"brewFarm"},r.a.createElement(X,null)))},Z=function(){return r.a.createElement(Q,null)},ee=n(124),te=n(32),ne={fermenting:"#5d9732",conditioning:"#3490db",empty:"#5c4925"},ae=function(e){return r.a.createElement("svg",{fill:ne[e.status],id:"fermentationVisuals",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 432 288",xmlSpace:"preserve"},r.a.createElement("circle",{cx:216,cy:"271.3",r:4}),r.a.createElement("polygon",{points:"213.1,257.2 213.1,261.5 172.8,261.5 172.8,205.3 163.9,190.1 163.9,277.3 166.5,277.3 166.5,281.4 161.9,281.4   161.9,284.3 174.5,284.3 174.5,281.4 169.9,281.4 169.9,277.3 172.8,277.3 172.8,267.3 259.5,267.3 259.5,277.3 262.4,277.3   262.4,281.4 257.8,281.4 257.8,284.3 270.1,284.3 270.1,281.4 265.5,281.4 265.5,277.3 268.1,277.3 268.1,190.1 259.5,205.3   259.5,261.5 218.9,261.5 218.9,257.2 "}),r.a.createElement("path",{fill:"none",d:"M174,11.5v9.7c8.9-2.8,20.5-4.6,33.4-5.1v-4.5H174V11.5z"}),r.a.createElement("path",{fill:"none",d:"M224.6,11.5V16c12.9,0.6,24.5,2.4,33.4,5.1v-9.7L224.6,11.5L224.6,11.5z"}),r.a.createElement("path",{d:"M174,11.5h33.4V16c1.9-0.1,3.8-0.1,5.8-0.2v-4.3c0-3.2-2.6-5.8-5.8-5.8H174c-3.2,0-5.8,2.6-5.8,5.8v11.7  c1.8-0.7,3.7-1.4,5.8-2.1V11.5z"}),r.a.createElement("path",{d:"M224.6,11.5H258v9.7c2.1,0.6,4,1.3,5.8,2.1V11.5c0-3.2-2.6-5.8-5.8-5.8h-33.4c-3.2,0-5.8,2.6-5.8,5.8v4.3  c1.9,0,3.9,0.1,5.8,0.2V11.5z"}),r.a.createElement("path",{d:"M159.5,85.2v68.9l54.7,93.9h3.7l54.5-94.1V85.2c0,0-20.4-3-56.5-3S159.5,85.2,159.5,85.2z"}),r.a.createElement("path",{d:"M282.2,40.3v116.3l-58.7,101.1h-15l-58.8-101.1V40.3c0,0,6.3-4.3,6.3-5.2c0-4.6,4.5-8.7,12.1-11.9c1.8-0.7,3.7-1.4,5.8-2.1  c8.9-2.8,20.5-4.6,33.4-5.1c1.9-0.1,3.8-0.1,5.8-0.2c1,0,1.9,0,2.9,0s1.9,0,2.9,0c1.9,0,3.9,0.1,5.8,0.2c12.9,0.6,24.5,2.4,33.4,5.1  c2.1,0.6,4,1.3,5.8,2.1c7.6,3.2,12.1,7.3,12.1,11.9C275.9,36,282.2,40.3,282.2,40.3z M276.5,154.9V43.2c-4.9-3.5-6.3-5.5-6.3-8.1  c0-1.6-2.2-3.7-6.5-5.7c-1.6-0.8-3.4-1.5-5.6-2.2c-7.7-2.6-18.9-4.8-33.4-5.4c-1.9-0.1-3.8-0.1-5.8-0.2c-1,0-1.9,0-2.9,0  s-1.9,0-2.9,0c-2,0-3.9,0.1-5.8,0.2c-14.5,0.6-25.7,2.9-33.4,5.4c-2.1,0.7-4,1.4-5.6,2.2c-4.3,2-6.5,4-6.5,5.5  c0,2.9-1.2,4.6-6.3,8.4v112L212,252h8.4L276.5,154.9z"}))},re=Object(l.b)(function(e){return{status:e.selectTank.status}})(ae),ce=function(e){var t={fermenting:"Conditioning"};return r.a.createElement("div",null,r.a.createElement(V.a,{id:"simple-menu",anchorEl:e.anchorEl,open:Boolean(e.anchorEl),onClose:e.handleClose},r.a.createElement("div",{onClick:function(){e.handleStatusChange(t[e.status])},className:"links"},r.a.createElement(L.a,{onClick:e.handleClose},t[e.status]))))},se=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={anchorEl:null},n.handleClick=function(e){n.setState({anchorEl:e.currentTarget})},n.handleClose=function(){n.setState({anchorEl:null})},n.handleStatusChange=function(e){var t=e.toLowerCase();n.props.statusUpdate(t),n.props.changeStatus()},n}return Object(E.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props.status,t=this.props.classes,n=this.state.anchorEl,a=e[0],c=a.toUpperCase(),s=e.replace(a,c);return r.a.createElement("div",{className:t.root},r.a.createElement(w.a,{position:"static",className:t[e]},r.a.createElement(O.a,null,r.a.createElement(S.a,{variant:"h6",color:"inherit",className:t.grow},this.props.tank,": ",s),"fermenting"===e?r.a.createElement(j.a,{className:t.menuButton,"aria-owns":n?"simple-menu":void 0,"aria-haspopup":"true",onClick:this.handleClick},r.a.createElement(U.a,null)):null,r.a.createElement(ce,{anchorEl:this.state.anchorEl,handleClose:this.handleClose,status:e,handleStatusChange:this.handleStatusChange}))))}}]),t}(a.Component),oe=Object(y.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},fermenting:{backgroundColor:"#5d9732",boxShadow:"none"},conditioning:{backgroundColor:"#3490db",boxShadow:"none"},empty:{backgroundColor:"#5c4925",boxShadow:"none"}})(se);var le=Object(l.b)(function(e){return{tank:e.selectTank.tank,status:e.selectTank.status}},function(e){return{changeStatus:function(){return e({type:"CHANGE_STATUS"})}}})(oe),ue=n(20),ie=n.n(ue),me=n(34),he=n.n(me),pe=n(29),de=n.n(pe),fe=Object(y.withStyles)(function(e){return{formControl:{margin:e.spacing.unit},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,backgroundColor:"#d1d0bb"},input:{color:"#5c4925"},cssLabel:{"&$cssFocused":{color:"#5c4925",fontWeight:"bold",fontSize:15}},cssFocused:{},cssUnderline:{"&:after":{borderBottomColor:"#5c4925"}},cssOutlinedInput:{"&$cssFocused $notchedOutline":{borderColor:"#5c4925"}},notchedOutline:{}}})(function(e){var t=e.classes;return r.a.createElement("div",{className:"fermentationData"},r.a.createElement("p",null,"Temperature"),r.a.createElement("div",{className:"organizeFermentation"},r.a.createElement(ie.a,{value:e.tankTemp?e.tankTemp:e.select?e.tankTemp:e.temp[e.temp.length-1]?e.temp[e.temp.length-1].tankTemp:null,onChange:e.userInput,type:"number",name:"tankTemp",id:"tankTemp1",onFocus:e.changeSelect,onBlur:e.changeSelect,className:t.textField,variant:"outlined",label:"Temp",margin:"normal",InputLabelProps:{classes:{root:t.cssLabel,focused:t.cssFocused}},InputProps:{classes:{root:t.cssOutlinedInput,focused:t.cssFocused,notchedOutline:t.notchedOutline,input:t.input},endAdornment:r.a.createElement(he.a,{position:"end"},"F")}}),r.a.createElement(ie.a,{value:function(){var t=(new Date).getTime();if(1===e.temp.length){var n=e.temp[e.temp.length-1].date,a=t-Date.parse(n),r=new de.a.duration(a).asDays();return Math.round(100*r)/100}if(0===e.temp.length)return 0;for(var c=e.temp.length-1;c>-1;c--){var s=e.temp[c+1];if(void 0!==s&&s.tankTemp!==e.temp[c].tankTemp){var o=s.date,l=t-Date.parse(o),u=new de.a.duration(l).asDays();return Math.round(100*u)/100}}}(),type:"number",name:"Time",className:t.textField,label:"For",margin:"normal",InputLabelProps:{classes:{root:t.cssLabel,focused:t.cssFocused}},InputProps:{classes:{focused:t.cssLabel},endAdornment:r.a.createElement(he.a,{position:"end"},"Days"),readOnly:!0}})))}),be=Object(l.b)(function(e){return{temp:e.selectTank.tankTemp}})(fe),ge=n(122),ve=n.n(ge),Ee=n(59),ke=n(123),Be=n.n(ke),ye=Object(y.withStyles)(function(e){return{colorSwitchBase:{color:Ee.green[300],"&$colorChecked":{color:Ee.green[500],"& + $colorBar":{backgroundColor:Ee.green[500]}}},colorBar:{},colorChecked:{},root:{height:56,marginTop:16,marginBottom:8},formControl:{margin:e.spacing.unit},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,backgroundColor:"#d1d0bb"},input:{color:"#5c4925"},cssLabel:{"&$cssFocused":{color:"#5c4925",fontWeight:"bold",fontSize:15}},cssFocused:{},cssUnderline:{"&:after":{borderBottomColor:"#5c4925"}},cssOutlinedInput:{"&$cssFocused $notchedOutline":{borderColor:"#5c4925"}},notchedOutline:{}}})(function(e){var t=e.classes;return r.a.createElement("div",{className:"fermentationData"},r.a.createElement("p",null,"Fermentation Pressure"),r.a.createElement("div",{className:"organizeFermentation"},r.a.createElement(ve.a,{classes:{root:t.root},control:r.a.createElement(Be.a,{checked:e.spund,onChange:e.spundInput,value:e.spund,name:"spund",classes:{switchBase:t.colorSwitchBase,checked:t.colorChecked,bar:t.colorBar}}),label:"Spund"}),e.spund?r.a.createElement(ie.a,{value:e.spundPressure,onChange:e.userInput,type:"number",name:"spundPressure",className:t.textField,variant:"outlined",label:"Pressure",margin:"normal",InputLabelProps:{classes:{root:t.cssLabel,focused:t.cssFocused}},InputProps:{classes:{root:t.cssOutlinedInput,focused:t.cssFocused,notchedOutline:t.notchedOutline,input:t.input},endAdornment:r.a.createElement(he.a,{position:"end"},"PSI")}}):null))}),Te=Object(y.withStyles)(function(e){return{formControl:{margin:e.spacing.unit},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,backgroundColor:"#d1d0bb"},input:{color:"#5c4925"},cssLabel:{"&$cssFocused":{color:"#5c4925",fontWeight:"bold",fontSize:15}},cssFocused:{},cssUnderline:{"&:after":{borderBottomColor:"#5c4925"}},cssOutlinedInput:{"&$cssFocused $notchedOutline":{borderColor:"#5c4925"}},notchedOutline:{}}})(function(e){var t=e.classes,n=de.a.utc(e.yeastDumpA).format("YYYY-MM-DD"),a=de.a.utc(e.yeastDumpB).format("YYYY-MM-DD");return r.a.createElement("div",{className:"fermentationData"},r.a.createElement("p",null,"Yeast Removal"),r.a.createElement("div",{className:"organizeFermentation"},r.a.createElement(ie.a,{value:e.yeastDump1?e.yeastDump1:e.yeastDumpA?n:null,onChange:e.userInput,type:"date",name:"yeastDump1",className:t.textField,variant:"outlined",label:"Dump 1",margin:"normal",InputLabelProps:{shrink:!0},InputProps:{classes:{root:t.cssOutlinedInput,focused:t.cssFocused,notchedOutline:t.notchedOutline,input:t.input}}}),r.a.createElement(ie.a,{value:e.yeastDump2?e.yeastDump2:e.yeastDumpB?a:null,onChange:e.userInput,type:"date",name:"yeastDump2",className:t.textField,variant:"outlined",label:"Dump 2",margin:"normal",InputLabelProps:{shrink:!0},InputProps:{classes:{root:t.cssOutlinedInput,focused:t.cssFocused,notchedOutline:t.notchedOutline,input:t.input}}})))}),we=Object(l.b)(function(e){return{yeastDumpA:e.selectTank.yeastDump1,yeastDumpB:e.selectTank.yeastDump2}})(Te),Ce=Object(y.withStyles)(function(e){return{formControl:{margin:e.spacing.unit},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,backgroundColor:"#d1d0bb"},input:{color:"#5c4925"},cssLabel:{"&$cssFocused":{color:"#5c4925",fontWeight:"bold",fontSize:15}},cssFocused:{},cssUnderline:{"&:after":{borderBottomColor:"#5c4925"}},cssOutlinedInput:{"&$cssFocused $notchedOutline":{borderColor:"#5c4925"}},notchedOutline:{}}})(function(e){var t=e.classes,n=e.brix.reduce(function(e,t,n){return e+(t-e)/(n+1)},0);return r.a.createElement("div",{className:"fermentationData"},r.a.createElement("p",null,"Brix"),r.a.createElement("div",{className:"organizeFermentation"},r.a.createElement(ie.a,{value:e.fermentingBrix?e.fermentingBrix:e.selectBrix?e.fermentingBrix:e.fBrix[e.fBrix.length-1]?e.fBrix[e.fBrix.length-1].fermentingBrix:e.brix.length>0?n:0,onChange:e.userInput,onFocus:e.changeBrix,onBlur:e.changeBrix,type:"number",name:"fermentingBrix",className:t.textField,variant:"outlined",label:"Brix",margin:"normal",InputLabelProps:{classes:{root:t.cssLabel,focused:t.cssFocused}},InputProps:{classes:{root:t.cssOutlinedInput,focused:t.cssFocused,notchedOutline:t.notchedOutline,input:t.input}}}),r.a.createElement(ie.a,{value:function(){var t=(new Date).getTime();if(1===e.fBrix.length){var n=e.fBrix[e.fBrix.length-1].date,a=t-Date.parse(n),r=new de.a.duration(a).asDays();return Math.round(100*r)/100}if(0===e.fBrix.length)return 0;for(var c=e.fBrix.length-1;c>-1;c--){var s=e.fBrix[c+1];if(void 0!==s&&s.fBrix!==e.fBrix[c].fermentingBrix){var o=s.date,l=t-Date.parse(o),u=new de.a.duration(l).asDays();return Math.round(100*u)/100}}}(),type:"number",name:"Time",className:t.textField,label:"For",margin:"normal",InputLabelProps:{classes:{root:t.cssLabel,focused:t.cssFocused}},InputProps:{classes:{focused:t.cssLabel},endAdornment:r.a.createElement(he.a,{position:"end"},"Days"),readOnly:!0}})))}),Oe=Object(l.b)(function(e){return{brix:e.selectTank.brix,fBrix:e.selectTank.fermentingBrix}})(Ce),xe=function(e){return r.a.createElement("div",{className:"fermentationData",id:"fermentationSave"},r.a.createElement("button",{className:"allButtons",id:"saveButton",onClick:e.sendUpdate},"Save Updates"))},Se=function(){return r.a.createElement("div",{className:"fermentationData",id:"fermentationSave"},r.a.createElement("button",{className:"allButtons",id:"saveButton"},"Currently Being Built"))};var Ne=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={status:"",tankTemp:"",fermentingBrix:"",spund:!1,spundPressure:"",yeastDump1:"",yeastDump2:"",select:!1,selectBrix:!1},n.userInput=function(e){var t=e.target.name;n.setState(Object(te.a)({},t,e.target.value))},n.spundInput=function(){n.setState({spund:!n.state.spund})},n.statusUpdate=function(e){n.setState({status:e})},n.changeSelect=function(){n.setState({select:!n.state.select})},n.changeBrix=function(){n.setState({selectBrix:!n.state.selectBrix})},n.renderRedirect=function(){n.props.history.push("/")},n.sendUpdate=function(){for(var e,t,a,r={},c=Object.entries(n.state),s=0;s<c.length;s++){var o,l=c[s],u=Object(ee.a)(l,2),i=u[0],m=u[1];if(!m||"tankTemp"!==i&&"fermentingBrix"!==i)m&&(r[i]=m);else r[i]=(o={},Object(te.a)(o,i,m),Object(te.a)(o,"date",new Date),o)}(e=r,t=n.props.tank,a=n.props.number,fetch("/fermenters/".concat(t,"/brew/").concat(a),{body:JSON.stringify(e),headers:{"content-type":"application/json"},method:"PUT"})).then(function(){n.renderRedirect()}).catch(function(e){console.error("Request failed",e)})},n.componentDidMount=function(){if(n.props.tank)n.setState({spund:n.props.close,spundPressure:n.props.pressure});else{var e=n.props.match.params;n.props.setTank(e.tank).then(function(){n.setState({spund:n.props.close,spundPressure:n.props.pressure})}).catch(function(e){console.error("Request failed",e)})}},n}return Object(E.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("main",null,this.props.tank?r.a.createElement("div",null,r.a.createElement(q,null),r.a.createElement("div",{id:"fermentationBox"},r.a.createElement(re,null),r.a.createElement("section",{id:"fermentationForm"},r.a.createElement("div",null,r.a.createElement(le,{statusUpdate:this.statusUpdate}),"fermenting"===this.props.status||"conditioning"===this.props.status?r.a.createElement("div",null,r.a.createElement(be,{userInput:this.userInput,tankTemp:this.state.tankTemp,changeSelect:this.changeSelect,select:this.state.select}),"fermenting"===this.props.status?r.a.createElement(Oe,{userInput:this.userInput,fermentingBrix:this.state.fermentingBrix,changeBrix:this.changeBrix,selectBrix:this.state.selectBrix}):r.a.createElement(we,{userInput:this.userInput,yeastDump2:this.state.yeastDump2,yeastDump1:this.state.yeastDump1}),r.a.createElement(ye,{spundInput:this.spundInput,spund:this.state.spund,spundPressure:this.state.spundPressure,userInput:this.userInput}),r.a.createElement(xe,{sendUpdate:this.sendUpdate})):r.a.createElement("div",null,r.a.createElement(Se,null)))))):r.a.createElement(q,null))}}]),t}(a.Component);function je(e){return function(t){return function(e){return fetch("/fermenters/".concat(e),{headers:{"content-type":"application/json"},method:"GET"})}(e).then(function(e){return e.json()}).then(function(e){t({type:"SET_TANK",value:e[0]})})}}var Ie=Object(l.b)(function(e){return{status:e.selectTank.status,temp:e.selectTank.tankTemp,number:e.selectTank.number,tank:e.selectTank.tank,close:e.selectTank.spund,pressure:e.selectTank.spundPressure}},function(e){return{setTank:function(t){return e(je(t))}}})(Ne),De=Object(y.withStyles)(function(e){return{formControl:{margin:e.spacing.unit},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:200,backgroundColor:"#d1d0bb"},input:{color:"#5c4925",fontSize:15},cssLabel:{"&$cssFocused":{color:"#5c4925",fontWeight:"bold",fontSize:15}},cssFocused:{},cssUnderline:{"&:after":{borderBottomColor:"#5c4925"}},cssOutlinedInput:{"&$cssFocused $notchedOutline":{borderColor:"#5c4925"}},notchedOutline:{}}})(function(e){var t=e.classes,n=e.brewBatch.prevNum,a=e.brewBatch.number,c=e.brewBatch.batch.enter,s=["Brew Number","Brew Letter","Style","Tank"];return[{name:"number",value:a,onChange:e.handleBrewNumber,options:n&&"D"!==e.brewBatch.batch.prevId?[n,n+1]:n&&"D"===e.brewBatch.batch.prevId?[n+1]:!n&&a?[a]:[1]},{name:"id",value:e.brewBatch.batch.id,onChange:e.handleBatch,options:function(){if(n===a){for(var t=[],r=e.brewBatch.batch.prevId.charCodeAt(0)+1;r<69;r++)t.push(r);return t.map(function(e){return String.fromCharCode(e)})}return n===a||c?c?[e.brewBatch.batch.id]:[a]:["A"]}()},{name:"style",value:e.brewBatch.style,onChange:e.handleBrewNumber,options:function(){var t=["Goat","BucketHead","Dillo","Pailhead","Specialty"],r=[e.brewBatch.style];return n===a?t=[e.brewBatch.prevStyle]:n!==a&&""===n?r:t}()},{name:"tank",value:e.brewBatch.tank,onChange:e.handleBrewNumber,options:function(){var t=e.brewBatch.openTanks,r=[e.brewBatch.tank],c=["C2","C3","C4","C5","C6","C7"];return n===a?c=[e.brewBatch.prevTank]:n!==a&&""!==n&&""!==e.brewBatch.tank?t:n!==a&&""!==n?t:n!==a&&""===n?r:c}()}].map(function(e,n){return r.a.createElement(ie.a,{select:!0,value:e.value,onChange:e.onChange,name:e.name,key:n,className:t.textField,variant:"outlined",label:s[n],margin:"normal",InputLabelProps:{classes:{root:t.cssLabel,focused:t.cssFocused}},InputProps:{classes:{root:t.cssOutlinedInput,focused:t.cssFocused,notchedOutline:t.notchedOutline,input:t.input},readOnly:c}},e.options?e.options.map(function(e,t){return r.a.createElement(L.a,{key:t,value:e},e)}):null)})}),Fe=function(e){return r.a.createElement("section",{className:"userInputs"},r.a.createElement("h2",null,"Brew Information"),r.a.createElement("form",{className:"batchValue"},r.a.createElement(De,e)),r.a.createElement("div",{id:"batchEnter"},e.brewBatch.batch.enter?r.a.createElement("button",{onClick:e.handleDelete,className:"allButtons"},"Delete Batch"):r.a.createElement("button",{onClick:e.handleEnter,className:"allButtons"},"Enter Batch")))},Ve=Object(y.withStyles)(function(e){return{formControl:{margin:e.spacing.unit},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,backgroundColor:"#d1d0bb"},input:{color:"#5c4925"},cssLabel:{"&$cssFocused":{color:"#5c4925",fontWeight:"bold",fontSize:15}},cssFocused:{},cssUnderline:{"&:after":{borderBottomColor:"#5c4925"}},cssOutlinedInput:{"&$cssFocused $notchedOutline":{borderColor:"#5c4925"}},notchedOutline:{}}})(function(e){var t=e.classes,n=["Strike Volume","Mash Temp","Sparge Volume","Kettle Brix","Kettle Volume","Whirlpool Volume","Flow Meter Volume","Run Off Temperature","Fermenter Temperature","Notes"];return[{type:"number",name:"strikeVolume",value:e.brewBatch.batch.strikeVolume,onChange:e.handleBatch},{type:"number",name:"mashTemp",value:e.brewBatch.batch.mashTemp,onChange:e.handleBatch},{type:"number",name:"spargeVolume",value:e.brewBatch.batch.spargeVolume,onChange:e.handleBatch},{type:"number",name:"startingBrix",value:e.brewBatch.batch.startingBrix,onChange:e.handleBatch},{type:"number",name:"kettleVolume",value:e.brewBatch.batch.kettleVolume,onChange:e.handleBatch},{type:"number",name:"whirlPoolVolume",value:e.brewBatch.batch.whirlPoolVolume,onChange:e.handleBatch},{type:"number",name:"fmVolume",value:e.brewBatch.batch.fmVolume,onChange:e.handleBatch,required:!0},{type:"number",name:"runOffTemp",value:e.brewBatch.batch.runOffTemp,onChange:e.handleBatch,required:!0},{type:"number",name:"tankTemp",value:e.brewBatch.batch.tankTemp,onChange:e.handleBatch,required:!0},{type:"text",name:"notes",value:e.brewBatch.batch.notes,onChange:e.handleBatch}].map(function(e,a){return r.a.createElement(ie.a,{value:e.value,onChange:e.onChange,type:e.type,name:e.name,key:a,className:t.textField,variant:"outlined",label:n[a],margin:"normal",required:e.required,InputLabelProps:{classes:{root:t.cssLabel,focused:t.cssFocused}},InputProps:{classes:{root:t.cssOutlinedInput,focused:t.cssFocused,notchedOutline:t.notchedOutline,input:t.input}}})})}),Pe=function(e){return r.a.createElement("section",{className:"userInputs"},r.a.createElement("h2",null,"Brew Data"),r.a.createElement("form",{className:"batchValue"},r.a.createElement(Ve,e)))},Le=function(e){return r.a.createElement("button",{className:"allButtons",onClick:e.handleTransfer},"Runoff To ",e.brewBatch.tank)},Ae=function(e){return r.a.createElement("main",{id:"brewMain"},r.a.createElement(q,null),r.a.createElement("section",{id:"startBatch"},r.a.createElement(Fe,e),e.brewBatch.batch.enter?r.a.createElement("section",null,r.a.createElement(Pe,e),r.a.createElement(Le,e)):null))};function Me(e){return fetch("/brews/".concat(e.number,"/batches/").concat(e.batch.id),{body:JSON.stringify(e),headers:{"content-type":"application/json"},method:"PATCH"})}function Re(){return fetch("/brews/lastsubmittal",{headers:{"content-type":"application/json"},method:"GET"}).then(function(e){return e.json()})}var Ue=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={number:"",prevNum:"",style:"",prevStyle:"",tank:"",prevTank:"",status:"",opentTanks:"",batch:{id:"",prevId:"",strikeVolume:"",mashTemp:"",spargeVolume:"",startingBrix:"",kettleVolume:"",whirlPoolVolume:"",fmVolume:"",tankTemp:"",runOffTemp:"",notes:"",enter:!1,submit:!1}},n.runInterval=0,n.handleBrewNumber=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(te.a)({},t,a))},n.handleBatch=function(e){var t=Object(i.a)({},n.state).batch;t[e.target.name]=e.target.value,n.setState({batch:t})},n.updateMetricData=function(){Me({number:n.state.number,batch:n.state.batch}).catch(function(e){console.error("Request failed",e)})},n.handleEnter=function(e){e.preventDefault(),n.setState({batch:Object(i.a)({},n.state.batch,{enter:!n.state.enter})},function(){var e,t=n.state;n.state.prevNum===n.state.number?(e=t,fetch("/brews/".concat(e.number,"/batches/").concat(e.batch.id),{body:JSON.stringify(e),headers:{"content-type":"application/json"},method:"PUT"}).catch(function(e){console.error("Request failed",e)})):function(e){fetch("/brews/".concat(e.number,"/batches/").concat(e.batch.id),{body:JSON.stringify(e),headers:{"content-type":"application/json"},method:"POST"}).catch(function(e){console.error("Request failed",e)})}(t),n.runInterval=setInterval(function(){return n.updateMetricData()},3e4)})},n.handleDelete=function(){var e=n.state.number,t=n.state.batch.id;"A"===t?(clearInterval(n.runInterval),function(e){fetch("/brews/".concat(e),{headers:{"content-type":"application/json"},method:"DELETE"}).catch(function(e){console.error("Request failed",e)})}(e),n.setState({batch:Object(i.a)({},n.state.batch,{strikeVolume:"",mashTemp:"",spargeVolume:"",startingBrix:"",kettleVolume:"",whirlPoolVolume:"",fmVolume:"",tankTemp:"",runOffTemp:"",notes:"",enter:!n.state.batch.enter})})):(clearInterval(n.runInterval),function(e,t){fetch("/brews/".concat(e,"/batches/").concat(t),{headers:{"content-type":"application/json"},method:"DELETE"}).catch(function(e){console.error("Request failed",e)})}(e,t),n.setState({number:"",style:"",tank:"",batch:Object(i.a)({},n.state.batch,{strikeVolume:"",mashTemp:"",spargeVolume:"",startingBrix:"",kettleVolume:"",whirlPoolVolume:"",fmVolume:"",tankTemp:"",runOffTemp:"",notes:"",id:"",enter:!n.state.batch.enter})}))},n.handleTransfer=function(){n.setState({status:"fermenting",batch:Object(i.a)({},n.state.batch,{submit:!n.state.submit})},function(){var e=n.state.number,t=n.state.tank,a=n.state.style,r=n.state.batch.submit,c=n.state.batch,s={number:e,batch:c},o={number:e,tank:t,style:a,batch:c.fmVolume,brix:n.state.batch.startingBrix,runOff:r,tankTemp:n.state.batch.tankTemp,status:n.state.status};Me(s).then(function(){(function(e,t,n){return fetch("/fermenters/".concat(t.tank,"/brew/").concat(e,"/batch/").concat(n),{body:JSON.stringify(t),headers:{"content-type":"application/json"},method:"PUT"})})(e,o,c.id).then(function(){n.renderRedirect()})}).catch(function(e){console.error("Request failed",e)})})},n.componentWillUnmount=function(){clearInterval(n.runInterval)},n.renderRedirect=function(){n.props.history.push("/")},n.changeNull=function(e){var t=e.batch[e.batch.length-1];for(var n in t){"object"===typeof t[n]&&(t[n]="")}return e},n.updateStateBatchBrewing=function(e){var t=e.batch[e.batch.length-1];n.setState({number:e.number,style:e.style,tank:e.tank,status:e.status,batch:{id:t.id,strikeVolume:t.strikeVolume,mashTemp:t.mashTemp,spargeVolume:t.spargeVolume,startingBrix:t.startingBrix,kettleVolume:t.kettleVolume,whirlPoolVolume:t.whirlPoolVolume,fmVolume:t.fmVolume,tankTemp:t.tankTemp,runOffTemp:t.runOffTemp,notes:t.notes,enter:t.enter,submit:t.submit}})},n.updateStateLastCompletedBrew=function(e){for(var t=e.batch,a=t.length-1;a>=0;a--)if(!0===t[a].submit)return n.setState({prevNum:e.number,prevStyle:e.style,prevTank:e.tank,batch:Object(i.a)({},n.state.batch,{prevId:t[a].id})})},n.inputBatchSequence=function(){fetch("/brews",{headers:{"content-type":"application/json"},method:"GET"}).then(function(e){return e.json()}).then(function(e){var t=e[0];void 0!==t?(n.changeNull(t),n.updateStateBatchBrewing(t),Re().then(function(e){n.updateStateLastCompletedBrew(e)}).then(function(){n.runInterval=setInterval(function(){return n.updateMetricData()},3e4)}).catch(function(e){console.error("Request failed",e)})):Re().then(function(e){n.updateStateLastCompletedBrew(e)}).catch(function(e){console.error("Request failed",e)})}).catch(function(e){console.error("Request failed",e)}),_().then(function(e){return e.json()}).then(function(e){var t=e.reduce(function(e,t){return t.runOff||e.push(t.tank),e},[]);n.setState({openTanks:t})}).catch(function(e){console.error("Request failed",e)})},n.componentDidMount=function(){n.inputBatchSequence()},n}return Object(E.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Ae,{brewBatch:this.state,handleBrewNumber:this.handleBrewNumber,handleBatch:this.handleBatch,handleEnter:this.handleEnter,handleTransfer:this.handleTransfer,handleDelete:this.handleDelete}))}}]),t}(a.Component),$e=function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k.a,null,r.a.createElement(B.a,{path:"/",exact:!0,render:function(e){return r.a.createElement(Z,e)}}),r.a.createElement(B.a,{path:"/Brew",render:function(e){return r.a.createElement(Ue,e)}}),r.a.createElement(B.a,{path:"/ProductionTank/:tank",render:function(e){return r.a.createElement(Ie,e)}})))}}]),t}(a.Component);s.a.render(r.a.createElement(l.a,{store:d},r.a.createElement(o.a,null,r.a.createElement($e,null))),document.getElementById("root"))}},[[125,1,2]]]);
//# sourceMappingURL=main.3d130345.chunk.js.map