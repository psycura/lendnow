$(function () {

    
    $('#ex1').slider({
        formatter: function(value) {
            return '€ ' + value;
        }
    });
});