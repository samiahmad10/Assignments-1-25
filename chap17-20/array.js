var array = [24, 53, 78, 91, 12];
var largest= 0;
document.write("Array Items: 24, 53, 78, 91, 12");


for (i=0; i<=largest;i++){
    if (array[i]>largest) {
        var largest=array[i];
    }
}
console.log(largest);
document.getElementById("demo").innerHTML = largest;
