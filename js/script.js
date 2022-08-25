/* ============ SHOW MENU ============ */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* ====== MENU SHOW ======*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* ====== MENU HIDEN ======*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* ============ REMOVE MENU MOVILE ============ */
const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
  const nanMenu = document.getElementById("nav-menu");
  /* When we click on each nav-link, we remove the show-menu */
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* ============ CHANGE BACKGROUND HEADER ============ */
const scrollHeader = () => {
  const header = document.getElementById("header");
  /* When the scroll is greater that 50 viewport heigth, add the scroll-header class */
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

/* ============ CALCULATE JS ============ */
const calculateForm = document.getElementById("calculate-form"),
  calculateCm = document.getElementById("calculate-cm"),
  calculateKg = document.getElementById("calculate-kg"),
  calculateMessage = document.getElementById("calculate-message");

const calculateBmi = (e) => {
  e.preventDefault();

  //Check if the fields have value
  if (calculateCm.value == "" || calculateKg.value === "") {
    //add and remove color
    calculateMessage.classList.remove("color-green");
    calculateMessage.classList.add("color-red");

    //show message
    calculateMessage.textContent = "Fill in the Heigth and Weight ";

    //remove message three seconds
    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 3000);
  } else {
    //BMI formula
    const cm = calculateCm.value / 100,
      kg = calculateKg.value,
      bmi = Math.round(kg / (cm * cm));

    //show your health status
    if (bmi < 18.5) {
      //add color and display message
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny`;
    } else if (bmi < 25) {
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy`;
    } else {
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight`;
    }

    //to clear the input field
    calculateCm.value = "";
    calculateKg.value = "";

    //remove message for seconds
    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 4000);
  }
};

calculateForm.addEventListener("submit", calculateBmi);

/* ============ SCROLL SECTIONS ACTIVE LINK ============ */
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav-menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/* ============ EMAIL JS ============ */
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message"),
  contactUser = document.getElementById("contact-user");

const sendEmail = (e) => {
  e.preventDefault();

  //check if the field has a value
  if (contactUser.value === "") {
    //add and remove color
    contactMessage.classList.remove("color-green");
    contactMessage.classList.add("color-red");

    //show message
    contactMessage.textContent = "You must enter your email";

    //remove message three seconds
    setTimeout(() => {
      contactMessage.textContent = "";
    }, 3000);
  } else {
    //serviceID - templateID - #form - publiKey
    emailjs
      .sendForm(
        "service_o9icbmk",
        "template_j1twdxb",
        "#contact-form",
        "V3gBSX_aSjKSbE4gZ"
      )
      .then(
        () => {
          //show message and add color
          contactMessage.classList.add("color-green");
          contactMessage.textContent = "You registered successfully";

          //remove message after three seconds
          setTimeout(() => {
            contactMessage.textContent = "";
          }, 3000);
        },
        (error) => {
          //mail sending error
          alert("OPPS! SOMETHINGS HAS FAILED...", error);
        }
      );

    //to clear the input field
    contactUser.valie = "";
  }
};

contactForm.addEventListener("submit", sendEmail);
