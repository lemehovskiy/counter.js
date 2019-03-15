require("./sass/style.scss");

require("jquery");

import Counter from "./../build/counter"


$(document).ready(function () {

    let tempObj = {
        value: 25,
        it: 100
    }

    // class StaticMethodCall {
    //     static staticMethod() {
    //         console.log('Вызван статический метод')
    //     }
    // }
    //
    //
    // StaticMethodCall.staticMethod();

    // console.log(Counter);

    // Counter.to();

    Counter.to(tempObj, 3,
        {
            // value: 100,
            it: 150
        },
        {
            onUpdate: (progress) => {
                // console.log(progress);
                $('.title').text(tempObj.it.toFixed(2));
            }
        });

    // $('.title').counter({
    //     target: tempObj,
    //     value: 100,
    //     duration: 10,
    //     onUpdate: () => {
    //         $('.title').text(tempObj.value.toFixed(2));
    //     }
    // });


    // setTimeout(() => {
    //     $('.title').counter({
    //         target: tempObj,
    //         value: 40,
    //         duration: 10,
    //         onUpdate: () => {
    //             $('.title').text(tempObj.value.toFixed(2));
    //         }
    //     });
    // }, 2000)
});