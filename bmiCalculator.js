function bmiCalc(weight, height){
    return weight / (height*height)
}

//weight in kg
//height in meter

let bmi = bmiCalc(89, 1.8);

console.log("Your bmi is", bmi);