/* const bibbaTizer = () => {
    alert("nibba say what?")
}
const nibbaTizer = () => {
    const identifier = prompt("Are you a nibbi?")
    console.log(identifier);
    if (identifier === true) {
        console.log("We have a nigga")
        const message = document.getElementById('message')
        message.innerText = "We have a nibbi!!"
    }
    else {
        const message = document.getElementById('message')
        message.innerText = "Sad, we have no nibbi"
    }
};
const redirect = () => {
    location.assign('https://web.programming-hero.com/web-5/video/web-5-39-3-location-url-parts-query-string-href-hash-assign-reload');
} */
<a id="anchor" href="https://web.programming-hero.com/dashboard">Visit</a>

const url = document.getElementById("anchor");
const path = url.pathname;
console.log(path)