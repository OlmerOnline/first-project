//Задание №1
const titleElem = document.querySelector('.title-one');
const textTitleElem = titleElem.textContent;
let isTextTitle = true;
const btnHidden = document.querySelector('.btn-hidden');

btnHidden.addEventListener('click', () => {
    if (isTextTitle) {
        titleElem.textContent = '';
        isTextTitle = false;
        btnHidden.textContent = 'Показать заголовок';
    } else {
        titleElem.textContent = textTitleElem;
        isTextTitle = true;
        btnHidden.textContent = 'Скрыть заголовок';
    }
});


//Задание №2
const textElem = document.querySelector('.text');
const btnChangeColor = document.querySelector('.btn-change-color');

btnChangeColor.addEventListener('click', () => {
    textElem.style.color = 'blue';
});


//Задание №3
const titleElem2 = document.querySelector('.title-two');
const btnChangeText = document.querySelector('.btn-change-text');

btnChangeText.addEventListener('click', () => {
    titleElem2.textContent = 'Привет, мир!';
});


//Задание №4
const textDescription = document.querySelectorAll('.description');
const btnChangeAllDescription = document.querySelector('.btn-change-all-description');

btnChangeAllDescription.addEventListener('click', () => {
    textDescription.forEach(elem => {
        elem.textContent = 'Измененный текст';    
    });
});


//Задание №5
const textDesc = document.querySelectorAll('.desc');
const btnChangeOnlyDesc = document.querySelector('.btn-change-only-desc');

btnChangeOnlyDesc.addEventListener('click', () => {
    textDesc.forEach(elem => {
        elem.textContent = 'Новый текст';    
    });
});


//Задание №6
const bodyElem = document.querySelector('body');
const btnNewParagraph = document.querySelector('.add-new-paragraph');

btnNewParagraph.addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Новый абзац';
    bodyElem.appendChild(newParagraph);
});


//Задание №7
const btnRemoveDescDouble = document.querySelector('.btn-delete-desc-double');

btnRemoveDescDouble.addEventListener('click', () => {
    const elemDescDouble = document.querySelector('.desc-double');

    if (elemDescDouble) {
        elemDescDouble.remove();
    }
});
