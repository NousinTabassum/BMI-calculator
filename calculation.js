function calculate() {
    const weight = parseFloat(document.getElementById('weigth').value);
    const foot = parseFloat(document.getElementById('foot').value);
    const inch = parseFloat(document.getElementById('inch').value);


    if (typeof weight === 'number' && typeof foot === 'number' && typeof inch === 'number' && inch < 12 && weight > 0 && foot > 0) {
        const height = ((foot * 12 + inch) * 2.54) / 100;
        const BMI = (weight / (height * height)).toFixed(2);

        display(BMI);
    }
    else {
        alert('Please Enter valid values');
    }
}

function display(BMI) {
    const result = document.getElementById('result');
    const weightMap = document.getElementById('weight-map');
    const text = document.getElementById('textarea');
    result.classList.remove('d-none');
    let value;
    if (BMI < 18.5) {
        value = 'Underweight'
        result.style.backgroundColor = 'rgb(234, 176, 29)'
    }
    else if (BMI >= 18.5 && BMI <= 25) {
        value = 'Normal';
        result.style.backgroundColor = 'green'

    }
    else if (BMI > 25 && BMI <= 30) {
        value = 'Overweight';
        result.style.backgroundColor = 'rgb(234, 176, 29)'


    }
    else {
        value = 'obesity';
        result.style.backgroundColor = 'red'
    }

    text.innerText = BMI;
    weightMap.innerText = value;



}

function reset() {
    document.getElementById('weigth').value = '';
    document.getElementById('foot').value = '';
    document.getElementById('inch').value = '';
    const result = document.getElementById('result');
    result.classList.add('d-none');

}
