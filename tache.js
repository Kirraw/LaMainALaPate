let newTask = document.querySelector("#newTask");
let taskName = document.querySelector("#taskName");
let taskDay = document.querySelector("#taskDay");
let hour = document.querySelector("#hour");
let radios = document.querySelectorAll('input[name="attribution"]');
let userName = document.querySelector("#userName");
let pinCode = document.querySelector("#pinCode");
let attribution;
newTask.addEventListener("submit", onSubmit);

function onSubmit(e){
    e.preventDefault();
    for (const radio of radios){
        if (radio.checked){
            attribution = radio.id;
            break;
        }
    }
    // test.innerHTML = `${taskName.value} <br> ${hour.value} <br> ${taskDay.value} <br> ${attribution} <br> ${userName.value} <br> ${pinCode.value}`;
    localStorage.setItem("taskName", taskName.value);
    localStorage.setItem("hour", hour.value);
    localStorage.setItem("taskDay", taskDay.value);
    localStorage.setItem("attribution", attribution);
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("pinCode", pinCode.value);
}
