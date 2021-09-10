const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.form-container');
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

   //Add the score on the page
   userScore.textContent = `${score}%`;

})



