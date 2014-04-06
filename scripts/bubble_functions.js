function mergeDicts(a, b) {
            c = {};
            for (var attrname in a) {
                c[attrname] = a[attrname];
            }
            for (var attrname in b) {
                c[attrname] = b[attrname];
            }
            return c;
}
            
function redrawBubbles() {
    //bubbles, custom popup on hover template
    map.bubbles(bubblesArray, {popupTemplate: hoverInfo});
}

 function addBubble(bubbleJSON, lat, lon) {
            newBubble = {latitude: lat, longitude: lon, radius: bubbleSize, fillKey: 'gt50'};
            newBubble = mergeDicts(newBubble, bubbleJSON);
            bubblesArray.push(newBubble);
            redrawBubbles();
        }



 // Draws a bubble at an address checked by Google Maps
function addBubbleAtAddress(bubbleJSON, addressString) {
    geocoder.geocode({address: addressString}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            lat = results[0].geometry.location.lat();
            lon = results[0].geometry.location.lng();
            locationDictionary = {location: addressString};
            updatedLocationDict = mergeDicts(locationDictionary, bubbleJSON);
            addBubble(updatedLocationDict, lat, lon);
        } else {
            console.log("Geocode was not successful on address string: " + addressString + " for the following reason: " + status);
        }
    });
}

function hoverInfo(geo, data) {
    var source = $("#hoverTemplate").html(); 
    var template = Handlebars.compile(source);
    return template(data);
}   
