joueur=document.querySelector('.Joueur')
let nomDeJouer
document.querySelector('.lalao').addEventListener('click',function(e){
    e.preventDefault();
    
    let jeu=['Paul','Armane','Beva']
    for (let i = 0; i<jeu.length ; i++){
        let isanajouer= document.createElement('button');
        isanajouer.textContent=jeu[i];
        isanajouer.id=jeu[i];
    joueur.appendChild(isanajouer);
    }
    boutton=document.querySelector('button')
    boutton.addEventListener('click',function(o){
        o.preventDefault()
         nomDeJouer = boutton.target.id
         document.write(nomDeJouer)
        /* let texte= document.createElement('p')
         texte.textContent=nomDeJouer
         joueur.appendChild(texte)*/
    })
})

