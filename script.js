var theme = 0;

function theme_color(){
    if(theme==0){
        theme = 1;
        document.getElementById("theme_change").innerHTML = "<img src=\"images/light_mode.svg\" id=\"theme_mode\" onclick=\"theme_color()\">";
        document.getElementById("header").style.backgroundColor = "rgb(44,44,44)";
        document.body.style.backgroundColor = "rgb(22,22,22)";
        document.getElementById("content").style.color = "white";
        document.getElementById("footer").style.backgroundColor = "rgb(44,44,44)";
        document.getElementById("button").style.backgroundColor = "rgba(44,44,44,0.9)";
        document.getElementById("title_change").innerHTML = "\"Jest Noc!\"";
    }
    else{
        theme = 0;
        document.getElementById("theme_change").innerHTML = "<img src=\"images/dark_mode.svg\" id=\"theme_mode\" onclick=\"theme_color()\">";
        document.getElementById("header").style.backgroundColor = "rgb(17, 148, 255)";
        document.body.style.backgroundColor = "rgb(255,255,255)";
        document.getElementById("content").style.color = "black";
        document.getElementById("footer").style.backgroundColor = "rgb(17, 148, 255)";
        document.getElementById("button").style.backgroundColor = "rgba(17, 148, 255, 0.9)";
        document.getElementById("title_change").innerHTML = "\"Jest Moc!\"";
    }
}