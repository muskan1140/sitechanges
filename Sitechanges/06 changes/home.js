//change1

if(1 === 2){
    showMessage('true');
}

//change2
if ( +(2.7 + 3.9).toFixed(3) === 6.6){
    let message='hello';
    showMessage(message);
}

//change3
let price= 6;
if (price > 10)
   showMessage('true');
else if(price <1) {
    showMessage('less than 5');
}


//change4
let pricey = 40;

(pricey > 10 ? showMessage('yes') : showMessage('no'));


//change5
let i = 9;
while (i > 0) {
    console.log(i);
    i--
}
