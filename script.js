let loaader = document.getElementById("loader")
function initaos(){
    AOS.init({
        duration:400,
        easing:"ease-in-out",
        once:true,
        mirror:false
    })
}
window.addEventListener('load',initaos)

function removeLoader(){
    loaader.remove()
}
window.addEventListener('load',removeLoader)


let studentData = [
    {name:"Abubakar Muhammed Abubakar",repo:"abubakar"},
    {name:"Asma'u Abdullahi Umar",repo:"asamu"},
    {name:"Fatima Abdulrahman Aliyu",repo:"fatima"},
    {name:"Judah Anofukei Mamiso",repo:"judah"},
    {name:"Mus'ab Adamu Kawukano",repo:"musab"},
    {name:"Nusaybah Umar Faruk",repo:"nusaiba"},
    {name:"Safiyyah Adamu Kawukano",repo:"safiyyah"},
    {name:"Samuel Joseph",repo:"samuel"},
    {name:"Umar Faruq Abdullahi",repo:"umar"},
    {name:"Usman Abulrrahamn Aliyu",repo:"usman"},
    {name:"Beulah Loveth Emmanuel",repo:"beulah"},
]

let student = document.getElementById("students")

studentData.map(x=>{
    student.innerHTML += `
         <a style="text-decoration:none;" href="https://studbootcamp.github.io/${x.repo}" data-aos="from-left" class="stud bg-light text-dark shadow m-2 col-lg-3 col-sm-5">
                    <h4>${x.name}</h4>
                </a>
        
    `
})
