import{B as k,c as i,o as a,i as w,k as m,l as $,m as g,n as x,e as o,t as l,d as P,r as S,a as B,p as j,q as z,f as d,j as f,h as C,u as c,F as N,g as D}from"./index-DQCS72pR.js";import{u as T,s as F,a as R}from"./index-D3JobwAr.js";import{s as V,f as E}from"./index-DHRM44hz.js";import{s as I}from"./index-BiwyQV5P.js";var q=`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`,A={root:function(e){var n=e.props;return["p-tag p-component",{"p-tag-info":n.severity==="info","p-tag-success":n.severity==="success","p-tag-warn":n.severity==="warn","p-tag-danger":n.severity==="danger","p-tag-secondary":n.severity==="secondary","p-tag-contrast":n.severity==="contrast","p-tag-rounded":n.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},K=k.extend({name:"tag",style:q,classes:A}),L={name:"BaseTag",extends:V,props:{value:null,severity:null,rounded:Boolean,icon:String},style:K,provide:function(){return{$pcTag:this,$parentInstance:this}}};function u(t){"@babel/helpers - typeof";return u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(t)}function M(t,e,n){return(e=O(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function O(t){var e=U(t,"string");return u(e)=="symbol"?e:e+""}function U(t,e){if(u(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e);if(u(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var b={name:"Tag",extends:L,inheritAttrs:!1,computed:{dataP:function(){return E(M({rounded:this.rounded},this.severity,this.severity))}}},W=["data-p"];function G(t,e,n,s,r,y){return a(),i("span",g({class:t.cx("root"),"data-p":y.dataP},t.ptmi("root")),[t.$slots.icon?(a(),w(x(t.$slots.icon),g({key:0,class:t.cx("icon")},t.ptm("icon")),null,16,["class"])):t.icon?(a(),i("span",g({key:1,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):m("",!0),t.value!=null||t.$slots.default?$(t.$slots,"default",{key:2},function(){return[o("span",g({class:t.cx("label")},t.ptm("label")),l(t.value),17)]}):m("",!0)],16,W)}b.render=G;const H={class:"container mx-auto p-4"},J={key:0,class:"flex justify-center py-8"},Q={key:1,class:"text-center py-8 text-red-500"},X={key:2,class:"flex flex-col md:flex-row gap-6"},Y={class:"flex-shrink-0 w-full md:w-1/3 flex items-center justify-center"},Z=["src","alt"],tt={class:"flex-1"},et={class:"text-2xl font-bold mb-2"},nt={class:"text-lg text-gray-700 mb-2"},ot={class:"mb-2"},rt={class:"mb-2"},st={class:"mb-2"},at={class:"mt-6"},it={class:"space-y-4"},lt={class:"font-semibold"},ct={key:0,class:"text-gray-500"},mt=P({__name:"ProductDetails",setup(t){const e=j(),n=z(),s=T(),r=S(null);return B(async()=>{s.products.length===0&&await s.fetchProducts(),r.value=s.getProductById(e.params.id),r.value||n.replace({name:"NotFound"})}),(y,p)=>{const h=C("router-link");return a(),i("div",H,[d(h,{to:"/products",class:"mb-4 inline-block"},{default:f(()=>[d(c(I),{label:"Back to Products",icon:"pi pi-arrow-left",class:"p-button-sm"})]),_:1}),c(s).loading?(a(),i("div",J,[d(c(F),{style:{width:"50px",height:"50px"},strokeWidth:"4"})])):c(s).error?(a(),i("div",Q,l(c(s).error),1)):r.value?(a(),i("div",X,[o("div",Y,[o("img",{src:r.value.thumbnailUrl,alt:r.value.name,class:"w-48 h-48 object-cover rounded"},null,8,Z)]),o("div",tt,[o("h2",et,l(r.value.name),1),o("div",nt,"$"+l(r.value.price),1),o("div",ot,l(r.value.shortDescription),1),o("div",rt,l(r.value.longDescription),1),o("div",st,[p[0]||(p[0]=o("span",{class:"font-semibold"},"Category:",-1)),d(c(b),{value:r.value.category,severity:"info",class:"ml-2"},null,8,["value"])]),o("div",at,[p[1]||(p[1]=o("h3",{class:"text-xl font-semibold mb-2"},"Reviews",-1)),o("ul",it,[(a(!0),i(N,null,D(r.value.reviews,(v,_)=>(a(),i("li",{key:_},[d(c(R),null,{title:f(()=>[o("div",lt,l(v.username),1)]),content:f(()=>[o("div",null,l(v.comment),1)]),_:2},1024)]))),128)),!r.value.reviews||r.value.reviews.length===0?(a(),i("li",ct," No reviews yet. ")):m("",!0)])])])])):m("",!0)])}}});export{mt as default};
