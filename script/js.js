const storageInput = document.querySelector('.tab');
const storedInput = localStorage.getItem('tabinput');

function swap1() {
    console.log('test');
    if(document.getElementById('menu1').onclick) {
        console.log('I LIVE');
        document.getElementById('menu1').style.border = 'none';
        document.getElementById('menu2').style.border = 'none';
        document.getElementById('menu3').style.border = 'none';
        document.getElementById('menu0').style.border = 'none';
        document.getElementById('newest').style.display = 'block';
        document.getElementById('recentup').style.display = 'none';
        document.getElementById('popular').style.display = 'none';
        document.getElementById('faked').style.display = 'none';
        document.getElementById('home').style.display = 'none';
    }
}
function swap2() {
    console.log('test');
    if(document.getElementById('menu2').onclick) {
        console.log('I LIVE');
        document.getElementById('menu2').style.border = 'none';
        document.getElementById('menu3').style.border = 'none';
        document.getElementById('menu0').style.border = 'none';
        document.getElementById('menu1').style.border = 'none';
        document.getElementById('newest').style.display = 'none';
        document.getElementById('recentup').style.display = 'block';
        document.getElementById('popular').style.display = 'none';
        document.getElementById('faked').style.display = 'none';
        document.getElementById('home').style.display = 'none';
    }
}
function swap3() {
    console.log('test');
    if(document.getElementById('menu3').onclick) {
        console.log('I LIVE');
        document.getElementById('menu3').style.border = 'none';
        document.getElementById('menu0').style.border = 'none';
        document.getElementById('menu1').style.border = 'none';
        document.getElementById('menu2').style.border = 'none';
        document.getElementById('newest').style.display = 'none';
        document.getElementById('recentup').style.display = 'none';
        document.getElementById('popular').style.display = 'block';
        document.getElementById('faked').style.display = 'none';
        document.getElementById('home').style.display = 'none';
    }
}
function swap5() {
    console.log('test');
    if(document.getElementById('menu5').onclick) {
        console.log('I LIVE');
        document.getElementById('menu3').style.border = 'none';
        document.getElementById('menu0').style.border = 'none';
        document.getElementById('menu1').style.border = 'none';
        document.getElementById('menu2').style.border = 'none';
        document.getElementById('newest').style.display = 'none';
        document.getElementById('recentup').style.display = 'none';
        document.getElementById('popular').style.display = 'none';
        document.getElementById('faked').style.display = 'block';
        document.getElementById('home').style.display = 'none';
    }
}
function swap0() {
    console.log('test');
    if(document.getElementById('menu0').onclick) {
        console.log('I LIVE');
        document.getElementById('menu0').style.border = 'none';
        document.getElementById('menu1').style.border = 'none';
        document.getElementById('menu2').style.border = 'none';
        document.getElementById('menu3').style.border = 'none';
        document.getElementById('newest').style.display = 'none';
        document.getElementById('recentup').style.display = 'none';
        document.getElementById('popular').style.display = 'none';
        document.getElementById('faked').style.display = 'none';
        document.getElementById('home').style.display = 'Block';
    }
}
const savetolocalstorage = () => {
    localStorage.setItem('tabinput')
}
//tab.addEventListener('click', savetolocalstorage)

