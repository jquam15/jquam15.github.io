(function () {
    $(".container-xl").waitForImages(
        function () {
            $(".spinner").fadeOut();
        },
        $.noop,
        true
    );
    $(".flex-slide").each(function () {
        $(this).hover(
            function () {
                $(this).find(".flex-title").css({
                    transform: "rotate(0deg)",
                    top: "10%",
                });
                $(this).find(".flex-descriptor").css({
                    opacity: "1",
                });
            },
            function () {
                $(this).find(".flex-title").css({
                    transform: "rotate(90deg)",
                    top: "15%",
                });
                $(this).find(".flex-descriptor").css({
                    opacity: "0",
                });
            }
            
        );
    });
})();