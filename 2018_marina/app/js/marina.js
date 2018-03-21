// MPOWER APP JS  for smoothing scroll, close mobile menu on click, 


// function Touchyhandler(e) {
//     e.preventDefault();
//   }



//use :active css for tap events
//document.addEventListener("touchstart", function() {},false);




// LAZY LOAD THOSE IMAGES (linked assets)

var lazy = [];
registerListener('load', setLazy);
registerListener('load', lazyLoad);
registerListener('scroll', lazyLoad);
registerListener('resize', lazyLoad);
function setLazy(){
   // document.getElementById('listing').removeChild(document.getElementById('viewMore'));
   // document.getElementById('nextPage').removeAttribute('class');
    
    lazy = document.getElementsByClassName('lazy');
    console.log('Found ' + lazy.length + ' lazy images: to load as needed');
} 
function lazyLoad(){
    for(var i=0; i<lazy.length; i++){
        if(isInViewport(lazy[i])){
            if (lazy[i].getAttribute('data-src')){
                lazy[i].src = lazy[i].getAttribute('data-src');
                lazy[i].removeAttribute('data-src');
            }
        }
    }
    
    cleanLazy();
}
function cleanLazy(){
    lazy = Array.prototype.filter.call(lazy, function(l){ return l.getAttribute('data-src');});
}
function isInViewport(el){
    var rect = el.getBoundingClientRect();
    
    return (
        rect.bottom >= 0 && 
        rect.right >= 0 && 
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) && 
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
     );
}
function registerListener(event, func) {
    if (window.addEventListener) {
        window.addEventListener(event, func)
    } else {
        window.attachEvent('on' + event, func)
    }
}

//end  LAZY LOAD




// BASIC PARALLAX

function parallax(){
        var prlx_lyr_1 = document.getElementById('prlx_lyr_1'); // building
        var prlx_lyr_2 = document.getElementById('prlx_lyr_2'); // logo
        var prlx_lyr_3 = document.getElementById('prlx_lyr_3'); // logo text
        var prlx_lyr_4 = document.getElementById('prlx_lyr_4'); // fish
      //  var prlx_lyr_5 = document.getElementById('prlx_lyr_5'); //background
        var prlx_lyr_6 = document.getElementById('prlx_lyr_6'); //dragon
      
        prlx_lyr_1.style.left = -(window.pageXOffset*0.23)+'px';
        prlx_lyr_2.style.left = -(window.pageXOffset/4)+'px';
        prlx_lyr_3.style.left = -(window.pageXOffset/1.5)+'px';
        prlx_lyr_4.style.left = (window.pageXOffset/3.5)+'px';
       // prlx_lyr_5.style.left = (window.pageXOffset/1.92)+'px';
        prlx_lyr_6.style.left = (window.pageXOffset/2)+'px';

//EXAMPLES
  // prlx_lyr_1.style.left = -(window.pageXOffset/1.5)+'px';              // right to left
  //   prlx_lyr_2.style.marginBottom = -(window.pageXOffset/600)+'%';    // sink 
  //   prlx_lyr_3.style.marginBottom = -(window.pageXOffset/-95)+'%';   // pop up
  //   prlx_lyr_4.style.strokeDashoffset = -(window.pageXOffset/-20);  // vary stroke in svg 

  //   prlx_lyr_5.style.marginBottom = -(window.pageXOffset/-90)+'%',    // move envelope up
  //             prlx_lyr_5.style.left = -(window.pageXOffset/50)+'%',  // move object left
  //             prlx_lyr_5.style.zIndex = +(window.pageXOffset/10),   // float over
  //             prlx_lyr_5.style.opacity = +(window.pageXOffset/350);// value within 0-1 range , fade in


  // //prlx_lyr_6.style.opacity = +(window.pageXOffset/350);
  //   prlx_lyr_7.style.left = +(window.pageXOffset/150)+'%'; // slide forward
  //   prlx_lyr_8.style.left= -(window.pageXOffset/50)+'%';  //  slide out
  //   prlx_lyr_9.style.zIndex = +(window.pageXOffset/4);   // float over
  //   // prlx_lyr_10.style.zIndex = +(window.pageXOffset/1.2);   // go under in last section


      }
      window.addEventListener("scroll", parallax, false);

      var curYPos = 0,
          curXPos = 0,
          curDown = false;

// END PARALLAX





//MODAL HELPER
// Fix modal jumping in safari when input is selected 
// Tapping into swal events
var onOpen = function() {
  //var offset = document.body.scrollTop;
  //document.body.style.top = (offset * -1) + 'px',
  document.body.classList.add('modal--opened');
};

//delay this 1 sec so user does not see page jump to top    <--  TO DO!!


var onClose = function() {
 // var offset = parseInt(document.body.style.top, 10);
  document.body.classList.remove('modal--opened');
  //document.body.scrollTop = (offset * -1);
}



  // ATTACH MODALS (radio) TO BUTTONS

 


  //OPEN MODAL 0.0 SiteMap
  document.getElementById("forModal0").addEventListener('click', function () {
  document.getElementById("button-modal-0").checked = true;
    onOpen();


  });



// calendar
  document.getElementById("forModal1-sitemap").addEventListener('click', function () {
    document.getElementById("button-modal-0").checked = false;
    onClose();
    // move back down when modal is closed 
   document.getElementById("button-modal-1").checked=true;
   onOpen();
   document.getElementById("cb1").checked = true;
  });
  //music
  document.getElementById("forModal1-sitemap-b").addEventListener('click', function () {
    document.getElementById("button-modal-0").checked = false;
    onClose();
    // move back down when modal is closed 
   document.getElementById("button-modal-1").checked=true;
   onOpen();
   document.getElementById("cb2").checked = true;
  });
    //events
  document.getElementById("forModal1-sitemap-c").addEventListener('click', function () {
    document.getElementById("button-modal-0").checked = false;
    onClose();
    // move back down when modal is closed 
   document.getElementById("button-modal-1").checked=true;
   onOpen();
   document.getElementById("cb3").checked = true;
  });


// MENU
  document.getElementById("forModal2-sitemap").addEventListener('click', function () {
    document.getElementById("button-modal-0").checked = false;
    onClose();
    // move back down when modal is closed 
   document.getElementById("button-modal-2").checked=true;
   onOpen();
   
  });

// Map
  document.getElementById("forModal3-sitemap").addEventListener('click', function () {
    document.getElementById("button-modal-0").checked = false;
    onClose();
    // move back down when modal is closed 
   document.getElementById("button-modal-3").checked=true;
   onOpen();
   document.getElementById("cb4").checked = true;
  });

    //video
  document.getElementById("forModal3-sitemap-b").addEventListener('click', function () {
    document.getElementById("button-modal-0").checked = false;
    onClose();
    // move back down when modal is closed 
   document.getElementById("button-modal-3").checked=true;
   onOpen();
   document.getElementById("cb5").checked = true;
  });

    //3d
  document.getElementById("forModal3-sitemap-c").addEventListener('click', function () {
    document.getElementById("button-modal-0").checked = false;
    onClose();
    // move back down when modal is closed 
   document.getElementById("button-modal-3").checked=true;
   onOpen();
   document.getElementById("cb6").checked = true;
  });


// Photos
  document.getElementById("forModal4-sitemap").addEventListener('click', function () {
    document.getElementById("button-modal-0").checked = false;
    onClose();
    // move back down when modal is closed 
   document.getElementById("button-modal-4").checked=true;
   onOpen();

  });



//MODAL 5
    //c0ntact us 
  document.getElementById("forModal5-sitemap-a").addEventListener('click', function () {
    document.getElementById("button-modal-0").checked = false;
    onClose();
    // move back down when modal is closed 
   document.getElementById("button-modal-5").checked=true;
   onOpen();
   document.getElementById("cb7").checked = true;
  });

    //directins
  document.getElementById("forModal5-sitemap-b").addEventListener('click', function () {
    document.getElementById("button-modal-0").checked = false;
    onClose();
    // move back down when modal is closed 
   document.getElementById("button-modal-5").checked=true;
   onOpen();
   document.getElementById("cb8").checked = true;
  });
    //about
  document.getElementById("forModal5-sitemap-c").addEventListener('click', function () {
    document.getElementById("button-modal-0").checked = false;
    onClose();
    // move back down when modal is closed 
   document.getElementById("button-modal-5").checked=true;
   onOpen();
   document.getElementById("cb9").checked = true;
  });
    //supppliers
  document.getElementById("forModal5-sitemap-d").addEventListener('click', function () {
    document.getElementById("button-modal-0").checked = false;
    onClose();
    // move back down when modal is closed 
   document.getElementById("button-modal-5").checked=true;
   onOpen();
   document.getElementById("cb10").checked = true;
  });


    // social
  document.getElementById("forModal7-sitemap").addEventListener('click', function () {
    document.getElementById("button-modal-0").checked = false;
    onClose();
    // move back down when modal is closed 
   document.getElementById("button-modal-7").checked=true;
   onOpen();

  });

  // ART
  document.getElementById("forModal8-sitemap").addEventListener('click', function () {
    document.getElementById("button-modal-0").checked = false;
    onClose();
    // move back down when modal is closed 
   document.getElementById("button-modal-8").checked=true;
   onOpen();

  });




  document.getElementById("button-modal-0").addEventListener('click', function () {
    onClose();
    // move back down when modal is closed 
    var element0= document.getElementById("unit1");
    element0.scrollIntoView({behavior: "instant", block: "start"});
  });








  //OPEN MODAL 1.0 Calendar
  document.getElementById("forModal1").addEventListener('click', function () {
  document.getElementById("button-modal-1").checked = true;
    onOpen();
        // check/ OPEN 
    document.getElementById("cb1").checked = true;
  });

  document.getElementById("button-modal-1").addEventListener('click', function () {
    onClose();
    // move back down when modal is closed 
    var element1 = document.getElementById("unit1");
    element1.scrollIntoView({behavior: "instant", block: "start"});
  });



  //OPEN MODAL 1.2 Menu
  document.getElementById("forModal2-a").addEventListener('click', function () {
  document.getElementById("button-modal-2").checked = true;
    onOpen();
  });

  document.getElementById("button-modal-2").addEventListener('click', function () {
    onClose();
    // move back down when modal is closed 
    var element2 = document.getElementById("unit1");
    element2.scrollIntoView({behavior: "instant", block: "start"});
  });


  //OPEN MODAL 1.2 Menu
  document.getElementById("forModal2-b").addEventListener('click', function () {
  document.getElementById("button-modal-2").checked = true;
    onOpen();
  });




  //OPEN MODAL 1.3.0 Map
  document.getElementById("forModal3-a").addEventListener('click', function () {
  document.getElementById("button-modal-3").checked = true;
    onOpen();
    // check/ OPEN 
    document.getElementById("cb4").checked = true;

  });

  document.getElementById("button-modal-3").addEventListener('click', function () {
    onClose();
    // move back down when modal is closed 
    var element3 = document.getElementById("unit1");
    element3.scrollIntoView({behavior: "instant", block: "start"});
  });

    document.getElementById("forModal3-b").addEventListener('click', function () {
    document.getElementById("button-modal-3").checked = true;
    onOpen();
    // check/ OPEN 
    document.getElementById("cb4").checked = true;

  });




  //OPEN MODAL 1.4.0 Photos
  document.getElementById("forModal4").addEventListener('click', function () {
  document.getElementById("button-modal-4").checked = true;
    onOpen();
  });

  document.getElementById("button-modal-4").addEventListener('click', function () {
    onClose();
    // move back down when modal is closed 
    var element4 = document.getElementById("unit1");
    element4.scrollIntoView({behavior: "instant", block: "start"});
  });






  //OPEN MODAL 1.5.0 Information
  document.getElementById("forModal5").addEventListener('click', function () {
  document.getElementById("button-modal-5").checked = true;
    onOpen();
  });

  document.getElementById("button-modal-5").addEventListener('click', function () {
    onClose();
    // move back down when modal is closed 
    var element5 = document.getElementById("unit1");
    element5.scrollIntoView({behavior: "instant", block: "start"});
  });




  //OPEN MODAL 1.6.0 Partners
  document.getElementById("forModal6").addEventListener('click', function () {
  document.getElementById("button-modal-6").checked = true;
    onOpen();
  });

  document.getElementById("button-modal-6").addEventListener('click', function () {
    onClose();
    // move back down when modal is closed 
    var element6 = document.getElementById("unit2");
    element6.scrollIntoView({behavior: "instant", block: "start"});
  });


  document.getElementById("cb16").addEventListener('click', function () {
    document.getElementById("button-modal-6").checked = false;
    onClose();
    // move back down when modal is closed 
   document.getElementById("button-modal-6").checked=true;
   onOpen();
   document.getElementById("cb3").checked = true;
  });


//Sign Icons in scene
  document.getElementById("forModal6-icon-kayak").addEventListener('click', function () {

    // move back down when modal is closed 
   document.getElementById("button-modal-6").checked=true;
   onOpen();
   document.getElementById("cb13").checked = true;
  });

  document.getElementById("forModal6-icon-trail").addEventListener('click', function () {

    // move back down when modal is closed 
   document.getElementById("button-modal-6").checked=true;
   onOpen();
   document.getElementById("cb15").checked = true;
  });

  document.getElementById("forModal6-icon-brattleboro").addEventListener('click', function () {

    // move back down when modal is closed 
   document.getElementById("button-modal-6").checked=true;
   onOpen();
   document.getElementById("cb11").checked = true;
  });



  //OPEN MODAL 1.7.0 Social
  document.getElementById("forModal7").addEventListener('click', function () {
  document.getElementById("button-modal-7").checked = true;
    onOpen();
  });

  document.getElementById("button-modal-7").addEventListener('click', function () {
    onClose();
    // move back down when modal is closed 
    var element7 = document.getElementById("unit1");
    element7.scrollIntoView({behavior: "instant", block: "start"});
  });





  //OPEN MODAL 1.8.0  Art/Gallery
  document.getElementById("forModal8").addEventListener('click', function () {
  document.getElementById("button-modal-8").checked = true;
    onOpen();
  });


  document.getElementById("forModal8-icon").addEventListener('click', function () {
  document.getElementById("button-modal-8").checked = true;
    onOpen();
  });



  document.getElementById("button-modal-8").addEventListener('click', function () {
    onClose();
    // move back down when modal is closed 
    var element8 = document.getElementById("unit1");
    element8.scrollIntoView({behavior: "instant", block: "start"});
  });






// LAZY LOAD IMG assets when MODAL  1.0 or 2.0   is open 

var lazyPageA = [];
registerListener('load', setLazyPageA);
registerListener('load', lazyLoadPageA);

function setLazyPageA(){
   // document.getElementById('listing').removeChild(document.getElementById('viewMore'));
   // document.getElementById('nextPage').removeAttribute('class');
    
    lazyPageA = document.getElementsByClassName('lazy-page-a');
    console.log('Found ' + lazyPageA.length + ' lazy high priority page images: dialogue  2.0, 3.0');
} 


function lazyLoadPageA(){

 document.getElementById("forModal2-b").addEventListener('click', function () {

    for(var i=0; i<lazyPageA.length; i++){
        if (lazyPageA[i].getAttribute('data-src')){
            lazyPageA[i].src = lazyPageA[i].getAttribute('data-src');
            lazyPageA[i].removeAttribute('data-src');
        }
    }
    cleanLazyPageA();

 });

  document.getElementById("forModal3-b").addEventListener('click', function () {

    for(var i=0; i<lazyPageA.length; i++){
        if (lazyPageA[i].getAttribute('data-src')){
            lazyPageA[i].src = lazyPageA[i].getAttribute('data-src');
            lazyPageA[i].removeAttribute('data-src');
        }
    }
    cleanLazyPageA();   //below after lazyPage
    
 });

    document.getElementById("forModal4").addEventListener('click', function () {

    for(var i=0; i<lazyPageA.length; i++){
        if (lazyPageA[i].getAttribute('data-src')){
            lazyPageA[i].src = lazyPageA[i].getAttribute('data-src');
            lazyPageA[i].removeAttribute('data-src');
        }
    }
    cleanLazyPageA();   //below after lazyPage
    
 });

      document.getElementById("forModal5").addEventListener('click', function () {

    for(var i=0; i<lazyPageA.length; i++){
        if (lazyPageA[i].getAttribute('data-src')){
            lazyPageA[i].src = lazyPageA[i].getAttribute('data-src');
            lazyPageA[i].removeAttribute('data-src');
        }
    }
    cleanLazyPageA();   //below after lazyPage
    
 });

        document.getElementById("forModal6").addEventListener('click', function () {

    for(var i=0; i<lazyPageA.length; i++){
        if (lazyPageA[i].getAttribute('data-src')){
            lazyPageA[i].src = lazyPageA[i].getAttribute('data-src');
            lazyPageA[i].removeAttribute('data-src');
        }
    }
    cleanLazyPageA();   //below after lazyPage
    
 });
          document.getElementById("forModal7").addEventListener('click', function () {

    for(var i=0; i<lazyPageA.length; i++){
        if (lazyPageA[i].getAttribute('data-src')){
            lazyPageA[i].src = lazyPageA[i].getAttribute('data-src');
            lazyPageA[i].removeAttribute('data-src');
        }
    }
    cleanLazyPageA();   //below after lazyPage
    
 });
            document.getElementById("forModal8").addEventListener('click', function () {

    for(var i=0; i<lazyPageA.length; i++){
        if (lazyPageA[i].getAttribute('data-src')){
            lazyPageA[i].src = lazyPageA[i].getAttribute('data-src');
            lazyPageA[i].removeAttribute('data-src');
        }
    }
    cleanLazyPageA();   //below after lazyPage
    
 });
}




// clean group 1
function cleanLazyPageA(){
    lazyPageA = Array.prototype.filter.call(lazyPageA, function(l){ return l.getAttribute('data-src');});
}











// SCROLL/ VIEWPORT  ANIMATION TRIGGER


//add class when in viewport:  from: http://dbrekalo.github.io/whenInViewport/

!function(a,b){"function"==typeof define&&define.amd?define([],b):"object"==typeof module&&module.exports?module.exports=b():a.WhenInViewport=b()}(this,function(){function a(a,b,c){j.setup(),this.registryItem=i.addItem(a,"function"==typeof b?f(c||{},{callback:b}):b),i.processItem(this.registryItem)}function b(){return"innerHeight"in window?window.innerHeight:document.documentElement.offsetHeight}function c(){return"pageYOffset"in window?window.pageYOffset:document.documentElement.scrollTop||document.body.scrollTop}function d(a){return a.getBoundingClientRect().top+c()}function e(a,b,c){for(var d in a)if(a.hasOwnProperty(d)&&b.call(c,a[d],d)===!1)break}function f(a){for(var b=1;b<arguments.length;b++)e(arguments[b],function(b,c){a[c]=b});return a}var g,h;a.prototype.stopListening=function(){i.removeItem(this.registryItem),j.removeIfStoreEmpty()},a.defaults={threshold:0,context:null},f(a,{setRateLimiter:function(a,b){return j.rateLimiter=a,b&&(j.rateLimitDelay=b),this},checkAll:function(){return h=c(),g=b(),i.adjustPositions(i.processItem),j.removeIfStoreEmpty(),this},destroy:function(){return i.store={},j.remove(),delete j.scrollHandler,delete j.resizeHandler,this},registerAsJqueryPlugin:function(b){return b.fn.whenInViewport=function(c,d){var e,f=function(a){return function(c){a.call(this,b(c))}};return e="function"==typeof c?b.extend({},d,{callback:f(c)}):b.extend(c,{callback:f(c.callback)}),this.each(function(){e.setupOnce?!b.data(this,"whenInViewport")&&b.data(this,"whenInViewport",new a(this,e)):b.data(this,"whenInViewport",new a(this,e))})},this}});var i={store:{},counter:0,addItem:function(b,c){var e="whenInViewport"+ ++this.counter,g=f({},a.defaults,c,{storeKey:e,element:b,topOffset:d(b)});return this.store[e]=g},adjustPositions:function(a){e(this.store,function(b){b.topOffset=d(b.element),a&&a.call(i,b)})},processAll:function(){e(this.store,this.processItem,this)},processItem:function(a){h+g>=a.topOffset-a.threshold&&(this.removeItem(a),a.callback.call(a.context||window,a.element))},removeItem:function(a){delete this.store[a.storeKey]},isEmpty:function(){var a=!0;return e(this.store,function(){return a=!1}),a}},j={setuped:!1,rateLimiter:function(a,b){return a},rateLimitDelay:100,on:function(a,b){return window.addEventListener?window.addEventListener(a,b,!1):window.attachEvent&&window.attachEvent(a,b),this},off:function(a,b){return window.removeEventListener?window.removeEventListener(a,b,!1):window.detachEvent&&window.detachEvent("on"+a,b),this},setup:function(){var a=this;this.setuped||(h=c(),g=b(),this.scrollHandler=this.scrollHandler||this.rateLimiter(function(){h=c(),i.processAll(),a.removeIfStoreEmpty()},this.rateLimitDelay),this.resizeHandler=this.resizeHandler||this.rateLimiter(function(){g=b(),i.adjustPositions(i.processItem),a.removeIfStoreEmpty()},this.rateLimitDelay),this.on("scroll",this.scrollHandler).on("resize",this.resizeHandler),this.setuped=!0)},removeIfStoreEmpty:function(){i.isEmpty()&&this.remove()},remove:function(){this.setuped&&(this.off("scroll",this.scrollHandler).off("resize",this.resizeHandler),this.setuped=!1)}},k=window.jQuery||window.$;return k&&a.registerAsJqueryPlugin(k),a});

//Detect element has entered the viewport




// detect this
// graphic: regulation element 

var elements = Array.prototype.slice.call(
    document.getElementsByClassName('graphic')
);
elements.forEach(function(element) {
    new WhenInViewport(element, function(elementInViewport) {
        elementInViewport.classList.add('graphicInViewport');
    });
});


// detect    icon elements 
var elements = Array.prototype.slice.call(
    document.getElementsByClassName('icons')
);
elements.forEach(function(element) {
    new WhenInViewport(element, function(elementInViewport) {
        elementInViewport.classList.add('iconInViewport');
    });
});


// detect     social icon elements 
var elements = Array.prototype.slice.call(
    document.getElementsByClassName('social')
);
elements.forEach(function(element) {
    new WhenInViewport(element, function(elementInViewport) {
        elementInViewport.classList.add('socialInViewport');
    });
});


// detect       h2 elements 
var elements = Array.prototype.slice.call(
    document.querySelectorAll('h2')
);
elements.forEach(function(element) {
    new WhenInViewport(element, function(elementInViewport) {
        elementInViewport.classList.add('h2InViewport');
    });
});


// detect     h3 elements 
var elements = Array.prototype.slice.call(
    document.querySelectorAll('h3')
);
elements.forEach(function(element) {
    new WhenInViewport(element, function(elementInViewport) {
        elementInViewport.classList.add('h3InViewport');
    });
});


// detect    h4 elements 
var elements = Array.prototype.slice.call(
    document.querySelectorAll('h4')
);

elements.forEach(function(element) {
    new WhenInViewport(element, function(elementInViewport) {
        elementInViewport.classList.add('h4InViewport');
    });
});


// detect     p elements 
var elements = Array.prototype.slice.call(
    document.querySelectorAll('p')
);

elements.forEach(function(element) {
    new WhenInViewport(element, function(elementInViewport) {
        elementInViewport.classList.add('pInViewport');
    });
});


// detect     button elements
var elements = Array.prototype.slice.call(
    document.querySelectorAll('button')
);

elements.forEach(function(element) {
    new WhenInViewport(element, function(elementInViewport) {
        elementInViewport.classList.add('buttonInViewport');
    });
});


// detect     form elements
//var elements = Array.prototype.slice.call(
    //document.querySelectorAll('form')
//);

//elements.forEach(function(element) {
   // new WhenInViewport(element, function(elementInViewport) {
      //  elementInViewport.classList.add('formInViewport');
   // });
//});


// END ANIMATIONS






// SAFARI, IOS, and webkit polyfilly and hacks below


// //FORM VALIDATIONS FOR SAFARI  - issue with html5 form validation
//Form 1
// document.getElementById('form').addEventListener('submit', function(event) {
//     if (!event.target.checkValidity()) {
//         event.preventDefault();
//         var inputFields = form.querySelectorAll('input');
//         for (i=0; i < inputFields.length; i++) {
//             if (!inputFields[i].validity.valid) {
//                 inputFields[i].focus(); // set cursor to first invalid input field
//                 return false;
//             }
//         }
//     }
// }, false);







// SMOOTH SCROLL POLYFILL ---NAVIGATION ELEMENTS--  fixes support for SAFARI -webkit- 
/* smoothscroll v0.4.0 - 2017 - Dustan Kasten, Jeremias Menichelli - MIT License */
(function () {
  'use strict';

  /*
   * aliases
   * w: window global object
   * d: document
   */
  var w = window;
  var d = document;

  /**
   * indicates if a the current browser is made by Microsoft
   * @method isMicrosoftBrowser
   * @param {String} userAgent
   * @returns {Boolean}
   */
  function isMicrosoftBrowser(userAgent) {
    var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

    return new RegExp(userAgentPatterns.join('|')).test(userAgent);
  }

   // polyfill
  function polyfill() {
    // return if scroll behavior is supported and polyfill is not forced
    if ('scrollBehavior' in d.documentElement.style
      && w.__forceSmoothScrollPolyfill__ !== true) {
      return;
    }

    // globals
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;

    /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */
    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

    // object gathering original scroll methods
    var original = {
      scroll: w.scroll || w.scrollTo,
      scrollBy: w.scrollBy,
      elementScroll: Element.prototype.scroll || scrollElement,
      scrollIntoView: Element.prototype.scrollIntoView
    };

    // define timing method
    var now = w.performance && w.performance.now
      ? w.performance.now.bind(w.performance)
      : Date.now;

    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function scrollElement(x, y) {
      this.scrollLeft = x;
      this.scrollTop = y;
    }

    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */
    function shouldBailOut(firstArg) {
      if (firstArg === null
        || typeof firstArg !== 'object'
        || firstArg.behavior === undefined
        || firstArg.behavior === 'auto'
        || firstArg.behavior === 'instant') {
        // first argument is not an object/null
        // or behavior is auto, instant or undefined
        return true;
      }

      if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
        // first argument is an object and behavior is smooth
        return false;
      }

      // throw error when behavior is not supported
      throw new TypeError(
        'behavior member of ScrollOptions '
        + firstArg.behavior
        + ' is not a valid value for enumeration ScrollBehavior.'
      );
    }

    /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function hasScrollableSpace(el, axis) {
      if (axis === 'Y') {
        return (el.clientHeight + ROUNDING_TOLERANCE) < el.scrollHeight;
      }

      if (axis === 'X') {
        return (el.clientWidth + ROUNDING_TOLERANCE) < el.scrollWidth;
      }
    }

    /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function canOverflow(el, axis) {
      var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

      return overflowValue === 'auto' || overflowValue === 'scroll';
    }

    /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function isScrollable(el) {
      var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
      var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

      return isScrollableY || isScrollableX;
    }

    /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */
    function findScrollableParent(el) {
      var isBody;

      do {
        el = el.parentNode;

        isBody = el === d.body;
      } while (isBody === false && isScrollable(el) === false);

      isBody = null;

      return el;
    }

    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */
    function step(context) {
      var time = now();
      var value;
      var currentX;
      var currentY;
      var elapsed = (time - context.startTime) / SCROLL_TIME;

      // avoid elapsed times higher than one
      elapsed = elapsed > 1 ? 1 : elapsed;

      // apply easing to elapsed time
      value = ease(elapsed);

      currentX = context.startX + (context.x - context.startX) * value;
      currentY = context.startY + (context.y - context.startY) * value;

      context.method.call(context.scrollable, currentX, currentY);

      // scroll more if we have not reached our destination
      if (currentX !== context.x || currentY !== context.y) {
        w.requestAnimationFrame(step.bind(w, context));
      }
    }

    /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function smoothScroll(el, x, y) {
      var scrollable;
      var startX;
      var startY;
      var method;
      var startTime = now();

      // define scroll context
      if (el === d.body) {
        scrollable = w;
        startX = w.scrollX || w.pageXOffset;
        startY = w.scrollY || w.pageYOffset;
        method = original.scroll;
      } else {
        scrollable = el;
        startX = el.scrollLeft;
        startY = el.scrollTop;
        method = scrollElement;
      }

      // scroll looping over a frame
      step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        startY: startY,
        x: x,
        y: y
      });
    }

    // ORIGINAL METHODS OVERRIDES
    // w.scroll and w.scrollTo
    w.scroll = w.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scroll.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object'
              ? arguments[0]
              : (w.scrollX || w.pageXOffset),
          // use top prop, second argument if present or fallback to scrollY
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined
              ? arguments[1]
              : (w.scrollY || w.pageYOffset)
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        arguments[0].left !== undefined
          ? ~~arguments[0].left
          : (w.scrollX || w.pageXOffset),
        arguments[0].top !== undefined
          ? ~~arguments[0].top
          : (w.scrollY || w.pageYOffset)
      );
    };

    // w.scrollBy
    w.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.scrollBy.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object'
              ? arguments[0]
              : 0,
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined
             ? arguments[1]
             : 0
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        ~~arguments[0].left + (w.scrollX || w.pageXOffset),
        ~~arguments[0].top + (w.scrollY || w.pageYOffset)
      );
    };

    // Element.prototype.scroll and Element.prototype.scrollTo
    Element.prototype.scroll = Element.prototype.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        // if one number is passed, throw error to match Firefox implementation
        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
          throw new SyntaxError('Value couldn\'t be converted');
        }

        original.elementScroll.call(
          this,
          // use left prop, first number argument or fallback to scrollLeft
          arguments[0].left !== undefined
            ? ~~arguments[0].left
            : typeof arguments[0] !== 'object'
              ? ~~arguments[0]
              : this.scrollLeft,
          // use top prop, second argument or fallback to scrollTop
          arguments[0].top !== undefined
            ? ~~arguments[0].top
            : arguments[1] !== undefined
              ? ~~arguments[1]
              : this.scrollTop
        );

        return;
      }

      var left = arguments[0].left;
      var top = arguments[0].top;

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        this,
        this,
        typeof left === 'undefined' ? this.scrollLeft : ~~left,
        typeof top === 'undefined' ? this.scrollTop : ~~top
      );
    };

    // Element.prototype.scrollBy
    Element.prototype.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.elementScroll.call(
          this,
          arguments[0].left !== undefined
            ? ~~arguments[0].left + this.scrollLeft
            : ~~arguments[0] + this.scrollLeft,
          arguments[0].top !== undefined
            ? ~~arguments[0].top + this.scrollTop
            : ~~arguments[1] + this.scrollTop
        );

        return;
      }

      this.scroll({
        left: ~~arguments[0].left + this.scrollLeft,
        top: ~~arguments[0].top + this.scrollTop,
        behavior: arguments[0].behavior
      });
    };

    // Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function() {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scrollIntoView.call(
          this,
          arguments[0] === undefined
            ? true
            : arguments[0]
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      var scrollableParent = findScrollableParent(this);
      var parentRects = scrollableParent.getBoundingClientRect();
      var clientRects = this.getBoundingClientRect();

      if (scrollableParent !== d.body) {
        // reveal element inside parent
        smoothScroll.call(
          this,
          scrollableParent,
          scrollableParent.scrollLeft + clientRects.left - parentRects.left,
          scrollableParent.scrollTop + clientRects.top - parentRects.top
        );

        // reveal parent in viewport unless is fixed
        if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
          w.scrollBy({
            left: parentRects.left,
            top: parentRects.top,
            behavior: 'smooth'
          });
        }
      } else {
        // reveal element in viewport
        w.scrollBy({
          left: clientRects.left,
          top: clientRects.top,
          behavior: 'smooth'
        });
      }
    };
  }

  if (typeof exports === 'object') {
    // commonjs
    module.exports = { polyfill: polyfill };
  } else {
    // global
    polyfill();
  }

}());










// messy helpers fail last if they throw errors 
// ADD CLASS TO BODY FOR USER AGENT (specific) FIXES 
var BrowserDetect = {
        init: function () {
            this.browser = this.searchString(this.dataBrowser) || "Other";
            this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
        },
        searchString: function (data) {
            for (var i = 0; i < data.length; i++) {
                var dataString = data[i].string;
                this.versionSearchString = data[i].subString;

                if (dataString.indexOf(data[i].subString) !== -1) {
                    return data[i].identity;
                }
            }
        },
        searchVersion: function (dataString) {
            var index = dataString.indexOf(this.versionSearchString);
            if (index === -1) {
                return;
            }

            var rv = dataString.indexOf("rv:");
            if (this.versionSearchString === "Trident" && rv !== -1) {
                return parseFloat(dataString.substring(rv + 3));
            } else {
                return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
            }
        },

        dataBrowser: [
            {string: navigator.userAgent, subString: "Edge", identity: "MS Edge"},
            {string: navigator.userAgent, subString: "MSIE", identity: "Explorer"},
            {string: navigator.userAgent, subString: "Trident", identity: "Explorer"},
            {string: navigator.userAgent, subString: "Firefox", identity: "Firefox"},
            {string: navigator.userAgent, subString: "Opera", identity: "Opera"},  
            {string: navigator.userAgent, subString: "OPR", identity: "Opera"},  
            {string: navigator.userAgent, subString: "Chrome", identity: "Chrome"}, 
            {string: navigator.userAgent, subString: "Safari", identity: "Safari"}       
        ]
    };

    BrowserDetect.init();



    var bv= BrowserDetect.browser;
    if( bv == "Chrome"){
      
         document.getElementsByTagName("BODY")[0].className += " chrome ";
    }
    else if(bv == "MS Edge"){
   
      document.getElementsByTagName("BODY")[0].className += " edge ";
    }
    else if(bv == "Explorer"){
  
      document.getElementsByTagName("BODY")[0].className += " ie ";
    }
    else if(bv == "Firefox"){
    
      document.getElementsByTagName("BODY")[0].className += " firefox ";
    }
    else if(bv == "Safari"){
    
      document.getElementsByTagName("BODY")[0].className += " safari ";
    }







//ANCHOR LINKS <--  to do   fix safari issue 

//Smooth scrolling for navigation items
scrollTo = function scrollTo(element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop 
  });
  console;
};










//Close MOBILE AND TABLET HAMBURGER  menu when item is clicked
//document.getElementById("logo").onclick = function(){document.getElementById("menu-btn").checked = false;};


document.getElementById("forModal1").onclick = function(){document.getElementById("menu-btn").checked = false;};
document.getElementById("forModal2").onclick = function(){document.getElementById("menu-btn").checked = false;};
document.getElementById("forModal3").onclick = function(){document.getElementById("menu-btn").checked = false;};
document.getElementById("forModal4").onclick = function(){document.getElementById("menu-btn").checked = false;};
document.getElementById("forModal5").onclick  = function(){document.getElementById("menu-btn").checked = false;};






// details summary polyfill 

//  https://github.com/rstacruz/details-polyfill



// void (function (root, factory) {
//   if (typeof define === 'function' && define.amd) define(factory)
//   else if (typeof exports === 'object') module.exports = factory()
//   else factory()
// }(this, function () {
//   var DETAILS = 'details'
//   var SUMMARY = 'summary'

//   var supported = checkSupport()
//   if (supported) return

//   // Add a classname
//   document.documentElement.className += ' no-details'

//   window.addEventListener('click', clickHandler)

//   injectStyle('details-polyfill-style',
//     'html.no-details ' + DETAILS + ':not([open]) > :not(' + SUMMARY + ') { display: none; }\n' +
//     'html.no-details ' + DETAILS + ' > ' + SUMMARY + ':before { content: "\u25b6"; display: inline-block; font-size: .8em; width: 1.5em; }\n' +
//     'html.no-details ' + DETAILS + '[open] > ' + SUMMARY + ':before { content: "\u25bc"; }')

//   /*
//    * Click handler for `<summary>` tags
//    */

//   function clickHandler (e) {
//     if (e.target.nodeName.toLowerCase() === 'summary') {
//       var details = e.target.parentNode
//       if (!details) return

//       if (details.getAttribute('open')) {
//         details.open = false
//         details.removeAttribute('open')
//       } else {
//         details.open = true
//         details.setAttribute('open', 'open')
//       }
//     }
//   }

//   /*
//    * Checks for support for `<details>`
//    */

//   function checkSupport () {
//     var el = document.createElement(DETAILS)
//     if (!('open' in el)) return false

//     el.innerHTML = '<' + SUMMARY + '>a</' + SUMMARY + '>b'
//     document.body.appendChild(el)

//     var diff = el.offsetHeight
//     el.open = true
//     var result = (diff != el.offsetHeight)

//     document.body.removeChild(el)
//     return result
//   }

//   /*
//    * Injects styles (idempotent)
//    */

//   function injectStyle (id, style) {
//     if (document.getElementById(id)) return

//     var el = document.createElement('style')
//     el.id = id
//     el.innerHTML = style

//     document.getElementsByTagName('head')[0].appendChild(el)
//   }
// })); // eslint-disable-line semi







