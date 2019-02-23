const showPassw = document.getElementsByClassName('login__form__input__password_show')[0];
const passInput = document.getElementsByClassName('login__form__input__password')[0];


showPassw.addEventListener('click', () => {
    if (passInput.type === 'text') {
        passInput.type = 'password';
    } else {
        passInput.type = 'text';
    }
});


const form = document.forms.login;


function cancelError(context) {
    let currentClasses = context.parentNode.className.split(" ");

    let errorMessage = context.parentNode.nextSibling;

    if (errorMessage && errorMessage.nodeName !== "#text" && errorMessage.className.split(" ").includes("error-message")) {
        errorMessage.remove();
    }

    let clearClass = currentClasses.filter((elem) =>
        elem !== "login__form__item_error" && elem !== "login__form__item_success"
    );

    context.parentNode.className = clearClass.join(" ");
}

function insertAfter(elem, refElem) {
    let parent = refElem.parentNode;
    let next = refElem.nextSibling;
    if (next) {
        return parent.insertBefore(elem, next);
    } else {
        return parent.appendChild(elem);
    }
}


function checkRequired(field) {
    if (!field.value) {
        field.parentNode.className += " login__form__item_error";
        let error = document.createElement("span");

        error.innerText = "Это поле обязательно!";
        error.className = "error-message";

        let parentDiv = field.parentNode;

        insertAfter(error, parentDiv);

    } else {
        field.parentNode.className += " login__form__item_success";
    }
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    let formInputs = form.querySelectorAll("input");

    [].forEach.call(formInputs, (element) => {
        cancelError(element);
        checkRequired(element);
    });


});

