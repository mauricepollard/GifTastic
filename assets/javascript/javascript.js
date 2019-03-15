
//add buttons to empty array
var buttons = [];

//variable that will hold the search result
var searchResults = "";

// On click event to add an image and corresponding image for every button on the page
$("#submit").on("click", function () {
    var query = '';
    searchResults = $("#search-box").val();

    //stop normal submit action
    event.preventDefault();

    //test to see if the searchbox is empty to prevent errors
    if(searchResults.length <= 2 ){
    return;
    }
    else{
        //add textbox result to buttons array
    buttons.push(searchResults);
    console.log(buttons);
    }
    //clear buttons div so no buttons are repeated
    $("#image-button").html("");
    //loop thru the buttons array to add search result buttons to the page
    for(var i = 0; i < buttons.length; i++){

        //variable  imageBtn and assign it $("<button>");
        var imageBtn = $("<button>");

        //give each button class of btn and bootstrap button feel
        imageBtn.addClass("btn btn-primary retry");

        //give each button a data-name
        imageBtn.attr("data-name",buttons[i]); 

        //give each button the proper text
        imageBtn.text(buttons[i]);

        //display each button in the image-button area
        $("#image-button").append(imageBtn);
 
    //console.log(searchResults);
    //clear searchbox
    $("#search-box").val("");
    }
});
$("#clear").on("click", function () {
    location.reload();
});
//gets the current button and any newly create buttons
$(document).on("click", ".retry", function () {

    query = "https://api.giphy.com/v1/gifs/search?q=" +
    // $(this).attr("data-name") gets current buttons date-name attribute
        $(this).attr("data-name") + "&api_key=QN8LfUJmT6ByB9bMX7vUFla5TWRoOHLv&limit=10";

    //Ajax call
    $.ajax({
        url: query,
        method: "GET"
    })

        // AJAX function
        .then(function (ajaxResponse) {
            console.log(ajaxResponse.data[0].images);
            $("#rating1").text(ajaxResponse.data[0].rating);
            $("#image1").attr("src", ajaxResponse.data[0].images.preview_webp.url);

            $("#rating2").text(ajaxResponse.data[1].rating);
            $("#image2").attr("src", ajaxResponse.data[1].images.preview_webp.url);

            $("#rating3").text(ajaxResponse.data[2].rating);
            $("#image3").attr("src", ajaxResponse.data[2].images.preview_webp.url);

            $("#rating4").text(ajaxResponse.data[3].rating);
            $("#image4").attr("src", ajaxResponse.data[3].images.preview_webp.url);

            $("#rating5").text(ajaxResponse.data[4].rating);
            $("#image5").attr("src", ajaxResponse.data[4].images.preview_webp.url);

            $("#rating6").text(ajaxResponse.data[5].rating);
            $("#image6").attr("src", ajaxResponse.data[5].images.preview_webp.url);
        });
        
});
