function favphones() {
 var mylist = document.getElementById("myList");
 document.getElementById("demo").innerHTML= "Your favorite phone is: " +  mylist.options[mylist.selectedIndex].text;
}