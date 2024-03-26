var btn = document.getElementById('btn');
var childWindow;
var scrollContainer;
var intervalId;
btn.onclick = function()
{
    childWindow = open('ad.html' , 'ad window' , 'height=500 , width=500');
    childWindow.onload = function()
    {
        scrollContainer = childWindow.document.getElementById('scrollContainer');
        intervalId = setInterval(function(){
            childWindow.scrollBy(0,10);
            if(childWindow.screen.availHeight == childWindow.scrollY +169)
            {
                clearInterval(intervalId);
                setTimeout(function(){
                    childWindow.close();
                }, 50);   
            }
        }, 50);
    }
}
