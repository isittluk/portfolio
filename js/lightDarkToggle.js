$( "#darkToggle" ).on("click", function() {
    let nor = ["Min Dev Portefølje:", "Designporteføljen Min:"];
    let eng = ["My Development Porfolio:", "My Design Portfolio:"];

    if ($( "body" ).hasClass( "dark" )) {
        $( "body" ).removeClass( "dark" );
        $( "#portfolioType" ).text("Design");
    }
    
    else {
        $( "body" ).addClass( "dark" );
        $( "#portfolioType" ).text("Development");
    }
});