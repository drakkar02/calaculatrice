function clearScreen(){
    console.log("Clear je suis cliqué")
    document.getElementById("result").value=""
}
function display(valeur){
    console.log(valeur);
    document.getElementById("result").value += valeur;
}
function calculate(){
    let a=document.getElementById("result").value;
    let b=eval(a);
    document.getElementById("result").value=b;  
}
document.addEventListener("keydown", function(event) {
    if(event.key=="Enter"){
        calculate();

    }else if(event.key=="Backspace"){
        clearScreen();
    }else{
        document.getElementById("result").value+=event.key;
    }

    console.log(event);
  })