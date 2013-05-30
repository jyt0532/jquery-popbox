(function(){

  $.fn.popbox = function(options){
    var settings = $.extend({
      selector      : this.selector,
      open          : '.open',
      box           : '.box',
      hover_image   : '.hover-image',
      close         : '.close'
    }, options);

    var methods = {
      open: function(event){
        event.preventDefault();

        var pop = $(this);
        var box = $(this).parent().find(settings['box']);
        var hover_image = $(this).find(settings['hover_image']);
        if($(this).parent().hasClass('last-line-left')){
          box.css({'display': 'block', 'top': -251, 'left': 158});
        }else if($(this).parent().hasClass('last-line-middle')){ 
          box.css({'display': 'block', 'top': -101, 'left': 158});
        }else{
          box.css({'display': 'block', 'top': 189, 'left': 92});
        }
        hover_image.css({'display': 'block'});
      },

      close: function(event){ 
        event.preventDefault();
        $(settings['box']).fadeOut("fast");
        $(settings['hover_image']).css({'display':'none'});
      }
    };

    return this.each(function(){
      $(settings['open'], this).bind('mouseenter', methods.open);
      $(settings['open'], this).bind('mouseleave', methods.close);
    });
  }

}).call(this);
