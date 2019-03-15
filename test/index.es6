require("./sass/style.scss");

require("jquery");

import Counter from "./../build/counter"

require('./TweenMax');


$(document).ready(function () {

    let tempObj = {
        value: 25,
        it: 100
    }


    Counter.to(tempObj, 3,
        {
            // value: 100,
            it: 150
        },
        {
            onUpdate: (progress) => {
                // console.log(progress);
                    console.log('first' + tempObj.it);
            }
        });


    setTimeout(() => {
        Counter.to(tempObj, 2,
            {
                // value: 100,
                it: 30
            },
            {
                onUpdate: (progress) => {
                    // console.log(progress);
                    console.log('second' + tempObj.it);
                }
            });
    }, 1000)


    setTimeout(() => {
        Counter.to(tempObj, 3,
            {
                // value: 100,
                it: 10
            },
            {
                onUpdate: (progress) => {
                    // console.log(progress);
                    console.log('third' + tempObj.it);
                    // $('.title').text(tempObj.it.toFixed(2));
                }
            });
    }, 6000)
});