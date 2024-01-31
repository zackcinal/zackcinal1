const movieLi = document.querySelector(".movies");
const f1Li = document.querySelector(".f1");
const photographyLi = document.querySelector(".photography");

const arr = [movieLi, f1Li, photographyLi];
const divs = document.querySelectorAll(".moviesDiv, .f1Div, .photographyDiv");

arr.forEach((section) => {
  section.addEventListener("click", (e) => {
    let classListName = e.target.classList[0];
    const divToShow = document.querySelector(`.${classListName}Div`);

    // Hide all divs
    divs.forEach((div) => {
      if (div !== divToShow) {
        div.classList.add("hide");
      }
    });

    // Toggle the display of the clicked div
    divToShow.classList.toggle("hide");
  });
});
