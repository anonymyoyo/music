const music = new Audio('audio/Lithopédion CD 1 TRACK 18 (320).mp3')
// music.play();

const songs =[
    {
        id: '1',
        songName: ' Humain <br><div class="subtitle">Damso</div> ',
        poster:"image/damso.png",
    },
    {
        id: '2',
        songName: 'Filon <br><div class="subtitle">Ninho</div>',
        poster:"image/ninho.png",
    },
    {
        id: '3',
        songName: ' Robes <div class="subtitle">Dadju</div>',
        poster:"image/dadju.png",
    },
    {
        id: '4',
        songName: 'Goutte d\'eau <br><div class="subtitle">Ninho</div>',
        poster:"image/destin.png",
    },
    {
        id: '5',
        songName: 'Gotham <br><div class="subtitle">Booba</div>',
        poster:"image/gotham.png",
    },
    {
        id: '6',
        songName: 'Petit Diamant <br><div class="subtitle">Franglish</div>',
        poster:"image/mood.png",
    },
    {
        id: '7',
        songName: 'Suis-moi <br><div class="subtitle">Ronisia</div>',
        poster:"image/ronisia.png",
    },
    {
        id: '8',
        songName: 'Grain de sable <br><div class="subtitle">Booba</div>',
        poster:"image/ultra.png",
    },
    {
        id: '9',
        songName: 'Mona Lisa <br><div class="subtitle">Booba</div>',
        poster:"image/ultra.png",
    },
    {
        id: '10',
        songName: 'Suis-moi <br><div class="subtitle">Ronisia</div>',
        poster:"image/ronisia.png",
    },
    {
        id: '11',
        songName: 'Suis-moi <br><div class="subtitle">Ronisia</div>',
        poster:"image/ronisia.png",
    },
    {
        id: '12',
        songName: 'Suis-moi <br><div class="subtitle">Ronisia</div>',
        poster:"image/ronisia.png",
    },
    {
        id: '13',
        songName: 'Suis-moi <br><div class="subtitle">Ronisia</div>',
        poster:"image/ronisia.png",
    },
    {
        id: '14',
        songName: 'THERMISTOCLE <br><div class="subtitle ">GIMS</div>',
        poster:"image/popular song/GIMS.jpg",
    },
    {
        id: '15',
        songName: 'KOBE<br><div class="subtitle ">FRESH</div>',
        poster:"image/popular song/Fresh.jpg",
    },
    {
        id: '16',
        songName: 'BOUT A MILLIONdiv class="subtitle ">POP SMOKE</div>',
        poster:"image/popular song/Popsmike1.jpg",
    },
    {
        id: '17',
        songName: 'GENKIDAMA <br><div class="subtitle ">NISKA</div>',
        poster:"image/popular song/Niska.jpg",
    },
    {
        id: '18',
        songName: 'YOYO <br><div class="subtitle ">FRANGLISH</div>',
        poster:"image/popular song/mood.png",
    },
    {
        id: '19',
        songName: 'WHATS CRAKIN<br><div class="subtitle ">POP SMOKE</div>',
        poster:"image/popular song/popsmoke3.jpg",
    },
    {
        id: '20',
        songName: 'DESTIN<br><div class="subtitle ">NINHO</div>',
        poster:"image/popular song/destin.png",
    },
    {
        id: '21',
        songName: 'FILON<br><div class="subtitle ">NINHO</div>',
        poster:"image/popular song/ninho.png",
    },
    {
        id: '22',
        songName: 'GRAIN DE SABLE<br><div class="subtitle ">BOOBA</div>',
        poster:"image/ultra.png",
    },
    {
        id: '23',
        songName: 'ROBE<br><div class="subtitle ">DADJU</div>',
        poster:"image/popular song/dadju.png",
    },
    {
        id: '23',
        songName: 'ROBE<br><div class="subtitle ">DADJU</div>',
        poster:"image/ronisia.png",
    }
]
 

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

// fonction pour animer le bouton play
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', ()=>
{
    if (music.paused || music.currentTime <= 0)
    {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }
    else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

// fonction qui incremente l'index du temps (le debut du son);
let index = 0;
// index++;
// console.log(index);

 Array.from(document.getElementsByClassName('playlistPlay')).forEach((e)=>
 {
    e.addEventListener('click', (el) =>
    {
        index = el.target.id;
        console.log(index);
        // 02h:56mins:17secs
        // music.src= 'audio/${index}.mp3';
        // music.play();
    })
 })


let pop_song_left =document.getElementById('pop_song_left');
let pop_song_right =document.getElementById('pop_song_right');
let pop_song =document.getElementsByClassName('pop_song')[0];


// fonction pour faire defiller les menus horizontalement
//  de la gauche vers la droite
pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})

pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})


let pop_art_left =document.getElementById('pop_art_left');
let pop_art_right =document.getElementById('pop_art_right');
let Artists_bx =document.getElementsByClassName('Artists_bx')[0];


// fonction pour faire defiller les menus horizontalement
//  de la gauche vers la droite
pop_art_right.addEventListener('click', ()=>{
    Artists_bx.scrollLeft += 330;
})

pop_art_left.addEventListener('click', ()=>{
    Artists_bx.scrollLeft -= 330;
})
