function is_true (){
    const questions = [
        "Преобразование Number(“false”) вернет число 0?",
        "Значение переменной let нельзя изменить после инициализации?",
        "У объекта Math существует метод для вычисления квадратного корня?",
        "Результат выполнения логической операции - это булево значение?",
        "JS - слишком сложный и ему невозможно научиться?"
    ]
    const answers = [
        false ,
        false ,
        true ,
        false ,
        false 
    ]
    let right = 0;
    let wrong = 0;
    let i1=0
    while (i1 !== questions.length) {
        if (confirm(questions[i1]) === answers[i1]) {
            right++
        }else {
            wrong++
        }
        i1++
    }
    alert(`Верно: ${right}, Неверно: ${wrong}`)
}
is_true ()
