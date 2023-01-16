const divAußen = document.querySelector('.außen');


function createGrid(columns){

    for(let i=1; i<=columns;i++){
        const newLine = document.createElement('div');
        newLine.classList.add('zeile');
        divAußen.appendChild(newLine);
        console.log(i);
    }
    for(let i=0; i< columns; i++){
        const lines = document.querySelectorAll('.zeile');
        let line = lines[i];
        for(let j=0;j<columns;j++){
            const newBox = document.createElement('div');
            newBox.classList.add('box');
            line.appendChild(newBox);
        }
    }
    console.log(`${divAußen.clientHeight}px`);
    divAußen.style.width= `${divAußen.clientHeight}px`;
}


createGrid(20);
const kasten = document.querySelectorAll('.box');
kasten.forEach(box => {
    box.addEventListener('mouseover', (event) => {
        box.classList.add('hovered');
    })
});
