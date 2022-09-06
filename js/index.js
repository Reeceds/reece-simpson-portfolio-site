// Skills dropdown section
$(".skill-individual-container").each(function (i, skill) {
    if (i > 3) {
        $(skill).addClass("hide-skill");
    }
});

$(".view-more-btn").on("click", function () {
    $(".skill-individual-container").each(function (i, skill) {
        if (i > 3) {
            $(this).toggleClass("hide-skill");
        }
    });

    if ($(".view-more-btn").html() === "View more") {
        $(".view-more-btn").html("View less");
    } else {
        $(".view-more-btn").html("View more");
    }
});

// Click hero button to scroll
function scrollToSection(section) {
    $("html,body").animate({ scrollTop: $(section).offset().top });
}

$(".js-hero-about-me-btn").click(function () {
    scrollToSection("#about-me");
});

$(".js-hero-projects-btn").click(function () {
    scrollToSection("#projects");
});

$(".js-email-icon").click(function () {
    scrollToSection("#message-me");
});
