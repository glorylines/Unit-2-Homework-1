let firstName = prompt("Ваше имя:");
let surname = prompt("Ваша фамилия:");
let fatherName = prompt("Ваше отчество:");

let fullName = firstName + " " + surname + " " + fatherName;

let age = prompt("Ваш возраст в годах:");

let ageInDays = age * 365;
let futureAge = +age + 5;

let gender = confirm("Ваш пол - женский?");
if (gender === true) {
    gender = "да"
} else {
    gender = "нет"
}

let pension = (age < 55);
if (pension === true) {
    pension = "нет"
} else {
    pension = "да"
}

alert("Ваше ФИО: " + fullName + "\nВаш возраст в годах: " + age + "\nВаш возраст в днях: " + ageInDays + "\nЧерез 5 лет вам будет: " + futureAge + "\nВаш пол - женский? " + gender + "\nВы на пенсии: " + pension);