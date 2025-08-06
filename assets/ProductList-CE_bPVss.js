import{u as F,s as _,a as V}from"./index-D3JobwAr.js";import{s as w,f as k}from"./index-DHRM44hz.js";import{s as $,B as P,m as g,c as s,o as d,d as N,a as C,r as x,w as S,b as I,e as c,f as h,u,t as v,F as B,g as z,h as j,i as E,j as m}from"./index-DQCS72pR.js";var T={name:"BaseEditableHolder",extends:w,emits:["update:modelValue","value-change"],props:{modelValue:{type:null,default:void 0},defaultValue:{type:null,default:void 0},name:{type:String,default:void 0},invalid:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},formControl:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0},$pcForm:{default:void 0},$pcFormField:{default:void 0}},data:function(){return{d_value:this.defaultValue!==void 0?this.defaultValue:this.modelValue}},watch:{modelValue:function(t){this.d_value=t},defaultValue:function(t){this.d_value=t},$formName:{immediate:!0,handler:function(t){var e,i;this.formField=((e=this.$pcForm)===null||e===void 0||(i=e.register)===null||i===void 0?void 0:i.call(e,t,this.$formControl))||{}}},$formControl:{immediate:!0,handler:function(t){var e,i;this.formField=((e=this.$pcForm)===null||e===void 0||(i=e.register)===null||i===void 0?void 0:i.call(e,this.$formName,t))||{}}},$formDefaultValue:{immediate:!0,handler:function(t){this.d_value!==t&&(this.d_value=t)}},$formValue:{immediate:!1,handler:function(t){var e;(e=this.$pcForm)!==null&&e!==void 0&&e.getFieldState(this.$formName)&&t!==this.d_value&&(this.d_value=t)}}},formField:{},methods:{writeValue:function(t,e){var i,r;this.controlled&&(this.d_value=t,this.$emit("update:modelValue",t)),this.$emit("value-change",t),(i=(r=this.formField).onChange)===null||i===void 0||i.call(r,{originalEvent:e,value:t})},findNonEmpty:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return e.find($)}},computed:{$filled:function(){return $(this.d_value)},$invalid:function(){var t,e;return!this.$formNovalidate&&this.findNonEmpty(this.invalid,(t=this.$pcFormField)===null||t===void 0||(t=t.$field)===null||t===void 0?void 0:t.invalid,(e=this.$pcForm)===null||e===void 0||(e=e.getFieldState(this.$formName))===null||e===void 0?void 0:e.invalid)},$formName:function(){var t;return this.$formNovalidate?void 0:this.name||((t=this.$formControl)===null||t===void 0?void 0:t.name)},$formControl:function(){var t;return this.formControl||((t=this.$pcFormField)===null||t===void 0?void 0:t.formControl)},$formNovalidate:function(){var t;return(t=this.$formControl)===null||t===void 0?void 0:t.novalidate},$formDefaultValue:function(){var t,e;return this.findNonEmpty(this.d_value,(t=this.$pcFormField)===null||t===void 0?void 0:t.initialValue,(e=this.$pcForm)===null||e===void 0||(e=e.initialValues)===null||e===void 0?void 0:e[this.$formName])},$formValue:function(){var t,e;return this.findNonEmpty((t=this.$pcFormField)===null||t===void 0||(t=t.$field)===null||t===void 0?void 0:t.value,(e=this.$pcForm)===null||e===void 0||(e=e.getFieldState(this.$formName))===null||e===void 0?void 0:e.value)},controlled:function(){return this.$inProps.hasOwnProperty("modelValue")||!this.$inProps.hasOwnProperty("modelValue")&&!this.$inProps.hasOwnProperty("defaultValue")},filled:function(){return this.$filled}}},L={name:"BaseInput",extends:T,props:{size:{type:String,default:null},fluid:{type:Boolean,default:null},variant:{type:String,default:null}},inject:{$parentInstance:{default:void 0},$pcFluid:{default:void 0}},computed:{$variant:function(){var t;return(t=this.variant)!==null&&t!==void 0?t:this.$primevue.config.inputStyle||this.$primevue.config.inputVariant},$fluid:function(){var t;return(t=this.fluid)!==null&&t!==void 0?t:!!this.$pcFluid},hasFluid:function(){return this.$fluid}}},O=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`,D={root:function(t){var e=t.instance,i=t.props;return["p-inputtext p-component",{"p-filled":e.$filled,"p-inputtext-sm p-inputfield-sm":i.size==="small","p-inputtext-lg p-inputfield-lg":i.size==="large","p-invalid":e.$invalid,"p-variant-filled":e.$variant==="filled","p-inputtext-fluid":e.$fluid}]}},A=P.extend({name:"inputtext",style:O,classes:D}),U={name:"BaseInputText",extends:L,style:A,provide:function(){return{$pcInputText:this,$parentInstance:this}}};function p(n){"@babel/helpers - typeof";return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(n)}function H(n,t,e){return(t=K(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function K(n){var t=M(n,"string");return p(t)=="symbol"?t:t+""}function M(n,t){if(p(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var i=e.call(n,t);if(p(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}var b={name:"InputText",extends:U,inheritAttrs:!1,methods:{onInput:function(t){this.writeValue(t.target.value,t)}},computed:{attrs:function(){return g(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)},dataP:function(){return k(H({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size))}}},W=["value","name","disabled","aria-invalid","data-p"];function q(n,t,e,i,r,l){return d(),s("input",g({type:"text",class:n.cx("root"),value:n.d_value,name:n.name,disabled:n.disabled,"aria-invalid":n.$invalid||void 0,"data-p":l.dataP,onInput:t[0]||(t[0]=function(){return l.onInput&&l.onInput.apply(l,arguments)})},l.attrs),null,16,W)}b.render=q;const G={class:"container mx-auto p-4"},J={key:0,class:"flex justify-center py-8"},Q={key:1,class:"text-center py-8 text-red-500"},R={key:2,class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"},X=["src","alt"],Y={class:"font-semibold text-center"},Z={class:"text-gray-600 text-center"},it=N({__name:"ProductList",setup(n){const t=F();C(()=>{t.products.length===0&&t.fetchProducts()});const e=x(""),i=x("");let r=null;S(e,f=>{r&&clearTimeout(r),r=setTimeout(()=>{i.value=f},300)});const l=I(()=>{const f=i.value.toLowerCase();return t.products.filter(a=>a.name.toLowerCase().includes(f))});return(f,a)=>{const y=j("router-link");return d(),s("div",G,[a[1]||(a[1]=c("h1",{class:"text-2xl font-bold mb-4"},"Product List",-1)),h(u(b),{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=o=>e.value=o),placeholder:"Filter products by name...",class:"mb-4 w-full"},null,8,["modelValue"]),u(t).loading?(d(),s("div",J,[h(u(_),{style:{width:"50px",height:"50px"},strokeWidth:"4"})])):u(t).error?(d(),s("div",Q,v(u(t).error),1)):(d(),s("div",R,[(d(!0),s(B,null,z(l.value,o=>(d(),E(y,{key:o.id,to:`/products/${o.id}`,style:{"text-decoration":"none",color:"inherit"}},{default:m(()=>[h(u(V),{class:"transition-transform duration-200 hover:-translate-y-1 cursor-pointer"},{header:m(()=>[c("img",{src:o.thumbnailUrl,alt:o.name,class:"w-24 h-24 object-cover mb-2 rounded mx-auto"},null,8,X)]),title:m(()=>[c("div",Y,v(o.name),1)]),content:m(()=>[c("div",Z,"$"+v(o.price),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]))])}}});export{it as default};
