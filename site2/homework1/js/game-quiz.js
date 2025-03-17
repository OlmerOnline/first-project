function quiz() {
    let questions = [
        {
            question: "Какой цвет неба?",
            answer: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: "синий",
        },
        {
            question: "Сколько дней в неделе?",
            answer: ["1. Семь", "2. Восемь", "3. Девять"],
            correctAnswer: "семь",
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            answer: ["1. Три", "2. Четыре", "3. Пять"],
            correctAnswer: "пять",
        }
    ];
    let userAnswer;
    let strAnswer;
    let counter = 0;
    
    for (let i = 0; i < questions.length; i++) {
        strAnswer = questions[i].answer.join(' ');
        userAnswer = prompt(questions[i].question + '\n' + strAnswer + '\n\n' + 'Введите ответ словом.');
        
            if (userAnswer.toLowerCase() === questions[i].correctAnswer) {
                counter++;
            }
    }

    alert(`Количество верных ответов ${counter} из ${questions.length}.`);
}