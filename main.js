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
        likes: 80
    },
    {
        author: `Phil Mangione`,
        photo: `https://unsplash.it/300/300?image=15`,
        date: `4 mesi fa`,
        text: `Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.`,
        image: `https://unsplash.it/600/300?image=171`,
        likes: 80
    },
    {
        author: `Phil Mangione`,
        photo: `https://unsplash.it/300/300?image=15`,
        date: `4 mesi fa`,
        text: `Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.`,
        image: `https://unsplash.it/600/300?image=171`,
        likes: 80
    },
    {
        author: `Phil Mangione`,
        photo: `https://unsplash.it/300/300?image=15`,
        date: `4 mesi fa`,
        text: `Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.`,
        image: `https://unsplash.it/600/300?image=171`,
        likes: 80
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
                Piace a <b id="like-counter-1" class="js-likes-counter">${post.likes}</b> persone
            </div>
        </div> 
    </div>            
    </div>
    `
    container.innerHTML += templateDiv;
  }


// Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.