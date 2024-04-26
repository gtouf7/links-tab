window.onload = linkInBio____Load;

function linkInBio____Load() {

    let ddBtn = document.getElementById("dropDownBtn");
    let slBtn = document.getElementById("slideUp");
    var dropDownMenu = document.getElementById("drop-down");

    dropDownMenu.style.display = "none";
    //DROP DOWN BUTTON
    function dropDown() {
        //dropDownMenu.style.display = "block";
        ddBtn.style.display = "none";
        $(dropDownMenu).slideToggle(200);
        
    }

    //SLIDE UP BUTTON
    function slideupp() {
        $(dropDownMenu).slideUp(200);
        $(ddBtn).show(200);
        //ddBtn.style.display = "block";
    }

    //EVENTS
    ddBtn.onclick = dropDown;
    slBtn.onclick = slideupp;
}