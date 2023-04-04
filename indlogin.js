function CheckPassword(inputtxt,_inputuser) 
{ 
if(inputtxt.value.match("admin") && _inputuser.value.match("au052")) 
{ 
window.open('madhan.html');
return true;
}
else if(inputtxt.value.match("admin") && _inputuser.value.match("au053"))
{ 
    window.open('meena.html');
    return true;
}
else if(inputtxt.value.match("admin") && _inputuser.value.match("au054"))
{ 
    window.open('mohan.html');
    return true;
}
else if(inputtxt.value.match("admin") && _inputuser.value.match("au055"))
{ 
    window.open('monoj.html');
    return true;
} 
else
{ 
alert("Incorrect Username or Password !!!");
return false;
}
}