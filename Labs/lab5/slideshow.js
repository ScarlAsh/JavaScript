let babyimg = document.getElementsByTagName("img")[0];

let nextbtn = document.getElementById("btn1");
let prevbtn = document.getElementById("btn2");
let stopbtn = document.getElementById("btn3");
let startbtn = document.getElementById("btn4");

let index = 1;

nextbtn.onclick = function(){
    if(index <= 5)
    {
        index++;
        babyimg.src = "./images/"+ index+".jpg";
        console.log(index);
    }
}

prevbtn.onclick = function(){
    if(index > 1)
    {
        index--;
        babyimg.src = "./images/"+ index+".jpg";
        console.log(index);
    }
}
let flag = true;
let slideinterval;
startbtn.onclick = function() {
    slideinterval = setInterval(function() {
        if (index > 0 && index < 6 && flag) {
            index++;
        } else if (index >= 6 || (!flag && index > 1)) {
            index--;
        }

        babyimg.src = "./images/" + index + ".jpg";
        console.log(index);

        if (index === 6) {
            flag = false;
        } else if (index === 1) {
            flag = true;
        }
    }, 500);
};

stopbtn.onclick = function()
{
    clearInterval(slideinterval);
}

//----------------------------------------------------------------------------

