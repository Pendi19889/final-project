const cards = document.querySelectorAll(".card");
const navbar_link = document.querySelectorAll(".link-a");

navbar_link.forEach((navlink) => {
  navlink.addEventListener("click", function navbar_close() {
    const navcheck = document.getElementById("nav-check");
    navcheck.checked = false;
  });
});

const targetelements = cards.forEach((card) => {
  card.classList.add("loading");
});

function keatas() {
  scroll({
    top: 0,
    behavior: "smooth",
  });
}

function lazyLoadImg() {
  //menentukan element yang akan memicu lazyload
  const imgTargets = document.querySelectorAll(".card");
  imgTargets.forEach((target) => {
    //menggambil data image setiap element
    const targetImg = target.querySelectorAll("img");

    const lazyLoad = (target) => {
      const io = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            //memindahkan lokasi file image dari data sourch ke image agar kerender / terload
            const img = entry.target;
            const src = img.getAttribute("data-src");
            img.setAttribute("src", src);
            observer.disconnect();
          }
        });
      });
      io.observe(target);
    };

    targetImg.forEach(lazyLoad);
  });
}
lazyLoadImg();

function effect() {
  const targeteffect = document.querySelectorAll(".loading");
  const effect = (targeteffect) => {
    const io = new IntersectionObserver((entrieseffect, observereffect) => {
      entrieseffect.forEach((entryeffect) => {
        if (entryeffect.isIntersecting) {
          targeteffect.classList.remove("loading");
          targeteffect.classList.add("loaded");
          //   console.log(entrieseffect, targeteffect);
          observereffect.disconnect();
        }
      });
    });
    io.observe(targeteffect);
  };
  targeteffect.forEach(effect);
}
effect();
