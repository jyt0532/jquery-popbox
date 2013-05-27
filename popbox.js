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
        box.css({'display': 'block', 'top': 194, 'left': 92});
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
