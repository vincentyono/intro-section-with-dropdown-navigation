const featuresMenu = document.getElementsByClassName("dropdown")[0];
const companyMenu = document.getElementsByClassName("dropdown")[1];
const featuresArrow = document.getElementById("features-arrow");
const companyArrow = document.getElementById("company-arrow");

featuresMenu.addEventListener("click", () => {
  const dropdownFeatures =
    document.getElementsByClassName("dropdown-features")[0];
  if (dropdownFeatures.style.display == "block") {
    featuresArrow.src = "./images/icon-arrow-down.svg";
    dropdownFeatures.style.display = "none";
    dropdownFeatures.style.opacity = 0;
  } else {
    featuresArrow.src = "./images/icon-arrow-up.svg";
    dropdownFeatures.style.display = "block";
    dropdownFeatures.style.opacity = 1;
  }
});

companyMenu.addEventListener("click", () => {
  const dropdownCompany =
    document.getElementsByClassName("dropdown-company")[0];
  if (dropdownCompany.style.display == "block") {
    companyArrow.src = "./images/icon-arrow-down.svg";
    dropdownCompany.style.display = "none";
    dropdownCompany.style.opacity = 0;
  } else {
    companyArrow.src = "./images/icon-arrow-up.svg";
    dropdownCompany.style.display = "block";
    dropdownCompany.style.opacity = 1;
  }
});
