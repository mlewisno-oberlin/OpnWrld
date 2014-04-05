var articles = [ ];

$(document).ready(function ($) {
    console.log(articles.length);
    $.getJSON("sample.json",    function (data) {
        console.log(data);
    });
});




