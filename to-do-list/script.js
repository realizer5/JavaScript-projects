const addBtn = document.getElementById("addBtn");
const form = document.getElementById("taskForm");
const cancelBtn = document.getElementById("cancelBtn");
addBtn.addEventListener("click", hideForm);
cancelBtn.addEventListener("click", hideForm);
const submitBtn = document.getElementById("submitBtn");

function hideForm() {
    form.toggleAttribute("hidden");
}

let taskCount = localStorage.length;

form.addEventListener("submit", () => {
    const taskTitle = document.querySelector("input[type=text]").value;
    const taskDesc = document.querySelector("textarea").value;
    const data = {
        title: taskTitle,
        desc: taskDesc,
    }
    let taskKey = taskCount + 1;
    localStorage.setItem(taskKey, JSON.stringify(data));
})

let a = 1;
let arrKey = [];
for (let i = 0; i < taskCount; i++) {
    arrKey.push(localStorage.key(i));
}
arrKey.sort();
function renderTask() {
    if (taskCount) {
        while (a <= taskCount) {
            let data;
            try {
                data = JSON.parse(localStorage.getItem(a));
                if (!data) {
                    throw Error();
                }
            } catch (error) {
                a++;
                taskCount = arrKey[arrKey.length - 1];
                renderTask();
                break;
            }
            const card = `<div class="col mb-4">
                        <div class="card text-bg-dark border-light h-100">
                        <div class="card-body d-grid">
                        <h5 class="card-title">${data['title']}</h5>
                        <p class="card-text text-break">${data['desc']}</p>
                        <div class="card-btn-container text-end align-self-end">
                        <button class="btn btn-dark btn-outline-light doneBtn" data-count="${a}"><svg xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16" fill="currentColor" class="bi bi-check2"
                        viewBox="0 0 16 16">
                        <path
                        d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                        </svg></button>
                        <button class="btn btn-dark btn-outline-light ms-2 failBtn" data-count="${a}"><svg
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-x" viewBox="0 0 16 16">
                        <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                        </svg></button>
                        </div>
                        </div>
                        </div>
                        </div>`
            const taskContainer = document.getElementById("taskContainer");
            taskContainer.innerHTML += card
            a++;
        }
        const doneBtn = document.querySelectorAll(".doneBtn");
        const failBtn = document.querySelectorAll(".failBtn");
        doneBtn.forEach(btn => {
            btn.addEventListener("click", () => {
                let key = btn.getAttribute("data-count");
                deleteTask(key);
            });
        });
        failBtn.forEach(btn => {
            btn.addEventListener("click", () => {
                let key = btn.getAttribute("data-count");
                deleteTask(key);
            });
        });
    }
}
renderTask()

function deleteTask(key) {
    localStorage.removeItem(key);
    location.reload();
}

const clearAll = document.getElementById('clearAll');
clearAll.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
});
