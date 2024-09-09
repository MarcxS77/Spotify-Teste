document.addEventListener('DOMContentLoaded', () =>{

    const artistsData = [
        { name: 'Henrique & Juliano', Image: './img/artista-henrique-juliano.jpg' },
        { name: 'Jorge & Mateus', Image: './img/artista-jorge-mateus.jpg' },
        { name: 'Zé Neto & Cristiano', Image: './img/artista-ze-neto.jpg' },
        { name: 'Gustavo Lima', Image: './img/artista-gustavo-limma.jpg' },
        { name: 'Luan Santana', Image: './img/artista-luan-santana.jpg' },
        { name: 'Mateus & Kauan', Image: './img/artista-mateus-kauan.jpg' },
    ];
    
    const albumsData = [
        {name: 'White Noise (Sleep & Relaxtion Sounds)', artist: 'Sleepy John', Image: './img/album-white-noise.jpg' },
        {name: ' O Céu Explica tudo (Ao vivo)', artist: 'Henrique & Juliano', Image: './img/album-ceu-explica.jpg' },
        {name: 'Nada como um dia após o outro', artist: 'Recionais', Image: './img/album-vida-loka.jpg' },
        {name: 'HIT ME HARD AND SOFT ', artist: 'Billie Eilish', Image: './img/album-hit-me.jpg' },
        {name: 'CAJU', artist: 'Liniker', Image: './img/album-caju.jpg' },
        {name: 'Escândalo Ìntimo', artist: 'Luíza Sonza', Image: './img/album-escandalo.jpg' },
    
    ];
    
    const artistGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')

    artistsData.forEach( artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-class')

        artistCard.innerHTML = `
        <img src ="${artist.Image}" alt="Imagem do ${artist.name}">
        <h3>${artist.name}</h3>
        <p>artista</p>
        `

artistGrid.appendChild(artistCard)


    })

    albumsData.forEach( album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-class')

        albumCard.innerHTML = `
        <img src ="${album.Image}" alt="Imagem do ${album.name}">
        <h3>${album.name}</h3>
        <p>artista</p>
        `

albumsGrid.appendChild(albumCard)


    })
    
})




