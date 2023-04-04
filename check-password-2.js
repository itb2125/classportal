function CheckPassword(inputtxt,_inputuser) 
{ 
const passw = 'admin';
const username = "it";
if(inputtxt.value.match(passw) && _inputuser.value.match(username)) 
{ 
window.open('attendance1.html');
return true;
}
else
{ 
alert("Incorrect Username or Password !!!");
return false;
}
}
