var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");
var sideMenu = document.getElementById("sideMenu");

/*--------This is for about section-------*/
function openTab(tabName) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabName).classList.add("active-tab");
}


/*--------This is for navbar media set-----*/
function openMenu() {
    sideMenu.style.right = "0";
}
function closeMenu() {
    sideMenu.style.right = "-200px";
}

/*-------------- Contact Form -----------*/
const scriptURL = 'https://script.google.com/macros/s/AKfycbyICT89pgKU7QZHFgzjMS_QJrNl7KBhVcmFFKBDQtbn1n_7A6fCScBMwcHHkEEgIlesTQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(Response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.log('Error!', error.message))
})

