// Это изменённая версия оригинального файла (добавлено событие beforeDataExtract + небольшая оптимизация).

(function($) {
    $.fn.formSavior = function(options) {
        return this.each(function() {
            var cfg = {
                'msg': 'Вы не сохранили внесённые изменения.',
                'noprompt': 'fs_noprompt',
                'beforeDataExtract': function() {} // пригодится для TinyMCE, который не обновляет текстовое поле, пока форма не отправлена
            };

            if (options) $.extend(cfg, options);
            var originals = '';
            var showalert = true;

            var $form = $(this);
            $win = $(window);
            $doc = $(document);

            // $('.'+cfg.noprompt).live('click', function() {
            //     $form.addClass(cfg.noprompt);
            // });

            $('body').on('click', '.'+cfg.noprompt,  function() {
                $form.addClass(cfg.noprompt);
            });

            function saveOriginals() {	
                originals = extractFormData();
            }

            function extractFormData() {
                cfg.beforeDataExtract();
                var formdata = $form.serialize();
                $('input[type=file]').each(function(index){
                    formdata = formdata + $(this).val();
                });
                //alert(formdata);
                return formdata;
            }

            function allowSave() {
                showalert = false;
            }

            function savePrompt() {
                if (showalert === true && !$form.hasClass(cfg.noprompt) && originals != extractFormData()) {
                    return cfg.msg;
                }
            }

            $doc.ready(saveOriginals); // Сохраняем оригинальные значения полей при загрузке документа.
            $form.submit(allowSave); // Если форма уже отправлена, то позволяем ей сохраниться, не показывая alert.
            $win.bind('beforeunload', savePrompt);
        });
    };
})(jQuery);