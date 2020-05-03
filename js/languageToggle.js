$(".norwegian").on("click", function() {
    $("h1").html("Hei! Jeg er <br> Luke Isitt")
    $(".subtitle").text(
        "UI / UX designer med 5 års erfaring innen design og utvikling, brenner for å designe digitale opplevelser som etterlater en positiv innvirkning på mennesker, for folket. For tiden lokalisert i Washington, USA."
    );
    $(".call-to-action").text("Utforske");

    if ($("body").hasClass("dark")) {
        $("h4").text("Min Dev Portefølje:");
    } else $("h4").text("Designporteføljen Min:");
});

$(".english").on("click", function() {
    $("h1").html("Hi! I'm <br> Luke Isitt")
    $(".subtitle").text(
        "UI/UX designer with 5 years of experience in design and development, passionate about designing digital experiences that leave a positive impact on people, for the people. Currently located in Washington, United States."
    );
    $(".call-to-action").text("See My Work");

    if ($("body").hasClass("dark")) {
        $("h4").html("My <span id='portfolioType'>Development</span> Portfolio:");
    } else $("h4").html("My <span id='portfolioType'>Design</span> Portfolio:");
})