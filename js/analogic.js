const hourHand   = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

const getTime = () => {
    const date = new Date();

 //uso do return, diferente do uso de innerHTML no outro script   
    return {
        hours:   date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    }
};

//dividindo pelos graus corretos para os ponteiros completarem a volta ao relógio corretamente
setInterval(() => {
    
    const { hours, minutes, seconds } = getTime();
    
    secondHand.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`;
    minuteHand.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`;
    hourHand.style.transform   = `translate(0, -50%) rotate(${hours * 30}deg)`;

}, 1000);