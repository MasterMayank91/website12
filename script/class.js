
try
{

    let frame = document.getElementById('frame');

    var num = 0;

    let protocal = document.getElementById('Protocal');

    document.getElementById('btn1').onclick = () =>
    {
        if(num%2 == 0)
        {
            protocal.style.display = "grid";
        }
        else
        {
            protocal.style.display = "none";
        }
        num++;
    }
    
    let fld = doucment.getElementsByClassName('fld');

    let btn2 = document.getElementsByClassName('btn2')

    btn2[0].onclick = () => {
    }

    let time = document.getElementById('time');

    time.innerText = Date().toString();

    setInterval(() => {
        time.innerText = Date().toString();
    }, 1000);
}
catch(error)
{
    alert(error.message());
}