//var words = ["программа", "макака", "прекрасный", "оладушек"];
var words = ["прог", "мак", "прек", "олад"];
// Выбираем случайное слово
var word = words[Math.floor(Math.random() * words.length)];
// Создаем итоговый массив
console.log(word);
var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
var remainingLetters = word.length;
var attempts = remainingLetters + 3;
// Игровой цикл
    while (remainingLetters > 0 && attempts > 0) {
        // Показываем состояние игры
        alert(answerArray.join(" "));
        // Запрашиваем вариант ответа
        var guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.").toLowerCase();
            if(attempts < remainingLetters + 3){
                alert('Осталось попыток: '+ attempts-1);
            }
            if (guess === null) {
            // Выходим из игрового цикла
            break;
            } else if (guess.length !== 1) {
                alert("Пожалуйста, введите одиночную букву.");
            } else {
            // Обновляем состояние игры
                for (var j = 0; j < word.length; j++) {
                    if (word[j] === guess) {
                        answerArray[j] = guess;
                        remainingLetters--;
                    }
                }
                attempts--;
            }
        // Конец игрового цикла
    }
    if(attempts < remainingLetters){
        alert('Вы не отгадали слово')
    } else {
        alert(answerArray.join(" "));
        alert("Отлично! Было загадано слово " + word);
    }
