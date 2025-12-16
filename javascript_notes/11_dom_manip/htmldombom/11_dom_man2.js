//browser object model bow is used to interact with the browser
// and window is the root object of the browser althought things would 
//work without window we do use window prefix window.alert()


console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(window.location.href);
console.log(window.navigator.userAgent);

function openNewWindow() {
    window.open('https://www.codehelp.in/tutorials', '_blank');
}

