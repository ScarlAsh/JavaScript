document.getElementById('nav').style.listStyleType="circle";
document.getElementById('header').style.textAlign="right";
elem = document.createElement('div')
elem.innerHTML = '<img src="dom.jpg">';
document.getElementsByTagName('div')[0].append(elem)
document.getElementsByTagName('div')[3].setAttribute('id','id1')
document.getElementById('id1').style.textAlign="left";