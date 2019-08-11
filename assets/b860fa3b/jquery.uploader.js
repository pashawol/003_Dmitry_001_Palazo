(function($) {

    var methods = {
        init: function(options) {
            options = $.extend({
                plupload: {} // Plupload options.
            }, options);

            var uploader = new plupload.Uploader(options.plupload);
            uploader.init();

            this.data('uploader', {
                fileAddCallback: function() {},
                uploader: uploader
            });

            return this;
        },
        plupload: function() {
            return this.data('uploader').uploader;
        },
        fileAddCallback: function(func) {
            this.data('uploader').fileAddCallback = func;
            return this;
        },
        fileAdd: function(data) {
            this.data('uploader').fileAddCallback.call(this, data);
            return this;
        },
        loadFiles: function(url) {
            var c = this;
            c.addClass('loading');
            $.get(url, function(data) {
                c.find('.file').remove();
                for (var index in data)
                    c.data('uploader').fileAddCallback.call(c, data[index]);
                c.removeClass('loading');
            });
            return c;
        }
    };

    $.fn.uploader = function(method) {
        if (methods[method])
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        else
            return methods.init.apply(this, arguments);
    };
})(jQuery);
