//https://www.codewars.com/kata/57a429e253ba3381850000fb
function bmi(weight, height) {
    let bmiValue = weight / height ** 2;
    if (bmiValue <= 18.5){
        return "Underweight";
    } else if (bmiValue <= 25.0) {
        return "Normal";
    } else if (bmiValue <= 30.0) {
        return "Overweight";
    } else {
        return "Obese";
    }
}