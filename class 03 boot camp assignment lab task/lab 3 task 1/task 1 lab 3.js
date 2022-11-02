let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let Result = document.getElementById("Result")

function con() {
    
    let numInt = parseInt(num1.value)
    let num2Int = parseInt(num2.value)
if(numInt < num2Int){
    Result.innerText = "Number 1 is Less"
}

else if(numInt < num2Int)
{
    Result.innerText = " Number 2 is Greater"
}
else{
    Result.innerText = "Both Are Equal"
}
}

