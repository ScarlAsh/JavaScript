const queryParams = new URLSearchParams(window.location.search)


var keys = [];


for (const key of queryParams.keys()) {
    keys.push(key);
}
console.log(keys);
var values = [];

for (const value of queryParams.values()) {
    values.push(value);
}
console.log(values);

var displaycontainer = document.getElementById('display');

displaycontainer.innerText = `hello ${values[0]} \n your Address is ${values[5]} and your job is ${values[2]} .\n You are a ${values[4]} and your phone number is ${values[3]}`;

function SwitchToChrome() {
    if (/Edg/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)) {
    console.log('You are already using Edge.');
    } else {
    if (confirm('For the best experience, we recommend using microsoft Edge. Would you like to download and install Chrome now?')) {
        window.open('http://www.microsoft.com/edge/welcome.html', '_blank');
    }
    }
}
