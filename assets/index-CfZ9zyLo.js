import{v as y,r as c,B as m,c as r,o as s,k as p,e as f,m as n,l as d}from"./index-FT65AObw.js";import{s as h}from"./index-CHRE3rs3.js";async function v(){await new Promise(t=>setTimeout(t,500));const e=await fetch("/src/data/products.json");if(!e.ok)throw new Error("Failed to load products");return e.json()}const F=y("products",()=>{const e=c([]),t=c(new Map),a=c(!1),i=c(null);async function u(){a.value=!0,i.value=null;try{const o=await v();e.value=o,t.value=new Map(o.map(g=>[g.id,g]))}catch(o){i.value=o instanceof Error?o.message:"Unknown error"}finally{a.value=!1}}function l(o){return t.value.get(o)||null}return{products:e,productsById:t,loading:a,error:i,fetchProducts:u,getProductById:l}});var k=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`,$={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},b=m.extend({name:"card",style:k,classes:$}),w={name:"BaseCard",extends:h,style:b,provide:function(){return{$pcCard:this,$parentInstance:this}}},S={name:"Card",extends:w,inheritAttrs:!1};function B(e,t,a,i,u,l){return s(),r("div",n({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(s(),r("div",n({key:0,class:e.cx("header")},e.ptm("header")),[d(e.$slots,"header")],16)):p("",!0),f("div",n({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(s(),r("div",n({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(s(),r("div",n({key:0,class:e.cx("title")},e.ptm("title")),[d(e.$slots,"title")],16)):p("",!0),e.$slots.subtitle?(s(),r("div",n({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[d(e.$slots,"subtitle")],16)):p("",!0)],16)):p("",!0),f("div",n({class:e.cx("content")},e.ptm("content")),[d(e.$slots,"content")],16),e.$slots.footer?(s(),r("div",n({key:1,class:e.cx("footer")},e.ptm("footer")),[d(e.$slots,"footer")],16)):p("",!0)],16)],16)}S.render=B;var P=`
    .p-progressspinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progressspinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .p-progressspinner-spin {
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        animation: p-progressspinner-rotate 2s linear infinite;
    }

    .p-progressspinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        stroke: dt('progressspinner.colorOne');
        animation:
            p-progressspinner-dash 1.5s ease-in-out infinite,
            p-progressspinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @keyframes p-progressspinner-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes p-progressspinner-dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }
    @keyframes p-progressspinner-color {
        100%,
        0% {
            stroke: dt('progressspinner.color.one');
        }
        40% {
            stroke: dt('progressspinner.color.two');
        }
        66% {
            stroke: dt('progressspinner.color.three');
        }
        80%,
        90% {
            stroke: dt('progressspinner.color.four');
        }
    }
`,C={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},I=m.extend({name:"progressspinner",style:P,classes:C}),E={name:"BaseProgressSpinner",extends:h,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:I,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},M={name:"ProgressSpinner",extends:E,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},j=["fill","stroke-width"];function z(e,t,a,i,u,l){return s(),r("div",n({class:e.cx("root"),role:"progressbar"},e.ptmi("root")),[(s(),r("svg",n({class:e.cx("spin"),viewBox:"25 25 50 50",style:l.svgStyle},e.ptm("spin")),[f("circle",n({class:e.cx("circle"),cx:"50",cy:"50",r:"20",fill:e.fill,"stroke-width":e.strokeWidth,strokeMiterlimit:"10"},e.ptm("circle")),null,16,j)],16))],16)}M.render=z;export{S as a,M as s,F as u};
