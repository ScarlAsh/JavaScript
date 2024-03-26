let marbelinterval;
let i = 0;
let imgarray = document.getElementsByTagName("img");

window.onload = function() {
    marbelinterval = setInterval(() => {
        imgarray[i].src = "./marbels/marble3.jpg";
        if (i > 0) {
            imgarray[i - 1].src = "./marbels/marble1.jpg";
        } else {
            imgarray[imgarray.length - 1].src = "./marbels/marble1.jpg";
        }

        i = (i + 1) % imgarray.length; // Use modulus to cycle back to 0 when i reaches imgarray.length
    }, 500);
};

for(let i = 0 ; i< imgarray.length; i++)
{  
    imgarray[i].onclick = function()
    {
        clearInterval(marbelinterval);  
    }
}