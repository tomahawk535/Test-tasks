$(document).ready(function () {
    $('#coundown').countdown('2017/10/10').on('update.countdown', function(event) {
        var $this = $(this).html(event.strftime(''
            + '<span>%-d</span> дней'
            + '<span>%H</span> часов '
            + '<span>%M</span> минут '
            + '<span>%S</span> секунд'));
    });
});//end ready