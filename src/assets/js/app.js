$(document).foundation();

$(function () {

    $('.type-on-hover__text').each((index, el) => {

    });

    let calculateHoverTextWidths = _ => {
        $('.type-on-hover__ellipsis').each((index, el) => {
            const $el = $(el);
            const width = $el.width('').width();
            el.setAttribute('data-width', width);
            $el.width(width);
        });

        $('.type-on-hover__text').each(function (index, el) {
            const $el = $(el);
            const width = $el.width('').width();
            $el.attr('data-width', width);
            $el.width(0);
        });
    };


    $('.type-on-hover').on('mouseover', function (event) {
        let $target = $(event.currentTarget);
        let $ellipsisEl = $target.find('.type-on-hover__ellipsis');

        let $textEl = $target.find('.type-on-hover__text');
        $textEl.width($textEl.attr('data-width'));
        $ellipsisEl.width(0);
    });

    $('.type-on-hover').on('mouseout', function (event) {
        let $target = $(event.currentTarget);
        let $ellipsisEl = $target.find('.type-on-hover__ellipsis');

        let $textEl = $target.find('.type-on-hover__text');
        $textEl.width(0);
        $ellipsisEl.width($ellipsisEl.attr('data-width'));
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
        // toggleBorders();
        // $('header').css('border-width', window.scrollY / 20);
    });

    $(window).on('resize', calculateHoverTextWidths);

    toggleBorders();
    calculateHoverTextWidths();

});
