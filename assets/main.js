const lists = document.querySelectorAll("li");

const lines = document.querySelectorAll(".line");

const completed = "rgb(19, 209, 19)";

lists.forEach((list) => {
  list.addEventListener("click", () => {
    let count;
    if (list.style.background === "") {
      for (i = 0; i <= list.className; i++) {
        if (list == lists[i]) {
          count = lists[i].className;
          const para = document.getElementById(count);
          para.style.display = "initial";
        } else {
          count = lists[i].className;
          const para = document.getElementById(count);
          para.style.display = "none";
        }
        if (lines[i] && lines[i - 1]) {
          lines[i].style.background = completed;
        }
        lists[i].style.background = completed;
      }
    } else {
      let cnt;
      cnt = list.className;
      for (i = cnt; i <= lists.length; i++) {
        if (list == lists[i]) {
          if (lists[i - 1]) {
            count = lists[i - 1].className;
            const para = document.getElementById(count);
            para.style.display = "initial";
          }
        } else {
          count = lists[i - 1].className;
          const para = document.getElementById(count);
          para.style.display = "none";
        }
        if (lists[i].style.background === completed) {
          lists[i].style.background = "";
          lines[i].style.background = "";
        }
      }
    }
  });
});
