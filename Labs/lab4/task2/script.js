var btn = document.getElementById('btn');
var childwin;
var spanEl;
var message = 'hello world hello world hello world and so on.....';
var flag = false;
btn.onclick = function()
{
    childwin = open('childwin.html' , 'child' , 'width=500 , height=200 , top=50 , left=50');
    childwin.onload = function() {
        spanEl = childwin.document.getElementById('msg');
        let index = 0;
        const intervalId = setInterval(() => {
            if (index < message.length) {
                spanEl.textContent += message[index];
                index++;
            } else {
                clearInterval(intervalId);
                setTimeout(function(){
                    childwin.close();
                } , 1000)
            }
        }, 50);
    }
    
}






// Call the function with your message, element ID, and interval in milliseconds
//showMessageByLetter("Hello, World!", "message", 100);
