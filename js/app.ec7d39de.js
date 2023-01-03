(function(){"use strict";var e={8601:function(e,n,t){var o=t(9242),s=t(3396),i=t(7139);function a(e,n,t,o,a,r){const u=(0,s.up)("Layout"),l=(0,s.up)("Footer");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("h1",null,(0,i.zw)(a.title),1),(0,s.Wm)(u),(0,s.Wm)(l,{time:a.timeStamp},null,8,["time"])],64)}const r={class:"container"},u={class:"left-amount"},l={key:0},c={key:1},d=["disabled"],h=["disabled"],m={key:4,class:"donate-btn",disabled:""},p={key:5,class:"donate-btn",disabled:""},f={class:"right-amount"},b={key:0};function y(e,n,t,a,y,w){const g=(0,s.up)("Modal");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",r,[(0,s._)("div",u,[(0,s._)("div",{class:"amount",onClick:n[0]||(n[0]=e=>w.setAmount(500))}," 500 "+(0,i.zw)(y.currency),1),(0,s._)("div",{class:"amount",onClick:n[1]||(n[1]=e=>w.setAmount(1e3))}," 1,000 "+(0,i.zw)(y.currency),1),(0,s._)("div",{class:"amount",onClick:n[2]||(n[2]=e=>w.setAmount(2e3))}," 2,000 "+(0,i.zw)(y.currency),1),(0,s._)("div",{class:"amount",onClick:n[3]||(n[3]=e=>w.setAmount(3e3))}," 3,000 "+(0,i.zw)(y.currency),1)]),(0,s._)("form",{class:"donate-form",onSubmit:n[8]||(n[8]=(0,o.iM)(((...e)=>w.handleSubmit&&w.handleSubmit(...e)),["prevent"]))},[(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{type:"text",name:"amount",id:"amount",placeholder:"Enter Amount","onUpdate:modelValue":n[4]||(n[4]=e=>y.amount=e)},null,512),[[o.nr,y.amount]])]),y.showPhoneField?((0,s.wg)(),(0,s.iD)("div",l,[(0,s.wy)((0,s._)("input",{type:"text",name:"phone",id:"phone",placeholder:"(+250) Phone Number","onUpdate:modelValue":n[5]||(n[5]=e=>y.phonenumber=e)},null,512),[[o.nr,y.phonenumber]])])):(0,s.kq)("",!0),(0,s.wy)((0,s._)("div",{class:"error"},(0,i.zw)(y.phoneError),513),[[o.F8,y.phoneError&&y.showPhoneField]]),y.showBankField?((0,s.wg)(),(0,s.iD)("div",c,[(0,s.wy)((0,s._)("input",{type:"text",name:"",id:"",placeholder:"Bank Acc Number","onUpdate:modelValue":n[6]||(n[6]=e=>y.accountNumber=e)},null,512),[[o.nr,y.accountNumber]])])):(0,s.kq)("",!0),y.showBankField||y.showPhoneField?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("button",{key:2,class:"donate-btn",type:"button",onClick:n[7]||(n[7]=(...e)=>w.toggleModal&&w.toggleModal(...e)),disabled:y.isDisabled},"Donate",8,d)),y.showPhoneField&&!y.isProcessing?((0,s.wg)(),(0,s.iD)("button",{key:3,class:"donate-btn",disabled:y.isDisabled},"OK",8,h)):(0,s.kq)("",!0),y.isProcessing?((0,s.wg)(),(0,s.iD)("button",m,"Processing...")):(0,s.kq)("",!0),y.showBankField?((0,s.wg)(),(0,s.iD)("button",p,"OK")):(0,s.kq)("",!0)],32),(0,s._)("div",f,[(0,s._)("div",{class:"amount",onClick:n[9]||(n[9]=e=>w.setAmount(5e3))}," 5000 "+(0,i.zw)(y.currency),1),(0,s._)("div",{class:"amount",onClick:n[10]||(n[10]=e=>w.setAmount(1e4))}," 10,000 "+(0,i.zw)(y.currency),1),(0,s._)("div",{class:"amount",onClick:n[11]||(n[11]=e=>w.setAmount(2e4))}," 20,000 "+(0,i.zw)(y.currency),1),(0,s._)("div",{class:"amount",onClick:n[12]||(n[12]=e=>w.setAmount(1e5))}," 100, 000 "+(0,i.zw)(y.currency),1)])]),y.showModal?((0,s.wg)(),(0,s.iD)("div",b,[(0,s.Wm)(g,{onClose:w.toggleModal},null,8,["onClose"])])):(0,s.kq)("",!0)],64)}const w={class:"modal"},g=["onClick"];function v(e,n,t,a,r,u){return(0,s.wg)(),(0,s.iD)("div",{class:"backdrop",onClick:n[0]||(n[0]=(0,o.iM)(((...e)=>u.closeModal&&u.closeModal(...e)),["self"]))},[(0,s._)("div",w,[(0,s.Uk)(" Choose Donate Type "),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.donateType,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e},[(0,s._)("div",{class:"donate-type",onClick:n=>u.selectType(e)},(0,i.zw)(e),9,g)])))),128))])])}var k={data(){return{donateType:["MoMo","Bank"],selectedType:null}},methods:{closeModal(){this.$emit("close")},selectType(e){this.selectedType=e,this.$emit("close",this.selectedType)}}},D=t(89);const C=(0,D.Z)(k,[["render",v]]);var _=C,F=t(4311),P=t(3029),M={components:{Modal:_},data(){return{currency:"RWF",amount:null,showModal:!1,isDisabled:!0,showPhoneField:!1,showBankField:!1,phonenumber:"",accountNumber:"",phoneError:"",isProcessing:!1}},methods:{setAmount(e){this.amount=e,this.isDisabled=!1},toggleModal(e){this.showModal=!this.showModal,"MoMo"===e?this.showPhoneField=!0:"Bank"===e&&(this.showBankField=!0)},handleSubmit(){this.isProcessing=!0;const e=this.phonenumber.replace(/[^0-9]/g,"");e?e.length<10?(this.phoneError="phone number must be atleast 10 chars long!",this.isProcessing=!1):(console.log("phone numebr",e),console.log("amount",this.amount),(0,F.Z)({method:"post",url:"https://opay-api.oltranz.com/opay/paymentrequest",data:{telephoneNumber:`${e}`,amount:this.amount,organizationId:"85f51432-e304-408b-a6f4-f72f5b20360d",description:"BUY ME A COFFEE",callbackUrl:"https://webhook.site/b8fbe777-12d1-433a-8372-42afbec724bd",transactionId:`${(0,P.Z)()}`}}).then((e=>{console.log(e),"PENDING"===e.data.status?(alert("Check your phone and approve transfer, *182*7*1#"),this.isProcessing=!1):"DUPLICATED_TRANSACTION_ID"===e.data.status?(this.isProcessing=!1,alert("issues on transaction Id generation\n FAILED"),this.phonenumber="",this.amount=null):"ACCOUNT_NOT_FOUND"===e.data.status?(this.isProcessing=!1,alert("Receiver has some issues!\n ACCOUNT NOT FOUND"),this.phonenumber="",this.amount=null):"FAILED"===e.data.status?(this.isProcessing=!1,alert("You have insufficient funds on your account!")):(alert("Thank you for buying me a coffee\n SUCCESSFULLY RECEIVED."),this.phonenumber="",this.amount=null)})).catch((e=>{console.log(e),this.isProcessing=!1}))):(this.phoneError="phone number is required!",this.isProcessing=!1)}},updated(){this.amount>0?this.isDisabled=!1:this.amount||(this.isDisabled=!0)}};const A=(0,D.Z)(M,[["render",y]]);var O=A;function E(e,n,t,o,a,r){return(0,s.wg)(),(0,s.iD)("p",null,"Buy me a Coffee @N.A - "+(0,i.zw)(t.time),1)}var T={props:["time"]};const N=(0,D.Z)(T,[["render",E]]);var z=N,U={name:"App",components:{Layout:O,Footer:z},data(){return{title:"Buy Me a Coffee",timeStamp:(new Date).getFullYear()}}};const B=(0,D.Z)(U,[["render",a]]);var I=B;(0,o.ri)(I).mount("#app")}},n={};function t(o){var s=n[o];if(void 0!==s)return s.exports;var i=n[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,s,i){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],s=e[c][1],i=e[c][2];for(var r=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[u])}))?o.splice(u--,1):(r=!1,i<a&&(a=i));if(r){e.splice(c--,1);var l=s();void 0!==l&&(n=l)}}return n}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,s,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var s,i,a=o[0],r=o[1],u=o[2],l=0;if(a.some((function(n){return 0!==e[n]}))){for(s in r)t.o(r,s)&&(t.m[s]=r[s]);if(u)var c=u(t)}for(n&&n(o);l<a.length;l++)i=a[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(c)},o=self["webpackChunkbuymeacoffee"]=self["webpackChunkbuymeacoffee"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(8601)}));o=t.O(o)})();
//# sourceMappingURL=app.ec7d39de.js.map