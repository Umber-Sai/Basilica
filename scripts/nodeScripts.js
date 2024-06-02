/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(ie,e){"use strict";var oe=[],r=Object.getPrototypeOf,ae=oe.slice,g=oe.flat?function(e){return oe.flat.call(e)}:function(e){return oe.concat.apply([],e)},s=oe.push,se=oe.indexOf,n={},i=n.toString,ue=n.hasOwnProperty,o=ue.toString,a=o.call(Object),le={},v=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},y=function(e){return null!=e&&e===e.window},C=ie.document,u={type:!0,src:!0,nonce:!0,noModule:!0};function m(e,t,n){var r,i,o=(n=n||C).createElement("script");if(o.text=e,t)for(r in u)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[i.call(e)]||"object":typeof e}var t="3.7.1",l=/HTML$/i,ce=function(e,t){return new ce.fn.init(e,t)};function c(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!v(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}function fe(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}ce.fn=ce.prototype={jquery:t,constructor:ce,length:0,toArray:function(){return ae.call(this)},get:function(e){return null==e?ae.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=ce.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return ce.each(this,e)},map:function(n){return this.pushStack(ce.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(ae.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(ce.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(ce.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:oe.sort,splice:oe.splice},ce.extend=ce.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||v(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(ce.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||ce.isPlainObject(n)?n:{},i=!1,a[t]=ce.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},ce.extend({expando:"jQuery"+(t+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==i.call(e))&&(!(t=r(e))||"function"==typeof(n=ue.call(t,"constructor")&&t.constructor)&&o.call(n)===a)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){m(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(c(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},text:function(e){var t,n="",r=0,i=e.nodeType;if(!i)while(t=e[r++])n+=ce.text(t);return 1===i||11===i?e.textContent:9===i?e.documentElement.textContent:3===i||4===i?e.nodeValue:n},makeArray:function(e,t){var n=t||[];return null!=e&&(c(Object(e))?ce.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:se.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!l.test(t||n&&n.nodeName||"HTML")},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(c(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:le}),"function"==typeof Symbol&&(ce.fn[Symbol.iterator]=oe[Symbol.iterator]),ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var pe=oe.pop,de=oe.sort,he=oe.splice,ge="[\\x20\\t\\r\\n\\f]",ve=new RegExp("^"+ge+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ge+"+$","g");ce.contains=function(e,t){var n=t&&t.parentNode;return e===n||!(!n||1!==n.nodeType||!(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};var f=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function p(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}ce.escapeSelector=function(e){return(e+"").replace(f,p)};var ye=C,me=s;!function(){var e,b,w,o,a,T,r,C,d,i,k=me,S=ce.expando,E=0,n=0,s=W(),c=W(),u=W(),h=W(),l=function(e,t){return e===t&&(a=!0),0},f="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",t="(?:\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",p="\\["+ge+"*("+t+")(?:"+ge+"*([*^$|!~]?=)"+ge+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+t+"))|)"+ge+"*\\]",g=":("+t+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+p+")*)|.*)\\)|)",v=new RegExp(ge+"+","g"),y=new RegExp("^"+ge+"*,"+ge+"*"),m=new RegExp("^"+ge+"*([>+~]|"+ge+")"+ge+"*"),x=new RegExp(ge+"|>"),j=new RegExp(g),A=new RegExp("^"+t+"$"),D={ID:new RegExp("^#("+t+")"),CLASS:new RegExp("^\\.("+t+")"),TAG:new RegExp("^("+t+"|[*])"),ATTR:new RegExp("^"+p),PSEUDO:new RegExp("^"+g),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ge+"*(even|odd|(([+-]|)(\\d*)n|)"+ge+"*(?:([+-]|)"+ge+"*(\\d+)|))"+ge+"*\\)|)","i"),bool:new RegExp("^(?:"+f+")$","i"),needsContext:new RegExp("^"+ge+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ge+"*((?:-\\d)?\\d*)"+ge+"*\\)|)(?=[^-]|$)","i")},N=/^(?:input|select|textarea|button)$/i,q=/^h\d$/i,L=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,H=/[+~]/,O=new RegExp("\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\([^\\r\\n\\f])","g"),P=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},M=function(){V()},R=J(function(e){return!0===e.disabled&&fe(e,"fieldset")},{dir:"parentNode",next:"legend"});try{k.apply(oe=ae.call(ye.childNodes),ye.childNodes),oe[ye.childNodes.length].nodeType}catch(e){k={apply:function(e,t){me.apply(e,ae.call(t))},call:function(e){me.apply(e,ae.call(arguments,1))}}}function I(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(V(e),e=e||T,C)){if(11!==p&&(u=L.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return k.call(n,a),n}else if(f&&(a=f.getElementById(i))&&I.contains(e,a)&&a.id===i)return k.call(n,a),n}else{if(u[2])return k.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&e.getElementsByClassName)return k.apply(n,e.getElementsByClassName(i)),n}if(!(h[t+" "]||d&&d.test(t))){if(c=t,f=e,1===p&&(x.test(t)||m.test(t))){(f=H.test(t)&&U(e.parentNode)||e)==e&&le.scope||((s=e.getAttribute("id"))?s=ce.escapeSelector(s):e.setAttribute("id",s=S)),o=(l=Y(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+Q(l[o]);c=l.join(",")}try{return k.apply(n,f.querySelectorAll(c)),n}catch(e){h(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return re(t.replace(ve,"$1"),e,n,r)}function W(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function F(e){return e[S]=!0,e}function $(e){var t=T.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function B(t){return function(e){return fe(e,"input")&&e.type===t}}function _(t){return function(e){return(fe(e,"input")||fe(e,"button"))&&e.type===t}}function z(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&R(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function X(a){return F(function(o){return o=+o,F(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function U(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function V(e){var t,n=e?e.ownerDocument||e:ye;return n!=T&&9===n.nodeType&&n.documentElement&&(r=(T=n).documentElement,C=!ce.isXMLDoc(T),i=r.matches||r.webkitMatchesSelector||r.msMatchesSelector,r.msMatchesSelector&&ye!=T&&(t=T.defaultView)&&t.top!==t&&t.addEventListener("unload",M),le.getById=$(function(e){return r.appendChild(e).id=ce.expando,!T.getElementsByName||!T.getElementsByName(ce.expando).length}),le.disconnectedMatch=$(function(e){return i.call(e,"*")}),le.scope=$(function(){return T.querySelectorAll(":scope")}),le.cssHas=$(function(){try{return T.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),le.getById?(b.filter.ID=function(e){var t=e.replace(O,P);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(O,P);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},b.find.CLASS=function(e,t){if("undefined"!=typeof t.getElementsByClassName&&C)return t.getElementsByClassName(e)},d=[],$(function(e){var t;r.appendChild(e).innerHTML="<a id='"+S+"' href='' disabled='disabled'></a><select id='"+S+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+ge+"*(?:value|"+f+")"),e.querySelectorAll("[id~="+S+"-]").length||d.push("~="),e.querySelectorAll("a#"+S+"+*").length||d.push(".#.+[+~]"),e.querySelectorAll(":checked").length||d.push(":checked"),(t=T.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),r.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&d.push(":enabled",":disabled"),(t=T.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||d.push("\\["+ge+"*name"+ge+"*="+ge+"*(?:''|\"\")")}),le.cssHas||d.push(":has"),d=d.length&&new RegExp(d.join("|")),l=function(e,t){if(e===t)return a=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!le.sortDetached&&t.compareDocumentPosition(e)===n?e===T||e.ownerDocument==ye&&I.contains(ye,e)?-1:t===T||t.ownerDocument==ye&&I.contains(ye,t)?1:o?se.call(o,e)-se.call(o,t):0:4&n?-1:1)}),T}for(e in I.matches=function(e,t){return I(e,null,null,t)},I.matchesSelector=function(e,t){if(V(e),C&&!h[t+" "]&&(!d||!d.test(t)))try{var n=i.call(e,t);if(n||le.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){h(t,!0)}return 0<I(t,T,null,[e]).length},I.contains=function(e,t){return(e.ownerDocument||e)!=T&&V(e),ce.contains(e,t)},I.attr=function(e,t){(e.ownerDocument||e)!=T&&V(e);var n=b.attrHandle[t.toLowerCase()],r=n&&ue.call(b.attrHandle,t.toLowerCase())?n(e,t,!C):void 0;return void 0!==r?r:e.getAttribute(t)},I.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ce.uniqueSort=function(e){var t,n=[],r=0,i=0;if(a=!le.sortStable,o=!le.sortStable&&ae.call(e,0),de.call(e,l),a){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)he.call(e,n[r],1)}return o=null,e},ce.fn.uniqueSort=function(){return this.pushStack(ce.uniqueSort(ae.apply(this)))},(b=ce.expr={cacheLength:50,createPseudo:F,match:D,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(O,P),e[3]=(e[3]||e[4]||e[5]||"").replace(O,P),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||I.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&I.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return D.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&j.test(n)&&(t=Y(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(O,P).toLowerCase();return"*"===e?function(){return!0}:function(e){return fe(e,t)}},CLASS:function(e){var t=s[e+" "];return t||(t=new RegExp("(^|"+ge+")"+e+"("+ge+"|$)"))&&s(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=I.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(v," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(d,e,t,h,g){var v="nth"!==d.slice(0,3),y="last"!==d.slice(-4),m="of-type"===e;return 1===h&&0===g?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u=v!==y?"nextSibling":"previousSibling",l=e.parentNode,c=m&&e.nodeName.toLowerCase(),f=!n&&!m,p=!1;if(l){if(v){while(u){o=e;while(o=o[u])if(m?fe(o,c):1===o.nodeType)return!1;s=u="only"===d&&!s&&"nextSibling"}return!0}if(s=[y?l.firstChild:l.lastChild],y&&f){p=(a=(r=(i=l[S]||(l[S]={}))[d]||[])[0]===E&&r[1])&&r[2],o=a&&l.childNodes[a];while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if(1===o.nodeType&&++p&&o===e){i[d]=[E,a,p];break}}else if(f&&(p=a=(r=(i=e[S]||(e[S]={}))[d]||[])[0]===E&&r[1]),!1===p)while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if((m?fe(o,c):1===o.nodeType)&&++p&&(f&&((i=o[S]||(o[S]={}))[d]=[E,p]),o===e))break;return(p-=g)===h||p%h==0&&0<=p/h}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||I.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?F(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=se.call(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:F(function(e){var r=[],i=[],s=ne(e.replace(ve,"$1"));return s[S]?F(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:F(function(t){return function(e){return 0<I(t,e).length}}),contains:F(function(t){return t=t.replace(O,P),function(e){return-1<(e.textContent||ce.text(e)).indexOf(t)}}),lang:F(function(n){return A.test(n||"")||I.error("unsupported lang: "+n),n=n.replace(O,P).toLowerCase(),function(e){var t;do{if(t=C?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=ie.location&&ie.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===r},focus:function(e){return e===function(){try{return T.activeElement}catch(e){}}()&&T.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},enabled:z(!1),disabled:z(!0),checked:function(e){return fe(e,"input")&&!!e.checked||fe(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return q.test(e.nodeName)},input:function(e){return N.test(e.nodeName)},button:function(e){return fe(e,"input")&&"button"===e.type||fe(e,"button")},text:function(e){var t;return fe(e,"input")&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:X(function(){return[0]}),last:X(function(e,t){return[t-1]}),eq:X(function(e,t,n){return[n<0?n+t:n]}),even:X(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:X(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:X(function(e,t,n){var r;for(r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:X(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=B(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=_(e);function G(){}function Y(e,t){var n,r,i,o,a,s,u,l=c[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=y.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=m.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(ve," ")}),a=a.slice(n.length)),b.filter)!(r=D[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?I.error(e):c(e,s).slice(0)}function Q(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function J(a,e,t){var s=e.dir,u=e.next,l=u||s,c=t&&"parentNode"===l,f=n++;return e.first?function(e,t,n){while(e=e[s])if(1===e.nodeType||c)return a(e,t,n);return!1}:function(e,t,n){var r,i,o=[E,f];if(n){while(e=e[s])if((1===e.nodeType||c)&&a(e,t,n))return!0}else while(e=e[s])if(1===e.nodeType||c)if(i=e[S]||(e[S]={}),u&&fe(e,u))e=e[s]||e;else{if((r=i[l])&&r[0]===E&&r[1]===f)return o[2]=r[2];if((i[l]=o)[2]=a(e,t,n))return!0}return!1}}function K(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Z(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function ee(d,h,g,v,y,e){return v&&!v[S]&&(v=ee(v)),y&&!y[S]&&(y=ee(y,e)),F(function(e,t,n,r){var i,o,a,s,u=[],l=[],c=t.length,f=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)I(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),p=!d||!e&&h?f:Z(f,u,d,n,r);if(g?g(p,s=y||(e?d:c||v)?[]:t,n,r):s=p,v){i=Z(s,l),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(s[l[o]]=!(p[l[o]]=a))}if(e){if(y||d){if(y){i=[],o=s.length;while(o--)(a=s[o])&&i.push(p[o]=a);y(null,s=[],i,r)}o=s.length;while(o--)(a=s[o])&&-1<(i=y?se.call(e,a):u[o])&&(e[i]=!(t[i]=a))}}else s=Z(s===t?s.splice(c,s.length):s),y?y(null,t,s,r):k.apply(t,s)})}function te(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=J(function(e){return e===i},a,!0),l=J(function(e){return-1<se.call(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!=w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[J(K(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return ee(1<s&&K(c),1<s&&Q(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ve,"$1"),t,s<n&&te(e.slice(s,n)),n<r&&te(e=e.slice(n)),n<r&&Q(e))}c.push(t)}return K(c)}function ne(e,t){var n,v,y,m,x,r,i=[],o=[],a=u[e+" "];if(!a){t||(t=Y(e)),n=t.length;while(n--)(a=te(t[n]))[S]?i.push(a):o.push(a);(a=u(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=E+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==T||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==T||(V(o),n=!C);while(s=v[a++])if(s(o,t||T,n)){k.call(r,o);break}i&&(E=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=pe.call(r));f=Z(f)}k.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&ce.uniqueSort(r)}return i&&(E=h,w=p),c},m?F(r):r))).selector=e}return a}function re(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&Y(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&C&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(O,P),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=D.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(O,P),H.test(o[0].type)&&U(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&Q(o)))return k.apply(n,r),n;break}}}return(l||ne(e,c))(r,t,!C,n,!t||H.test(e)&&U(t.parentNode)||t),n}G.prototype=b.filters=b.pseudos,b.setFilters=new G,le.sortStable=S.split("").sort(l).join("")===S,V(),le.sortDetached=$(function(e){return 1&e.compareDocumentPosition(T.createElement("fieldset"))}),ce.find=I,ce.expr[":"]=ce.expr.pseudos,ce.unique=ce.uniqueSort,I.compile=ne,I.select=re,I.setDocument=V,I.tokenize=Y,I.escape=ce.escapeSelector,I.getText=ce.text,I.isXML=ce.isXMLDoc,I.selectors=ce.expr,I.support=ce.support,I.uniqueSort=ce.uniqueSort}();var d=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&ce(e).is(n))break;r.push(e)}return r},h=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},b=ce.expr.match.needsContext,w=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function T(e,n,r){return v(n)?ce.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?ce.grep(e,function(e){return e===n!==r}):"string"!=typeof n?ce.grep(e,function(e){return-1<se.call(n,e)!==r}):ce.filter(n,e,r)}ce.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?ce.find.matchesSelector(r,e)?[r]:[]:ce.find.matches(e,ce.grep(t,function(e){return 1===e.nodeType}))},ce.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(ce(e).filter(function(){for(t=0;t<r;t++)if(ce.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)ce.find(e,i[t],n);return 1<r?ce.uniqueSort(n):n},filter:function(e){return this.pushStack(T(this,e||[],!1))},not:function(e){return this.pushStack(T(this,e||[],!0))},is:function(e){return!!T(this,"string"==typeof e&&b.test(e)?ce(e):e||[],!1).length}});var k,S=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(ce.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||k,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:S.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof ce?t[0]:t,ce.merge(this,ce.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:C,!0)),w.test(r[1])&&ce.isPlainObject(t))for(r in t)v(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=C.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==n.ready?n.ready(e):e(ce):ce.makeArray(e,this)}).prototype=ce.fn,k=ce(C);var E=/^(?:parents|prev(?:Until|All))/,j={children:!0,contents:!0,next:!0,prev:!0};function A(e,t){while((e=e[t])&&1!==e.nodeType);return e}ce.fn.extend({has:function(e){var t=ce(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(ce.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&ce(e);if(!b.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&ce.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?ce.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?se.call(ce(e),this[0]):se.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(ce.uniqueSort(ce.merge(this.get(),ce(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ce.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return d(e,"parentNode")},parentsUntil:function(e,t,n){return d(e,"parentNode",n)},next:function(e){return A(e,"nextSibling")},prev:function(e){return A(e,"previousSibling")},nextAll:function(e){return d(e,"nextSibling")},prevAll:function(e){return d(e,"previousSibling")},nextUntil:function(e,t,n){return d(e,"nextSibling",n)},prevUntil:function(e,t,n){return d(e,"previousSibling",n)},siblings:function(e){return h((e.parentNode||{}).firstChild,e)},children:function(e){return h(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(fe(e,"template")&&(e=e.content||e),ce.merge([],e.childNodes))}},function(r,i){ce.fn[r]=function(e,t){var n=ce.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=ce.filter(t,n)),1<this.length&&(j[r]||ce.uniqueSort(n),E.test(r)&&n.reverse()),this.pushStack(n)}});var D=/[^\x20\t\r\n\f]+/g;function N(e){return e}function q(e){throw e}function L(e,t,n,r){var i;try{e&&v(i=e.promise)?i.call(e).done(t).fail(n):e&&v(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}ce.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},ce.each(e.match(D)||[],function(e,t){n[t]=!0}),n):ce.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){ce.each(e,function(e,t){v(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==x(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return ce.each(arguments,function(e,t){var n;while(-1<(n=ce.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<ce.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},ce.extend({Deferred:function(e){var o=[["notify","progress",ce.Callbacks("memory"),ce.Callbacks("memory"),2],["resolve","done",ce.Callbacks("once memory"),ce.Callbacks("once memory"),0,"resolved"],["reject","fail",ce.Callbacks("once memory"),ce.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return ce.Deferred(function(r){ce.each(o,function(e,t){var n=v(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&v(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,v(t)?s?t.call(e,l(u,o,N,s),l(u,o,q,s)):(u++,t.call(e,l(u,o,N,s),l(u,o,q,s),l(u,o,N,o.notifyWith))):(a!==N&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){ce.Deferred.exceptionHook&&ce.Deferred.exceptionHook(e,t.error),u<=i+1&&(a!==q&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(ce.Deferred.getErrorHook?t.error=ce.Deferred.getErrorHook():ce.Deferred.getStackHook&&(t.error=ce.Deferred.getStackHook()),ie.setTimeout(t))}}return ce.Deferred(function(e){o[0][3].add(l(0,e,v(r)?r:N,e.notifyWith)),o[1][3].add(l(0,e,v(t)?t:N)),o[2][3].add(l(0,e,v(n)?n:q))}).promise()},promise:function(e){return null!=e?ce.extend(e,a):a}},s={};return ce.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=ae.call(arguments),o=ce.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?ae.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(L(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||v(i[t]&&i[t].then)))return o.then();while(t--)L(i[t],a(t),o.reject);return o.promise()}});var H=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;ce.Deferred.exceptionHook=function(e,t){ie.console&&ie.console.warn&&e&&H.test(e.name)&&ie.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},ce.readyException=function(e){ie.setTimeout(function(){throw e})};var O=ce.Deferred();function P(){C.removeEventListener("DOMContentLoaded",P),ie.removeEventListener("load",P),ce.ready()}ce.fn.ready=function(e){return O.then(e)["catch"](function(e){ce.readyException(e)}),this},ce.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--ce.readyWait:ce.isReady)||(ce.isReady=!0)!==e&&0<--ce.readyWait||O.resolveWith(C,[ce])}}),ce.ready.then=O.then,"complete"===C.readyState||"loading"!==C.readyState&&!C.documentElement.doScroll?ie.setTimeout(ce.ready):(C.addEventListener("DOMContentLoaded",P),ie.addEventListener("load",P));var M=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n))for(s in i=!0,n)M(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,v(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(ce(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},R=/^-ms-/,I=/-([a-z])/g;function W(e,t){return t.toUpperCase()}function F(e){return e.replace(R,"ms-").replace(I,W)}var $=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function B(){this.expando=ce.expando+B.uid++}B.uid=1,B.prototype={cache:function(e){var t=e[this.expando];return t||(t={},$(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[F(t)]=n;else for(r in t)i[F(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][F(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(F):(t=F(t))in r?[t]:t.match(D)||[]).length;while(n--)delete r[t[n]]}(void 0===t||ce.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!ce.isEmptyObject(t)}};var _=new B,z=new B,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,U=/[A-Z]/g;function V(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(U,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:X.test(i)?JSON.parse(i):i)}catch(e){}z.set(e,t,n)}else n=void 0;return n}ce.extend({hasData:function(e){return z.hasData(e)||_.hasData(e)},data:function(e,t,n){return z.access(e,t,n)},removeData:function(e,t){z.remove(e,t)},_data:function(e,t,n){return _.access(e,t,n)},_removeData:function(e,t){_.remove(e,t)}}),ce.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=z.get(o),1===o.nodeType&&!_.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=F(r.slice(5)),V(o,r,i[r]));_.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){z.set(this,n)}):M(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=z.get(o,n))?t:void 0!==(t=V(o,n))?t:void 0;this.each(function(){z.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){z.remove(this,e)})}}),ce.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=_.get(e,t),n&&(!r||Array.isArray(n)?r=_.access(e,t,ce.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=ce.queue(e,t),r=n.length,i=n.shift(),o=ce._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){ce.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return _.get(e,n)||_.access(e,n,{empty:ce.Callbacks("once memory").add(function(){_.remove(e,[t+"queue",n])})})}}),ce.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?ce.queue(this[0],t):void 0===n?this:this.each(function(){var e=ce.queue(this,t,n);ce._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&ce.dequeue(this,t)})},dequeue:function(e){return this.each(function(){ce.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=ce.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=_.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var G=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Y=new RegExp("^(?:([+-])=|)("+G+")([a-z%]*)$","i"),Q=["Top","Right","Bottom","Left"],J=C.documentElement,K=function(e){return ce.contains(e.ownerDocument,e)},Z={composed:!0};J.getRootNode&&(K=function(e){return ce.contains(e.ownerDocument,e)||e.getRootNode(Z)===e.ownerDocument});var ee=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&K(e)&&"none"===ce.css(e,"display")};function te(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return ce.css(e,t,"")},u=s(),l=n&&n[3]||(ce.cssNumber[t]?"":"px"),c=e.nodeType&&(ce.cssNumber[t]||"px"!==l&&+u)&&Y.exec(ce.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)ce.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,ce.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ne={};function re(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=_.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ee(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ne[s])||(o=a.body.appendChild(a.createElement(s)),u=ce.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ne[s]=u)))):"none"!==n&&(l[c]="none",_.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}ce.fn.extend({show:function(){return re(this,!0)},hide:function(){return re(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ee(this)?ce(this).show():ce(this).hide()})}});var xe,be,we=/^(?:checkbox|radio)$/i,Te=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ce=/^$|^module$|\/(?:java|ecma)script/i;xe=C.createDocumentFragment().appendChild(C.createElement("div")),(be=C.createElement("input")).setAttribute("type","radio"),be.setAttribute("checked","checked"),be.setAttribute("name","t"),xe.appendChild(be),le.checkClone=xe.cloneNode(!0).cloneNode(!0).lastChild.checked,xe.innerHTML="<textarea>x</textarea>",le.noCloneChecked=!!xe.cloneNode(!0).lastChild.defaultValue,xe.innerHTML="<option></option>",le.option=!!xe.lastChild;var ke={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Se(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&fe(e,t)?ce.merge([e],n):n}function Ee(e,t){for(var n=0,r=e.length;n<r;n++)_.set(e[n],"globalEval",!t||_.get(t[n],"globalEval"))}ke.tbody=ke.tfoot=ke.colgroup=ke.caption=ke.thead,ke.th=ke.td,le.option||(ke.optgroup=ke.option=[1,"<select multiple='multiple'>","</select>"]);var je=/<|&#?\w+;/;function Ae(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))ce.merge(p,o.nodeType?[o]:o);else if(je.test(o)){a=a||f.appendChild(t.createElement("div")),s=(Te.exec(o)||["",""])[1].toLowerCase(),u=ke[s]||ke._default,a.innerHTML=u[1]+ce.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;ce.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<ce.inArray(o,r))i&&i.push(o);else if(l=K(o),a=Se(f.appendChild(o),"script"),l&&Ee(a),n){c=0;while(o=a[c++])Ce.test(o.type||"")&&n.push(o)}return f}var De=/^([^.]*)(?:\.(.+)|)/;function Ne(){return!0}function qe(){return!1}function Le(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Le(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=qe;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return ce().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=ce.guid++)),e.each(function(){ce.event.add(this,t,i,r,n)})}function He(e,r,t){t?(_.set(e,r,!1),ce.event.add(e,r,{namespace:!1,handler:function(e){var t,n=_.get(this,r);if(1&e.isTrigger&&this[r]){if(n)(ce.event.special[r]||{}).delegateType&&e.stopPropagation();else if(n=ae.call(arguments),_.set(this,r,n),this[r](),t=_.get(this,r),_.set(this,r,!1),n!==t)return e.stopImmediatePropagation(),e.preventDefault(),t}else n&&(_.set(this,r,ce.event.trigger(n[0],n.slice(1),this)),e.stopPropagation(),e.isImmediatePropagationStopped=Ne)}})):void 0===_.get(e,r)&&ce.event.add(e,r,Ne)}ce.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.get(t);if($(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&ce.find.matchesSelector(J,i),n.guid||(n.guid=ce.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof ce&&ce.event.triggered!==e.type?ce.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(D)||[""]).length;while(l--)d=g=(s=De.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=ce.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=ce.event.special[d]||{},c=ce.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&ce.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),ce.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.hasData(e)&&_.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(D)||[""]).length;while(l--)if(d=g=(s=De.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=ce.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||ce.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)ce.event.remove(e,d+t[l],n,r,!0);ce.isEmptyObject(u)&&_.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=ce.event.fix(e),l=(_.get(this,"events")||Object.create(null))[u.type]||[],c=ce.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=ce.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((ce.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<ce(i,this).index(l):ce.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(ce.Event.prototype,t,{enumerable:!0,configurable:!0,get:v(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[ce.expando]?e:new ce.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click",!0),!1},trigger:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click"),!0},_default:function(e){var t=e.target;return we.test(t.type)&&t.click&&fe(t,"input")&&_.get(t,"click")||fe(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},ce.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},ce.Event=function(e,t){if(!(this instanceof ce.Event))return new ce.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ne:qe,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&ce.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[ce.expando]=!0},ce.Event.prototype={constructor:ce.Event,isDefaultPrevented:qe,isPropagationStopped:qe,isImmediatePropagationStopped:qe,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ne,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ne,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ne,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},ce.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},ce.event.addProp),ce.each({focus:"focusin",blur:"focusout"},function(r,i){function o(e){if(C.documentMode){var t=_.get(this,"handle"),n=ce.event.fix(e);n.type="focusin"===e.type?"focus":"blur",n.isSimulated=!0,t(e),n.target===n.currentTarget&&t(n)}else ce.event.simulate(i,e.target,ce.event.fix(e))}ce.event.special[r]={setup:function(){var e;if(He(this,r,!0),!C.documentMode)return!1;(e=_.get(this,i))||this.addEventListener(i,o),_.set(this,i,(e||0)+1)},trigger:function(){return He(this,r),!0},teardown:function(){var e;if(!C.documentMode)return!1;(e=_.get(this,i)-1)?_.set(this,i,e):(this.removeEventListener(i,o),_.remove(this,i))},_default:function(e){return _.get(e.target,r)},delegateType:i},ce.event.special[i]={setup:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i);n||(C.documentMode?this.addEventListener(i,o):e.addEventListener(r,o,!0)),_.set(t,i,(n||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i)-1;n?_.set(t,i,n):(C.documentMode?this.removeEventListener(i,o):e.removeEventListener(r,o,!0),_.remove(t,i))}}}),ce.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){ce.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||ce.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),ce.fn.extend({on:function(e,t,n,r){return Le(this,e,t,n,r)},one:function(e,t,n,r){return Le(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,ce(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=qe),this.each(function(){ce.event.remove(this,e,n,t)})}});var Oe=/<script|<style|<link/i,Pe=/checked\s*(?:[^=]|=\s*.checked.)/i,Me=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Re(e,t){return fe(e,"table")&&fe(11!==t.nodeType?t:t.firstChild,"tr")&&ce(e).children("tbody")[0]||e}function Ie(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function We(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Fe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(_.hasData(e)&&(s=_.get(e).events))for(i in _.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)ce.event.add(t,i,s[i][n]);z.hasData(e)&&(o=z.access(e),a=ce.extend({},o),z.set(t,a))}}function $e(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=v(d);if(h||1<f&&"string"==typeof d&&!le.checkClone&&Pe.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),$e(t,r,i,o)});if(f&&(t=(e=Ae(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=ce.map(Se(e,"script"),Ie)).length;c<f;c++)u=e,c!==p&&(u=ce.clone(u,!0,!0),s&&ce.merge(a,Se(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,ce.map(a,We),c=0;c<s;c++)u=a[c],Ce.test(u.type||"")&&!_.access(u,"globalEval")&&ce.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?ce._evalUrl&&!u.noModule&&ce._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):m(u.textContent.replace(Me,""),u,l))}return n}function Be(e,t,n){for(var r,i=t?ce.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||ce.cleanData(Se(r)),r.parentNode&&(n&&K(r)&&Ee(Se(r,"script")),r.parentNode.removeChild(r));return e}ce.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=K(e);if(!(le.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ce.isXMLDoc(e)))for(a=Se(c),r=0,i=(o=Se(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&we.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||Se(e),a=a||Se(c),r=0,i=o.length;r<i;r++)Fe(o[r],a[r]);else Fe(e,c);return 0<(a=Se(c,"script")).length&&Ee(a,!f&&Se(e,"script")),c},cleanData:function(e){for(var t,n,r,i=ce.event.special,o=0;void 0!==(n=e[o]);o++)if($(n)){if(t=n[_.expando]){if(t.events)for(r in t.events)i[r]?ce.event.remove(n,r):ce.removeEvent(n,r,t.handle);n[_.expando]=void 0}n[z.expando]&&(n[z.expando]=void 0)}}}),ce.fn.extend({detach:function(e){return Be(this,e,!0)},remove:function(e){return Be(this,e)},text:function(e){return M(this,function(e){return void 0===e?ce.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return $e(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Re(this,e).appendChild(e)})},prepend:function(){return $e(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Re(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(ce.cleanData(Se(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return ce.clone(this,e,t)})},html:function(e){return M(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Oe.test(e)&&!ke[(Te.exec(e)||["",""])[1].toLowerCase()]){e=ce.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(ce.cleanData(Se(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return $e(this,arguments,function(e){var t=this.parentNode;ce.inArray(this,n)<0&&(ce.cleanData(Se(this)),t&&t.replaceChild(e,this))},n)}}),ce.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){ce.fn[e]=function(e){for(var t,n=[],r=ce(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),ce(r[o])[a](t),s.apply(n,t.get());return this.pushStack(n)}});var _e=new RegExp("^("+G+")(?!px)[a-z%]+$","i"),ze=/^--/,Xe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=ie),t.getComputedStyle(e)},Ue=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ve=new RegExp(Q.join("|"),"i");function Ge(e,t,n){var r,i,o,a,s=ze.test(t),u=e.style;return(n=n||Xe(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace(ve,"$1")||void 0),""!==a||K(e)||(a=ce.style(e,t)),!le.pixelBoxStyles()&&_e.test(a)&&Ve.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function Ye(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",J.appendChild(u).appendChild(l);var e=ie.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),J.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=C.createElement("div"),l=C.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",le.clearCloneStyle="content-box"===l.style.backgroundClip,ce.extend(le,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=C.createElement("table"),t=C.createElement("tr"),n=C.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="box-sizing:content-box;border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",J.appendChild(e).appendChild(t).appendChild(n),r=ie.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,J.removeChild(e)),a}}))}();var Qe=["Webkit","Moz","ms"],Je=C.createElement("div").style,Ke={};function Ze(e){var t=ce.cssProps[e]||Ke[e];return t||(e in Je?e:Ke[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Qe.length;while(n--)if((e=Qe[n]+t)in Je)return e}(e)||e)}var et=/^(none|table(?!-c[ea]).+)/,tt={position:"absolute",visibility:"hidden",display:"block"},nt={letterSpacing:"0",fontWeight:"400"};function rt(e,t,n){var r=Y.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function it(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0,l=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(l+=ce.css(e,n+Q[a],!0,i)),r?("content"===n&&(u-=ce.css(e,"padding"+Q[a],!0,i)),"margin"!==n&&(u-=ce.css(e,"border"+Q[a]+"Width",!0,i))):(u+=ce.css(e,"padding"+Q[a],!0,i),"padding"!==n?u+=ce.css(e,"border"+Q[a]+"Width",!0,i):s+=ce.css(e,"border"+Q[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u+l}function ot(e,t,n){var r=Xe(e),i=(!le.boxSizingReliable()||n)&&"border-box"===ce.css(e,"boxSizing",!1,r),o=i,a=Ge(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(_e.test(a)){if(!n)return a;a="auto"}return(!le.boxSizingReliable()&&i||!le.reliableTrDimensions()&&fe(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===ce.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===ce.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+it(e,t,n||(i?"border":"content"),o,r,a)+"px"}function at(e,t,n,r,i){return new at.prototype.init(e,t,n,r,i)}ce.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ge(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=F(t),u=ze.test(t),l=e.style;if(u||(t=Ze(s)),a=ce.cssHooks[t]||ce.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=Y.exec(n))&&i[1]&&(n=te(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(ce.cssNumber[s]?"":"px")),le.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=F(t);return ze.test(t)||(t=Ze(s)),(a=ce.cssHooks[t]||ce.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Ge(e,t,r)),"normal"===i&&t in nt&&(i=nt[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),ce.each(["height","width"],function(e,u){ce.cssHooks[u]={get:function(e,t,n){if(t)return!et.test(ce.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?ot(e,u,n):Ue(e,tt,function(){return ot(e,u,n)})},set:function(e,t,n){var r,i=Xe(e),o=!le.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===ce.css(e,"boxSizing",!1,i),s=n?it(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-it(e,u,"border",!1,i)-.5)),s&&(r=Y.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=ce.css(e,u)),rt(0,t,s)}}}),ce.cssHooks.marginLeft=Ye(le.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Ge(e,"marginLeft"))||e.getBoundingClientRect().left-Ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),ce.each({margin:"",padding:"",border:"Width"},function(i,o){ce.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+Q[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(ce.cssHooks[i+o].set=rt)}),ce.fn.extend({css:function(e,t){return M(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Xe(e),i=t.length;a<i;a++)o[t[a]]=ce.css(e,t[a],!1,r);return o}return void 0!==n?ce.style(e,t,n):ce.css(e,t)},e,t,1<arguments.length)}}),((ce.Tween=at).prototype={constructor:at,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||ce.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ce.cssNumber[n]?"":"px")},cur:function(){var e=at.propHooks[this.prop];return e&&e.get?e.get(this):at.propHooks._default.get(this)},run:function(e){var t,n=at.propHooks[this.prop];return this.options.duration?this.pos=t=ce.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):at.propHooks._default.set(this),this}}).init.prototype=at.prototype,(at.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=ce.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){ce.fx.step[e.prop]?ce.fx.step[e.prop](e):1!==e.elem.nodeType||!ce.cssHooks[e.prop]&&null==e.elem.style[Ze(e.prop)]?e.elem[e.prop]=e.now:ce.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=at.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ce.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},ce.fx=at.prototype.init,ce.fx.step={};var st,ut,lt,ct,ft=/^(?:toggle|show|hide)$/,pt=/queueHooks$/;function dt(){ut&&(!1===C.hidden&&ie.requestAnimationFrame?ie.requestAnimationFrame(dt):ie.setTimeout(dt,ce.fx.interval),ce.fx.tick())}function ht(){return ie.setTimeout(function(){st=void 0}),st=Date.now()}function gt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=Q[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function vt(e,t,n){for(var r,i=(yt.tweeners[t]||[]).concat(yt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function yt(o,e,t){var n,a,r=0,i=yt.prefilters.length,s=ce.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=st||ht(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:ce.extend({},e),opts:ce.extend(!0,{specialEasing:{},easing:ce.easing._default},t),originalProperties:e,originalOptions:t,startTime:st||ht(),duration:t.duration,tweens:[],createTween:function(e,t){var n=ce.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=F(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=ce.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=yt.prefilters[r].call(l,o,c,l.opts))return v(n.stop)&&(ce._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return ce.map(c,vt,l),v(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),ce.fx.timer(ce.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}ce.Animation=ce.extend(yt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return te(n.elem,e,Y.exec(t),n),n}]},tweener:function(e,t){v(e)?(t=e,e=["*"]):e=e.match(D);for(var n,r=0,i=e.length;r<i;r++)n=e[r],yt.tweeners[n]=yt.tweeners[n]||[],yt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ee(e),v=_.get(e,"fxshow");for(r in n.queue||(null==(a=ce._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,ce.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ft.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||ce.style(e,r)}if((u=!ce.isEmptyObject(t))||!ce.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=_.get(e,"display")),"none"===(c=ce.css(e,"display"))&&(l?c=l:(re([e],!0),l=e.style.display||l,c=ce.css(e,"display"),re([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===ce.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=_.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&re([e],!0),p.done(function(){for(r in g||re([e]),_.remove(e,"fxshow"),d)ce.style(e,r,d[r])})),u=vt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?yt.prefilters.unshift(e):yt.prefilters.push(e)}}),ce.speed=function(e,t,n){var r=e&&"object"==typeof e?ce.extend({},e):{complete:n||!n&&t||v(e)&&e,duration:e,easing:n&&t||t&&!v(t)&&t};return ce.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in ce.fx.speeds?r.duration=ce.fx.speeds[r.duration]:r.duration=ce.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){v(r.old)&&r.old.call(this),r.queue&&ce.dequeue(this,r.queue)},r},ce.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ee).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=ce.isEmptyObject(t),o=ce.speed(e,n,r),a=function(){var e=yt(this,ce.extend({},t),o);(i||_.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=ce.timers,r=_.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&pt.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||ce.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=_.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=ce.timers,o=n?n.length:0;for(t.finish=!0,ce.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),ce.each(["toggle","show","hide"],function(e,r){var i=ce.fn[r];ce.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(gt(r,!0),e,t,n)}}),ce.each({slideDown:gt("show"),slideUp:gt("hide"),slideToggle:gt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){ce.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),ce.timers=[],ce.fx.tick=function(){var e,t=0,n=ce.timers;for(st=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||ce.fx.stop(),st=void 0},ce.fx.timer=function(e){ce.timers.push(e),ce.fx.start()},ce.fx.interval=13,ce.fx.start=function(){ut||(ut=!0,dt())},ce.fx.stop=function(){ut=null},ce.fx.speeds={slow:600,fast:200,_default:400},ce.fn.delay=function(r,e){return r=ce.fx&&ce.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=ie.setTimeout(e,r);t.stop=function(){ie.clearTimeout(n)}})},lt=C.createElement("input"),ct=C.createElement("select").appendChild(C.createElement("option")),lt.type="checkbox",le.checkOn=""!==lt.value,le.optSelected=ct.selected,(lt=C.createElement("input")).value="t",lt.type="radio",le.radioValue="t"===lt.value;var mt,xt=ce.expr.attrHandle;ce.fn.extend({attr:function(e,t){return M(this,ce.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){ce.removeAttr(this,e)})}}),ce.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?ce.prop(e,t,n):(1===o&&ce.isXMLDoc(e)||(i=ce.attrHooks[t.toLowerCase()]||(ce.expr.match.bool.test(t)?mt:void 0)),void 0!==n?null===n?void ce.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=ce.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!le.radioValue&&"radio"===t&&fe(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(D);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),mt={set:function(e,t,n){return!1===t?ce.removeAttr(e,n):e.setAttribute(n,n),n}},ce.each(ce.expr.match.bool.source.match(/\w+/g),function(e,t){var a=xt[t]||ce.find.attr;xt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=xt[o],xt[o]=r,r=null!=a(e,t,n)?o:null,xt[o]=i),r}});var bt=/^(?:input|select|textarea|button)$/i,wt=/^(?:a|area)$/i;function Tt(e){return(e.match(D)||[]).join(" ")}function Ct(e){return e.getAttribute&&e.getAttribute("class")||""}function kt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(D)||[]}ce.fn.extend({prop:function(e,t){return M(this,ce.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[ce.propFix[e]||e]})}}),ce.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&ce.isXMLDoc(e)||(t=ce.propFix[t]||t,i=ce.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=ce.find.attr(e,"tabindex");return t?parseInt(t,10):bt.test(e.nodeName)||wt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),le.optSelected||(ce.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),ce.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ce.propFix[this.toLowerCase()]=this}),ce.fn.extend({addClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).addClass(t.call(this,e,Ct(this)))}):(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).removeClass(t.call(this,e,Ct(this)))}):arguments.length?(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return v(t)?this.each(function(e){ce(this).toggleClass(t.call(this,e,Ct(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=kt(t),this.each(function(){if(s)for(o=ce(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=Ct(this))&&_.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":_.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+Tt(Ct(n))+" ").indexOf(t))return!0;return!1}});var St=/\r/g;ce.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=v(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,ce(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=ce.map(t,function(e){return null==e?"":e+""})),(r=ce.valHooks[this.type]||ce.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=ce.valHooks[t.type]||ce.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(St,""):null==e?"":e:void 0}}),ce.extend({valHooks:{option:{get:function(e){var t=ce.find.attr(e,"value");return null!=t?t:Tt(ce.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!fe(n.parentNode,"optgroup"))){if(t=ce(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=ce.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<ce.inArray(ce.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),ce.each(["radio","checkbox"],function(){ce.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<ce.inArray(ce(e).val(),t)}},le.checkOn||(ce.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Et=ie.location,jt={guid:Date.now()},At=/\?/;ce.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new ie.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||ce.error("Invalid XML: "+(n?ce.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Dt=/^(?:focusinfocus|focusoutblur)$/,Nt=function(e){e.stopPropagation()};ce.extend(ce.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||C],d=ue.call(e,"type")?e.type:e,h=ue.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||C,3!==n.nodeType&&8!==n.nodeType&&!Dt.test(d+ce.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[ce.expando]?e:new ce.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:ce.makeArray(t,[e]),c=ce.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!y(n)){for(s=c.delegateType||d,Dt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||C)&&p.push(a.defaultView||a.parentWindow||ie)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(_.get(o,"events")||Object.create(null))[e.type]&&_.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&$(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!$(n)||u&&v(n[d])&&!y(n)&&((a=n[u])&&(n[u]=null),ce.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Nt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Nt),ce.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=ce.extend(new ce.Event,n,{type:e,isSimulated:!0});ce.event.trigger(r,null,t)}}),ce.fn.extend({trigger:function(e,t){return this.each(function(){ce.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return ce.event.trigger(e,t,n,!0)}});var qt=/\[\]$/,Lt=/\r?\n/g,Ht=/^(?:submit|button|image|reset|file)$/i,Ot=/^(?:input|select|textarea|keygen)/i;function Pt(n,e,r,i){var t;if(Array.isArray(e))ce.each(e,function(e,t){r||qt.test(n)?i(n,t):Pt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==x(e))i(n,e);else for(t in e)Pt(n+"["+t+"]",e[t],r,i)}ce.param=function(e,t){var n,r=[],i=function(e,t){var n=v(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!ce.isPlainObject(e))ce.each(e,function(){i(this.name,this.value)});else for(n in e)Pt(n,e[n],t,i);return r.join("&")},ce.fn.extend({serialize:function(){return ce.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=ce.prop(this,"elements");return e?ce.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!ce(this).is(":disabled")&&Ot.test(this.nodeName)&&!Ht.test(e)&&(this.checked||!we.test(e))}).map(function(e,t){var n=ce(this).val();return null==n?null:Array.isArray(n)?ce.map(n,function(e){return{name:t.name,value:e.replace(Lt,"\r\n")}}):{name:t.name,value:n.replace(Lt,"\r\n")}}).get()}});var Mt=/%20/g,Rt=/#.*$/,It=/([?&])_=[^&]*/,Wt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ft=/^(?:GET|HEAD)$/,$t=/^\/\//,Bt={},_t={},zt="*/".concat("*"),Xt=C.createElement("a");function Ut(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(D)||[];if(v(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Vt(t,i,o,a){var s={},u=t===_t;function l(e){var r;return s[e]=!0,ce.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Gt(e,t){var n,r,i=ce.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&ce.extend(!0,e,r),e}Xt.href=Et.href,ce.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":zt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":ce.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Gt(Gt(e,ce.ajaxSettings),t):Gt(ce.ajaxSettings,e)},ajaxPrefilter:Ut(Bt),ajaxTransport:Ut(_t),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=ce.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?ce(y):ce.event,x=ce.Deferred(),b=ce.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Wt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace($t,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(D)||[""],null==v.crossDomain){r=C.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Xt.protocol+"//"+Xt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=ce.param(v.data,v.traditional)),Vt(Bt,v,t,T),h)return T;for(i in(g=ce.event&&v.global)&&0==ce.active++&&ce.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ft.test(v.type),f=v.url.replace(Rt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Mt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(At.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(It,"$1"),o=(At.test(f)?"&":"?")+"_="+jt.guid+++o),v.url=f+o),v.ifModified&&(ce.lastModified[f]&&T.setRequestHeader("If-Modified-Since",ce.lastModified[f]),ce.etag[f]&&T.setRequestHeader("If-None-Match",ce.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+zt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Vt(_t,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=ie.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&ie.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<ce.inArray("script",v.dataTypes)&&ce.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(ce.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(ce.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--ce.active||ce.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return ce.get(e,t,n,"json")},getScript:function(e,t){return ce.get(e,void 0,t,"script")}}),ce.each(["get","post"],function(e,i){ce[i]=function(e,t,n,r){return v(t)&&(r=r||n,n=t,t=void 0),ce.ajax(ce.extend({url:e,type:i,dataType:r,data:t,success:n},ce.isPlainObject(e)&&e))}}),ce.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),ce._evalUrl=function(e,t,n){return ce.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){ce.globalEval(e,t,n)}})},ce.fn.extend({wrapAll:function(e){var t;return this[0]&&(v(e)&&(e=e.call(this[0])),t=ce(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return v(n)?this.each(function(e){ce(this).wrapInner(n.call(this,e))}):this.each(function(){var e=ce(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=v(t);return this.each(function(e){ce(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){ce(this).replaceWith(this.childNodes)}),this}}),ce.expr.pseudos.hidden=function(e){return!ce.expr.pseudos.visible(e)},ce.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},ce.ajaxSettings.xhr=function(){try{return new ie.XMLHttpRequest}catch(e){}};var Yt={0:200,1223:204},Qt=ce.ajaxSettings.xhr();le.cors=!!Qt&&"withCredentials"in Qt,le.ajax=Qt=!!Qt,ce.ajaxTransport(function(i){var o,a;if(le.cors||Qt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Yt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&ie.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),ce.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),ce.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return ce.globalEval(e),e}}}),ce.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),ce.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=ce("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),C.head.appendChild(r[0])},abort:function(){i&&i()}}});var Jt,Kt=[],Zt=/(=)\?(?=&|$)|\?\?/;ce.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Kt.pop()||ce.expando+"_"+jt.guid++;return this[e]=!0,e}}),ce.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Zt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Zt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=v(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Zt,"$1"+r):!1!==e.jsonp&&(e.url+=(At.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||ce.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=ie[r],ie[r]=function(){o=arguments},n.always(function(){void 0===i?ce(ie).removeProp(r):ie[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Kt.push(r)),o&&v(i)&&i(o[0]),o=i=void 0}),"script"}),le.createHTMLDocument=((Jt=C.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Jt.childNodes.length),ce.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(le.createHTMLDocument?((r=(t=C.implementation.createHTMLDocument("")).createElement("base")).href=C.location.href,t.head.appendChild(r)):t=C),o=!n&&[],(i=w.exec(e))?[t.createElement(i[1])]:(i=Ae([e],t,o),o&&o.length&&ce(o).remove(),ce.merge([],i.childNodes)));var r,i,o},ce.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=Tt(e.slice(s)),e=e.slice(0,s)),v(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&ce.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?ce("<div>").append(ce.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},ce.expr.pseudos.animated=function(t){return ce.grep(ce.timers,function(e){return t===e.elem}).length},ce.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=ce.css(e,"position"),c=ce(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=ce.css(e,"top"),u=ce.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),v(t)&&(t=t.call(e,n,ce.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},ce.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){ce.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===ce.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===ce.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=ce(e).offset()).top+=ce.css(e,"borderTopWidth",!0),i.left+=ce.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-ce.css(r,"marginTop",!0),left:t.left-i.left-ce.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===ce.css(e,"position"))e=e.offsetParent;return e||J})}}),ce.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;ce.fn[t]=function(e){return M(this,function(e,t,n){var r;if(y(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),ce.each(["top","left"],function(e,n){ce.cssHooks[n]=Ye(le.pixelPosition,function(e,t){if(t)return t=Ge(e,n),_e.test(t)?ce(e).position()[n]+"px":t})}),ce.each({Height:"height",Width:"width"},function(a,s){ce.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){ce.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return M(this,function(e,t,n){var r;return y(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?ce.css(e,t,i):ce.style(e,t,n,i)},s,n?e:void 0,n)}})}),ce.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ce.fn[t]=function(e){return this.on(t,e)}}),ce.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){ce.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var en=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;ce.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),v(e))return r=ae.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(ae.call(arguments)))}).guid=e.guid=e.guid||ce.guid++,i},ce.holdReady=function(e){e?ce.readyWait++:ce.ready(!0)},ce.isArray=Array.isArray,ce.parseJSON=JSON.parse,ce.nodeName=fe,ce.isFunction=v,ce.isWindow=y,ce.camelCase=F,ce.type=x,ce.now=Date.now,ce.isNumeric=function(e){var t=ce.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},ce.trim=function(e){return null==e?"":(e+"").replace(en,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return ce});var tn=ie.jQuery,nn=ie.$;return ce.noConflict=function(e){return ie.$===ce&&(ie.$=nn),e&&ie.jQuery===ce&&(ie.jQuery=tn),ce},"undefined"==typeof e&&(ie.jQuery=ie.$=ce),ce});


/**
 * velocity-animate (C) 2014-2017 Julian Shapiro.
 *
 * Licensed under the MIT license. See LICENSE file in the project root for details.
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.Velocity = factory());
  }(this, (function () { 'use strict';
  
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  
    var classCallCheck = function (instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
  
    var createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
  
      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
  
    var defineProperty = function (obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
  
      return obj;
    };
  
    /**
     * Check if a variable is a boolean.
     */
    function isBoolean(variable) {
        return variable === true || variable === false;
    }
    /**
     * Check if a variable is a function.
     */
    function isFunction(variable) {
        return Object.prototype.toString.call(variable) === "[object Function]";
    }
    /**
     * Check if a variable is an HTMLElement or SVGElement.
     */
    function isNode(variable) {
        return !!(variable && variable.nodeType);
    }
    /**
     * Check if a variable is a number.
     */
    function isNumber(variable) {
        return typeof variable === "number";
    }
    /**
     * Check if a variable is a plain object (and not an instance).
     */
    function isPlainObject(variable) {
        if (!variable || (typeof variable === "undefined" ? "undefined" : _typeof(variable)) !== "object" || variable.nodeType || Object.prototype.toString.call(variable) !== "[object Object]") {
            return false;
        }
        var proto = Object.getPrototypeOf(variable);
        return !proto || proto.hasOwnProperty("constructor") && proto.constructor === Object;
    }
    /**
     * Check if a variable is a string.
     */
    function isString(variable) {
        return typeof variable === "string";
    }
    /**
     * Check if a variable is the result of calling Velocity.
     */
    function isVelocityResult(variable) {
        return variable && isNumber(variable.length) && isFunction(variable.velocity);
    }
    /**
     * Check if a variable is an array-like wrapped jQuery, Zepto or similar, where
     * each indexed value is a Node.
     */
    function isWrapped(variable) {
        return variable && variable !== window && isNumber(variable.length) && !isString(variable) && !isFunction(variable) && !isNode(variable) && (variable.length === 0 || isNode(variable[0]));
    }
    /**
     * Check is a property is an enumerable member of an object.
     */
    function propertyIsEnumerable(obj, property) {
        return Object.prototype.propertyIsEnumerable.call(obj, property);
    }
  
    // Project
    /**
     * Add a single className to an Element.
     */
    function addClass(element, className) {
        if (element instanceof Element) {
            if (element.classList) {
                element.classList.add(className);
            } else {
                removeClass(element, className);
                element.className += (element.className.length ? " " : "") + className;
            }
        }
    }
    /**
     * Clone an array, works for array-like too.
     */
    function cloneArray(arrayLike) {
        return Array.prototype.slice.call(arrayLike, 0);
    }
    /**
     * The <strong><code>defineProperty()</code></strong> function provides a
     * shortcut to defining a property that cannot be accidentally iterated across.
     */
    function defineProperty$1(proto, name, value, readonly) {
        if (proto) {
            Object.defineProperty(proto, name, {
                configurable: !readonly,
                writable: !readonly,
                value: value
            });
        }
    }
    /**
     * When there are multiple locations for a value pass them all in, then get the
     * first value that is valid.
     */
    function getValue() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
  
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;
  
        try {
            for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var arg = _step.value;
  
                if (arg !== undefined && arg === arg) {
                    return arg;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    /**
     * Shim to get the current milliseconds - on anything except old IE it'll use
     * Date.now() and save creating an object. If that doesn't exist then it'll
     * create one that gets GC.
     */
    var now = Date.now ? Date.now : function () {
        return new Date().getTime();
    };
    /**
     * Remove a single className from an Element.
     */
    function removeClass(element, className) {
        if (element instanceof Element) {
            if (element.classList) {
                element.classList.remove(className);
            } else {
                // TODO: Need some jsperf tests on performance - can we get rid of the regex and maybe use split / array manipulation?
                element.className = element.className.replace(new RegExp("(^|\\s)" + className + "(\\s|$)", "gi"), " ");
            }
        }
    }
  
    // Project
    // Constants
    var Actions = {};
    /**
     * Used to register an action. This should never be called by users
     * directly, instead it should be called via  an action:<br/>
     * <code>Velocity("registerAction", "name", VelocityActionFn);</code>
     */
    function registerAction(args, internal) {
        var name = args[0],
            callback = args[1];
        if (!isString(name)) {
            console.warn("VelocityJS: Trying to set 'registerAction' name to an invalid value:", name);
        } else if (!isFunction(callback)) {
            console.warn("VelocityJS: Trying to set 'registerAction' callback to an invalid value:", name, callback);
        } else if (Actions[name] && !propertyIsEnumerable(Actions, name)) {
            console.warn("VelocityJS: Trying to override internal 'registerAction' callback", name);
        } else if (internal === true) {
            defineProperty$1(Actions, name, callback);
        } else {
            Actions[name] = callback;
        }
    }
    registerAction(["registerAction", registerAction], true);
  
    /**
     * Without this it will only un-prefix properties that have a valid "normal"
     * version.
     */
    var DURATION_FAST = 200;
    var DURATION_NORMAL = 400;
    var DURATION_SLOW = 600;
    var FUZZY_MS_PER_SECOND = 980;
    var DEFAULT_CACHE = true;
    var DEFAULT_DELAY = 0;
    var DEFAULT_DURATION = DURATION_NORMAL;
    var DEFAULT_EASING = "swing";
    var DEFAULT_FPSLIMIT = 60;
    var DEFAULT_LOOP = 0;
    var DEFAULT_PROMISE = true;
    var DEFAULT_PROMISE_REJECT_EMPTY = true;
    var DEFAULT_QUEUE = "";
    var DEFAULT_REPEAT = 0;
    var DEFAULT_SPEED = 1;
    var DEFAULT_SYNC = true;
    var CLASSNAME = "velocity-animating";
    var Duration = {
      fast: DURATION_FAST,
      normal: DURATION_NORMAL,
      slow: DURATION_SLOW
    };
  
    // Project
    // Constants
    var Easings = {};
    /**
     * Used to register a easing. This should never be called by users
     * directly, instead it should be called via an action:<br/>
     * <code>Velocity("registerEasing", "name", VelocityEasingFn);</code>
     */
    function registerEasing(args) {
        var name = args[0],
            callback = args[1];
        if (!isString(name)) {
            console.warn("VelocityJS: Trying to set 'registerEasing' name to an invalid value:", name);
        } else if (!isFunction(callback)) {
            console.warn("VelocityJS: Trying to set 'registerEasing' callback to an invalid value:", name, callback);
        } else if (Easings[name]) {
            console.warn("VelocityJS: Trying to override 'registerEasing' callback", name);
        } else {
            Easings[name] = callback;
        }
    }
    registerAction(["registerEasing", registerEasing], true);
    /**
     * Linear easing, used for sequence parts that don't have an actual easing
     * function.
     */
    function linearEasing(percentComplete, startValue, endValue, property) {
        return startValue + percentComplete * (endValue - startValue);
    }
    /**
     * Swing is the default for jQuery and Velocity.
     */
    function swingEasing(percentComplete, startValue, endValue) {
        return startValue + (0.5 - Math.cos(percentComplete * Math.PI) / 2) * (endValue - startValue);
    }
    /**
     * A less exaggerated version of easeInOutElastic.
     */
    function springEasing(percentComplete, startValue, endValue) {
        return startValue + (1 - Math.cos(percentComplete * 4.5 * Math.PI) * Math.exp(-percentComplete * 6)) * (endValue - startValue);
    }
    registerEasing(["linear", linearEasing]);
    registerEasing(["swing", swingEasing]);
    registerEasing(["spring", springEasing]);
  
    // Project
    /**
     * Fix to a range of <code>0 <= num <= 1</code>.
     */
    function fixRange(num) {
        return Math.min(Math.max(num, 0), 1);
    }
    function A(aA1, aA2) {
        return 1 - 3 * aA2 + 3 * aA1;
    }
    function B(aA1, aA2) {
        return 3 * aA2 - 6 * aA1;
    }
    function C(aA1) {
        return 3 * aA1;
    }
    function calcBezier(aT, aA1, aA2) {
        return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
    }
    function getSlope(aT, aA1, aA2) {
        return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
    }
    function generateBezier() {
        var NEWTON_ITERATIONS = 4,
            NEWTON_MIN_SLOPE = 0.001,
            SUBDIVISION_PRECISION = 0.0000001,
            SUBDIVISION_MAX_ITERATIONS = 10,
            kSplineTableSize = 11,
            kSampleStepSize = 1 / (kSplineTableSize - 1),
            float32ArraySupported = "Float32Array" in window;
        /* Must contain four args. */
  
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
  
        if (args.length !== 4) {
            return;
        }
        /* Args must be numbers. */
        for (var i = 0; i < 4; ++i) {
            if (typeof args[i] !== "number" || isNaN(args[i]) || !isFinite(args[i])) {
                return;
            }
        }
        /* X values must be in the [0, 1] range. */
        var mX1 = fixRange(args[0]);
        var mY1 = args[1];
        var mX2 = fixRange(args[2]);
        var mY2 = args[3];
        var mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
        function newtonRaphsonIterate(aX, aGuessT) {
            for (var _i = 0; _i < NEWTON_ITERATIONS; ++_i) {
                var currentSlope = getSlope(aGuessT, mX1, mX2);
                if (currentSlope === 0) {
                    return aGuessT;
                }
                var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
                aGuessT -= currentX / currentSlope;
            }
            return aGuessT;
        }
        function calcSampleValues() {
            for (var _i2 = 0; _i2 < kSplineTableSize; ++_i2) {
                mSampleValues[_i2] = calcBezier(_i2 * kSampleStepSize, mX1, mX2);
            }
        }
        function binarySubdivide(aX, aA, aB) {
            var currentX = void 0,
                currentT = void 0,
                i = 0;
            do {
                currentT = aA + (aB - aA) / 2;
                currentX = calcBezier(currentT, mX1, mX2) - aX;
                if (currentX > 0) {
                    aB = currentT;
                } else {
                    aA = currentT;
                }
            } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
            return currentT;
        }
        function getTForX(aX) {
            var lastSample = kSplineTableSize - 1;
            var intervalStart = 0,
                currentSample = 1;
            for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
                intervalStart += kSampleStepSize;
            }
            --currentSample;
            var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]),
                guessForT = intervalStart + dist * kSampleStepSize,
                initialSlope = getSlope(guessForT, mX1, mX2);
            if (initialSlope >= NEWTON_MIN_SLOPE) {
                return newtonRaphsonIterate(aX, guessForT);
            } else if (initialSlope === 0) {
                return guessForT;
            } else {
                return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
            }
        }
        var precomputed = false;
        function precompute() {
            precomputed = true;
            if (mX1 !== mY1 || mX2 !== mY2) {
                calcSampleValues();
            }
        }
        var str = "generateBezier(" + [mX1, mY1, mX2, mY2] + ")",
            f = function f(percentComplete, startValue, endValue, property) {
            if (!precomputed) {
                precompute();
            }
            if (percentComplete === 0) {
                return startValue;
            }
            if (percentComplete === 1) {
                return endValue;
            }
            if (mX1 === mY1 && mX2 === mY2) {
                return startValue + percentComplete * (endValue - startValue);
            }
            return startValue + calcBezier(getTForX(percentComplete), mY1, mY2) * (endValue - startValue);
        };
        f.getControlPoints = function () {
            return [{ x: mX1, y: mY1 }, { x: mX2, y: mY2 }];
        };
        f.toString = function () {
            return str;
        };
        return f;
    }
    /* Common easings */
    var easeIn = generateBezier(0.42, 0, 1, 1),
        easeOut = generateBezier(0, 0, 0.58, 1),
        easeInOut = generateBezier(0.42, 0, 0.58, 1);
    registerEasing(["ease", generateBezier(0.25, 0.1, 0.25, 1)]);
    registerEasing(["easeIn", easeIn]);
    registerEasing(["ease-in", easeIn]);
    registerEasing(["easeOut", easeOut]);
    registerEasing(["ease-out", easeOut]);
    registerEasing(["easeInOut", easeInOut]);
    registerEasing(["ease-in-out", easeInOut]);
    registerEasing(["easeInSine", generateBezier(0.47, 0, 0.745, 0.715)]);
    registerEasing(["easeOutSine", generateBezier(0.39, 0.575, 0.565, 1)]);
    registerEasing(["easeInOutSine", generateBezier(0.445, 0.05, 0.55, 0.95)]);
    registerEasing(["easeInQuad", generateBezier(0.55, 0.085, 0.68, 0.53)]);
    registerEasing(["easeOutQuad", generateBezier(0.25, 0.46, 0.45, 0.94)]);
    registerEasing(["easeInOutQuad", generateBezier(0.455, 0.03, 0.515, 0.955)]);
    registerEasing(["easeInCubic", generateBezier(0.55, 0.055, 0.675, 0.19)]);
    registerEasing(["easeOutCubic", generateBezier(0.215, 0.61, 0.355, 1)]);
    registerEasing(["easeInOutCubic", generateBezier(0.645, 0.045, 0.355, 1)]);
    registerEasing(["easeInQuart", generateBezier(0.895, 0.03, 0.685, 0.22)]);
    registerEasing(["easeOutQuart", generateBezier(0.165, 0.84, 0.44, 1)]);
    registerEasing(["easeInOutQuart", generateBezier(0.77, 0, 0.175, 1)]);
    registerEasing(["easeInQuint", generateBezier(0.755, 0.05, 0.855, 0.06)]);
    registerEasing(["easeOutQuint", generateBezier(0.23, 1, 0.32, 1)]);
    registerEasing(["easeInOutQuint", generateBezier(0.86, 0, 0.07, 1)]);
    registerEasing(["easeInExpo", generateBezier(0.95, 0.05, 0.795, 0.035)]);
    registerEasing(["easeOutExpo", generateBezier(0.19, 1, 0.22, 1)]);
    registerEasing(["easeInOutExpo", generateBezier(1, 0, 0, 1)]);
    registerEasing(["easeInCirc", generateBezier(0.6, 0.04, 0.98, 0.335)]);
    registerEasing(["easeOutCirc", generateBezier(0.075, 0.82, 0.165, 1)]);
    registerEasing(["easeInOutCirc", generateBezier(0.785, 0.135, 0.15, 0.86)]);
  
    /* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
    /* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
     then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */
    function springAccelerationForState(state) {
        return -state.tension * state.x - state.friction * state.v;
    }
    function springEvaluateStateWithDerivative(initialState, dt, derivative) {
        var state = {
            x: initialState.x + derivative.dx * dt,
            v: initialState.v + derivative.dv * dt,
            tension: initialState.tension,
            friction: initialState.friction
        };
        return {
            dx: state.v,
            dv: springAccelerationForState(state)
        };
    }
    function springIntegrateState(state, dt) {
        var a = {
            dx: state.v,
            dv: springAccelerationForState(state)
        },
            b = springEvaluateStateWithDerivative(state, dt * 0.5, a),
            c = springEvaluateStateWithDerivative(state, dt * 0.5, b),
            d = springEvaluateStateWithDerivative(state, dt, c),
            dxdt = 1 / 6 * (a.dx + 2 * (b.dx + c.dx) + d.dx),
            dvdt = 1 / 6 * (a.dv + 2 * (b.dv + c.dv) + d.dv);
        state.x = state.x + dxdt * dt;
        state.v = state.v + dvdt * dt;
        return state;
    }
    function generateSpringRK4(tension, friction, duration) {
        var initState = {
            x: -1,
            v: 0,
            tension: parseFloat(tension) || 500,
            friction: parseFloat(friction) || 20
        },
            path = [0],
            tolerance = 1 / 10000,
            DT = 16 / 1000,
            haveDuration = duration != null; // deliberate "==", as undefined == null != 0
        var timeLapsed = 0,
            dt = void 0,
            lastState = void 0;
        /* Calculate the actual time it takes for this animation to complete with the provided conditions. */
        if (haveDuration) {
            /* Run the simulation without a duration. */
            timeLapsed = generateSpringRK4(initState.tension, initState.friction);
            /* Compute the adjusted time delta. */
            dt = timeLapsed / duration * DT;
        } else {
            dt = DT;
        }
        while (true) {
            /* Next/step function .*/
            lastState = springIntegrateState(lastState || initState, dt);
            /* Store the position. */
            path.push(1 + lastState.x);
            timeLapsed += 16;
            /* If the change threshold is reached, break. */
            if (!(Math.abs(lastState.x) > tolerance && Math.abs(lastState.v) > tolerance)) {
                break;
            }
        }
        /* If duration is not defined, return the actual time required for completing this animation. Otherwise, return a closure that holds the
         computed path and returns a snapshot of the position according to a given percentComplete. */
        return !haveDuration ? timeLapsed : function (percentComplete, startValue, endValue) {
            if (percentComplete === 0) {
                return startValue;
            }
            if (percentComplete === 1) {
                return endValue;
            }
            return startValue + path[Math.floor(percentComplete * (path.length - 1))] * (endValue - startValue);
        };
    }
  
    // Constants
    var cache = {};
    function generateStep(steps) {
        var fn = cache[steps];
        if (fn) {
            return fn;
        }
        return cache[steps] = function (percentComplete, startValue, endValue) {
            if (percentComplete === 0) {
                return startValue;
            }
            if (percentComplete === 1) {
                return endValue;
            }
            return startValue + Math.round(percentComplete * steps) * (1 / steps) * (endValue - startValue);
        };
    }
  
    // Project
    /**
     * Parse a duration value and return an ms number. Optionally return a
     * default value if the number is not valid.
     */
    function parseDuration(duration, def) {
        if (isNumber(duration)) {
            return duration;
        }
        if (isString(duration)) {
            return Duration[duration.toLowerCase()] || parseFloat(duration.replace("ms", "").replace("s", "000"));
        }
        return def == null ? undefined : parseDuration(def);
    }
    /**
     * Validate a <code>cache</code> option.
     */
    function validateCache(value) {
        if (isBoolean(value)) {
            return value;
        }
        if (value != null) {
            console.warn("VelocityJS: Trying to set 'cache' to an invalid value:", value);
        }
    }
    /**
     * Validate a <code>begin</code> option.
     */
    function validateBegin(value) {
        if (isFunction(value)) {
            return value;
        }
        if (value != null) {
            console.warn("VelocityJS: Trying to set 'begin' to an invalid value:", value);
        }
    }
    /**
     * Validate a <code>complete</code> option.
     */
    function validateComplete(value, noError) {
        if (isFunction(value)) {
            return value;
        }
        if (value != null && !noError) {
            console.warn("VelocityJS: Trying to set 'complete' to an invalid value:", value);
        }
    }
    /**
     * Validate a <code>delay</code> option.
     */
    function validateDelay(value) {
        var parsed = parseDuration(value);
        if (!isNaN(parsed)) {
            return parsed;
        }
        if (value != null) {
            console.error("VelocityJS: Trying to set 'delay' to an invalid value:", value);
        }
    }
    /**
     * Validate a <code>duration</code> option.
     */
    function validateDuration(value, noError) {
        var parsed = parseDuration(value);
        if (!isNaN(parsed) && parsed >= 0) {
            return parsed;
        }
        if (value != null && !noError) {
            console.error("VelocityJS: Trying to set 'duration' to an invalid value:", value);
        }
    }
    /**
     * Validate a <code>easing</code> option.
     */
    function validateEasing(value, duration, noError) {
        if (isString(value)) {
            // Named easing
            return Easings[value];
        }
        if (isFunction(value)) {
            return value;
        }
        // TODO: We should only do these if the correct function exists - don't force loading.
        if (Array.isArray(value)) {
            if (value.length === 1) {
                // Steps
                return generateStep(value[0]);
            }
            if (value.length === 2) {
                // springRK4 must be passed the animation's duration.
                // Note: If the springRK4 array contains non-numbers,
                // generateSpringRK4() returns an easing function generated with
                // default tension and friction values.
                return generateSpringRK4(value[0], value[1], duration);
            }
            if (value.length === 4) {
                // Note: If the bezier array contains non-numbers, generateBezier()
                // returns undefined.
                return generateBezier.apply(null, value) || false;
            }
        }
        if (value != null && !noError) {
            console.error("VelocityJS: Trying to set 'easing' to an invalid value:", value);
        }
    }
    /**
     * Validate a <code>fpsLimit</code> option.
     */
    function validateFpsLimit(value) {
        if (value === false) {
            return 0;
        } else {
            var parsed = parseInt(value, 10);
            if (!isNaN(parsed) && parsed >= 0) {
                return Math.min(parsed, 60);
            }
        }
        if (value != null) {
            console.warn("VelocityJS: Trying to set 'fpsLimit' to an invalid value:", value);
        }
    }
    /**
     * Validate a <code>loop</code> option.
     */
    function validateLoop(value) {
        switch (value) {
            case false:
                return 0;
            case true:
                return true;
            default:
                var parsed = parseInt(value, 10);
                if (!isNaN(parsed) && parsed >= 0) {
                    return parsed;
                }
                break;
        }
        if (value != null) {
            console.warn("VelocityJS: Trying to set 'loop' to an invalid value:", value);
        }
    }
    /**
     * Validate a <code>progress</code> option.
     */
    function validateProgress(value) {
        if (isFunction(value)) {
            return value;
        }
        if (value != null) {
            console.warn("VelocityJS: Trying to set 'progress' to an invalid value:", value);
        }
    }
    /**
     * Validate a <code>promise</code> option.
     */
    function validatePromise(value) {
        if (isBoolean(value)) {
            return value;
        }
        if (value != null) {
            console.warn("VelocityJS: Trying to set 'promise' to an invalid value:", value);
        }
    }
    /**
     * Validate a <code>promiseRejectEmpty</code> option.
     */
    function validatePromiseRejectEmpty(value) {
        if (isBoolean(value)) {
            return value;
        }
        if (value != null) {
            console.warn("VelocityJS: Trying to set 'promiseRejectEmpty' to an invalid value:", value);
        }
    }
    /**
     * Validate a <code>queue</code> option.
     */
    function validateQueue(value, noError) {
        if (value === false || isString(value)) {
            return value;
        }
        if (value != null && !noError) {
            console.warn("VelocityJS: Trying to set 'queue' to an invalid value:", value);
        }
    }
    /**
     * Validate a <code>repeat</code> option.
     */
    function validateRepeat(value) {
        switch (value) {
            case false:
                return 0;
            case true:
                return true;
            default:
                var parsed = parseInt(value, 10);
                if (!isNaN(parsed) && parsed >= 0) {
                    return parsed;
                }
                break;
        }
        if (value != null) {
            console.warn("VelocityJS: Trying to set 'repeat' to an invalid value:", value);
        }
    }
    /**
     * Validate a <code>speed</code> option.
     */
    function validateSpeed(value) {
        if (isNumber(value)) {
            return value;
        }
        if (value != null) {
            console.error("VelocityJS: Trying to set 'speed' to an invalid value:", value);
        }
    }
    /**
     * Validate a <code>sync</code> option.
     */
    function validateSync(value) {
        if (isBoolean(value)) {
            return value;
        }
        if (value != null) {
            console.error("VelocityJS: Trying to set 'sync' to an invalid value:", value);
        }
    }
  
    // Project
    // NOTE: Add the variable here, then add the default state in "reset" below.
    var cache$1 = void 0,
        begin = void 0,
        complete = void 0,
        delay = void 0,
        duration = void 0,
        easing = void 0,
        fpsLimit = void 0,
        loop = void 0,
        mobileHA = void 0,
        minFrameTime = void 0,
        promise = void 0,
        promiseRejectEmpty = void 0,
        queue = void 0,
        repeat = void 0,
        speed = void 0,
        sync = void 0;
    var defaults$1 = function () {
        function defaults$$1() {
            classCallCheck(this, defaults$$1);
        }
  
        createClass(defaults$$1, null, [{
            key: "reset",
            value: function reset() {
                cache$1 = DEFAULT_CACHE;
                begin = undefined;
                complete = undefined;
                delay = DEFAULT_DELAY;
                duration = DEFAULT_DURATION;
                easing = validateEasing(DEFAULT_EASING, DEFAULT_DURATION);
                fpsLimit = DEFAULT_FPSLIMIT;
                loop = DEFAULT_LOOP;
                minFrameTime = FUZZY_MS_PER_SECOND / DEFAULT_FPSLIMIT;
                promise = DEFAULT_PROMISE;
                promiseRejectEmpty = DEFAULT_PROMISE_REJECT_EMPTY;
                queue = DEFAULT_QUEUE;
                repeat = DEFAULT_REPEAT;
                speed = DEFAULT_SPEED;
                sync = DEFAULT_SYNC;
            }
        }, {
            key: "cache",
            get: function get$$1() {
                return cache$1;
            },
            set: function set$$1(value) {
                value = validateCache(value);
                if (value !== undefined) {
                    cache$1 = value;
                }
            }
        }, {
            key: "begin",
            get: function get$$1() {
                return begin;
            },
            set: function set$$1(value) {
                value = validateBegin(value);
                if (value !== undefined) {
                    begin = value;
                }
            }
        }, {
            key: "complete",
            get: function get$$1() {
                return complete;
            },
            set: function set$$1(value) {
                value = validateComplete(value);
                if (value !== undefined) {
                    complete = value;
                }
            }
        }, {
            key: "delay",
            get: function get$$1() {
                return delay;
            },
            set: function set$$1(value) {
                value = validateDelay(value);
                if (value !== undefined) {
                    delay = value;
                }
            }
        }, {
            key: "duration",
            get: function get$$1() {
                return duration;
            },
            set: function set$$1(value) {
                value = validateDuration(value);
                if (value !== undefined) {
                    duration = value;
                }
            }
        }, {
            key: "easing",
            get: function get$$1() {
                return easing;
            },
            set: function set$$1(value) {
                value = validateEasing(value, duration);
                if (value !== undefined) {
                    easing = value;
                }
            }
        }, {
            key: "fpsLimit",
            get: function get$$1() {
                return fpsLimit;
            },
            set: function set$$1(value) {
                value = validateFpsLimit(value);
                if (value !== undefined) {
                    fpsLimit = value;
                    minFrameTime = FUZZY_MS_PER_SECOND / value;
                }
            }
        }, {
            key: "loop",
            get: function get$$1() {
                return loop;
            },
            set: function set$$1(value) {
                value = validateLoop(value);
                if (value !== undefined) {
                    loop = value;
                }
            }
        }, {
            key: "mobileHA",
            get: function get$$1() {
                return mobileHA;
            },
            set: function set$$1(value) {
                if (isBoolean(value)) {
                    mobileHA = value;
                }
            }
        }, {
            key: "minFrameTime",
            get: function get$$1() {
                return minFrameTime;
            }
        }, {
            key: "promise",
            get: function get$$1() {
                return promise;
            },
            set: function set$$1(value) {
                value = validatePromise(value);
                if (value !== undefined) {
                    promise = value;
                }
            }
        }, {
            key: "promiseRejectEmpty",
            get: function get$$1() {
                return promiseRejectEmpty;
            },
            set: function set$$1(value) {
                value = validatePromiseRejectEmpty(value);
                if (value !== undefined) {
                    promiseRejectEmpty = value;
                }
            }
        }, {
            key: "queue",
            get: function get$$1() {
                return queue;
            },
            set: function set$$1(value) {
                value = validateQueue(value);
                if (value !== undefined) {
                    queue = value;
                }
            }
        }, {
            key: "repeat",
            get: function get$$1() {
                return repeat;
            },
            set: function set$$1(value) {
                value = validateRepeat(value);
                if (value !== undefined) {
                    repeat = value;
                }
            }
        }, {
            key: "repeatAgain",
            get: function get$$1() {
                return repeat;
            }
        }, {
            key: "speed",
            get: function get$$1() {
                return speed;
            },
            set: function set$$1(value) {
                value = validateSpeed(value);
                if (value !== undefined) {
                    speed = value;
                }
            }
        }, {
            key: "sync",
            get: function get$$1() {
                return sync;
            },
            set: function set$$1(value) {
                value = validateSync(value);
                if (value !== undefined) {
                    sync = value;
                }
            }
        }]);
        return defaults$$1;
    }();
    Object.freeze(defaults$1);
    // Reset to our default values, currently everything is undefined.
    defaults$1.reset();
  
    /**
     * The highest type index for finding the best normalization for a property.
     */
    /**
     * Unlike "actions", normalizations can always be replaced by users.
     */
    var Normalizations = [];
    /**
     * Store a cross-reference to units to be added to specific normalization
     * functions if the user supplies a unit-less number.
     *
     * This is pretty much confined to adding "px" to several css properties.
     */
    var NormalizationUnits = {};
    /**
     * Any normalisations that should never be cached are listed here.
     * Faster than an array - https://jsperf.com/array-includes-and-find-methods-vs-set-has
     */
    var NoCacheNormalizations = new Set();
    /**
     * An array of classes used for the per-class normalizations. This
     * translates into a bitwise enum for quick cross-reference, and so that
     * the element doesn't need multiple <code>instanceof</code> calls every
     * frame.
     */
    var constructors = [];
    /**
     * A cache of the various constructors we've found and mapping to their real
     * name - saves expensive lookups.
     */
    var constructorCache = new Map();
  
    // Project
    // Constants
    var dataName = "velocityData";
    /**
     * Get (and create) the internal data store for an element.
     */
    function Data(element) {
        // Use a string member so Uglify doesn't mangle it.
        var data = element[dataName];
        if (data) {
            return data;
        }
        var window = element.ownerDocument.defaultView;
        var types = 0;
        for (var index = 0; index < constructors.length; index++) {
            var _constructor = constructors[index];
            if (isString(_constructor)) {
                if (element instanceof window[_constructor]) {
                    types |= 1 << index; // tslint:disable-line:no-bitwise
                }
            } else if (element instanceof _constructor) {
                types |= 1 << index; // tslint:disable-line:no-bitwise
            }
        }
        // Use an intermediate object so it errors on incorrect data.
        var newData = {
            types: types,
            count: 0,
            computedStyle: null,
            cache: {},
            queueList: {},
            lastAnimationList: {},
            lastFinishList: {},
            window: window
        };
        Object.defineProperty(element, dataName, {
            value: newData
        });
        return newData;
    }
  
    // Constants
    var isClient = window && window === window.window,
        windowScrollAnchor = isClient && window.pageYOffset !== undefined;
    var State = {
        isClient: isClient,
        isMobile: isClient && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        isGingerbread: isClient && /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
        prefixElement: isClient && document.createElement("div"),
        windowScrollAnchor: windowScrollAnchor,
        scrollAnchor: windowScrollAnchor ? window : !isClient || document.documentElement || document.body.parentNode || document.body,
        scrollPropertyLeft: windowScrollAnchor ? "pageXOffset" : "scrollLeft",
        scrollPropertyTop: windowScrollAnchor ? "pageYOffset" : "scrollTop",
        className: CLASSNAME,
        isTicking: false,
        first: undefined,
        last: undefined,
        firstNew: undefined
    };
  
    // Project
    /**
     * Simple queue management. Un-named queue is directly within the element data,
     * named queue is within an object within it.
     */
    function animate(animation) {
        var prev = State.last;
        animation._prev = prev;
        animation._next = undefined;
        if (prev) {
            prev._next = animation;
        } else {
            State.first = animation;
        }
        State.last = animation;
        if (!State.firstNew) {
            State.firstNew = animation;
        }
        var element = animation.element,
            data = Data(element);
        if (!data.count++) {
            ////////////////////////
            // Feature: Classname //
            ////////////////////////
            addClass(element, State.className);
        }
    }
    /**
     * Add an item to an animation queue.
     */
    function queue$1(element, animation, queueName) {
        var data = Data(element);
        if (queueName !== false) {
            // Store the last animation added so we can use it for the
            // beginning of the next one.
            data.lastAnimationList[queueName] = animation;
        }
        if (queueName === false) {
            animate(animation);
        } else {
            if (!isString(queueName)) {
                queueName = "";
            }
            var last = data.queueList[queueName];
            if (!last) {
                if (last === null) {
                    data.queueList[queueName] = animation;
                } else {
                    data.queueList[queueName] = null;
                    animate(animation);
                }
            } else {
                while (last._next) {
                    last = last._next;
                }
                last._next = animation;
                animation._prev = last;
            }
        }
    }
    /**
     * Start the next animation on this element's queue (named or default).
     *
     * @returns the next animation that is starting.
     */
    function dequeue(element, queueName, skip) {
        if (queueName !== false) {
            if (!isString(queueName)) {
                queueName = "";
            }
            var data = Data(element),
                animation = data.queueList[queueName];
            if (animation) {
                data.queueList[queueName] = animation._next || null;
                if (!skip) {
                    animate(animation);
                }
            } else if (animation === null) {
                delete data.queueList[queueName];
            }
            return animation;
        }
    }
    /**
     * Remove an animation from the active animation list. If it has a queue set
     * then remember it as the last animation for that queue, and free the one
     * that was previously there. If the animation list is completely empty then
     * mark us as finished.
     */
    function freeAnimationCall(animation) {
        var next = animation._next,
            prev = animation._prev,
            queueName = animation.queue == null ? animation.options.queue : animation.queue;
        if (State.firstNew === animation) {
            State.firstNew = next;
        }
        if (State.first === animation) {
            State.first = next;
        } else if (prev) {
            prev._next = next;
        }
        if (State.last === animation) {
            State.last = prev;
        } else if (next) {
            next._prev = prev;
        }
        if (queueName) {
            var data = Data(animation.element);
            if (data) {
                animation._next = animation._prev = undefined;
            }
        }
    }
  
    var SequencesObject = {};
  
    // Project
    /**
     * Call the complete method of an animation in a separate function so it can
     * benefit from JIT compiling while still having a try/catch block.
     */
    function callComplete(activeCall) {
        var callback = activeCall.complete || activeCall.options.complete;
        if (callback) {
            try {
                var elements = activeCall.elements;
                callback.call(elements, elements, activeCall);
            } catch (error) {
                setTimeout(function () {
                    throw error;
                }, 1);
            }
        }
    }
    /**
     * Complete an animation. This might involve restarting (for loop or repeat
     * options). Once it is finished we also check for any callbacks or Promises
     * that need updating.
     */
    function completeCall(activeCall) {
        // TODO: Check if it's not been completed already
        var options = activeCall.options,
            queue = getValue(activeCall.queue, options.queue),
            isLoop = getValue(activeCall.loop, options.loop, defaults$1.loop),
            isRepeat = getValue(activeCall.repeat, options.repeat, defaults$1.repeat),
            isStopped = activeCall._flags & 8 /* STOPPED */; // tslint:disable-line:no-bitwise
        if (!isStopped && (isLoop || isRepeat)) {
            ////////////////////
            // Option: Loop   //
            // Option: Repeat //
            ////////////////////
            if (isRepeat && isRepeat !== true) {
                activeCall.repeat = isRepeat - 1;
            } else if (isLoop && isLoop !== true) {
                activeCall.loop = isLoop - 1;
                activeCall.repeat = getValue(activeCall.repeatAgain, options.repeatAgain, defaults$1.repeatAgain);
            }
            if (isLoop) {
                activeCall._flags ^= 64 /* REVERSE */; // tslint:disable-line:no-bitwise
            }
            if (queue !== false) {
                // Can't be called when stopped so no need for an extra check.
                Data(activeCall.element).lastFinishList[queue] = activeCall.timeStart + getValue(activeCall.duration, options.duration, defaults$1.duration);
            }
            activeCall.timeStart = activeCall.ellapsedTime = activeCall.percentComplete = 0;
            activeCall._flags &= ~4 /* STARTED */; // tslint:disable-line:no-bitwise
        } else {
            var element = activeCall.element,
                data = Data(element);
            if (! --data.count && !isStopped) {
                ////////////////////////
                // Feature: Classname //
                ////////////////////////
                removeClass(element, State.className);
            }
            //////////////////////
            // Option: Complete //
            //////////////////////
            // If this is the last animation in this list then we can check for
            // and complete calls or Promises.
            // TODO: When deleting an element we need to adjust these values.
            if (options && ++options._completed === options._total) {
                if (!isStopped && options.complete) {
                    // We don't call the complete if the animation is stopped,
                    // and we clear the key to prevent it being called again.
                    callComplete(activeCall);
                    options.complete = null;
                }
                var resolver = options._resolver;
                if (resolver) {
                    // Fulfil the Promise
                    resolver(activeCall.elements);
                    delete options._resolver;
                }
            }
            ///////////////////
            // Option: Queue //
            ///////////////////
            if (queue !== false) {
                // We only do clever things with queues...
                if (!isStopped) {
                    // If we're not stopping an animation, we need to remember
                    // what time it finished so that the next animation in
                    // sequence gets the correct start time.
                    data.lastFinishList[queue] = activeCall.timeStart + getValue(activeCall.duration, options.duration, defaults$1.duration);
                }
                // Start the next animation in sequence, or delete the queue if
                // this was the last one.
                dequeue(element, queue);
            }
            // Cleanup any pointers, and remember the last animation etc.
            freeAnimationCall(activeCall);
        }
    }
  
    // Project
    /**
     * Used to register a normalization. This should never be called by users
     * directly, instead it should be called via an action:<br/>
     * <code>Velocity("registerNormalization", "Element", "name", VelocityNormalizationsFn[, false]);</code>
     *
     * The second argument is the class of the animatable object. If this is passed
     * as a class name (ie, `"Element"` -> `window["Element"]`) then this will work
     * cross-iframe. If passed as an actual class (ie `Element`) then it will
     * attempt to find the class on the window and use that name instead. If it
     * can't find it then it will use the class passed, which allows for custom
     * animation targets, but will not work cross-iframe boundary.
     *
     * The fourth argument can be an explicit <code>false</code>, which prevents
     * the property from being cached. Please note that this can be dangerous
     * for performance!
     */
    function registerNormalization(args) {
        var constructor = args[0],
            name = args[1],
            callback = args[2];
        if (isString(constructor) && !(window[constructor] instanceof Object) || !isString(constructor) && !(constructor instanceof Object)) {
            console.warn("VelocityJS: Trying to set 'registerNormalization' constructor to an invalid value:", constructor);
        } else if (!isString(name)) {
            console.warn("VelocityJS: Trying to set 'registerNormalization' name to an invalid value:", name);
        } else if (!isFunction(callback)) {
            console.warn("VelocityJS: Trying to set 'registerNormalization' callback to an invalid value:", name, callback);
        } else {
            var index = constructors.indexOf(constructor),
                nextArg = 3;
            if (index < 0 && !isString(constructor)) {
                if (constructorCache.has(constructor)) {
                    index = constructors.indexOf(constructorCache.get(constructor));
                } else {
                    for (var property in window) {
                        if (window[property] === constructor) {
                            index = constructors.indexOf(property);
                            if (index < 0) {
                                index = constructors.push(property) - 1;
                                Normalizations[index] = {};
                                constructorCache.set(constructor, property);
                            }
                            break;
                        }
                    }
                }
            }
            if (index < 0) {
                index = constructors.push(constructor) - 1;
                Normalizations[index] = {};
            }
            Normalizations[index][name] = callback;
            if (isString(args[nextArg])) {
                var unit = args[nextArg++];
                var units = NormalizationUnits[unit];
                if (!units) {
                    units = NormalizationUnits[unit] = [];
                }
                units.push(callback);
            }
            if (args[nextArg] === false) {
                NoCacheNormalizations.add(name);
            }
        }
    }
    /**
     * Used to check if a normalisation exists on a specific class.
     */
    function hasNormalization(args) {
        var constructor = args[0],
            name = args[1];
        var index = constructors.indexOf(constructor);
        if (index < 0 && !isString(constructor)) {
            if (constructorCache.has(constructor)) {
                index = constructors.indexOf(constructorCache.get(constructor));
            } else {
                for (var property in window) {
                    if (window[property] === constructor) {
                        index = constructors.indexOf(property);
                        break;
                    }
                }
            }
        }
        return index >= 0 && Normalizations[index].hasOwnProperty(name);
    }
    /**
     * Get the unit to add to a unitless number based on the normalization used.
     */
    function getNormalizationUnit(fn) {
        for (var unit in NormalizationUnits) {
            if (NormalizationUnits[unit].includes(fn)) {
                return unit;
            }
        }
        return "";
    }
    /**
     * Get the normalization for an element and propertyName combination. This
     * value should be cached at asking time, as it may change if the user adds
     * more normalizations.
     */
    function getNormalization(element, propertyName) {
        var data = Data(element);
        var fn = void 0;
        for (var index = constructors.length - 1, types = data.types; !fn && index >= 0; index--) {
            if (types & 1 << index) {
                // tslint:disable-line:no-bitwise
                fn = Normalizations[index][propertyName];
            }
        }
        return fn;
    }
    registerAction(["registerNormalization", registerNormalization]);
    registerAction(["hasNormalization", hasNormalization]);
  
    // Project
    /**
     * The singular setPropertyValue, which routes the logic for all
     * normalizations.
     */
    function setPropertyValue(element, propertyName, propertyValue, fn) {
        var noCache = NoCacheNormalizations.has(propertyName),
            data = !noCache && Data(element);
        if (noCache || data && data.cache[propertyName] !== propertyValue) {
            // By setting it to undefined we force a true "get" later
            if (!noCache) {
                data.cache[propertyName] = propertyValue || undefined;
            }
            fn = fn || getNormalization(element, propertyName);
            if (fn) {
                fn(element, propertyValue);
            }
            if (Velocity$$1.debug >= 2) {
                console.info("Set \"" + propertyName + "\": \"" + propertyValue + "\"", element);
            }
        }
    }
  
    /**
     * Remove nested `calc(0px + *)` or `calc(* + (0px + *))` correctly.
     */
    function removeNestedCalc(value) {
        if (value.indexOf("calc(") >= 0) {
            var tokens = value.split(/([\(\)])/);
            var depth = 0;
            for (var i = 0; i < tokens.length; i++) {
                var token = tokens[i];
                switch (token) {
                    case "(":
                        depth++;
                        break;
                    case ")":
                        depth--;
                        break;
                    default:
                        if (depth && token[0] === "0") {
                            tokens[i] = token.replace(/^0[a-z%]+ \+ /, "");
                        }
                        break;
                }
            }
            return tokens.join("").replace(/(?:calc)?\(([0-9\.]+[a-z%]+)\)/g, "$1");
        }
        return value;
    }
  
    /**
     * Cache every camelCase match to avoid repeating lookups.
     */
    var cache$2 = {};
    /**
     * Camelcase a property name into its JavaScript notation (e.g.
     * "background-color" ==> "backgroundColor"). Camelcasing is used to
     * normalize property names between and across calls.
     */
    function camelCase(property) {
      var fixed = cache$2[property];
      if (fixed) {
        return fixed;
      }
      return cache$2[property] = property.replace(/-([a-z])/g, function ($, letter) {
        return letter.toUpperCase();
      });
    }
  
    // Constants
    var rxColor6 = /#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/gi,
        rxColor3 = /#([a-f\d])([a-f\d])([a-f\d])/gi,
        rxColorName = /(rgba?\(\s*)?(\b[a-z]+\b)/g,
        rxRGB = /rgb(a?)\(([^\)]+)\)/gi,
        rxSpaces = /\s+/g;
    /**
     * This is the list of color names -> rgb values. The object is in here so
     * that the actual name conversion can be in a separate file and not
     * included for custom builds.
     */
    var ColorNames = {};
    /**
     * Convert a hex list to an rgba value. Designed to be used in replace.
     */
    function makeRGBA(ignore, r, g, b) {
        return "rgba(" + parseInt(r, 16) + "," + parseInt(g, 16) + "," + parseInt(b, 16) + ",1)";
    }
    /**
     * Replace any css colour name with its rgba() value. It is possible to use
     * the name within an "rgba(blue, 0.4)" string this way.
     */
    function fixColors(str) {
        return str.replace(rxColor6, makeRGBA).replace(rxColor3, function ($0, r, g, b) {
            return makeRGBA($0, r + r, g + g, b + b);
        }).replace(rxColorName, function ($0, $1, $2) {
            if (ColorNames[$2]) {
                return ($1 ? $1 : "rgba(") + ColorNames[$2] + ($1 ? "" : ",1)");
            }
            return $0;
        }).replace(rxRGB, function ($0, $1, $2) {
            return "rgba(" + ($2.replace(rxSpaces, "") + ($1 ? "" : ",1")) + ")";
        });
    }
  
    // Project
    /**
     * Figure out the dimensions for this width / height based on the
     * potential borders and whether we care about them.
     */
    function augmentDimension(element, name, wantInner) {
        var isBorderBox = getPropertyValue(element, "boxSizing").toString().toLowerCase() === "border-box";
        if (isBorderBox === wantInner) {
            // in box-sizing mode, the CSS width / height accessors already
            // give the outerWidth / outerHeight.
            var sides = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"],
                fields = ["padding" + sides[0], "padding" + sides[1], "border" + sides[0] + "Width", "border" + sides[1] + "Width"];
            var augment = 0;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;
  
            try {
                for (var _iterator = fields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var field = _step.value;
  
                    var value = parseFloat(getPropertyValue(element, field));
                    if (!isNaN(value)) {
                        augment += value;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
  
            return wantInner ? -augment : augment;
        }
        return 0;
    }
  
    // Project
    /**
     * Get the width or height of an element, pulled out as it can be used when the
     * in two locations so don't want to repeat it.
     */
    function getWidthHeight(element, property) {
        return element.getBoundingClientRect()[property] + augmentDimension(element, property, true) + "px";
    }
    // TODO: This is still a complete mess
    function computePropertyValue(element, property) {
        var data = Data(element),
  
        // If computedStyle is cached, use it. If not then get the correct one
        // for the element to support cross-iframe boundaries.
        computedStyle = data.computedStyle ? data.computedStyle : data.window.getComputedStyle(element, null);
        var computedValue = 0;
        if (!data.computedStyle) {
            data.computedStyle = computedStyle;
        }
        if (computedStyle["display"] === "none") {
            switch (property) {
                case "width":
                case "height":
                    // Browsers do not return height and width values for elements
                    // that are set to display:"none". Thus, we temporarily toggle
                    // display to the element type's default value.
                    setPropertyValue(element, "display", "auto");
                    computedValue = getWidthHeight(element, property);
                    setPropertyValue(element, "display", "none");
                    return String(computedValue);
            }
        }
        /* IE and Firefox do not return a value for the generic borderColor -- they only return individual values for each border side's color.
         Also, in all browsers, when border colors aren't all the same, a compound value is returned that Velocity isn't setup to parse.
         So, as a polyfill for querying individual border side colors, we just return the top border's color and animate all borders from that value. */
        /* TODO: There is a borderColor normalisation in legacy/ - figure out where this is needed... */
        computedValue = computedStyle[property];
        /* Fall back to the property's style value (if defined) when computedValue returns nothing,
         which can happen when the element hasn't been painted. */
        if (!computedValue) {
            computedValue = element.style[property];
        }
        /* For top, right, bottom, and left (TRBL) values that are set to "auto" on elements of "fixed" or "absolute" position,
         defer to jQuery for converting "auto" to a numeric value. (For elements with a "static" or "relative" position, "auto" has the same
         effect as being set to 0, so no conversion is necessary.) */
        /* An example of why numeric conversion is necessary: When an element with "position:absolute" has an untouched "left"
         property, which reverts to "auto", left's value is 0 relative to its parent element, but is often non-zero relative
         to its *containing* (not parent) element, which is the nearest "position:relative" ancestor or the viewport (and always the viewport in the case of "position:fixed"). */
        if (computedValue === "auto") {
            switch (property) {
                case "width":
                case "height":
                    computedValue = getWidthHeight(element, property);
                    break;
                case "top":
                case "left":
  
                case "right":
                case "bottom":
                    var position = getPropertyValue(element, "position");
                    if (position === "fixed" || position === "absolute") {
                        // Note: this has no pixel unit on its returned values,
                        // we re-add it here to conform with
                        // computePropertyValue's behavior.
                        computedValue = element.getBoundingClientRect[property] + "px";
                        break;
                    }
                // Deliberate fallthrough!
                default:
                    computedValue = "0px";
                    break;
            }
        }
        return computedValue ? String(computedValue) : "";
    }
    /**
     * Get a property value. This will grab via the cache if it exists, then
     * via any normalisations.
     */
    function getPropertyValue(element, propertyName, fn, skipCache) {
        var data = Data(element);
        var propertyValue = void 0;
        if (NoCacheNormalizations.has(propertyName)) {
            skipCache = true;
        }
        if (!skipCache && data && data.cache[propertyName] != null) {
            propertyValue = data.cache[propertyName];
        } else {
            fn = fn || getNormalization(element, propertyName);
            if (fn) {
                propertyValue = fn(element);
                if (data) {
                    data.cache[propertyName] = propertyValue;
                }
            }
        }
        if (Velocity$$1.debug >= 2) {
            console.info("Get \"" + propertyName + "\": \"" + propertyValue + "\"", element);
        }
        return propertyValue;
    }
  
    // Project
    // Constants
    var rxHex = /^#([A-f\d]{3}){1,2}$/i,
        commands = {
        function: function _function(value, element, elements, elementArrayIndex, propertyName, tween) {
            return value.call(element, elementArrayIndex, elements.length, propertyName);
        },
        number: function number(value, element, elements, elementArrayIndex, propertyName, tween) {
            return String(value) + getNormalizationUnit(tween.fn);
        },
        string: function string(value, element, elements, elementArrayIndex, propertyName, tween) {
            return fixColors(value);
        },
        undefined: function undefined(value, element, elements, elementArrayIndex, propertyName, tween) {
            return fixColors(getPropertyValue(element, propertyName, tween.fn) || "");
        }
    };
    /**
     * Expand a VelocityProperty argument into a valid sparse Tween array. This
     * pre-allocates the array as it is then the correct size and slightly
     * faster to access.
     */
    function expandProperties(animation, properties) {
        var tweens = animation.tweens = Object.create(null),
            elements = animation.elements,
            element = animation.element,
            elementArrayIndex = elements.indexOf(element),
            data = Data(element),
            queue = getValue(animation.queue, animation.options.queue),
            duration = getValue(animation.options.duration, defaults$1.duration);
        for (var property in properties) {
            if (properties.hasOwnProperty(property)) {
                var propertyName = camelCase(property),
                    fn = getNormalization(element, propertyName);
                var valueData = properties[property];
                if (!fn && propertyName !== "tween") {
                    if (Velocity$$1.debug) {
                        console.log("Skipping \"" + property + "\" due to a lack of browser support.");
                    }
                    continue;
                }
                if (valueData == null) {
                    if (Velocity$$1.debug) {
                        console.log("Skipping \"" + property + "\" due to no value supplied.");
                    }
                    continue;
                }
                var tween = tweens[propertyName] = {};
                var endValue = void 0,
                    startValue = void 0;
                tween.fn = fn;
                if (isFunction(valueData)) {
                    // If we have a function as the main argument then resolve
                    // it first, in case it returns an array that needs to be
                    // split.
                    valueData = valueData.call(element, elementArrayIndex, elements.length, elements);
                }
                if (Array.isArray(valueData)) {
                    // valueData is an array in the form of
                    // [ endValue, [, easing] [, startValue] ]
                    var arr1 = valueData[1],
                        arr2 = valueData[2];
                    endValue = valueData[0];
                    if (isString(arr1) && (/^[\d-]/.test(arr1) || rxHex.test(arr1)) || isFunction(arr1) || isNumber(arr1)) {
                        startValue = arr1;
                    } else if (isString(arr1) && Easings[arr1] || Array.isArray(arr1)) {
                        tween.easing = validateEasing(arr1, duration);
                        startValue = arr2;
                    } else {
                        startValue = arr1 || arr2;
                    }
                } else {
                    endValue = valueData;
                }
                tween.end = commands[typeof endValue === "undefined" ? "undefined" : _typeof(endValue)](endValue, element, elements, elementArrayIndex, propertyName, tween);
                if (startValue != null || queue === false || data.queueList[queue] === undefined) {
                    tween.start = commands[typeof startValue === "undefined" ? "undefined" : _typeof(startValue)](startValue, element, elements, elementArrayIndex, propertyName, tween);
                    explodeTween(propertyName, tween, duration);
                }
            }
        }
    }
    // TODO: Needs a better match for "translate3d" etc - a number must be preceded by some form of break...
    var rxToken = /((?:[+\-*/]=)?(?:[+-]?\d*\.\d+|[+-]?\d+)[a-z%]*|(?:.(?!$|[+-]?\d|[+\-*/]=[+-]?\d))+.|.)/g,
        rxNumber = /^([+\-*/]=)?([+-]?\d*\.\d+|[+-]?\d+)(.*)$/;
    /**
     * Find a pattern between multiple strings, return a VelocitySequence with
     * the pattern and the tokenised values.
     *
     * If number then animate.
     * If a string then must match.
     * If units then convert between them by wrapping in a calc().
     * - If already in a calc then nest another layer.
     * If in an rgba() then the first three numbers are rounded.
     */
    function findPattern(parts, propertyName) {
        var partsLength = parts.length,
            tokens = [],
            indexes = [];
        var numbers = void 0;
        // First tokenise the strings - these have all values, we will pull
        // numbers later.
        for (var part = 0; part < partsLength; part++) {
            if (isString(parts[part])) {
                if (parts[part] === "") {
                    tokens[part] = [""];
                } else {
                    tokens[part] = cloneArray(parts[part].match(rxToken));
                }
                indexes[part] = 0;
                // If it matches more than one thing then we've got a number.
                numbers = numbers || tokens[part].length > 1;
                //console.log(`tokens:`, parts[part], tokens[part])
            } else {
                // We have an incomplete lineup, it will get tried again later...
                return;
            }
        }
        var sequence = [],
            pattern = sequence.pattern = [],
            addString = function addString(text) {
            if (isString(pattern[pattern.length - 1])) {
                pattern[pattern.length - 1] += text;
            } else if (text) {
                pattern.push(text);
                for (var _part = 0; _part < partsLength; _part++) {
                    sequence[_part].push(null);
                }
            }
        },
            returnStringType = function returnStringType() {
            if (numbers || pattern.length > 1) {
                //console.error(`Velocity: Trying to pattern match mis-matched strings "${propertyName}":`, parts);
                return;
            }
            var isDisplay = propertyName === "display",
                isVisibility = propertyName === "visibility";
            for (var _part2 = 0; _part2 < partsLength; _part2++) {
                var value = parts[_part2];
                sequence[_part2][0] = value;
                // Don't care about duration...
                sequence[_part2].easing = validateEasing(isDisplay && value === "none" || isVisibility && value === "hidden" || !isDisplay && !isVisibility ? "at-end" : "at-start", 400);
            }
            pattern[0] = false;
            return sequence;
        };
        var more = true;
        for (var _part3 = 0; _part3 < partsLength; _part3++) {
            sequence[_part3] = [];
        }
        while (more) {
            var bits = [],
                units = [];
            var text = void 0,
                isUnitless = false,
                hasNumbers = false;
            for (var _part4 = 0; _part4 < partsLength; _part4++) {
                var index = indexes[_part4]++,
                    token = tokens[_part4][index];
                if (token) {
                    var num = token.match(rxNumber); // [ignore, change, number, unit]
                    if (num) {
                        // It's a number, possibly with a += change and unit.
                        if (text) {
                            return returnStringType();
                        }
                        var digits = parseFloat(num[2]),
                            unit = num[3],
                            change = num[1] ? num[1][0] + unit : undefined,
                            changeOrUnit = change || unit;
                        if (digits && !units.includes(changeOrUnit)) {
                            // Will be an empty string at the least.
                            units.push(changeOrUnit);
                        }
                        if (!unit) {
                            if (digits) {
                                hasNumbers = true;
                            } else {
                                isUnitless = true;
                            }
                        }
                        bits[_part4] = change ? [digits, changeOrUnit, true] : [digits, changeOrUnit];
                    } else if (bits.length) {
                        return returnStringType();
                    } else {
                        // It's a string.
                        if (!text) {
                            text = token;
                        } else if (text !== token) {
                            return returnStringType();
                        }
                    }
                } else if (!_part4) {
                    for (; _part4 < partsLength; _part4++) {
                        var index2 = indexes[_part4]++;
                        if (tokens[_part4][index2]) {
                            return returnStringType();
                        }
                    }
                    // IMPORTANT: This is the exit point.
                    more = false;
                    break;
                } else {
                    // Different
                    return;
                }
            }
            if (text) {
                addString(text);
            } else if (units.length) {
                if (units.length === 2 && isUnitless && !hasNumbers) {
                    // If we only have two units, and one is empty, and it's only empty on "0", then treat us as having one unit
                    units.splice(units[0] ? 1 : 0, 1);
                }
                if (units.length === 1) {
                    // All the same units, so append number then unit.
                    var _unit = units[0],
                        firstLetter = _unit[0];
                    switch (firstLetter) {
                        case "+":
                        case "-":
                        case "*":
                        case "/":
                            if (propertyName) {
                                console.error("Velocity: The first property must not contain a relative function \"" + propertyName + "\":", parts);
                            }
                            return;
                    }
                    pattern.push(false);
                    for (var _part5 = 0; _part5 < partsLength; _part5++) {
                        sequence[_part5].push(bits[_part5][0]);
                    }
                    addString(_unit);
                } else {
                    // Multiple units, so must be inside a calc.
                    addString("calc(");
                    var patternCalc = pattern.length - 1; // Store the beginning of our calc.
                    for (var i = 0; i < units.length; i++) {
                        var _unit2 = units[i],
                            _firstLetter = _unit2[0],
                            isComplex = _firstLetter === "*" || _firstLetter === "/",
                            isMaths = isComplex || _firstLetter === "+" || _firstLetter === "-";
                        if (isComplex) {
                            // TODO: Not sure this should be done automatically!
                            pattern[patternCalc] += "(";
                            addString(")");
                        }
                        if (i) {
                            addString(" " + (isMaths ? _firstLetter : "+") + " ");
                        }
                        pattern.push(false);
                        for (var _part6 = 0; _part6 < partsLength; _part6++) {
                            var bit = bits[_part6],
                                value = bit[1] === _unit2 ? bit[0] : bit.length === 3 ? sequence[_part6 - 1][sequence[_part6 - 1].length - 1] : isComplex ? 1 : 0;
                            sequence[_part6].push(value);
                        }
                        addString(isMaths ? _unit2.substring(1) : _unit2);
                    }
                    addString(")");
                }
            }
        }
        // We've got here, so a valid sequence - now check and fix RGB rounding
        // and calc() nesting...
        // TODO: Nested calc(a + calc(b + c)) -> calc(a + (b + c))
        for (var _i = 0, inRGB = 0; _i < pattern.length; _i++) {
            var _text = pattern[_i];
            if (isString(_text)) {
                if (inRGB && _text.indexOf(",") >= 0) {
                    inRGB++;
                } else if (_text.indexOf("rgb") >= 0) {
                    inRGB = 1;
                }
            } else if (inRGB) {
                if (inRGB < 4) {
                    pattern[_i] = true;
                } else {
                    inRGB = 0;
                }
            }
        }
        return sequence;
    }
    /**
     * Convert a string-based tween with start and end strings, into a pattern
     * based tween with arrays.
     */
    function explodeTween(propertyName, tween, duration, starting) {
        var startValue = tween.start,
            endValue = tween.end;
        if (!isString(endValue) || !isString(startValue)) {
            return;
        }
        var sequence = findPattern([startValue, endValue], propertyName);
        if (!sequence && starting) {
            // This little piece will take a startValue, split out the
            // various numbers in it, then copy the endValue into the
            // startValue while replacing the numbers in it to match the
            // original start numbers as a repeating sequence.
            // Finally this function will run again with the new
            // startValue and a now matching pattern.
            var startNumbers = startValue.match(/\d\.?\d*/g) || ["0"],
                count = startNumbers.length;
            var index = 0;
            sequence = findPattern([endValue.replace(/\d+\.?\d*/g, function () {
                return startNumbers[index++ % count];
            }), endValue], propertyName);
        }
        if (sequence) {
            if (Velocity$$1.debug) {
                console.log("Velocity: Sequence found:", sequence);
            }
            sequence[0].percent = 0;
            sequence[1].percent = 1;
            tween.sequence = sequence;
            switch (tween.easing) {
                case Easings["at-start"]:
                case Easings["during"]:
                case Easings["at-end"]:
                    sequence[0].easing = sequence[1].easing = tween.easing;
                    break;
            }
        }
    }
    /**
     * Expand all queued animations that haven't gone yet
     *
     * This will automatically expand the properties map for any recently added
     * animations so that the start and end values are correct.
     */
    function validateTweens(activeCall) {
        // This might be called on an already-ready animation
        if (State.firstNew === activeCall) {
            State.firstNew = activeCall._next;
        }
        // Check if we're actually already ready
        if (activeCall._flags & 1 /* EXPANDED */) {
                // tslint:disable-line:no-bitwise
                return;
            }
        var element = activeCall.element,
            tweens = activeCall.tweens,
            duration = getValue(activeCall.options.duration, defaults$1.duration);
        // tslint:disable-next-line:forin
        for (var propertyName in tweens) {
            var tween = tweens[propertyName];
            if (tween.start == null) {
                // Get the start value as it's not been passed in
                var startValue = getPropertyValue(activeCall.element, propertyName);
                if (isString(startValue)) {
                    tween.start = fixColors(startValue);
                    explodeTween(propertyName, tween, duration, true);
                } else if (!Array.isArray(startValue)) {
                    console.warn("bad type", tween, propertyName, startValue);
                }
            }
            if (Velocity$$1.debug) {
                console.log("tweensContainer \"" + propertyName + "\": " + JSON.stringify(tween), element);
            }
        }
        activeCall._flags |= 1 /* EXPANDED */; // tslint:disable-line:no-bitwise
    }
  
    // Project
    /**
     * Call the begin method of an animation in a separate function so it can
     * benefit from JIT compiling while still having a try/catch block.
     */
    function beginCall(activeCall) {
        var callback = activeCall.begin || activeCall.options.begin;
        if (callback) {
            try {
                var elements = activeCall.elements;
                callback.call(elements, elements, activeCall);
            } catch (error) {
                setTimeout(function () {
                    throw error;
                }, 1);
            }
        }
    }
    /**
     * Call the progress method of an animation in a separate function so it can
     * benefit from JIT compiling while still having a try/catch block.
     */
    function progressCall(activeCall) {
        var callback = activeCall.progress || activeCall.options.progress;
        if (callback) {
            try {
                var elements = activeCall.elements,
                    percentComplete = activeCall.percentComplete,
                    options = activeCall.options,
                    tweenValue = activeCall.tween;
                callback.call(elements, elements, percentComplete, Math.max(0, activeCall.timeStart + (activeCall.duration != null ? activeCall.duration : options.duration != null ? options.duration : defaults$1.duration) - lastTick), tweenValue !== undefined ? tweenValue : String(percentComplete * 100), activeCall);
            } catch (error) {
                setTimeout(function () {
                    throw error;
                }, 1);
            }
        }
    }
    /**
     * Call callbacks, potentially run async with the main animation thread.
     */
    function asyncCallbacks() {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;
  
        try {
            for (var _iterator = progressed[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var activeCall = _step.value;
  
                progressCall(activeCall);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
  
        progressed.clear();
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;
  
        try {
            for (var _iterator2 = completed[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _activeCall = _step2.value;
  
                completeCall(_activeCall);
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }
  
        completed.clear();
    }
    /**************
     Timing
     **************/
    var FRAME_TIME = 1000 / 60,
  
    /**
     * Animations with a Complete callback.
     */
    completed = new Set(),
  
    /**
     * Animations with a Progress callback.
     */
    progressed = new Set(),
  
    /**
     * Shim for window.performance in case it doesn't exist
     */
    performance = function () {
        var perf = window.performance || {};
        if (typeof perf.now !== "function") {
            var nowOffset = perf.timing && perf.timing.navigationStart ? perf.timing.navigationStart : now();
            perf.now = function () {
                return now() - nowOffset;
            };
        }
        return perf;
    }(),
  
    /**
     * Proxy function for when rAF is not available.
     *
     * This should hopefully never be used as the browsers often throttle
     * this to less than one frame per second in the background, making it
     * completely unusable.
     */
    rAFProxy = function rAFProxy(callback) {
        return setTimeout(callback, Math.max(0, FRAME_TIME - (performance.now() - lastTick)));
    },
  
    /**
     * Either requestAnimationFrame, or a shim for it.
     */
    rAFShim = window.requestAnimationFrame || rAFProxy;
    /**
     * Set if we are currently inside a tick() to prevent double-calling.
     */
    var ticking = void 0,
  
    /**
     * A background WebWorker that sends us framerate messages when we're in
     * the background. Without this we cannot maintain frame accuracy.
     */
    worker = void 0;
    /**
     * The time that the last animation frame ran at. Set from tick(), and used
     * for missing rAF (ie, when not in focus etc).
     */
    var lastTick = 0;
    /**
     * WebWorker background function.
     *
     * When we're in the background this will send us a msg every tick, when in
     * the foreground it won't.
     *
     * When running in the background the browser reduces allowed CPU etc, so
     * we raun at 30fps instead of 60fps.
     */
    function workerFn() {
        var _this = this;
  
        var interval = void 0;
        this.onmessage = function (e) {
            switch (e.data) {
                case true:
                    if (!interval) {
                        interval = setInterval(function () {
                            _this.postMessage(true);
                        }, 1000 / 30);
                    }
                    break;
                case false:
                    if (interval) {
                        clearInterval(interval);
                        interval = 0;
                    }
                    break;
                default:
                    _this.postMessage(e.data);
                    break;
            }
        };
    }
    try {
        // Create the worker - this might not be supported, hence the try/catch.
        worker = new Worker(URL.createObjectURL(new Blob(["(" + workerFn + ")()"])));
        // Whenever the worker sends a message we tick()
        worker.onmessage = function (e) {
            if (e.data === true) {
                tick();
            } else {
                asyncCallbacks();
            }
        };
        // And watch for going to the background to start the WebWorker running.
        if (!State.isMobile && document.hidden !== undefined) {
            document.addEventListener("visibilitychange", function () {
                worker.postMessage(State.isTicking && document.hidden);
            });
        }
    } catch (e) {}
    /*
     * WebWorkers are not supported in this format. This can happen in IE10
     * where it can't create one from a blob this way. We fallback, but make
     * no guarantees towards accuracy in this case.
     */
  
    /**
     * Called on every tick, preferably through rAF. This is reponsible for
     * initialising any new animations, then starting any that need starting.
     * Finally it will expand any tweens and set the properties relating to
     * them. If there are any callbacks relating to the animations then they
     * will attempt to call at the end (with the exception of "begin").
     */
    function tick(timestamp) {
        if (ticking) {
            // Should never happen - but if we've swapped back from hidden to
            // visibile then we want to make sure
            return;
        }
        ticking = true;
        /* An empty timestamp argument indicates that this is the first tick occurence since ticking was turned on.
         We leverage this metadata to fully ignore the first tick pass since RAF's initial pass is fired whenever
         the browser's next tick sync time occurs, which results in the first elements subjected to Velocity
         calls being animated out of sync with any elements animated immediately thereafter. In short, we ignore
         the first RAF tick pass so that elements being immediately consecutively animated -- instead of simultaneously animated
         by the same Velocity call -- are properly batched into the same initial RAF tick and consequently remain in sync thereafter. */
        if (timestamp !== false) {
            var timeCurrent = performance.now(),
                deltaTime = lastTick ? timeCurrent - lastTick : FRAME_TIME,
                defaultSpeed = defaults$1.speed,
                defaultEasing = defaults$1.easing,
                defaultDuration = defaults$1.duration;
            var activeCall = void 0,
                nextCall = void 0;
            if (deltaTime >= defaults$1.minFrameTime || !lastTick) {
                lastTick = timeCurrent;
                /********************
                 Call Iteration
                 ********************/
                // Expand any tweens that might need it.
                while (State.firstNew) {
                    validateTweens(State.firstNew);
                }
                // Iterate through each active call.
                for (activeCall = State.first; activeCall && activeCall !== State.firstNew; activeCall = activeCall._next) {
                    var element = activeCall.element,
                        data = Data(element);
                    // Check to see if this element has been deleted midway
                    // through the animation. If it's gone then end this
                    // animation.
                    if (!element.parentNode || !data) {
                        // TODO: Remove safely - decrease count, delete data, remove from arrays
                        freeAnimationCall(activeCall);
                        continue;
                    }
                    // Don't bother getting until we can use these.
                    var options = activeCall.options,
                        flags = activeCall._flags;
                    var timeStart = activeCall.timeStart;
                    // If this is the first time that this call has been
                    // processed by tick() then we assign timeStart now so that
                    // it's value is as close to the real animation start time
                    // as possible.
                    if (!timeStart) {
                        var queue = activeCall.queue != null ? activeCall.queue : options.queue;
                        timeStart = timeCurrent - deltaTime;
                        if (queue !== false) {
                            timeStart = Math.max(timeStart, data.lastFinishList[queue] || 0);
                        }
                        activeCall.timeStart = timeStart;
                    }
                    // If this animation is paused then skip processing unless
                    // it has been set to resume.
                    if (flags & 16 /* PAUSED */) {
                            // tslint:disable-line:no-bitwise
                            // Update the time start to accomodate the paused
                            // completion amount.
                            activeCall.timeStart += deltaTime;
                            continue;
                        }
                    // Check if this animation is ready - if it's synced then it
                    // needs to wait for all other animations in the sync
                    if (!(flags & 2 /* READY */)) {
                        // tslint:disable-line:no-bitwise
                        activeCall._flags |= 2 /* READY */; // tslint:disable-line:no-bitwise
                        options._ready++;
                    }
                }
                // Need to split the loop, as ready sync animations must all get
                // the same start time.
                for (activeCall = State.first; activeCall && activeCall !== State.firstNew; activeCall = nextCall) {
                    var _flags = activeCall._flags;
                    nextCall = activeCall._next;
                    if (!(_flags & 2 /* READY */) || _flags & 16 /* PAUSED */) {
                        // tslint:disable-line:no-bitwise
                        continue;
                    }
                    var _options = activeCall.options;
                    if (_flags & 32 /* SYNC */ && _options._ready < _options._total) {
                        // tslint:disable-line:no-bitwise
                        activeCall.timeStart += deltaTime;
                        continue;
                    }
                    var speed = activeCall.speed != null ? activeCall.speed : _options.speed != null ? _options.speed : defaultSpeed;
                    var _timeStart = activeCall.timeStart;
                    // Don't bother getting until we can use these.
                    if (!(_flags & 4 /* STARTED */)) {
                        // tslint:disable-line:no-bitwise
                        var delay = activeCall.delay != null ? activeCall.delay : _options.delay;
                        // Make sure anything we've delayed doesn't start
                        // animating yet, there might still be an active delay
                        // after something has been un-paused
                        if (delay) {
                            if (_timeStart + delay / speed > timeCurrent) {
                                continue;
                            }
                            activeCall.timeStart = _timeStart += delay / (delay > 0 ? speed : 1);
                        }
                        activeCall._flags |= 4 /* STARTED */; // tslint:disable-line:no-bitwise
                        // The begin callback is fired once per call, not once
                        // per element, and is passed the full raw DOM element
                        // set as both its context and its first argument.
                        if (_options._started++ === 0) {
                            _options._first = activeCall;
                            if (_options.begin) {
                                // Pass to an external fn with a try/catch block for optimisation
                                beginCall(activeCall);
                                // Only called once, even if reversed or repeated
                                _options.begin = undefined;
                            }
                        }
                    }
                    if (speed !== 1) {
                        // On the first frame we may have a shorter delta
                        // const delta = Math.min(deltaTime, timeCurrent - timeStart);
                        activeCall.timeStart = _timeStart += Math.min(deltaTime, timeCurrent - _timeStart) * (1 - speed);
                    }
                    var activeEasing = activeCall.easing != null ? activeCall.easing : _options.easing != null ? _options.easing : defaultEasing,
                        millisecondsEllapsed = activeCall.ellapsedTime = timeCurrent - _timeStart,
                        duration = activeCall.duration != null ? activeCall.duration : _options.duration != null ? _options.duration : defaultDuration,
                        percentComplete = activeCall.percentComplete = Velocity$$1.mock ? 1 : Math.min(millisecondsEllapsed / duration, 1),
                        tweens = activeCall.tweens,
                        reverse = _flags & 64 /* REVERSE */; // tslint:disable-line:no-bitwise
                    if (activeCall.progress || _options._first === activeCall && _options.progress) {
                        progressed.add(activeCall);
                    }
                    if (percentComplete === 1) {
                        completed.add(activeCall);
                    }
                    // tslint:disable-next-line:forin
                    for (var property in tweens) {
                        // For every element, iterate through each property.
                        var tween = tweens[property],
                            sequence = tween.sequence,
                            pattern = sequence.pattern;
                        var currentValue = "",
                            i = 0;
                        if (pattern) {
                            var easingComplete = (tween.easing || activeEasing)(percentComplete, 0, 1, property);
                            var best = 0;
                            for (var j = 0; j < sequence.length - 1; j++) {
                                if (sequence[j].percent < easingComplete) {
                                    best = j;
                                }
                            }
                            var tweenFrom = sequence[best],
                                tweenTo = sequence[best + 1] || tweenFrom,
                                rawPercent = (percentComplete - tweenFrom.percent) / (tweenTo.percent - tweenFrom.percent),
                                tweenPercent = reverse ? 1 - rawPercent : rawPercent,
                                easing = tweenTo.easing || activeEasing || linearEasing;
                            for (; i < pattern.length; i++) {
                                var startValue = tweenFrom[i];
                                if (startValue == null) {
                                    currentValue += pattern[i];
                                } else {
                                    var endValue = tweenTo[i];
                                    if (startValue === endValue) {
                                        currentValue += startValue;
                                    } else {
                                        // All easings must deal with numbers except for our internal ones.
                                        var result = easing(tweenPercent, startValue, endValue, property);
                                        currentValue += pattern[i] !== true ? result : Math.round(result);
                                    }
                                }
                            }
                            if (property !== "tween") {
                                if (percentComplete === 1) {
                                    currentValue = removeNestedCalc(currentValue);
                                }
                                // TODO: To solve an IE<=8 positioning bug, the unit type must be dropped when setting a property value of 0 - add normalisations to legacy
                                setPropertyValue(activeCall.element, property, currentValue, tween.fn);
                            } else {
                                // Skip the fake 'tween' property as that is only
                                // passed into the progress callback.
                                activeCall.tween = currentValue;
                            }
                        } else {
                            console.warn("VelocityJS: Missing pattern:", property, JSON.stringify(tween[property]));
                            delete tweens[property];
                        }
                    }
                }
                if (progressed.size || completed.size) {
                    if (!document.hidden) {
                        asyncCallbacks();
                    } else if (worker) {
                        worker.postMessage("");
                    } else {
                        setTimeout(asyncCallbacks, 1);
                    }
                }
            }
        }
        if (State.first) {
            State.isTicking = true;
            if (!document.hidden) {
                rAFShim(tick);
            } else if (!worker) {
                rAFProxy(tick);
            } else if (timestamp === false) {
                // Make sure we turn on the messages.
                worker.postMessage(true);
            }
        } else {
            State.isTicking = false;
            lastTick = 0;
            if (document.hidden && worker) {
                // Make sure we turn off the messages.
                worker.postMessage(false);
            }
        }
        ticking = false;
    }
  
    // Project
    /**
     * Check if an animation should be finished, and if so we set the tweens to
     * the final value for it, then call complete.
     */
    function checkAnimationShouldBeFinished(animation, queueName, defaultQueue) {
        validateTweens(animation);
        if (queueName === undefined || queueName === getValue(animation.queue, animation.options.queue, defaultQueue)) {
            if (!(animation._flags & 4 /* STARTED */)) {
                // tslint:disable-line:no-bitwise
                // Copied from tick.ts - ensure that the animation is completely
                // valid and run begin() before complete().
                var options = animation.options;
                // The begin callback is fired once per call, not once per
                // element, and is passed the full raw DOM element set as both
                // its context and its first argument.
                if (options._started++ === 0) {
                    options._first = animation;
                    if (options.begin) {
                        // Pass to an external fn with a try/catch block for optimisation
                        beginCall(animation);
                        // Only called once, even if reversed or repeated
                        options.begin = undefined;
                    }
                }
                animation._flags |= 4 /* STARTED */; // tslint:disable-line:no-bitwise
            }
            // tslint:disable-next-line:forin
            for (var property in animation.tweens) {
                var tween = animation.tweens[property],
                    sequence = tween.sequence,
                    pattern = sequence.pattern;
                var currentValue = "",
                    i = 0;
                if (pattern) {
                    var endValues = sequence[sequence.length - 1];
                    for (; i < pattern.length; i++) {
                        var endValue = endValues[i];
                        currentValue += endValue == null ? pattern[i] : endValue;
                    }
                }
                setPropertyValue(animation.element, property, currentValue, tween.fn);
            }
            completeCall(animation);
        }
    }
    /**
     * When the finish action is triggered, the elements' currently active call is
     * immediately finished. When an element is finished, the next item in its
     * animation queue is immediately triggered. If passed via a chained call
     * then this will only target the animations in that call, and not the
     * elements linked to it.
     *
     * A queue name may be passed in to specify that only animations on the
     * named queue are finished. The default queue is named "". In addition the
     * value of `false` is allowed for the queue name.
     *
     * An final argument may be passed in to clear an element's remaining queued
     * calls. This may only be the value `true`.
     */
    function finish(args, elements, promiseHandler) {
        var queueName = validateQueue(args[0], true),
            defaultQueue = defaults$1.queue,
            finishAll = args[queueName === undefined ? 0 : 1] === true;
        if (isVelocityResult(elements) && elements.velocity.animations) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;
  
            try {
                for (var _iterator = elements.velocity.animations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var animation = _step.value;
  
                    checkAnimationShouldBeFinished(animation, queueName, defaultQueue);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        } else {
            while (State.firstNew) {
                validateTweens(State.firstNew);
            }
            for (var activeCall = State.first, nextCall; activeCall && (finishAll || activeCall !== State.firstNew); activeCall = nextCall || State.firstNew) {
                nextCall = activeCall._next;
                if (!elements || elements.includes(activeCall.element)) {
                    checkAnimationShouldBeFinished(activeCall, queueName, defaultQueue);
                }
            }
        }
        if (promiseHandler) {
            if (isVelocityResult(elements) && elements.velocity.animations && elements.then) {
                elements.then(promiseHandler._resolver);
            } else {
                promiseHandler._resolver(elements);
            }
        }
    }
    registerAction(["finish", finish], true);
  
    /**
     * Used to map getters for the various AnimationFlags.
     */
    var animationFlags = {
        isExpanded: 1 /* EXPANDED */
        , isReady: 2 /* READY */
        , isStarted: 4 /* STARTED */
        , isStopped: 8 /* STOPPED */
        , isPaused: 16 /* PAUSED */
        , isSync: 32 /* SYNC */
        , isReverse: 64 /* REVERSE */
    };
    /**
     * Get or set an option or running AnimationCall data value. If there is no
     * value passed then it will get, otherwise we will set.
     *
     * NOTE: When using "get" this will not touch the Promise as it is never
     * returned to the user.
     */
    function option(args, elements, promiseHandler, action) {
        var key = args[0],
            queue = action.indexOf(".") >= 0 ? action.replace(/^.*\./, "") : undefined,
            queueName = queue === "false" ? false : validateQueue(queue, true);
        var animations = void 0,
            value = args[1];
        if (!key) {
            console.warn("VelocityJS: Cannot access a non-existant key!");
            return null;
        }
        // If we're chaining the return value from Velocity then we are only
        // interested in the values related to that call
        if (isVelocityResult(elements) && elements.velocity.animations) {
            animations = elements.velocity.animations;
        } else {
            animations = [];
            for (var activeCall = State.first; activeCall; activeCall = activeCall._next) {
                if (elements.indexOf(activeCall.element) >= 0 && getValue(activeCall.queue, activeCall.options.queue) === queueName) {
                    animations.push(activeCall);
                }
            }
            // If we're dealing with multiple elements that are pointing at a
            // single running animation, then instead treat them as a single
            // animation.
            if (elements.length > 1 && animations.length > 1) {
                var i = 1,
                    options = animations[0].options;
                while (i < animations.length) {
                    if (animations[i++].options !== options) {
                        options = null;
                        break;
                    }
                }
                // TODO: this needs to check that they're actually a sync:true animation to merge the results, otherwise the individual values may be different
                if (options) {
                    animations = [animations[0]];
                }
            }
        }
        // GET
        if (value === undefined) {
            var result = [],
                flag = animationFlags[key];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;
  
            try {
                for (var _iterator = animations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var animation = _step.value;
  
                    if (flag === undefined) {
                        // A normal key to get.
                        result.push(getValue(animation[key], animation.options[key]));
                    } else {
                        // A flag that we're checking against.
                        result.push((animation._flags & flag) === 0); // tslint:disable-line:no-bitwise
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
  
            if (elements.length === 1 && animations.length === 1) {
                // If only a single animation is found and we're only targetting a
                // single element, then return the value directly
                return result[0];
            }
            return result;
        }
        // SET
        var isPercentComplete = void 0;
        switch (key) {
            case "cache":
                value = validateCache(value);
                break;
            case "begin":
                value = validateBegin(value);
                break;
            case "complete":
                value = validateComplete(value);
                break;
            case "delay":
                value = validateDelay(value);
                break;
            case "duration":
                value = validateDuration(value);
                break;
            case "fpsLimit":
                value = validateFpsLimit(value);
                break;
            case "loop":
                value = validateLoop(value);
                break;
            case "percentComplete":
                isPercentComplete = true;
                value = parseFloat(value);
                break;
            case "repeat":
            case "repeatAgain":
                value = validateRepeat(value);
                break;
            default:
                if (key[0] !== "_") {
                    var num = parseFloat(value);
                    if (value === String(num)) {
                        value = num;
                    }
                    break;
                }
            // deliberate fallthrough
            case "queue":
            case "promise":
            case "promiseRejectEmpty":
            case "easing":
            case "started":
                console.warn("VelocityJS: Trying to set a read-only key:", key);
                return;
        }
        if (value === undefined || value !== value) {
            console.warn("VelocityJS: Trying to set an invalid value:" + key + "=" + value + " (" + args[1] + ")");
            return null;
        }
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;
  
        try {
            for (var _iterator2 = animations[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _animation = _step2.value;
  
                if (isPercentComplete) {
                    _animation.timeStart = lastTick - getValue(_animation.duration, _animation.options.duration, defaults$1.duration) * value;
                } else {
                    _animation[key] = value;
                }
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }
  
        if (promiseHandler) {
            if (isVelocityResult(elements) && elements.velocity.animations && elements.then) {
                elements.then(promiseHandler._resolver);
            } else {
                promiseHandler._resolver(elements);
            }
        }
    }
    registerAction(["option", option], true);
  
    // Project
    /**
     * Check if an animation should be paused / resumed.
     */
    function checkAnimation(animation, queueName, defaultQueue, isPaused) {
        if (queueName === undefined || queueName === getValue(animation.queue, animation.options.queue, defaultQueue)) {
            if (isPaused) {
                animation._flags |= 16 /* PAUSED */; // tslint:disable-line:no-bitwise
            } else {
                animation._flags &= ~16 /* PAUSED */; // tslint:disable-line:no-bitwise
            }
        }
    }
    /**
     * Pause and Resume are call-wide (not on a per element basis). Thus, calling pause or resume on a
     * single element will cause any calls that contain tweens for that element to be paused/resumed
     * as well.
     */
    function pauseResume(args, elements, promiseHandler, action) {
        var isPaused = action.indexOf("pause") === 0,
            queue = action.indexOf(".") >= 0 ? action.replace(/^.*\./, "") : undefined,
            queueName = queue === "false" ? false : validateQueue(args[0]),
            defaultQueue = defaults$1.queue;
        if (isVelocityResult(elements) && elements.velocity.animations) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;
  
            try {
                for (var _iterator = elements.velocity.animations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var animation = _step.value;
  
                    checkAnimation(animation, queueName, defaultQueue, isPaused);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        } else {
            var activeCall = State.first;
            while (activeCall) {
                if (!elements || elements.includes(activeCall.element)) {
                    checkAnimation(activeCall, queueName, defaultQueue, isPaused);
                }
                activeCall = activeCall._next;
            }
        }
        if (promiseHandler) {
            if (isVelocityResult(elements) && elements.velocity.animations && elements.then) {
                elements.then(promiseHandler._resolver);
            } else {
                promiseHandler._resolver(elements);
            }
        }
    }
    registerAction(["pause", pauseResume], true);
    registerAction(["resume", pauseResume], true);
  
    // Project
    /**
     * Get or set a style of Nomralised property value on one or more elements.
     * If there is no value passed then it will get, otherwise we will set.
     *
     * NOTE: When using "get" this will not touch the Promise as it is never
     * returned to the user.
     *
     * This can fail to set, and will reject the Promise if it does so.
     *
     * Velocity(elements, "style", "property", "value") => elements;
     * Velocity(elements, "style", {"property": "value", ...}) => elements;
     * Velocity(element, "style", "property") => "value";
     * Velocity(elements, "style", "property") => ["value", ...];
     */
    function propertyAction(args, elements, promiseHandler, action) {
        var property = args[0],
            value = args[1];
        if (!property) {
            console.warn("VelocityJS: Cannot access a non-existant property!");
            return null;
        }
        // GET
        if (value === undefined && !isPlainObject(property)) {
            if (Array.isArray(property)) {
                if (elements.length === 1) {
                    var result = {};
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;
  
                    try {
                        for (var _iterator = property[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var prop = _step.value;
  
                            result[prop] = fixColors(getPropertyValue(elements[0], prop));
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
  
                    return result;
                } else {
                    var _result = [];
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;
  
                    try {
                        for (var _iterator2 = elements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var element = _step2.value;
  
                            var res = {};
                            var _iteratorNormalCompletion3 = true;
                            var _didIteratorError3 = false;
                            var _iteratorError3 = undefined;
  
                            try {
                                for (var _iterator3 = property[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                    var _prop = _step3.value;
  
                                    res[_prop] = fixColors(getPropertyValue(element, _prop));
                                }
                            } catch (err) {
                                _didIteratorError3 = true;
                                _iteratorError3 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                        _iterator3.return();
                                    }
                                } finally {
                                    if (_didIteratorError3) {
                                        throw _iteratorError3;
                                    }
                                }
                            }
  
                            _result.push(res);
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
  
                    return _result;
                }
            } else {
                // If only a single animation is found and we're only targetting a
                // single element, then return the value directly
                if (elements.length === 1) {
                    return fixColors(getPropertyValue(elements[0], property));
                }
                var _result2 = [];
                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = undefined;
  
                try {
                    for (var _iterator4 = elements[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                        var _element = _step4.value;
  
                        _result2.push(fixColors(getPropertyValue(_element, property)));
                    }
                } catch (err) {
                    _didIteratorError4 = true;
                    _iteratorError4 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
                            _iterator4.return();
                        }
                    } finally {
                        if (_didIteratorError4) {
                            throw _iteratorError4;
                        }
                    }
                }
  
                return _result2;
            }
        }
        // SET
        var error = [];
        if (isPlainObject(property)) {
            for (var propertyName in property) {
                if (property.hasOwnProperty(propertyName)) {
                    var _iteratorNormalCompletion5 = true;
                    var _didIteratorError5 = false;
                    var _iteratorError5 = undefined;
  
                    try {
                        for (var _iterator5 = elements[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                            var _element2 = _step5.value;
  
                            var propertyValue = property[propertyName];
                            if (isString(propertyValue) || isNumber(propertyValue)) {
                                setPropertyValue(_element2, propertyName, property[propertyName]);
                            } else {
                                error.push("Cannot set a property \"" + propertyName + "\" to an unknown type: " + (typeof propertyValue === "undefined" ? "undefined" : _typeof(propertyValue)));
                                console.warn("VelocityJS: Cannot set a property \"" + propertyName + "\" to an unknown type:", propertyValue);
                            }
                        }
                    } catch (err) {
                        _didIteratorError5 = true;
                        _iteratorError5 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                _iterator5.return();
                            }
                        } finally {
                            if (_didIteratorError5) {
                                throw _iteratorError5;
                            }
                        }
                    }
                }
            }
        } else if (isString(value) || isNumber(value)) {
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;
  
            try {
                for (var _iterator6 = elements[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var _element3 = _step6.value;
  
                    setPropertyValue(_element3, property, String(value));
                }
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                        _iterator6.return();
                    }
                } finally {
                    if (_didIteratorError6) {
                        throw _iteratorError6;
                    }
                }
            }
        } else {
            error.push("Cannot set a property \"" + property + "\" to an unknown type: " + (typeof value === "undefined" ? "undefined" : _typeof(value)));
            console.warn("VelocityJS: Cannot set a property \"" + property + "\" to an unknown type:", value);
        }
        if (promiseHandler) {
            if (error.length) {
                promiseHandler._rejecter(error.join(", "));
            } else if (isVelocityResult(elements) && elements.velocity.animations && elements.then) {
                elements.then(promiseHandler._resolver);
            } else {
                promiseHandler._resolver(elements);
            }
        }
    }
    registerAction(["property", propertyAction], true);
  
    // Project
    registerAction(["reverse", function (args, elements, promiseHandler, action) {
            // NOTE: Code needs to split out before here - but this is needed to prevent it being overridden
            throw new SyntaxError("VelocityJS: The 'reverse' action is built in and private.");
    }], true);
  
    // Project
    /**
     * Check if an animation should be stopped, and if so then set the STOPPED
     * flag on it, then call complete.
     */
    function checkAnimationShouldBeStopped(animation, queueName, defaultQueue) {
        validateTweens(animation);
        if (queueName === undefined || queueName === getValue(animation.queue, animation.options.queue, defaultQueue)) {
            animation._flags |= 8 /* STOPPED */; // tslint:disable-line:no-bitwise
            completeCall(animation);
        }
    }
    /**
     * When the stop action is triggered, the elements' currently active call is
     * immediately stopped. When an element is stopped, the next item in its
     * animation queue is immediately triggered. If passed via a chained call
     * then this will only target the animations in that call, and not the
     * elements linked to it.
     *
     * A queue name may be passed in to specify that only animations on the
     * named queue are stopped. The default queue is named "". In addition the
     * value of `false` is allowed for the queue name.
     *
     * An final argument may be passed in to clear an element's remaining queued
     * calls. This may only be the value `true`.
     *
     * Note: The stop command runs prior to Velocity's Queueing phase since its
     * behavior is intended to take effect *immediately*, regardless of the
     * element's current queue state.
     */
    function stop(args, elements, promiseHandler, action) {
        var queueName = validateQueue(args[0], true),
            defaultQueue = defaults$1.queue,
            finishAll = args[queueName === undefined ? 0 : 1] === true;
        if (isVelocityResult(elements) && elements.velocity.animations) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;
  
            try {
                for (var _iterator = elements.velocity.animations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var animation = _step.value;
  
                    checkAnimationShouldBeStopped(animation, queueName, defaultQueue);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        } else {
            while (State.firstNew) {
                validateTweens(State.firstNew);
            }
            for (var activeCall = State.first, nextCall; activeCall && (finishAll || activeCall !== State.firstNew); activeCall = nextCall || State.firstNew) {
                nextCall = activeCall._next;
                if (!elements || elements.includes(activeCall.element)) {
                    checkAnimationShouldBeStopped(activeCall, queueName, defaultQueue);
                }
            }
        }
        if (promiseHandler) {
            if (isVelocityResult(elements) && elements.velocity.animations && elements.then) {
                elements.then(promiseHandler._resolver);
            } else {
                promiseHandler._resolver(elements);
            }
        }
    }
    registerAction(["stop", stop], true);
  
    // Project
    registerAction(["style", propertyAction], true);
  
    // Project
    /**
     *
     */
    function tweenAction(args, elements, promiseHandler, action) {
        var requireForcefeeding = void 0;
        if (!elements) {
            if (!args.length) {
                console.info("Velocity(<element>, \"tween\", percentComplete, property, end | [end, <easing>, <start>], <easing>) => value\nVelocity(<element>, \"tween\", percentComplete, {property: end | [end, <easing>, <start>], ...}, <easing>) => {property: value, ...}");
                return null;
            }
            elements = [document.body];
            requireForcefeeding = true;
        } else if (elements.length !== 1) {
            // TODO: Allow more than a single element to return an array of results
            throw new Error("VelocityJS: Cannot tween more than one element!");
        }
        var percentComplete = args[0],
            fakeAnimation = {
            elements: elements,
            element: elements[0],
            queue: false,
            options: {
                duration: 1000
            },
            tweens: null
        },
            result = {};
        var properties = args[1],
            singleResult = void 0,
            maybeSequence = void 0,
            easing = args[2],
            count = 0;
        if (isString(args[1])) {
            if (SequencesObject && SequencesObject[args[1]]) {
                maybeSequence = SequencesObject[args[1]];
                properties = {};
                easing = args[2];
            } else {
                singleResult = true;
                properties = defineProperty({}, args[1], args[2]);
                easing = args[3];
            }
        } else if (Array.isArray(args[1])) {
            singleResult = true;
            properties = {
                tween: args[1]
            };
            easing = args[2];
        }
        if (!isNumber(percentComplete) || percentComplete < 0 || percentComplete > 1) {
            throw new Error("VelocityJS: Must tween a percentage from 0 to 1!");
        }
        if (!isPlainObject(properties)) {
            throw new Error("VelocityJS: Cannot tween an invalid property!");
        }
        if (requireForcefeeding) {
            for (var property in properties) {
                if (properties.hasOwnProperty(property) && (!Array.isArray(properties[property]) || properties[property].length < 2)) {
                    throw new Error("VelocityJS: When not supplying an element you must force-feed values: " + property);
                }
            }
        }
        var activeEasing = validateEasing(getValue(easing, defaults$1.easing), DEFAULT_DURATION);
        if (maybeSequence) {
            expandSequence(fakeAnimation, maybeSequence);
        } else {
            expandProperties(fakeAnimation, properties);
        }
        // tslint:disable-next-line:forin
        for (var _property in fakeAnimation.tweens) {
            // For every element, iterate through each property.
            var propertyTween = fakeAnimation.tweens[_property],
                sequence = propertyTween.sequence,
                pattern = sequence.pattern;
            var currentValue = "",
                i = 0;
            count++;
            if (pattern) {
                var easingComplete = (propertyTween.easing || activeEasing)(percentComplete, 0, 1, _property);
                var best = 0;
                for (var j = 0; j < sequence.length - 1; j++) {
                    if (sequence[j].percent < easingComplete) {
                        best = j;
                    }
                }
                var tweenFrom = sequence[best],
                    tweenTo = sequence[best + 1] || tweenFrom,
                    tweenPercent = (percentComplete - tweenFrom.percent) / (tweenTo.percent - tweenFrom.percent),
                    tweenEasing = tweenTo.easing || linearEasing;
                for (; i < pattern.length; i++) {
                    var startValue = tweenFrom[i];
                    if (startValue == null) {
                        currentValue += pattern[i];
                    } else {
                        var endValue = tweenTo[i];
                        if (startValue === endValue) {
                            currentValue += startValue;
                        } else {
                            // All easings must deal with numbers except for our internal ones.
                            var value = tweenEasing(tweenPercent, startValue, endValue, _property);
                            currentValue += pattern[i] === true ? Math.round(value) : value;
                        }
                    }
                }
                result[_property] = currentValue;
            }
        }
        if (singleResult && count === 1) {
            for (var _property2 in result) {
                if (result.hasOwnProperty(_property2)) {
                    return result[_property2];
                }
            }
        }
        return result;
    }
    registerAction(["tween", tweenAction], true);
  
    // Project
    /**
     * Converting from hex as it makes for a smaller file.
     */
    var colorValues = {
        aliceblue: 0xF0F8FF,
        antiquewhite: 0xFAEBD7,
        aqua: 0x00FFFF,
        aquamarine: 0x7FFFD4,
        azure: 0xF0FFFF,
        beige: 0xF5F5DC,
        bisque: 0xFFE4C4,
        black: 0x000000,
        blanchedalmond: 0xFFEBCD,
        blue: 0x0000FF,
        blueviolet: 0x8A2BE2,
        brown: 0xA52A2A,
        burlywood: 0xDEB887,
        cadetblue: 0x5F9EA0,
        chartreuse: 0x7FFF00,
        chocolate: 0xD2691E,
        coral: 0xFF7F50,
        cornflowerblue: 0x6495ED,
        cornsilk: 0xFFF8DC,
        crimson: 0xDC143C,
        cyan: 0x00FFFF,
        darkblue: 0x00008B,
        darkcyan: 0x008B8B,
        darkgoldenrod: 0xB8860B,
        darkgray: 0xA9A9A9,
        darkgrey: 0xA9A9A9,
        darkgreen: 0x006400,
        darkkhaki: 0xBDB76B,
        darkmagenta: 0x8B008B,
        darkolivegreen: 0x556B2F,
        darkorange: 0xFF8C00,
        darkorchid: 0x9932CC,
        darkred: 0x8B0000,
        darksalmon: 0xE9967A,
        darkseagreen: 0x8FBC8F,
        darkslateblue: 0x483D8B,
        darkslategray: 0x2F4F4F,
        darkslategrey: 0x2F4F4F,
        darkturquoise: 0x00CED1,
        darkviolet: 0x9400D3,
        deeppink: 0xFF1493,
        deepskyblue: 0x00BFFF,
        dimgray: 0x696969,
        dimgrey: 0x696969,
        dodgerblue: 0x1E90FF,
        firebrick: 0xB22222,
        floralwhite: 0xFFFAF0,
        forestgreen: 0x228B22,
        fuchsia: 0xFF00FF,
        gainsboro: 0xDCDCDC,
        ghostwhite: 0xF8F8FF,
        gold: 0xFFD700,
        goldenrod: 0xDAA520,
        gray: 0x808080,
        grey: 0x808080,
        green: 0x008000,
        greenyellow: 0xADFF2F,
        honeydew: 0xF0FFF0,
        hotpink: 0xFF69B4,
        indianred: 0xCD5C5C,
        indigo: 0x4B0082,
        ivory: 0xFFFFF0,
        khaki: 0xF0E68C,
        lavender: 0xE6E6FA,
        lavenderblush: 0xFFF0F5,
        lawngreen: 0x7CFC00,
        lemonchiffon: 0xFFFACD,
        lightblue: 0xADD8E6,
        lightcoral: 0xF08080,
        lightcyan: 0xE0FFFF,
        lightgoldenrodyellow: 0xFAFAD2,
        lightgray: 0xD3D3D3,
        lightgrey: 0xD3D3D3,
        lightgreen: 0x90EE90,
        lightpink: 0xFFB6C1,
        lightsalmon: 0xFFA07A,
        lightseagreen: 0x20B2AA,
        lightskyblue: 0x87CEFA,
        lightslategray: 0x778899,
        lightslategrey: 0x778899,
        lightsteelblue: 0xB0C4DE,
        lightyellow: 0xFFFFE0,
        lime: 0x00FF00,
        limegreen: 0x32CD32,
        linen: 0xFAF0E6,
        magenta: 0xFF00FF,
        maroon: 0x800000,
        mediumaquamarine: 0x66CDAA,
        mediumblue: 0x0000CD,
        mediumorchid: 0xBA55D3,
        mediumpurple: 0x9370DB,
        mediumseagreen: 0x3CB371,
        mediumslateblue: 0x7B68EE,
        mediumspringgreen: 0x00FA9A,
        mediumturquoise: 0x48D1CC,
        mediumvioletred: 0xC71585,
        midnightblue: 0x191970,
        mintcream: 0xF5FFFA,
        mistyrose: 0xFFE4E1,
        moccasin: 0xFFE4B5,
        navajowhite: 0xFFDEAD,
        navy: 0x000080,
        oldlace: 0xFDF5E6,
        olive: 0x808000,
        olivedrab: 0x6B8E23,
        orange: 0xFFA500,
        orangered: 0xFF4500,
        orchid: 0xDA70D6,
        palegoldenrod: 0xEEE8AA,
        palegreen: 0x98FB98,
        paleturquoise: 0xAFEEEE,
        palevioletred: 0xDB7093,
        papayawhip: 0xFFEFD5,
        peachpuff: 0xFFDAB9,
        peru: 0xCD853F,
        pink: 0xFFC0CB,
        plum: 0xDDA0DD,
        powderblue: 0xB0E0E6,
        purple: 0x800080,
        rebeccapurple: 0x663399,
        red: 0xFF0000,
        rosybrown: 0xBC8F8F,
        royalblue: 0x4169E1,
        saddlebrown: 0x8B4513,
        salmon: 0xFA8072,
        sandybrown: 0xF4A460,
        seagreen: 0x2E8B57,
        seashell: 0xFFF5EE,
        sienna: 0xA0522D,
        silver: 0xC0C0C0,
        skyblue: 0x87CEEB,
        slateblue: 0x6A5ACD,
        slategray: 0x708090,
        slategrey: 0x708090,
        snow: 0xFFFAFA,
        springgreen: 0x00FF7F,
        steelblue: 0x4682B4,
        tan: 0xD2B48C,
        teal: 0x008080,
        thistle: 0xD8BFD8,
        tomato: 0xFF6347,
        turquoise: 0x40E0D0,
        violet: 0xEE82EE,
        wheat: 0xF5DEB3,
        white: 0xFFFFFF,
        whitesmoke: 0xF5F5F5,
        yellow: 0xFFFF00,
        yellowgreen: 0x9ACD32
    };
    for (var name in colorValues) {
        if (colorValues.hasOwnProperty(name)) {
            var color = colorValues[name];
            ColorNames[name] = Math.floor(color / 65536) + "," + Math.floor(color / 256 % 256) + "," + color % 256;
        }
    }
  
    // Project
    function registerBackIn(name, amount) {
        registerEasing([name, function (percentComplete, startValue, endValue) {
            if (percentComplete === 0) {
                return startValue;
            }
            if (percentComplete === 1) {
                return endValue;
            }
            return Math.pow(percentComplete, 2) * ((amount + 1) * percentComplete - amount) * (endValue - startValue);
        }]);
    }
    function registerBackOut(name, amount) {
        registerEasing([name, function (percentComplete, startValue, endValue) {
            if (percentComplete === 0) {
                return startValue;
            }
            if (percentComplete === 1) {
                return endValue;
            }
            return (Math.pow(--percentComplete, 2) * ((amount + 1) * percentComplete + amount) + 1) * (endValue - startValue);
        }]);
    }
    function registerBackInOut(name, amount) {
        amount *= 1.525;
        registerEasing([name, function (percentComplete, startValue, endValue) {
            if (percentComplete === 0) {
                return startValue;
            }
            if (percentComplete === 1) {
                return endValue;
            }
            percentComplete *= 2;
            return (percentComplete < 1 ? Math.pow(percentComplete, 2) * ((amount + 1) * percentComplete - amount) : Math.pow(percentComplete - 2, 2) * ((amount + 1) * (percentComplete - 2) + amount) + 2) * 0.5 * (endValue - startValue);
        }]);
    }
    registerBackIn("easeInBack", 1.7);
    registerBackOut("easeOutBack", 1.7);
    registerBackInOut("easeInOutBack", 1.7);
    // TODO: Expose these as actions to register custom easings?
  
    // Project
    function easeOutBouncePercent(percentComplete) {
        if (percentComplete < 1 / 2.75) {
            return 7.5625 * percentComplete * percentComplete;
        }
        if (percentComplete < 2 / 2.75) {
            return 7.5625 * (percentComplete -= 1.5 / 2.75) * percentComplete + 0.75;
        }
        if (percentComplete < 2.5 / 2.75) {
            return 7.5625 * (percentComplete -= 2.25 / 2.75) * percentComplete + 0.9375;
        }
        return 7.5625 * (percentComplete -= 2.625 / 2.75) * percentComplete + 0.984375;
    }
    function easeInBouncePercent(percentComplete) {
        return 1 - easeOutBouncePercent(1 - percentComplete);
    }
    function easeInBounce(percentComplete, startValue, endValue) {
        if (percentComplete === 0) {
            return startValue;
        }
        if (percentComplete === 1) {
            return endValue;
        }
        return easeInBouncePercent(percentComplete) * (endValue - startValue);
    }
    function easeOutBounce(percentComplete, startValue, endValue) {
        if (percentComplete === 0) {
            return startValue;
        }
        if (percentComplete === 1) {
            return endValue;
        }
        return easeOutBouncePercent(percentComplete) * (endValue - startValue);
    }
    function easeInOutBounce(percentComplete, startValue, endValue) {
        if (percentComplete === 0) {
            return startValue;
        }
        if (percentComplete === 1) {
            return endValue;
        }
        return (percentComplete < 0.5 ? easeInBouncePercent(percentComplete * 2) * 0.5 : easeOutBouncePercent(percentComplete * 2 - 1) * 0.5 + 0.5) * (endValue - startValue);
    }
    registerEasing(["easeInBounce", easeInBounce]);
    registerEasing(["easeOutBounce", easeOutBounce]);
    registerEasing(["easeInOutBounce", easeInOutBounce]);
  
    // Project
    // Constants
    var PI2 = Math.PI * 2;
    function registerElasticIn(name, amplitude, period) {
        registerEasing([name, function (percentComplete, startValue, endValue) {
            if (percentComplete === 0) {
                return startValue;
            }
            if (percentComplete === 1) {
                return endValue;
            }
            return -(amplitude * Math.pow(2, 10 * (percentComplete -= 1)) * Math.sin((percentComplete - period / PI2 * Math.asin(1 / amplitude)) * PI2 / period)) * (endValue - startValue);
        }]);
    }
    function registerElasticOut(name, amplitude, period) {
        registerEasing([name, function (percentComplete, startValue, endValue) {
            if (percentComplete === 0) {
                return startValue;
            }
            if (percentComplete === 1) {
                return endValue;
            }
            return (amplitude * Math.pow(2, -10 * percentComplete) * Math.sin((percentComplete - period / PI2 * Math.asin(1 / amplitude)) * PI2 / period) + 1) * (endValue - startValue);
        }]);
    }
    function registerElasticInOut(name, amplitude, period) {
        registerEasing([name, function (percentComplete, startValue, endValue) {
            if (percentComplete === 0) {
                return startValue;
            }
            if (percentComplete === 1) {
                return endValue;
            }
            var s = period / PI2 * Math.asin(1 / amplitude);
            percentComplete = percentComplete * 2 - 1;
            return (percentComplete < 0 ? -0.5 * (amplitude * Math.pow(2, 10 * percentComplete) * Math.sin((percentComplete - s) * PI2 / period)) : amplitude * Math.pow(2, -10 * percentComplete) * Math.sin((percentComplete - s) * PI2 / period) * 0.5 + 1) * (endValue - startValue);
        }]);
    }
    registerElasticIn("easeInElastic", 1, 0.3);
    registerElasticOut("easeOutElastic", 1, 0.3);
    registerElasticInOut("easeInOutElastic", 1, 0.3 * 1.5);
    // TODO: Expose these as actions to register custom easings?
  
    // Project
    /**
     * Easing function that sets to the specified value immediately after the
     * animation starts.
     */
    function atStart(percentComplete, startValue, endValue) {
      return percentComplete === 0 ? startValue : endValue;
    }
    /**
     * Easing function that sets to the specified value while the animation is
     * running.
     */
    function during(percentComplete, startValue, endValue) {
      return percentComplete === 0 || percentComplete === 1 ? startValue : endValue;
    }
    /**
     * Easing function that sets to the specified value when the animation ends.
     */
    function atEnd(percentComplete, startValue, endValue) {
      return percentComplete === 1 ? endValue : startValue;
    }
    registerEasing(["at-start", atStart]);
    registerEasing(["during", during]);
    registerEasing(["at-end", atEnd]);
  
    // Project
    /**
     * Get/set the inner/outer dimension.
     */
    function getDimension(name, wantInner) {
        return function (element, propertyValue) {
            if (propertyValue === undefined) {
                return augmentDimension(element, name, wantInner) + "px";
            }
            setPropertyValue(element, name, parseFloat(propertyValue) - augmentDimension(element, name, wantInner) + "px");
        };
    }
    registerNormalization(["Element", "innerWidth", getDimension("width", true)]);
    registerNormalization(["Element", "innerHeight", getDimension("height", true)]);
    registerNormalization(["Element", "outerWidth", getDimension("width", false)]);
    registerNormalization(["Element", "outerHeight", getDimension("height", false)]);
  
    // Project
    // Constants
    var inlineRx = /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|let|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i,
        listItemRx = /^(li)$/i,
        tableRowRx = /^(tr)$/i,
        tableRx = /^(table)$/i,
        tableRowGroupRx = /^(tbody)$/i;
    function display(element, propertyValue) {
        var style = element.style;
        if (propertyValue === undefined) {
            return computePropertyValue(element, "display");
        }
        if (propertyValue === "auto") {
            var nodeName = element && element.nodeName,
                data = Data(element);
            if (inlineRx.test(nodeName)) {
                propertyValue = "inline";
            } else if (listItemRx.test(nodeName)) {
                propertyValue = "list-item";
            } else if (tableRowRx.test(nodeName)) {
                propertyValue = "table-row";
            } else if (tableRx.test(nodeName)) {
                propertyValue = "table";
            } else if (tableRowGroupRx.test(nodeName)) {
                propertyValue = "table-row-group";
            } else {
                // Default to "block" when no match is found.
                propertyValue = "block";
            }
            // IMPORTANT: We need to do this as getPropertyValue bypasses the
            // Normalisation when it exists in the cache.
            data.cache["display"] = propertyValue;
        }
        style.display = propertyValue;
    }
    registerNormalization(["Element", "display", display]);
  
    // Project
    function clientWidth(element, propertyValue) {
        if (propertyValue == null) {
            return element.clientWidth + "px";
        }
    }
    function scrollWidth(element, propertyValue) {
        if (propertyValue == null) {
            return element.scrollWidth + "px";
        }
    }
    function clientHeight(element, propertyValue) {
        if (propertyValue == null) {
            return element.clientHeight + "px";
        }
    }
    function scrollHeight(element, propertyValue) {
        if (propertyValue == null) {
            return element.scrollHeight + "px";
        }
    }
    function scroll(direction, end) {
        return function (element, propertyValue) {
            if (propertyValue == null) {
                // Make sure we have these values cached.
                getPropertyValue(element, "client" + direction, null, true);
                getPropertyValue(element, "scroll" + direction, null, true);
                return element["scroll" + end] + "px";
            }
            var value = parseFloat(propertyValue),
                unit = propertyValue.replace(String(value), "");
            switch (unit) {
                case "":
                case "px":
                    element["scroll" + end] = value;
                    break;
                case "%":
                    var client = parseFloat(getPropertyValue(element, "client" + direction)),
                        scrollValue = parseFloat(getPropertyValue(element, "scroll" + direction));
                    element["scroll" + end] = Math.max(0, scrollValue - client) * value / 100;
                    break;
            }
        };
    }
    registerNormalization(["HTMLElement", "scroll", scroll("Height", "Top"), false]);
    registerNormalization(["HTMLElement", "scrollTop", scroll("Height", "Top"), false]);
    registerNormalization(["HTMLElement", "scrollLeft", scroll("Width", "Left"), false]);
    registerNormalization(["HTMLElement", "scrollWidth", scrollWidth]);
    registerNormalization(["HTMLElement", "clientWidth", clientWidth]);
    registerNormalization(["HTMLElement", "scrollHeight", scrollHeight]);
    registerNormalization(["HTMLElement", "clientHeight", clientHeight]);
  
    // Project
    /**
     * An RegExp pattern for the following list of css words using
     * http://kemio.com.ar/tools/lst-trie-re.php to generate:
     *
     * blockSize
     * borderBottomLeftRadius
     * borderBottomRightRadius
     * borderBottomWidth
     * borderImageOutset
     * borderImageWidth
     * borderLeftWidth
     * borderRadius
     * borderRightWidth
     * borderSpacing
     * borderTopLeftRadius
     * borderTopRightRadius
     * borderTopWidth
     * borderWidth
     * bottom
     * columnGap
     * columnRuleWidth
     * columnWidth
     * flexBasis
     * fontSize
     * gridColumnGap
     * gridGap
     * gridRowGap
     * height
     * inlineSize
     * left
     * letterSpacing
     * margin
     * marginBottom
     * marginLeft
     * marginRight
     * marginTop
     * maxBlockSize
     * maxHeight
     * maxInlineSize
     * maxWidth
     * minBlockSize
     * minHeight
     * minInlineSize
     * minWidth
     * objectPosition
     * outlineOffset
     * outlineWidth
     * padding
     * paddingBottom
     * paddingLeft
     * paddingRight
     * paddingTop
     * perspective
     * right
     * shapeMargin
     * strokeDashoffset
     * strokeWidth
     * textIndent
     * top
     * transformOrigin
     * width
     * wordSpacing
     */
    // tslint:disable-next-line:max-line-length
    var rxAddPx = /^(b(lockSize|o(rder(Bottom(LeftRadius|RightRadius|Width)|Image(Outset|Width)|LeftWidth|R(adius|ightWidth)|Spacing|Top(LeftRadius|RightRadius|Width)|Width)|ttom))|column(Gap|RuleWidth|Width)|f(lexBasis|ontSize)|grid(ColumnGap|Gap|RowGap)|height|inlineSize|le(ft|tterSpacing)|m(a(rgin(Bottom|Left|Right|Top)|x(BlockSize|Height|InlineSize|Width))|in(BlockSize|Height|InlineSize|Width))|o(bjectPosition|utline(Offset|Width))|p(adding(Bottom|Left|Right|Top)|erspective)|right|s(hapeMargin|troke(Dashoffset|Width))|t(extIndent|op|ransformOrigin)|w(idth|ordSpacing))$/;
    /**
     * Return a Normalisation that can be used to set / get a prefixed style
     * property.
     */
    function getSetPrefixed(propertyName, unprefixed) {
        return function (element, propertyValue) {
            if (propertyValue === undefined) {
                return computePropertyValue(element, propertyName) || computePropertyValue(element, unprefixed);
            }
            element.style[propertyName] = element.style[unprefixed] = propertyValue;
        };
    }
    /**
     * Return a Normalisation that can be used to set / get a style property.
     */
    function getSetStyle(propertyName) {
        return function (element, propertyValue) {
            if (propertyValue === undefined) {
                return computePropertyValue(element, propertyName);
            }
            element.style[propertyName] = propertyValue;
        };
    }
    /**
     * Vendor prefixes. Chrome / Safari, Firefox, IE / Edge, Opera.
     */
    var rxVendors = /^(webkit|moz|ms|o)[A-Z]/,
        prefixElement = State.prefixElement;
    if (prefixElement) {
        for (var propertyName in prefixElement.style) {
            if (rxVendors.test(propertyName)) {
                var unprefixed = propertyName.replace(/^[a-z]+([A-Z])/, function ($, letter) {
                    return letter.toLowerCase();
                });
                {
                    var addUnit = rxAddPx.test(unprefixed) ? "px" : undefined;
                    registerNormalization(["Element", unprefixed, getSetPrefixed(propertyName, unprefixed), addUnit]);
                }
            } else if (!hasNormalization(["Element", propertyName])) {
                var _addUnit = rxAddPx.test(propertyName) ? "px" : undefined;
                registerNormalization(["Element", propertyName, getSetStyle(propertyName), _addUnit]);
            }
        }
    }
  
    // Project
    /**
     * Get/set an attribute.
     */
    function getAttribute(name) {
        return function (element, propertyValue) {
            if (propertyValue === undefined) {
                return element.getAttribute(name);
            }
            element.setAttribute(name, propertyValue);
        };
    }
    var base = document.createElement("div"),
        rxSubtype = /^SVG(.*)Element$/,
        rxElement = /Element$/;
    Object.getOwnPropertyNames(window).forEach(function (property) {
        var subtype = rxSubtype.exec(property);
        if (subtype && subtype[1] !== "SVG") {
            // Don't do SVGSVGElement.
            try {
                var element = subtype[1] ? document.createElementNS("http://www.w3.org/2000/svg", (subtype[1] || "svg").toLowerCase()) : document.createElement("svg");
                // tslint:disable-next-line:forin
                for (var attribute in element) {
                    // Although this isn't a tween without prototypes, we do
                    // want to get hold of all attributes and not just own ones.
                    var value = element[attribute];
                    if (isString(attribute) && !(attribute[0] === "o" && attribute[1] === "n") && attribute !== attribute.toUpperCase() && !rxElement.test(attribute) && !(attribute in base) && !isFunction(value)) {
                        // TODO: Should this all be set on the generic SVGElement, it would save space and time, but not as powerful
                        registerNormalization([property, attribute, getAttribute(attribute)]);
                    }
                }
            } catch (e) {
                console.error("VelocityJS: Error when trying to identify SVG attributes on " + property + ".", e);
            }
        }
    });
  
    // Project
    /**
     * Get/set the width or height.
     */
    function getDimension$1(name) {
        return function (element, propertyValue) {
            if (propertyValue === undefined) {
                // Firefox throws an error if .getBBox() is called on an SVG that isn't attached to the DOM.
                try {
                    return element.getBBox()[name] + "px";
                } catch (e) {
                    return "0px";
                }
            }
            element.setAttribute(name, propertyValue);
        };
    }
    registerNormalization(["SVGElement", "width", getDimension$1("width")]);
    registerNormalization(["SVGElement", "height", getDimension$1("height")]);
  
    // Project
    /**
     * A fake normalization used to allow the "tween" property easy access.
     */
    function getSetTween(element, propertyValue) {
        if (propertyValue === undefined) {
            return "";
        }
    }
    registerNormalization(["Element", "tween", getSetTween]);
  
    // Automatically generated
    var VERSION = "2.0.6";
  
    // Project
    var Velocity$$1 = Velocity$1;
    /**
     * These parts of Velocity absolutely must be included, even if they're unused!
     */
    var VelocityStatic;
    (function (VelocityStatic) {
        /**
         * Actions cannot be replaced if they are internal (hasOwnProperty is false
         * but they still exist). Otherwise they can be replaced by users.
         *
         * All external method calls should be using actions rather than sub-calls
         * of Velocity itself.
         */
        VelocityStatic.Actions = Actions;
        /**
         * Our known easing functions.
         */
        VelocityStatic.Easings = Easings;
        /**
         * The currently registered sequences.
         */
        VelocityStatic.Sequences = SequencesObject;
        /**
         * Current internal state of Velocity.
         */
        VelocityStatic.State = State; // tslint:disable-line:no-shadowed-variable
        /**
         * Velocity option defaults, which can be overriden by the user.
         */
        VelocityStatic.defaults = defaults$1;
        /**
         * Used to patch any object to allow Velocity chaining. In order to chain an
         * object must either be treatable as an array - with a <code>.length</code>
         * property, and each member a Node, or a Node directly.
         *
         * By default Velocity will try to patch <code>window</code>,
         * <code>jQuery</code>, <code>Zepto</code>, and several classes that return
         * Nodes or lists of Nodes.
         */
        VelocityStatic.patch = patch;
        /**
         * Set to true, 1 or 2 (most verbose) to output debug info to console.
         */
        VelocityStatic.debug = false;
        /**
         * In mock mode, all animations are forced to complete immediately upon the
         * next rAF tick. If there are further animations queued then they will each
         * take one single frame in turn. Loops and repeats will be disabled while
         * <code>mock = true</code>.
         */
        VelocityStatic.mock = false;
        /**
         * Save our version number somewhere visible.
         */
        VelocityStatic.version = VERSION;
        /**
         * Added as a fallback for "import {Velocity} from 'velocity-animate';".
         */
        VelocityStatic.Velocity = Velocity$1; // tslint:disable-line:no-shadowed-variable
    })(VelocityStatic || (VelocityStatic = {}));
    /* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */
    var IE = function () {
        if (document.documentMode) {
            return document.documentMode;
        } else {
            for (var i = 7; i > 4; i--) {
                var div = document.createElement("div");
                div.innerHTML = "<!" + "--" + "[if IE " + i + "]><span></span><![endif]-->";
                if (div.getElementsByTagName("span").length) {
                    div = null;
                    return i;
                }
            }
        }
        return undefined;
    }();
    /******************
     Unsupported
     ******************/
    if (IE <= 8) {
        throw new Error("VelocityJS cannot run on Internet Explorer 8 or earlier");
    }
    /******************
     Frameworks
     ******************/
    if (window) {
        /*
         * Both jQuery and Zepto allow their $.fn object to be extended to allow
         * wrapped elements to be subjected to plugin calls. If either framework is
         * loaded, register a "velocity" extension pointing to Velocity's core
         * animate() method. Velocity also registers itself onto a global container
         * (window.jQuery || window.Zepto || window) so that certain features are
         * accessible beyond just a per-element scope. Accordingly, Velocity can
         * both act on wrapped DOM elements and stand alone for targeting raw DOM
         * elements.
         */
        var jQuery = window.jQuery,
            Zepto = window.Zepto;
        patch(window, true);
        patch(Element && Element.prototype);
        patch(NodeList && NodeList.prototype);
        patch(HTMLCollection && HTMLCollection.prototype);
        patch(jQuery, true);
        patch(jQuery && jQuery.fn);
        patch(Zepto, true);
        patch(Zepto && Zepto.fn);
    }
    // Make sure that the values within Velocity are read-only and upatchable.
  
    var _loop = function _loop(property) {
        if (VelocityStatic.hasOwnProperty(property)) {
            switch (typeof property === "undefined" ? "undefined" : _typeof(property)) {
                case "number":
                case "boolean":
                    defineProperty$1(Velocity$$1, property, {
                        get: function get$$1() {
                            return VelocityStatic[property];
                        },
                        set: function set$$1(value) {
                            VelocityStatic[property] = value;
                        }
                    }, true);
                    break;
                default:
                    defineProperty$1(Velocity$$1, property, VelocityStatic[property], true);
                    break;
            }
        }
    };
  
    for (var property in VelocityStatic) {
        _loop(property);
    }
    Object.freeze(Velocity$$1);
  
    // Project
    var rxPercents = /(\d*\.\d+|\d+\.?|from|to)/g;
    function expandSequence(animation, sequence) {
        var tweens = animation.tweens = Object.create(null),
            element = animation.element;
        for (var propertyName in sequence.tweens) {
            if (sequence.tweens.hasOwnProperty(propertyName)) {
                var fn = getNormalization(element, propertyName);
                if (!fn && propertyName !== "tween") {
                    if (Velocity$$1.debug) {
                        console.log("Skipping [" + propertyName + "] due to a lack of browser support.");
                    }
                    continue;
                }
                tweens[propertyName] = {
                    fn: fn,
                    sequence: sequence.tweens[propertyName]
                };
            }
        }
    }
    /**
     * Used to register a sequence. This should never be called by users
     * directly, instead it should be called via an action:<br/>
     * <code>Velocity("registerSequence", ""name", VelocitySequence);</code>
     */
    function registerSequence(args) {
        if (isPlainObject(args[0])) {
            for (var name in args[0]) {
                if (args[0].hasOwnProperty(name)) {
                    registerSequence([name, args[0][name]]);
                }
            }
        } else if (isString(args[0])) {
            var _name = args[0],
                sequence = args[1];
            if (!isString(_name)) {
                console.warn("VelocityJS: Trying to set 'registerSequence' name to an invalid value:", _name);
            } else if (!isPlainObject(sequence)) {
                console.warn("VelocityJS: Trying to set 'registerSequence' sequence to an invalid value:", _name, sequence);
            } else {
                if (SequencesObject[_name]) {
                    console.warn("VelocityJS: Replacing named sequence:", _name);
                }
                var percents = {},
                    steps = new Array(100),
                    properties = [],
                    sequenceList = SequencesObject[_name] = {},
                    duration = validateDuration(sequence.duration);
                sequenceList.tweens = {};
                if (isNumber(duration)) {
                    sequenceList.duration = duration;
                }
                for (var part in sequence) {
                    if (sequence.hasOwnProperty(part)) {
                        var keys = String(part).match(rxPercents);
                        if (keys) {
                            var _iteratorNormalCompletion = true;
                            var _didIteratorError = false;
                            var _iteratorError = undefined;
  
                            try {
                                for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                    var key = _step.value;
  
                                    var percent = key === "from" ? 0 : key === "to" ? 100 : parseFloat(key);
                                    if (percent < 0 || percent > 100) {
                                        console.warn("VelocityJS: Trying to use an invalid value as a percentage (0 <= n <= 100):", _name, percent);
                                    } else if (isNaN(percent)) {
                                        console.warn("VelocityJS: Trying to use an invalid number as a percentage:", _name, part, key);
                                    } else {
                                        if (!percents[String(percent)]) {
                                            percents[String(percent)] = [];
                                        }
                                        percents[String(percent)].push(part);
                                        for (var property in sequence[part]) {
                                            if (!properties.includes(property)) {
                                                properties.push(property);
                                            }
                                        }
                                    }
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return) {
                                        _iterator.return();
                                    }
                                } finally {
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                            }
                        }
                    }
                }
                var orderedPercents = Object.keys(percents).sort(function (a, b) {
                    var a1 = parseFloat(a),
                        b1 = parseFloat(b);
                    return a1 > b1 ? 1 : a1 < b1 ? -1 : 0;
                });
                orderedPercents.forEach(function (key) {
                    steps.push.apply(percents[key]);
                });
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;
  
                try {
                    for (var _iterator2 = properties[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var _property = _step2.value;
  
                        var parts = [],
                            propertyName = camelCase(_property);
                        var _iteratorNormalCompletion3 = true;
                        var _didIteratorError3 = false;
                        var _iteratorError3 = undefined;
  
                        try {
                            for (var _iterator3 = orderedPercents[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                var _key = _step3.value;
                                var _iteratorNormalCompletion6 = true;
                                var _didIteratorError6 = false;
                                var _iteratorError6 = undefined;
  
                                try {
                                    for (var _iterator6 = percents[_key][Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                                        var _value = _step6.value;
  
                                        var stepProperties = sequence[_value];
                                        if (stepProperties[propertyName]) {
                                            parts.push(isString(stepProperties[propertyName]) ? stepProperties[propertyName] : stepProperties[propertyName][0]);
                                        }
                                    }
                                } catch (err) {
                                    _didIteratorError6 = true;
                                    _iteratorError6 = err;
                                } finally {
                                    try {
                                        if (!_iteratorNormalCompletion6 && _iterator6.return) {
                                            _iterator6.return();
                                        }
                                    } finally {
                                        if (_didIteratorError6) {
                                            throw _iteratorError6;
                                        }
                                    }
                                }
                            }
                        } catch (err) {
                            _didIteratorError3 = true;
                            _iteratorError3 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                    _iterator3.return();
                                }
                            } finally {
                                if (_didIteratorError3) {
                                    throw _iteratorError3;
                                }
                            }
                        }
  
                        if (parts.length) {
                            var realSequence = findPattern(parts, propertyName);
                            var index = 0;
                            if (realSequence) {
                                var _iteratorNormalCompletion4 = true;
                                var _didIteratorError4 = false;
                                var _iteratorError4 = undefined;
  
                                try {
                                    for (var _iterator4 = orderedPercents[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                        var _key2 = _step4.value;
                                        var _iteratorNormalCompletion5 = true;
                                        var _didIteratorError5 = false;
                                        var _iteratorError5 = undefined;
  
                                        try {
                                            for (var _iterator5 = percents[_key2][Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                                                var value = _step5.value;
  
                                                var originalProperty = sequence[value][propertyName];
                                                if (originalProperty) {
                                                    if (Array.isArray(originalProperty) && originalProperty.length > 1 && (isString(originalProperty[1]) || Array.isArray(originalProperty[1]))) {
                                                        realSequence[index].easing = validateEasing(originalProperty[1], sequenceList.duration || DEFAULT_DURATION);
                                                    }
                                                    realSequence[index++].percent = parseFloat(_key2) / 100;
                                                }
                                            }
                                        } catch (err) {
                                            _didIteratorError5 = true;
                                            _iteratorError5 = err;
                                        } finally {
                                            try {
                                                if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                                    _iterator5.return();
                                                }
                                            } finally {
                                                if (_didIteratorError5) {
                                                    throw _iteratorError5;
                                                }
                                            }
                                        }
                                    }
                                } catch (err) {
                                    _didIteratorError4 = true;
                                    _iteratorError4 = err;
                                } finally {
                                    try {
                                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                            _iterator4.return();
                                        }
                                    } finally {
                                        if (_didIteratorError4) {
                                            throw _iteratorError4;
                                        }
                                    }
                                }
  
                                sequenceList.tweens[propertyName] = realSequence;
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }
        }
    }
    registerAction(["registerSequence", registerSequence], true);
  
    // Project
    var globalPromise = void 0;
    try {
        globalPromise = Promise;
    } catch ( /**/_a) {/**/}
    var noPromiseOption = ", if that is deliberate then pass `promiseRejectEmpty:false` as an option";
    /**
     * Patch a VelocityResult with a Promise.
     */
    function patchPromise(promiseObject, result) {
        defineProperty$1(result, "promise", promiseObject);
        defineProperty$1(result, "then", promiseObject.then.bind(promiseObject));
        defineProperty$1(result, "catch", promiseObject.catch.bind(promiseObject));
        if (promiseObject.finally) {
            // Semi-standard
            defineProperty$1(result, "finally", promiseObject.finally.bind(promiseObject));
        }
    }
    /* tslint:enable:max-line-length */
    function Velocity$1() {
        var
        /**
         * A shortcut to the default options.
         */
        defaults$$1 = defaults$1,
  
        /**
         * Cache of the first argument - this is used often enough to be saved.
         */
        args0 = arguments.length <= 0 ? undefined : arguments[0],
  
        /**
         * To allow for expressive CoffeeScript code, Velocity supports an
         * alternative syntax in which "elements" (or "e"), "properties" (or
         * "p"), and "options" (or "o") objects are defined on a container
         * object that's passed in as Velocity's sole argument.
         *
         * Note: Some browsers automatically populate arguments with a
         * "properties" object. We detect it by checking for its default
         * "names" property.
         */
        // TODO: Confirm which browsers - if <=IE8 the we can drop completely
        syntacticSugar = isPlainObject(args0) && (args0.p || isPlainObject(args0.properties) && !args0.properties.names || isString(args0.properties));
        var
        /**
         *  When Velocity is called via the utility function (Velocity()),
         * elements are explicitly passed in as the first parameter. Thus,
         * argument positioning varies.
         */
        argumentIndex = 0,
  
        /**
         * The list of elements, extended with Promise and Velocity.
         */
        elements = void 0,
  
        /**
         * The properties being animated. This can be a string, in which case it
         * is either a function for these elements, or it is a "named" animation
         * sequence to use instead. Named sequences start with either "callout."
         * or "transition.". When used as a callout the values will be reset
         * after finishing. When used as a transtition then there is no special
         * handling after finishing.
         */
        propertiesMap = void 0,
  
        /**
         * Options supplied, this will be mapped and validated into
         * <code>options</code>.
         */
        optionsMap = void 0,
  
        /**
         * If called via a chain then this contains the <b>last</b> calls
         * animations. If this does not have a value then any access to the
         * element's animations needs to be to the currently-running ones.
         */
        animations = void 0,
  
        /**
         * The promise that is returned.
         */
        promise = void 0,
  
        // Used when the animation is finished
        resolver = void 0,
  
        // Used when there was an issue with one or more of the Velocity arguments
        rejecter = void 0;
        //console.log(`Velocity`, args)
        // First get the elements, and the animations connected to the last call if
        // this is chained.
        // TODO: Clean this up a bit
        // TODO: Throw error if the chain is called with elements as the first argument. isVelocityResult(this) && ( (isNode(arg0) || isWrapped(arg0)) && arg0 == this)
        if (isNode(this)) {
            // This is from a chain such as document.getElementById("").velocity(...)
            elements = [this];
        } else if (isWrapped(this)) {
            // This might be a chain from something else, but if chained from a
            // previous Velocity() call then grab the animations it's related to.
            elements = cloneArray(this);
            if (isVelocityResult(this)) {
                animations = this.velocity.animations;
            }
        } else if (syntacticSugar) {
            elements = cloneArray(args0.elements || args0.e);
            argumentIndex++;
        } else if (isNode(args0)) {
            elements = cloneArray([args0]);
            argumentIndex++;
        } else if (isWrapped(args0)) {
            elements = cloneArray(args0);
            argumentIndex++;
        }
        // Allow elements to be chained.
        if (elements) {
            defineProperty$1(elements, "velocity", Velocity$1.bind(elements));
            if (animations) {
                defineProperty$1(elements.velocity, "animations", animations);
            }
        }
        // Next get the propertiesMap and options.
        if (syntacticSugar) {
            propertiesMap = getValue(args0.properties, args0.p);
        } else {
            var _ref;
  
            // TODO: Should be possible to call Velocity("pauseAll") - currently not possible
            propertiesMap = (_ref = argumentIndex++, arguments.length <= _ref ? undefined : arguments[_ref]);
        }
        // Get any options map passed in as arguments first, expand any direct
        // options if possible.
        var isReverse = propertiesMap === "reverse",
            isAction = !isReverse && isString(propertiesMap),
            maybeSequence = isAction && SequencesObject[propertiesMap],
            opts = syntacticSugar ? getValue(args0.options, args0.o) : arguments.length <= argumentIndex ? undefined : arguments[argumentIndex];
        if (isPlainObject(opts)) {
            optionsMap = opts;
        }
        // Create the promise if supported and wanted.
        if (globalPromise && getValue(optionsMap && optionsMap.promise, defaults$$1.promise)) {
            promise = new globalPromise(function (resolve, reject) {
                rejecter = reject;
                // IMPORTANT:
                // If a resolver tries to run on a Promise then it will wait until
                // that Promise resolves - but in this case we're running on our own
                // Promise, so need to make sure it's not seen as one. Removing
                // these values for the duration of the resolve.
                // Due to being an async call, they should be back to "normal"
                // before the <code>.then()</code> function gets called.
                resolver = function resolver(result) {
                    if (isVelocityResult(result) && result.promise) {
                        delete result.then;
                        delete result.catch;
                        delete result.finally;
                        resolve(result);
                        patchPromise(result.promise, result);
                    } else {
                        resolve(result);
                    }
                };
            });
            if (elements) {
                patchPromise(promise, elements);
            }
        }
        if (promise) {
            var optionPromiseRejectEmpty = optionsMap && optionsMap.promiseRejectEmpty,
                promiseRejectEmpty = getValue(optionPromiseRejectEmpty, defaults$$1.promiseRejectEmpty);
            if (!elements && !isAction) {
                if (promiseRejectEmpty) {
                    rejecter("Velocity: No elements supplied" + (isBoolean(optionPromiseRejectEmpty) ? "" : noPromiseOption) + ". Aborting.");
                } else {
                    resolver();
                }
            } else if (!propertiesMap) {
                if (promiseRejectEmpty) {
                    rejecter("Velocity: No properties supplied" + (isBoolean(optionPromiseRejectEmpty) ? "" : noPromiseOption) + ". Aborting.");
                } else {
                    resolver();
                }
            }
        }
        if (!elements && !isAction || !propertiesMap) {
            return promise;
        }
        // NOTE: Can't use isAction here due to type inference - there are callbacks
        // between so the type isn't considered safe.
        if (isAction) {
            var actionArgs = [],
                promiseHandler = promise && {
                _promise: promise,
                _resolver: resolver,
                _rejecter: rejecter
            };
            while (argumentIndex < arguments.length) {
                var _ref2;
  
                actionArgs.push((_ref2 = argumentIndex++, arguments.length <= _ref2 ? undefined : arguments[_ref2]));
            }
            // Velocity's behavior is categorized into "actions". If a string is
            // passed in instead of a propertiesMap then that will call a function
            // to do something special to the animation linked.
            // There is one special case - "reverse" - which is handled differently,
            // by being stored on the animation and then expanded when the animation
            // starts.
            var action = propertiesMap.replace(/\..*$/, ""),
                callback = Actions[action];
            if (callback) {
                var result = callback(actionArgs, elements, promiseHandler, propertiesMap);
                if (result !== undefined) {
                    return result;
                }
                return elements || promise;
            } else if (!maybeSequence) {
                console.error("VelocityJS: First argument (" + propertiesMap + ") was not a property map, a known action, or a registered redirect. Aborting.");
                return;
            }
        }
        var hasValidDuration = void 0;
        if (isPlainObject(propertiesMap) || isReverse || maybeSequence) {
            /**
             * The options for this set of animations.
             */
            var options = {};
            var isSync = defaults$$1.sync;
            // Private options first - set as non-enumerable, and starting with an
            // underscore so we can filter them out.
            if (promise) {
                defineProperty$1(options, "_promise", promise);
                defineProperty$1(options, "_rejecter", rejecter);
                defineProperty$1(options, "_resolver", resolver);
            }
            defineProperty$1(options, "_ready", 0);
            defineProperty$1(options, "_started", 0);
            defineProperty$1(options, "_completed", 0);
            defineProperty$1(options, "_total", 0);
            // Now check the optionsMap
            if (isPlainObject(optionsMap)) {
                var validDuration = validateDuration(optionsMap.duration);
                hasValidDuration = validDuration !== undefined;
                options.duration = getValue(validDuration, defaults$$1.duration);
                options.delay = getValue(validateDelay(optionsMap.delay), defaults$$1.delay);
                // Need the extra fallback here in case it supplies an invalid
                // easing that we need to overrride with the default.
                options.easing = validateEasing(getValue(optionsMap.easing, defaults$$1.easing), options.duration) || validateEasing(defaults$$1.easing, options.duration);
                options.loop = getValue(validateLoop(optionsMap.loop), defaults$$1.loop);
                options.repeat = options.repeatAgain = getValue(validateRepeat(optionsMap.repeat), defaults$$1.repeat);
                if (optionsMap.speed != null) {
                    options.speed = getValue(validateSpeed(optionsMap.speed), 1);
                }
                if (isBoolean(optionsMap.promise)) {
                    options.promise = optionsMap.promise;
                }
                options.queue = getValue(validateQueue(optionsMap.queue), defaults$$1.queue);
                if (optionsMap.mobileHA && !State.isGingerbread) {
                    /* When set to true, and if this is a mobile device, mobileHA automatically enables hardware acceleration (via a null transform hack)
                     on animating elements. HA is removed from the element at the completion of its animation. */
                    /* Note: Android Gingerbread doesn't support HA. If a null transform hack (mobileHA) is in fact set, it will prevent other tranform subproperties from taking effect. */
                    /* Note: You can read more about the use of mobileHA in Velocity's documentation: velocity-animate/#mobileHA. */
                    options.mobileHA = true;
                }
                if (optionsMap.drag === true) {
                    options.drag = true;
                }
                if (isNumber(optionsMap.stagger) || isFunction(optionsMap.stagger)) {
                    options.stagger = optionsMap.stagger;
                }
                if (!isReverse) {
                    if (optionsMap["display"] != null) {
                        propertiesMap.display = optionsMap["display"];
                        console.error("Deprecated \"options.display\" used, this is now a property:", optionsMap["display"]);
                    }
                    if (optionsMap["visibility"] != null) {
                        propertiesMap.visibility = optionsMap["visibility"];
                        console.error("Deprecated \"options.visibility\" used, this is now a property:", optionsMap["visibility"]);
                    }
                }
                // TODO: Allow functional options for different options per element
                var optionsBegin = validateBegin(optionsMap.begin),
                    optionsComplete = validateComplete(optionsMap.complete),
                    optionsProgress = validateProgress(optionsMap.progress),
                    optionsSync = validateSync(optionsMap.sync);
                if (optionsBegin != null) {
                    options.begin = optionsBegin;
                }
                if (optionsComplete != null) {
                    options.complete = optionsComplete;
                }
                if (optionsProgress != null) {
                    options.progress = optionsProgress;
                }
                if (optionsSync != null) {
                    isSync = optionsSync;
                }
            } else if (!syntacticSugar) {
                // Expand any direct options if possible.
                var offset = 0;
                options.duration = validateDuration(arguments.length <= argumentIndex ? undefined : arguments[argumentIndex], true);
                if (options.duration === undefined) {
                    options.duration = defaults$$1.duration;
                } else {
                    hasValidDuration = true;
                    offset++;
                }
                if (!isFunction(arguments.length <= argumentIndex + offset ? undefined : arguments[argumentIndex + offset])) {
                    // Despite coming before Complete, we can't pass a fn easing
                    var easing = validateEasing(arguments.length <= argumentIndex + offset ? undefined : arguments[argumentIndex + offset], getValue(options && validateDuration(options.duration), defaults$$1.duration), true);
                    if (easing !== undefined) {
                        offset++;
                        options.easing = easing;
                    }
                }
                var complete = validateComplete(arguments.length <= argumentIndex + offset ? undefined : arguments[argumentIndex + offset], true);
                if (complete !== undefined) {
                    options.complete = complete;
                }
                options.delay = defaults$$1.delay;
                options.loop = defaults$$1.loop;
                options.repeat = options.repeatAgain = defaults$$1.repeat;
            }
            if (isReverse && options.queue === false) {
                throw new Error("VelocityJS: Cannot reverse a queue:false animation.");
            }
            if (!hasValidDuration && maybeSequence && maybeSequence.duration) {
                options.duration = maybeSequence.duration;
            }
            // When a set of elements is targeted by a Velocity call, the set is
            // broken up and each element has the current Velocity call individually
            // queued onto it. In this way, each element's existing queue is
            // respected; some elements may already be animating and accordingly
            // should not have this current Velocity call triggered immediately
            // unless the sync:true option is used.
            var rootAnimation = {
                options: options,
                elements: elements,
                _prev: undefined,
                _next: undefined,
                _flags: isSync ? 32 /* SYNC */ : 0,
                percentComplete: 0,
                ellapsedTime: 0,
                timeStart: 0
            };
            animations = [];
            for (var index = 0; index < elements.length; index++) {
                var element = elements[index];
                var flags = 0;
                if (isNode(element)) {
                    // TODO: This needs to check for valid animation targets, not just Elements
                    if (isReverse) {
                        var lastAnimation = Data(element).lastAnimationList[options.queue];
                        propertiesMap = lastAnimation && lastAnimation.tweens;
                        if (!propertiesMap) {
                            console.error("VelocityJS: Attempting to reverse an animation on an element with no previous animation:", element);
                            continue;
                        }
                        flags |= 64 /* REVERSE */ & ~(lastAnimation._flags & 64 /* REVERSE */); // tslint:disable-line:no-bitwise
                    }
                    var animation = Object.assign({}, rootAnimation, { element: element, _flags: rootAnimation._flags | flags });
                    options._total++;
                    animations.push(animation);
                    if (options.stagger) {
                        if (isFunction(options.stagger)) {
                            var num = optionCallback(options.stagger, element, index, elements.length, elements, "stagger");
                            if (isNumber(num)) {
                                animation.delay = options.delay + num;
                            }
                        } else {
                            animation.delay = options.delay + options.stagger * index;
                        }
                    }
                    if (options.drag) {
                        animation.duration = options.duration - options.duration * Math.max(1 - (index + 1) / elements.length, 0.75);
                    }
                    if (maybeSequence) {
                        expandSequence(animation, maybeSequence);
                    } else if (isReverse) {
                        // In this case we're using the previous animation, so
                        // it will be expanded correctly when that one runs.
                        animation.tweens = propertiesMap;
                    } else {
                        animation.tweens = Object.create(null);
                        expandProperties(animation, propertiesMap);
                    }
                    queue$1(element, animation, options.queue);
                }
            }
            if (State.isTicking === false) {
                // If the animation tick isn't running, start it. (Velocity shuts it
                // off when there are no active calls to process.)
                tick(false);
            }
            if (animations) {
                defineProperty$1(elements.velocity, "animations", animations);
            }
        }
        /***************
         Chaining
         ***************/
        /* Return the elements back to the call chain, with wrapped elements taking precedence in case Velocity was called via the $.fn. extension. */
        return elements || promise;
    }
    /**
     * Call an option callback in a try/catch block and report an error if needed.
     */
    function optionCallback(fn, element, index, length, elements, option) {
        try {
            return fn.call(element, index, length, elements, option);
        } catch (e) {
            console.error("VelocityJS: Exception when calling '" + option + "' callback:", e);
        }
    }
  
    // Project
    /**
     * Used to patch any object to allow Velocity chaining. In order to chain an
     * object must either be treatable as an array - with a <code>.length</code>
     * property, and each member a Node, or a Node directly.
     *
     * By default Velocity will try to patch <code>window</code>,
     * <code>jQuery</code>, <code>Zepto</code>, and several classes that return
     * Nodes or lists of Nodes.
     */
    function patch(proto, global) {
        try {
            defineProperty$1(proto, (global ? "V" : "v") + "elocity", Velocity$1);
        } catch (e) {
            console.warn("VelocityJS: Error when trying to add prototype.", e);
        }
    }
  
    // Project
    var Velocity$2 = Velocity$1;
    /**
     * These parts of Velocity absolutely must be included, even if they're unused!
     */
    var VelocityStatic$1;
    (function (VelocityStatic) {
        /**
         * Actions cannot be replaced if they are internal (hasOwnProperty is false
         * but they still exist). Otherwise they can be replaced by users.
         *
         * All external method calls should be using actions rather than sub-calls
         * of Velocity itself.
         */
        VelocityStatic.Actions = Actions;
        /**
         * Our known easing functions.
         */
        VelocityStatic.Easings = Easings;
        /**
         * The currently registered sequences.
         */
        VelocityStatic.Sequences = SequencesObject;
        /**
         * Current internal state of Velocity.
         */
        VelocityStatic.State = State; // tslint:disable-line:no-shadowed-variable
        /**
         * Velocity option defaults, which can be overriden by the user.
         */
        VelocityStatic.defaults = defaults$1;
        /**
         * Used to patch any object to allow Velocity chaining. In order to chain an
         * object must either be treatable as an array - with a <code>.length</code>
         * property, and each member a Node, or a Node directly.
         *
         * By default Velocity will try to patch <code>window</code>,
         * <code>jQuery</code>, <code>Zepto</code>, and several classes that return
         * Nodes or lists of Nodes.
         */
        VelocityStatic.patch = patch;
        /**
         * Set to true, 1 or 2 (most verbose) to output debug info to console.
         */
        VelocityStatic.debug = false;
        /**
         * In mock mode, all animations are forced to complete immediately upon the
         * next rAF tick. If there are further animations queued then they will each
         * take one single frame in turn. Loops and repeats will be disabled while
         * <code>mock = true</code>.
         */
        VelocityStatic.mock = false;
        /**
         * Save our version number somewhere visible.
         */
        VelocityStatic.version = VERSION;
        /**
         * Added as a fallback for "import {Velocity} from 'velocity-animate';".
         */
        VelocityStatic.Velocity = Velocity$1; // tslint:disable-line:no-shadowed-variable
    })(VelocityStatic$1 || (VelocityStatic$1 = {}));
    /* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */
    var IE$1 = function () {
        if (document.documentMode) {
            return document.documentMode;
        } else {
            for (var i = 7; i > 4; i--) {
                var div = document.createElement("div");
                div.innerHTML = "<!" + "--" + "[if IE " + i + "]><span></span><![endif]-->";
                if (div.getElementsByTagName("span").length) {
                    div = null;
                    return i;
                }
            }
        }
        return undefined;
    }();
    /******************
     Unsupported
     ******************/
    if (IE$1 <= 8) {
        throw new Error("VelocityJS cannot run on Internet Explorer 8 or earlier");
    }
    /******************
     Frameworks
     ******************/
    if (window) {
        /*
         * Both jQuery and Zepto allow their $.fn object to be extended to allow
         * wrapped elements to be subjected to plugin calls. If either framework is
         * loaded, register a "velocity" extension pointing to Velocity's core
         * animate() method. Velocity also registers itself onto a global container
         * (window.jQuery || window.Zepto || window) so that certain features are
         * accessible beyond just a per-element scope. Accordingly, Velocity can
         * both act on wrapped DOM elements and stand alone for targeting raw DOM
         * elements.
         */
        var jQuery$1 = window.jQuery,
            Zepto$1 = window.Zepto;
        patch(window, true);
        patch(Element && Element.prototype);
        patch(NodeList && NodeList.prototype);
        patch(HTMLCollection && HTMLCollection.prototype);
        patch(jQuery$1, true);
        patch(jQuery$1 && jQuery$1.fn);
        patch(Zepto$1, true);
        patch(Zepto$1 && Zepto$1.fn);
    }
    // Make sure that the values within Velocity are read-only and upatchable.
  
    var _loop$1 = function _loop(property) {
        if (VelocityStatic$1.hasOwnProperty(property)) {
            switch (typeof property === "undefined" ? "undefined" : _typeof(property)) {
                case "number":
                case "boolean":
                    defineProperty$1(Velocity$2, property, {
                        get: function get$$1() {
                            return VelocityStatic$1[property];
                        },
                        set: function set$$1(value) {
                            VelocityStatic$1[property] = value;
                        }
                    }, true);
                    break;
                default:
                    defineProperty$1(Velocity$2, property, VelocityStatic$1[property], true);
                    break;
            }
        }
    };
  
    for (var property$1 in VelocityStatic$1) {
        _loop$1(property$1);
    }
    Object.freeze(Velocity$2);
  
    return Velocity$2;
  
  })));
  //# sourceMappingURL=velocity.js.map