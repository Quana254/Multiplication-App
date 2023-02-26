const num1 = Math.ceil(Math.random() * 20);
const num2 = Math.ceil(Math.random() * 30);
//console.log(num1);
//console.log(num2);
const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");
let score =JSON.parse( localStorage.getItem("score"));

if(!score){
    score = 0;
}
scoreEl.innerText = `score: ${score}`
questionEl.innerText = `what is ${num1} multiply by ${num2}?`

const correctAns = num1 * num2;
formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value
    if(userAns === correctAns){
       score++
       updatelocalStorage()
    }else{
        score--
        updatelocalStorage()
    }
});

function updatelocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}