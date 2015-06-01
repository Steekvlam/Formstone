/*! formstone v0.6.2 [navigation.js] 2015-06-01 | MIT License | formstone.it */

!function(a,b){"use strict";function c(){v=a("html, body")}function d(b){b.guid="__"+u++,b.eventGuid=t.namespace+b.guid,b.rawGuid=s.base+b.guid,b.classGuid="."+b.rawGuid,b.handleGuid=s.handle+b.guid,b.isToggle="toggle"===b.type,b.isToggle&&(b.gravity="");var c=s.base,d=[c,b.type].join("-"),e=b.gravity?[d,b.gravity].join("-"):"",f=[b.rawGuid,b.customClass].join(" ");b.handle=this.data(q+"-handle"),b.content=this.data(q+"-content"),b.handleClasses=[s.handle,s.handle.replace(c,d),e?s.handle.replace(c,e):"",b.handleGuid,f].join(" "),b.navClasses=[s.nav.replace(c,d),e?s.nav.replace(c,e):"",f].join(" "),b.contentClasses=[s.content.replace(c,d),e?s.content.replace(c,e):"",f].join(" "),b.$nav=this.addClass(b.navClasses),b.$handle=a(b.handle).addClass(b.handleClasses),b.$content=a(b.content).addClass(b.contentClasses),b.$animate=a().add(b.$nav).add(b.$content),b.label&&(b.originalLabel=b.$handle.text()),b.$handle.attr("data-swap-target",b.classGuid).attr("data-swap-linked","."+b.handleGuid).attr("data-swap-group",s.base).on("activate.swap"+b.eventGuid,b,j).on("deactivate.swap"+b.eventGuid,b,k).on("enable.swap"+b.eventGuid,b,l).on("disable.swap"+b.eventGuid,b,m).swap({maxWidth:b.maxWidth,classes:{target:b.classGuid,enabled:r.enabled,active:r.open,raw:{target:b.rawGuid,enabled:s.enabled,active:s.open}}})}function e(a){a.$content.removeClass(a.contentClasses).off(t.namespace),a.$handle.removeAttr("data-swap-target").removeData("swap-target").removeAttr("data-swap-linked").removeData("swap-linked").removeClass(a.handleClasses).off(a.eventGuid).text(a.originalLabel).swap("destroy"),o(a),this.removeClass(a.navClasses).off(t.namespace)}function f(a){a.$handle.swap("activate")}function g(a){a.$handle.swap("deactivate")}function h(a){a.$handle.swap("enable")}function i(a){a.$handle.swap("disable")}function j(a){if(!a.originalEvent){var b=a.data;b.$el.trigger(t.open),b.$content.addClass(s.open).one(t.clickTouchStart,function(){g(b)}),b.label&&b.$handle.text(b.labels.open),n(b)}}function k(a){if(!a.originalEvent){var b=a.data;b.$el.trigger(t.close),b.$content.removeClass(s.open).off(t.namespace),b.label&&b.$handle.text(b.labels.closed),o(b)}}function l(a){var b=a.data;b.$content.addClass(s.enabled),setTimeout(function(){b.$animate.addClass(s.animated)},0),b.label&&b.$handle.text(b.labels.closed)}function m(a){var b=a.data;b.$content.removeClass(s.enabled,s.animated),b.$animate.removeClass(s.animated),b.label&&b.$handle.text(b.originalLabel),o(b)}function n(a){a.isToggle||v.addClass(s.lock)}function o(a){a.isToggle||v.removeClass(s.lock)}var p=b.Plugin("navigation",{widget:!0,defaults:{customClass:"",gravity:"left",label:!0,labels:{closed:"Menu",open:"Close"},maxWidth:"980px",type:"toggle"},classes:["handle","nav","content","animated","enabled","open","toggle","push","reveal","overlay","left","right","lock"],events:{tap:"tap",open:"open",close:"close"},methods:{_setup:c,_construct:d,_destruct:e,open:f,close:g,enable:h,disable:i}}),q=p.namespace,r=p.classes,s=r.raw,t=p.events,u=(p.functions,0),v=null}(jQuery,Formstone);