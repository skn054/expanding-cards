const container = document.querySelector(".container");

function removeclassList(){
    document.querySelectorAll(".panel").forEach(element =>{
        element.classList.remove('active');
    })
}
container.addEventListener('click',(e) =>{
    removeclassList()
    e.target.classList.add('active');
})