$(function () {

    
    $('#ex1').slider({
        formatter: function(value) {
            return '€ ' + value;
        }
    });
    
    $('#myCollapsible').collapse({
        toggle: false
    })
});