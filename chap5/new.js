var radius = 20;
var circumference = Math.PI * 2*radius;
var area = Math.PI * radius*radius;

document.getElementById("nono").innerHTML = 'Radius:' +  radius;
document.getElementById("momo").innerHTML = 'Circumference:' +  circumference;
document.getElementById("demo").innerHTML = 'Area:' +  area;


console.log("The circumference is " + circumference);

console.log("The area is " + area);