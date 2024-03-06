var password=document.getElementById("password")
genpassword=()=>{
var chars="6353672836647gjygvjvcljevfouwevfjweyf@#$%^!*^()"
var passlength=12
var password=""
for (var i = 0; i <= passlength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
}
document.getElementById("password").value = password;
}   

function copypassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy"); }