const BOT_KEY = '1561468131:AAGJ67rQ5kwuMDpPEj3HxfOwj2cUbsKvgBM';
const CHAT_ID = '-1001434033498';
$(document).ready(function() {
    $('#slider').lightSlider({
        item: 1,
        loop: true,
        slideMargin: 0,
        controls: false
    });
    $('#slider2').lightSlider({
        item: 3,
        loop: true,
        slideMargin: 0,
        controls: false,
        enableTouch: true,
        enableDrag: true,
        response: [{
            breakpoint: 740,
            item: 1.5
        }]
    });
    $('#send').click(function() {
        let msg = $('#message').val();
        let name = $('#name').val();
        let email = $('#email').val();
        let msgText = encodeURI('<b>Name </b>: ' + name + '\n<b>Email </b>: ' + email + '\n<b>Comment </b>: ' + msg)
        if (msg != '') {
            $.ajax({
                url: 'https://api.telegram.org/bot' + BOT_KEY + '/sendMessage',
                data: 'chat_id=' + CHAT_ID + '&parse_mode=html&text=' + msgText,
                type: 'get',
                dataType: 'json',
                success: function(json) {
                    if (json.ok) {
                        $("#my_form")[0].reset();
                        $.toast({
                            text: "<b style='font-size: 15px'>Thanks, you will be contacted soon!</b>",
                            icon: 'success',
                            showHideTransition: 'fade',
                            hideAfter: 2000,
                            position: 'top-center',
                            textAlign: 'center',
                            loader: false,
                        });
                        $(this).name.css('border', 'transparent');
                        $(this).email.css('border', 'transparent');
                    } else {
                        //TODO: ошибка сервера
                    }
                    console.log(json);
                },
                error: function(err) {
                    //ошибка сервера
                }
            });

        } else {
            $.toast({
                text: "<b style='font-size: 15px'>Fill in all required fields!</b>",
                icon: 'error',
                showHideTransition: 'fade',
                hideAfter: 2000,
                position: 'top-center',
                textAlign: 'center',
                loader: false,
            });
        }
    });
    $('#email').keyup(function() {
        const email = $(this).val();
        if (email != '') {
            if (isValidEmail(email)) {
                $(this).css('border', '1px solid lime');
            } else {
                $(this).css('border', '1px solid red');
            }
        } else {

        }
    });
    $('#name').keyup(function() {
        const name = $(this).val();
        if (name != "" && name.length >= 2) {
            $(this).css('border', '1px solid lime');
        } else {
            $(this).css('border', '1px solid red')
        }
    });
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });
});

function isValidEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}