webpackJsonp([0xd2a57dc1d8840000],{"./.cache/api-runner-browser.js":function(e,n){"use strict";var t=[];e.exports=function(e,n,o){var a=t.map(function(t){if(t.plugin[e]){var o=t.plugin[e](n,t.options);return o}});return a=a.filter(function(e){return"undefined"!=typeof e}),a.length>0?a:o?[o]:[]}},"./.cache/async-requires.js":function(e,n,t){"use strict";n.components={"page-component---src-pages-404-js":t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-404-js!./src/pages/404.js"),"page-component---src-pages-index-js":t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-index-js!./src/pages/index.js"),"page-component---src-pages-page-2-js":t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-page-2-js!./src/pages/page-2.js")},n.json={"404.json":t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json"),"index.json":t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json"),"page-2.json":t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---page-2!./.cache/json/page-2.json"),"404-html.json":t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json")},n.layouts={index:t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=layout-component---index!./src/layouts/index.js")}},"./.cache/component-renderer.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var a=t("./node_modules/babel-runtime/helpers/extends.js"),s=o(a),r=t("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),u=o(r),d=t("./node_modules/babel-runtime/helpers/classCallCheck.js"),i=o(d),c=t("./node_modules/babel-runtime/helpers/createClass.js"),l=o(c),m=t("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),f=o(m),p=t("./node_modules/babel-runtime/helpers/inherits.js"),g=o(p),h=t("./node_modules/react/react.js"),b=o(h),j=t("./.cache/loader.js"),y=o(j),_=t("./.cache/emitter.js"),x=o(_),v=function(e){function n(e){(0,i.default)(this,n);var t=(0,f.default)(this,(n.__proto__||(0,u.default)(n)).call(this));return t.state={location:e.location,pageResources:y.default.getResourcesForPathname(e.location.pathname)},t}return(0,g.default)(n,e),(0,l.default)(n,[{key:"componentWillReceiveProps",value:function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var t=y.default.getResourcesForPathname(e.location.pathname);t?this.setState({location:e.location,pageResources:t}):y.default.getResourcesForPathname(e.location.pathname,function(t){n.setState({location:e.location,pageResources:t})})}}},{key:"componentDidMount",value:function(){var e=this;x.default.on("onPostLoadPageResources",function(n){n.page.path===y.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})}},{key:"shouldComponentUpdate",value:function(e,n){return this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath))}},{key:"render",value:function(){return this.state.pageResources?(0,h.createElement)(this.state.pageResources.component,(0,s.default)({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null}}]),n}(b.default.Component);n.default=v},"./.cache/emitter.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=t("./node_modules/mitt/dist/mitt.js"),s=o(a),r=(0,s.default)();e.exports=r},"./.cache/find-page.js":function(e,n,t){"use strict";var o=t("./node_modules/react-router-dom/index.js"),a={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var s=t.slice(n.length);if(s.split("#").length>1&&(s=s.split("#").slice(0,-1).join("")),a[s])return a[s];var r=void 0;return e.some(function(e){if(e.matchPath){if((0,o.matchPath)(s,{path:e.path})||(0,o.matchPath)(s,{path:e.matchPath}))return r=e,a[s]=e,!0}else if((0,o.matchPath)(s,{path:e.path,exact:!0}))return r=e,a[s]=e,!0;return!1}),r}}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json":function(e,n,t){t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(0xa2868bfb69fc9000,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t("./node_modules/json-loader/index.js!./.cache/json/404-html.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json":function(e,n,t){t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(0xe70826b53c045000,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t("./node_modules/json-loader/index.js!./.cache/json/404.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json":function(e,n,t){t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(0x81b8806e42603000,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t("./node_modules/json-loader/index.js!./.cache/json/index.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---page-2!./.cache/json/page-2.json":function(e,n,t){t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(0x7b71d9db271c0800,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t("./node_modules/json-loader/index.js!./.cache/json/page-2.json")})})}},"./.cache/loader.js":function(e,n,t){(function(n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=t("./node_modules/babel-runtime/core-js/get-iterator.js"),s=o(a),r=t("./.cache/find-page.js"),u=o(r),d=t("./.cache/emitter.js"),i=o(d),c=void 0,l={},m={},f={},p={},g={},h=[],b=[],j={},y=[],_={},x=function(e){return e&&e.default||e},v=void 0,P=!0;v=t("./.cache/prefetcher.js")({getNextQueuedResources:function(){return y.slice(-1)[0]},createResourceDownload:function(e){w(e,function(){y=y.filter(function(n){return n!==e}),v.onResourcedFinished(e)})}}),i.default.on("onPreLoadPageResources",function(e){v.onPreLoadPageResources(e)}),i.default.on("onPostLoadPageResources",function(e){v.onPostLoadPageResources(e)});var R=function(e,n){return _[e]>_[n]?1:_[e]<_[n]?-1:0},E=function(e,n){return j[e]>j[n]?1:j[e]<j[n]?-1:0},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(p[e])n.nextTick(function(){t(null,p[e])});else{var o="page-c"===e.slice(0,6)?m.components[e]:m.json[e];o(function(n,o){p[e]=o,t(n,o)})}},S=function(e,t){g[e]?n.nextTick(function(){t(null,g[e])}):w(e,function(n,o){if(n)t(n);else{var a=x(o());g[e]=a,t(n,a)}})},k=1,N={empty:function(){b=[],j={},_={},y=[],h=[]},addPagesArray:function(e){h=e;var n="";c=(0,u.default)(e,n)},addDevRequires:function(e){l=e},addProdRequires:function(e){m=e},dequeue:function(e){return b.pop()},enqueue:function(e){if(!h.some(function(n){return n.path===e}))return!1;var n=1/k;k+=1,j[e]?j[e]+=1:j[e]=1,N.has(e)||b.unshift(e),b.sort(E);var t=c(e);return t.jsonName&&(_[t.jsonName]?_[t.jsonName]+=1+n:_[t.jsonName]=1+n,y.indexOf(t.jsonName)!==-1||p[t.jsonName]||y.unshift(t.jsonName)),t.componentChunkName&&(_[t.componentChunkName]?_[t.componentChunkName]+=1+n:_[t.componentChunkName]=1+n,y.indexOf(t.componentChunkName)!==-1||p[t.jsonName]||y.unshift(t.componentChunkName)),y.sort(R),v.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:y,resourcesCount:_}},getPages:function(){return{pathArray:b,pathCount:j}},getPage:function(e){return c(e)},has:function(e){return b.some(function(n){return n===e})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};P&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(c(e)||navigator.serviceWorker.getRegistrations().then(function(e){var n=!0,t=!1,o=void 0;try{for(var a,r=(0,s.default)(e);!(n=(a=r.next()).done);n=!0){var u=a.value;u.unregister()}}catch(e){t=!0,o=e}finally{try{!n&&r.return&&r.return()}finally{if(t)throw o}}window.location.reload()})),P=!1;var o=c(e);if(!o)return void console.log("A page wasn't found for \""+e+'"');if(e=o.path,f[e])return n.nextTick(function(){t(f[e]),i.default.emit("onPostLoadPageResources",{page:o,pageResources:f[e]})}),f[e];i.default.emit("onPreLoadPageResources",{path:e});var a=void 0,r=void 0,u=function(){if(a&&r){f[e]={component:a,json:r,page:o};var n={component:a,json:r,page:o};t(n),i.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return S(o.componentChunkName,function(e,n){e&&console.log("Loading the component for "+o.path+" failed"),a=n,u()}),void S(o.jsonName,function(e,n){e&&console.log("Loading the JSON for "+o.path+" failed"),r=n,u()})},peek:function(e){return b.slice(-1)[0]},length:function(){return b.length},indexOf:function(e){return b.length-b.indexOf(e)-1}};e.exports=N}).call(n,t("./node_modules/process/browser.js"))},"./.cache/pages.json":function(e,n){e.exports=[{componentChunkName:"page-component---src-pages-404-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"page-component---src-pages-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"page-component---src-pages-page-2-js",jsonName:"page-2.json",path:"/page-2/"},{componentChunkName:"page-component---src-pages-404-js",jsonName:"404-html.json",path:"/404.html"}]},"./.cache/prefetcher.js":function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,t=e.createResourceDownload,o=[],a=[],s=function(){var e=n();e&&(a.push(e),t(e))},r=function(e){switch(e.type){case"RESOURCE_FINISHED":a=a.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===a.length&&0===o.length&&s()},0)};return{onResourcedFinished:function(e){r({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){r({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){r({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){r({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:a}},empty:function(){o=[],a=[]}}}},0:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e){window.___history||(window.___history=e,e.listen(function(e,n){(0,i.default)("onRouteUpdate",{location:e,action:n})}))}function s(e,n){var t=n.location.pathname,o=(0,i.default)("shouldUpdateScroll",{prevRouterProps:e,pathname:t});if(o.length>0)return o[0];if(e){var a=e.location.pathname;if(a===t)return!1}return!0}var r=t("./node_modules/babel-runtime/helpers/extends.js"),u=o(r),d=t("./.cache/api-runner-browser.js"),i=o(d),c=t("./node_modules/react/react.js"),l=o(c),m=t("./node_modules/react-dom/index.js"),f=o(m),p=t("./node_modules/react-router-dom/index.js"),g=t("./node_modules/react-router-scroll/lib/index.js"),h=t("./node_modules/history/createBrowserHistory.js"),b=o(h),j=t("./.cache/emitter.js"),y=o(j),_=t("./.cache/pages.json"),x=o(_),v=t("./.cache/component-renderer.js"),P=o(v),R=t("./.cache/async-requires.js"),E=o(R),w=t("./.cache/loader.js"),S=o(w);window.___emitter=y.default,S.default.addPagesArray(x.default),S.default.addProdRequires(E.default),window.asyncRequires=E.default,window.___loader=S.default,window.matchPath=p.matchPath,(0,i.default)("onClientEntry"),(0,i.default)("registerServiceWorker").length>0&&t("./.cache/register-service-worker.js");var k=function(e){function n(o){o.page.path===S.default.getPage(e).path&&(y.default.off("onPostLoadPageResources",n),clearTimeout(t),window.___history.push(e))}if(window.location.pathname!==e){var t=setTimeout(function(){y.default.off("onPostLoadPageResources",n),y.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);S.default.getResourcesForPathname(e)?(clearTimeout(t),window.___history.push(e)):y.default.on("onPostLoadPageResources",n)}};window.___navigateTo=k;var N=(0,b.default)();(0,i.default)("onRouteUpdate",{location:N.location,action:N.action});var C=(0,i.default)("replaceRouterComponent",{history:N})[0],T=function(e){var n=e.children;return l.default.createElement(p.BrowserRouter,{history:N},n)},O=function(e){E.default.layouts.index?E.default.layouts.index(function(n,t){var o=t();e(o)}):e(function(e){return l.default.createElement("div",null,e.children())})};O(function(e){S.default.getResourcesForPathname(window.location.pathname,function(){var n=function(){return(0,c.createElement)(C?C:T,null,(0,c.createElement)(g.ScrollContext,{shouldUpdateScroll:s},(0,c.createElement)((0,p.withRouter)(e),{children:function(e){return(0,c.createElement)(p.Route,{render:function(n){a(n.history);var t=e?e:n;return S.default.getPage(t.location.pathname)?(0,c.createElement)(P.default,(0,u.default)({},t)):(0,c.createElement)(P.default,{location:{pathname:"/404.html"}})}})}})))},t=(0,i.default)("wrapRootComponent",{Root:n},n)[0];f.default.render(l.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,i.default)("onInitialClientRender")})})})},"./.cache/register-service-worker.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=t("./.cache/emitter.js"),s=o(a),r="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(r+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),s.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js":function(e,n,t){"use strict";function o(){function e(e){var n=o.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,o=document.querySelector("head"),a=t.e,s=t.s;t.e=function(o,r){var u=!1,d=!0,i=function(e){r&&(r(t,e),r=null)};return!s&&n&&n[o]?void i(!0):(a(o,function(){u||(u=!0,d?setTimeout(function(){i()}):i())}),void(u||(d=!1,e(function(){u||(u=!0,s?s[o]=void 0:(n||(n={}),n[o]=!0),i(!0))}))))}}o()},"./node_modules/mitt/dist/mitt.js":function(e,n){function t(e){return e=e||Object.create(null),{on:function(n,t){(e[n]||(e[n]=[])).push(t)},off:function(n,t){e[n]&&e[n].splice(e[n].indexOf(t)>>>0,1)},emit:function(n,t){(e[n]||[]).map(function(e){e(t)}),(e["*"]||[]).map(function(e){e(n,t)})}}}e.exports=t},"./node_modules/process/browser.js":function(e,n){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(c===setTimeout)return setTimeout(e,0);if((c===t||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(n){try{return c.call(null,e,0)}catch(n){return c.call(this,e,0)}}}function s(e){if(l===clearTimeout)return clearTimeout(e);if((l===o||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(n){try{return l.call(null,e)}catch(n){return l.call(this,e)}}}function r(){g&&f&&(g=!1,f.length?p=f.concat(p):h=-1,p.length&&u())}function u(){if(!g){var e=a(r);g=!0;for(var n=p.length;n;){for(f=p,p=[];++h<n;)f&&f[h].run();h=-1,n=p.length}f=null,g=!1,s(e)}}function d(e,n){this.fun=e,this.array=n}function i(){}var c,l,m=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:t}catch(e){c=t}try{l="function"==typeof clearTimeout?clearTimeout:o}catch(e){l=o}}();var f,p=[],g=!1,h=-1;m.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];p.push(new d(e,n)),1!==p.length||g||a(u)},d.prototype.run=function(){this.fun.apply(null,this.array)},m.title="browser",m.browser=!0,m.env={},m.argv=[],m.version="",m.versions={},m.on=i,m.addListener=i,m.once=i,m.off=i,m.removeListener=i,m.removeAllListeners=i,m.emit=i,m.prependListener=i,m.prependOnceListener=i,m.listeners=function(e){return[]},m.binding=function(e){throw new Error("process.binding is not supported")},m.cwd=function(){return"/"},m.chdir=function(e){throw new Error("process.chdir is not supported")},m.umask=function(){return 0}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=layout-component---index!./src/layouts/index.js":function(e,n,t){t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(0xef47e37750d80000,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t('./node_modules/babel-loader/lib/index.js?{"plugins":["/mnt/d/src/code/EthereumSafePay/gatsby/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/mnt/d/src/code/EthereumSafePay/gatsby/node_modules/babel-plugin-add-module-exports/lib/index.js","/mnt/d/src/code/EthereumSafePay/gatsby/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/mnt/d/src/code/EthereumSafePay/gatsby/node_modules/babel-preset-env/lib/index.js","/mnt/d/src/code/EthereumSafePay/gatsby/node_modules/babel-preset-stage-0/lib/index.js","/mnt/d/src/code/EthereumSafePay/gatsby/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/layouts/index.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-404-js!./src/pages/404.js":function(e,n,t){t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(0x7107efd8fd846000,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t('./node_modules/babel-loader/lib/index.js?{"plugins":["/mnt/d/src/code/EthereumSafePay/gatsby/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/mnt/d/src/code/EthereumSafePay/gatsby/node_modules/babel-plugin-add-module-exports/lib/index.js","/mnt/d/src/code/EthereumSafePay/gatsby/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/mnt/d/src/code/EthereumSafePay/gatsby/node_modules/babel-preset-env/lib/index.js","/mnt/d/src/code/EthereumSafePay/gatsby/node_modules/babel-preset-stage-0/lib/index.js","/mnt/d/src/code/EthereumSafePay/gatsby/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/404.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-index-js!./src/pages/index.js":function(e,n,t){t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(0x37beb808d31a9600,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t('./node_modules/babel-loader/lib/index.js?{"plugins":["/mnt/d/src/code/EthereumSafePay/gatsby/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/mnt/d/src/code/EthereumSafePay/gatsby/node_modules/babel-plugin-add-module-exports/lib/index.js","/mnt/d/src/code/EthereumSafePay/gatsby/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/mnt/d/src/code/EthereumSafePay/gatsby/node_modules/babel-preset-env/lib/index.js","/mnt/d/src/code/EthereumSafePay/gatsby/node_modules/babel-preset-stage-0/lib/index.js","/mnt/d/src/code/EthereumSafePay/gatsby/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-page-2-js!./src/pages/page-2.js":function(e,n,t){t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(0xc0c18720bcc62800,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t('./node_modules/babel-loader/lib/index.js?{"plugins":["/mnt/d/src/code/EthereumSafePay/gatsby/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/mnt/d/src/code/EthereumSafePay/gatsby/node_modules/babel-plugin-add-module-exports/lib/index.js","/mnt/d/src/code/EthereumSafePay/gatsby/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/mnt/d/src/code/EthereumSafePay/gatsby/node_modules/babel-preset-env/lib/index.js","/mnt/d/src/code/EthereumSafePay/gatsby/node_modules/babel-preset-stage-0/lib/index.js","/mnt/d/src/code/EthereumSafePay/gatsby/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/page-2.js')})})}}});
//# sourceMappingURL=app-227d2daebbe3b4ad968b.js.map