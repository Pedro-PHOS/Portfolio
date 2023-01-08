const switch_btn = document.getElementById("switch_btn");

function toggle(){
    const switch_color = document.getElementById("main");
    switch_color.classList.toggle('switch');
}

switch_btn.addEventListener("click",toggle);
z