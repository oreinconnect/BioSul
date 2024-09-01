var card = document.querySelectorAll(".card");
var cardQnt = card.length;
var atual = 1;

function Dir(){
    if(card[atual] == card[7]){
        console.log("forçando inexistencia");
    }
    else if(card[atual] == card[0]){
        card[atual].classList.remove("atual");
        atual+=1;
        card[atual].classList.add("atual");
    }
    else if(card[atual] == card[6]){
        card[atual].classList.remove("atual");
        atual+=1;
        card[atual].classList.add("atual");
    }
    else{
        card[atual-1].classList.add("fora");
        card[atual].classList.remove("atual");
        atual+=1;
        card[atual].classList.add("atual");
        card[atual+1].classList.remove("fora");
    }

 
}

function Esq(){
    if(card[atual] == card[0]){
        console.log("forçando inexistencia");
    }
    else if(card[atual] == card[7]){
        card[atual].classList.remove("atual");
        atual-=1;
        card[atual].classList.add("atual");
    }
    else if(card[atual] == card[1]){
        card[atual].classList.remove("atual");
        atual-=1;
        card[atual].classList.add("atual");
    }
    else{
        card[atual+1].classList.add("fora");
        card[atual].classList.remove("atual");
        atual-=1;
        card[atual].classList.add("atual");
        card[atual-1].classList.remove("fora") ;   
    }

}