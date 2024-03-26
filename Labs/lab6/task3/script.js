let containerElement = document.getElementsByName('div')[0];
let interval1;
function moveImage1(imgElement, containerElement) {
    let leftposstring;
    let flag = true;

    interval1 = setInterval(function() {
        let containerWidth = containerElement.clientWidth;
        let imgWidth = imgElement.clientWidth;
        leftposstring = getComputedStyle(imgElement).left;
        let leftpos = parseInt(leftposstring);

        if (leftpos < containerWidth - imgWidth && flag) {
            leftpos += 10;
        }
        if (leftpos >= containerWidth - imgWidth) {
            flag = false;
        }
        if (leftpos >= 0 && flag == false) {
            leftpos -= 10;
        }
        if (leftpos <= 0) {
            flag = true;
        }

        imgElement.style.left = leftpos + 'px';
    }, 150);
}
let interval3;
function moveImage2(imgElement, containerElement) {
    let leftposstring;
    let flag = true;

    interval3 = setInterval(function() {
        let containerWidth = containerElement.clientWidth;
        let imgWidth = imgElement.clientWidth;
        leftposstring = getComputedStyle(imgElement).left;
        let leftpos = parseInt(leftposstring);

        if (leftpos < containerWidth - imgWidth && flag) {
            leftpos += 10;
        }
        if (leftpos >= containerWidth - imgWidth) {
            flag = false;
        }
        if (leftpos >= 0 && flag == false) {
            leftpos -= 10;
        }
        if (leftpos <= 0) {
            flag = true;
        }

        imgElement.style.left = leftpos + 'px';
    }, 150);
}












let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let topimg = document.getElementById("top");
let btn1 = document.getElementById("btn1");
let container = document.getElementById("container"); // replace "container" with the actual ID of your container div

let interval2;
function moveImageVertical(imgElement, containerElement) {
    
    let topposstring;
    let flag = true;

    interval2 = setInterval(function() {
        let containerRect = containerElement.getBoundingClientRect();
        let imgRect = imgElement.getBoundingClientRect();
        let containerHeight = containerRect.height;
        let imgHeight = imgRect.height;

        topposstring = getComputedStyle(imgElement).top;
        let toppos = parseInt(topposstring);

        if (toppos < containerHeight - imgHeight && flag) {
            toppos += 10;
        }
        if (toppos >= containerHeight - imgHeight) {
            flag = false;
        }
        if (toppos >= 0 && flag == false) {
            toppos -= 10;
        }
        if (toppos <= 0) {
            flag = true;
        }

        imgElement.style.top = toppos + 'px';
    }, 150);
}


btn1.onclick = function() {
    moveImage2(img2, container);
    moveImage1(img1, container);
    moveImageVertical(topimg, container);
};


let btn2 = document.getElementById("btn2");
btn2.onclick = function()
{
    clearInterval(interval1);
    clearInterval(interval2);
    clearInterval(interval3);
    img1.style.left = "0px";
    img2.style.left = "455px";
    topimg.style.top = "450px" 
}