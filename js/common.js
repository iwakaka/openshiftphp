$(document).ready(function () {
    // Collapse ibox function
    $('.collapse-link').off("click").on('click', function (e) {
        e.preventDefault();
        var ibox = $(this).closest('div.ibox');
        var button = $(this).find('i');
        var content = ibox.children('.ibox-content');
        content.slideToggle(200);
        button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        ibox.toggleClass('').toggleClass('border-bottom');
        setTimeout(function () {
            ibox.resize();
            ibox.find('[id^=map-]').resize();
        }, 50);
    });

    // Close ibox function
    $('.close-link').off("click").on('click', function (e) {
        e.preventDefault();
        var content = $(this).closest('div.ibox');
        content.remove();
    });

    // Fullscreen ibox function
    $('.fullscreen-link').off("click").on('click', function (e) {
        e.preventDefault();
        var ibox = $(this).closest('div.ibox');
        var button = $(this).find('i');
        $('body').toggleClass('fullscreen-ibox-mode');
        button.toggleClass('fa-expand').toggleClass('fa-compress');
        ibox.toggleClass('fullscreen');
        setTimeout(function () {
            $(window).trigger('resize');
        }, 100);
    });
    
    $('.tool-demo1').tooltip({
        selector:"[data-toggle=tooltip]",
        container: "body"
    });

    // $('#content-main').slimScroll({
    //     height: 'auto',
    //     railOpacity: 0.9
    // });

    // Tooltips demo
    $('.tooltip-demo').tooltip({
        selector: "[data-toggle=tooltip]",
        container: "body"
    });
    
    $("[data-toggle=popover]").popover();

    // // sidebar fixed
    // $("body").addClass('fixed-sidebar');
    // $('.sidebar-collapse').slimScroll({
    //     height: '100%',
    //     railOpacity: 0.9
    // });
    // $('.sidebar-collapse').slimscroll({destroy: true});
    // $('.sidebar-collapse').attr('style', '');
    // $("body").removeClass('fixed-sidebar');

    // collapse menu
    // $("body").addClass('mini-navbar');
    // SmoothlyMenu();
});