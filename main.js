const UI_ELEMENTS ={
    SUBMIT: document.querySelector('.submit'),
    DISPLAY: document.querySelector('.onput__place'),
    TO_DO_CONTENT: document.querySelector('.todo__content'),
}

UI_ELEMENTS.SUBMIT.addEventListener('click',createTask);
UI_ELEMENTS.SUBMIT.addEventListener('click',clearDisplay);
UI_ELEMENTS.SUBMIT.addEventListener('click',checkTask);

function checkTask(){
    if (UI_ELEMENTS.DISPLAY.value = '') console.log('work')
    else UI_ELEMENTS.DISPLAY.style.borderColor = 'red'
    console.log(UI_ELEMENTS.DISPLAY.value,'debug')
}

function clearDisplay(){
   console.log(UI_ELEMENTS.DISPLAY.value);
   UI_ELEMENTS.DISPLAY.value = '';
}

function createTask(){
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

