require("./sass/style.scss");

require ("jquery");

require('../build/counter.js');


$(document).ready(function () {

    $('.title').counter();
});