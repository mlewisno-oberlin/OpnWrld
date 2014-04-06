var articles = [ ];

function iterateJSON(data) {
    var x = 1;
    var counter = 0;
    
    var arraystuff = [];
            var title = data.title;
            var author = data.author;
            var location = data.location;
            var opening = data.opening;
            var link = data.link;
            var pic = data.pic;

            arraystuff.push(title);
            arraystuff.push(author);
            arraystuff.push(location);
            arraystuff.push(opening);
            arraystuff.push(link);
            arraystuff.push(pic);
            articles.push(arraystuff);
}


$(document).ready(function ($) {
    console.log(articles.length);
    $.getJSON("sample.json",    function (data) {
        console.log(data.result);
        for(var i = 0; i < data.result.length; i++){
            iterateJSON(data.result[i]);
        }
        console.log(articles);
    });
});




