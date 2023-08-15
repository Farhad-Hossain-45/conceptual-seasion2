// const plusBtn = document.getElementById('plus-btn');
// console.log(plusBtn);
let count = 0;
function clickBtn(){
    const element = document.getElementById('count');
    count += 1;
    element.innerText = count;

}

document.getElementById('minus-btn').addEventListener('click', function(){
    const element = document.getElementById('count');
    count -= 1;
    element.innerText = count;

})