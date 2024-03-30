let number = document.getElementById("value")

function increase(){
    number.innerHTML++;
    if(number.innerHTML>"0"){
        number.style.color = "green"
    }
    return;
}

function decrease(){
    number.innerHTML--;
    if(number.innerHTML<"0"){
        number.style.color = "red"
    }
    return;
}

function reset(){
    number.innerHTML = "0"
    number.style.color = "black"
    return;
}