var btn1 = document.getElementById('btn1');
var newwin;
btn1.onclick = function(){
    newwin = open("childwindow.html", 'childwindow' , 'width=200 , height=200 , left=0 , top=0');
    newwin.resizeTo(250,250);
    newwin.focus();
}
var btn2 = document.getElementById('btn2');
var intrvl;
var flag = true;
btn2.onclick = function()
{
    newwin.focus();
    intrvl = setInterval(function(){
        if(newwin.screenLeft < window.screen.availWidth /*- 250*/ && newwin.screenTop < window.screen.availHeight - 250 && flag == true)
        {   
            newwin.moveBy(10,10);
        }else 
        {
            flag = false;
            if (newwin.screenLeft == 0 || newwin.screenTop ==0)
            {
                flag = true;
            }
            if(flag == false) 
                newwin.moveBy(-10 ,-10);
        }
        
    } , 100);
}
var btn3 = document.getElementById('btn3');

btn3.onclick = function()
{
    clearInterval(intrvl);
    newwin.focus();
};

var btn4 = document.getElementById('btn4');
btn4.onclick = function()
{
    newwin.close();
}


