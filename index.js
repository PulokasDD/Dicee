
// функция для привязывание к кнопке refresh
function refresh() {

    // генератор рандома для обоих игроков
    let randomNumber1 = Math.floor(Math.random() * 6 + 1);
    let randomNumber2 = Math.floor(Math.random() * 6 + 1);

    // конкатенация путь картинки с номером рандома для обоих игроков
    let imgGenerator1 = 'images/dice' + randomNumber1 + '.png';
    let imgGenerator2 = 'images/dice' + randomNumber2 + '.png';

    // замена аттрибута src на те что сконкатенировались
    let player1 = document.querySelector('.img1').setAttribute('src', imgGenerator1);
    let player2 = document.querySelector('.img2').setAttribute('src', imgGenerator2);

    // условия замены главного заголовка 
    let title = document.querySelector('h1');

        if (randomNumber1 > randomNumber2) {
            title.innerHTML = 'Player1 win 🚩'
        } else if (randomNumber1 < randomNumber2) {
            title.innerHTML = 'Player2 win 🚩'
        } else title.innerHTML = 'Draw 🙌'

        
}