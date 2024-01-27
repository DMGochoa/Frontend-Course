/*
Crear un programa que tome un array de notas como input y calcule el promedio solo para las notas válidas (nque pasan de 70).
*/

const grades = [100, 80, 90, 70, 50, 70, 90, 100, 65, 90, 100, 100, 90, 100, 100, 100, 100, 100, 100, 100, 100, 100];

const validGrades = grades.filter((grade) => grade >= 70);
console.log(validGrades);
const average = validGrades.reduce((acc, grade) => acc + grade, 0) / validGrades.length;
console.log(average);
