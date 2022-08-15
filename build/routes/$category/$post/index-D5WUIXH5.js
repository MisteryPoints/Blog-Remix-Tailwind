import{a as J,b as K,c as Q}from"/build/_shared/chunk-CXCXPHNQ.js";import"/build/_shared/chunk-IU4A746G.js";import"/build/_shared/chunk-TRZGYRXH.js";import"/build/_shared/chunk-H5YGW6VV.js";import{b as le,c as W,e as ue,f as S,g as _,l as X,q as Y}from"/build/_shared/chunk-NTB5FEMZ.js";var V=le((ge,O)=>{_();var oe=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};var s=function(l){var p=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,h=0,y={},i={manual:l.Prism&&l.Prism.manual,disableWorkerMessageHandler:l.Prism&&l.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof m?new m(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++h}),t.__id},clone:function t(e,n){n=n||{};var a,r;switch(i.util.type(e)){case"Object":if(r=i.util.objId(e),n[r])return n[r];a={},n[r]=a;for(var o in e)e.hasOwnProperty(o)&&(a[o]=t(e[o],n));return a;case"Array":return r=i.util.objId(e),n[r]?n[r]:(a=[],n[r]=a,e.forEach(function(c,u){a[u]=t(c,n)}),a);default:return e}},getLanguage:function(t){for(;t;){var e=p.exec(t.className);if(e)return e[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,e){t.className=t.className.replace(RegExp(p,"gi"),""),t.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(a){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var n in e)if(e[n].src==t)return e[n]}return null}},isActive:function(t,e,n){for(var a="no-"+e;t;){var r=t.classList;if(r.contains(e))return!0;if(r.contains(a))return!1;t=t.parentElement}return!!n}},languages:{plain:y,plaintext:y,text:y,txt:y,extend:function(t,e){var n=i.util.clone(i.languages[t]);for(var a in e)n[a]=e[a];return n},insertBefore:function(t,e,n,a){a=a||i.languages;var r=a[t],o={};for(var c in r)if(r.hasOwnProperty(c)){if(c==e)for(var u in n)n.hasOwnProperty(u)&&(o[u]=n[u]);n.hasOwnProperty(c)||(o[c]=r[c])}var x=a[t];return a[t]=o,i.languages.DFS(i.languages,function(w,P){P===x&&w!=t&&(this[w]=o)}),o},DFS:function t(e,n,a,r){r=r||{};var o=i.util.objId;for(var c in e)if(e.hasOwnProperty(c)){n.call(e,c,e[c],a||c);var u=e[c],x=i.util.type(u);x==="Object"&&!r[o(u)]?(r[o(u)]=!0,t(u,n,null,r)):x==="Array"&&!r[o(u)]&&(r[o(u)]=!0,t(u,n,c,r))}}},plugins:{},highlightAll:function(t,e){i.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,n){var a={callback:n,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),i.hooks.run("before-all-elements-highlight",a);for(var r=0,o;o=a.elements[r++];)i.highlightElement(o,e===!0,a.callback)},highlightElement:function(t,e,n){var a=i.util.getLanguage(t),r=i.languages[a];i.util.setLanguage(t,a);var o=t.parentElement;o&&o.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(o,a);var c=t.textContent,u={element:t,language:a,grammar:r,code:c};function x(P){u.highlightedCode=P,i.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,i.hooks.run("after-highlight",u),i.hooks.run("complete",u),n&&n.call(u.element)}if(i.hooks.run("before-sanity-check",u),o=u.element.parentElement,o&&o.nodeName.toLowerCase()==="pre"&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!u.code){i.hooks.run("complete",u),n&&n.call(u.element);return}if(i.hooks.run("before-highlight",u),!u.grammar){x(i.util.encode(u.code));return}if(e&&l.Worker){var w=new Worker(i.filename);w.onmessage=function(P){x(P.data)},w.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else x(i.highlight(u.code,u.grammar,u.language))},highlight:function(t,e,n){var a={code:t,grammar:e,language:n};if(i.hooks.run("before-tokenize",a),!a.grammar)throw new Error('The language "'+a.language+'" has no grammar.');return a.tokens=i.tokenize(a.code,a.grammar),i.hooks.run("after-tokenize",a),m.stringify(i.util.encode(a.tokens),a.language)},tokenize:function(t,e){var n=e.rest;if(n){for(var a in n)e[a]=n[a];delete e.rest}var r=new b;return d(r,r.head,t),v(t,r,e,r.head,0),$(r)},hooks:{all:{},add:function(t,e){var n=i.hooks.all;n[t]=n[t]||[],n[t].push(e)},run:function(t,e){var n=i.hooks.all[t];if(!(!n||!n.length))for(var a=0,r;r=n[a++];)r(e)}},Token:m};l.Prism=i;function m(t,e,n,a){this.type=t,this.content=e,this.alias=n,this.length=(a||"").length|0}m.stringify=function t(e,n){if(typeof e=="string")return e;if(Array.isArray(e)){var a="";return e.forEach(function(x){a+=t(x,n)}),a}var r={type:e.type,content:t(e.content,n),tag:"span",classes:["token",e.type],attributes:{},language:n},o=e.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(r.classes,o):r.classes.push(o)),i.hooks.run("wrap",r);var c="";for(var u in r.attributes)c+=" "+u+'="'+(r.attributes[u]||"").replace(/"/g,"&quot;")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+c+">"+r.content+"</"+r.tag+">"};function g(t,e,n,a){t.lastIndex=e;var r=t.exec(n);if(r&&a&&r[1]){var o=r[1].length;r.index+=o,r[0]=r[0].slice(o)}return r}function v(t,e,n,a,r,o){for(var c in n)if(!(!n.hasOwnProperty(c)||!n[c])){var u=n[c];u=Array.isArray(u)?u:[u];for(var x=0;x<u.length;++x){if(o&&o.cause==c+","+x)return;var w=u[x],P=w.inside,Z=!!w.lookbehind,G=!!w.greedy,ae=w.alias;if(G&&!w.pattern.global){var re=w.pattern.toString().match(/[imsuy]*$/)[0];w.pattern=RegExp(w.pattern.source,re+"g")}for(var U=w.pattern||w,k=a.next,C=r;k!==e.tail&&!(o&&C>=o.reach);C+=k.value.length,k=k.next){var L=k.value;if(e.length>t.length)return;if(!(L instanceof m)){var M=1,E;if(G){if(E=g(U,C,t,Z),!E||E.index>=t.length)break;var z=E.index,ie=E.index+E[0].length,T=C;for(T+=k.value.length;z>=T;)k=k.next,T+=k.value.length;if(T-=k.value.length,C=T,k.value instanceof m)continue;for(var D=k;D!==e.tail&&(T<ie||typeof D.value=="string");D=D.next)M++,T+=D.value.length;M--,L=t.slice(C,T),E.index-=C}else if(E=g(U,0,L,Z),!E)continue;var z=E.index,B=E[0],R=L.slice(0,z),q=L.slice(z+B.length),H=C+L.length;o&&H>o.reach&&(o.reach=H);var I=k.prev;R&&(I=d(e,I,R),C+=R.length),j(e,I,M);var se=new m(c,P?i.tokenize(B,P):B,ae,B);if(k=d(e,I,se),q&&d(e,k,q),M>1){var N={cause:c+","+x,reach:H};v(t,e,n,k.prev,C,N),o&&N.reach>o.reach&&(o.reach=N.reach)}}}}}}function b(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function d(t,e,n){var a=e.next,r={value:n,prev:e,next:a};return e.next=r,a.prev=r,t.length++,r}function j(t,e,n){for(var a=e.next,r=0;r<n&&a!==t.tail;r++)a=a.next;e.next=a,a.prev=e,t.length-=r}function $(t){for(var e=[],n=t.head.next;n!==t.tail;)e.push(n.value),n=n.next;return e}if(!l.document)return l.addEventListener&&(i.disableWorkerMessageHandler||l.addEventListener("message",function(t){var e=JSON.parse(t.data),n=e.language,a=e.code,r=e.immediateClose;l.postMessage(i.highlight(a,i.languages[n],n)),r&&l.close()},!1)),i;var A=i.util.currentScript();A&&(i.filename=A.src,A.hasAttribute("data-manual")&&(i.manual=!0));function f(){i.manual||i.highlightAll()}if(!i.manual){var F=document.readyState;F==="loading"||F==="interactive"&&A&&A.defer?document.addEventListener("DOMContentLoaded",f):window.requestAnimationFrame?window.requestAnimationFrame(f):window.setTimeout(f,16)}return i}(oe);typeof O<"u"&&O.exports&&(O.exports=s);typeof globalThis<"u"&&(globalThis.Prism=s);s.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};s.languages.markup.tag.inside["attr-value"].inside.entity=s.languages.markup.entity;s.languages.markup.doctype.inside["internal-subset"].inside=s.languages.markup;s.hooks.add("wrap",function(l){l.type==="entity"&&(l.attributes.title=l.content.replace(/&amp;/,"&"))});Object.defineProperty(s.languages.markup.tag,"addInlined",{value:function(p,h){var y={};y["language-"+h]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:s.languages[h]},y.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:y}};i["language-"+h]={pattern:/[\s\S]+/,inside:s.languages[h]};var m={};m[p]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return p}),"i"),lookbehind:!0,greedy:!0,inside:i},s.languages.insertBefore("markup","cdata",m)}});Object.defineProperty(s.languages.markup.tag,"addAttribute",{value:function(l,p){s.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+l+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[p,"language-"+p],inside:s.languages[p]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});s.languages.html=s.languages.markup;s.languages.mathml=s.languages.markup;s.languages.svg=s.languages.markup;s.languages.xml=s.languages.extend("markup",{});s.languages.ssml=s.languages.xml;s.languages.atom=s.languages.xml;s.languages.rss=s.languages.xml;(function(l){var p=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;l.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+p.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+p.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+p.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:p,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},l.languages.css.atrule.inside.rest=l.languages.css;var h=l.languages.markup;h&&(h.tag.addInlined("style","css"),h.tag.addAttribute("style","css"))})(s);s.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};s.languages.javascript=s.languages.extend("clike",{"class-name":[s.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});s.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;s.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:s.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:s.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:s.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:s.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:s.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});s.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:s.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});s.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});s.languages.markup&&(s.languages.markup.tag.addInlined("script","javascript"),s.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));s.languages.js=s.languages.javascript;(function(){if(typeof s>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var l="Loading\u2026",p=function(A,f){return"\u2716 Error "+A+" while fetching file: "+f},h="\u2716 Error: File does not exist or is empty",y={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},i="data-src-status",m="loading",g="loaded",v="failed",b="pre[data-src]:not(["+i+'="'+g+'"]):not(['+i+'="'+m+'"])';function d(A,f,F){var t=new XMLHttpRequest;t.open("GET",A,!0),t.onreadystatechange=function(){t.readyState==4&&(t.status<400&&t.responseText?f(t.responseText):t.status>=400?F(p(t.status,t.statusText)):F(h))},t.send(null)}function j(A){var f=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(A||"");if(f){var F=Number(f[1]),t=f[2],e=f[3];return t?e?[F,Number(e)]:[F,void 0]:[F,F]}}s.hooks.add("before-highlightall",function(A){A.selector+=", "+b}),s.hooks.add("before-sanity-check",function(A){var f=A.element;if(f.matches(b)){A.code="",f.setAttribute(i,m);var F=f.appendChild(document.createElement("CODE"));F.textContent=l;var t=f.getAttribute("data-src"),e=A.language;if(e==="none"){var n=(/\.(\w+)$/.exec(t)||[,"none"])[1];e=y[n]||n}s.util.setLanguage(F,e),s.util.setLanguage(f,e);var a=s.plugins.autoloader;a&&a.loadLanguages(e),d(t,function(r){f.setAttribute(i,g);var o=j(f.getAttribute("data-range"));if(o){var c=r.split(/\r\n?|\n/g),u=o[0],x=o[1]==null?c.length:o[1];u<0&&(u+=c.length),u=Math.max(0,Math.min(u-1,c.length)),x<0&&(x+=c.length),x=Math.max(0,Math.min(x,c.length)),r=c.slice(u,x).join(`
`),f.hasAttribute("data-start")||f.setAttribute("data-start",String(u+1))}F.textContent=r,s.highlightElement(F)},function(r){f.setAttribute(i,v),F.textContent=r})}}),s.plugins.fileHighlight={highlight:function(f){for(var F=(f||document).querySelectorAll(b),t=0,e;e=F[t++];)s.highlightElement(e)}};var $=!1;s.fileHighlight=function(){$||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),$=!0),s.plugins.fileHighlight.highlight.apply(this,arguments)}})()});_();_();var ee=W(ue());var te=W(V());_();(function(l){var p=l.util.clone(l.languages.javascript),h="(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";function y(g,v){return g=g.replace(/<S>/g,function(){return"(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)"}).replace(/<BRACES>/g,function(){return"(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})"}).replace(/<SPREAD>/g,function(){return h}),RegExp(g,v)}h=y(h).source,l.languages.jsx=l.languages.extend("markup",p),l.languages.jsx.tag.pattern=y(`</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:"(?:\\\\[^]|[^\\\\"])*"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>`),l.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,l.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,l.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,l.languages.jsx.tag.inside.comment=p.comment,l.languages.insertBefore("inside","attr-name",{spread:{pattern:y("<SPREAD>"),inside:l.languages.jsx}},l.languages.jsx.tag),l.languages.insertBefore("inside","special-attr",{script:{pattern:y("=<BRACES>"),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:l.languages.jsx}}},l.languages.jsx.tag);var i=function(g){return g?typeof g=="string"?g:typeof g.content=="string"?g.content:g.content.map(i).join(""):""},m=function(g){for(var v=[],b=0;b<g.length;b++){var d=g[b],j=!1;if(typeof d!="string"&&(d.type==="tag"&&d.content[0]&&d.content[0].type==="tag"?d.content[0].content[0].content==="</"?v.length>0&&v[v.length-1].tagName===i(d.content[0].content[1])&&v.pop():d.content[d.content.length-1].content==="/>"||v.push({tagName:i(d.content[0].content[1]),openedBraces:0}):v.length>0&&d.type==="punctuation"&&d.content==="{"?v[v.length-1].openedBraces++:v.length>0&&v[v.length-1].openedBraces>0&&d.type==="punctuation"&&d.content==="}"?v[v.length-1].openedBraces--:j=!0),(j||typeof d=="string")&&v.length>0&&v[v.length-1].openedBraces===0){var $=i(d);b<g.length-1&&(typeof g[b+1]=="string"||g[b+1].type==="plain-text")&&($+=i(g[b+1]),g.splice(b+1,1)),b>0&&(typeof g[b-1]=="string"||g[b-1].type==="plain-text")&&($=i(g[b-1])+$,g.splice(b-1,1),b--),g[b]=new l.Token("plain-text",$,null,$)}d.content&&typeof d.content!="string"&&m(d.content)}};l.hooks.add("after-tokenize",function(g){g.language!=="jsx"&&g.language!=="tsx"||m(g.tokens)})})(Prism);_();typeof Prism<"u"&&typeof document<"u"&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Prism.plugins.UnescapedMarkup=!0,Prism.hooks.add("before-highlightall",function(l){l.selector+=', [class*="lang-"] script[type="text/plain"], [class*="language-"] script[type="text/plain"], script[type="text/plain"][class*="lang-"], script[type="text/plain"][class*="language-"]'}),Prism.hooks.add("before-sanity-check",function(l){var p=l.element;if(p.matches('script[type="text/plain"]')){var h=document.createElement("code"),y=document.createElement("pre");y.className=h.className=p.className;var i=p.dataset;return Object.keys(i||{}).forEach(function(g){Object.prototype.hasOwnProperty.call(i,g)&&(y.dataset[g]=i[g])}),h.textContent=l.code=l.code.replace(/&lt;\/script(?:>|&gt;)/gi,"<\/script>"),y.appendChild(h),p.parentNode.replaceChild(y,p),void(l.element=h)}if(!l.code){var m=p.childNodes;m.length===1&&m[0].nodeName=="#comment"&&(p.textContent=l.code=m[0].textContent)}}));function ne(){let{attributes:l,html:p}=Y(),{title:h,description:y,miniature:i,text:m}=l;return(0,ee.useEffect)(()=>{te.default.highlightAll()},[]),S.createElement(K,{className:"mt-7"},S.createElement(X,{to:`/${i.split(".png",1)}`},S.createElement(J,{src:`${Q}/uploads/${i}`,className:"rounded-md w-[20%]"})),S.createElement("h1",{className:"text-2xl text-center font-bold mb-5"},h),S.createElement("h2",{className:"text-xl text-center font-bold mb-3"},y),S.createElement("p",null,m),S.createElement("div",{dangerouslySetInnerHTML:{__html:p}}))}export{ne as default};
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */