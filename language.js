// language.js

const translations = {
  lv: {
    title: "Brandupboost",
    startBtn: "Pieteikt mājaslapu"
  },
  ru: {
    title: "Brandupboost",
    startBtn: "Подать заявку на сайт"
  },
  en: {
    title: "Brandupboost",
    startBtn: "Apply for the website"
  }
};

function setLanguage(lang) {
  if (!translations[lang]) return;

  localStorage.setItem("preferredLang", lang);
  document.getElementById("title").innerText = translations[lang].title;
  document.getElementById("startBtn").innerText = translations[lang].startBtn;
}

// Automatically apply preferred language on page load
window.onload = function () {
  const savedLang = localStorage.getItem("preferredLang") || "lv";
  setLanguage(savedLang);
};

