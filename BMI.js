
let height = 0;
let intHeight = 0;
let intWeight = 0;
let weight = 0;
let BMI = 0;
let result = document.querySelectorAll("span")[0];
console.log(result);

    document.getElementById("height").addEventListener('change', (e) => {
        //console.log(e.currentTarget.value)
        height = e.currentTarget.value;
        intHeight = Number(height);
        console.log(intHeight);

        if (intWeight !== 0 && intHeight !== 0) {
            BMI = intWeight / (intHeight*intHeight);
            console.log(BMI);
            result.innerText = BMI;
            console.log(result);
        };
    });
    
    document.getElementById("weight").addEventListener('change', (e) => {
        weight = e.currentTarget.value;
        intWeight = Number(weight);
        console.log(intWeight);  
        
        if (intWeight !== 0 && intHeight !== 0) {
            BMI = intWeight / (intHeight*intHeight);
            console.log(BMI);
            result.innerText = BMI.toFixed(1);
            console.log(result);
        };
    });

    if (intWeight !== 0 && intHeight !== 0) {
        BMI = intWeight / (intHeight*intHeight);
        console.log(BMI);
        result.innerText = BMI;
        console.log(result);
    };



    
    