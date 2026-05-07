let cards = document.querySelector('.cards')

let pics = ["Maxvell.gif",'CatDance.gif','cat-catfish.gif','Nword.png','SillyWilly.jpg','Xlebarsick.jpg','Swearing.jpg','unnamed.jpg','tenor.gif']
let texts = ['Максвелл - Редкость:Обычный, Мяукание:Редко, но метко, Способность:Крутится на 360, ломая закон физики и издавая музыку', 'Танцующий Андрей', "Виктор", "Слава(не черный)", "Филя", "Люся", "Коля", "Олег", "Питрович"]

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