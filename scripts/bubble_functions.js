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