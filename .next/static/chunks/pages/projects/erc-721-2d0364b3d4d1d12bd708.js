(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[396],{6291:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(5893),s=(t(7294),t(4051)),o=t(1555);function i(e){var n=e.tokenName,t=e.tokenSymbol;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(s.Z,{children:(0,r.jsx)(o.Z,{children:(0,r.jsxs)("h1",{children:[n," - ",t]})})})})}},7645:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var r=t(809),s=t.n(r),o=t(5893),i=t(5311),a=t(9227),c=(t(7294),t(1881)),l=t(7833),d=t(5005),u=t(2358),p=t(1163);function h(e){var n=e.show,t=e.onHide,r=e.contract,h=e.senderAddress,m=e.type,x=e.EventID,f=e.SelectedTitle,g=e.enddate,y=(0,p.useRouter)();console.log(r);var Z=(0,u.Z)({type:"text",placeholder:"Enter name"}),j=(0,a.Z)(Z,2),b=j[0],v=j[1],N=(0,u.Z)({as:"textarea",placeholder:"Enter description"}),w=(0,a.Z)(N,2),k=w[0],E=w[1],C=(0,u.Z)({type:"text",placeholder:"Enter image url"}),T=(0,a.Z)(C,2),F=T[0],I=T[1],R=(0,u.Z)({defaultValue:"",type:"file",placeholder:"NFT Logo",id:"logo"}),S=(0,a.Z)(R,2),L=(S[0],S[1],(0,u.Z)({type:"text",placeholder:"Enter Price"})),$=(0,a.Z)(L,2),D=$[0],_=$[1],H=(0,u.Z)({type:"text",placeholder:"Enter NFT address"}),O=(0,a.Z)(H,2),G=O[0],P=O[1],A=(0,u.Z)({type:"text",placeholder:"Enter Cryptopunk address"}),B=(0,a.Z)(A,2),U=B[0],M=B[1];function z(){return(z=(0,i.Z)(s().mark((function e(){var n,t,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=G,"Cryptopunk"==m&&(n=U),t={title:"Asset Metadata",type:"object",properties:{name:{type:"string",description:b},description:{type:"string",description:k},image:{type:"string",description:F},price:{type:"string",description:D},typeimg:{type:"string",description:m},nftaddress:{type:"string",description:n},higherbidadd:{type:"string",description:""},date:{type:"string",description:g}},bids:[]},console.log(t),e.next=7,r.claimToken(h,JSON.stringify(t),x);case 7:o=e.sent,y.push("/donation/auction/".concat(x)),console.log(o),window.document.getElementsByClassName("btn-close")[0].click();case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,o.jsxs)(c.Z,{show:n,onHide:t,"aria-labelledby":"contained-modal-title-vcenter",size:"lg",centered:!0,children:[(0,o.jsx)(c.Z.Header,{closeButton:!0,children:(0,o.jsxs)(c.Z.Title,{id:"contained-modal-title-vcenter",children:["Donate ",m," - ",f]})}),(0,o.jsx)(c.Z.Body,{className:"show-grid",children:(0,o.jsxs)(l.Z,{children:[(0,o.jsxs)(l.Z.Group,{className:"mb-3",controlId:"formGroupName",children:[(0,o.jsx)(l.Z.Label,{children:"Name"}),v]}),(0,o.jsxs)(l.Z.Group,{className:"mb-3",controlId:"formGroupDescription",children:[(0,o.jsx)(l.Z.Label,{children:"Description"}),E]}),(0,o.jsxs)(l.Z.Group,{className:"mb-3",controlId:"formGroupName",children:[(0,o.jsx)(l.Z.Label,{children:"Opening price in ETH"}),_]}),(0,o.jsxs)(l.Z.Group,{className:"mb-3",controlId:"formGroupImageUrl",children:[(0,o.jsx)(l.Z.Label,{children:"Enter image URL"}),I]}),"Cryptopunk"==m?(0,o.jsxs)(l.Z.Group,{className:"mb-3",controlId:"formGroupImageUrl",children:[(0,o.jsx)(l.Z.Label,{children:"Cryptopunk address"}),M]}):(0,o.jsxs)(l.Z.Group,{className:"mb-3",controlId:"formGroupImageUrl",children:[(0,o.jsx)(l.Z.Label,{children:"NFT address"}),P]}),(0,o.jsx)("div",{className:"d-grid",children:(0,o.jsxs)(d.Z,{variant:"primary",onClick:function(){return z.apply(this,arguments)},children:["Donate ",m]})})]})})]})}},419:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var r=t(809),s=t.n(r),o=t(5893),i=t(5311),a=t(7294),c=t(1664),l=t(9008),d=t(4051),u=t(1555),p=t(5005),h=t(6291),m=t(7645),x=t(1926);function f(e){var n=(0,x.Z)("ERC721"),t=n.contract,r=n.signerAddress,f=(0,a.useState)([]),g=f[0],y=f[1],Z=(0,a.useState)(""),j=Z[0],b=Z[1],v=(0,a.useState)(""),N=(v[0],v[1]),w=(0,a.useState)(!1),k=w[0],E=w[1];function C(){return T.apply(this,arguments)}function T(){return(T=(0,i.Z)(s().mark((function e(){var n,r,o,i,a,c,l;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=41;break}return e.t0=b,e.next=5,t.name();case 5:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=N,e.next=10,t.symbol();case 10:return e.t3=e.sent,(0,e.t2)(e.t3),e.next=14,t.totalSupply();case 14:n=e.sent,r=[],o=0;case 17:if(!(o<n)){e.next=39;break}return e.next=20,t.tokenURI(o);case 20:return i=e.sent,e.next=23,t.ownerOf(o);case 23:if(a=e.sent,!i){e.next=36;break}c=JSON.parse(i),l="0";try{l=c.properties.price.description}catch(s){}if(e.prev=28,"NFT"==c.properties.typeimg.description){e.next=31;break}return e.abrupt("continue",36);case 31:e.next=35;break;case 33:e.prev=33,e.t4=e.catch(28);case 35:r.push({tokenId:o,name:c.properties.name.description,price:l,img:c.properties.image.description,title:"NFT #"+parseInt(o).toString()+" For Sale: "+l+" ETH",owner:a});case 36:o++,e.next=17;break;case 39:y(r),document.getElementById("Loading").style="display:none";case 41:e.next=46;break;case 43:e.prev=43,e.t5=e.catch(0),console.error(e.t5);case 46:case"end":return e.stop()}}),e,null,[[0,43],[28,33]])})))).apply(this,arguments)}return(0,a.useEffect)((function(){return C(),window.ethereum.on("accountsChanged",C),window.ethereum.on("chainChanged",C),function(){window.ethereum.removeListener("accountsChanged",C),window.ethereum.removeListener("chainChanged",C)}}),[t]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(l.default,{children:[(0,o.jsx)("title",{children:"NFT ERC-721"}),(0,o.jsx)("meta",{name:"description",content:"ERC721"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,o.jsx)(h.Z,{tokenName:j,tokenSymbol:"NFT"}),(0,o.jsx)(d.Z,{children:(0,o.jsx)(u.Z,{children:e&&(0,o.jsx)(p.Z,{className:"float-end",onClick:function(){E(!0)},children:"Create NFT"})})}),(0,o.jsx)(d.Z,{children:(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("div",{id:"Loading",children:(0,o.jsx)("h1",{children:"Loading..."})}),(0,o.jsx)("div",{style:{background:"white",marginTop:"10px",height:"1.2px"}}),(0,o.jsx)("div",{style:{display:"flex",gap:"41px",flexWrap:"wrap",marginTop:"10px"},children:g.map((function(e){return(0,o.jsxs)("div",{style:{display:"grid"},children:[(0,o.jsx)(c.default,{href:"/projects/erc-721/view/".concat(e.tokenId),children:(0,o.jsx)("a",{title:e.title,children:(0,o.jsx)("img",{style:{width:"145px",height:"145px"},src:e.img})})}),(0,o.jsxs)("a",{style:{color:"yellow"},children:["#",e.tokenId]}),(0,o.jsxs)("a",{style:{color:"white"},children:[e.price," ETH"]}),(0,o.jsx)("a",{style:{color:"grey"},children:e.name})]},e.id)}))})]})}),(0,o.jsx)(m.Z,{show:k,onHide:function(){E(!1),C()},contract:t,senderAddress:r})]})})}},8287:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/erc-721",function(){return t(419)}])},1881:function(e,n,t){"use strict";t.d(n,{Z:function(){return H}});var r,s=t(4036),o=t.n(s),i=t(9351),a=t(3004),c=t(7216),l=t(99);function d(e){if((!r&&0!==r||e)&&a.Z){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),r=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return r}var u=t(2092),p=t(8146),h=t(5654),m=t(5088),x=t(6914),f=t(7294),g=t(8380),y=t(1645),Z=t(1068),j=t(4680),b=(0,j.Z)("modal-body"),v=t(6467),N=t(600),w=t(5893);const k=f.forwardRef((({bsPrefix:e,className:n,contentClassName:t,centered:r,size:s,fullscreen:i,children:a,scrollable:c,...l},d)=>{const u=`${e=(0,N.vE)(e,"modal")}-dialog`,p="string"===typeof i?`${e}-fullscreen-${i}`:`${e}-fullscreen`;return(0,w.jsx)("div",{...l,ref:d,className:o()(u,n,s&&`${e}-${s}`,r&&`${u}-centered`,c&&`${u}-scrollable`,i&&p),children:(0,w.jsx)("div",{className:o()(`${e}-content`,t),children:a})})}));k.displayName="ModalDialog";var E=k,C=(0,j.Z)("modal-footer"),T=t(2655);const F=f.forwardRef((({bsPrefix:e,className:n,...t},r)=>(e=(0,N.vE)(e,"modal-header"),(0,w.jsx)(T.Z,{ref:r,...t,className:o()(n,e)}))));F.displayName="ModalHeader",F.defaultProps={closeLabel:"Close",closeButton:!1};var I=F;const R=(0,t(9602).Z)("h4");var S=(0,j.Z)("modal-title",{Component:R});const L={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:E};function $(e){return(0,w.jsx)(Z.Z,{...e,timeout:null})}function D(e){return(0,w.jsx)(Z.Z,{...e,timeout:null})}const _=f.forwardRef((({bsPrefix:e,className:n,style:t,dialogClassName:r,contentClassName:s,children:Z,dialogAs:j,"aria-labelledby":b,show:k,animation:E,backdrop:C,keyboard:T,onEscapeKeyDown:F,onShow:I,onHide:R,container:S,autoFocus:L,enforceFocus:_,restoreFocus:H,restoreFocusOptions:O,onEntered:G,onExit:P,onExiting:A,onEnter:B,onEntering:U,onExited:M,backdropClassName:z,manager:W,...K},J)=>{const[X,V]=(0,f.useState)({}),[q,Q]=(0,f.useState)(!1),Y=(0,f.useRef)(!1),ee=(0,f.useRef)(!1),ne=(0,f.useRef)(null),[te,re]=(0,u.Z)(),se=(0,h.Z)(J,re),oe=(0,p.Z)(R),ie=(0,N.SC)();e=(0,N.vE)(e,"modal");const ae=(0,f.useMemo)((()=>({onHide:oe})),[oe]);function ce(){return W||(0,y.t)({isRTL:ie})}function le(e){if(!a.Z)return;const n=ce().getScrollbarWidth()>0,t=e.scrollHeight>(0,c.Z)(e).documentElement.clientHeight;V({paddingRight:n&&!t?d():void 0,paddingLeft:!n&&t?d():void 0})}const de=(0,p.Z)((()=>{te&&le(te.dialog)}));(0,m.Z)((()=>{(0,l.Z)(window,"resize",de),null==ne.current||ne.current()}));const ue=()=>{Y.current=!0},pe=e=>{Y.current&&te&&e.target===te.dialog&&(ee.current=!0),Y.current=!1},he=()=>{Q(!0),ne.current=(0,x.Z)(te.dialog,(()=>{Q(!1)}))},me=e=>{"static"!==C?ee.current||e.target!==e.currentTarget?ee.current=!1:null==R||R():(e=>{e.target===e.currentTarget&&he()})(e)},xe=(0,f.useCallback)((n=>(0,w.jsx)("div",{...n,className:o()(`${e}-backdrop`,z,!E&&"show")})),[E,z,e]),fe={...t,...X};E||(fe.display="block");return(0,w.jsx)(v.Z.Provider,{value:ae,children:(0,w.jsx)(g.Z,{show:k,ref:se,backdrop:C,container:S,keyboard:!0,autoFocus:L,enforceFocus:_,restoreFocus:H,restoreFocusOptions:O,onEscapeKeyDown:e=>{T||"static"!==C?T&&F&&F(e):(e.preventDefault(),he())},onShow:I,onHide:R,onEnter:(e,n)=>{e&&(e.style.display="block",le(e)),null==B||B(e,n)},onEntering:(e,n)=>{null==U||U(e,n),(0,i.ZP)(window,"resize",de)},onEntered:G,onExit:e=>{null==ne.current||ne.current(),null==P||P(e)},onExiting:A,onExited:e=>{e&&(e.style.display=""),null==M||M(e),(0,l.Z)(window,"resize",de)},manager:ce(),transition:E?$:void 0,backdropTransition:E?D:void 0,renderBackdrop:xe,renderDialog:t=>(0,w.jsx)("div",{role:"dialog",...t,style:fe,className:o()(n,e,q&&`${e}-static`),onClick:C?me:void 0,onMouseUp:pe,"aria-labelledby":b,children:(0,w.jsx)(j,{...K,onMouseDown:ue,className:r,contentClassName:s,children:Z})})})})}));_.displayName="Modal",_.defaultProps=L;var H=Object.assign(_,{Body:b,Header:I,Title:S,Footer:C,Dialog:E,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})},4051:function(e,n,t){"use strict";var r=t(4036),s=t.n(r),o=t(7294),i=t(600),a=t(5893);const c=["xxl","xl","lg","md","sm","xs"],l=o.forwardRef((({bsPrefix:e,className:n,as:t="div",...r},o)=>{const l=(0,i.vE)(e,"row"),d=`${l}-cols`,u=[];return c.forEach((e=>{const n=r[e];let t;delete r[e],null!=n&&"object"===typeof n?({cols:t}=n):t=n;const s="xs"!==e?`-${e}`:"";null!=t&&u.push(`${d}${s}-${t}`)})),(0,a.jsx)(t,{ref:o,...r,className:s()(n,l,...u)})}));l.displayName="Row",n.Z=l}},function(e){e.O(0,[699,972,774,888,179],(function(){return n=8287,e(e.s=n);var n}));var n=e.O();_N_E=n}]);