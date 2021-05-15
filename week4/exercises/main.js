//Added from page 189
const quiz = [{
    name: "Superman",
    realName: "Clark Kent"
},
{
    name: "Wonder Woman",
    realName: "Diana Prince"
},
{
    name: "Batman",
    realName: "Bruce Wayne"
},
];
// View Object
const view = {
timer: document.querySelector('#timer strong'),
response: document.querySelector('#response'),
start: document.getElementById('start'),
score: document.querySelector('#score strong'),
question: document.getElementById('question'),
result: document.getElementById('result'),
info: document.getElementById('info'),
show(element){
    element.style.display = 'block';
},
hide(element){
    element.style.display = 'none';
},
render(target, content, attributes) {
    for (const key in attributes) {
        target.setAttribute(key, attributes[key]);
    }
    target.innerHTML = content;
},
setup(){
    this.show(this.question);
    this.show(this.response);
    this.show(this.result);
    this.hide(this.start);
    this.render(this.score,game.score);
    this.render(this.result,'');
    this.render(this.info,'');
    this.resetForm();
},
resetForm(){
    this.response.answer.value = '';
    this.response.answer.focus();
},
teardown(){
    this.hide(this.question);
    this.hide(this.response);
    this.show(this.start);
}
};

const game = {
countdown() {
    game.secondsRemaining--;
    view.render(view.timer,game.secondsRemaining);
    if(game.secondsRemaining < 0) {
        game.gameOver();
        }
    },
start(quiz) {
    this.secondsRemaining = 20;
    this.timer = setInterval( this.countdown , 1000 );
    this.questions = [...quiz];
    this.score = 0;
    view.setup();
    this.ask();
},
ask(){
    if(this.questions.length > 0) {
        this.question = this.questions.pop();
        const question = `What is ${this.question.name}'s real name?`;
        view.render(view.question,question);
    }
    else {
        this.gameOver();
    }
},
check(event){
    event.preventDefault();
    const response = view.response.answer.value;
    const answer = this.question.realName;
    if(response === answer){
        view.render(view.result,'Correct!',{'class':'correct'});
        this.score++;
        view.render(view.score,this.score);
    } else {
        view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
    }
    view.resetForm();
    this.ask();
},
gameOver(){
    view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
    view.teardown();
    clearInterval(this.timer);
    //view.show(view.start);
}
}
game.start(quiz);
view.start.addEventListener('click', () => game.start(quiz), false);
view.response.addEventListener('submit', (event) => game.check(event), false); 
