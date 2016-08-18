(function ( $ ) {

    $.fn.maryGoRound = function(offset) {
        var $navButtons = $('.crsl-arrow'),
            $elementsList = $('.crsl-list'),
            $pixelsOffset = offset,
            $currentLeftValue = 0,
            $elementsCount = $elementsList.find('li').length,
            $minimumOffset = - ($elementsCount - 1)*$pixelsOffset,
            $maximumOffset = 0;

        $navButtons.each(function () {
            $(this).on('click', function() {
                var $navButton = $(this);
                if ($navButton.text() == 'left') {
                    if ($currentLeftValue != $maximumOffset) {
                        $currentLeftValue += $pixelsOffset;
                    }
                } else {
                    if ($currentLeftValue != $minimumOffset) {
                        $currentLeftValue -= $pixelsOffset;
                    }
                }
                $elementsList.animate({left: $currentLeftValue + "px"}, 500);
            })
        });

        return this;
    };

}( jQuery ));

$(function () {
    $('.crsl').maryGoRound(1500);
});
