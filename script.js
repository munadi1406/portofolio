// untuk bar menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".list");
const link = document.querySelectorAll(".link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// GSAP
const tl = gsap.timeline({ default: { duration: 0.75, ease: "power1.out" } });

tl.fromTo(".container-extra-header", { y: -100 }, { y: 0 });
tl.fromTo(".container-nav", { y: -100, opacity: -3 }, { y: 0, opacity: 1 });
tl.fromTo(
  ".wrapper-cover",
  { x: -500, opacity: -5 },
  { x: 0, opacity: 1, duration: 1.5 },
  "<"
);
// tl.fromTo('.logo',{opacity:-5,y:100},{opacity:1,y:0,duration:0.1});

function github() {
  let link = window.open(
    "https://github.com/munadi1406?tab=repositories",
    "_blank"
  );
  link.focus();
}

//  Pure Javascript
// animasi untuk bagian about
window.addEventListener("scroll", () => {
  const aboutImg = document.querySelector(".about-img");
  const contentPosition = aboutImg.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.7;
  if (contentPosition < screenPosition) {
    aboutImg.classList.add("aktif-about-img");
  } else {
    aboutImg.classList.remove("aktif-about-img");
  }
});
window.addEventListener("scroll", () => {
  const aboutData = document.querySelector(".about-data");
  const contentPosition = aboutData.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.7;
  if (contentPosition < screenPosition) {
    aboutData.classList.add("aktif-about-data");
  } else {
    aboutData.classList.remove("aktif-about-data");
  }
});
window.addEventListener("scroll", () => {
  const button = document.querySelector(".container-button");
  const contentPosition = button.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.45;
  if (contentPosition - 150 < screenPosition) {
    // 100 agar sroll berada di about button juga muncul
    button.classList.add("aktif-container-button");
  } else {
    button.classList.remove("aktif-container-button");
  }
});
// penutup bagian about

// animasi untuk bagian project
window.addEventListener("scroll", () => {
  const projectItem = document.querySelectorAll(".container-item");
  const contentPosition = projectItem[0].getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.7;
  if (contentPosition - 150 < screenPosition) {
    // (-) agar content muncul lebih cepat
    for (let index = 0; index < projectItem.length; index++) {
      projectItem[index].classList.add("container-item-aktif");
    }
    projectItem[1].style.transitionDelay = "0.2s";
    projectItem[2].style.transitionDelay = "0.4s";
    projectItem[3].style.transitionDelay = "0.6s";
    projectItem[4].style.transitionDelay = "0.8s";
  } else {
    for (let index = 0; index < projectItem.length; index++) {
      projectItem[index].classList.remove("container-item-aktif");
    }
  }
});

const linkItem = {
  linkI1: "https://google.com",
  linkI2: "https://facebook.com",
};
let github1 = document.querySelectorAll(".project-item-link");

github1[0].addEventListener("click", () => {
  // console.log(linkItem.linkI1);
  window.open(linkItem.linkI1, "blank");
  window.focus;
});

// penutup bagian project
// unutk bagian contact
window.addEventListener("scroll", () => {
  const linkContact = document.querySelectorAll(".link-contact");
  const contentPosition = linkContact[0].getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.7;
  if (contentPosition - 150 < screenPosition) {
   // (-) agar content muncul lebih cepat
    for (let index = 0; index < linkContact.length; index++) {
      linkContact[index].classList.add("link-contact-aktif");
    }
    linkContact[1].style.transitionDelay = "0.5s";
    linkContact[2].style.transitionDelay = "1s";
  } else {
    for (let index = 0; index < linkContact.length; index++) {
      linkContact[index].classList.remove("link-contact-aktif");
    }
  }
});
// penutup bagian contact
