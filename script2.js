joueur=document.querySelector('.Joueur')
let play=document.querySelector('#play')
let i=0
function jeu(){
play.addEventListener('click',function(e){
    e.preventDefault();
    let nom=['Paul','Armane','Beva','Patrick','Sarobidy','Tsiky']
    let olona=Math.floor(Math.random()*6)
    let anarana=nom[olona]
    let tableau=[]

    let nomDeJouer=document.createElement('p')
    nomDeJouer.textContent= anarana
    play.disabled=true;
    console.log(tableau[i])
    let trudare=document.createElement('button')
    trudare.textContent="Truth or Dare"
    trudare.id="boutonTD"
    joueur.appendChild(nomDeJouer);
    joueur.appendChild(trudare)
    trudare.classList.add('truedare')
    let act_image=document.createElement('img')
        act_image.src='./down-modified.png'
        act_image.style.height='50px'
        trudare.appendChild(act_image)

    trudare.addEventListener('click',function(e){
        e.preventDefault()
        let div_act=document.createElement('div')
        div_act.class='division'
        let act_ver=["Frappe une personne de meme sexe que toi ici",
            "Rentre chez toi et appel nous en video de ta chambre avec une preuve",
            "Prend ton telephone et dis bonjour à une personne que tu n'as plus parler depuis longtemps",
            "Va au Gate et prend un selfie puis tu reviens",
            "Va dire bonjour à une personne dans ce parc puis reviens sans rien dire de plus"
        ]
    
        let act_ver_random= Math.floor(Math.random()*5)
        let actionverite=document.createElement('p')
        actionverite.textContent= act_ver[act_ver_random]
        actionverite.id='textes'
        joueur.appendChild(actionverite)
        trudare.disabled=true

        
        /*div_act.appendChild(actionverite)
        div_act.appendChild(act_image)
        
        joueur.appendChild(div_act)*/

        let rejoue=document.createElement('button')
        rejoue.textContent='CONTINUE'
        rejoue.classList.add('rejoue')
        joueur.appendChild(rejoue)
       let act_image2=document.createElement('img')
        act_image2.src='./left-modified.png'
        act_image2.style.height='50px'
        rejoue.appendChild(act_image2)
        rejoue.addEventListener('click',function(e){
            e.preventDefault()
            joueur.innerHTML=''
            play.disabled= false
            trudare.disabled=false
        })
    })
})
i++
}
jeu()