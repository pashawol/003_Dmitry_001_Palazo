(function($){
    $.fn.pageMenu = function(options) {

        options = $.extend({
            minOpenLevel: 1
        }, options);

        var self = $(this);

        self.addClass('page-menu');

        self.find('li.active, li.selected').parents('li').andSelf().addClass('opened');

        if (options.minOpenLevel > 0)
        {
            // optimize?
            self.find('li').each(function(){
                if ($(this).parents('ul').length <= options.minOpenLevel)
                    $(this).addClass('opened');
            });
        }

        self.find('li').each(function(){
            var li = $(this);
            if (li.children('ul').length > 0)
            {
                if (li.hasClass('opened'))
                    li.prepend('<a href="#" class="close"></a>');
                else
                    li.prepend('<a href="#" class="open"></a>');
            }
            else
                li.prepend('<a href="#" class="inactive"></a>');
        });

        self.find('a.open, a.close').click(function(){
            $(this).toggleClass('open').toggleClass('close');
            $(this).parent().children('ul').toggle();
            return false;
        });
        self.find('a.inactive').click(function(){return false;});

        return self;
    };
})(jQuery);