joueur=document.querySelector('.Joueur')
let play=document.querySelector('#play')
function jeu(){
play.addEventListener('click',function(e){
    e.preventDefault();
    let nomDeJouer=document.createElement('p')
    nomDeJouer.textContent= "Nom du Joueur"
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

        let actionverite=document.createElement('p')
        actionverite.textContent='ACTION OU VERITE'
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
}
jeu()
