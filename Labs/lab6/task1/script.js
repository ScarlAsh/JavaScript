let selectedinput;
let labelid;
let labelinput;
let selectedimg;
var parser;
var parsedHTML;
var imgElement;
let imgsrc;
var radioElments = document.querySelectorAll('input[type="radio"]');

for(let i =0 ; i < radioElments.length ; i++)
{
    radioElments[i].onchange = function()
    {
        selectedinput = document.querySelector('input[type="radio"]:checked');
        labelid = selectedinput.getAttribute('id');
        labelinput = document.querySelector('label[for="' + labelid + '"]');
        selectedimg = labelinput.innerHTML;
        parser = new DOMParser();
        parsedHTML = parser.parseFromString(selectedimg, 'text/html');
        imgElement = parsedHTML.body.firstChild;
        imgsrc=imgElement.src;
    }
}

let textArea = document.getElementsByTagName('textarea')[0];

let btn = document.getElementsByTagName('button')[0];
let newwin;
let childdoc;
let childimg;
let msgbox;
let childbtn;
btn.onclick = function()
{
    newwin = open("child.html", 'childwindow' , 'width=200 , height=200 , left=0 , top=0');
    newwin.resizeTo(600,600);
    newwin.focus();
    newwin.onload = function()
    {
        childimg = newwin.document.createElement("img");
        msgbox = newwin.document.createElement("span");
        childbtn = newwin.document.createElement("button");
        childimg.src = imgsrc;
        childimg.setAttribute('width' , '300px');
        childimg.setAttribute('height' , '300px');
        childbtn.innerText = "close card";
        msgbox.textContent = textArea.value;
        newwin.document.body.appendChild(childimg);
        newwin.document.body.appendChild(msgbox);
        newwin.document.body.appendChild(childbtn);
        childbtn.onclick =function()
        {
            newwin.close();
        }
    }
}

