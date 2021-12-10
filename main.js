// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
// Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data in formato americano, testo del post, immagine (non tutti i post devono avere una immagine), numero di likes.

const container = document.getElementById(`container`);
const posts = [
    {
        author: `Phil Mangione`,
        photo: `https://unsplash.it/300/300?image=15`,
        date: `4 mesi fa`,
        text: `Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.`,
        image: `https://unsplash.it/600/300?image=171`,
        likes: Math.floor(Math.random() * 1236),
    },
    {
        author: `Ciccio Pennello`,
        photo: `https://unsplash.it/300/300?image=18`,
        date: `4 mesi fa`,
        text: `Traditional Tuscan cuisine! Da Ciccio Pennello, in Sesto Fiorentino, we offer the most famous and appreciated specialties of traditional Tuscan cuisine.`,
        image: `http://www.amioparere.com/images/locali/398d-ciccio-pennello.jpg`,
        likes: Math.floor(Math.random() * 1236),
    },
    {
        author: `Leonardo Brancamenta`,
        photo: `https://unsplash.it/300/300?image=22`,
        date: `4 mesi fa`,
        text: `BrancaMenta is a mint flavored version of Fernet-Branca. Its surprising formula, composed of herbs and spices, is enriched with the essential oil of Piedmontese peppermint, the finest in the world. The result is a high quality, natural and particularly refreshing bitter liqueur.`,
        image: ``,
        likes: Math.floor(Math.random() * 1236),
    },
    {
        author: `Acqua Panna`,
        photo: `https://unsplash.it/300/300?image=36`,
        date: `5 mesi fa`,
        text: `Acqua Panna® A unique taste and mineral composition obtained after a 14-year journey in which every drop flows and is filtered by the rocks of the sunny Tuscan hills. Thus a water with a soft taste is born, a unique water.`,
        image: `https://unsplash.it/600/300?image=306`,
        likes: Math.floor(Math.random() * 1236),
    }   
]
// Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const templateDiv = `
    <div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${post.photo}" alt="Phil Mangione">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${post.author}</div>
                <div class="post-meta__time">${post.date}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${post.text}</div>
    <div class="post__image">
        <img src="${post.image}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="1">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter my-class">${post.likes}</b> persone
            </div>
        </div> 
    </div>            
    </div>
    `
    container.innerHTML += templateDiv;

    // Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.
    // Al click su un pulsante “Mi Piace” di un post, incrementare il contatore di like al post e cambiare colore al testo del bottone.
    const likeButtons = document.querySelectorAll(`.like-button`);
    const likeCounters = document.querySelectorAll(`.my-class`);
    console.log(likeCounters)
    const likeButtonsArray = Array.from(likeButtons);
    const likeCountersArray = Array.from(likeCounters)
    for (let x = 0; x < likeButtonsArray.length; x++) {
        const post = posts[x];
        let likeButton = likeButtonsArray[x];
        let likeCounter = likeCountersArray[x];
        console.log(likeCountersArray)
        likeButton.addEventListener(`click`, function(event){
            event.preventDefault();
            const buttonClasses = likeButton.classList.length
            if (buttonClasses > 1){
                likeButton.classList.add(`like-button--liked`);
                likeCounter.innerHTML = post.likes + 1
            }   
            else if (buttonClasses > 2){//da rivere(?)
                likeButton.classList.remove(`like-button--liked`);
            }
        })
    }
  }





