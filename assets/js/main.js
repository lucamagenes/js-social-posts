//Creare una pagina che elenchi una lists di post socials a partire da un array di oggetti.

//Gli attributi minimi del modello di un post: id, contenuto, immagine, autore(nome, avatar), numero di likes, data creazione.

//Un secondo array conterrà solo gli id dei posts a cui abbiamo dato like.



const posts = [
    {
        id: 'Phil Mangione',
        nome: 'Phil Mangione',
        avatar: 'https://unsplash.it/300/300?image=',
        dataPost: '4 mesi fa',
        contenuto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquid omnis mollitia consequatur neque ea nobis molestiae cupiditate fugiat numquam atque.',
        immagine: 'https://unsplash.it/300/300?image=',
        numeroLikes: '80'
    },
    {
        id: 'Sofia Perlari',
        nome: 'Sofia Perlari',
        avatar: 'https://unsplash.it/300/300?image=',
        dataPost: '4 mesi fa',
        contenuto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquid omnis mollitia consequatur neque ea nobis molestiae cupiditate fugiat numquam atque.',
        immagine: 'https://unsplash.it/300/300?image=',
        numeroLikes: '80'
    },
    {
        id: 'John Green',
        nome: 'John Green',
        avatar: 'https://unsplash.it/300/300?image=',
        dataPost: '4 mesi fa',
        contenuto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquid omnis mollitia consequatur neque ea nobis molestiae cupiditate fugiat numquam atque.',
        immagine: 'https://unsplash.it/300/300?image=',
        numeroLikes: '80'
    }
]

renderPostPage(posts)


function renderPost(userPost) {
    return `
    <div class="container bg-light my-4">

        <div id="userProfile" class="d-flex py-2">

            <img id="userImage" class="rounded-circle"
                src="${userPost.avatar}"alt=""
                height="50px">

            <div id="infoName" class="d-flex flex-column px-4">

                <div id="userName" class="fw-bold">${userPost.nome}</div>
                <div id="publicationDate" class="fs-6 fw-light">4 mesi
                    fa
                </div>

            </div>

        </div>

        <div id="post" class="pb-4">

            <p id="postText">
                ${userPost.contenuto}
            </p>

            <img src="${userPost.immagine} "
                width="100%" height="300">

        </div>

        <div id="likeSection" class="d-flex justify-content-around
            align-items-center lh">
            <p id="likeButton" class="">
                <i class="fas fa-thumbs-up"></i>
                Mi Piace
            </p>
            <p id="numeroLikes">Piace a 80 persone</p>
        </div>

    </div>
    `
}



function renderPostPage(posts) {

    for (let i = 0; i < posts.length; i++) {
        const userPost = posts[i];
        console.log(userPost);

        document.querySelector('main').insertAdjacentHTML('beforeend', renderPost(userPost))

    }

}