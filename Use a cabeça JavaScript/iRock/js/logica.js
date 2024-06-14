
function onLoad() {
    alert("Hello, eu sou uma rocha de estimação");
  }

function touchRock()
{
    var userName = prompt ("Qual o seu nome?")
    if(userName){
        alert("Prazer em conhecer você, "+userName+".");
        document.getElementById("rockImg").src = "../img/rock_happy.png";
    }
}