function onBefore() { 
    $('#output').html("Scrolling image:<br>" + this.src); 
}; 
function onAfter() { 
    $('#output').html("Scroll complete for:<br>" + this.src) 
        .append('<h3>' + this.alt + '</h3>'); 
};
       $('#cycle_images').cycle({ 
    fx:     'scrollRight', 
    timeout: 3000, 
    before:  onBefore, 
    after:   onAfter 
 });