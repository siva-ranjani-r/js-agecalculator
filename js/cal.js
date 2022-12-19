var current_date=new Date();
x=current_date.getFullYear();
y=current_date.getMonth();
z=current_date.getDate();
document.write("current date :"+x+"-"+y+"-"+z+"<br>");

var DOB=String(prompt("enter Date of Birth"));
var dob=new Date(DOB);
a=dob.getFullYear();
b=dob.getMonth();
c=dob.getDate();
document.write("date of birth :"+a+"-"+b+"-"+c+"<br>");

var age=x-a;
if(b>y||b==y&&b>z)
{
	age--;
}		
document.write("entered person age is :"+age);
