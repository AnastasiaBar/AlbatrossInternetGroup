function initEmptySlide() {
    const margin = $(".container")[0].getClientRects()[0].x;
    $(".item1").css("margin-left", Math.floor(margin) - 15);

    if($(document).width() <= 768){
        $(".item1").css("margin-left", Math.floor(margin) - 0);
    }
}

$(window).resize(function () {
    initEmptySlide();
});

$(document).on("ready", function () {
    initEmptySlide();

    $(".slider-reviews__slider").slick({
        dots: true,
        focusOnSelect: false,
        infinite: false,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $(".prev"),
        nextArrow: $(".next"),
        centerPadding: "40px",
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: false,
                    variableWidth: false
                }
            }
        ]
    });
});


function activeTab(tab, id){
    const tabWrap = $(tab).parents('.block-tabs');
    const tabBtn = tabWrap.find('.block-tabs__tab');
    tabBtn.removeClass('active');
    $(tab).addClass('active')

    $('.audio audio').remove()

    let audio = $('<audio>', {
        controls: true,
        src: `audio/${id}.mp3`
    });
    $('.audio').append(audio);
}


(function(window) {
    setInterval(timeVideo(window), 1000)
})(window);

function timeVideo(window) {
    var videoNode = window.document.querySelector('.block__video video');
    var timeNode = window.document.querySelector('.block__video-inf p span');
    videoNode.addEventListener('loadedmetadata', function(e) {
        var duration = videoNode.duration.toFixed(1);
        var m = duration % 60;
        timeNode.innerText = Math.floor(duration / 60) + ' минуты ' + (Math.round(m) < 10 ? '0' : '') + Math.round(m) + ' секунды';
    });
};

