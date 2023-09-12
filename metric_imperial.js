

let imperial = document.querySelector('#Imperial');
let metric = document.querySelector('#Metric');

function ImpMetric() {
    imperial.addEventListener ("click", function() {
        document.querySelector('.imperial').style.display = "flex";
        document.querySelector('.metric').style.display = "none";
        console.log('HelloWorld')
    });

    metric.addEventListener ("click", function() {
        document.querySelector('.metric').style.display = "flex";
        document.querySelector('.imperial').style.display = "none";
        console.log('HelloWorld')
    });
};

ImpMetric();