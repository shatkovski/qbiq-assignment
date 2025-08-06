import{v as y,r as d,B as g,c as r,o,k as l,e as u,m as t,l as p}from"./index-DQCS72pR.js";import{s as f}from"./index-DHRM44hz.js";const v=[{id:"p1",name:"Awesome E-book Reader Pro",price:79.99,shortDescription:"The best e-book reading experience.",thumbnailUrl:"https://placehold.co/300x200/007BFF/FFFFFF?text=E-book+Reader",longDescription:"Unlock a world of knowledge with the Awesome E-book Reader Pro. Features include adjustable font sizes, night mode, and seamless library synchronization. Supports all major e-book formats.",category:"Software",reviews:[{username:"ReaderFan123",comment:"Love it! So easy to use."},{username:"Bookworm_Betty",comment:"Changed how I read forever."}]},{id:"p2",name:"Ultimate Graphics Suite",price:199.5,shortDescription:"All-in-one design software.",thumbnailUrl:"https://placehold.co/300x200/28A745/FFFFFF?text=Graphics+Suite",longDescription:"The Ultimate Graphics Suite provides a comprehensive set of tools for professional photo editing, vector illustration, and page layout. Perfect for designers of all levels.",category:"Software",reviews:[{username:"DesignerDan",comment:"Powerful tools, great value!"}]},{id:"p3",name:"Vue.js Masterclass Course",price:99,shortDescription:"Become a Vue.js expert.",thumbnailUrl:"https://placehold.co/300x200/FFC107/000000?text=Vue.js+Course",longDescription:"This comprehensive course covers everything from the basics of Vue.js to advanced concepts like state management with Pinia, server-side rendering, and testing. Taught by industry experts.",category:"Online Course",reviews:[{username:"VueLearner",comment:"Excellent course, highly recommended."},{username:"DevDude",comment:"Learned so much, thank you!"},{username:"CodeNinja",comment:"Worth every penny."}]},{id:"p4",name:"Python Data Science Bootcamp",price:120,shortDescription:"Master data science with Python.",thumbnailUrl:"https://placehold.co/300x200/17A2B8/FFFFFF?text=Python+Bootcamp",longDescription:"A hands-on bootcamp covering Python, pandas, machine learning, and data visualization.",category:"Online Course",reviews:[{username:"DataGeek",comment:"Very practical and up-to-date."}]},{id:"p5",name:"Pro Audio Mixer App",price:49.99,shortDescription:"Mix and master your audio tracks.",thumbnailUrl:"https://placehold.co/300x200/6F42C1/FFFFFF?text=Audio+Mixer",longDescription:"Professional-grade audio mixing software with real-time effects, multi-track support, and export to all major formats.",category:"Software",reviews:[{username:"SoundGuy",comment:"My go-to for all audio projects."}]},{id:"p6",name:"Digital Marketing Crash Course",price:59,shortDescription:"Boost your marketing skills.",thumbnailUrl:"https://placehold.co/300x200/FD7E14/FFFFFF?text=Marketing+Course",longDescription:"Learn SEO, SEM, social media, and email marketing in this fast-paced, practical course.",category:"Online Course",reviews:[{username:"MarketerMax",comment:"Great overview and actionable tips."}]},{id:"p7",name:"Stock Photo Mega Pack",price:29.99,shortDescription:"10,000+ royalty-free images.",thumbnailUrl:"https://placehold.co/300x200/20C997/FFFFFF?text=Stock+Photos",longDescription:"A massive collection of high-quality stock photos for all your creative projects.",category:"Digital Asset",reviews:[{username:"PhotoPro",comment:"Huge variety and great quality."}]},{id:"p8",name:"JavaScript Algorithms E-Book",price:19.99,shortDescription:"Master JS algorithms and data structures.",thumbnailUrl:"https://placehold.co/300x200/6610F2/FFFFFF?text=JS+Algorithms",longDescription:"Step-by-step explanations and code samples for all major algorithms and data structures in JavaScript.",category:"E-Book",reviews:[{username:"AlgoAce",comment:"Very clear and easy to follow."}]},{id:"p9",name:"Personal Finance Tracker App",price:34.99,shortDescription:"Track your expenses and savings.",thumbnailUrl:"https://placehold.co/300x200/DC3545/FFFFFF?text=Finance+App",longDescription:"A simple yet powerful app to manage your personal finances, set budgets, and track spending trends.",category:"Software",reviews:[{username:"MoneyMatters",comment:"Helped me save a lot!"}]},{id:"p10",name:"React Native Mobile Templates",price:49,shortDescription:"Kickstart your mobile app projects.",thumbnailUrl:"https://placehold.co/300x200/343A40/FFFFFF?text=Mobile+Templates",longDescription:"A set of beautiful, ready-to-use React Native templates for fast app development.",category:"Digital Asset",reviews:[{username:"AppDev",comment:"Saved me hours of work!"}]},{id:"p11",name:"Advanced CSS Animations Course",price:45,shortDescription:"Bring your web pages to life.",thumbnailUrl:"https://placehold.co/300x200/FF5733/FFFFFF?text=CSS+Animations",longDescription:"Learn advanced CSS animation techniques, including keyframes, transitions, and interactive effects.",category:"Online Course",reviews:[{username:"CSSWizard",comment:"Animations are now my superpower!"}]},{id:"p12",name:"Full-Stack Developer Roadmap",price:25,shortDescription:"Your guide to becoming a full-stack dev.",thumbnailUrl:"https://placehold.co/300x200/007BFF/FFFFFF?text=Full-Stack+Roadmap",longDescription:"A detailed e-book and checklist for mastering both frontend and backend development.",category:"E-Book",reviews:[{username:"StackMaster",comment:"Very motivating and well-structured."}]},{id:"p13",name:"Excel Power User Pack",price:15,shortDescription:"Macros, templates, and more.",thumbnailUrl:"https://placehold.co/300x200/28A745/FFFFFF?text=Excel+Pack",longDescription:"A bundle of advanced Excel templates, macros, and guides for business and personal use.",category:"Digital Asset",reviews:[{username:"ExcelNinja",comment:"Boosted my productivity!"}]},{id:"p14",name:"Photography Mastery Course",price:89,shortDescription:"Take stunning photos every time.",thumbnailUrl:"https://placehold.co/300x200/FFC107/000000?text=Photography+Course",longDescription:"A complete course on photography, from basics to advanced techniques, taught by award-winning photographers.",category:"Online Course",reviews:[{username:"ShutterBug",comment:"My photos have never looked better!"}]},{id:"p15",name:"Ultimate Resume Builder",price:12,shortDescription:"Create a professional resume in minutes.",thumbnailUrl:"https://placehold.co/300x200/17A2B8/FFFFFF?text=Resume+Builder",longDescription:"An intuitive tool to craft beautiful, ATS-friendly resumes with expert tips and templates.",category:"Software",reviews:[{username:"JobHunter",comment:"Landed more interviews thanks to this!"}]}];async function F(){return await new Promise(e=>setTimeout(e,500)),v}const T=y("products",()=>{const e=d([]),s=d(new Map),a=d(!1),i=d(null);async function m(){a.value=!0,i.value=null;try{const n=await F();e.value=n,s.value=new Map(n.map(h=>[h.id,h]))}catch(n){i.value=n instanceof Error?n.message:"Unknown error"}finally{a.value=!1}}function c(n){return s.value.get(n)||null}return{products:e,productsById:s,loading:a,error:i,fetchProducts:m,getProductById:c}});var k=`
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
`,b={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},w=g.extend({name:"card",style:k,classes:b}),S={name:"BaseCard",extends:f,style:w,provide:function(){return{$pcCard:this,$parentInstance:this}}},D={name:"Card",extends:S,inheritAttrs:!1};function x(e,s,a,i,m,c){return o(),r("div",t({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(o(),r("div",t({key:0,class:e.cx("header")},e.ptm("header")),[p(e.$slots,"header")],16)):l("",!0),u("div",t({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(o(),r("div",t({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(o(),r("div",t({key:0,class:e.cx("title")},e.ptm("title")),[p(e.$slots,"title")],16)):l("",!0),e.$slots.subtitle?(o(),r("div",t({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[p(e.$slots,"subtitle")],16)):l("",!0)],16)):l("",!0),u("div",t({class:e.cx("content")},e.ptm("content")),[p(e.$slots,"content")],16),e.$slots.footer?(o(),r("div",t({key:1,class:e.cx("footer")},e.ptm("footer")),[p(e.$slots,"footer")],16)):l("",!0)],16)],16)}D.render=x;var A=`
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
`,P={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},C=g.extend({name:"progressspinner",style:A,classes:P}),$={name:"BaseProgressSpinner",extends:f,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:C,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},B={name:"ProgressSpinner",extends:$,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},M=["fill","stroke-width"];function U(e,s,a,i,m,c){return o(),r("div",t({class:e.cx("root"),role:"progressbar"},e.ptmi("root")),[(o(),r("svg",t({class:e.cx("spin"),viewBox:"25 25 50 50",style:c.svgStyle},e.ptm("spin")),[u("circle",t({class:e.cx("circle"),cx:"50",cy:"50",r:"20",fill:e.fill,"stroke-width":e.strokeWidth,strokeMiterlimit:"10"},e.ptm("circle")),null,16,M)],16))],16)}B.render=U;export{D as a,B as s,T as u};
