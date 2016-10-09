$(document).foundation();

$(function () {

    $('.type-on-hover__text').each(function (index, el) {
        var $el = $(el);
        var text = $el.text();
        $el.empty();
        var letters = text.split('');

        for (var i = 0; i < letters.length; i++) {
            var textElement = document.createElement('span');
            textElement.className = 'type-on-hover__letter hidden';
            textElement.innerHTML = letters[i];

            $el.append(textElement);
        }

        var ellipsisElement = document.createElement('span');
        ellipsisElement.className = 'type-on-hover__ellipsis';
        ellipsisElement.innerHTML = '&hellip;';
        $el.append(ellipsisElement);

        $el.removeClass('hidden');
    });

    $('.type-on-hover').on('mouseover', function (event) {
        var $target = $(event.currentTarget);
        var $ellipsisEl = $target.find('.type-on-hover__ellipsis');
        var els = $target.find('.type-on-hover__letter');

        var length = els.length;
        var nHidden = els.filter('.hidden').length;
        var iHidden = 0;

        els.each(function (index, el) {
            var animation = el.getAttribute('data-animation');
            if (animation) {
                clearTimeout(animation);
            }

            var $el = $(el);
            if ($el.hasClass('hidden')) {
                var i = iHidden;

                el.setAttribute('data-animation', setTimeout(function () {
                    $(el).removeClass('hidden');

                    if (i === 0) {
                        $ellipsisEl.addClass('hidden');
                    }
                }, iHidden * 100));

                iHidden++;
            }
        });
    });

    $('.type-on-hover').on('mouseout', function (event) {
        var $target = $(event.currentTarget);
        var $ellipsisEl = $target.find('.type-on-hover__ellipsis');
        var els = $target.find('.type-on-hover__letter');

        var length = els.length;
        var nNotHidden = els.filter(':not(.hidden)').length;
        var iNotHidden = 0;

        els.each(function (index, el) {
            var animation = el.getAttribute('data-animation');
            if (animation) {
                clearTimeout(animation);
            }

            var $el = $(el);
            if (!$el.hasClass('hidden')) {
                var i = iNotHidden;

                el.setAttribute('data-animation', setTimeout(function () {
                    $(el).addClass('hidden');

                    if (nNotHidden - iNotHidden === 0) {
                        $ellipsisEl.removeClass('hidden');
                    }
                }, (nNotHidden - iNotHidden) * 100));

                iNotHidden++;
            }

        });
    });




    // Add border to header and footer when scrolled
    var isScrolledToTop = function () {
        return window.scrollY <= 0;
    };
    var isScrolledToBottom = function () {
        return window.innerHeight + window.scrollY >= document.body.scrollHeight;
    };

    var toggleBorders = function () {
        $('header').toggleClass('border', !isScrolledToTop());
        $('footer').toggleClass('border', !isScrolledToBottom());
    };

    $(document).on('scroll', function () {
        toggleBorders();
    });

    toggleBorders();

});
