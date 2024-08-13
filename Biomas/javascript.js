const controls = document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll("items");
const maxItems = items.length;
controls.forEach(control => {
    control.addEventListener('click', () =>{
        const isLeft = control.classList.contains('arrow-left');
        
        if(isLeft){
            currentItem -= 1;
        } else{
            currentItem += 1;
        }
    })
});