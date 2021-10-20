const container= document.querySelector('.game');
const colorpicker=document.querySelector('#colorpicker');
const boxsize=document.querySelector("#boxsize");
const boxSizeConfirmButton=document.querySelector("#sizeConfirm");
const colorApplyButton=document.querySelector("#colorApply");
const resetButton=document.querySelector('#resetbtn');


generateGrid();
addEvent(colorpicker.value);
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
            box.style.cssText="width:100%; border:1px solid #F2C57C; border-radius:5px;"
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
function addEvent(col){
    boxes=setNewBoxes();
    /* console.log('added events'); */
    boxes.forEach((Box)=>{
/*         Box.addEventListener('onmousedown', (e)=>{
            console.log("click");
            e.target.style.background="rgba(3, 100, 3, 0.582)";
        }); */
        Box.addEventListener('mouseover', (e)=>{
            e.target.style.background=col
/*             e.target.style.cssText= */
        });
    });
}
//button script

resetButton.addEventListener('click', ()=>{
    boxes=setNewBoxes();
    for(i=0;i<boxes.length;i++){
        boxes[i].style.background="#FF6F59";
    }
    /* let size=prompt("Choose the grid side size: ");
    if(size>100){
        size=100;
    }
    generateGrid(size);
    addEvent(); */
});

//clearing the grid
function removeGrid(){
    child= container.lastElementChild;
    while(child){
        container.removeChild(child);
        child=container.lastElementChild;
    }
}




boxSizeConfirmButton.addEventListener("click", ()=>{
    console.log(boxsize.value);
    size=boxsize.value
    if(size>100){
        size=100;
    }
    generateGrid(size);
    addEvent(colorpicker.value);
});

colorApplyButton.addEventListener("click", ()=>{
    addEvent(colorpicker.value);
});


const githover=document.querySelector(".gitIcon");
const personalProjects=document.querySelector(".personalProjects");
const githover2=document.querySelector(".hiddenLayer");
const hiddenLayer=document.querySelector('.hiddenLayer')
githover.onmouseover = function(){
    personalProjects.style.cssText='height:64px';
}; 
githover.onmouseout=function(){
    personalProjects.style.cssText="height:24px";
};
githover2.onmouseover = function(){
    personalProjects.style.cssText='height:64px';
}; 
githover2.onmouseout=function(){
    personalProjects.style.cssText="height:24px";
};
