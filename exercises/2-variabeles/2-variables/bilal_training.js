//variables


let name = "zaynab";  // a string
let age = 10; // a number
let isABoy = false // bolean 


// tu écris 'let' une seule fois, quand tu crée la boite. Si tu lui changes la valeur il faut plus donner le let


console.log(name);
console.log(age);
console.log(isABoy);


const nummer = 22; // const === peux pas changer la valeur


if(age > 18){
    console.log("can go to prison")
}else{
    console.log("can't go to prison");
}


if(isABoy){
    console.log("yes, it's a boy")
}else{
    console.log("no it's not");
}


if(name.length > 10){
    console.log("you got a long name", name.length)
}else{
    console.log("you got a short name", name.length);
}

//le premier element c'est 0 pas 1 dans la programmation 
for(let i = 0; i < 10; i++){
    console.log("test", i);
}

let subscribers = 5;

function clickHandler(event) {
    subscribers = subscribers +1;
    console.log("number of subscribers: " + subscribers);

    if(subscribers === 10){
        alert("YOUHOU YOU ARE THE 10th subscriber");
    }else if(subscribers === 8){
        alert("YOUHOU YOU ARE THE 8th subscriber");
    }
    else{
        console.log("thank you");
    }

 }

// ajouter un event sur le bouton pour pouvoir lui donner une foncionalité. Ici on selectione le bouton et on lui donne 
// la fonction cliickhandler qui va s'activer à chaque fois qu'on appui sur le bouton subscribe
 const btn = document.querySelector('.btn');
 btn.addEventListener('click', clickHandler);
 


 // == si c'est la même chose sans check le type 
 // === si c'est la meme chose et le type

if(1 == '1'){
    console.log("c'est la même chose")
}else{
    console.log("c'est pas la meme chose");
}

if(1 === '1'){
    console.log("c'est la même chose")
}else{
    console.log("c'est pas la meme chose");
}


//25/10 iteration part 2 (25/oktober)



let i = 0;
let size= 200;
let margin = 20;

while ( i <= 5){
    //updating itarator
    console.log("looping!", i);
    i++;
}

for ( let i =0, i <= 5; i++) {
    console.log("looping again with while!", i);
    i++;
}

for (let i =0; i < 10; i++) {
    console.log(looping again with for", i);

}

//noise (is geen standaar functie die in onze canvas zit dus toevoegen bij script)

export function perlinNoise