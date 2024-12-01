joueur=document.querySelector('.Joueur')
let play=document.querySelector('#play')

function jeu(){
play.addEventListener('click',function(e){
    e.preventDefault();
    let tableau =[]
    let nom=['Paul','Armane','Beva','Patrick','Sarobidy','Tsiky','Dayan','Nathan']
    function choixnum(){
    return Math.floor(Math.random()*nom.length);
}
    for (let i=0 ; i<nom.length ; i++){
        let num
        do{
            num=choixnum();
        }while(tableau.includes(num))
            tableau.push(num)
    }
    let anarana=nom[choixnum()]
   

    let nomDeJouer=document.createElement('p')
    nomDeJouer.textContent= anarana
    play.disabled=true;
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
        let choi_act_ver= (Math.floor(Math.random()*1000))
        let dif_ver=["Dis nous un moment tellement genant que tu as vecu",
            "Avoue si tu es en colère avec une personne ici",
            "Y a-t-il une personne de different sexe que toi que tu préfères",
            "Raconte nous ta première fois",
            "Voudrais-tu que cette personne(Pointer une personne) sorte avec toi"
        ]
        let dif_act=["Frappe une personne de meme sexe que toi ici",
            "Rentre chez toi et appel nous en video de ta chambre avec une preuve",
            "Prend ton telephone et dis bonjour à une personne que tu n'as plus parler depuis longtemps",
            "Va au Gate et prend un selfie puis tu reviens",
            "Va dire bonjour à une personne dans ce parc puis reviens sans rien dire de plus"
        ]
        let actionverite=document.createElement('p')
        let act_ver_random=Math.floor(Math.random()*4)
        if (choi_act_ver%2==0){
            actionverite.innerHTML="Vérité <br> "+dif_ver[act_ver_random]
            actionverite.id='textes'    
        }
        else{
            actionverite.innerHTML="Action <br>"+dif_act[act_ver_random]
            actionverite.id='textes'    
        }
        
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
}
jeu()