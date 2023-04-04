function CheckPassword(inputtxt) 
{
     
const passw = 'itians';

if(inputtxt.value.match(passw)) 
{ 
window.open('index.html');
return true;
}
else
{ 
alert("Incorrect Password");
return false;
}
}
