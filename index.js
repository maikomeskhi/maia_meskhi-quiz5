const form = document.getElementById("book-form");
const bookList = document.getElementById("book-list");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = form.elements.title.value;
    const author = form.elements.author.value;
    const year = form.elements.year.value;

    const li = document.createElement("li");

    const div = document.createElement("div");
    div.classList.add("section3-div");

    const titleSpan = document.createElement("span");
    titleSpan.classList.add("section3-span1");
    titleSpan.textContent = title;

    const infoSpan = document.createElement("span");
    infoSpan.classList.add("section3-span2");
    infoSpan.textContent = author + " · " + year;

    div.appendChild(titleSpan);
    div.appendChild(infoSpan);

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.classList.add("remove");
    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(div);
    li.appendChild(removeButton);

    bookList.appendChild(li);

    form.reset();
});

const removeButtons = document.querySelectorAll(".remove");

for (let button of removeButtons) {
    button.addEventListener("click", function () {
        button.parentElement.remove();
    });
}
