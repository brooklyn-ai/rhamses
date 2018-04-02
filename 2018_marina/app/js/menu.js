






// SCROLL/ VIEWPORT  ANIMATION TRIGGER


//add class when in viewport:  from: http://dbrekalo.github.io/whenInViewport/

!function(a,b){"function"==typeof define&&define.amd?define([],b):"object"==typeof module&&module.exports?module.exports=b():a.WhenInViewport=b()}(this,function(){function a(a,b,c){j.setup(),this.registryItem=i.addItem(a,"function"==typeof b?f(c||{},{callback:b}):b),i.processItem(this.registryItem)}function b(){return"innerHeight"in window?window.innerHeight:document.documentElement.offsetHeight}function c(){return"pageYOffset"in window?window.pageYOffset:document.documentElement.scrollTop||document.body.scrollTop}function d(a){return a.getBoundingClientRect().top+c()}function e(a,b,c){for(var d in a)if(a.hasOwnProperty(d)&&b.call(c,a[d],d)===!1)break}function f(a){for(var b=1;b<arguments.length;b++)e(arguments[b],function(b,c){a[c]=b});return a}var g,h;a.prototype.stopListening=function(){i.removeItem(this.registryItem),j.removeIfStoreEmpty()},a.defaults={threshold:0,context:null},f(a,{setRateLimiter:function(a,b){return j.rateLimiter=a,b&&(j.rateLimitDelay=b),this},checkAll:function(){return h=c(),g=b(),i.adjustPositions(i.processItem),j.removeIfStoreEmpty(),this},destroy:function(){return i.store={},j.remove(),delete j.scrollHandler,delete j.resizeHandler,this},registerAsJqueryPlugin:function(b){return b.fn.whenInViewport=function(c,d){var e,f=function(a){return function(c){a.call(this,b(c))}};return e="function"==typeof c?b.extend({},d,{callback:f(c)}):b.extend(c,{callback:f(c.callback)}),this.each(function(){e.setupOnce?!b.data(this,"whenInViewport")&&b.data(this,"whenInViewport",new a(this,e)):b.data(this,"whenInViewport",new a(this,e))})},this}});var i={store:{},counter:0,addItem:function(b,c){var e="whenInViewport"+ ++this.counter,g=f({},a.defaults,c,{storeKey:e,element:b,topOffset:d(b)});return this.store[e]=g},adjustPositions:function(a){e(this.store,function(b){b.topOffset=d(b.element),a&&a.call(i,b)})},processAll:function(){e(this.store,this.processItem,this)},processItem:function(a){h+g>=a.topOffset-a.threshold&&(this.removeItem(a),a.callback.call(a.context||window,a.element))},removeItem:function(a){delete this.store[a.storeKey]},isEmpty:function(){var a=!0;return e(this.store,function(){return a=!1}),a}},j={setuped:!1,rateLimiter:function(a,b){return a},rateLimitDelay:100,on:function(a,b){return window.addEventListener?window.addEventListener(a,b,!1):window.attachEvent&&window.attachEvent(a,b),this},off:function(a,b){return window.removeEventListener?window.removeEventListener(a,b,!1):window.detachEvent&&window.detachEvent("on"+a,b),this},setup:function(){var a=this;this.setuped||(h=c(),g=b(),this.scrollHandler=this.scrollHandler||this.rateLimiter(function(){h=c(),i.processAll(),a.removeIfStoreEmpty()},this.rateLimitDelay),this.resizeHandler=this.resizeHandler||this.rateLimiter(function(){g=b(),i.adjustPositions(i.processItem),a.removeIfStoreEmpty()},this.rateLimitDelay),this.on("scroll",this.scrollHandler).on("resize",this.resizeHandler),this.setuped=!0)},removeIfStoreEmpty:function(){i.isEmpty()&&this.remove()},remove:function(){this.setuped&&(this.off("scroll",this.scrollHandler).off("resize",this.resizeHandler),this.setuped=!1)}},k=window.jQuery||window.$;return k&&a.registerAsJqueryPlugin(k),a});

//Detect element has entered the viewport




// detect this
// graphic: regulation element 






// detect     p elements 
var elements = Array.prototype.slice.call(
    document.querySelectorAll('p')
);

elements.forEach(function(element) {
    new WhenInViewport(element, function(elementInViewport) {
        elementInViewport.classList.add('pInViewport');
    });
});








