const message = document.querySelector('.message');
const question = document.querySelector('input');
const button = document.querySelector('button');

const answers = ['As I see it, yes.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', "Don't count on it.", 'It is certain.', 'It is decidedly so.', 'Most likely.', 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Outlook good.', 'Reply hazy, try again.', 'Signs point to yes.', 'Very doubtful.', 'Without a doubt.', 'Yes.', 'Yes - definitely.', 'You may rely on it.'];


button.addEventListener('click', function () {

  if (!question.value) {
    message.innerText = 'You gotta ask a question for me to answer.';
  } else if (question.value.length < 7)
    message.innerText = 'Ask a longer question than that.';
  else {
    let random = Math.floor(Math.random() * answers.length);
    message.innerText = question.value + ' ' + answers[random];
    question.value = '';
  }

});
