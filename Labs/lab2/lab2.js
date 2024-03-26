//1

var str;
var ch;
var counter = 0;
var _case;

do{
    str = prompt("Enter the string : ");
}while(typeof str !== 'string')

do{
    ch = prompt("Enter a character: ")
}while(ch === null)

do{
    _case = prompt("do you want to ignore case? (yes) | (no)");
}while(_case !== 'yes' && _case !=='no');

var strarray = str.split('');

switch(_case)
{
    case 'yes':
        for(let i = 0 ; i < strarray.length ; i++)
        {
            if(strarray[i].toLowerCase() === ch.toLowerCase())
                counter++;
        }
    break;
    case 'no':
        for(let i = 0 ; i < strarray.length ; i++)
        {
            if(strarray[i] === ch)
                counter++;
        }
    break;
}
console.log(counter);

//-----------------------------------
//2
/*
let str1;

do{
    str1 = prompt("Enter the string : ");
}while(!str1)

let str1arr1 = str1.split('');
let ogarray = str1arr1;
let reversedarray = str1arr1.reverse();
let cntr = 0;
for(let i = 0 ; i < ogarray.length ; i++)
{
    if(ogarray[i] === reversedarray[i])
    {
        cntr++;
    }
}
if(cntr === ogarray.length)
{
    console.log("palindrome");
}else{
    console.log("Not palindrome");    
}

//-------------------------------------------------------------
//3
/*
var longstr;
do{
    longstr = prompt("Enter a string : ");
}while(!longstr);

let longstrarr = longstr.split(' ');
//console.log(longstrarr);
let longestword= ' ';

for(let i = 0 ; i < longstrarr.length ; i++)
{
    if(longstrarr[i].length > longestword.length)
        longestword = longstrarr[i];
}
console.log(longestword);
*/
//-----------------------------------------------------------------
//4
/*
let nameregex = /^[a-zA-Z]{3,10}$/;
let userName;
let phoneregex = /^[0-9]{7}$/;
let phone;
let mobileregex =/^(010)|(011)|(012)[0-9]{8}$/;
let mobile;
let emailregex = /^([a-zA-Z0-9_\-\.])+@gmail.com$/;
let email;
let color;
do{
    userName = prompt("Enter your name");
}while(!nameregex.test(userName));

do{
    phone = prompt("Enter your phone number");
}while(!phoneregex.test(phone));

do{
    mobile = prompt("Enter your mobile number");
}while(!mobileregex.test(mobile));

do{
    email = prompt("Enter your email");
}while(!emailregex.test(email));

do{
    color = prompt("Enter green | red | blue ");
}while(color !== 'red' && color !== 'blue' && color !=='green');
let date = new Date();
switch(color)
{
    case 'red':
        console.log(`%c${userName}`, "color:red");
        console.log(`%c${phone}` , 'color: red');
        console.log(`%c${mobile}` , 'color: red');
        console.log(`%c${email}` , 'color: red');
        console.log(date.toDateString());
        break;
    case "blue":
        console.log(`%c${userName}` , 'color: blue');
        console.log(`%c${phone}` , 'color: blue');
        console.log(`%c${mobile}` , 'color: blue');
        console.log(`%c${email}` , 'color: blue');
        console.log(date.toDateString());
        break;
    case "green":
        console.log(`%c${userName}` , 'color: green');
        console.log(`%c${phone}` , 'color: green');
        console.log(`%c${mobile}` , 'color: green');
        console.log(`%c${email}` , 'color: green');
        console.log(date.toDateString());
        break;
}
*/

