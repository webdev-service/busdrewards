(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1664],{1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,n){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(4941).Z;o(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(2648).Z,a=o(7273).Z,u=r(o(7294)),l=o(6273),f=o(2725),c=o(3462),i=o(1018),s=o(7190),d=o(1210),p=o(8684),v={};function y(e,t,o,n){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,o,n)).catch((function(e){0}));var r=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;v[t+"%"+o+(r?"%"+r:"")]=!0}}var b=u.default.forwardRef((function(e,t){var o,r=e.href,b=e.as,h=e.children,C=e.prefetch,_=e.passHref,g=e.replace,M=e.shallow,m=e.scroll,x=e.locale,L=e.onClick,j=e.onMouseEnter,R=e.onTouchStart,O=e.legacyBehavior,E=void 0===O?!0!==Boolean(!1):O,k=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=h,!E||"string"!==typeof o&&"number"!==typeof o||(o=u.default.createElement("a",null,o));var P=!1!==C,w=u.default.useContext(c.RouterContext),T=u.default.useContext(i.AppRouterContext);T&&(w=T);var I,S=u.default.useMemo((function(){var e=n(l.resolveHref(w,r,!0),2),t=e[0],o=e[1];return{href:t,as:b?l.resolveHref(w,b):o||t}}),[w,r,b]),U=S.href,B=S.as,N=u.default.useRef(U),Z=u.default.useRef(B);E&&(I=u.default.Children.only(o));var A=E?I&&"object"===typeof I&&I.ref:t,D=n(s.useIntersection({rootMargin:"200px"}),3),H=D[0],K=D[1],G=D[2],q=u.default.useCallback((function(e){Z.current===B&&N.current===U||(G(),Z.current=B,N.current=U),H(e),A&&("function"===typeof A?A(e):"object"===typeof A&&(A.current=e))}),[B,A,U,G,H]);u.default.useEffect((function(){var e=K&&P&&l.isLocalURL(U),t="undefined"!==typeof x?x:w&&w.locale,o=v[U+"%"+B+(t?"%"+t:"")];e&&!o&&y(w,U,B,{locale:t})}),[B,U,K,x,P,w]);var z={ref:q,onClick:function(e){E||"function"!==typeof L||L(e),E&&I.props&&"function"===typeof I.props.onClick&&I.props.onClick(e),e.defaultPrevented||function(e,t,o,n,r,a,f,c,i,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(o)){e.preventDefault();var d=function(){"beforePopState"in t?t[r?"replace":"push"](o,n,{shallow:a,locale:c,scroll:f}):t[r?"replace":"push"](o,{forceOptimisticNavigation:!s})};i?u.default.startTransition(d):d()}}(e,w,U,B,g,M,m,x,Boolean(T),P)},onMouseEnter:function(e){E||"function"!==typeof j||j(e),E&&I.props&&"function"===typeof I.props.onMouseEnter&&I.props.onMouseEnter(e),!P&&T||l.isLocalURL(U)&&y(w,U,B,{priority:!0})},onTouchStart:function(e){E||"function"!==typeof R||R(e),E&&I.props&&"function"===typeof I.props.onTouchStart&&I.props.onTouchStart(e),!P&&T||l.isLocalURL(U)&&y(w,U,B,{priority:!0})}};if(!E||_||"a"===I.type&&!("href"in I.props)){var F="undefined"!==typeof x?x:w&&w.locale,J=w&&w.isLocaleDomain&&d.getDomainLocale(B,F,w.locales,w.domainLocales);z.href=J||p.addBasePath(f.addLocale(B,F,w&&w.defaultLocale))}return E?u.default.cloneElement(I,z):u.default.createElement("a",Object.assign({},k,z),o)}));t.default=b,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,o=e.rootMargin,c=e.disabled||!u,i=n(r.useState(!1),2),s=i[0],d=i[1],p=n(r.useState(null),2),v=p[0],y=p[1];r.useEffect((function(){if(u){if(c||s)return;if(v&&v.tagName){var e=function(e,t,o){var n=function(e){var t,o={root:e.root||null,margin:e.rootMargin||""},n=f.find((function(e){return e.root===o.root&&e.margin===o.margin}));if(n&&(t=l.get(n)))return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)}))}),e);return t={id:o,observer:a,elements:r},f.push(o),l.set(o,t),t}(o),r=n.id,a=n.observer,u=n.elements;return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),l.delete(r);var t=f.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&f.splice(t,1)}}}(v,(function(e){return e&&d(e)}),{root:null==t?void 0:t.current,rootMargin:o});return e}}else if(!s){var n=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(n)}}}),[v,c,o,t,s]);var b=r.useCallback((function(){d(!1)}),[]);return[y,s,b]};var r=o(7294),a=o(9311),u="function"===typeof IntersectionObserver,l=new Map,f=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var n=(0,o(2648).Z)(o(7294)),r=n.default.createContext(null);t.AppRouterContext=r;var a=n.default.createContext(null);t.LayoutRouterContext=a;var u=n.default.createContext(null);t.GlobalLayoutRouterContext=u;var l=n.default.createContext(null);t.TemplateContext=l},1664:function(e,t,o){e.exports=o(8418)}}]);