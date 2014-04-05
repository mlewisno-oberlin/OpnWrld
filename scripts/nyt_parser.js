/* 
http://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20140405&fl=abstract,lead_paragraph,web_url,byline,multimedia,headline&fq=news_desk:%28%22World%22%20%22Foreign%22%29&api-key=38f853a630a887e7c24226b35db8e7a2:13:69142876
*/

var apikey = "api-key=38f853a630a887e7c24226b35db8e7a2:13:69142876";
var fl = "fl=abstract,lead_paragraph,web_url,byline,multimedia,headline";
var d = new Date();
var day = d.getDate();
if(day < 10){
    day = "0"+day;
}
var month = d.getMonth();
if(month < 10){
    month = "0"+month;
}
var year = d.getFullYear();
console.log(year+month+day);