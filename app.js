let ballCounter = document.querySelector('.user__one-ball');
let ballCounter_2 = document.querySelector('.user__two-ball');
let btn_one = document.getElementById('user__1');
let btn_two = document.getElementById('user__2');
let random_ball_1 = document.querySelector('.random__1');
let random_ball_2 = document.querySelector('.random__2');

let b = document.querySelector('.b');


let user__one = document.querySelector('.user__one')
let user__two = document.querySelector('.user__two')

let usertitle = document.querySelector('.user__title')
let usertitle2 = document.querySelector('.user__title2')


let sun = document.getElementById('sun')
let moon = document.getElementById('moon')

let wrapper = document.querySelector('.wrapper')

moon.addEventListener('click',()=>{
    document.body.style.background = 'linear-gradient(to left ,#093028,#237A57)'
    wrapper.style.background = '#093028'
})
sun.addEventListener('click',()=>{
    wrapper.style.background = 'linear-gradient(to left ,#093028,#237A57)'
    document.body.style.background = 'white'
})


let score1 = 0;
let score2 = 0;
let gameEnded = false;


let playname = prompt(`1-chi o'yinchi Ism kiriting`)
let playname2 = prompt(`2-chi o'yinchi Ism kiriting`)

usertitle.textContent = playname
usertitle2.textContent = playname2



btn_one.addEventListener('click', () => {
    if (!gameEnded) { 
        let random_value = Math.floor(Math.random() * 10);
        random_ball_1.textContent = random_value;
        score1 += random_value;
        ballCounter.textContent = score1;


        if (score1 >= 100) {
            gameEnded = true;
            b.textContent = `${playname} wins !`;
            user__one.style.background = '#237A57'
            user__two.style.background = '#093028'
        }
    }
});

btn_two.addEventListener('click', () => {
    if (!gameEnded) { 
        let random_value = Math.floor(Math.random() * 10);
        random_ball_2.textContent = random_value;
        score2 += random_value;
        ballCounter_2.textContent = score2;


        if (score2 >= 100) {
            gameEnded = true;
            b.textContent = `${playname2} wins !`
            user__two.style.background = '#237A57'
            user__one.style.background = '#093028'
        }
    }
});
