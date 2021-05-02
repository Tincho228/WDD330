//Added from page 157
const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
   ];
for(const [question,answer] of quiz){
    const response = prompt(question);
    if(response === answer){
     alert('Correct!');
     score++;
    } else {
     alert(`Wrong! The correct answer was ${answer}`);
    }
    }
      

alert('Welcome to Quiz Ninja!');
const question = "What is Superman's real name?"
const answer = prompt(question);
alert(`You answered ${answer}`);
