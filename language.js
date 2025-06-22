const translations = {
  lv: {
    title: "Brandupboost",
    startBtn: "Pieteikt mājaslapu",
    contactsBtn: "Kontakti",
    pricingBtn: "Cenas",
    contactTitle: "Kontakti",
    contactText: "Droši raksti man, ja vēlies mājaslapu:",
    emailLabel: "E-pasts: <a href='mailto:brandupboost@gmail.com'>brandupboost@gmail.com</a>",
    backBtn: "Atpakaļ"
  },
  ru: {
    title: "Брендапбуст",
    startBtn: "Подать заявку на сайт",
    contactsBtn: "Контакты",
    pricingBtn: "Цены",
    contactTitle: "Контакты",
    contactText: "Напиши мне, если ты хочешь сайт:",
    emailLabel: "Эл. почта: <a href='mailto:brandupboost@gmail.com'>brandupboost@gmail.com</a>",
    backBtn: "Назад"
  },
  en: {
    title: "Brandupboost",
    startBtn: "Apply for the website",
    contactsBtn: "Contacts",
    pricingBtn: "Pricing",
    contactTitle: "Contact",
    contactText: "Feel free to contact me if you want a website:",
    emailLabel: "Email: <a href='mailto:brandupboost@gmail.com'>brandupboost@gmail.com</a>",
    backBtn: "Back"
  }
};

function setLanguage(lang) {
  if (!translations[lang]) return;
  localStorage.setItem("preferredLang", lang);

  const t = translations[lang];

  // Index page
  if (document.getElementById("title"))
    document.getElementById("title").innerText = t.title;

  if (document.getElementById("startBtn"))
    document.getElementById("startBtn").innerText = t.startBtn;

  if (document.getElementById("contactsBtn"))
    document.getElementById("contactsBtn").innerText = t.contactsBtn;

  if (document.getElementById("pricingBtn"))
    document.getElementById("pricingBtn").innerText = t.pricingBtn;

  // Contact page
  if (document.getElementById("contactTitle"))
    document.getElementById("contactTitle").innerText = t.contactTitle;

  if (document.getElementById("contactText"))
    document.getElementById("contactText").innerText = t.contactText;

  if (document.getElementById("emailLabel"))
    document.getElementById("emailLabel").innerHTML = t.emailLabel;

  if (document.getElementById("backBtn"))
    document.getElementById("backBtn").innerText = t.backBtn;
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferredLang") || "lv";
  setLanguage(savedLang);
});
