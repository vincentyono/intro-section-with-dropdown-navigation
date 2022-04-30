const featuresMenu = document.getElementsByClassName("dropdown")[0];
const companyMenu = document.getElementsByClassName("dropdown")[1];
const featuresArrow = document.getElementById("features-arrow");
const companyArrow = document.getElementById("company-arrow");
const hamburger = document.getElementById("hamburger-menu");
const closeHamburger = document.getElementById("close-hamburger-menu");
const navigation = document.getElementsByClassName("navigation")[0];
const mobileNavigationBackground = document.getElementsByClassName(
  "mobile-navigation-background"
)[0];
const navigationItems = document.getElementsByClassName("navigation-items");

featuresMenu.addEventListener("click", () => {
  const dropdownFeatures =
    document.getElementsByClassName("dropdown-features")[0];
  if (window.screen.availWidth > 660) {
    if (dropdownFeatures.style.display == "block") {
      featuresArrow.src = "./images/icon-arrow-down.svg";
      dropdownFeatures.style.display = "none";
      dropdownFeatures.style.opacity = 0;
    } else {
      featuresArrow.src = "./images/icon-arrow-up.svg";
      dropdownFeatures.style.display = "block";
      dropdownFeatures.style.opacity = 1;
    }
  } else {
    if (featuresArrow.alt == "arrow down icon") {
      featuresArrow.alt = "arrow up icon";
      featuresArrow.src = "./images/icon-arrow-up.svg";
      navigationItems[0].classList.add("navigation-features-expanded");
      dropdownFeatures.style.display = "block";
      dropdownFeatures.style.opacity = 1;
    } else {
      featuresArrow.alt = "arrow down icon";
      featuresArrow.src = "./images/icon-arrow-down.svg";
      navigationItems[0].classList.remove("navigation-features-expanded");
      dropdownFeatures.style.display = "none";
      dropdownFeatures.style.opacity = 0;
    }
  }
});

companyMenu.addEventListener("click", () => {
  const dropdownCompany =
    document.getElementsByClassName("dropdown-company")[0];
  if (window.screen.availWidth > 660) {
    if (dropdownCompany.style.display == "block") {
      companyArrow.src = "./images/icon-arrow-down.svg";
      dropdownCompany.style.display = "none";
      dropdownCompany.style.opacity = 0;
    } else {
      companyArrow.src = "./images/icon-arrow-up.svg";
      dropdownCompany.style.display = "block";
      dropdownCompany.style.opacity = 1;
    }
  } else {
    if (companyArrow.alt == "arrow down icon") {
      companyArrow.alt = "arrow up icon";
      companyArrow.src = "./images/icon-arrow-up.svg";
      navigationItems[1].classList.add("navigation-company-expanded");
      dropdownCompany.style.display = "block";
      dropdownCompany.style.opacity = 1;
    } else {
      companyArrow.alt = "arrow down icon";
      companyArrow.src = "./images/icon-arrow-down.svg";
      navigationItems[1].classList.remove("navigation-company-expanded");
      dropdownCompany.style.display = "none";
      dropdownCompany.style.opacity = 0;
    }
  }
});

hamburger.addEventListener("click", () => {
  navigation.style.right = 0;
  closeHamburger.style.right = "1em";
  mobileNavigationBackground.style.display = "block";
});

closeHamburger.addEventListener("click", () => {
  navigation.style.right = "-100vw";
  closeHamburger.style.right = "-100vw";
  mobileNavigationBackground.style.display = "none";
});
