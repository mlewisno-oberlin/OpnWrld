// var articles = [ ]; (this is done in index.html)

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
}