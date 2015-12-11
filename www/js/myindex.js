define([], function() {
  return View.extend({
    events: {
        'click .appDown' : 'showDownMask',
        'click .dontNeed' : 'hideDownMask',
    },
    render: function() {    
        this.startSwiper();
        this.startContentSwiper();
    },

    startSwiper: function(){
            if($.Swiper){//初始化swiper
                var _this = this;
                var $el = _this.$el;
                var myslider = new $.Swiper($el.find('.swiper-container')[0],{
                    speed: 400,
                    spaceBetween: 0,
                    loop: true,
                    pagination : '.swiper-pagination',
                    paginationClickable : true,
                    autoplay : 3000,
                    autoplayDisableOnInteraction : false,
                })
            }  
    },

    startContentSwiper: function(){
            if($.Swiper){//初始化swiper
                var _this = this;
                var $el = _this.$el;
                var myslider = new $.Swiper($el.find('.content-container')[0],{
                    spaceBetween: 0,
                    loop: true,
                    pagination : '.radius',
                    paginationClickable : true,
                    autoplayDisableOnInteraction : false,
                })
            }  
    },

    showDownMask: function(){
        $('.maskLayer').removeClass("hidden");
    },


    hideDownMask: function(){
        alert("message");
        $('.maskLayer').addClass("hidden");
    },


  });
});