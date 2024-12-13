const timeInput1 = document.querySelector('#time-input1');
const timerBtn1 = document.querySelector('#add-timer1');

const timeInput2 = document.querySelector('#time-input2');
const timerBtn2 = document.querySelector('#add-timer2');

const ul = document.querySelector('#timers');


timeInput1.style.cssText = 'margin-bottom:10px;';
timerBtn1.style.cssText = 'margin-bottom:10px;';



const countdown = (elem, seconds, deletBtn, timeInput) => {

    let count = seconds;
    let timer = setInterval(() => {
        console.log(count + "...");
        if (count == 0) {
            clearInterval(timer);
            //console.log("дошли до 0");
            elem.remove();
            deletBtn.remove();
            timeInput.value = 0;
        }
        elem.textContent = count--;

    }, 1000);
}



timerBtn1.addEventListener('click', () => {

    const inputvalue1 = timeInput1.value;

    const p = document.createElement('p');
    p.style.cssText = 'border: 1px solid black; width: 50px;';
    ul.append(p);


    const deletBtn = document.createElement('button');
    deletBtn.textContent = 'Удалить';
    deletBtn.style.cssText = 'border: 1px solid black; width:100px;';
    ul.append(deletBtn);

    deletBtn.addEventListener('click', () => {
        p.remove();
        deletBtn.remove();
        timeInput1.value = '';
    })

    countdown(p, inputvalue1, deletBtn, timeInput1);
});



timerBtn2.addEventListener('click', () => {

    const inputvalue2 = timeInput2.value;

    const p = document.createElement('p');
    p.style.cssText = 'border: 1px solid black; width: 50px;';
    ul.append(p);


    const deletBtn = document.createElement('button');
    deletBtn.textContent = 'Удалить';
    deletBtn.style.cssText = 'border: 1px solid black; width:100px;';
    ul.append(deletBtn);

    deletBtn.addEventListener('click', () => {
        p.remove();
        deletBtn.remove();
        timeInput2.value = '';
    })

    countdown(p, inputvalue2, deletBtn, timeInput2);
});
