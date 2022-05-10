function showdiv() {
    document.getElementById("resultat").style.display = "block";
  }

  document.querySelectorAll("img").forEach((item) => {
    item.addEventListener("click", (event) => {
      const image = event.target.getAttribute("data-src");
      event.target.setAttribute("src", image);
    });
  });
  function toggleImage(){
    document.querySelector('#image').classList.toggle('hidden');
  }
  