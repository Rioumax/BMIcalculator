
let height = 0;
let intHeight = 0;
let intWeight = 0;
let weight = 0;
let BMI = 0;
let result = document.querySelectorAll("span")[0];
let resultDisplayed = document.querySelector('.result-displayed');
let landing = document.querySelector('.landing');


    document.querySelector("#height").addEventListener('change', (e) => {
        height = e.currentTarget.value;
        intHeight = Number(height);

        if (intWeight !== 0 && intHeight !== 0) {
            BMI = intWeight / (intHeight*intHeight);
            result.innerText = BMI.toFixed(1);
            resultDisplayed.style.display = "grid";
            landing.style.display = "none";
        };
    });
    
    document.querySelector("#weight").addEventListener('change', (e) => {
        weight = e.currentTarget.value;
        intWeight = Number(weight); 
        
        if (intWeight !== 0 && intHeight !== 0) {
            BMI = intWeight / (intHeight*intHeight);
            result.innerText = BMI.toFixed(1);
            resultDisplayed.style.display = "grid";
            landing.style.display = "none";
        };
    });




    
    