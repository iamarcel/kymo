$(document).foundation();

$(function () {

    // $('.type-on-hover__text').each((index, el) => {

    // });

    // let calculateHoverTextWidths = _ => {
    //     $('.type-on-hover__ellipsis').each((index, el) => {
    //         const $el = $(el);
    //         const width = $el.width('').width();
    //         el.setAttribute('data-width', width);
    //         $el.width(width);
    //     });

    //     $('.type-on-hover__text').each(function (index, el) {
    //         const $el = $(el);
    //         const width = $el.width('').width();
    //         $el.attr('data-width', width);
    //         $el.width(0);
    //     });
    // };


    // $('.type-on-hover').on('mouseover', function (event) {
    //     let $target = $(event.currentTarget);
    //     let $ellipsisEl = $target.find('.type-on-hover__ellipsis');

    //     let $textEl = $target.find('.type-on-hover__text');
    //     $textEl.width($textEl.attr('data-width'));
    //     $ellipsisEl.width(0);
    // });

    // $('.type-on-hover').on('mouseout', function (event) {
    //     let $target = $(event.currentTarget);
    //     let $ellipsisEl = $target.find('.type-on-hover__ellipsis');

    //     let $textEl = $target.find('.type-on-hover__text');
    //     $textEl.width(0);
    //     $ellipsisEl.width($ellipsisEl.attr('data-width'));
    // });




    // // Add border to header and footer when scrolled
    // var isScrolledToTop = function () {
    //     return window.scrollY <= 0;
    // };
    // var isScrolledToBottom = function () {
    //     return window.innerHeight + window.scrollY >= document.body.scrollHeight;
    // };

    // var toggleBorders = function () {
    //     $('header').toggleClass('border', !isScrolledToTop());
    //     $('footer').toggleClass('border', !isScrolledToBottom());
    // };

    // $(window).on('resize', calculateHoverTextWidths);

    // toggleBorders();
    // calculateHoverTextWidths();




    // $(document).keyup(function (event) {
    //     var $carousel = $('#carousel');
    //     if (!$carousel.length) {
    //         return;
    //     }

    //     if (event.keyCode === 37) {
    //         // Left arrow
    //         $carousel.foundation('changeSlide', false);
    //     } else if (event.keyCode === 39) {
    //         // Right arrow
    //         $carousel.foundation('changeSlide', true);
    //     } else if (event.keyCode === 38) {
    //         // Up arrow
    //         window.location.href = PREVIOUS_PORTFOLIO_ITEM_URL;
    //     } else if (event.keyCode === 40) {
    //         // Down arrow
    //         window.location.href = NEXT_PORTFOLIO_ITEM_URL;
    //     }
    // });

    $('.category-link').off().click((e) => {
        let $target = $(e.currentTarget);

        $('.info-link').removeClass('active');
        $('.portfolio').css('display', 'flex');
        $('.info').css('display', 'none');

        if ($target.hasClass('active') || $target.hasClass('all-categories')) {
            $('.portfolio__item').css('display', 'block');
            $('.category-link').removeClass('active');
        } else {
            $('.category-link').removeClass('active');
            $target.addClass('active');

            let categoryId = $target.attr('data-filters-category');
            $('.portfolio__item').css('display', 'none');
            $('.portfolio__item[data-category="' + categoryId + '"]').css('display', 'block');
        }

        e.preventDefault();
        e.stopPropagation();
        return false;
    });

    $('.info-link').off().click((e) => {
        let $target = $(e.currentTarget);

        $('.category-link').removeClass('active');
        $('.portfolio__item').css('display', 'block');

        if ($target.hasClass('active')) {
            $('.portfolio').css('display', 'flex');
            $('.info').css('display', 'none');

            $target.removeClass('active');
        } else {
            $('.portfolio').css('display', 'none');
            $('.info').css('display', 'block');

            $target.addClass('active');
        }

        e.preventDefault();
        e.stopPropagation();
        return false;
    });

    baguetteBox.run('.portfolio__item');
    baguetteBox.run('.baguette');

});
