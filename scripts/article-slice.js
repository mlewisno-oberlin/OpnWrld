// var articles = [ ];

function iterateJSON(data) {
    var arraystuff = {};
    
    var title = data.title;
    var author = data.author;
    var location = data.location;
    var opening = data.opening;
    var link = data.link;
    var pic = data.pic;

    arraystuff = {title: title, author: author, location: location, opening: opening, link: link, pic: pic};
    
    articles.push(arraystuff);
   // console.log(articles);
}

/* $(document).ready(function ($) {
    console.log(articles.length);
    $.getJSON("sample.json",    function (data) {
        console.log(data.result);
        for(var i = 0; i < data.result.length; i++){
            iterateJSON(data.result[i]);
        }
        console.log(articles);
    });
 });
*/




