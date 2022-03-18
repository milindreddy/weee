async function greet(){
    var data = document.getElementById("txt");
    if(data.value=='')
        throw new error("Name is empty");
    return "Hello from greet to "+data.value;
}
function dis(msg){
    document.getElementById("p1").innerHTML=msg;
}
function dos(){
    greet().then(
        function(value){dis(value);},
        function(error){dis(error)}
    )
}