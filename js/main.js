function toggleAnswer(clicked_id) {
    let text;
    
    if (document.querySelector('.hiddenText') && clicked_id === 'button-1') {
        text = document.querySelector('#hidden-text-1').classList.toggle('visibleText');
    } else if (document.querySelector(".hiddenText") && clicked_id === "button-2") {
        text = document.querySelector('#hidden-text-2').classList.toggle('visibleText');
    } else if (document.querySelector(".hiddenText") && clicked_id === "button-3") {
        text = document.querySelector('#hidden-text-3').classList.toggle('visibleText');
    }
}

// let markedQuestions = [];
// markedQuestions.push({'01': 'Fabian Hanso'},{'02': 'Der Meister'});
// console.log(markedQuestions);

// Pages:
let indexPage = document.querySelector('.index');
let bookmarkPage = document.querySelector('.bookmarks');
let insertPage = document.querySelector('.insert');
let profilePage = document.querySelector('.profile');

// Buttons:
let indexBtn = document.querySelector('.index-btn');
let bookmarkBtn = document.querySelector('.bookmark-btn');
let insertBtn = document.querySelector('.insert-btn');
let profileBtn = document.querySelector('.profile-btn');

// Event Listener:
indexBtn.addEventListener('click', () => {
    indexPage.classList.remove('invisible');
    bookmarkPage.classList.add('invisible');
    insertPage.classList.add('invisible');
    profilePage.classList.add('invisible');
    
    // Button BG - Color:
    indexBtn.classList.add('active');
    profileBtn.classList.remove('active');
    insertBtn.classList.remove('active');
    bookmarkBtn.classList.remove('active');
})

bookmarkBtn.addEventListener('click', () => {
    bookmarkPage.classList.remove('invisible');
    indexPage.classList.add('invisible');
    insertPage.classList.add('invisible');
    profilePage.classList.add('invisible');
    
    // Button BG - Color:
    bookmarkBtn.classList.add('active');
    indexBtn.classList.remove('active');
    profileBtn.classList.remove('active');
    insertBtn.classList.remove('active');
})

insertBtn.addEventListener('click', () => {
    insertPage.classList.remove('invisible');
    bookmarkPage.classList.add('invisible');
    profilePage.classList.add('invisible');
    indexPage.classList.add('invisible');

    // Button BG - Color:
    insertBtn.classList.add('active');
    bookmarkBtn.classList.remove('active');
    indexBtn.classList.remove('active');
    profileBtn.classList.remove('active');  
})

profileBtn.addEventListener('click', () => {
    profilePage.classList.remove('invisible');
    insertPage.classList.add('invisible');
    bookmarkPage.classList.add('invisible');
    indexPage.classList.add('invisible');

    profileBtn.classList.add('active');
    bookmarkBtn.classList.remove('active');
    indexBtn.classList.remove('active');
    insertBtn.classList.remove('active');
})