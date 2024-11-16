/*button 1 */

let btn1Change = document.getElementById('btn1');

let txt1Change = document.getElementById('txt1');

btn1Change.addEventListener('click',function(event){
txt1Change.innerText = "Surprise, This is a new message!";

});

/*button 2*/
let btn2Change = document.getElementById('btn2');

let txt2Change = document.getElementById('txt2');

btn2Change.addEventListener('click',function(event){
txt2Change.className = "colorgreen";

});

/*button 3*/
let btn3Change = document.getElementById('btn3');

let txt3Change = document.getElementById('txt3');

btn3Change.addEventListener('click',function(event){
txt3Change.className = "makebigger";

});

/*button 4*/
let btn4Change = document.getElementById('btn4');
let txt4Change = document.getElementById('txt4')

btn4Change.addEventListener('click',function(event){
    txt4Change.className = "changefontfamily";
});

/*button 5*/
let btn5Change = document.getElementById('btn5');
let txt5Change = document.getElementById('txt5')

btn5Change.addEventListener('click',function(event){
    txt5Change.className = "changefontweight";
});

/*button 6*/
let btn6Change = document.getElementById('btn6');
let txt6Change = document.getElementById('txt6')

btn6Change.addEventListener('click',function(event){
    txt6Change.className = "changebg";
});

/*button 7*/
let btn7Change = document.getElementById('btn7');
let txt7Change = document.getElementById('txt7');

btn7Change.addEventListener('click',function(event){
    txt7Change.className = "addborder";
});

/*button 8*/
let btn8Change = document.getElementById('btn8');
let txt8Change = document.getElementById('txt8');

btn8Change.addEventListener('click',function(event){
    txt8Change.className = "center";
});

/*button 10*/
let btn10Change = document.getElementById('btn10');
let txt10Change = document.getElementById('txt10');

btn10Change.addEventListener('click',function(event){
   txt10Change.classList.add("center","addborder","changebg");
});

