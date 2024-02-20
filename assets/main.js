let nav_right = document.getElementsByClassName("nav-right");
let progressSection = document.querySelectorAll(".progressbar");
let skilsSection = document.querySelectorAll("#skill")[0];
let skillName = document.querySelectorAll(".skilname");
let skilsMainSection = document.querySelectorAll(".skilsSection");


let skills = [
    { name: "HTML", known: 90, initial: 0 },
    { name: "CSS", known: 95, initial: 0 },
    { name: "Js", known: 75, initial: 0 },
    { name: "PHP", known: 70, initial: 0 },
    { name: "C", known: 60, initial: 0 },
    { name: "React", known: 85, initial: 0 }
    // if add a new skill it is mendetory to add a new section in
    // html file for preview new skill 
];

const initialSkills = () => {
    progressSection.forEach((item, count) => {
        skillName[count].innerHTML = skills[count].name
        const interval = setInterval(() => {
            skills[count].initial++
            item.setAttribute("style", `background-image:conic-gradient(#ff0000 ${skills[count].initial * 3.6}deg,white 0deg);`)
            item.setAttribute("SkillsKnown", `${skills[count].initial}%`)

            if (skills[count].initial === skills[count].known) {
                clearInterval(interval)
            }
        }, 50)
    })
}



initialSkills()



const RightNav = document.getElementsByClassName("nav-right")[0]
const NavBar = document.querySelectorAll(".navbar")[0]
const OpenNavbar = () => {
    RightNav.classList.add("SideNav")
}
const CloseNavbar = () => {
    let NavbarBound = NavBar.getBoundingClientRect()
    RightNav.classList.remove("SideNav")
}

window.onscroll = () => {
    if (NavBar.getBoundingClientRect().top <= -37) {
        navButton.setAttribute("style", "display:flex")

    } else {
        navButton.removeAttribute("style")
        RightNav.classList.remove("SideNav")

    }
}

// label changer functions
const InputFocus = (e) => {
    console.log(e)

    e.previousElementSibling.classList.add("labelTop")
    // console.log(e.placeholder)
    e.placeholder = e.getAttribute("placeText")
}
const InputBlur = (e) => {
    console.log(e.value)
    if (e.value === "") {
        e.previousElementSibling.classList.remove("labelTop")
        e.placeholder = ""
    }

}

