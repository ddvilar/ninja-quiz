const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.form-container');
const result = document.querySelector('.result');
const userScore = document.querySelector('.user-score');

form.addEventListener('submit', e => {
   e.preventDefault();
   
   //Start the score
   let score = 0;

   //Get user answers
   const userAnswers = [form.qst1.value, form.qst2.value, form.qst3.value, form.qst4.value];

   //Check the answers
   userAnswers.forEach((answer, index) => {
       if(answer === correctAnswers[index]) {
        score += 25;
       }
   });

   //Scroll to the top of the page
   scroll({
    top: 0,
    behavior: 'smooth'
   });

   //Create score animation
   let output = 0;
   const timer = setInterval(() => {
    //Add the score to the span element   
    userScore.textContent = `${output}%`;
    if(output === score) {
        clearInterval(timer);
    } else {
        output++;
    }
   }, 10);

   //Display the score to user
   result.style.display = 'block';
   
});



