

const display = document.getElementById("output")
function outputscreen(input){
    display.value +=  input
}
function clearall(){
    display.value=""

}
function clearlast(){
  display.value = display.value.slice(0, -1);
}
function calculate(){
    try{
    display.value= eval(display.value)
    }
    catch(error)
    {
    display.value="Error"
    }

}
