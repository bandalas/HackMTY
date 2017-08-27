/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 * iosSlider - http://iosscripts.com/iosslider-jquery-horizontal-slider-for-iphone-ipad-safari/
 */
 
(function(a){var L=0,F=0,M=0,D=0,A="ontouchstart"in window,G=!1,X=!1,Y=!1,N="pointer",Q="pointer",R=[],K=[],S=[],T=[],O=[],l=[],f={showScrollbar:function(j,b){j.scrollbarHide&&a("."+b).css({opacity:j.scrollbarOpacity,filter:"alpha(opacity:"+100*j.scrollbarOpacity+")"})},hideScrollbar:function(a,b,d,c,e,g,C,o,m,h){if(a.scrollbar&&a.scrollbarHide)for(var i=d;i<d+25;i++)b[b.length]=f.hideScrollbarIntervalTimer(10*i,c[d],(d+24-i)/24,e,g,C,o,m,h,a)},hideScrollbarInterval:function(j,b,d,c,e,g,C,o,m){D= -1*j/d*(g-C-o-e);f.setSliderOffset("."+c,D);a("."+c).css({opacity:m.scrollbarOpacity*b,filter:"alpha(opacity:"+100*m.scrollbarOpacity*b+")"})},slowScrollHorizontalInterval:function(j,b,d,c,e,g,C,o,m,h,i,l,w,p){newChildOffset=f.calcActiveOffset(p,b,0,h,d,g,l,void 0);if(newChildOffset!=m)p.onSlideChange(new f.args(p,j,a(j).children(":eq("+m+")"),m%l));b=Math.floor(b);f.setSliderOffset(j,b);p.scrollbar&&(D=Math.floor(-1*b/d*(g-C-e)),j=e-o,0<=b?(j=e-o- -1*D,f.setSliderOffset(a("."+c),0)):(b<=-1*d+1&& (j=g-C-o-D),f.setSliderOffset(a("."+c),D)),a("."+c).css({width:j+"px"}))},slowScrollHorizontal:function(j,b,d,c,e,g,C,o,m,h,i,y,w,p,k,v){var g=[],q=f.getSliderOffset(j,"x"),t=0,r=25/1024*o;frictionCoefficient=v.frictionCoefficient;elasticFrictionCoefficient=v.elasticFrictionCoefficient;snapFrictionCoefficient=v.snapFrictionCoefficient;snapToChildren=v.snapToChildren;5<e&&snapToChildren?t=1:-5>e&&snapToChildren&&(t=-1);e<-1*r?e=-1*r:e>r&&(e=r);var u=f.getAnimationSteps(v,e,q,d,0,i),r=f.calcActiveOffset(v, u[u.length-1],t,i,d,o,w,l[y]);v.infiniteSlider&&(i[r]>i[k+1]+o&&(r+=k),i[r]<i[2*k-1]-o&&(r-=k));if(u[u.length-1]<i[r]&&0>t||u[u.length-1]>i[r]&&0<t||!snapToChildren)for(;1<e||-1>e;){e*=frictionCoefficient;q+=e;if(0<q||q<-1*d)e*=elasticFrictionCoefficient,q+=e;g[g.length]=q}if(snapToChildren||0<q||q<-1*d){for(;q<i[r]-0.5||q>i[r]+0.5;)q=(q-i[r])*snapFrictionCoefficient+i[r],g[g.length]=q;g[g.length]=i[r]}e=1;for(0!=g.length%2&&(e=0);e<g.length;e+=2)b[b.length]=f.slowScrollHorizontalIntervalTimer(10* e,j,g[e],d,c,C,o,m,h,r,i,p,w,k,v);b[b.length]=f.onSlideCompleteTimer(10*(e+1),v,j,a(j).children(":eq("+r+")"),r%w,y);O[y]=b;f.hideScrollbar(v,b,e,g,d,c,C,o,m,h);l[y]=r},onSlideComplete:function(a,b,d,c,e){if(R[e]!=c)a.onSlideComplete(new f.args(a,b,d,c));R[e]=c},getSliderOffset:function(j,b){var d=0,b="x"==b?4:5;A||G?(d=a(j).css("-webkit-transform").split(","),d=parseInt(d[b],10)):d=parseInt(a(j).css("left"),10);return d},setSliderOffset:function(j,b){A||G?a(j).css({webkitTransform:"translateX("+ b+"px)"}):a(j).css({left:b+"px"})},setBrowserInfo:function(){null!=navigator.userAgent.match("WebKit")?(G=!0,N="-webkit-grab",Q="-webkit-grabbing"):null!=navigator.userAgent.match("Gecko")?(N="move",Q="-moz-grabbing"):null!=navigator.userAgent.match("MSIE 7")?X=!0:null!=navigator.userAgent.match("MSIE 8")?Y=!0:navigator.userAgent.match("MSIE 9")},getAnimationSteps:function(a,b,d,c,e){var g=[];for(1>=b&&0<=b?b=-2:-1<=b&&0>=b&&(b=2);1<b||-1>b;){b*=a.frictionCoefficient;d+=b;if(d>e||d<-1*c)b*=a.elasticFrictionCoefficient, d+=b;g[g.length]=d}activeChildOffset=0;return g},calcActiveOffset:function(a,b,d,c,e,g,f,o){for(var m=!1,a=[],h,e=0;e<c.length;e++)c[e]<=b&&c[e]>b-g&&(!m&&c[e]!=b&&(a[a.length]=c[e-1]),a[a.length]=c[e],m=!0);0==a.length&&(a[0]=c[c.length-1]);for(e=m=0;e<a.length;e++){var i=Math.abs(b-a[e]);i<g&&(m=a[e],g=i)}for(e=0;e<c.length;e++)m==c[e]&&(h=e);0>d&&h%f==o%f?(h=o+1,h>=c.length&&(h=c.length-1)):0<d&&h%f==o%f&&(h=o-1,0>h&&(h=0));return h},changeSlide:function(j,b,d,c,e,g,l,o,m,h,i,y,w,p,k){f.autoSlidePause(i); for(var v=0;v<d.length;v++)clearTimeout(d[v]);var v=Math.ceil(k.autoSlideTransTimer/10)+1,q=f.getSliderOffset(b,"x"),t=h[j]-q,r=[],u;f.showScrollbar(k,e);for(var n=0;n<=v;n++){u=n;u/=v;u--;u=q+t*(Math.pow(u,5)+1);if(k.infiniteSlider&&(u>h[p+1]+l&&(u-=w,j=2*p-1),u<h[2*p-1]-l))u+=w,j=p+1;r[r.length]=u}for(n=0;n<r.length;n++)d[n]=f.slowScrollHorizontalIntervalTimer(10*(n+1),b,r[n],c,e,g,l,o,m,j,h,w,y,p,k);0!=t&&(d[d.length]=f.onSlideCompleteTimer(10*(n+1),k,b,a(b).children(":eq("+j+")"),j%y,i));O[i]= d;f.hideScrollbar(k,d,n,r,c,e,g,l,o,m);f.autoSlide(b,d,c,e,g,l,o,m,h,i,y,w,p,k);return j},autoSlide:function(a,b,d,c,e,g,C,o,m,h,i,y,w,p){if(!p.autoSlide)return!1;f.autoSlidePause(h);K[h]=setTimeout(function(){!p.infiniteSlider&&l[h]>m.length-1&&(l[h]-=w);l[h]=f.changeSlide(l[h]+1,a,b,d,c,e,g,C,o,m,h,i,y,w,p);f.autoSlide(a,b,d,c,e,g,C,o,m,h,i,y,w,p)},p.autoSlideTimer+p.autoSlideTransTimer)},autoSlidePause:function(a){clearTimeout(K[a])},slowScrollHorizontalIntervalTimer:function(a,b,d,c,e,g,l,o,m, h,i,y,w,p,k){return setTimeout(function(){f.slowScrollHorizontalInterval(b,d,c,e,g,l,o,m,h,i,y,w,p,k)},a)},onSlideCompleteTimer:function(a,b,d,c,e,g){return setTimeout(function(){f.onSlideComplete(b,d,c,e,g)},a)},hideScrollbarIntervalTimer:function(a,b,d,c,e,g,l,o,m,h){return setTimeout(function(){f.hideScrollbarInterval(b,d,c,e,g,l,o,m,h)},a)},args:function(a,b,f,c){this.settings=a;this.sliderObject=b;this.currentSlideObject=f;this.currentSlideNumber=c},preventDrag:function(a){a.preventDefault()}, preventClick:function(){return!1},enableClick:function(){return!0}};f.setBrowserInfo();var J={init:function(j){var b=a.extend({elasticPullResistance:0.6,frictionCoefficient:0.92,elasticFrictionCoefficient:0.6,snapFrictionCoefficient:0.92,snapToChildren:!1,startAtSlide:1,scrollbar:!1,scrollbarHide:!0,scrollbarLocation:"top",scrollbarOpacity:0.4,scrollbarHeight:"4px",scrollbarBorder:"0",scrollbarMargin:"5px",scrollbarBackground:"#000",scrollbarBorderRadius:"100px",scrollbarShadow:"0 0 0 #000",desktopClickDrag:!1, responsiveSlideWidth:!0,navSlideSelector:"",navPrevSelector:"",navNextSelector:"",autoSlideToggleSelector:"",autoSlide:!1,autoSlideTimer:5E3,autoSlideTransTimer:750,infiniteSlider:!1,onSliderLoaded:function(){},onSlideChange:function(){},onSlideComplete:function(){}},j);return this.each(function(){function d(){f.autoSlidePause(c);a(p).css("width","");a(p).css("height","");a(U).css("width","");g=0;n=[];y=a(p).parent().width();w=a(p).parent().height();k=a(p).outerWidth(!0);v=a(p).height();b.responsiveSlideWidth&& (k=a(p).outerWidth(!0)>y?y:a(p).outerWidth(!0),v=a(p).height()>w?w:a(p).height());a(p).css({position:"relative",top:"0",left:"0",overflow:"hidden",zIndex:1,width:k,height:v});b.responsiveSlideWidth&&a(U).each(function(){var b=a(this).outerWidth(true),b=b>k?k+(a(this).outerWidth(true)-a(this).width())*-1:a(this).width();a(this).css({width:b})});a(s).children().each(function(b){a(this).css({"float":"left"});n[b]=g*-1;g=g+a(this).outerWidth(true)});for(var d=0;d<n.length&&!(n[d]<=-1*(g-k));d++)K=d;n.splice(K+ 1,n.length);n[n.length]=-1*(g-k);g-=k;a(s).css({webkitPerspective:1E3,webkitBackfaceVisibility:"hidden",position:"relative",cursor:N,width:g+k+"px",overflow:"hidden"});f.setSliderOffset(s,n[l[c]]);if(0>=g)return a(s).css({cursor:"default"}),!1;!A&&!b.desktopClickDrag&&a(s).css({cursor:"default"});b.scrollbar&&(a("."+m).css({margin:b.scrollbarMargin,overflow:"hidden",display:"none"}),a("."+m+" ."+h).css({border:b.scrollbarBorder}),q=parseInt(a("."+m).css("marginLeft"))+parseInt(a("."+m).css("marginRight")), t=parseInt(a("."+m+" ."+h).css("borderLeftWidth"),10)+parseInt(a("."+m+" ."+h).css("borderRightWidth"),10),i=Math.floor(k/(g+k)*(k-q)),b.scrollbarHide||(G=b.scrollbarOpacity),a("."+m).css({position:"absolute",left:0,width:k-q+"px",margin:b.scrollbarMargin}),"top"==b.scrollbarLocation?a("."+m).css("top","0"):a("."+m).css("bottom","0"),a("."+m+" ."+h).css({borderRadius:b.scrollbarBorderRadius,background:b.scrollbarBackground,height:b.scrollbarHeight,width:i-t+"px",minWidth:b.scrollbarHeight,border:b.scrollbarBorder, webkitPerspective:1E3,webkitBackfaceVisibility:"hidden",webkitTransform:"translateX("+Math.floor(-1*n[l[c]]/g*(k-q-i))+"px)",opacity:G,filter:"alpha(opacity:"+100*G+")",boxShadow:b.scrollbarShadow}),a("."+m).css({display:"block"}),A||a("."+h).css({position:"relative",left:Math.floor(-1*n[l[c]]/g*(k-q-i))}));b.infiniteSlider&&(B=(g+k)/3);""!=b.navSlideSelector&&a(b.navSlideSelector).each(function(d){a(this).css({cursor:"pointer"});a(this).unbind("click.iosSliderEvent").bind("click.iosSliderEvent", function(){var a=d;b.infiniteSlider&&(a=d+x);l[c]=f.changeSlide(a,s,e,g,h,i,k,q,t,n,c,x,B,z,b)})});""!=b.navPrevSelector&&(a(b.navPrevSelector).css({cursor:"pointer"}),a(b.navPrevSelector).unbind("click.iosSliderEvent").bind("click.iosSliderEvent",function(){if(l[c]>0||b.infiniteSlider)l[c]=f.changeSlide(l[c]-1,s,e,g,h,i,k,q,t,n,c,x,B,z,b)}));""!=b.navNextSelector&&(a(b.navNextSelector).css({cursor:"pointer"}),a(b.navNextSelector).unbind("click.iosSliderEvent").bind("click.iosSliderEvent",function(){if(l[c]< n.length-1||b.infiniteSlider)l[c]=f.changeSlide(l[c]+1,s,e,g,h,i,k,q,t,n,c,x,B,z,b)}));b.autoSlide&&((""!=b.autoSlideToggleSelector&&(a(b.autoSlideToggleSelector).css({cursor:"pointer"}),a(b.autoSlideToggleSelector).unbind("click.iosSliderEvent").bind("click.iosSliderEvent",function(){if(H){f.autoSlide(s,e,g,h,i,k,q,t,n,c,x,B,z,b);H=false;a(b.autoSlideToggleSelector).removeClass("on")}else{f.autoSlidePause(c);H=true;a(b.autoSlideToggleSelector).addClass("on")}})),H||f.autoSlide(s,e,g,h,i,k,q,t,n, c,x,B,z,b),A)?a(p).bind("touchend.iosSliderEvent",function(){H||f.autoSlide(s,e,g,h,i,k,q,t,n,c,x,B,z,b)}):(a(p).bind("mouseenter.iosSliderEvent",function(){f.autoSlidePause(c)}),a(p).bind("mouseleave.iosSliderEvent",function(){H||f.autoSlide(s,e,g,h,i,k,q,t,n,c,x,B,z,b)})));f.onSlideComplete(b,s,a(s).children(":eq("+l[c]+")"),l[c]%x,c);a(p).data("iosslider",{obj:Z,settings:b,scrollerNode:s,numberOfSlides:z,sliderNumber:c,childrenOffsets:n,sliderMax:g,scrollbarClass:h,scrollbarWidth:i,stageWidth:k, scrollMargin:q,scrollBorder:t,infiniteSliderOffset:x,infiniteSliderWidth:B});return!0}L++;var c=L,e=[];S[c]=b;var g,j=[0,0],o=[0,0],m="scrollbarBlock"+L,h="scrollbar"+L,i,y,w,p=a(this),k,v,q,t,r;l[c]=b.startAtSlide-1;var u=-1,n,G=0,E=0,J=0,s=a(this).children(":first-child"),U,z=a(s).children().size(),I=!1,K=0,V=!1,P=void 0,B,x=z;R[c]=-1;var H=!1;T[c]=!1;var W=-1;O[c]=[];var Z=a(this);if(void 0!=Z.data("iosslider"))return!0;b.infiniteSlider&&(b.scrollbar=!1,a(s).children().clone(!0).prependTo(s).clone(!0).appendTo(s), x=z);U=a(s).children();b.scrollbar&&a(s).parent().append("<div class = '"+m+"'><div class = '"+h+"'></div></div>");if(!d())return!0;b.infiniteSlider&&(l[c]+=x,f.setSliderOffset(s,n[l[c]]));a(this).find("a").bind("mousedown",f.preventDrag);a(this).find("[onclick]").bind("click",f.preventDrag).each(function(){a(this).data("onclick",this.onclick)});b.onSliderLoaded(new f.args(b,s,a(s).children(":eq("+l[c]+")"),l[c]%x));A&&S[c].responsiveSlideWidth?a(window).bind("orientationchange.iosSliderEvent",function(){if(!d())return true}): S[c].responsiveSlideWidth&&a(window).bind("resize.iosSliderEvent",function(){if(!d())return true});if(A||b.desktopClickDrag)if(a(s).bind("touchstart.iosSliderEvent mousedown.iosSliderEvent",function(d){f.autoSlidePause(c);if(A){eventX=event.touches[0].pageX;eventY=event.touches[0].pageY}else{window.getSelection?window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges():document.selection&&document.selection.empty();eventX= d.pageX;eventY=d.pageY;V=true;P=this;a(this).css({cursor:Q})}j=[0,0];o=[0,0];F=0;I=false;for(d=0;d<e.length;d++)clearTimeout(e[d]);d=f.getSliderOffset(this,"x");W=l[c];if(b.infiniteSlider&&l[c]%z==0){var m=a(this).children(":eq("+l[c]+")").clone(this);a(this).children().each(function(b){b+1%z==0&&a(m).replaceWith(a(this))})}if(d>0){f.setSliderOffset(this,0);a("."+h).css({width:i-t+"px"})}else if(d<g*-1){d=g*-1;f.setSliderOffset(this,d);f.setSliderOffset(a("."+h),k-q-i);a("."+h).css({width:i-t+"px"})}E= (f.getSliderOffset(this,"x")-eventX)*-1;f.getSliderOffset(this,"y");j[1]=eventX;o[1]=eventY}),a(s).bind("touchmove.iosSliderEvent mousemove.iosSliderEvent",function(c){A||(window.getSelection?window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges():document.selection&&document.selection.empty());if(A){eventX=event.touches[0].pageX;eventY=event.touches[0].pageY}else{eventX=c.pageX;eventY=c.pageY;if(!V)return false}if(b.infiniteSlider){f.getSliderOffset(this, "x")>n[z+1]+k&&(E=E+B);f.getSliderOffset(this,"x")<n[z*2-1]-k&&(E=E-B)}j[0]=j[1];j[1]=eventX;F=(j[1]-j[0])/2;o[0]=o[1];o[1]=eventY;M=(o[1]-o[0])/2;if((F>5||F<-5)&&A){event.preventDefault();I=true}else A||(I=true);if(I){c=f.getSliderOffset(this,"x");if(A){J!=event.touches.length&&(E=c*-1+eventX);J=event.touches.length}var d=0;elasticPullResistance=b.elasticPullResistance;c>0&&(d=(E-eventX)*elasticPullResistance);c<g*-1&&(d=(g+(E-eventX)*-1)*elasticPullResistance*-1);f.setSliderOffset(this,(E-eventX- d)*-1);if(b.scrollbar){f.showScrollbar(b,h);D=Math.floor((E-eventX-d)/g*(k-q-i));var e=i;if(c>=0){e=i-t-D*-1;f.setSliderOffset(a("."+h),0);a("."+h).css({width:e+"px"})}else if(c<=g*-1+1){e=k-q-t-D;f.setSliderOffset(a("."+h),D);a("."+h).css({width:e+"px"})}else f.setSliderOffset(a("."+h),D)}if(A)r=event.touches[0].pageX}u=f.calcActiveOffset(b,(E-eventX-d)*-1,0,n,g,k,x,void 0);if(u!=W){W=u;b.onSlideChange(new f.args(b,this,a(this).children(":eq("+u+")"),u%x))}}),a(s).bind("touchend.iosSliderEvent", function(){if(event.touches.length!=0)for(var a=0;a<sizeof(event.touches.length);a++)event.touches[a].pageX==r&&f.slowScrollHorizontal(this,e,g,h,F,M,i,k,q,t,n,c,x,B,z,b);else f.slowScrollHorizontal(this,e,g,h,F,M,i,k,q,t,n,c,x,B,z,b)}),!A){var $=a(window);if(Y||X)$=a(document);a($).bind("mouseup.iosSliderEvent",function(){I?a(s).children(":eq("+l[c]+")").find("a").unbind("click.disableClick").bind("click.disableClick",f.preventClick):a(s).children(":eq("+l[c]+")").find("a").unbind("click.disableClick").bind("click.disableClick", f.enableClick);a(s).children(":eq("+l[c]+")").find("[onclick]").each(function(){this.onclick=function(b){if(I)return false;a(this).data("onclick").call(this,b||window.event)}});if(!T[c]){a(s).css({cursor:N});V=false;if(P==void 0||j[0]==0)return false;f.slowScrollHorizontal(P,e,g,h,F,M,i,k,q,t,n,c,x,B,z,b);P=void 0}})}})},destroy:function(j){return this.each(function(){var b=a(this),d=b.data("iosslider");if(void 0==d)return!1;void 0==j&&(j=!0);f.autoSlidePause(d.sliderNumber);T[d.sliderNumber]=!0; a(window).unbind(".iosSliderEvent");a(this).unbind(".iosSliderEvent");a(this).children(":first-child").unbind(".iosSliderEvent");a(this).children(":first-child").children().unbind(".iosSliderEvent");j&&(a(this).attr("style",""),a(this).children(":first-child").attr("style",""),a(this).children(":first-child").children().attr("style",""),a(d.settings.navSlideSelector).attr("style",""),a(d.settings.navPrevSelector).attr("style",""),a(d.settings.navNextSelector).attr("style",""),a(d.settings.autoSlideToggleSelector).attr("style", ""));d.settings.infiniteSlider&&(a(this).children(":first-child").html(),a(this).children(":first-child").html(a(this).children(":first-child").children(":nth-child(-n+"+d.numberOfSlides+")").clone(!0)));b.removeData("iosslider")})},goToSlide:function(j){return this.each(function(){var b=a(this).data("iosslider");if(void 0==b)return!1;j=(j-1)%b.numberOfSlides;b.settings.infiniteSlider&&(j+=b.infiniteSliderOffset);f.changeSlide(j,a(b.scrollerNode),O[b.sliderNumber],b.sliderMax,b.scrollbarClass,b.scrollbarWidth, b.stageWidth,b.scrollMargin,b.scrollBorder,b.childrenOffsets,b.sliderNumber,b.infiniteSliderOffset,b.infiniteSliderWidth,b.numberOfSlides,b.settings);l[b.sliderNumber]=j})}};a.fn.iosSlider=function(f){if(J[f])return J[f].apply(this,Array.prototype.slice.call(arguments,1));if("object"===typeof f||!f)return J.init.apply(this,arguments);a.error("invalid method call!")}})(jQuery);

/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

 /*
 * TipTip
 * Copyright 2010 Drew Wilson
 * www.drewwilson.com
 * code.drewwilson.com/entry/tiptip-jquery-plugin
 *
 * Version 1.3   -   Updated: Mar. 23, 2010
 *
 * This Plug-In will create a custom tooltip to replace the default
 * browser tooltip. It is extremely lightweight and very smart in
 * that it detects the edges of the browser window and will make sure
 * the tooltip stays within the current window size. As a result the
 * tooltip will adjust itself to be displayed above, below, to the left 
 * or to the right depending on what is necessary to stay within the
 * browser window. It is completely customizable as well via CSS.
 *
 * This TipTip jQuery plug-in is dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function($){$.fn.tipTip=function(options){var defaults={activation:"hover",keepAlive:false,maxWidth:"200px",edgeOffset:3,defaultPosition:"bottom",delay:400,fadeIn:200,fadeOut:200,attribute:"title",content:false,enter:function(){},exit:function(){}};var opts=$.extend(defaults,options);if($("#tiptip_holder").length<=0){var tiptip_holder=$('<div id="tiptip_holder" style="max-width:'+opts.maxWidth+';"></div>');var tiptip_content=$('<div id="tiptip_content"></div>');var tiptip_arrow=$('<div id="tiptip_arrow"></div>');$("body").append(tiptip_holder.html(tiptip_content).prepend(tiptip_arrow.html('<div id="tiptip_arrow_inner"></div>')))}else{var tiptip_holder=$("#tiptip_holder");var tiptip_content=$("#tiptip_content");var tiptip_arrow=$("#tiptip_arrow")}return this.each(function(){var org_elem=$(this);if(opts.content){var org_title=opts.content}else{var org_title=org_elem.attr(opts.attribute)}if(org_title!=""){if(!opts.content){org_elem.removeAttr(opts.attribute)}var timeout=false;if(opts.activation=="hover"){org_elem.hover(function(){active_tiptip()},function(){if(!opts.keepAlive){deactive_tiptip()}});if(opts.keepAlive){tiptip_holder.hover(function(){},function(){deactive_tiptip()})}}else if(opts.activation=="focus"){org_elem.focus(function(){active_tiptip()}).blur(function(){deactive_tiptip()})}else if(opts.activation=="click"){org_elem.click(function(){active_tiptip();return false}).hover(function(){},function(){if(!opts.keepAlive){deactive_tiptip()}});if(opts.keepAlive){tiptip_holder.hover(function(){},function(){deactive_tiptip()})}}function active_tiptip(){opts.enter.call(this);tiptip_content.html(org_title);tiptip_holder.hide().removeAttr("class").css("margin","0");tiptip_arrow.removeAttr("style");var top=parseInt(org_elem.offset()['top']);var left=parseInt(org_elem.offset()['left']);var org_width=parseInt(org_elem.outerWidth());var org_height=parseInt(org_elem.outerHeight());var tip_w=tiptip_holder.outerWidth();var tip_h=tiptip_holder.outerHeight();var w_compare=Math.round((org_width-tip_w)/2);var h_compare=Math.round((org_height-tip_h)/2);var marg_left=Math.round(left+w_compare);var marg_top=Math.round(top+org_height+opts.edgeOffset);var t_class="";var arrow_top="";var arrow_left=Math.round(tip_w-12)/2;if(opts.defaultPosition=="bottom"){t_class="_bottom"}else if(opts.defaultPosition=="top"){t_class="_top"}else if(opts.defaultPosition=="left"){t_class="_left"}else if(opts.defaultPosition=="right"){t_class="_right"}var right_compare=(w_compare+left)<parseInt($(window).scrollLeft());var left_compare=(tip_w+left)>parseInt($(window).width());if((right_compare&&w_compare<0)||(t_class=="_right"&&!left_compare)||(t_class=="_left"&&left<(tip_w+opts.edgeOffset+5))){t_class="_right";arrow_top=Math.round(tip_h-13)/2;arrow_left=-12;marg_left=Math.round(left+org_width+opts.edgeOffset);marg_top=Math.round(top+h_compare)}else if((left_compare&&w_compare<0)||(t_class=="_left"&&!right_compare)){t_class="_left";arrow_top=Math.round(tip_h-13)/2;arrow_left=Math.round(tip_w);marg_left=Math.round(left-(tip_w+opts.edgeOffset+5));marg_top=Math.round(top+h_compare)}var top_compare=(top+org_height+opts.edgeOffset+tip_h+8)>parseInt($(window).height()+$(window).scrollTop());var bottom_compare=((top+org_height)-(opts.edgeOffset+tip_h+8))<0;if(top_compare||(t_class=="_bottom"&&top_compare)||(t_class=="_top"&&!bottom_compare)){if(t_class=="_top"||t_class=="_bottom"){t_class="_top"}else{t_class=t_class+"_top"}arrow_top=tip_h;marg_top=Math.round(top-(tip_h+5+opts.edgeOffset))}else if(bottom_compare|(t_class=="_top"&&bottom_compare)||(t_class=="_bottom"&&!top_compare)){if(t_class=="_top"||t_class=="_bottom"){t_class="_bottom"}else{t_class=t_class+"_bottom"}arrow_top=-12;marg_top=Math.round(top+org_height+opts.edgeOffset)}if(t_class=="_right_top"||t_class=="_left_top"){marg_top=marg_top+5}else if(t_class=="_right_bottom"||t_class=="_left_bottom"){marg_top=marg_top-5}if(t_class=="_left_top"||t_class=="_left_bottom"){marg_left=marg_left+5}tiptip_arrow.css({"margin-left":arrow_left+"px","margin-top":arrow_top+"px"});tiptip_holder.css({"margin-left":marg_left+"px","margin-top":marg_top+"px"}).attr("class","tip"+t_class);if(timeout){clearTimeout(timeout)}timeout=setTimeout(function(){tiptip_holder.stop(true,true).fadeIn(opts.fadeIn)},opts.delay)}function deactive_tiptip(){opts.exit.call(this);if(timeout){clearTimeout(timeout)}tiptip_holder.fadeOut(opts.fadeOut)}}})}})(jQuery);

/*tab*/
//$.tabs = function(containerId, start) {var ON_CLASS = 'on';var id = '#' + containerId;var i = (typeof start == "number") ? start - 1 : 0;$(id + '>div:lt(' + i + ')').add(id + '>div:gt(' + i + ')').hide();$(id + '>ul>li:nth-child(' + (i+1) + ')').addClass(ON_CLASS);$(id + '>ul>li>a').click(function() {$(this).load( function() { alert("Hello"); } );if (!$(this.parentNode).is('.' + ON_CLASS)) {var re = /([_\-\w]+$)/i;var target = $('#' + re.exec(this.href)[1]);if (target.size() > 0) {$(id + '>div:visible').hide();target.show();$(id + '>ul>li').removeClass(ON_CLASS);$(this.parentNode).addClass(ON_CLASS);} else {alert('There is no such container.');}}return false;});};

$.tabs = function(containerId, start) {var ON_CLASS = 'on';var id = '#' + containerId;var i = (typeof start == "number") ? start - 1 : 0;$(id + '>.tabs_cont:lt(' + i + ')').add(id + '>.tabs_cont:gt(' + i + ')').hide();$(id + '>.tabs_links>li:nth-child(' + (i+1) + ')').addClass(ON_CLASS);$(id + '>.tabs_links>li>a').click(function() {$(this).load( function() { alert("Hello"); } );if (!$(this.parentNode).is('.' + ON_CLASS)) {var re = /([_\-\w]+$)/i;var target = $('#' + re.exec(this.href)[1]);if (target.size() > 0) {$(id + '>.tabs_cont:visible').hide();target.show();$(id + '>.tabs_links>li').removeClass(ON_CLASS);$(this.parentNode).addClass(ON_CLASS);} else {alert('There is no such container.');}}return false;});};

/*! nanoScrollerJS v0.7 (c) 2013 James Florentino; Licensed MIT */

(function(e,t,n){"use strict";var r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x;S={paneClass:"pane",sliderClass:"slider",contentClass:"content",iOSNativeScrolling:!1,preventPageScrolling:!1,disableResize:!1,alwaysVisible:!1,flashDelay:1500,sliderMinHeight:20,sliderMaxHeight:null},y="scrollbar",g="scroll",l="mousedown",c="mousemove",p="mousewheel",h="mouseup",m="resize",u="drag",w="up",v="panedown",s="DOMMouseScroll",o="down",E="wheel",a="keydown",f="keyup",b="touchmove",r=t.navigator.appName==="Microsoft Internet Explorer"&&/msie 7./i.test(t.navigator.appVersion)&&t.ActiveXObject,i=null,x=function(){var e,t,r;return e=n.createElement("div"),t=e.style,t.position="absolute",t.width="100px",t.height="100px",t.overflow=g,t.top="-9999px",n.body.appendChild(e),r=e.offsetWidth-e.clientWidth,n.body.removeChild(e),r},d=function(){function a(r,s){this.el=r,this.options=s,i||(i=x()),this.$el=e(this.el),this.doc=e(n),this.win=e(t),this.$content=this.$el.children("."+s.contentClass),this.$content.attr("tabindex",0),this.content=this.$content[0],this.options.iOSNativeScrolling&&this.el.style.WebkitOverflowScrolling!=null?this.nativeScrolling():this.generate(),this.createEvents(),this.addEvents(),this.reset()}return a.prototype.preventScrolling=function(e,t){if(!this.isActive)return;if(e.type===s)(t===o&&e.originalEvent.detail>0||t===w&&e.originalEvent.detail<0)&&e.preventDefault();else if(e.type===p){if(!e.originalEvent||!e.originalEvent.wheelDelta)return;(t===o&&e.originalEvent.wheelDelta<0||t===w&&e.originalEvent.wheelDelta>0)&&e.preventDefault()}},a.prototype.nativeScrolling=function(){this.$content.css({WebkitOverflowScrolling:"touch"}),this.iOSNativeScrolling=!0,this.isActive=!0},a.prototype.updateScrollValues=function(){var e;e=this.content,this.maxScrollTop=e.scrollHeight-e.clientHeight,this.contentScrollTop=e.scrollTop,this.iOSNativeScrolling||(this.maxSliderTop=this.paneHeight-this.sliderHeight,this.sliderTop=this.contentScrollTop*this.maxSliderTop/this.maxScrollTop)},a.prototype.createEvents=function(){var e=this;this.events={down:function(t){return e.isBeingDragged=!0,e.offsetY=t.pageY-e.slider.offset().top,e.pane.addClass("active"),e.doc.bind(c,e.events[u]).bind(h,e.events[w]),!1},drag:function(t){return e.sliderY=t.pageY-e.$el.offset().top-e.offsetY,e.scroll(),e.updateScrollValues(),e.contentScrollTop>=e.maxScrollTop?e.$el.trigger("scrollend"):e.contentScrollTop===0&&e.$el.trigger("scrolltop"),!1},up:function(t){return e.isBeingDragged=!1,e.pane.removeClass("active"),e.doc.unbind(c,e.events[u]).unbind(h,e.events[w]),!1},resize:function(t){e.reset()},panedown:function(t){return e.sliderY=(t.offsetY||t.originalEvent.layerY)-e.sliderHeight*.5,e.scroll(),e.events.down(t),!1},scroll:function(t){if(e.isBeingDragged)return;e.updateScrollValues(),e.iOSNativeScrolling||(e.sliderY=e.sliderTop,e.slider.css({top:e.sliderTop}));if(t==null)return;e.contentScrollTop>=e.maxScrollTop?(e.options.preventPageScrolling&&e.preventScrolling(t,o),e.$el.trigger("scrollend")):e.contentScrollTop===0&&(e.options.preventPageScrolling&&e.preventScrolling(t,w),e.$el.trigger("scrolltop"))},wheel:function(t){if(t==null)return;return e.sliderY+=-t.wheelDeltaY||-t.delta,e.scroll(),!1}}},a.prototype.addEvents=function(){var e;this.removeEvents(),e=this.events,this.options.disableResize||this.win.bind(m,e[m]),this.iOSNativeScrolling||(this.slider.bind(l,e[o]),this.pane.bind(l,e[v]).bind(""+p+" "+s,e[E])),this.$content.bind(""+g+" "+p+" "+s+" "+b,e[g])},a.prototype.removeEvents=function(){var e;e=this.events,this.win.unbind(m,e[m]),this.iOSNativeScrolling||(this.slider.unbind(),this.pane.unbind()),this.$content.unbind(""+g+" "+p+" "+s+" "+b,e[g])},a.prototype.generate=function(){var e,t,n,r,s;return n=this.options,r=n.paneClass,s=n.sliderClass,e=n.contentClass,!this.$el.find(""+r).length&&!this.$el.find(""+s).length&&this.$el.append('<div class="'+r+'"><div class="'+s+'" /></div>'),this.slider=this.$el.find("."+s),this.pane=this.$el.find("."+r),i&&(t=this.$el.css("direction")==="rtl"?{left:-i}:{right:-i},this.$el.addClass("has-scrollbar")),t!=null&&this.$content.css(t),this},a.prototype.restore=function(){this.stopped=!1,this.pane.show(),this.addEvents()},a.prototype.reset=function(){var e,t,n,s,o,u,a,f,l;if(this.iOSNativeScrolling){this.contentHeight=this.content.scrollHeight;return}return this.$el.find("."+this.options.paneClass).length||this.generate().stop(),this.stopped&&this.restore(),e=this.content,n=e.style,s=n.overflowY,r&&this.$content.css({height:this.$content.height()}),t=e.scrollHeight+i,u=this.pane.outerHeight(),f=parseInt(this.pane.css("top"),10),o=parseInt(this.pane.css("bottom"),10),a=u+f+o,l=Math.round(a/t*a),l<this.options.sliderMinHeight?l=this.options.sliderMinHeight:this.options.sliderMaxHeight!=null&&l>this.options.sliderMaxHeight&&(l=this.options.sliderMaxHeight),s===g&&n.overflowX!==g&&(l+=i),this.maxSliderTop=a-l,this.contentHeight=t,this.paneHeight=u,this.paneOuterHeight=a,this.sliderHeight=l,this.slider.height(l),this.events.scroll(),this.pane.show(),this.isActive=!0,e.scrollHeight===e.clientHeight||this.pane.outerHeight(!0)>=e.scrollHeight&&s!==g?(this.pane.hide(),this.isActive=!1):this.el.clientHeight===e.scrollHeight&&s===g?this.slider.hide():this.slider.show(),this.pane.css({opacity:this.options.alwaysVisible?1:"",visibility:this.options.alwaysVisible?"visible":""}),this},a.prototype.scroll=function(){if(!this.isActive)return;return this.sliderY=Math.max(0,this.sliderY),this.sliderY=Math.min(this.maxSliderTop,this.sliderY),this.$content.scrollTop((this.paneHeight-this.contentHeight+i)*this.sliderY/this.maxSliderTop*-1),this.iOSNativeScrolling||this.slider.css({top:this.sliderY}),this},a.prototype.scrollBottom=function(e){if(!this.isActive)return;return this.reset(),this.$content.scrollTop(this.contentHeight-this.$content.height()-e).trigger(p),this},a.prototype.scrollTop=function(e){if(!this.isActive)return;return this.reset(),this.$content.scrollTop(+e).trigger(p),this},a.prototype.scrollTo=function(t){if(!this.isActive)return;return this.reset(),this.scrollTop(e(t).get(0).offsetTop),this},a.prototype.stop=function(){return this.stopped=!0,this.removeEvents(),this.pane.hide(),this},a.prototype.flash=function(){var e=this;if(!this.isActive)return;return this.reset(),this.pane.addClass("flashed"),setTimeout(function(){e.pane.removeClass("flashed")},this.options.flashDelay),this},a}(),e.fn.nanoScroller=function(t){return this.each(function(){var n,r;(r=this.nanoscroller)||(n=e.extend({},S,t),this.nanoscroller=r=new d(this,n));if(t&&typeof t=="object"){e.extend(r.options,t);if(t.scrollBottom)return r.scrollBottom(t.scrollBottom);if(t.scrollTop)return r.scrollTop(t.scrollTop);if(t.scrollTo)return r.scrollTo(t.scrollTo);if(t.scroll==="bottom")return r.scrollBottom(0);if(t.scroll==="top")return r.scrollTop(0);if(t.scroll&&t.scroll instanceof e)return r.scrollTo(t.scroll);if(t.stop)return r.stop();if(t.flash)return r.flash()}return r.reset()})}})(jQuery,window,document);

/**
 * DropKick
 *
 * Highly customizable <select> lists
 * https://github.com/JamieLottering/DropKick
 *
 * &copy; 2011 Jamie Lottering <http://github.com/JamieLottering>
 *                        <http://twitter.com/JamieLottering>
 * 
 */
(function ($, window, document) {

  var ie6 = false;

  // Help prevent flashes of unstyled content
  if ($.browser.msie && parseInt($.browser.version) < 7) {
    ie6 = true;
  } else {
    document.documentElement.className = document.documentElement.className + ' dk_fouc';
  }
  
  var
    // Public methods exposed to $.fn.dropkick()
    methods = {},

    // Cache every <select> element that gets dropkicked
    lists   = [],

    // Convenience keys for keyboard navigation
    keyMap = {
      'left'  : 37,
      'up'    : 38,
      'right' : 39,
      'down'  : 40,
      'enter' : 13
    },

    // HTML template for the dropdowns
    dropdownTemplate = [
      '<div class="dk_container" id="dk_container_{{ id }}" tabindex="{{ tabindex }}">',
        '<a class="dk_toggle">',
          '<span class="dk_label">{{ label }}</span>',
        '</a>',
        '<div class="dk_options">',
          '<ul class="dk_options_inner">',
          '</ul>',
        '</div>',
      '</div>'
    ].join(''),

    // HTML template for dropdown options
    optionTemplate = '<li class="{{ current }}"><a data-dk-dropdown-value="{{ value }}">{{ text }}</a></li>',

    // Some nice default values
    defaults = {
      startSpeed : 1000,  // I recommend a high value here, I feel it makes the changes less noticeable to the user
      theme  : false,
      change : false
    },

    // Make sure we only bind keydown on the document once
    keysBound = false
  ;

  // Called by using $('foo').dropkick();
  methods.init = function (settings) {
    settings = $.extend({}, defaults, settings);

    return this.each(function () {
      var
        // The current <select> element
        $select = $(this),

        // Store a reference to the originally selected <option> element
        $original = $select.find(':selected').first(),

        // Save all of the <option> elements
        $options = $select.find('option'),

        // We store lots of great stuff using jQuery data
        data = $select.data('dropkick') || {},

        // This gets applied to the 'dk_container' element
        id = $select.attr('id') || $select.attr('name'),

        // This gets updated to be equal to the longest <option> element
        width  = settings.width || $select.outerWidth(),

        // Check if we have a tabindex set or not
        tabindex  = $select.attr('tabindex') ? $select.attr('tabindex') : '',

        // The completed dk_container element
        $dk = false,

        theme
      ;

      // Dont do anything if we've already setup dropkick on this element
      if (data.id) {
        return $select;
      } else {
        data.settings  = settings;
        data.tabindex  = tabindex;
        data.id        = id;
        data.$original = $original;
        data.$select   = $select;
        data.value     = _notBlank($select.val()) || _notBlank($original.attr('value'));
        data.label     = $original.text();
        data.options   = $options;
      }

      // Build the dropdown HTML
      $dk = _build(dropdownTemplate, data);

      // Make the dropdown fixed width if desired
      $dk.find('.dk_toggle').css({
        'width' : width + 'px'
      });

      // Hide the <select> list and place our new one in front of it
      $select.before($dk);

      // Update the reference to $dk
      $dk = $('#dk_container_' + id).fadeIn(settings.startSpeed);

      // Save the current theme
      theme = settings.theme ? settings.theme : 'default';
      $dk.addClass('dk_theme_' + theme);
      data.theme = theme;

      // Save the updated $dk reference into our data object
      data.$dk = $dk;

      // Save the dropkick data onto the <select> element
      $select.data('dropkick', data);

      // Do the same for the dropdown, but add a few helpers
      $dk.data('dropkick', data);

      lists[lists.length] = $select;

      // Focus events
      $dk.bind('focus.dropkick', function (e) {
        $dk.addClass('dk_focus');
      }).bind('blur.dropkick', function (e) {
        $dk.removeClass('dk_open dk_focus');
      });

      setTimeout(function () {
        $select.hide();
      }, 0);
    });
  };

  // Allows dynamic theme changes
  methods.theme = function (newTheme) {
    var
      $select   = $(this),
      list      = $select.data('dropkick'),
      $dk       = list.$dk,
      oldtheme  = 'dk_theme_' + list.theme
    ;

    $dk.removeClass(oldtheme).addClass('dk_theme_' + newTheme);

    list.theme = newTheme;
  };

  // Reset all <selects and dropdowns in our lists array
  methods.reset = function () {
    for (var i = 0, l = lists.length; i < l; i++) {
      var
        listData  = lists[i].data('dropkick'),
        $dk       = listData.$dk,
        $current  = $dk.find('li').first()
      ;

      $dk.find('.dk_label').text(listData.label);
      $dk.find('.dk_options_inner').animate({ scrollTop: 0 }, 0);

      _setCurrent($current, $dk);
      _updateFields($current, $dk, true);
    }
  };
	
	// Reload the dropkick select widget after options have changed
	// usage: $("...").dropkick('reload');
	methods.reload = function () {
			var $select = $(this);
			var data = $select.data('dropkick');
			$select.removeData("dropkick");
			$("#dk_container_"+ data.id).remove();
			$select.dropkick(data.settings);
	};

  // Expose the plugin
  $.fn.dropkick = function (method) {
    if (!ie6) {
      if (methods[method]) {
        return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
      } else if (typeof method === 'object' || ! method) {
        return methods.init.apply(this, arguments);
      }
    }
  };

  // private
  function _handleKeyBoardNav(e, $dk) {
    var
      code     = e.keyCode,
      data     = $dk.data('dropkick'),
      options  = $dk.find('.dk_options'),
      open     = $dk.hasClass('dk_open'),
      current  = $dk.find('.dk_option_current'),
      first    = options.find('li').first(),
      last     = options.find('li').last(),
      next,
      prev
    ;

    switch (code) {
      case keyMap.enter:
        if (open) {
          _updateFields(current.find('a'), $dk);
          _closeDropdown($dk);
        } else {
          _openDropdown($dk);
        }
        e.preventDefault();
      break;

      case keyMap.up:
        prev = current.prev('li');
        if (open) {
          if (prev.length) {
            _setCurrent(prev, $dk);
          } else {
            _setCurrent(last, $dk);
          }
        } else {
          _openDropdown($dk);
        }
        e.preventDefault();
      break;

      case keyMap.down:
        if (open) {
          next = current.next('li').first();
          if (next.length) {
            _setCurrent(next, $dk);
          } else {
            _setCurrent(first, $dk);
          }
        } else {
          _openDropdown($dk);
        }
        e.preventDefault();
      break;

      default:
      break;
    }
  }

  // Update the <select> value, and the dropdown label
  function _updateFields(option, $dk, reset) {
    var value, label, data;

    value = option.attr('data-dk-dropdown-value');
    label = option.text();
    data  = $dk.data('dropkick');

    $select = data.$select;
    $select.val(value);

    $dk.find('.dk_label').text(label);

    reset = reset || false;

    if (data.settings.change && !reset) {
      data.settings.change.call($select, value, label);
    }
  }

  // Set the currently selected option
  function _setCurrent($current, $dk) {
    $dk.find('.dk_option_current').removeClass('dk_option_current');
    $current.addClass('dk_option_current');

    _setScrollPos($dk, $current);
  }

  function _setScrollPos($dk, anchor) {
    var height = anchor.prevAll('li').outerHeight() * anchor.prevAll('li').length;
    $dk.find('.dk_options_inner').animate({ scrollTop: height + 'px' }, 0);
  }

  // Close a dropdown
  function _closeDropdown($dk) {
    $dk.removeClass('dk_open');
  }

  // Open a dropdown
  function _openDropdown($dk) {
    var data = $dk.data('dropkick');
    $dk.find('.dk_options').css({ top : $dk.find('.dk_toggle').outerHeight() - 1 });
    $dk.toggleClass('dk_open');

  }

  /**
   * Turn the dropdownTemplate into a jQuery object and fill in the variables.
   */
  function _build (tpl, view) {
    var
      // Template for the dropdown
      template  = tpl,
      // Holder of the dropdowns options
      options   = [],
      $dk
    ;

    template = template.replace('{{ id }}', view.id);
    template = template.replace('{{ label }}', view.label);
    template = template.replace('{{ tabindex }}', view.tabindex);

    if (view.options && view.options.length) {
      for (var i = 0, l = view.options.length; i < l; i++) {
        var
          $option   = $(view.options[i]),
          current   = 'dk_option_current',
          oTemplate = optionTemplate
        ;

        oTemplate = oTemplate.replace('{{ value }}', $option.val());
        oTemplate = oTemplate.replace('{{ current }}', (_notBlank($option.val()) === view.value) ? current : '');
        oTemplate = oTemplate.replace('{{ text }}', $option.text());

        options[options.length] = oTemplate;
      }
    }

    $dk = $(template);
    $dk.find('.dk_options_inner').html(options.join(''));

    return $dk;
  }

  function _notBlank(text) {
    return ($.trim(text).length > 0) ? text : false;
  }

  $(function () {

    // Handle click events on the dropdown toggler
    $('.dk_toggle').live('click', function (e) {
      var $dk  = $(this).parents('.dk_container').first();

      _openDropdown($dk);

      if ("ontouchstart" in window) {
        $dk.addClass('dk_touch');
        $dk.find('.dk_options_inner').addClass('scrollable vertical');
      }

      e.preventDefault();
      return false;
    });

    // Handle click events on individual dropdown options
    $('.dk_options a').live(($.browser.msie ? 'mousedown' : 'click'), function (e) {
      var
        $option = $(this),
        $dk     = $option.parents('.dk_container').first(),
        data    = $dk.data('dropkick')
      ;
    
      _closeDropdown($dk);
      _updateFields($option, $dk);
      _setCurrent($option.parent(), $dk);
    
      e.preventDefault();
      return false;
    });

    // Setup keyboard nav
    $(document).bind('keydown.dk_nav', function (e) {
      var
        // Look for an open dropdown...
        $open    = $('.dk_container.dk_open'),

        // Look for a focused dropdown
        $focused = $('.dk_container.dk_focus'),

        // Will be either $open, $focused, or null
        $dk = null
      ;

      // If we have an open dropdown, key events should get sent to that one
      if ($open.length) {
        $dk = $open;
      } else if ($focused.length && !$open.length) {
        // But if we have no open dropdowns, use the focused dropdown instead
        $dk = $focused;
      }

      if ($dk) {
        _handleKeyBoardNav(e, $dk);
      }
    });
  });
})(jQuery, window, document);

/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);