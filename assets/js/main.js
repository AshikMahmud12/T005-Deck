$(document).ready(function () {
    //Sticky Menu
    $(".js--services-section").waypoint(function (direction) {
        if (direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    });

    //Mixitup(portfolio Section)
    var mixer = mixitup(".container");
});


function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
