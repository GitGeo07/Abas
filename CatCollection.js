let cards = document.querySelector('.cards')

let pics = ["Maxvell.gif",'CatDance.gif','cat-catfish.gif','Nword.png','SillyWilly.jpg','Xlebarsick.jpg','Swearing.jpg','unnamed.jpg','tenor.gif']
let texts = ['Максвелл', 'Танцующий Котик', "Поп Кэт", "Слава(не человек)", "Филя", "Хлебарсик", "Коля", "Виктор", "Неон"]

let textTwo = ['Редкость:Обычный', 'Редкость:Очень редкий', 'Редкость:Легендарный', 'Редкость:Периодичный', 'Редкость:Обычный',
    'Редкость:Российский', 'Редкость:Переговорный', 'Редкость:Великий', 'Редкость:Дивиантный']
let textThree = ['Мяукание:Редко, но метко', 'Мяукание:Он не мяукает, он танцует', 'Мяукание:Очень частое, но слабое(Звучит как губы человека)', 'Мяукание:Он... Мяукает?', 'Мяукание:Мяукает теориями', 'Мяукание:Мяукает со звуком хлеба',
    'Мяукание:Осуждающий', 'Мяукание:Аппетитный', 'Мяукание:Еврейское']
let textFour = ['Способность:Крутится на 360, ломая закон физики и издавая музыку', 'Способность:Начинает танцевать и подтягивает этим окружающих',
    'Способность:Появляется и приводит в необычные места', 'Способность:Быть глупеньким :3', 'Способность:Не смышлённыш, попытки понять его мысли - закипят мозги',
    'Способность:Быть съедобным и вкусным', 'Способность:Агрится на тех, кто не выдал ему вискас', 'Способность:Появляется с заманчивыми вещами' , 'Способность:Готовить пиково']

for (let i = 0; i < pics.length; i+=1) {
    let img = document.createElement('img');
    img.src = pics[i]

    let text = document.createElement('p')
    text.className = 'text'
    text.innerHTML = texts[i]

    let text2 = document.createElement('p')
    text2.className = 'text2'
    text2.innerHTML = textTwo[i]

    let text3 = document.createElement('p')
    text3.className = 'text3'
    text3.innerHTML = textThree[i]

    let text4 = document.createElement('p')
    text4.className = 'text4'
    text4.innerHTML = textFour[i]

    let card = document.createElement('div')
    card.className = 'card'

    card.appendChild(img)
    card.appendChild(text)
    card.appendChild(text2)
    card.appendChild(text3)
    card.appendChild(text4)

    cards.appendChild(card)
}