let btnChange = document.getElementsByClassName("btn_change")[0];
let btnDelete = document.getElementsByClassName("btn_delete")[0];

function delay() {
    return new Promise(resolve => setTimeout(resolve, 0));
}

async function delayedLog(item) {
    await delay();

    let currentInput = document.createElement('input');
    currentInput.value = item.innerText;
    currentInput.className = "profile__body__input";

    item.replaceWith(currentInput);
}

async function processArray(array) {
    // делаем "map" массива в промисы
    const promises = [].map.call(array, delayedLog);
    // ждем когда всё промисы будут выполнены
    await Promise.all(promises);

    // btnChange.lastElementChild.innerText = "Сохранить";

}

btnChange.addEventListener("click", function(e){

    let profile = document.getElementsByClassName('profile')[0];

    let formBody = document.createElement('form');
    btnChange.lastElementChild.innerText = "Сохранить";
    btnDelete.lastElementChild.innerText = "Отмена";

    formBody.innerHTML = profile.innerHTML;
    formBody.className = profile.className;
    profile.replaceWith(formBody);

    let inputs = document.getElementsByClassName('profile__body__description');
    // Асинхронно заменять span на input
    processArray(inputs);
});