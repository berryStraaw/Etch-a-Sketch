const container= document.querySelector('.game');
console.log('runin');
generateGrid();
addEvent();
//Set up of the main 16x16 grid
function generateGrid(size=16){

    removeGrid();
    for(i=1;i<=size;i++){
        /* console.log('first loop'); */
        const hBox=document.createElement("div");
        hBox.classList.add("hBox");
        hBox.style.cssText="height:100%"
        container.appendChild(hBox);
            for(j=1;j<=size;j++){
            const box=document.createElement("div");
            box.classList.add("box");
            /* box.textContent=j; */
            box.style.cssText="width:100%; border:1px solid blue;"
            hBox.appendChild(box);
            }
            /* console.log('first loop done'); */
    }
}


//selecting all boxes
function setNewBoxes(){
    const boxes=document.querySelectorAll('.box');
    return boxes;
}
//event listeners for each box
function addEvent(){
    boxes=setNewBoxes();
    /* console.log('added events'); */
    boxes.forEach((Box)=>{
        Box.addEventListener('click', (e)=>{
            console.log("click");
            e.target.style.background="rgba(3, 100, 3, 0.582)";
        });
        Box.addEventListener('mouseover', (e)=>{
            e.target.style.background="rgba(13, 73, 184, 0.562)"
        });
    });
}
//button script
const resetButton=document.querySelector('#resetbtn');
resetButton.addEventListener('click', ()=>{
    boxes=setNewBoxes();
    for(i=0;i<boxes.length;i++){
        boxes[i].style.background="#d3d3d3";
    }
    let size=prompt("Choose the grid side size: ");
    if(size>100){
        size=100;
    }
    generateGrid(size);
    addEvent();
});

//clearing the grid
function removeGrid(){
    child= container.lastElementChild;
    while(child){
        container.removeChild(child);
        child=container.lastElementChild;
    }
}