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

const card = document.querySelector(".card");


const user = {
    name: "",
    surname: "",
    age: "",
    course: "",
    optional: "",
    coursesList: "",
};

btn.addEventListener("click", () => {
    user.name = nameUser.value;
    user.surname = surNameUser.value;
    user.age = ageUser.value;
    user.course = courseUser.value;
    user.optional = optionalUser.value;
    user.coursesList = coursesListUser.value;


    const openJson = JSON.stringify(user);

    const json = JSON.parse(openJson);
    const cardsMarkUp = createCardMarkUp(user);
    cardEl.insertAdjacentHTML("afterbegin", cardsMarkUp);
});

const btnRemade = document.querySelector(".btn-remade");


btnRemade.addEventListener("click", () => {
    user.name = nameUser.value;
    user.surname = surNameUser.value;
    user.age = ageUser.value;
    user.course = courseUser.value;
    user.optional = optionalUser.value;
    user.coursesList = coursesListUser.value;


    const openJson = JSON.stringify(user);

    const json = JSON.parse(openJson);

});



const cardEl = document.querySelector(".card");

function createCardMarkUp(user) {
    return `<li class="info-card">
        <div class="info-meta">
          <p>ім'я: ${user.name}</p>
          <p>прізвище: ${user.surname}</p>
          <p>вік: ${user.age}</p>
          <p>курс: ${user.course}</p>
          <p>факультет: ${user.optional}</p>
          <p>список курсів: ${user.coursesList}</p>
           <button class="button" data-action="open-modal">Змінити</button>
           <button class="button" data-action="open-modal">Видалити</button>
        </div>
       </li>`;
};
