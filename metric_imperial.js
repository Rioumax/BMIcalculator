

let imperial = document.querySelector('#Imperial');
console.log(imperial);


imperial.addEventListener ("click", function() {
    if (imperial === 'Imperial') {
            document.querySelector('.imperial').style.visibility = "visible";
            document.querySelector('.metric').style.visibility = "hidden";
        } else {
            document.querySelector('.imperial').style.visibility = "hidden";
            document.querySelector('.metric').style.visibility = "visible";
        };
});
