require("./sass/style.scss");

require ("jquery");

require('../build/counter.js');


$(document).ready(function () {

    let tempObj = {
        value: 25
    }

    $('.title').counter({
        target: tempObj,
        value: 100,
        duration: 10,
        onUpdate: () => {
            $('.title').text(tempObj.value.toFixed(2));
        }
    });


    setTimeout(() => {
        $('.title').counter({
            target: tempObj,
            value: 40,
            duration: 10,
            onUpdate: () => {
                $('.title').text(tempObj.value.toFixed(2));
            }
        });
    }, 2000)
});