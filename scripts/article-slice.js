var articles = [ ];

$(document).ready(function ($) {
    console.log(articles.length);
    $.getJSON("sample.json",    function (data) {
        $.each( data, function( key, val ) {
            articles.push(val);
            var datastor = [];
            $.each( data, function( key2, val2 ) {
                articles.push(val);
                var data = []
            
            });
        });
    });
   

});




