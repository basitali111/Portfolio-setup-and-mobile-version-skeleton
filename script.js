let previewcontanier = document.querySelector(".popupcontainer");
let previewbox = previewcontanier.querySelectorAll(".model");
document.querySelectorAll(".works .workcard").forEach((workcard) => {
  workcard.onclick = () => {
    previewcontanier.style.display = "flex";
    let name = workcard.getAttribute("data-name");
    previewbox.forEach((model) => {
      let target = model.getAttribute("data-target");
      if (name == target) {
        model.classList.add("active1");
      }
    });
  };
});
previewbox.forEach(materialicons =>{
    materialicons.querySelector('.w3-xxxlarge').onclick = () =>{
        materialicons.classList.remove('active1');
        previewcontanier.style.display = 'none';  
    }
});