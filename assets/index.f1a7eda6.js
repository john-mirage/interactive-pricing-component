var z=Object.defineProperty,N=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var b=(e,i,r)=>i in e?z(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r,c=(e,i)=>{for(var r in i||(i={}))S.call(i,r)&&b(e,r,i[r]);if(f)for(var r of f(i))j.call(i,r)&&b(e,r,i[r]);return e},m=(e,i)=>N(e,B(i));import{j as y,s as n,C as x,r as h,$ as L,a as k,b as C,c as D,d as F,e as T,f as R,g as M,h as V,i as E,W as G,R as O,k as W,F as A}from"./vendor.32470738.js";const U=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const g of a.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&s(g)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}};U();var X="/interactive-pricing-component/assets/pattern-circles.ce2decc3.svg";const t=y.exports.jsx,d=y.exports.jsxs,Y=n.section.withConfig({displayName:"hero__Container",componentId:"sc-lc0w0b-0"})(["position:relative;z-index:50;display:flex;flex-direction:column;justify-content:center;width:100%;min-height:14.5rem;text-align:center;margin-bottom:3.2rem;background-image:url(",");background-repeat:no-repeat;background-size:contain;background-position:center;@media screen and (min-width:","){margin-bottom:5.4rem;}"],X,e=>e.theme.screen.md),q=n.h1.withConfig({displayName:"hero__Title",componentId:"sc-lc0w0b-1"})(["position:relative;z-index:20;font-size:2rem;font-weight:800;line-height:2.8rem;color:",";margin-bottom:0.8rem;@media screen and (min-width:","){font-size:2.8rem;margin-bottom:1.6rem;}"],e=>e.theme.color.neutral.darkDesaturatedBlue,e=>e.theme.screen.md),H=n.p.withConfig({displayName:"hero__Subtitle",componentId:"sc-lc0w0b-2"})(["position:relative;z-index:20;max-width:18rem;margin-left:auto;margin-right:auto;font-size:1.3rem;font-weight:600;line-height:2.3rem;color:",";@media screen and (min-width:","){max-width:none;font-size:1.5rem;}"],e=>e.theme.color.neutral.grayishBlue,e=>e.theme.screen.md);function K(){return d(Y,{children:[t(q,{children:"Simple, traffic-based pricing"}),t(H,{children:"Sign-up for our 30-day trial. No credit card required."})]})}var J="/interactive-pricing-component/assets/icon-slider.c95c4397.svg";const Q=n.div.withConfig({displayName:"slider-thumb__ThumbContainer",componentId:"sc-1fspjg3-0"})(["position:absolute;top:0;left:","%;transform:",";"],e=>e.thumbPosition,e=>e.thumbPosition===0?"translateX(0)":e.thumbPosition===100?"translateX(-100%)":"translateX(-50%)"),Z=n.div.withConfig({displayName:"slider-thumb__Thumb",componentId:"sc-1fspjg3-1"})(["width:4rem;height:4rem;border-radius:9999px;background-color:",";background-image:url(",");background-repeat:no-repeat;background-position:center;transition:background-color 150ms;"," &:hover{background-color:",";}"],e=>e.isDragging?e.theme.color.primary.darkCyan:e.theme.color.primary.strongCyan,J,e=>e.isFocused&&x(["outline:0.2rem solid ",";"],e.theme.color.neutral.darkDesaturatedBlue),e=>e.isDragging?e.theme.color.primary.darkCyan:e.theme.color.primary.cyan);function ee(e){let{state:i,trackRef:r,index:s}=e,o=h.exports.useRef(null),{thumbProps:a,inputProps:g}=L({index:s,trackRef:r,inputRef:o},i),{focusProps:u,isFocusVisible:l}=k();return t(Q,{thumbPosition:i.getThumbPercent(s)*100,children:t(Z,m(c({isFocused:l,isDragging:i.isThumbDragging(s)},a),{children:t(C,{children:t("input",c({ref:o},D(g,u)))})}))})}const te=n.div.withConfig({displayName:"slider__Container",componentId:"sc-ld0jwd-0"})(["position:relative;width:100%;height:auto;touch-action:none;margin-bottom:2.4rem;cursor:pointer;@media screen and (min-width:","){order:3;margin-top:3.2rem;margin-bottom:4rem;}"],e=>e.theme.screen.md),ie=n.div.withConfig({displayName:"slider__TrackContainer",componentId:"sc-ld0jwd-1"})(["position:relative;width:100%;height:4rem;"]),ne=n.div.withConfig({displayName:"slider__Track",componentId:"sc-ld0jwd-2"})(["position:absolute;width:100%;height:0.8rem;top:1.6rem;background-color:",";border-radius:9999px;"],e=>e.theme.color.neutral.veryLightGrayishBlue),re=n.div.withConfig({displayName:"slider__Progress",componentId:"sc-ld0jwd-3"})(["width:","%;height:100%;background-color:",";border-radius:9999px;"],e=>e.lineWidth,e=>e.theme.color.primary.softCyan);function oe(e){let i=h.exports.useRef(null),r=F(e.formatOptions),s=T(m(c({},e),{numberFormatter:r})),{groupProps:o,trackProps:a}=R(e,s,i);return t(te,m(c({},o),{children:d(ie,m(c({},a),{ref:i,children:[t(ne,{children:t(re,{lineWidth:s.getThumbPercent(0)*100})}),t(ee,{index:0,state:s,trackRef:i})]}))}))}const ae=n.div.withConfig({displayName:"features__Container",componentId:"sc-1d2uzx3-0"})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:center;width:100%;height:auto;margin-bottom:2.4rem;@media screen and (min-width:","){width:50%;order:6;align-items:flex-start;margin-bottom:0;}"],e=>e.theme.screen.md),se=n.div.withConfig({displayName:"features__Section",componentId:"sc-1d2uzx3-1"})(["display:flex;flex-direction:row;justify-content:flex-start;align-items:center;width:auto;height:auto;margin-bottom:1.6rem;&:last-child{margin-bottom:0;}"]),de=n.svg.withConfig({displayName:"features__Icon",componentId:"sc-1d2uzx3-2"})(["width:0.9rem;height:auto;margin-right:1.2rem;"]),ce=n.path.withConfig({displayName:"features__IconPath",componentId:"sc-1d2uzx3-3"})(["stroke:",";"],e=>e.theme.color.primary.strongCyan),le=n.p.withConfig({displayName:"features__Feature",componentId:"sc-1d2uzx3-4"})(["font-size:1.2rem;font-weight:600;color:",";"],e=>e.theme.color.neutral.grayishBlue),me=["Unlimited websites","100% data ownership","Email reports"];function he(){return t(ae,{children:me.map((e,i)=>d(se,{children:[t(de,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 9 8",children:t(ce,{fill:"none","stroke-width":"2",d:"M1 4.134l1.907 1.908L7.949 1"})}),t(le,{children:e})]},i))})}const _=n.button.withConfig({displayName:"button__Container",componentId:"sc-1lh2rjb-0"})(["display:flex;flex-direction:row;justify-content:center;align-items:center;width:100%;max-width:17rem;height:4rem;padding-left:1.6rem;padding-right:1.6rem;margin-left:auto;margin-right:auto;border-radius:9999px;background-color:",";transition:background-color 150ms;cursor:pointer;&:focus{outline:0.3rem solid ",";}@media screen and (min-width:","){order:7;margin-right:0;}"],e=>e.isPressed?e.theme.color.primary.darkCyan:e.theme.color.neutral.darkDesaturatedBlue,e=>e.theme.color.primary.paleBlue,e=>e.theme.screen.md),ge=n.span.withConfig({displayName:"button__Label",componentId:"sc-1lh2rjb-1"})(["font-size:1.2rem;font-weight:800;color:",";transition:color 150ms;",":hover &{color:",";}"],e=>e.theme.color.primary.paleBlue,_,e=>e.theme.color.neutral.white);function pe(e){let i=h.exports.useRef(),{buttonProps:r,isPressed:s}=M(m(c({},e),{elementType:"button"}),i);return t(_,m(c({isPressed:s},r),{ref:i,children:t(ge,{children:"Start my trial"})}))}const ue=n.p.withConfig({displayName:"plan__Container",componentId:"sc-11x032l-0"})(["display:flex;flex-direction:row;justify-content:flex-start;align-items:center;width:auto;height:auto;margin-bottom:3.6rem;@media screen and (min-width:","){width:50%;order:2;justify-content:flex-end;margin-bottom:0;}"],e=>e.theme.screen.md),fe=n.span.withConfig({displayName:"plan__Price",componentId:"sc-11x032l-1"})(["display:block;font-size:3.2rem;font-weight:800;letter-spacing:-0.06rem;color:",";margin-right:0.8rem;@media screen and (min-width:","){font-size:4rem;letter-spacing:-0.08rem;}"],e=>e.theme.color.neutral.darkDesaturatedBlue,e=>e.theme.screen.md),be=n.span.withConfig({displayName:"plan__Period",componentId:"sc-11x032l-2"})(["display:block;font-size:1.4rem;font-weight:600;color:",";@media screen and (min-width:","){font-size:1.6rem;}"],e=>e.theme.color.neutral.grayishBlue,e=>e.theme.screen.md);function we({price:e,period:i}){return d(ue,{children:[t(fe,{children:e}),d(be,{children:["/ ",i]})]})}const ye=n.label.withConfig({displayName:"switch__Container",componentId:"sc-1lld3vw-0"})(["display:block;margin-top:2rem;margin-bottom:2rem;@media screen and (min-width:","){margin-top:0;margin-bottom:0;margin-left:0.8rem;margin-right:0.8rem;}@media screen and (min-width:","){margin-left:1.6rem;margin-right:1.6rem;}"],e=>e.theme.screen.sm,e=>e.theme.screen.md),xe=n.span.withConfig({displayName:"switch__Track",componentId:"sc-1lld3vw-1"})(["display:block;width:4.4rem;height:2.2rem;padding:0.4rem;border-radius:9999px;background-color:",";transform:rotate(90deg);transition:background-color 150ms;cursor:pointer;"," &:hover{background-color:",";}@media screen and (min-width:","){transform:rotate(0);}"],e=>e.isSelected?e.theme.color.primary.strongCyan:e.theme.color.neutral.lightGrayishBlue,e=>e.isFocused&&x(["outline:0.2rem solid ",";"],e.theme.color.neutral.darkDesaturatedBlue),e=>e.isSelected?e.theme.color.primary.strongCyan:e.theme.color.primary.softCyan,e=>e.theme.screen.sm),ke=n.span.withConfig({displayName:"switch__Dot",componentId:"sc-1lld3vw-2"})(["display:block;width:1.4rem;height:1.4rem;border-radius:9999px;background-color:",";transform:",";transition:transform 150ms;"],e=>e.theme.color.neutral.white,e=>e.isSelected?"translateX(2.2rem)":"translateX(0)");function Ce(e){let i=V(e),r=h.exports.useRef(),{inputProps:s}=E(e,i,r),{isFocusVisible:o,focusProps:a}=k();return d(ye,{children:[t(C,{children:t("input",m(c(c({},s),a),{ref:r}))}),t(xe,{"aria-hidden":"true",isFocused:o,isSelected:i.isSelected,children:t(ke,{isSelected:i.isSelected})})]})}const _e=n.span.withConfig({displayName:"badge__Container",componentId:"sc-1asi55u-0"})(["display:block;position:absolute;top:50%;right:-0.4rem;transform:translate(100%,-50%);width:4rem;height:2rem;border-radius:9999px;padding-top:0.5rem;padding-bottom:0.5rem;background-color:",";@media screen and (min-width:","){right:-0.8rem;width:8rem;}"],e=>e.theme.color.primary.badge,e=>e.theme.screen.md),v=n.span.withConfig({displayName:"badge__Label",componentId:"sc-1asi55u-1"})(["font-size:1rem;line-height:1rem;font-weight:800;color:",";text-align:center;"],e=>e.theme.color.primary.lightRed),ve=n(v).withConfig({displayName:"badge__MobileLabel",componentId:"sc-1asi55u-2"})(["display:block;@media screen and (min-width:","){display:none;}"],e=>e.theme.screen.md),Pe=n(v).withConfig({displayName:"badge__DesktopLabel",componentId:"sc-1asi55u-3"})(["display:none;@media screen and (min-width:","){display:block;}"],e=>e.theme.screen.md);function Ie(){return d(_e,{children:[t(ve,{children:"-25%"}),t(Pe,{children:"25% discount"})]})}const $e=n.div.withConfig({displayName:"plan-switcher__Container",componentId:"sc-4gmyot-0"})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:center;@media screen and (min-width:","){flex-direction:row;}@media screen and (min-width:","){width:100%;order:4;justify-content:center;}"],e=>e.theme.screen.sm,e=>e.theme.screen.md),P=n.span.withConfig({displayName:"plan-switcher__Label",componentId:"sc-4gmyot-1"})(["display:block;font-size:1.2rem;font-weight:600;color:",";"],e=>e.theme.color.neutral.grayishBlue),ze=n(P).withConfig({displayName:"plan-switcher__LabelWithBadge",componentId:"sc-4gmyot-2"})(["position:relative;"]);function Ne(e){return d($e,{children:[t(P,{children:"Monthly Billing"}),t(Ce,{onChange:e.switchPlan,"aria-labelledby":"yearly-plan"}),d(ze,{id:"yearly-plan",children:["Yearly Billing",t(Ie,{})]})]})}const Be=n.div.withConfig({displayName:"card__Container",componentId:"sc-3efa61-0"})(["position:relative;z-index:50;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;width:100%;height:auto;padding-left:2.4rem;padding-right:2.4rem;padding-top:3.2rem;padding-bottom:3.2rem;border-radius:1rem;background-color:",";box-shadow:0 25px 50px -12px rgb(0 0 0 / 0.15);@media screen and (min-width:","){width:32.7rem;margin-left:auto;margin-right:auto;}@media screen and (min-width:","){flex-direction:row;flex-wrap:wrap;width:54rem;padding-top:4.8rem;padding-left:4.8rem;padding-right:4.8rem;}"],e=>e.theme.color.neutral.white,e=>e.theme.screen.sm,e=>e.theme.screen.md),Se=n.p.withConfig({displayName:"card__PageViews",componentId:"sc-3efa61-1"})(["font-size:1.2rem;font-weight:800;letter-spacing:0.17rem;text-transform:uppercase;color:",";margin-bottom:2.4rem;@media screen and (min-width:","){width:50%;margin-bottom:0;font-size:1.4rem;letter-spacing:0.2rem;}"],e=>e.theme.color.neutral.grayishBlue,e=>e.theme.screen.md),je=n.div.withConfig({displayName:"card__Divider",componentId:"sc-3efa61-2"})(["width:calc(100% + 4.8rem);height:0.1rem;margin-top:4rem;margin-bottom:2.4rem;margin-left:-2.4rem;margin-right:-2.4rem;background-color:",";@media screen and (min-width:","){width:calc(100% + 9.6rem);order:5;margin-bottom:3.2rem;margin-left:-4.8rem;margin-right:-4.8rem;}"],e=>e.theme.color.neutral.veryLightGrayishBlue,e=>e.theme.screen.md),Le={"10k":8,"50k":12,"100k":16,"500k":24,"1m":36},De={"0":"10k","0.25":"50k","0.5":"100k","0.75":"500k","1":"1m"},w=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),Fe=.75;function Te(){const[e,i]=h.exports.useState("100k"),[r,s]=h.exports.useState("month"),[o,a]=h.exports.useState("$16.00");h.exports.useEffect(()=>{const l=Le[e];if(r==="month"){const p=w.format(l);a(p)}else if(r==="year"){const I=l*12*Fe,$=w.format(I);a($)}},[e,r]);function g([l]){const p=String(l);i(De[p])}function u(l){s(l?"year":"month")}return d(Be,{children:[d(Se,{children:[e," ",t("span",{id:"page-views",children:"pageviews"})]}),t(oe,{"aria-labelledby":"page-views",formatOptions:{style:"percent"},defaultValue:[.5],maxValue:1,step:.25,onChange:g}),t(we,{price:o,period:r}),t(Ne,{switchPlan:u}),t(je,{}),t(he,{}),t(pe,{})]})}var Re="/interactive-pricing-component/assets/bg-pattern.2d0029cc.svg";const Me=n.main.withConfig({displayName:"page__Container",componentId:"sc-16lzv4o-0"})(["position:relative;z-index:10;width:100%;min-height:100vh;padding-top:5.6rem;padding-bottom:8.8rem;padding-left:2.4rem;padding-right:2.4rem;background-color:",";@media screen and (min-width:","){padding-top:6.8rem;}"],e=>e.theme.color.neutral.white,e=>e.theme.screen.md),Ve=n.img.withConfig({displayName:"page__Pattern",componentId:"sc-16lzv4o-1"})(["position:absolute;z-index:20;top:0;left:0;width:100%;height:40rem;object-fit:cover;object-position:left bottom;@media screen and (min-width:","){height:45rem;}"],e=>e.theme.screen.md);function Ee(){return d(Me,{children:[t(K,{}),t(Te,{}),t(Ve,{src:Re,alt:"Background pattern illustration"})]})}const Ge=G(["*,::before,::after{box-sizing:border-box;}html{line-height:1.15;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-size:10px;}body{margin:0;font-family:'Manrope',system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji';}hr{height:0;color:inherit;}abbr[title]{text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Consolas,'Liberation Mono',Menlo,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}table{text-indent:0;border-color:inherit;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,select{text-transform:none;}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button;}::-moz-focus-inner{border-style:none;padding:0;}:-moz-focusring{outline:1px dotted ButtonText;}:-moz-ui-invalid{box-shadow:none;}legend{padding:0;}progress{vertical-align:baseline;}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto;}[type='search']{-webkit-appearance:textfield;outline-offset:-2px;}::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}summary{display:list-item;}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0;}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit;}ol,ul{list-style:none;margin:0;padding:0;}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle;}button{display:block;border:none;}"]),Oe={screen:{sm:"375px",md:"588px"},color:{primary:{softCyan:"hsl(174, 77%, 80%)",strongCyan:"hsl(174, 86%, 45%)",cyan:"#78EBDC",darkCyan:"#22AEA1",lightGrayishRed:"hsl(14, 92%, 95%)",lightRed:"hsl(15, 100%, 70%)",paleBlue:"hsl(226, 100%, 87%)",badge:"#FFEDE8"},neutral:{white:"hsl(0, 0%, 100%)",veryPaleBlue:"hsl(230, 100%, 99%)",veryLightGrayishBlue:"hsl(224, 65%, 95%)",lightGrayishBlue:"hsl(223, 50%, 87%)",grayishBlue:"hsl(225, 20%, 60%)",darkDesaturatedBlue:"hsl(227, 35%, 25%)"}}};O.render(d(W.StrictMode,{children:[t(Ge,{}),t(A,{theme:Oe,children:t(Ee,{})})]}),document.getElementById("root"));
