console.log("Hello World!");
console.log("Hello World Again!");

document.getElementById('greet').innerText = "Hello ashu bhaiya!";
document.getElementById('button').style.backgroundColor = "red";
    document.getElementById('button').style.color = "white";
    document.getElementById('button').style.height = "40px";
    document.getElementById('button').style.width = "80px";
    document.getElementById('button').style.borderRadius = "9px";
    document.getElementById('button').style.border = "none";

document.getElementById('button').onclick = function change(){
    document.getElementById('button').innerText = "PRESSED";
    document.getElementById('button').style.backgroundColor = "green";
    document.getElementById('button').style.color = "white";
    document.getElementById('button').style.height = "40px";
    document.getElementById('button').style.width = "80px";
    document.getElementById('button').style.borderRadius = "9px";
    document.getElementById('button').style.border = "none";
    

}