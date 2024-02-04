const nameUser = document.querySelector("[data-name]");
const surNameUser = document.querySelector("[data-surname]");
const ageUser = document.querySelector("[data-age]");
const courseUser = document.querySelector("[data-course]");
const optionalUser = document.querySelector("[data-optional]");
const coursesListUser = document.querySelector("[data-courses]");
const btn = document.querySelector(".btn");

const btnOn = document.querySelector("[data-action]");
const btnOff = document.querySelector(`button[data-action="close-modal"]`);

function openModal() {
    document.body.classList.add("show-modal");
};

btnOn.addEventListener("click", openModal);


btnOff.addEventListener("click", closeModal);
function closeModal() {
    document.body.classList.remove("show-modal");
};



btn.addEventListener("click", () => {
    const user = {
        name: nameUser.value,
        surname: surNameUser.value,
        age: ageUser.value,
        course: courseUser.value,
       optional: optionalUser.value,
       coursesList: coursesListUser.value,
    };
    const openJson = JSON.stringify(user);
    
    const json = JSON.parse(openJson);
    console.table(json);
});


const nameUserRemade = document.querySelector("[data-nameRemade]");
const surNameUserRemade = document.querySelector("[data-surnameRemade]");
const ageUserRemade = document.querySelector("[data-ageRemade]");
const courseUserRemade = document.querySelector("[data-courseRemade]");
const optionalUserRemade = document.querySelector("[data-optionalRemade]");
const coursesListUserRemade = document.querySelector("[data-coursesRemade]");

const btnRemade = document.querySelector(".btn-remade");

btnRemade.addEventListener("click", () => {
    const user = {
        name: nameUserRemade.value,
        surname: surNameUserRemade.value,
        age: ageUserRemade.value,
        course: courseUserRemade.value,
       optional: optionalUserRemade.value,
       coursesList: coursesListUserRemade.value,
    };
    const openJson = JSON.stringify(user);
    
    const json = JSON.parse(openJson);
    console.table(json);
});
