// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// preloader
document.onreadystatechange = function() {
  var state = document.readyState;
  if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('load').classList.add('fade');
      },0);
      setTimeout(function(){
         document.getElementById('load').classList.add('fade');
         document.getElementById('load').style.visibility="hidden";
      },300);
  }
};


//canvas
var canvas = document.querySelector('canvas');
var hero = document.querySelector('.hero');
var divHeight = hero.clientHeight;
var divWidth = hero.clientWidth;

canvas.height = divHeight;
canvas.width = divWidth;

//set context
var c = canvas.getContext('2d');

var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 1;
//var minRadius = 2;

window.addEventListener('mousemove', function(event){
    mouse.x = event.layerX;
    mouse.y = event.layerY;
});

//listen for resize event 
window.addEventListener('resize', function(event){
    canvas.width = hero.clientWidth;
    canvas.height = hero.clientHeight;
    init();
});



function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = 'rgba(250,250,250,1)';
    this.minRadius = 1;
    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }
    
    this.update = function(){
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
    
        this.x += this.dx;
        this.y += this.dy;
        
        //interact with mouse
        
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.radius < maxRadius){
                this.radius += 1;
            }
            
        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        };
        
        this.draw();
    }
}


var circleArray = [];

function init(){
    circleArray = [];
    for (var i = 0; i < 800; i++){
    // radius
    var radius = Math.random() * 3 + 1;
    var hue = Math.random() * 1200;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    //velovity
    var dx = (Math.random() - 0.5) / 5;
    var dy = (Math.random() - 0.5) / 5;
    circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    
    for (var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }
}

init();
animate();

// Smooth Scroll
!function(e,t){"function"==typeof define&&define.amd?define("smoothScroll",t(e)):"object"==typeof exports?module.exports=t(e):e.smoothScroll=t(e)}(window||this,function(e){"use strict";var t,n,o,r={},a=!!document.querySelector&&!!e.addEventListener,c={speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callbackBefore:function(){},callbackAfter:function(){}},u=function(e,t,n){if("[object Object]"===Object.prototype.toString.call(e))for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(n,e[o],o,e);else for(var r=0,a=e.length;a>r;r++)t.call(n,e[r],r,e)},i=function(e,t){var n={};return u(e,function(t,o){n[o]=e[o]}),u(t,function(e,o){n[o]=t[o]}),n},l=function(e,t){for(var n=t.charAt(0);e&&e!==document;e=e.parentNode)if("."===n){if(e.classList.contains(t.substr(1)))return e}else if("#"===n){if(e.id===t.substr(1))return e}else if("["===n&&e.hasAttribute(t.substr(1,t.length-2)))return e;return!1},s=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},f=function(e){for(var t,n=String(e),o=n.length,r=-1,a="",c=n.charCodeAt(0);++r<o;){if(t=n.charCodeAt(r),0===t)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=t>=1&&31>=t||127==t||0===r&&t>=48&&57>=t||1===r&&t>=48&&57>=t&&45===c?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&57>=t||t>=65&&90>=t||t>=97&&122>=t?n.charAt(r):"\\"+n.charAt(r)}return a},d=function(e,t){var n;return"easeInQuad"===e&&(n=t*t),"easeOutQuad"===e&&(n=t*(2-t)),"easeInOutQuad"===e&&(n=.5>t?2*t*t:-1+(4-2*t)*t),"easeInCubic"===e&&(n=t*t*t),"easeOutCubic"===e&&(n=--t*t*t+1),"easeInOutCubic"===e&&(n=.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e&&(n=t*t*t*t),"easeOutQuart"===e&&(n=1- --t*t*t*t),"easeInOutQuart"===e&&(n=.5>t?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e&&(n=t*t*t*t*t),"easeOutQuint"===e&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e&&(n=.5>t?16*t*t*t*t*t:1+16*--t*t*t*t*t),n||t},h=function(e,t,n){var o=0;if(e.offsetParent)do o+=e.offsetTop,e=e.offsetParent;while(e);return o=o-t-n,o>=0?o:0},m=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},p=function(e){return e&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):{}},v=function(t,n){history.pushState&&(n||"true"===n)&&history.pushState(null,null,[e.location.protocol,"//",e.location.host,e.location.pathname,e.location.search,t].join(""))};r.animateScroll=function(t,n,r){var a=i(a||c,r||{}),u=p(t?t.getAttribute("data-options"):null);a=i(a,u),n="#"+f(n.substr(1));var l="#"===n?document.documentElement:document.querySelector(n),g=e.pageYOffset;o||(o=document.querySelector("[data-scroll-header]"));var b,O,y,S=null===o?0:s(o)+o.offsetTop,I=h(l,S,parseInt(a.offset,10)),H=I-g,E=m(),A=0;v(n,a.updateURL);var L=function(o,r,c){var u=e.pageYOffset;(o==r||u==r||e.innerHeight+u>=E)&&(clearInterval(c),l.focus(),a.callbackAfter(t,n))},Q=function(){A+=16,O=A/parseInt(a.speed,10),O=O>1?1:O,y=g+H*d(a.easing,O),e.scrollTo(0,Math.floor(y)),L(y,I,b)},C=function(){a.callbackBefore(t,n),b=setInterval(Q,16)};0===e.pageYOffset&&e.scrollTo(0,0),C()};var g=function(e){var n=l(e.target,"[data-scroll]");n&&"a"===n.tagName.toLowerCase()&&(e.preventDefault(),r.animateScroll(n,n.hash,t))},b=function(){n||(n=setTimeout(function(){n=null,headerHeight=null===o?0:s(o)+o.offsetTop},66))};return r.destroy=function(){t&&(document.removeEventListener("click",g,!1),e.removeEventListener("resize",b,!1),t=null,n=null,o=null)},r.init=function(n){a&&(r.destroy(),t=i(c,n||{}),o=document.querySelector("[data-scroll-header]"),document.addEventListener("click",g,!1),o&&e.addEventListener("resize",b,!1))},r});


// Initialize scroll
smoothScroll.init({
    speed: 550,
    easing: 'easeInOutCubic',
    offset: 60,
    updateURL: true,
    callbackBefore: function ( toggle, anchor ) {},
    callbackAfter: function ( toggle, anchor ) {}
});