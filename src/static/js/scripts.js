/*!
* Start Bootstrap - Coming Soon v6.0.3 (https://startbootstrap.com/theme/coming-soon)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-coming-soon/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function init(){
    console.log("js is connected")
};

email = d3.select("#email")

d3.select("#submit").on("mouseover", submit_form);



function submit_form(){
    console.log(email)
}

init();