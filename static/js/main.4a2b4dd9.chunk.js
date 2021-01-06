(this["webpackJsonphouse-blocks"]=this["webpackJsonphouse-blocks"]||[]).push([[0],{43:function(t,e,n){},44:function(t,e,n){},48:function(t,e,n){},49:function(t,e,n){"use strict";n.r(e);var r=n(2),i=n(0),c=n.n(i),a=n(18),o=n.n(a),s=n(6),l=n(14),u=function(t){var e=t.title,n=t.value,i=t.onChange,c=void 0===i?Function.prototype:i,a=t.min,o=void 0===a?100:a,s=t.max,l=void 0===s?1e3:s,u=t.step,d=void 0===u?50:u,h=t.unit,b=void 0===h?"mm":h;return Object(r.jsxs)("div",{className:"control range-slider",children:[Object(r.jsx)("span",{className:"control__title range-slider__title",children:e}),Object(r.jsx)("input",{value:n,type:"range",min:o,max:l,step:d,onChange:function(t){return c(parseFloat(t.target.value))}}),Object(r.jsxs)("span",{className:"range-slider__value",children:[n," ",b]})]})},d=n(13);function h(t){var e=t.value,n=t.onChange,i=t.title,c=Object(d.a)(t,["value","onChange","title"]);return Object(r.jsxs)("label",{htmlFor:i,className:"control",children:[Object(r.jsx)("span",{className:"control__title",children:i.length>8?i.substring(0,8)+"\u2026":i}),Object(r.jsx)("input",Object(s.a)({type:"checkbox",name:i,checked:!!e,onChange:function(t){return n(t.target.checked)}},c)),Object(r.jsx)("span",{className:"control__details",children:i})]})}var b=n(9);function j(t){var e=t.title,n=t.options,c=t.value,a=t.onChange,o=t.multiple,s=Object(i.useState)(c),l=Object(b.a)(s,2),u=l[0],d=l[1];return Object(r.jsxs)("div",{className:"control range-slider",children:[Object(r.jsx)("span",{className:"control__title range-slider__title",children:e}),Object(r.jsx)("select",{multiple:o,value:u,onChange:function(t){var e=o?Array.from(t.target.options).map((function(t){return t.selected?t.value:null})).filter((function(t){return t})):t.target.value;d(e),a(e)},children:n.map((function(t){return Object(r.jsx)("option",{value:t,children:t},t)}))})]})}var f=n(11),p=function(t){return{x:t[0],y:t[1]}},O=function(t){return[t.x,t.y]},v={center:function(t,e){return{x:(t.x+e.x)/2,y:(t.y+e.y)/2}},scale:function(t,e){return{x:t.x*e,y:t.y*e}},add:function(t,e){return{x:t.x+e.x,y:t.y+e.y}},sub:function(t,e){return{x:t.x-e.x,y:t.y-e.y}},dot:function(t,e){return{x:t.x*e.y,y:t.x*e.y}},travel:function(t,e,n){return v.add(t,v.scale(v.sub(e,t),n))},dist:function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},length:function(t){return Math.sqrt(t.x*t.x+t.y*t.y)},rotate90:function(t){return{x:-t.y,y:t.x}},rotate90m:function(t){return{x:t.y,y:-t.x}},norm:function(t){return v.scale(t,1/v.length(t))}};function x(t,e,n,r){var i=r.side,c=r.finger,a=r.thickness,o=r.doubleSheeting,s=r.isFrontBack,l=p(e),u=p(n),d=v.dist(l,u),h=["top","bottom"].includes(i)||["right","left"].includes(i)&&(0===t||2===t)?"in":"out",j=Math.floor(d/100);o||2===t&&"front"!==i&&(j=0);var x=c/j;var g,y=function(e,n){var r=Object(b.a)(e,2),i=r[0],c=r[1];if(s){if(2===t&&"from"===n||0===t&&"to"===n)return[i-a,c];if(2===t&&"to"===n||0===t&&"from"===n)return[i+a,c]}return[i,c]};return[y(O(l),"from")].concat(Object(f.a)((g=j,Object(f.a)(Array(g).keys()).map((function(t){return function(t,e,n,r,i,c){var a=v.norm(v.sub(e,t));"out"===i&&(a=v.scale(a,-1));var o=r/100,s=v.travel(e,t,n+o),l=v.travel(e,t,n-o),u=v.add(s,v.scale(v.rotate90(a),c)),d=v.add(l,v.scale(v.rotate90(a),c));return[O(s),O(u),O(d),O(l)]}(l,u,function(t){return(g-t+0)/(g+1)}(t),x,h,a)})).flat())),[y(O(u),"to")]).map((function(e,n){var r=Object(b.a)(e,2),i=r[0],c=r[1];if(s){if(1===t)return[i-a,c];if(3===t)return[i+a,c]}return[i,c]}))}function g(t,e,n,r){var i=["front","back"].includes(t),c=Object(s.a)({side:t,isFrontBack:i},r);return[].concat(Object(f.a)(x(0,[0,0],[e-0,0],c)),Object(f.a)(x(1,[e-0,0],[e-0,n],c)),Object(f.a)(x(2,[e-0,n],[0,n],c)),Object(f.a)(x(3,[0,n],[0,0],c)))}var y=Object(l.b)({width:100,height:200,depth:600,finger:20,thickness:10,doubleSheeting:!0,options:"none"}),m=Object(l.b)({sides:{}});Object(l.a)((function(){m.sides=function(t){var e=t.width,n=t.height,r=t.depth,i=t.doubleSheeting,c=t.options,a=t.finger,o=void 0===a?20:a,s=t.thickness,l=void 0===s?10:s;console.log("makeBox",{width:e,height:n,options:c});var u={width:e,height:n,depth:r,finger:o,thickness:l,doubleSheeting:i,options:c},d={top:g("top",n,e,u),bottom:g("bottom",n,e,u),front:g("front",n,r,u),back:g("back",n,r,u),left:g("left",r,e,u),right:g("right",r,e,u)};return i||delete d.back,d}(y)}));n(43);function k(t){return{value:y[t],onChange:function(e){return y[t]=e}}}var C=function(t,e,n){return{min:t,max:e,step:n}},A=["none","rabbet","parapet"],w=Object(l.c)((function(){return Object(r.jsxs)("div",{className:"control-box",children:[Object(r.jsx)(u,Object(s.a)({title:"height"},k("height"))),Object(r.jsx)(u,Object(s.a)({title:"width"},k("width"))),Object(r.jsx)(u,Object(s.a)({title:"depth"},k("depth"))),Object(r.jsx)(u,Object(s.a)(Object(s.a)({title:"thickness"},k("thickness")),C(0,15,1))),Object(r.jsx)(u,Object(s.a)(Object(s.a)(Object(s.a)({title:"finger"},k("finger")),C(0,33,1)),{},{unit:"%"})),Object(r.jsx)(h,Object(s.a)({title:"double Sheeting"},k("doubleSheeting"))),Object(r.jsx)(j,Object(s.a)({title:"options",options:A},k("options")))]})})),N=n(1),T=n(7),S=n(3),M=n(4),_=n(33),B=n.n(_),I=function(t){Object(S.a)(n,t);var e=Object(M.a)(n);function n(){var t;return Object(N.a)(this,n),(t=e.call(this)).childRefs=[],t.shouldUpdateAgain=!1,t.state={layout:{children:[]}},t}return Object(T.a)(n,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"componentDidUpdate",value:function(){if(this.shouldUpdateAgain=!this.shouldUpdateAgain,this.shouldUpdateAgain){var t=this.props,e=t.children,n=t.onLayout,r=t.style,i=this.getChildrenMeasured(this.childRefs),c=this.getFlattenedChildren(e),a=this.getChildrenAsMergedStyles(c,i),o=this.getComputedLayout(a,r);n(o),this.setState({layout:o})}}},{key:"getFlattenedChildren",value:function(t){return Array.isArray(t)?t.filter((function(t){return t})).filter((function(t){return"string"!==typeof t})).map((function(t){return Array.isArray(t)?t:[t]})).reduce((function(t,e){return t.concat(e)}),[]):[t]}},{key:"getChildrenAsMergedStyles",value:function(t,e){return e.map((function(e,n){var r=t[n]||{},i=r&&r.props?r.props.style:{};return{style:Object(s.a)(Object(s.a)({},i),{},{height:e.height||i.height,width:e.width||i.width})}}))}},{key:"getChildrenMeasured",value:function(t){return t&&t.length?t.map((function(t){return t.getBBox?t.getBBox():Object(a.findDOMNode)(t).getBBox()})):[]}},{key:"getComputedLayout",value:function(t,e){var n={children:Array.from(t||[]),style:Object(s.a)({},e)};return B()(n),n}},{key:"getLayoutChildren",value:function(t){return t&&t.children&&t.children.length?t.children:[]}},{key:"getLayoutAttributesForChild",value:function(t,e){if(e&&e.layout){var n=e.layout,r=n.left,i=n.top;switch(t.type){case"circle":var c=t.props.r||0;return{cx:r+c,cy:i+c};case"ellipse":return{cx:r+(t.props.rx||0),cy:i+(t.props.ry||0)};case"g":case"path":case"polygon":case"polyline":return{transform:"translate(".concat(r," ").concat(i,")")};default:return{x:r,y:i}}}return{}}},{key:"render",value:function(){var t=this,e=this.props,n=e.children,i=e.className,a=e.x,o=e.y,l=this.state.layout;this.childRefs=[];var u=this.getFlattenedChildren(n),d=this.getLayoutChildren(l);return Object(r.jsx)("g",{className:i,transform:"translate(".concat(a," ").concat(o,")"),children:u.map((function(e,n){return c.a.cloneElement(e,Object(s.a)(Object(s.a)(Object(s.a)({},e.props),t.getLayoutAttributesForChild(e,d[n])),{},{key:"child-".concat(n),ref:function(e){return e?t.childRefs.push(e):null}}))}))})}}]),n}(c.a.Component);I.defaultProps={children:[],className:null,onLayout:function(){},style:{},x:0,y:0};var L=n(5);function F(t){var e=t.map((function(t){return new L.Vector2(t[0]/100,t[1]/100)})),n=new L.Shape(e,{autoClose:!0});return n.autoClose=!0,n}n(44);var D=Object(l.c)((function(t){var e=t.style,n=t.title,i=t.path;return Object(r.jsxs)("g",{transform:"translate(".concat(0,", ").concat(0,")"),children:[Object(r.jsx)("text",{x:"0",y:"0",className:"title",children:n}),Object(r.jsx)("g",{transform:"translate(0, 5) scale(0.5)",children:Object(r.jsx)("path",Object(s.a)({d:i},e))})]})})),E=function(t){Object(S.a)(n,t);var e=Object(M.a)(n);function n(){return Object(N.a)(this,n),e.apply(this,arguments)}return Object(T.a)(n,[{key:"render",value:function(){var t=this.props,e=t.x,n=void 0===e?0:e,i=t.y,c=void 0===i?0:i,a=Object(d.a)(t,["x","y"]);return Object(r.jsx)("g",{transform:"translate(".concat(n,", ").concat(c,")"),children:Object(r.jsx)(D,Object(s.a)({},a))})}}]),n}(c.a.Component),R={line1:{fill:"none",stroke:"white",strokeWidth:.5},line2:{fill:"none",stroke:"white",strokeWidth:1.5},line3:{fill:"none",stroke:"white",strokeWidth:2.5}},U=Object(l.c)((function(){return Object(r.jsx)("svg",{viewBox:[0,0,1e3,1e3],children:Object(r.jsx)(I,{style:{width:1e3,height:1e3,padding:20,flexDirection:"row",justifyContent:"space-between",flexWrap:"wrap"},children:Object.entries(m.sides).map((function(t){var e,n=Object(b.a)(t,2),i=n[0],c=n[1];return Object(r.jsx)(E,{title:i,path:(e=c,[e.map((function(t,e){return"".concat(e?"L":"M").concat(t[0]," ").concat(t[1])})).join(" "),"Z"].join(" ")),style:R.line2},i)}))})})})),W=n(16),J=function(t){Object(S.a)(n,t);var e=Object(M.a)(n);function n(t,r){var i;return Object(N.a)(this,n),(i=e.call(this,t,r)).state={activeTabIndex:i.props.defaultActiveTabIndex},i.handleTabClick=i.handleTabClick.bind(Object(W.a)(i)),i}return Object(T.a)(n,[{key:"handleTabClick",value:function(t){this.setState({activeTabIndex:t===this.state.activeTabIndex?this.props.defaultActiveTabIndex:t})}},{key:"renderChildrenWithTabsApiAsProps",value:function(){var t=this;return c.a.Children.map(this.props.children,(function(e,n){return c.a.cloneElement(e,{onClick:t.handleTabClick,tabIndex:n,isActive:n===t.state.activeTabIndex})}))}},{key:"renderActiveTabContent",value:function(){var t=this.props.children,e=this.state.activeTabIndex;if(t[e])return t[e].props.children}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"tabs",children:[Object(r.jsx)("ul",{className:"tabs-nav nav navbar-nav navbar-left",children:this.renderChildrenWithTabsApiAsProps()}),Object(r.jsx)("div",{className:"tabs-active-content",children:this.renderActiveTabContent()})]})}}]),n}(c.a.Component),P=function(t){var e=t.title,n=t.tabIndex,i=t.isActive,c=void 0!==i&&i,a=t.onClick,o=void 0===a?Function.prototype:a,s=t.linkClassName,l=void 0===s?"":s;return Object(r.jsx)("li",{className:"tab",children:Object(r.jsx)("a",{href:"/",className:"tab-link ".concat(l," ").concat(c?"active":""),onClick:function(t){t.preventDefault(),o(n)},children:e})})},q=n(29),z=n(22),G=n(34),V=[[0,[0,0,.5]],[.002,[0,0,.5]],[.004,[0,0,.518]],[.006,[0,0,.518]],[.008,[0,0,.536]],[.01,[0,0,.536]],[.012,[0,0,.553]],[.014,[0,0,.553]],[.016,[0,0,.571]],[.018,[0,0,.571]],[.02,[0,0,.589]],[.022,[0,0,.589]],[.023,[0,0,.607]],[.025,[0,0,.607]],[.027,[0,0,.625]],[.029,[0,0,.625]],[.031,[0,0,.643]],[.033,[0,0,.643]],[.035,[0,0,.66]],[.037,[0,0,.66]],[.039,[0,0,.678]],[.041,[0,0,.678]],[.043,[0,0,.696]],[.045,[0,0,.696]],[.047,[0,0,.714]],[.049,[0,0,.714]],[.051,[0,0,.732]],[.053,[0,0,.732]],[.055,[0,0,.75]],[.057,[0,0,.75]],[.059,[0,0,.767]],[.061,[0,0,.767]],[.063,[0,0,.785]],[.065,[0,0,.785]],[.067,[0,0,.803]],[.068,[0,0,.803]],[.07,[0,0,.821]],[.072,[0,0,.821]],[.074,[0,0,.839]],[.076,[0,0,.839]],[.078,[0,0,.857]],[.08,[0,0,.857]],[.082,[0,0,.874]],[.084,[0,0,.874]],[.086,[0,0,.892]],[.088,[0,0,.892]],[.09,[0,0,.91]],[.092,[0,0,.91]],[.094,[0,0,.928]],[.096,[0,0,.928]],[.098,[0,0,.946]],[.1,[0,0,.946]],[.102,[0,0,.963]],[.104,[0,0,.963]],[.106,[0,0,.981]],[.108,[0,0,.981]],[.11,[0,0,.999]],[.112,[0,0,.999]],[.114,[0,0,1]],[.115,[0,0,1]],[.117,[0,0,1]],[.119,[0,0,1]],[.121,[0,0,1]],[.123,[0,0,1]],[.125,[0,.002,1]],[.127,[0,.002,1]],[.129,[0,.018,1]],[.131,[0,.018,1]],[.133,[0,.033,1]],[.135,[0,.033,1]],[.137,[0,.049,1]],[.139,[0,.049,1]],[.141,[0,.065,1]],[.143,[0,.065,1]],[.145,[0,.08,1]],[.147,[0,.08,1]],[.149,[0,.096,1]],[.151,[0,.096,1]],[.153,[0,.112,1]],[.155,[0,.112,1]],[.157,[0,.127,1]],[.159,[0,.127,1]],[.16,[0,.143,1]],[.162,[0,.143,1]],[.164,[0,.159,1]],[.166,[0,.159,1]],[.168,[0,.175,1]],[.17,[0,.175,1]],[.172,[0,.19,1]],[.174,[0,.19,1]],[.176,[0,.206,1]],[.178,[0,.206,1]],[.18,[0,.222,1]],[.182,[0,.222,1]],[.184,[0,.237,1]],[.186,[0,.237,1]],[.188,[0,.253,1]],[.19,[0,.253,1]],[.192,[0,.269,1]],[.194,[0,.269,1]],[.196,[0,.284,1]],[.198,[0,.284,1]],[.2,[0,.3,1]],[.202,[0,.3,1]],[.204,[0,.316,1]],[.205,[0,.316,1]],[.207,[0,.331,1]],[.209,[0,.331,1]],[.211,[0,.347,1]],[.213,[0,.347,1]],[.215,[0,.363,1]],[.217,[0,.363,1]],[.219,[0,.378,1]],[.221,[0,.378,1]],[.223,[0,.394,1]],[.225,[0,.394,1]],[.227,[0,.41,1]],[.229,[0,.41,1]],[.231,[0,.425,1]],[.233,[0,.425,1]],[.235,[0,.441,1]],[.237,[0,.441,1]],[.239,[0,.457,1]],[.241,[0,.457,1]],[.243,[0,.473,1]],[.245,[0,.473,1]],[.247,[0,.488,1]],[.249,[0,.488,1]],[.25,[0,.504,1]],[.252,[0,.504,1]],[.254,[0,.52,1]],[.256,[0,.52,1]],[.258,[0,.535,1]],[.26,[0,.535,1]],[.262,[0,.551,1]],[.264,[0,.551,1]],[.266,[0,.567,1]],[.268,[0,.567,1]],[.27,[0,.582,1]],[.272,[0,.582,1]],[.274,[0,.598,1]],[.276,[0,.598,1]],[.278,[0,.614,1]],[.28,[0,.614,1]],[.282,[0,.629,1]],[.284,[0,.629,1]],[.286,[0,.645,1]],[.288,[0,.645,1]],[.29,[0,.661,1]],[.292,[0,.661,1]],[.294,[0,.676,1]],[.295,[0,.676,1]],[.297,[0,.692,1]],[.299,[0,.692,1]],[.301,[0,.708,1]],[.303,[0,.708,1]],[.305,[0,.724,1]],[.307,[0,.724,1]],[.309,[0,.739,1]],[.311,[0,.739,1]],[.313,[0,.755,1]],[.315,[0,.755,1]],[.317,[0,.771,1]],[.319,[0,.771,1]],[.321,[0,.786,1]],[.323,[0,.786,1]],[.325,[0,.802,1]],[.327,[0,.802,1]],[.329,[0,.818,1]],[.331,[0,.818,1]],[.333,[0,.833,1]],[.335,[0,.833,1]],[.337,[0,.849,1]],[.339,[0,.849,1]],[.341,[0,.865,.996]],[.342,[0,.865,.996]],[.344,[0,.88,.984]],[.346,[0,.88,.984]],[.348,[0,.896,.971]],[.35,[0,.896,.971]],[.352,[.009,.912,.958]],[.354,[.009,.912,.958]],[.356,[.022,.927,.946]],[.358,[.022,.927,.946]],[.36,[.035,.943,.933]],[.362,[.035,.943,.933]],[.364,[.047,.959,.92]],[.366,[.047,.959,.92]],[.368,[.06,.975,.908]],[.37,[.06,.975,.908]],[.372,[.073,.99,.895]],[.374,[.073,.99,.895]],[.376,[.085,1,.882]],[.378,[.085,1,.882]],[.38,[.098,1,.87]],[.382,[.098,1,.87]],[.384,[.111,1,.857]],[.386,[.111,1,.857]],[.387,[.123,1,.844]],[.389,[.123,1,.844]],[.391,[.136,1,.832]],[.393,[.136,1,.832]],[.395,[.149,1,.819]],[.397,[.149,1,.819]],[.399,[.161,1,.806]],[.401,[.161,1,.806]],[.403,[.174,1,.794]],[.405,[.174,1,.794]],[.407,[.187,1,.781]],[.409,[.187,1,.781]],[.411,[.199,1,.769]],[.413,[.199,1,.769]],[.415,[.212,1,.756]],[.417,[.212,1,.756]],[.419,[.225,1,.743]],[.421,[.225,1,.743]],[.423,[.237,1,.731]],[.425,[.237,1,.731]],[.427,[.25,1,.718]],[.429,[.25,1,.718]],[.431,[.262,1,.705]],[.432,[.262,1,.705]],[.434,[.275,1,.693]],[.436,[.275,1,.693]],[.438,[.288,1,.68]],[.44,[.288,1,.68]],[.442,[.3,1,.667]],[.444,[.3,1,.667]],[.446,[.313,1,.655]],[.448,[.313,1,.655]],[.45,[.326,1,.642]],[.452,[.326,1,.642]],[.454,[.338,1,.629]],[.456,[.338,1,.629]],[.458,[.351,1,.617]],[.46,[.351,1,.617]],[.462,[.364,1,.604]],[.464,[.364,1,.604]],[.466,[.376,1,.591]],[.468,[.376,1,.591]],[.47,[.389,1,.579]],[.472,[.389,1,.579]],[.474,[.402,1,.566]],[.476,[.402,1,.566]],[.477,[.414,1,.553]],[.479,[.414,1,.553]],[.481,[.427,1,.541]],[.483,[.427,1,.541]],[.485,[.44,1,.528]],[.487,[.44,1,.528]],[.489,[.452,1,.515]],[.491,[.452,1,.515]],[.493,[.465,1,.503]],[.495,[.465,1,.503]],[.497,[.478,1,.49]],[.499,[.478,1,.49]],[.501,[.49,1,.478]],[.503,[.49,1,.478]],[.505,[.503,1,.465]],[.507,[.503,1,.465]],[.509,[.515,1,.452]],[.511,[.515,1,.452]],[.513,[.528,1,.44]],[.515,[.528,1,.44]],[.517,[.541,1,.427]],[.519,[.541,1,.427]],[.521,[.553,1,.414]],[.523,[.553,1,.414]],[.524,[.566,1,.402]],[.526,[.566,1,.402]],[.528,[.579,1,.389]],[.53,[.579,1,.389]],[.532,[.591,1,.376]],[.534,[.591,1,.376]],[.536,[.604,1,.364]],[.538,[.604,1,.364]],[.54,[.617,1,.351]],[.542,[.617,1,.351]],[.544,[.629,1,.338]],[.546,[.629,1,.338]],[.548,[.642,1,.326]],[.55,[.642,1,.326]],[.552,[.655,1,.313]],[.554,[.655,1,.313]],[.556,[.667,1,.3]],[.558,[.667,1,.3]],[.56,[.68,1,.288]],[.562,[.68,1,.288]],[.564,[.693,1,.275]],[.566,[.693,1,.275]],[.568,[.705,1,.262]],[.569,[.705,1,.262]],[.571,[.718,1,.25]],[.573,[.718,1,.25]],[.575,[.731,1,.237]],[.577,[.731,1,.237]],[.579,[.743,1,.225]],[.581,[.743,1,.225]],[.583,[.756,1,.212]],[.585,[.756,1,.212]],[.587,[.769,1,.199]],[.589,[.769,1,.199]],[.591,[.781,1,.187]],[.593,[.781,1,.187]],[.595,[.794,1,.174]],[.597,[.794,1,.174]],[.599,[.806,1,.161]],[.601,[.806,1,.161]],[.603,[.819,1,.149]],[.605,[.819,1,.149]],[.607,[.832,1,.136]],[.609,[.832,1,.136]],[.611,[.844,1,.123]],[.613,[.844,1,.123]],[.614,[.857,1,.111]],[.616,[.857,1,.111]],[.618,[.87,1,.098]],[.62,[.87,1,.098]],[.622,[.882,1,.085]],[.624,[.882,1,.085]],[.626,[.895,1,.073]],[.628,[.895,1,.073]],[.63,[.908,1,.06]],[.632,[.908,1,.06]],[.634,[.92,1,.047]],[.636,[.92,1,.047]],[.638,[.933,1,.035]],[.64,[.933,1,.035]],[.642,[.946,.988,.022]],[.644,[.946,.988,.022]],[.646,[.958,.974,.009]],[.648,[.958,.974,.009]],[.65,[.971,.959,0]],[.652,[.971,.959,0]],[.654,[.984,.945,0]],[.656,[.984,.945,0]],[.658,[.996,.93,0]],[.659,[.996,.93,0]],[.661,[1,.916,0]],[.663,[1,.916,0]],[.665,[1,.901,0]],[.667,[1,.901,0]],[.669,[1,.887,0]],[.671,[1,.887,0]],[.673,[1,.872,0]],[.675,[1,.872,0]],[.677,[1,.858,0]],[.679,[1,.858,0]],[.681,[1,.843,0]],[.683,[1,.843,0]],[.685,[1,.829,0]],[.687,[1,.829,0]],[.689,[1,.814,0]],[.691,[1,.814,0]],[.693,[1,.8,0]],[.695,[1,.8,0]],[.697,[1,.785,0]],[.699,[1,.785,0]],[.701,[1,.771,0]],[.703,[1,.771,0]],[.705,[1,.756,0]],[.706,[1,.756,0]],[.708,[1,.741,0]],[.71,[1,.741,0]],[.712,[1,.727,0]],[.714,[1,.727,0]],[.716,[1,.712,0]],[.718,[1,.712,0]],[.72,[1,.698,0]],[.722,[1,.698,0]],[.724,[1,.683,0]],[.726,[1,.683,0]],[.728,[1,.669,0]],[.73,[1,.669,0]],[.732,[1,.654,0]],[.734,[1,.654,0]],[.736,[1,.64,0]],[.738,[1,.64,0]],[.74,[1,.625,0]],[.742,[1,.625,0]],[.744,[1,.611,0]],[.746,[1,.611,0]],[.748,[1,.596,0]],[.75,[1,.596,0]],[.751,[1,.582,0]],[.753,[1,.582,0]],[.755,[1,.567,0]],[.757,[1,.567,0]],[.759,[1,.553,0]],[.761,[1,.553,0]],[.763,[1,.538,0]],[.765,[1,.538,0]],[.767,[1,.524,0]],[.769,[1,.524,0]],[.771,[1,.509,0]],[.773,[1,.509,0]],[.775,[1,.495,0]],[.777,[1,.495,0]],[.779,[1,.48,0]],[.781,[1,.48,0]],[.783,[1,.466,0]],[.785,[1,.466,0]],[.787,[1,.451,0]],[.789,[1,.451,0]],[.791,[1,.436,0]],[.793,[1,.436,0]],[.795,[1,.422,0]],[.796,[1,.422,0]],[.798,[1,.407,0]],[.8,[1,.407,0]],[.802,[1,.393,0]],[.804,[1,.393,0]],[.806,[1,.378,0]],[.808,[1,.378,0]],[.81,[1,.364,0]],[.812,[1,.364,0]],[.814,[1,.349,0]],[.816,[1,.349,0]],[.818,[1,.335,0]],[.82,[1,.335,0]],[.822,[1,.32,0]],[.824,[1,.32,0]],[.826,[1,.306,0]],[.828,[1,.306,0]],[.83,[1,.291,0]],[.832,[1,.291,0]],[.834,[1,.277,0]],[.836,[1,.277,0]],[.838,[1,.262,0]],[.84,[1,.262,0]],[.841,[1,.248,0]],[.843,[1,.248,0]],[.845,[1,.233,0]],[.847,[1,.233,0]],[.849,[1,.219,0]],[.851,[1,.219,0]],[.853,[1,.204,0]],[.855,[1,.204,0]],[.857,[1,.19,0]],[.859,[1,.19,0]],[.861,[1,.175,0]],[.863,[1,.175,0]],[.865,[1,.16,0]],[.867,[1,.16,0]],[.869,[1,.146,0]],[.871,[1,.146,0]],[.873,[1,.131,0]],[.875,[1,.131,0]],[.877,[1,.117,0]],[.879,[1,.117,0]],[.881,[1,.102,0]],[.883,[1,.102,0]],[.885,[1,.088,0]],[.886,[1,.088,0]],[.888,[.999,.073,0]],[.89,[.999,.073,0]],[.892,[.981,.059,0]],[.894,[.981,.059,0]],[.896,[.963,.044,0]],[.898,[.963,.044,0]],[.9,[.946,.03,0]],[.902,[.946,.03,0]],[.904,[.928,.015,0]],[.906,[.928,.015,0]],[.908,[.91,.001,0]],[.91,[.91,.001,0]],[.912,[.892,0,0]],[.914,[.892,0,0]],[.916,[.874,0,0]],[.918,[.874,0,0]],[.92,[.857,0,0]],[.922,[.857,0,0]],[.924,[.839,0,0]],[.926,[.839,0,0]],[.928,[.821,0,0]],[.93,[.821,0,0]],[.932,[.803,0,0]],[.933,[.803,0,0]],[.935,[.785,0,0]],[.937,[.785,0,0]],[.939,[.767,0,0]],[.941,[.767,0,0]],[.943,[.75,0,0]],[.945,[.75,0,0]],[.947,[.732,0,0]],[.949,[.732,0,0]],[.951,[.714,0,0]],[.953,[.714,0,0]],[.955,[.696,0,0]],[.957,[.696,0,0]],[.959,[.678,0,0]],[.961,[.678,0,0]],[.963,[.66,0,0]],[.965,[.66,0,0]],[.967,[.643,0,0]],[.969,[.643,0,0]],[.971,[.625,0,0]],[.973,[.625,0,0]],[.975,[.607,0,0]],[.977,[.607,0,0]],[.978,[.589,0,0]],[.98,[.589,0,0]],[.982,[.571,0,0]],[.984,[.571,0,0]],[.986,[.553,0,0]],[.988,[.553,0,0]],[.99,[.536,0,0]],[.992,[.536,0,0]],[.994,[.518,0,0]],[.996,[.518,0,0]],[.998,[.5,0,0]],[1,[.5,0,0]]];function Z(t){if(t<0)return V[0];if(t>1)return V[V.length];var e=V.findIndex((function(e){return e[0]>=t}));return V[e][1]}function H(t){var e=t.shape,n=t.color,c=void 0===n?"green":n,a=t.thickness,o=void 0===a?.05:a,l=t.bevelEnabled,u=void 0===l||l,h=Object(d.a)(t,["shape","color","thickness","bevelEnabled"]),j=Object(i.useRef)(),f=Object(i.useState)(!1),p=Object(b.a)(f,2),O=p[0],v=p[1];return Object(r.jsxs)("mesh",Object(s.a)(Object(s.a)({},h),{},{ref:j,onClick:function(){return v(!O)},children:[Object(r.jsx)("extrudeBufferGeometry",{args:[e,u?{depth:o-2*o/10,bevelEnabled:!0,bevelSegments:1,bevelOffset:-o/10,steps:1,bevelSize:o/10,bevelThickness:o/10}:{depth:o,bevelEnabled:!1}]}),Object(r.jsx)("meshLambertMaterial",{color:c})]}))}Object(z.b)({OrbitControls:G.a});var K=function(){var t=Object(z.d)(),e=t.camera,n=t.gl.domElement,c=Object(i.useRef)();return Object(z.c)((function(t){return c.current.update()})),Object(r.jsx)("orbitControls",{ref:c,args:[e,n]})},Q=L.Math.degToRad,X=Object(l.c)((function(){var t=Object(i.useState)(!1),e=Object(b.a)(t,2),n=e[0],c=e[1],a=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=y.height/100,n=y.width/100,r=y.depth/100,i=y.thickness/100,c=t?1:0;return{top:{position:[r+c,0,0],rotation:[0,Q(90),0]},bottom:{position:[-i-c,0,0],rotation:[0,Q(90),0]},left:{position:[0,0,-i+c],rotation:[0,0,0]},right:{position:[0,0,-e-c],rotation:[0,0,0]},front:{position:[0,i-c,0],rotation:[Q(90),0,-Q(90)]},back:{position:[0,n+c,0],rotation:[Q(90),0,-Q(90)]}}}(n);return Object(r.jsxs)("div",{style:{position:"relative"},children:[Object(r.jsxs)("div",{id:"info-3d",children:["scroll = zoom, drag = rotate,",Object(r.jsx)("kbd",{children:"shift"})," + drag = pan, double-click = ",Object(r.jsx)("b",{children:"explode"})]}),Object(r.jsxs)(z.a,{style:{height:"100vh"},onDoubleClick:function(){return c((function(t){return!t}))},children:[Object(r.jsx)(K,{}),Object(r.jsx)("ambientLight",{intensity:.2}),Object(r.jsx)("pointLight",{position:[50,100,50],intensity:.8}),Object(r.jsx)("group",{position:[-y.depth/200,-y.width/200,y.height/200],children:Object.entries(m.sides).map((function(t,e){var n=Object(b.a)(t,2),i=n[0],c=n[1];return Object(r.jsx)(H,Object(s.a)(Object(s.a)({},a[i]),{},{shape:F(c),thickness:y.thickness/100,color:Object(q.a)(L.Color,Object(f.a)(Z(e/6)))}),i)}))})]})]})})),Y=Object(l.c)((function(){return Object(r.jsxs)("div",{style:{padding:"1rem"},children:[Object(r.jsxs)("pre",{children:["props = ",JSON.stringify(y,null,2)]}),(t=11,Object(f.a)(Array(t).keys())).map((function(t){return t/10})).map((function(t){return Object(r.jsx)("div",{style:{background:(e=t,"rgb(".concat(Z(e).map((function(t){return 255*t})).join(","),")"))},children:t},t);var e}))]});var t}));var $=function(){return Object(r.jsxs)("div",{className:"app",children:[Object(r.jsx)(w,{}),Object(r.jsxs)(J,{defaultActiveTabIndex:0,children:[Object(r.jsx)(P,{title:"2D",children:Object(r.jsx)("div",{className:"svg-box",children:Object(r.jsx)(U,{})})}),Object(r.jsx)(P,{title:"3D",children:Object(r.jsx)(X,{})}),Object(r.jsx)(P,{title:"Text",children:Object(r.jsx)("div",{className:"svg-box",children:Object(r.jsx)(Y,{})})})]})]})};n(48);o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)($,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.4a2b4dd9.chunk.js.map