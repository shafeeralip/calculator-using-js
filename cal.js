function cal(c)
{
    document.getElementById("screen").value+=c
}
function clearscreen()
    {
document.getElementById("screen").value= " "
    }
    function equal()
    {
        var xt=document.getElementById("screen").value
        var result=eval(xt)
        document.getElementById("screen").value=result

    }
    function back(){
        var value=document.getElementById("screen").value
        document.getElementById("screen").value=value.substr(0,value.length-1)

    }
