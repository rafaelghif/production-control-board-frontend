import{a8 as H,r as s,at as dr,j as ur}from"./index-df07a18a.js";var mn={exports:{}},Y={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yt=60103,xt=60106,qe=60107,et=60108,tt=60114,nt=60109,rt=60110,ot=60112,at=60113,jt=60120,it=60115,st=60116,bn=60121,wn=60122,vn=60117,yn=60129,xn=60131;if(typeof Symbol=="function"&&Symbol.for){var ce=Symbol.for;yt=ce("react.element"),xt=ce("react.portal"),qe=ce("react.fragment"),et=ce("react.strict_mode"),tt=ce("react.profiler"),nt=ce("react.provider"),rt=ce("react.context"),ot=ce("react.forward_ref"),at=ce("react.suspense"),jt=ce("react.suspense_list"),it=ce("react.memo"),st=ce("react.lazy"),bn=ce("react.block"),wn=ce("react.server.block"),vn=ce("react.fundamental"),yn=ce("react.debug_trace_mode"),xn=ce("react.legacy_hidden")}function we(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case yt:switch(e=e.type,e){case qe:case tt:case et:case at:case jt:return e;default:switch(e=e&&e.$$typeof,e){case rt:case ot:case st:case it:case nt:return e;default:return t}}case xt:return t}}}var gr=nt,pr=yt,hr=ot,fr=qe,mr=st,br=it,wr=xt,vr=tt,yr=et,xr=at;Y.ContextConsumer=rt;Y.ContextProvider=gr;Y.Element=pr;Y.ForwardRef=hr;Y.Fragment=fr;Y.Lazy=mr;Y.Memo=br;Y.Portal=wr;Y.Profiler=vr;Y.StrictMode=yr;Y.Suspense=xr;Y.isAsyncMode=function(){return!1};Y.isConcurrentMode=function(){return!1};Y.isContextConsumer=function(e){return we(e)===rt};Y.isContextProvider=function(e){return we(e)===nt};Y.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===yt};Y.isForwardRef=function(e){return we(e)===ot};Y.isFragment=function(e){return we(e)===qe};Y.isLazy=function(e){return we(e)===st};Y.isMemo=function(e){return we(e)===it};Y.isPortal=function(e){return we(e)===xt};Y.isProfiler=function(e){return we(e)===tt};Y.isStrictMode=function(e){return we(e)===et};Y.isSuspense=function(e){return we(e)===at};Y.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===qe||e===tt||e===yn||e===et||e===at||e===jt||e===xn||typeof e=="object"&&e!==null&&(e.$$typeof===st||e.$$typeof===it||e.$$typeof===nt||e.$$typeof===rt||e.$$typeof===ot||e.$$typeof===vn||e.$$typeof===bn||e[0]===wn)};Y.typeOf=we;mn.exports=Y;var Cn=mn.exports;function Cr(e){function t(m,p,h,O,i){for(var z=0,u=0,U=0,N=0,j,S,J=0,re=0,M,te=M=j=0,W=0,T=0,De=0,q=0,Ie=h.length,Ee=Ie-1,pe,E="",X="",Ue="",_e="",fe;W<Ie;){if(S=h.charCodeAt(W),W===Ee&&u+N+U+z!==0&&(u!==0&&(S=u===47?10:47),N=U=z=0,Ie++,Ee++),u+N+U+z===0){if(W===Ee&&(0<T&&(E=E.replace(I,"")),0<E.trim().length)){switch(S){case 32:case 9:case 59:case 13:case 10:break;default:E+=h.charAt(W)}S=59}switch(S){case 123:for(E=E.trim(),j=E.charCodeAt(0),M=1,q=++W;W<Ie;){switch(S=h.charCodeAt(W)){case 123:M++;break;case 125:M--;break;case 47:switch(S=h.charCodeAt(W+1)){case 42:case 47:e:{for(te=W+1;te<Ee;++te)switch(h.charCodeAt(te)){case 47:if(S===42&&h.charCodeAt(te-1)===42&&W+2!==te){W=te+1;break e}break;case 10:if(S===47){W=te+1;break e}}W=te}}break;case 91:S++;case 40:S++;case 34:case 39:for(;W++<Ee&&h.charCodeAt(W)!==S;);}if(M===0)break;W++}switch(M=h.substring(q,W),j===0&&(j=(E=E.replace(v,"").trim()).charCodeAt(0)),j){case 64:switch(0<T&&(E=E.replace(I,"")),S=E.charCodeAt(1),S){case 100:case 109:case 115:case 45:T=p;break;default:T=he}if(M=t(p,T,M,S,i+1),q=M.length,0<de&&(T=n(he,E,De),fe=c(3,M,T,p,G,K,q,S,i,O),E=T.join(""),fe!==void 0&&(q=(M=fe.trim()).length)===0&&(S=0,M="")),0<q)switch(S){case 115:E=E.replace(Q,l);case 100:case 109:case 45:M=E+"{"+M+"}";break;case 107:E=E.replace(C,"$1 $2"),M=E+"{"+M+"}",M=ee===1||ee===2&&a("@"+M,3)?"@-webkit-"+M+"@"+M:"@"+M;break;default:M=E+M,O===112&&(M=(X+=M,""))}else M="";break;default:M=t(p,n(p,E,De),M,O,i+1)}Ue+=M,M=De=T=te=j=0,E="",S=h.charCodeAt(++W);break;case 125:case 59:if(E=(0<T?E.replace(I,""):E).trim(),1<(q=E.length))switch(te===0&&(j=E.charCodeAt(0),j===45||96<j&&123>j)&&(q=(E=E.replace(" ",":")).length),0<de&&(fe=c(1,E,p,m,G,K,X.length,O,i,O))!==void 0&&(q=(E=fe.trim()).length)===0&&(E="\0\0"),j=E.charCodeAt(0),S=E.charCodeAt(1),j){case 0:break;case 64:if(S===105||S===99){_e+=E+h.charAt(W);break}default:E.charCodeAt(q-1)!==58&&(X+=o(E,j,S,E.charCodeAt(2)))}De=T=te=j=0,E="",S=h.charCodeAt(++W)}}switch(S){case 13:case 10:u===47?u=0:1+j===0&&O!==107&&0<E.length&&(T=1,E+="\0"),0<de*ve&&c(0,E,p,m,G,K,X.length,O,i,O),K=1,G++;break;case 59:case 125:if(u+N+U+z===0){K++;break}default:switch(K++,pe=h.charAt(W),S){case 9:case 32:if(N+z+u===0)switch(J){case 44:case 58:case 9:case 32:pe="";break;default:S!==32&&(pe=" ")}break;case 0:pe="\\0";break;case 12:pe="\\f";break;case 11:pe="\\v";break;case 38:N+u+z===0&&(T=De=1,pe="\f"+pe);break;case 108:if(N+u+z+le===0&&0<te)switch(W-te){case 2:J===112&&h.charCodeAt(W-3)===58&&(le=J);case 8:re===111&&(le=re)}break;case 58:N+u+z===0&&(te=W);break;case 44:u+U+N+z===0&&(T=1,pe+="\r");break;case 34:case 39:u===0&&(N=N===S?0:N===0?S:N);break;case 91:N+u+U===0&&z++;break;case 93:N+u+U===0&&z--;break;case 41:N+u+z===0&&U--;break;case 40:if(N+u+z===0){if(j===0)switch(2*J+3*re){case 533:break;default:j=1}U++}break;case 64:u+U+N+z+te+M===0&&(M=1);break;case 42:case 47:if(!(0<N+z+U))switch(u){case 0:switch(2*S+3*h.charCodeAt(W+1)){case 235:u=47;break;case 220:q=W,u=42}break;case 42:S===47&&J===42&&q+2!==W&&(h.charCodeAt(q+2)===33&&(X+=h.substring(q,W+1)),pe="",u=0)}}u===0&&(E+=pe)}re=J,J=S,W++}if(q=X.length,0<q){if(T=p,0<de&&(fe=c(2,X,T,m,G,K,q,O,i,O),fe!==void 0&&(X=fe).length===0))return _e+X+Ue;if(X=T.join(",")+"{"+X+"}",ee*le!==0){switch(ee!==2||a(X,2)||(le=0),le){case 111:X=X.replace(A,":-moz-$1")+X;break;case 112:X=X.replace(D,"::-webkit-input-$1")+X.replace(D,"::-moz-$1")+X.replace(D,":-ms-input-$1")+X}le=0}}return _e+X+Ue}function n(m,p,h){var O=p.trim().split(f);p=O;var i=O.length,z=m.length;switch(z){case 0:case 1:var u=0;for(m=z===0?"":m[0]+" ";u<i;++u)p[u]=r(m,p[u],h).trim();break;default:var U=u=0;for(p=[];u<i;++u)for(var N=0;N<z;++N)p[U++]=r(m[N]+" ",O[u],h).trim()}return p}function r(m,p,h){var O=p.charCodeAt(0);switch(33>O&&(O=(p=p.trim()).charCodeAt(0)),O){case 38:return p.replace(R,"$1"+m.trim());case 58:return m.trim()+p.replace(R,"$1"+m.trim());default:if(0<1*h&&0<p.indexOf("\f"))return p.replace(R,(m.charCodeAt(0)===58?"":"$1")+m.trim())}return m+p}function o(m,p,h,O){var i=m+";",z=2*p+3*h+4*O;if(z===944){m=i.indexOf(":",9)+1;var u=i.substring(m,i.length-1).trim();return u=i.substring(0,m).trim()+u+";",ee===1||ee===2&&a(u,1)?"-webkit-"+u+u:u}if(ee===0||ee===2&&!a(i,1))return i;switch(z){case 1015:return i.charCodeAt(10)===97?"-webkit-"+i+i:i;case 951:return i.charCodeAt(3)===116?"-webkit-"+i+i:i;case 963:return i.charCodeAt(5)===110?"-webkit-"+i+i:i;case 1009:if(i.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+i+i;case 978:return"-webkit-"+i+"-moz-"+i+i;case 1019:case 983:return"-webkit-"+i+"-moz-"+i+"-ms-"+i+i;case 883:if(i.charCodeAt(8)===45)return"-webkit-"+i+i;if(0<i.indexOf("image-set(",11))return i.replace(se,"$1-webkit-$2")+i;break;case 932:if(i.charCodeAt(4)===45)switch(i.charCodeAt(5)){case 103:return"-webkit-box-"+i.replace("-grow","")+"-webkit-"+i+"-ms-"+i.replace("grow","positive")+i;case 115:return"-webkit-"+i+"-ms-"+i.replace("shrink","negative")+i;case 98:return"-webkit-"+i+"-ms-"+i.replace("basis","preferred-size")+i}return"-webkit-"+i+"-ms-"+i+i;case 964:return"-webkit-"+i+"-ms-flex-"+i+i;case 1023:if(i.charCodeAt(8)!==99)break;return u=i.substring(i.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+u+"-webkit-"+i+"-ms-flex-pack"+u+i;case 1005:return y.test(i)?i.replace(P,":-webkit-")+i.replace(P,":-moz-")+i:i;case 1e3:switch(u=i.substring(13).trim(),p=u.indexOf("-")+1,u.charCodeAt(0)+u.charCodeAt(p)){case 226:u=i.replace(F,"tb");break;case 232:u=i.replace(F,"tb-rl");break;case 220:u=i.replace(F,"lr");break;default:return i}return"-webkit-"+i+"-ms-"+u+i;case 1017:if(i.indexOf("sticky",9)===-1)break;case 975:switch(p=(i=m).length-10,u=(i.charCodeAt(p)===33?i.substring(0,p):i).substring(m.indexOf(":",7)+1).trim(),z=u.charCodeAt(0)+(u.charCodeAt(7)|0)){case 203:if(111>u.charCodeAt(8))break;case 115:i=i.replace(u,"-webkit-"+u)+";"+i;break;case 207:case 102:i=i.replace(u,"-webkit-"+(102<z?"inline-":"")+"box")+";"+i.replace(u,"-webkit-"+u)+";"+i.replace(u,"-ms-"+u+"box")+";"+i}return i+";";case 938:if(i.charCodeAt(5)===45)switch(i.charCodeAt(6)){case 105:return u=i.replace("-items",""),"-webkit-"+i+"-webkit-box-"+u+"-ms-flex-"+u+i;case 115:return"-webkit-"+i+"-ms-flex-item-"+i.replace(L,"")+i;default:return"-webkit-"+i+"-ms-flex-line-pack"+i.replace("align-content","").replace(L,"")+i}break;case 973:case 989:if(i.charCodeAt(3)!==45||i.charCodeAt(4)===122)break;case 931:case 953:if(Z.test(m)===!0)return(u=m.substring(m.indexOf(":")+1)).charCodeAt(0)===115?o(m.replace("stretch","fill-available"),p,h,O).replace(":fill-available",":stretch"):i.replace(u,"-webkit-"+u)+i.replace(u,"-moz-"+u.replace("fill-",""))+i;break;case 962:if(i="-webkit-"+i+(i.charCodeAt(5)===102?"-ms-"+i:"")+i,h+O===211&&i.charCodeAt(13)===105&&0<i.indexOf("transform",10))return i.substring(0,i.indexOf(";",27)+1).replace(x,"$1-webkit-$2")+i}return i}function a(m,p){var h=m.indexOf(p===1?":":"{"),O=m.substring(0,p!==3?h:10);return h=m.substring(h+1,m.length-1),Se(p!==2?O:O.replace(ne,"$1"),h,p)}function l(m,p){var h=o(p,p.charCodeAt(0),p.charCodeAt(1),p.charCodeAt(2));return h!==p+";"?h.replace(V," or ($1)").substring(4):"("+p+")"}function c(m,p,h,O,i,z,u,U,N,j){for(var S=0,J=p,re;S<de;++S)switch(re=ie[S].call(b,m,J,h,O,i,z,u,U,N,j)){case void 0:case!1:case!0:case null:break;default:J=re}if(J!==p)return J}function g(m){switch(m){case void 0:case null:de=ie.length=0;break;default:if(typeof m=="function")ie[de++]=m;else if(typeof m=="object")for(var p=0,h=m.length;p<h;++p)g(m[p]);else ve=!!m|0}return g}function w(m){return m=m.prefix,m!==void 0&&(Se=null,m?typeof m!="function"?ee=1:(ee=2,Se=m):ee=0),w}function b(m,p){var h=m;if(33>h.charCodeAt(0)&&(h=h.trim()),Re=h,h=[Re],0<de){var O=c(-1,p,h,h,G,K,0,0,0,0);O!==void 0&&typeof O=="string"&&(p=O)}var i=t(he,h,p,0,0);return 0<de&&(O=c(-2,i,h,h,G,K,i.length,0,0,0),O!==void 0&&(i=O)),Re="",le=0,K=G=1,i}var v=/^\0+/g,I=/[\0\r\f]/g,P=/: */g,y=/zoo|gra/,x=/([,: ])(transform)/g,f=/,\r+?/g,R=/([\t\r\n ])*\f?&/g,C=/@(k\w+)\s*(\S*)\s*/,D=/::(place)/g,A=/:(read-only)/g,F=/[svh]\w+-[tblr]{2}/,Q=/\(\s*(.*)\s*\)/g,V=/([\s\S]*?);/g,L=/-self|flex-/g,ne=/[^]*?(:[rp][el]a[\w-]+)[^]*/,Z=/stretch|:\s*\w+\-(?:conte|avail)/,se=/([^-])(image-set\()/,K=1,G=1,le=0,ee=1,he=[],ie=[],de=0,Se=null,ve=0,Re="";return b.use=g,b.set=w,e!==void 0&&w(e),b}var Sr={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Rr(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Er=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,en=Rr(function(e){return Er.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function Ce(){return(Ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var tn=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},kt=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Cn.typeOf(e)},mt=Object.freeze([]),Ae=Object.freeze({});function ze(e){return typeof e=="function"}function nn(e){return e.displayName||e.name||"Component"}function Ht(e){return e&&typeof e.styledComponentId=="string"}var Ne=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",_t=typeof window<"u"&&"HTMLElement"in window,kr=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function He(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Or=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,a=o.length,l=a;n>=l;)(l<<=1)<0&&He(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(o),this.length=l;for(var c=a;c<l;c++)this.groupSizes[c]=0}for(var g=this.indexOfGroup(n+1),w=0,b=r.length;w<b;w++)this.tag.insertRule(g,r[w])&&(this.groupSizes[n]++,g++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),a=o+r;this.groupSizes[n]=0;for(var l=o;l<a;l++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],a=this.indexOfGroup(n),l=a+o,c=a;c<l;c++)r+=this.tag.getRule(c)+`/*!sc*/
`;return r},e}(),ht=new Map,bt=new Map,Qe=1,dt=function(e){if(ht.has(e))return ht.get(e);for(;bt.has(Qe);)Qe++;var t=Qe++;return ht.set(e,t),bt.set(t,e),t},$r=function(e){return bt.get(e)},Ar=function(e,t){t>=Qe&&(Qe=t+1),ht.set(e,t),bt.set(t,e)},Pr="style["+Ne+'][data-styled-version="5.3.11"]',Dr=new RegExp("^"+Ne+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Ir=function(e,t,n){for(var r,o=n.split(","),a=0,l=o.length;a<l;a++)(r=o[a])&&e.registerName(t,r)},Tr=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,a=n.length;o<a;o++){var l=n[o].trim();if(l){var c=l.match(Dr);if(c){var g=0|parseInt(c[1],10),w=c[2];g!==0&&(Ar(w,g),Ir(e,w,c[3]),e.getTag().insertRules(g,r)),r.length=0}else r.push(l)}}},jr=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Sn=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(c){for(var g=c.childNodes,w=g.length;w>=0;w--){var b=g[w];if(b&&b.nodeType===1&&b.hasAttribute(Ne))return b}}(n),a=o!==void 0?o.nextSibling:null;r.setAttribute(Ne,"active"),r.setAttribute("data-styled-version","5.3.11");var l=jr();return l&&r.setAttribute("nonce",l),n.insertBefore(r,a),r},Hr=function(){function e(n){var r=this.element=Sn(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var a=document.styleSheets,l=0,c=a.length;l<c;l++){var g=a[l];if(g.ownerNode===o)return g}He(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch(o){return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),_r=function(){function e(n){var r=this.element=Sn(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),a=this.nodes[n];return this.element.insertBefore(o,a||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Fr=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),rn=_t,Lr={isServer:!_t,useCSSOMInjection:!kr},Rn=function(){function e(n,r,o){n===void 0&&(n=Ae),r===void 0&&(r={}),this.options=Ce({},Lr,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&_t&&rn&&(rn=!1,function(a){for(var l=document.querySelectorAll(Pr),c=0,g=l.length;c<g;c++){var w=l[c];w&&w.getAttribute(Ne)!=="active"&&(Tr(a,w),w.parentNode&&w.parentNode.removeChild(w))}}(this))}e.registerId=function(n){return dt(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Ce({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,a=r.useCSSOMInjection,l=r.target,n=o?new Fr(l):a?new Hr(l):new _r(l),new Or(n)));var n,r,o,a,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(dt(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(dt(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(dt(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,a="",l=0;l<o;l++){var c=$r(l);if(c!==void 0){var g=n.names.get(c),w=r.getGroup(l);if(g&&w&&g.size){var b=Ne+".g"+l+'[id="'+c+'"]',v="";g!==void 0&&g.forEach(function(I){I.length>0&&(v+=I+",")}),a+=""+w+b+'{content:"'+v+`"}/*!sc*/
`}}}return a}(this)},e}(),Mr=/(a)(d)/gi,on=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ot(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=on(t%52)+n;return(on(t%52)+n).replace(Mr,"$1-$2")}var Me=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},En=function(e){return Me(5381,e)};function zr(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ze(n)&&!Ht(n))return!1}return!0}var Nr=En("5.3.11"),Wr=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&zr(t),this.componentId=n,this.baseHash=Me(Nr,n),this.baseStyle=r,Rn.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,a=[];if(this.baseStyle&&a.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))a.push(this.staticRulesId);else{var l=We(this.rules,t,n,r).join(""),c=Ot(Me(this.baseHash,l)>>>0);if(!n.hasNameForId(o,c)){var g=r(l,"."+c,void 0,o);n.insertRules(o,c,g)}a.push(c),this.staticRulesId=c}else{for(var w=this.rules.length,b=Me(this.baseHash,r.hash),v="",I=0;I<w;I++){var P=this.rules[I];if(typeof P=="string")v+=P;else if(P){var y=We(P,t,n,r),x=Array.isArray(y)?y.join(""):y;b=Me(b,x+I),v+=x}}if(v){var f=Ot(b>>>0);if(!n.hasNameForId(o,f)){var R=r(v,"."+f,void 0,o);n.insertRules(o,f,R)}a.push(f)}}return a.join(" ")},e}(),Br=/^\s*\/\/.*$/gm,Gr=[":","[",".","#"];function Vr(e){var t,n,r,o,a=e===void 0?Ae:e,l=a.options,c=l===void 0?Ae:l,g=a.plugins,w=g===void 0?mt:g,b=new Cr(c),v=[],I=function(x){function f(R){if(R)try{x(R+"}")}catch(C){}}return function(R,C,D,A,F,Q,V,L,ne,Z){switch(R){case 1:if(ne===0&&C.charCodeAt(0)===64)return x(C+";"),"";break;case 2:if(L===0)return C+"/*|*/";break;case 3:switch(L){case 102:case 112:return x(D[0]+C),"";default:return C+(Z===0?"/*|*/":"")}case-2:C.split("/*|*/}").forEach(f)}}}(function(x){v.push(x)}),P=function(x,f,R){return f===0&&Gr.indexOf(R[n.length])!==-1||R.match(o)?x:"."+t};function y(x,f,R,C){C===void 0&&(C="&");var D=x.replace(Br,""),A=f&&R?R+" "+f+" { "+D+" }":D;return t=C,n=f,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),b(R||!f?"":f,A)}return b.use([].concat(w,[function(x,f,R){x===2&&R.length&&R[0].lastIndexOf(n)>0&&(R[0]=R[0].replace(r,P))},I,function(x){if(x===-2){var f=v;return v=[],f}}])),y.hash=w.length?w.reduce(function(x,f){return f.name||He(15),Me(x,f.name)},5381).toString():"",y}var kn=H.createContext();kn.Consumer;var On=H.createContext(),Ur=(On.Consumer,new Rn),$t=Vr();function Yr(){return s.useContext(kn)||Ur}function Xr(){return s.useContext(On)||$t}var Qr=function(){function e(t,n){var r=this;this.inject=function(o,a){a===void 0&&(a=$t);var l=r.name+a.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,a(r.rules,l,"@keyframes"))},this.toString=function(){return He(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=$t),this.name+t.hash},e}(),Zr=/([A-Z])/,Kr=/([A-Z])/g,Jr=/^ms-/,qr=function(e){return"-"+e.toLowerCase()};function an(e){return Zr.test(e)?e.replace(Kr,qr).replace(Jr,"-ms-"):e}var sn=function(e){return e==null||e===!1||e===""};function We(e,t,n,r){if(Array.isArray(e)){for(var o,a=[],l=0,c=e.length;l<c;l+=1)(o=We(e[l],t,n,r))!==""&&(Array.isArray(o)?a.push.apply(a,o):a.push(o));return a}if(sn(e))return"";if(Ht(e))return"."+e.styledComponentId;if(ze(e)){if(typeof(w=e)!="function"||w.prototype&&w.prototype.isReactComponent||!t)return e;var g=e(t);return We(g,t,n,r)}var w;return e instanceof Qr?n?(e.inject(n,r),e.getName(r)):e:kt(e)?function b(v,I){var P,y,x=[];for(var f in v)v.hasOwnProperty(f)&&!sn(v[f])&&(Array.isArray(v[f])&&v[f].isCss||ze(v[f])?x.push(an(f)+":",v[f],";"):kt(v[f])?x.push.apply(x,b(v[f],f)):x.push(an(f)+": "+(P=f,(y=v[f])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||P in Sr||P.startsWith("--")?String(y).trim():y+"px")+";"));return I?[I+" {"].concat(x,["}"]):x}(e):e.toString()}var ln=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function ae(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return ze(e)||kt(e)?ln(We(tn(mt,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:ln(We(tn(e,n)))}var eo=function(e,t,n){return n===void 0&&(n=Ae),e.theme!==n.theme&&e.theme||t||n.theme},to=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,no=/(^-|-$)/g;function St(e){return e.replace(to,"-").replace(no,"")}var ro=function(e){return Ot(En(e)>>>0)};function ut(e){return typeof e=="string"&&!0}var At=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},oo=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function ao(e,t,n){var r=e[n];At(t)&&At(r)?$n(r,t):e[n]=t}function $n(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,a=n;o<a.length;o++){var l=a[o];if(At(l))for(var c in l)oo(c)&&ao(e,l[c],c)}return e}var wt=H.createContext();wt.Consumer;function io(e){var t=s.useContext(wt),n=s.useMemo(function(){return function(r,o){if(!r)return He(14);if(ze(r)){var a=r(o);return a}return Array.isArray(r)||typeof r!="object"?He(8):o?Ce({},o,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?H.createElement(wt.Provider,{value:n},e.children):null}var Rt={};function An(e,t,n){var r=Ht(e),o=!ut(e),a=t.attrs,l=a===void 0?mt:a,c=t.componentId,g=c===void 0?function(C,D){var A=typeof C!="string"?"sc":St(C);Rt[A]=(Rt[A]||0)+1;var F=A+"-"+ro("5.3.11"+A+Rt[A]);return D?D+"-"+F:F}(t.displayName,t.parentComponentId):c,w=t.displayName,b=w===void 0?function(C){return ut(C)?"styled."+C:"Styled("+nn(C)+")"}(e):w,v=t.displayName&&t.componentId?St(t.displayName)+"-"+t.componentId:t.componentId||g,I=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,P=t.shouldForwardProp;r&&e.shouldForwardProp&&(P=t.shouldForwardProp?function(C,D,A){return e.shouldForwardProp(C,D,A)&&t.shouldForwardProp(C,D,A)}:e.shouldForwardProp);var y,x=new Wr(n,v,r?e.componentStyle:void 0),f=x.isStatic&&l.length===0,R=function(C,D){return function(A,F,Q,V){var L=A.attrs,ne=A.componentStyle,Z=A.defaultProps,se=A.foldedComponentIds,K=A.shouldForwardProp,G=A.styledComponentId,le=A.target,ee=function(O,i,z){O===void 0&&(O=Ae);var u=Ce({},i,{theme:O}),U={};return z.forEach(function(N){var j,S,J,re=N;for(j in ze(re)&&(re=re(u)),re)u[j]=U[j]=j==="className"?(S=U[j],J=re[j],S&&J?S+" "+J:S||J):re[j]}),[u,U]}(eo(F,s.useContext(wt),Z)||Ae,F,L),he=ee[0],ie=ee[1],de=function(O,i,z,u){var U=Yr(),N=Xr(),j=i?O.generateAndInjectStyles(Ae,U,N):O.generateAndInjectStyles(z,U,N);return j}(ne,V,he),Se=Q,ve=ie.$as||F.$as||ie.as||F.as||le,Re=ut(ve),m=ie!==F?Ce({},F,{},ie):F,p={};for(var h in m)h[0]!=="$"&&h!=="as"&&(h==="forwardedAs"?p.as=m[h]:(K?K(h,en,ve):!Re||en(h))&&(p[h]=m[h]));return F.style&&ie.style!==F.style&&(p.style=Ce({},F.style,{},ie.style)),p.className=Array.prototype.concat(se,G,de!==G?de:null,F.className,ie.className).filter(Boolean).join(" "),p.ref=Se,s.createElement(ve,p)}(y,C,D,f)};return R.displayName=b,(y=H.forwardRef(R)).attrs=I,y.componentStyle=x,y.displayName=b,y.shouldForwardProp=P,y.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):mt,y.styledComponentId=v,y.target=r?e.target:e,y.withComponent=function(C){var D=t.componentId,A=function(Q,V){if(Q==null)return{};var L,ne,Z={},se=Object.keys(Q);for(ne=0;ne<se.length;ne++)L=se[ne],V.indexOf(L)>=0||(Z[L]=Q[L]);return Z}(t,["componentId"]),F=D&&D+"-"+(ut(C)?C:St(nn(C)));return An(C,Ce({},A,{attrs:I,componentId:F}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=r?$n({},e.defaultProps,C):C}}),Object.defineProperty(y,"toString",{value:function(){return"."+y.styledComponentId}}),o&&dr(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var Pt=function(e){return function t(n,r,o){if(o===void 0&&(o=Ae),!Cn.isValidElementType(r))return He(1,String(r));var a=function(){return n(r,o,ae.apply(void 0,arguments))};return a.withConfig=function(l){return t(n,r,Ce({},o,{},l))},a.attrs=function(l){return t(n,r,Ce({},o,{attrs:Array.prototype.concat(o.attrs,l).filter(Boolean)}))},a}(An,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Pt[e]=Pt(e)});const _=Pt;var Pe;function Be(e,t){return e[t]}function Dt(e,t){return t.split(".").reduce((n,r)=>{const o=r.match(/[^\]\\[.]+/g);if(o&&o.length>1)for(let a=0;a<o.length;a++)return n[o[a]][o[a+1]];return n[r]},e)}function so(e=[],t,n=0){return[...e.slice(0,n),t,...e.slice(n)]}function lo(e=[],t,n="id"){const r=e.slice(),o=Be(t,n);return o?r.splice(r.findIndex(a=>Be(a,n)===o),1):r.splice(r.findIndex(a=>a===t),1),r}function cn(e){return e.map((t,n)=>{const r=Object.assign(Object.assign({},t),{sortable:t.sortable||!!t.sortFunction||void 0});return t.id||(r.id=n+1),r})}function Ze(e,t){return Math.ceil(e/t)}function Et(e,t){return Math.min(e,t)}(function(e){e.ASC="asc",e.DESC="desc"})(Pe||(Pe={}));const oe=()=>null;function Pn(e,t=[],n=[]){let r={},o=[...n];return t.length&&t.forEach(a=>{if(!a.when||typeof a.when!="function")throw new Error('"when" must be defined in the conditional style object and must be function');a.when(e)&&(r=a.style||{},a.classNames&&(o=[...o,...a.classNames]),typeof a.style=="function"&&(r=a.style(e)||{}))}),{style:r,classNames:o.join(" ")}}function ft(e,t=[],n="id"){const r=Be(e,n);return r?t.some(o=>Be(o,n)===r):t.some(o=>o===e)}function gt(e,t){return t?e.findIndex(n=>Ke(n.id,t)):-1}function Ke(e,t){return e==t}function co(e,t){const n=!e.toggleOnSelectedRowsChange;switch(t.type){case"SELECT_ALL_ROWS":{const{keyField:r,rows:o,rowCount:a,mergeSelections:l}=t,c=!e.allSelected,g=!e.toggleOnSelectedRowsChange;if(l){const w=c?[...e.selectedRows,...o.filter(b=>!ft(b,e.selectedRows,r))]:e.selectedRows.filter(b=>!ft(b,o,r));return Object.assign(Object.assign({},e),{allSelected:c,selectedCount:w.length,selectedRows:w,toggleOnSelectedRowsChange:g})}return Object.assign(Object.assign({},e),{allSelected:c,selectedCount:c?a:0,selectedRows:c?o:[],toggleOnSelectedRowsChange:g})}case"SELECT_SINGLE_ROW":{const{keyField:r,row:o,isSelected:a,rowCount:l,singleSelect:c}=t;return c?a?Object.assign(Object.assign({},e),{selectedCount:0,allSelected:!1,selectedRows:[],toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:1,allSelected:!1,selectedRows:[o],toggleOnSelectedRowsChange:n}):a?Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length>0?e.selectedRows.length-1:0,allSelected:!1,selectedRows:lo(e.selectedRows,o,r),toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length+1,allSelected:e.selectedRows.length+1===l,selectedRows:so(e.selectedRows,o),toggleOnSelectedRowsChange:n})}case"SELECT_MULTIPLE_ROWS":{const{keyField:r,selectedRows:o,totalRows:a,mergeSelections:l}=t;if(l){const c=[...e.selectedRows,...o.filter(g=>!ft(g,e.selectedRows,r))];return Object.assign(Object.assign({},e),{selectedCount:c.length,allSelected:!1,selectedRows:c,toggleOnSelectedRowsChange:n})}return Object.assign(Object.assign({},e),{selectedCount:o.length,allSelected:o.length===a,selectedRows:o,toggleOnSelectedRowsChange:n})}case"CLEAR_SELECTED_ROWS":{const{selectedRowsFlag:r}=t;return Object.assign(Object.assign({},e),{allSelected:!1,selectedCount:0,selectedRows:[],selectedRowsFlag:r})}case"SORT_CHANGE":{const{sortDirection:r,selectedColumn:o,clearSelectedOnSort:a}=t;return Object.assign(Object.assign(Object.assign({},e),{selectedColumn:o,sortDirection:r,currentPage:1}),a&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_PAGE":{const{page:r,paginationServer:o,visibleOnly:a,persistSelectedOnPageChange:l}=t,c=o&&l,g=o&&!l||a;return Object.assign(Object.assign(Object.assign(Object.assign({},e),{currentPage:r}),c&&{allSelected:!1}),g&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_ROWS_PER_PAGE":{const{rowsPerPage:r,page:o}=t;return Object.assign(Object.assign({},e),{currentPage:o,rowsPerPage:r})}}}const uo=ae`
	pointer-events: none;
	opacity: 0.4;
`,go=_.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({disabled:e})=>e&&uo};
	${({theme:e})=>e.table.style};
`,po=ae`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`,ho=_.div`
	display: flex;
	width: 100%;
	${({fixedHeader:e})=>e&&po};
	${({theme:e})=>e.head.style};
`,fo=_.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:e})=>e.headRow.style};
	${({dense:e,theme:t})=>e&&t.headRow.denseStyle};
`,Dn=(e,...t)=>ae`
		@media screen and (max-width: ${599}px) {
			${ae(e,...t)}
		}
	`,mo=(e,...t)=>ae`
		@media screen and (max-width: ${959}px) {
			${ae(e,...t)}
		}
	`,bo=(e,...t)=>ae`
		@media screen and (max-width: ${1280}px) {
			${ae(e,...t)}
		}
	`,wo=e=>(t,...n)=>ae`
				@media screen and (max-width: ${e}px) {
					${ae(t,...n)}
				}
			`,Ve=_.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({theme:e,headCell:t})=>e[t?"headCells":"cells"].style};
	${({noPadding:e})=>e&&"padding: 0"};
`,In=_(Ve)`
	flex-grow: ${({button:e,grow:t})=>t===0||e?0:t||1};
	flex-shrink: 0;
	flex-basis: 0;
	max-width: ${({maxWidth:e})=>e||"100%"};
	min-width: ${({minWidth:e})=>e||"100px"};
	${({width:e})=>e&&ae`
			min-width: ${e};
			max-width: ${e};
		`};
	${({right:e})=>e&&"justify-content: flex-end"};
	${({button:e,center:t})=>(t||e)&&"justify-content: center"};
	${({compact:e,button:t})=>(e||t)&&"padding: 0"};

	/* handle hiding cells */
	${({hide:e})=>e&&e==="sm"&&Dn`
    display: none;
  `};
	${({hide:e})=>e&&e==="md"&&mo`
    display: none;
  `};
	${({hide:e})=>e&&e==="lg"&&bo`
    display: none;
  `};
	${({hide:e})=>e&&Number.isInteger(e)&&wo(e)`
    display: none;
  `};
`,vo=ae`
	div:first-child {
		white-space: ${({wrapCell:e})=>e?"normal":"nowrap"};
		overflow: ${({allowOverflow:e})=>e?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,yo=_(In).attrs(e=>({style:e.style}))`
	${({renderAsCell:e})=>!e&&vo};
	${({theme:e,isDragging:t})=>t&&e.cells.draggingStyle};
	${({cellStyle:e})=>e};
`;var xo=s.memo(function({id:e,column:t,row:n,rowIndex:r,dataTag:o,isDragging:a,onDragStart:l,onDragOver:c,onDragEnd:g,onDragEnter:w,onDragLeave:b}){const{style:v,classNames:I}=Pn(n,t.conditionalCellStyles,["rdt_TableCell"]);return s.createElement(yo,{id:e,"data-column-id":t.id,role:"cell",className:I,"data-tag":o,cellStyle:t.style,renderAsCell:!!t.cell,allowOverflow:t.allowOverflow,button:t.button,center:t.center,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,width:t.width,wrapCell:t.wrap,style:v,isDragging:a,onDragStart:l,onDragOver:c,onDragEnd:g,onDragEnter:w,onDragLeave:b},!t.cell&&s.createElement("div",{"data-tag":o},function(P,y,x,f){if(!y)return null;if(typeof y!="string"&&typeof y!="function")throw new Error("selector must be a . delimited string eg (my.property) or function (e.g. row => row.field");return x&&typeof x=="function"?x(P,f):y&&typeof y=="function"?y(P,f):Dt(P,y)}(n,t.selector,t.format,r)),t.cell&&t.cell(n,r,t,e))}),Tn=s.memo(function({name:e,component:t="input",componentOptions:n={style:{}},indeterminate:r=!1,checked:o=!1,disabled:a=!1,onClick:l=oe}){const c=t,g=c!=="input"?n.style:(b=>Object.assign(Object.assign({fontSize:"18px"},!b&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(a),w=s.useMemo(()=>function(b,...v){let I;return Object.keys(b).map(P=>b[P]).forEach((P,y)=>{typeof P=="function"&&(I=Object.assign(Object.assign({},b),{[Object.keys(b)[y]]:P(...v)}))}),I||b}(n,r),[n,r]);return s.createElement(c,Object.assign({type:"checkbox",ref:b=>{b&&(b.indeterminate=r)},style:g,onClick:a?oe:l,name:e,"aria-label":e,checked:o,disabled:a},w,{onChange:oe}))});const Co=_(Ve)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;function So({name:e,keyField:t,row:n,rowCount:r,selected:o,selectableRowsComponent:a,selectableRowsComponentProps:l,selectableRowsSingle:c,selectableRowDisabled:g,onSelectedRow:w}){const b=!(!g||!g(n));return s.createElement(Co,{onClick:v=>v.stopPropagation(),className:"rdt_TableCell",noPadding:!0},s.createElement(Tn,{name:e,component:a,componentOptions:l,checked:o,"aria-checked":o,onClick:()=>{w({type:"SELECT_SINGLE_ROW",row:n,isSelected:o,keyField:t,rowCount:r,singleSelect:c})},disabled:b}))}const Ro=_.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function Eo({disabled:e=!1,expanded:t=!1,expandableIcon:n,id:r,row:o,onToggled:a}){const l=t?n.expanded:n.collapsed;return s.createElement(Ro,{"aria-disabled":e,onClick:()=>a&&a(o),"data-testid":`expander-button-${r}`,disabled:e,"aria-label":t?"Collapse Row":"Expand Row",role:"button",type:"button"},l)}const ko=_(Ve)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({theme:e})=>e.expanderCell.style};
`;function Oo({row:e,expanded:t=!1,expandableIcon:n,id:r,onToggled:o,disabled:a=!1}){return s.createElement(ko,{onClick:l=>l.stopPropagation(),noPadding:!0},s.createElement(Eo,{id:r,row:e,expanded:t,expandableIcon:n,disabled:a,onToggled:o}))}const $o=_.div`
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.expanderRow.style};
	${({extendedRowStyle:e})=>e};
`;var Ao=s.memo(function({data:e,ExpanderComponent:t,expanderComponentProps:n,extendedRowStyle:r,extendedClassNames:o}){const a=["rdt_ExpanderRow",...o.split(" ").filter(l=>l!=="rdt_TableRow")].join(" ");return s.createElement($o,{className:a,extendedRowStyle:r},s.createElement(t,Object.assign({data:e},n)))}),vt,It,dn;(function(e){e.LTR="ltr",e.RTL="rtl",e.AUTO="auto"})(vt||(vt={})),function(e){e.LEFT="left",e.RIGHT="right",e.CENTER="center"}(It||(It={})),function(e){e.SM="sm",e.MD="md",e.LG="lg"}(dn||(dn={}));const Po=ae`
	&:hover {
		${({highlightOnHover:e,theme:t})=>e&&t.rows.highlightOnHoverStyle};
	}
`,Do=ae`
	&:hover {
		cursor: pointer;
	}
`,Io=_.div.attrs(e=>({style:e.style}))`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.rows.style};
	${({dense:e,theme:t})=>e&&t.rows.denseStyle};
	${({striped:e,theme:t})=>e&&t.rows.stripedStyle};
	${({highlightOnHover:e})=>e&&Po};
	${({pointerOnHover:e})=>e&&Do};
	${({selected:e,theme:t})=>e&&t.rows.selectedHighlightStyle};
`;function To({columns:e=[],conditionalRowStyles:t=[],defaultExpanded:n=!1,defaultExpanderDisabled:r=!1,dense:o=!1,expandableIcon:a,expandableRows:l=!1,expandableRowsComponent:c,expandableRowsComponentProps:g,expandableRowsHideExpander:w,expandOnRowClicked:b=!1,expandOnRowDoubleClicked:v=!1,highlightOnHover:I=!1,id:P,expandableInheritConditionalStyles:y,keyField:x,onRowClicked:f=oe,onRowDoubleClicked:R=oe,onRowMouseEnter:C=oe,onRowMouseLeave:D=oe,onRowExpandToggled:A=oe,onSelectedRow:F=oe,pointerOnHover:Q=!1,row:V,rowCount:L,rowIndex:ne,selectableRowDisabled:Z=null,selectableRows:se=!1,selectableRowsComponent:K,selectableRowsComponentProps:G,selectableRowsHighlight:le=!1,selectableRowsSingle:ee=!1,selected:he,striped:ie=!1,draggingColumnId:de,onDragStart:Se,onDragOver:ve,onDragEnd:Re,onDragEnter:m,onDragLeave:p}){const[h,O]=s.useState(n);s.useEffect(()=>{O(n)},[n]);const i=s.useCallback(()=>{O(!h),A(!h,V)},[h,A,V]),z=Q||l&&(b||v),u=s.useCallback(T=>{T.target&&T.target.getAttribute("data-tag")==="allowRowEvents"&&(f(V,T),!r&&l&&b&&i())},[r,b,l,i,f,V]),U=s.useCallback(T=>{T.target&&T.target.getAttribute("data-tag")==="allowRowEvents"&&(R(V,T),!r&&l&&v&&i())},[r,v,l,i,R,V]),N=s.useCallback(T=>{C(V,T)},[C,V]),j=s.useCallback(T=>{D(V,T)},[D,V]),S=Be(V,x),{style:J,classNames:re}=Pn(V,t,["rdt_TableRow"]),M=le&&he,te=y?J:{},W=ie&&ne%2==0;return s.createElement(s.Fragment,null,s.createElement(Io,{id:`row-${P}`,role:"row",striped:W,highlightOnHover:I,pointerOnHover:!r&&z,dense:o,onClick:u,onDoubleClick:U,onMouseEnter:N,onMouseLeave:j,className:re,selected:M,style:J},se&&s.createElement(So,{name:`select-row-${S}`,keyField:x,row:V,rowCount:L,selected:he,selectableRowsComponent:K,selectableRowsComponentProps:G,selectableRowDisabled:Z,selectableRowsSingle:ee,onSelectedRow:F}),l&&!w&&s.createElement(Oo,{id:S,expandableIcon:a,expanded:h,row:V,onToggled:i,disabled:r}),e.map(T=>T.omit?null:s.createElement(xo,{id:`cell-${T.id}-${S}`,key:`cell-${T.id}-${S}`,dataTag:T.ignoreRowClick||T.button?null:"allowRowEvents",column:T,row:V,rowIndex:ne,isDragging:Ke(de,T.id),onDragStart:Se,onDragOver:ve,onDragEnd:Re,onDragEnter:m,onDragLeave:p}))),l&&h&&s.createElement(Ao,{key:`expander-${S}`,data:V,extendedRowStyle:te,extendedClassNames:re,ExpanderComponent:c,expanderComponentProps:g}))}const jo=_.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({sortActive:e})=>e?"opacity: 1":"opacity: 0"};
	${({sortDirection:e})=>e==="desc"&&"transform: rotate(180deg)"};
`,Ho=({sortActive:e,sortDirection:t})=>H.createElement(jo,{sortActive:e,sortDirection:t},"▲"),_o=_(In)`
	${({button:e})=>e&&"text-align: center"};
	${({theme:e,isDragging:t})=>t&&e.headCells.draggingStyle};
`,Fo=ae`
	cursor: pointer;
	span.__rdt_custom_sort_icon__ {
		i,
		svg {
			transform: 'translate3d(0, 0, 0)';
			${({sortActive:e})=>e?"opacity: 1":"opacity: 0"};
			color: inherit;
			font-size: 18px;
			height: 18px;
			width: 18px;
			backface-visibility: hidden;
			transform-style: preserve-3d;
			transition-duration: 95ms;
			transition-property: transform;
		}

		&.asc i,
		&.asc svg {
			transform: rotate(180deg);
		}
	}

	${({sortActive:e})=>!e&&ae`
			&:hover,
			&:focus {
				opacity: 0.7;

				span,
				span.__rdt_custom_sort_icon__ * {
					opacity: 0.7;
				}
			}
		`};
`,Lo=_.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:e})=>!e&&Fo};
`,Mo=_.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var zo=s.memo(function({column:e,disabled:t,draggingColumnId:n,selectedColumn:r={},sortDirection:o,sortIcon:a,sortServer:l,pagination:c,paginationServer:g,persistSelectedOnSort:w,selectableRowsVisibleOnly:b,onSort:v,onDragStart:I,onDragOver:P,onDragEnd:y,onDragEnter:x,onDragLeave:f}){s.useEffect(()=>{typeof e.selector=="string"&&console.error(`Warning: ${e.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)},[]);const[R,C]=s.useState(!1),D=s.useRef(null);if(s.useEffect(()=>{D.current&&C(D.current.scrollWidth>D.current.clientWidth)},[R]),e.omit)return null;const A=()=>{if(!e.sortable&&!e.selector)return;let G=o;Ke(r.id,e.id)&&(G=o===Pe.ASC?Pe.DESC:Pe.ASC),v({type:"SORT_CHANGE",sortDirection:G,selectedColumn:e,clearSelectedOnSort:c&&g&&!w||l||b})},F=G=>s.createElement(Ho,{sortActive:G,sortDirection:o}),Q=()=>s.createElement("span",{className:[o,"__rdt_custom_sort_icon__"].join(" ")},a),V=!(!e.sortable||!Ke(r.id,e.id)),L=!e.sortable||t,ne=e.sortable&&!a&&!e.right,Z=e.sortable&&!a&&e.right,se=e.sortable&&a&&!e.right,K=e.sortable&&a&&e.right;return s.createElement(_o,{"data-column-id":e.id,className:"rdt_TableCol",headCell:!0,allowOverflow:e.allowOverflow,button:e.button,compact:e.compact,grow:e.grow,hide:e.hide,maxWidth:e.maxWidth,minWidth:e.minWidth,right:e.right,center:e.center,width:e.width,draggable:e.reorder,isDragging:Ke(e.id,n),onDragStart:I,onDragOver:P,onDragEnd:y,onDragEnter:x,onDragLeave:f},e.name&&s.createElement(Lo,{"data-column-id":e.id,"data-sort-id":e.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:L?void 0:A,onKeyPress:L?void 0:G=>{G.key==="Enter"&&A()},sortActive:!L&&V,disabled:L},!L&&K&&Q(),!L&&Z&&F(V),typeof e.name=="string"?s.createElement(Mo,{title:R?e.name:void 0,ref:D,"data-column-id":e.id},e.name):e.name,!L&&se&&Q(),!L&&ne&&F(V)))});const No=_(Ve)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function Wo({headCell:e=!0,rowData:t,keyField:n,allSelected:r,mergeSelections:o,selectedRows:a,selectableRowsComponent:l,selectableRowsComponentProps:c,selectableRowDisabled:g,onSelectAllRows:w}){const b=a.length>0&&!r,v=g?t.filter(y=>!g(y)):t,I=v.length===0,P=Math.min(t.length,v.length);return s.createElement(No,{className:"rdt_TableCol",headCell:e,noPadding:!0},s.createElement(Tn,{name:"select-all-rows",component:l,componentOptions:c,onClick:()=>{w({type:"SELECT_ALL_ROWS",rows:v,rowCount:P,mergeSelections:o,keyField:n})},checked:r,indeterminate:b,disabled:I}))}function jn(e=vt.AUTO){const t=typeof window=="object",[n,r]=s.useState(!1);return s.useEffect(()=>{if(t)if(e!=="auto")r(e==="rtl");else{const o=!(!window.document||!window.document.createElement),a=document.getElementsByTagName("BODY")[0],l=document.getElementsByTagName("HTML")[0],c=a.dir==="rtl"||l.dir==="rtl";r(o&&c)}},[e,t]),n}const Bo=_.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:e})=>e.contextMenu.fontColor};
	font-size: ${({theme:e})=>e.contextMenu.fontSize};
	font-weight: 400;
`,Go=_.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,un=_.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	box-sizing: inherit;
	z-index: 1;
	align-items: center;
	justify-content: space-between;
	display: flex;
	${({rtl:e})=>e&&"direction: rtl"};
	${({theme:e})=>e.contextMenu.style};
	${({theme:e,visible:t})=>t&&e.contextMenu.activeStyle};
`;function Vo({contextMessage:e,contextActions:t,contextComponent:n,selectedCount:r,direction:o}){const a=jn(o),l=r>0;return n?s.createElement(un,{visible:l},s.cloneElement(n,{selectedCount:r})):s.createElement(un,{visible:l,rtl:a},s.createElement(Bo,null,((c,g,w)=>{if(g===0)return null;const b=g===1?c.singular:c.plural;return w?`${g} ${c.message||""} ${b}`:`${g} ${b} ${c.message||""}`})(e,r,a)),s.createElement(Go,null,t))}const Uo=_.div`
	position: relative;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	flex: 1 1 auto;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	flex-wrap: wrap;
	${({theme:e})=>e.header.style}
`,Yo=_.div`
	flex: 1 0 auto;
	color: ${({theme:e})=>e.header.fontColor};
	font-size: ${({theme:e})=>e.header.fontSize};
	font-weight: 400;
`,Xo=_.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`,Qo=({title:e,actions:t=null,contextMessage:n,contextActions:r,contextComponent:o,selectedCount:a,direction:l,showMenu:c=!0})=>s.createElement(Uo,{className:"rdt_TableHeader",role:"heading","aria-level":1},s.createElement(Yo,null,e),t&&s.createElement(Xo,null,t),c&&s.createElement(Vo,{contextMessage:n,contextActions:r,contextComponent:o,direction:l,selectedCount:a}));function Hn(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}const Zo={left:"flex-start",right:"flex-end",center:"center"},Ko=_.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({align:e})=>Zo[e]};
	flex-wrap: ${({wrapContent:e})=>e?"wrap":"nowrap"};
	${({theme:e})=>e.subHeader.style}
`,Jo=e=>{var{align:t="right",wrapContent:n=!0}=e,r=Hn(e,["align","wrapContent"]);return s.createElement(Ko,Object.assign({align:t,wrapContent:n},r))},qo=_.div`
	display: flex;
	flex-direction: column;
`,ea=_.div`
	position: relative;
	width: 100%;
	border-radius: inherit;
	${({responsive:e,fixedHeader:t})=>e&&ae`
			overflow-x: auto;

			// hidden prevents vertical scrolling in firefox when fixedHeader is disabled
			overflow-y: ${t?"auto":"hidden"};
			min-height: 0;
		`};

	${({fixedHeader:e=!1,fixedHeaderScrollHeight:t="100vh"})=>e&&ae`
			max-height: ${t};
			-webkit-overflow-scrolling: touch;
		`};

	${({theme:e})=>e.responsiveWrapper.style};
`,gn=_.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${e=>e.theme.progress.style};
`,ta=_.div`
	position: relative;
	width: 100%;
	${({theme:e})=>e.tableWrapper.style};
`,na=_(Ve)`
	white-space: nowrap;
	${({theme:e})=>e.expanderCell.style};
`,ra=_.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:e})=>e.noData.style};
`,oa=()=>H.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},H.createElement("path",{d:"M7 10l5 5 5-5z"}),H.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),aa=_.select`
	cursor: pointer;
	height: 24px;
	max-width: 100%;
	user-select: none;
	padding-left: 8px;
	padding-right: 24px;
	box-sizing: content-box;
	font-size: inherit;
	color: inherit;
	border: none;
	background-color: transparent;
	appearance: none;
	direction: ltr;
	flex-shrink: 0;

	&::-ms-expand {
		display: none;
	}

	&:disabled::-ms-expand {
		background: #f60;
	}

	option {
		color: initial;
	}
`,ia=_.div`
	position: relative;
	flex-shrink: 0;
	font-size: inherit;
	color: inherit;
	margin-top: 1px;

	svg {
		top: 0;
		right: 0;
		color: inherit;
		position: absolute;
		fill: currentColor;
		width: 24px;
		height: 24px;
		display: inline-block;
		user-select: none;
		pointer-events: none;
	}
`,sa=e=>{var{defaultValue:t,onChange:n}=e,r=Hn(e,["defaultValue","onChange"]);return s.createElement(ia,null,s.createElement(aa,Object.assign({onChange:n,defaultValue:t},r)),s.createElement(oa,null))},d={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,clearSelectedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return H.createElement("div",null,"To add an expander pass in a component instance via ",H.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:H.createElement(()=>H.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},H.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),H.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"})),null),expanded:H.createElement(()=>H.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},H.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),H.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"})),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:H.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:H.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:It.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:H.createElement(()=>H.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},H.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),H.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"})),null),paginationIconLastPage:H.createElement(()=>H.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},H.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),H.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"})),null),paginationIconNext:H.createElement(()=>H.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},H.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),H.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),paginationIconPrevious:H.createElement(()=>H.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},H.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),H.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:vt.AUTO,onChangePage:oe,onChangeRowsPerPage:oe,onRowClicked:oe,onRowDoubleClicked:oe,onRowMouseEnter:oe,onRowMouseLeave:oe,onRowExpandToggled:oe,onSelectedRowsChange:oe,onSort:oe,onColumnOrderChange:oe},la={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},ca=_.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({theme:e})=>e.pagination.style};
`,pt=_.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({theme:e})=>e.pagination.pageButtonsStyle};
	${({isRTL:e})=>e&&"transform: scale(-1, -1)"};
`,da=_.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${Dn`
    width: 100%;
    justify-content: space-around;
  `};
`,_n=_.span`
	flex-shrink: 1;
	user-select: none;
`,ua=_(_n)`
	margin: 0 24px;
`,ga=_(_n)`
	margin: 0 4px;
`;var pa=s.memo(function({rowsPerPage:e,rowCount:t,currentPage:n,direction:r=d.direction,paginationRowsPerPageOptions:o=d.paginationRowsPerPageOptions,paginationIconLastPage:a=d.paginationIconLastPage,paginationIconFirstPage:l=d.paginationIconFirstPage,paginationIconNext:c=d.paginationIconNext,paginationIconPrevious:g=d.paginationIconPrevious,paginationComponentOptions:w=d.paginationComponentOptions,onChangeRowsPerPage:b=d.onChangeRowsPerPage,onChangePage:v=d.onChangePage}){const I=(()=>{const G=typeof window=="object";function le(){return{width:G?window.innerWidth:void 0,height:G?window.innerHeight:void 0}}const[ee,he]=s.useState(le);return s.useEffect(()=>{if(!G)return()=>null;function ie(){he(le())}return window.addEventListener("resize",ie),()=>window.removeEventListener("resize",ie)},[]),ee})(),P=jn(r),y=I.width&&I.width>599,x=Ze(t,e),f=n*e,R=f-e+1,C=n===1,D=n===x,A=Object.assign(Object.assign({},la),w),F=n===x?`${R}-${t} ${A.rangeSeparatorText} ${t}`:`${R}-${f} ${A.rangeSeparatorText} ${t}`,Q=s.useCallback(()=>v(n-1),[n,v]),V=s.useCallback(()=>v(n+1),[n,v]),L=s.useCallback(()=>v(1),[v]),ne=s.useCallback(()=>v(Ze(t,e)),[v,t,e]),Z=s.useCallback(G=>b(Number(G.target.value),n),[n,b]),se=o.map(G=>s.createElement("option",{key:G,value:G},G));A.selectAllRowsItem&&se.push(s.createElement("option",{key:-1,value:t},A.selectAllRowsItemText));const K=s.createElement(sa,{onChange:Z,defaultValue:e,"aria-label":A.rowsPerPageText},se);return s.createElement(ca,{className:"rdt_Pagination"},!A.noRowsPerPage&&y&&s.createElement(s.Fragment,null,s.createElement(ga,null,A.rowsPerPageText),K),y&&s.createElement(ua,null,F),s.createElement(da,null,s.createElement(pt,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":C,onClick:L,disabled:C,isRTL:P},l),s.createElement(pt,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":C,onClick:Q,disabled:C,isRTL:P},g),!y&&K,s.createElement(pt,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":D,onClick:V,disabled:D,isRTL:P},c),s.createElement(pt,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":D,onClick:ne,disabled:D,isRTL:P},a)))});const je=(e,t)=>{const n=s.useRef(!0);s.useEffect(()=>{n.current?n.current=!1:e()},t)};var ha=function(e){return function(t){return!!t&&typeof t=="object"}(e)&&!function(t){var n=Object.prototype.toString.call(t);return n==="[object RegExp]"||n==="[object Date]"||function(r){return r.$$typeof===fa}(t)}(e)},fa=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function Je(e,t){return t.clone!==!1&&t.isMergeableObject(e)?Ge((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function ma(e,t,n){return e.concat(t).map(function(r){return Je(r,n)})}function pn(e){return Object.keys(e).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(n){return t.propertyIsEnumerable(n)}):[]}(e))}function hn(e,t){try{return t in e}catch(n){return!1}}function ba(e,t,n){var r={};return n.isMergeableObject(e)&&pn(e).forEach(function(o){r[o]=Je(e[o],n)}),pn(t).forEach(function(o){(function(a,l){return hn(a,l)&&!(Object.hasOwnProperty.call(a,l)&&Object.propertyIsEnumerable.call(a,l))})(e,o)||(hn(e,o)&&n.isMergeableObject(t[o])?r[o]=function(a,l){if(!l.customMerge)return Ge;var c=l.customMerge(a);return typeof c=="function"?c:Ge}(o,n)(e[o],t[o],n):r[o]=Je(t[o],n))}),r}function Ge(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||ma,n.isMergeableObject=n.isMergeableObject||ha,n.cloneUnlessOtherwiseSpecified=Je;var r=Array.isArray(t);return r===Array.isArray(e)?r?n.arrayMerge(e,t,n):ba(e,t,n):Je(t,n)}Ge.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(n,r){return Ge(n,r,t)},{})};var Tt=Ge;const fn={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},$e={default:fn,light:fn,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function wa(e="default",t,n="default"){return $e[e]||($e[e]=Tt($e[n],t||{})),$e[e]=Tt($e[e],t||{}),$e[e]}function va(e,t,n,r){const[o,a]=s.useState(()=>cn(e)),[l,c]=s.useState(""),g=s.useRef("");je(()=>{a(cn(e))},[e]);const w=s.useCallback(f=>{var R,C,D;const{attributes:A}=f.target,F=(R=A.getNamedItem("data-column-id"))===null||R===void 0?void 0:R.value;F&&(g.current=((D=(C=o[gt(o,F)])===null||C===void 0?void 0:C.id)===null||D===void 0?void 0:D.toString())||"",c(g.current))},[o]),b=s.useCallback(f=>{var R;const{attributes:C}=f.target,D=(R=C.getNamedItem("data-column-id"))===null||R===void 0?void 0:R.value;if(D&&g.current&&D!==g.current){const A=gt(o,g.current),F=gt(o,D),Q=[...o];Q[A]=o[F],Q[F]=o[A],a(Q),t(Q)}},[t,o]),v=s.useCallback(f=>{f.preventDefault()},[]),I=s.useCallback(f=>{f.preventDefault()},[]),P=s.useCallback(f=>{f.preventDefault(),g.current="",c("")},[]),y=function(f=!1){return f?Pe.ASC:Pe.DESC}(r),x=s.useMemo(()=>o[gt(o,n==null?void 0:n.toString())]||{},[n,o]);return{tableColumns:o,draggingColumnId:l,handleDragStart:w,handleDragEnter:b,handleDragOver:v,handleDragLeave:I,handleDragEnd:P,defaultSortDirection:y,defaultSortColumn:x}}var ya=s.memo(function(e){const{data:t=d.data,columns:n=d.columns,title:r=d.title,actions:o=d.actions,keyField:a=d.keyField,striped:l=d.striped,highlightOnHover:c=d.highlightOnHover,pointerOnHover:g=d.pointerOnHover,dense:w=d.dense,selectableRows:b=d.selectableRows,selectableRowsSingle:v=d.selectableRowsSingle,selectableRowsHighlight:I=d.selectableRowsHighlight,selectableRowsNoSelectAll:P=d.selectableRowsNoSelectAll,selectableRowsVisibleOnly:y=d.selectableRowsVisibleOnly,selectableRowSelected:x=d.selectableRowSelected,selectableRowDisabled:f=d.selectableRowDisabled,selectableRowsComponent:R=d.selectableRowsComponent,selectableRowsComponentProps:C=d.selectableRowsComponentProps,onRowExpandToggled:D=d.onRowExpandToggled,onSelectedRowsChange:A=d.onSelectedRowsChange,expandableIcon:F=d.expandableIcon,onChangeRowsPerPage:Q=d.onChangeRowsPerPage,onChangePage:V=d.onChangePage,paginationServer:L=d.paginationServer,paginationServerOptions:ne=d.paginationServerOptions,paginationTotalRows:Z=d.paginationTotalRows,paginationDefaultPage:se=d.paginationDefaultPage,paginationResetDefaultPage:K=d.paginationResetDefaultPage,paginationPerPage:G=d.paginationPerPage,paginationRowsPerPageOptions:le=d.paginationRowsPerPageOptions,paginationIconLastPage:ee=d.paginationIconLastPage,paginationIconFirstPage:he=d.paginationIconFirstPage,paginationIconNext:ie=d.paginationIconNext,paginationIconPrevious:de=d.paginationIconPrevious,paginationComponent:Se=d.paginationComponent,paginationComponentOptions:ve=d.paginationComponentOptions,responsive:Re=d.responsive,progressPending:m=d.progressPending,progressComponent:p=d.progressComponent,persistTableHead:h=d.persistTableHead,noDataComponent:O=d.noDataComponent,disabled:i=d.disabled,noTableHead:z=d.noTableHead,noHeader:u=d.noHeader,fixedHeader:U=d.fixedHeader,fixedHeaderScrollHeight:N=d.fixedHeaderScrollHeight,pagination:j=d.pagination,subHeader:S=d.subHeader,subHeaderAlign:J=d.subHeaderAlign,subHeaderWrap:re=d.subHeaderWrap,subHeaderComponent:M=d.subHeaderComponent,noContextMenu:te=d.noContextMenu,contextMessage:W=d.contextMessage,contextActions:T=d.contextActions,contextComponent:De=d.contextComponent,expandableRows:q=d.expandableRows,onRowClicked:Ie=d.onRowClicked,onRowDoubleClicked:Ee=d.onRowDoubleClicked,onRowMouseEnter:pe=d.onRowMouseEnter,onRowMouseLeave:E=d.onRowMouseLeave,sortIcon:X=d.sortIcon,onSort:Ue=d.onSort,sortFunction:_e=d.sortFunction,sortServer:fe=d.sortServer,expandableRowsComponent:Fn=d.expandableRowsComponent,expandableRowsComponentProps:Ln=d.expandableRowsComponentProps,expandableRowDisabled:Ft=d.expandableRowDisabled,expandableRowsHideExpander:Lt=d.expandableRowsHideExpander,expandOnRowClicked:Mn=d.expandOnRowClicked,expandOnRowDoubleClicked:zn=d.expandOnRowDoubleClicked,expandableRowExpanded:Mt=d.expandableRowExpanded,expandableInheritConditionalStyles:Nn=d.expandableInheritConditionalStyles,defaultSortFieldId:Wn=d.defaultSortFieldId,defaultSortAsc:Bn=d.defaultSortAsc,clearSelectedRows:zt=d.clearSelectedRows,conditionalRowStyles:Gn=d.conditionalRowStyles,theme:Nt=d.theme,customStyles:Wt=d.customStyles,direction:Ye=d.direction,onColumnOrderChange:Vn=d.onColumnOrderChange,className:Un}=e,{tableColumns:Bt,draggingColumnId:Gt,handleDragStart:Vt,handleDragEnter:Ut,handleDragOver:Yt,handleDragLeave:Xt,handleDragEnd:Qt,defaultSortDirection:Yn,defaultSortColumn:Xn}=va(n,Vn,Wn,Bn),[{rowsPerPage:ke,currentPage:me,selectedRows:Ct,allSelected:Zt,selectedCount:Kt,selectedColumn:ye,sortDirection:Fe,toggleOnSelectedRowsChange:Qn},Te]=s.useReducer(co,{allSelected:!1,selectedCount:0,selectedRows:[],selectedColumn:Xn,toggleOnSelectedRowsChange:!1,sortDirection:Yn,currentPage:se,rowsPerPage:G,selectedRowsFlag:!1,contextMessage:d.contextMessage}),{persistSelectedOnSort:Jt=!1,persistSelectedOnPageChange:lt=!1}=ne,qt=!(!L||!lt&&!Jt),Zn=j&&!m&&t.length>0,Kn=Se||pa,Jn=s.useMemo(()=>(($={},B="default",ge="default")=>{const be=$e[B]?B:ge;return Tt({table:{style:{color:(k=$e[be]).text.primary,backgroundColor:k.background.default}},tableWrapper:{style:{display:"table"}},responsiveWrapper:{style:{}},header:{style:{fontSize:"22px",color:k.text.primary,backgroundColor:k.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:k.background.default,minHeight:"52px"}},head:{style:{color:k.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:k.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:k.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:k.context.background,fontSize:"18px",fontWeight:400,color:k.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:k.text.primary,backgroundColor:k.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:k.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:k.selected.text,backgroundColor:k.selected.default,borderBottomColor:k.background.default}},highlightOnHoverStyle:{color:k.highlightOnHover.text,backgroundColor:k.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:k.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:k.background.default},stripedStyle:{color:k.striped.text,backgroundColor:k.striped.default}},expanderRow:{style:{color:k.text.primary,backgroundColor:k.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:k.button.default,fill:k.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:k.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:k.button.hover},"&:focus":{outline:"none",backgroundColor:k.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:k.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:k.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:k.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:k.button.default,fill:k.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:k.button.disabled,fill:k.button.disabled},"&:hover:not(:disabled)":{backgroundColor:k.button.hover},"&:focus":{outline:"none",backgroundColor:k.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:k.text.primary,backgroundColor:k.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:k.text.primary,backgroundColor:k.background.default}}},$);var k})(Wt,Nt),[Wt,Nt]),qn=s.useMemo(()=>Object.assign({},Ye!=="auto"&&{dir:Ye}),[Ye]),ue=s.useMemo(()=>{if(fe)return t;if(ye!=null&&ye.sortFunction&&typeof ye.sortFunction=="function"){const $=ye.sortFunction,B=Fe===Pe.ASC?$:(ge,be)=>-1*$(ge,be);return[...t].sort(B)}return function($,B,ge,be){return B?be&&typeof be=="function"?be($.slice(0),B,ge):$.slice(0).sort((k,ct)=>{let Oe,xe;if(typeof B=="string"?(Oe=Dt(k,B),xe=Dt(ct,B)):(Oe=B(k),xe=B(ct)),ge==="asc"){if(Oe<xe)return-1;if(Oe>xe)return 1}if(ge==="desc"){if(Oe>xe)return-1;if(Oe<xe)return 1}return 0}):$}(t,ye==null?void 0:ye.selector,Fe,_e)},[fe,ye,Fe,t,_e]),Xe=s.useMemo(()=>{if(j&&!L){const $=me*ke,B=$-ke;return ue.slice(B,$)}return ue},[me,j,L,ke,ue]),er=s.useCallback($=>{Te($)},[]),tr=s.useCallback($=>{Te($)},[]),nr=s.useCallback($=>{Te($)},[]),rr=s.useCallback(($,B)=>Ie($,B),[Ie]),or=s.useCallback(($,B)=>Ee($,B),[Ee]),ar=s.useCallback(($,B)=>pe($,B),[pe]),ir=s.useCallback(($,B)=>E($,B),[E]),Le=s.useCallback($=>Te({type:"CHANGE_PAGE",page:$,paginationServer:L,visibleOnly:y,persistSelectedOnPageChange:lt}),[L,lt,y]),sr=s.useCallback($=>{const B=Ze(Z||Xe.length,$),ge=Et(me,B);L||Le(ge),Te({type:"CHANGE_ROWS_PER_PAGE",page:ge,rowsPerPage:$})},[me,Le,L,Z,Xe.length]);if(j&&!L&&ue.length>0&&Xe.length===0){const $=Ze(ue.length,ke),B=Et(me,$);Le(B)}je(()=>{A({allSelected:Zt,selectedCount:Kt,selectedRows:Ct.slice(0)})},[Qn]),je(()=>{Ue(ye,Fe,ue.slice(0))},[ye,Fe]),je(()=>{V(me,Z||ue.length)},[me]),je(()=>{Q(ke,me)},[ke]),je(()=>{Le(se)},[se,K]),je(()=>{if(j&&L&&Z>0){const $=Ze(Z,ke),B=Et(me,$);me!==B&&Le(B)}},[Z]),s.useEffect(()=>{Te({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:zt})},[v,zt]),s.useEffect(()=>{if(!x)return;const $=ue.filter(ge=>x(ge)),B=v?$.slice(0,1):$;Te({type:"SELECT_MULTIPLE_ROWS",keyField:a,selectedRows:B,totalRows:ue.length,mergeSelections:qt})},[t,x]);const lr=y?Xe:ue,cr=lt||v||P;return s.createElement(io,{theme:Jn},!u&&(!!r||!!o)&&s.createElement(Qo,{title:r,actions:o,showMenu:!te,selectedCount:Kt,direction:Ye,contextActions:T,contextComponent:De,contextMessage:W}),S&&s.createElement(Jo,{align:J,wrapContent:re},M),s.createElement(ea,Object.assign({responsive:Re,fixedHeader:U,fixedHeaderScrollHeight:N,className:Un},qn),s.createElement(ta,null,m&&!h&&s.createElement(gn,null,p),s.createElement(go,{disabled:i,className:"rdt_Table",role:"table"},!z&&(!!h||ue.length>0&&!m)&&s.createElement(ho,{className:"rdt_TableHead",role:"rowgroup",fixedHeader:U},s.createElement(fo,{className:"rdt_TableHeadRow",role:"row",dense:w},b&&(cr?s.createElement(Ve,{style:{flex:"0 0 48px"}}):s.createElement(Wo,{allSelected:Zt,selectedRows:Ct,selectableRowsComponent:R,selectableRowsComponentProps:C,selectableRowDisabled:f,rowData:lr,keyField:a,mergeSelections:qt,onSelectAllRows:tr})),q&&!Lt&&s.createElement(na,null),Bt.map($=>s.createElement(zo,{key:$.id,column:$,selectedColumn:ye,disabled:m||ue.length===0,pagination:j,paginationServer:L,persistSelectedOnSort:Jt,selectableRowsVisibleOnly:y,sortDirection:Fe,sortIcon:X,sortServer:fe,onSort:er,onDragStart:Vt,onDragOver:Yt,onDragEnd:Qt,onDragEnter:Ut,onDragLeave:Xt,draggingColumnId:Gt})))),!ue.length&&!m&&s.createElement(ra,null,O),m&&h&&s.createElement(gn,null,p),!m&&ue.length>0&&s.createElement(qo,{className:"rdt_TableBody",role:"rowgroup"},Xe.map(($,B)=>{const ge=Be($,a),be=function(xe=""){return typeof xe!="number"&&(!xe||xe.length===0)}(ge)?B:ge,k=ft($,Ct,a),ct=!!(q&&Mt&&Mt($)),Oe=!!(q&&Ft&&Ft($));return s.createElement(To,{id:be,key:be,keyField:a,"data-row-id":be,columns:Bt,row:$,rowCount:ue.length,rowIndex:B,selectableRows:b,expandableRows:q,expandableIcon:F,highlightOnHover:c,pointerOnHover:g,dense:w,expandOnRowClicked:Mn,expandOnRowDoubleClicked:zn,expandableRowsComponent:Fn,expandableRowsComponentProps:Ln,expandableRowsHideExpander:Lt,defaultExpanderDisabled:Oe,defaultExpanded:ct,expandableInheritConditionalStyles:Nn,conditionalRowStyles:Gn,selected:k,selectableRowsHighlight:I,selectableRowsComponent:R,selectableRowsComponentProps:C,selectableRowDisabled:f,selectableRowsSingle:v,striped:l,onRowExpandToggled:D,onRowClicked:rr,onRowDoubleClicked:or,onRowMouseEnter:ar,onRowMouseLeave:ir,onSelectedRow:nr,draggingColumnId:Gt,onDragStart:Vt,onDragOver:Yt,onDragEnd:Qt,onDragEnter:Ut,onDragLeave:Xt})}))))),Zn&&s.createElement("div",null,s.createElement(Kn,{onChangePage:Le,onChangeRowsPerPage:sr,rowCount:Z||ue.length,currentPage:me,rowsPerPage:ke,direction:Ye,paginationRowsPerPageOptions:le,paginationIconLastPage:ee,paginationIconFirstPage:he,paginationIconNext:ie,paginationIconPrevious:de,paginationComponentOptions:ve})))});const xa=e=>{const[t,n]=s.useState(!1),r=o=>{n(o.matches)};return s.useEffect(()=>{const o=window.matchMedia(e);n(o.matches);const a=l=>r(l);return o.addEventListener("change",a),()=>{o.removeEventListener("change",a)}},[e]),t};wa("dark",{background:{default:"transparent"}});const Sa=({data:e=[],columns:t,pagination:n,paginationServer:r,striped:o,responsive:a,dense:l,highlightOnHover:c,paginationTotalRows:g,onChangePage:w,onChangeRowsPerPage:b,progressPending:v,progressComponent:I,expandableRows:P,expandableRowsComponent:y})=>{const x=xa("(prefers-color-scheme: dark)"),[f,R]=s.useState(x);return s.useEffect(()=>{R(x)},[x]),ur.jsx(ya,{theme:f?"dark":"",className:"shadow-sm",columns:t,data:e,pagination:n,paginationServer:r,striped:o,responsive:a,dense:l,highlightOnHover:c,paginationTotalRows:g,expandableRows:P,onChangePage:w,onChangeRowsPerPage:b,progressPending:v,progressComponent:I,expandableRowsComponent:y})};export{Sa as T};
