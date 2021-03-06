import {UI_ELEMENTS} from './view.js'

UI_ELEMENTS.SUBMIT.addEventListener('click',checkTask);
UI_ELEMENTS.SUBMIT.addEventListener('click',clearDisplay);

function emptyTask(){
    type.classList.add('empty')
    type.removeAttribute('placeholder');
    type.setAttribute('placeholder','Please fill out the field');
    UI_ELEMENTS.DISPLAY.style.borderColor = 'red'
}

function checkTask(){
    (!UI_ELEMENTS.DISPLAY.value) ? emptyTask() : createTask();
}

function clearDisplay(){
   console.log(UI_ELEMENTS.DISPLAY.value);
   UI_ELEMENTS.DISPLAY.value = '';
}

function createTask(){
    defaultInputColor();
    
    const displayValue = UI_ELEMENTS.DISPLAY.value;
    const div = document.createElement('div');
    div.className = "to-do__task";
    div.innerHTML = `
        ${displayValue}
        <button class="close">x</button>
    `;
    UI_ELEMENTS.TO_DO_CONTENT.append(div);

    removeTask();
}

function removeTask(){
    const close = document.querySelectorAll('.close')
    for(let buttons__close of close){
    buttons__close.addEventListener('click',removeParent)
    console.log('work cycle')}
}

function removeParent(){
    console.log('remove function working')
    this.parentElement.remove()
    // this.parentNode.remove()
}

function defaultInputColor(){
    type.classList.remove('empty')
    type.removeAttribute('placeholder');
    type.setAttribute('placeholder','Type your task');
    UI_ELEMENTS.DISPLAY.style.borderColor = '#bdbdbd'
}