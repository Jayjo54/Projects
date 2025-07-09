// this function adds an animation to the factorial value
function animateCountUp(element, endValue) {
    let start = 0; // start the count at 0 
    const duration = 1000;
    const increment = endValue / duration * 10;

    const counter = setInterval(() => { // this function determines the duration of the animation
        start += increment;
        if (start >= endValue) {
            element.innerText = endValue;
            clearInterval(counter);
        } else {
            element.innerText = Math.floor(start);
        }
    }, 10);
}
// this function is to determine if the number is prime or not
function isPrime(n){
    if(n <= 1) return false;
        for( let i = 2; i <= Math.sqrt(n); i++){
            if(n % i === 0){
                return false;
            }
        }
        return true;
    }
// factorial checker of the number
function isFactorial(n){
    if (n < 0) return 'N/A';
    let result = 1;
    for (let i = 2; i <=n;i++){
        result *= i;
    }
    return result;

}
// check if the num is prime and show its factorial
function checkNum(){
    const input = parseInt(document.querySelector('#prime').value);
    const result = document.querySelector('#result');
   if(isNaN(input)){
    result.innerHTML = "Please enter a valid number.";
    return;
   }
   
   const statusPrime = isPrime(input);
   const factVal = isFactorial(input);

   // if the value of number is prime 
   if(statusPrime){
    result.innerHTML = `${input} is a prime number and <span id="factVal">...</span> is the factorial.`;

   }else{
    //else if the number is not prime
   result.innerHTML = `${input} is a not a prime number and <span id="factVal">...</span> is the factorial.`;
   }
   animateCountUp(document.getElementById('factVal'), isFactorial(input)); // the animation of factorial result
   setTimeout(() =>{
        result.classList.add('show'); // function for fade in result animation
    },10);
}

// this function is for design purposes, it adds glow to the cursor
document.addEventListener('DOMContentLoaded', ()=> {
    const glow = document.createElement('div');
    glow.classList.add('cursor-glow');
    document.body.appendChild(glow);
    document.addEventListener('mousemove', e => {
    glow.style.left = e.pageX + 'px';
    glow.style.top = e.pageY + 'px';
    });
});
