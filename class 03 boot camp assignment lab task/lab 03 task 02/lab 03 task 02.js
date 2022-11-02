var num1, num2;
function Mu()
{
  num1 = parseInt(document.getElementById("num1").value);
  if(num1)
  {
    num2 = document.getElementById("math");
    num2.style.display = "block";
    if(num1%2==0)
      document.getElementById("yes").innerText = "Even";
    else
      document.getElementById("yes").innerText = "Odd";
  }
}
