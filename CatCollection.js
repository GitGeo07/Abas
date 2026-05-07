let cards = document.querySelector('.cards')

let pics = ["Maxvell.gif",'CatDance.gif','cat-catfish.gif','Nword.png','SillyWilly.jpg','Xlebarsick.jpg','Swearing.jpg','unnamed.jpg','tenor.gif']
let texts = ['Максвелл - Редкость:Обычный, Мяукание:Редко, но метко, Способность:Крутится на 360, ломая закон физики и издавая музыку',
    'Танцующий Котик - Редкость:Очень редкий, Мяукание:Он не мяукает - он танцует, Способность:Начинает танцевать и подтягивает этим окружающих',
    "Поп Кэт - Редкость:Легендарный, Мяукание:Очень частое, но слабое(Звучит как губы человека), Способность:",
    "Слава(не человек) - Редкость:Периодичный, Мяукание:Он... Мяукает?, Способность:Появляется и приводит в необычные места",
    "Филя - Редкость:Обычный, Мяукание:Мяукает теориями, Способность:Не смышлённыш, попытки понять его мысли - кипитят мозги",
    "Люся",
    "Коля",
    "Олег",
    "Питрович"]

for (let i = 0; i < pics.length; i+=1) {
    let img = document.createElement('img');
    img.src = pics[i]

    let text = document.createElement('p')
    img.className = 'text'
    text.innerHTML = texts[i]

    let card = document.createElement('div')
    card.className = 'card'

    card.appendChild(img)
    card.appendChild(text)

    cards.appendChild(card)
}