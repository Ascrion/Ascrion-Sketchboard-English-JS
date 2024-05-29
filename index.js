//Control
const btn = document.querySelector("#btn");
btn.addEventListener("click",user_input);
present_color = "black";//Tracks color changes

//Getting user defined grid size
function user_input()
{
    let row_no = prompt("Enter grid size -> between 1 to 100");

    //Max size of grid is 960 pixels, thus figure out size of each box
    let size = 960/row_no;
    grid_creator(row_no,size);

    //Adding hover functionality
    hover("black");

    //Change button from create  to reset 
    reset_btn();
}

//Creating the grid by adding div nodes to the parent div called container
function grid_creator(row_no,size)
{   const container = document.querySelector(".container");
    for (let i = 0; i < row_no; i++) {
    // Create a new row
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    container.appendChild(row);
    
    for (let j = 0; j < row_no; j++) {
        // Create a new grid element for each column in the row
        const element = document.createElement("div");
        element.setAttribute("class", "grid");
        element.style.height = `${size}px`;
        element.style.width = `${size}px`;
        row.appendChild(element);
    }
}
}

//Reset button will trigger the reset function
function reset_btn()
{   btn.textContent = "Reset"
    //remove old event listener to reduce bugs
    btn.removeEventListener("click", user_input);
    btn.addEventListener("click",reset);
}

//Reset  will wipe the grid and promt for a new one
function reset()
{   
    //Delete exisiting grid
    const container = document.querySelector(".container");
    container.innerHTML = ''; 
    //Promt for a new grid
    user_input();
}

//Change color when cursor enters a box by modifying divs with the class grid
function hover(color) {
    const divs = document.querySelectorAll(".grid");
    divs.forEach((div) => {
        div.addEventListener("mouseover", function (e) {
            e.target.style.background = color;
        });
    });
    const btn = document.querySelector("#rainbow_btn");
    btn.addEventListener("click",color_change);
}

//Button changes between eraser and black pen d
function color_change()
{
if (present_color == "black"){
    //Black to eraser
    const eraser = document.querySelector("#rainbow_btn");
    hover("white")
    present_color = "white"
    eraser.textContent = "black"//button option changed to black pen
}
else{
    //Eraser to black
    const black= document.querySelector("#rainbow_btn");
    hover("black")
    present_color = "black"
    black.textContent = "Eraser"//button option changed to eraser
}

}

