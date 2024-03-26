
var myarray = new Array(5);

for(var i = 0 ; i < myarray.length ; i++)
{
    do{
        myarray[i] = parseInt(prompt(`enter element ${i+1} : `));
    }while(typeof myarray[i] ==='string' || isNaN(myarray[i]));
}

var sortedasc = new Array(5);
var sorteddesc = new Array(5);

for(var i = 0 ; i < myarray.length ; i++)
{
    sortedasc[i] = myarray[i];
    sorteddesc[i] = myarray[i];
}



sortedasc = sortedasc.sort((a,b) => (a-b));
sorteddesc = sorteddesc.sort((a,b) => (b-a));


console.log(sortedasc);
console.log(sorteddesc);

//---------------------------------------------------------
/*var rad = 0 ; 
do{
    rad = parseInt(prompt("enter the radius: "));
}while(typeof rad ==='string' || isNaN(rad));
var area = Math.PI *rad*rad; 
console.log(`area is equal : ${area}`);

var sq = 0 ; 
do{
    sq = parseInt(prompt("enter the a value to get sqrt: "));
}while(typeof sq ==='string' || isNaN(sq));
var sq_sqr = Math.sqrt(sq);

alert(sq_sqr);

var angle;
do{
    angle = parseInt(prompt("enter the angle: "));
}while(typeof angle ==='string' || isNaN(angle));

console.log(`cos is equal ${Math.round(Math.cos(angle*Math.PI /180))}`);

//----------------------------------------------------------------
/*var obj = {
    Name: 'esraa',
    age : 23,
    favcolor: 'red',
}
function myfun(obj , str)
{
    console.log(obj[str]);
}
myfun(obj , "Name" );
myfun(obj , 'age');
myfun(obj , 'favcolor');
*/
