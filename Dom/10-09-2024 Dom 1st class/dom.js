let a1 = document.createElement("h1"); //createelements
console.log(a1);
a1.innerText = "Hello Guys........";
a1.style.backgroundColor = "green"
a1.style.color = "white"

let body = document.getElementById('m1');
console.log(body);

let image = document.createElement('img');
console.log(image);
image.src = "https://images.alphacoders.com/850/850903.png"
image.style.width = "500px"
image.style.height = "250px"

let butt = document.createElement('button');
console.log(butt);
butt.innerText = "click me..";
butt.style.backgroundColor = "black"
butt.style.color = "white"

body.appendChild(a1);
body.append(image);
body.append(butt);