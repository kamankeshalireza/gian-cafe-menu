const menuData = {
  categories: [
    {
      title: "نوشیدنی‌های بر پایه اسپرسو",
      icon: "☕",
      items: [
        { name: "اسپرسو سینگل", price: 120 },
        { name: "اسپرسو دبل", price: 140 },
        { name: "اسپرسو ۵۰/۵۰", price: 160 },
        { name: "۱۰۰٪ عربیکا", price: 195, badge: "پیشنهاد باریستا" },
        { name: "اسپرسو ماکیاتو", price: 180 },
        { name: "آمریکانو", price: 160 },
        { name: "کورتادو", price: 160 },
        { name: "لته", price: 240 },
        { name: "لته فندقی", price: 260 },
        { name: "لته وانیلی", price: 260 },
        { name: "کارامل ماکیاتو", price: 260 },
        { name: "موکا", price: 260 },
        { name: "کاپوچینو", price: 210 },
      ],
    },

    {
      title: "قهوه دمی",
      icon: "⏳",
      items: [
        { name: "کمکس", price: 380 },
        { name: "V60", price: 380 },
      ],
    },

    {
      title: "نوشیدنی‌های گرم",
      icon: "🔥",
      items: [
        { name: "هات چاکلت", price: 240 },
        { name: "شیرعسل", price: 240 },
        { name: "ماسالا", price: 240 },
        { name: "وایت چاکلت", price: 240 },
        { name: "چای کرک", price: 240 },
        { name: "شیرکاکائو", price: 190 },
        { name: "ماچا لته", price: 245 },
        { name: "چیپس چاکلت", price: 270 },
      ],
    },

    {
      title: "آیس کافی",
      icon: "🧊",
      items: [
        { name: "لته", price: 210 },
        { name: "لته فندقی", price: 250 },
        { name: "لته وانیلی", price: 250 },
        { name: "کارامل ماکیاتو", price: 250 },
        { name: "موکا", price: 250 },
        { name: "آمریکانو", price: 160 },
        { name: "آفوگاتو", price: 260 },
        { name: "چاکلت", price: 240 },
        { name: "ماچا لته", price: 245 },
        { name: "ماچا بری", price: 295 },
      ],
    },

    {
      title: "دمنوش",
      icon: "🌿",
      items: [
        { name: "گیان", desc: "زعفران، هل، گل سرخ", price: 220 },
        { name: "نگار", desc: "بهارنارنج، به لیمو، آویشن", price: 210 },
        { name: "کژال", desc: "گل گاوزبان، به لیمو، گل سرخ", price: 210 },
        { name: "چای سبز", price: 180 },
        { name: "چای سیاه", price: 150 },
        { name: "چای ترش", price: 180 },
        { name: "چای کوهی", price: 180 },
      ],
    },

    {
      title: "شیک",
      icon: "🥤",
      items: [
        { name: "موزشکلات", price: 340 },
        { name: "انبه", price: 340 },
        { name: "توت فرنگی", price: 340 },
        { name: "لوتوس", price: 340 },
        { name: "کره گردو", price: 340 },
        { name: "نوتلا", price: 340 },
        { name: "بادام زمینی", price: 340 },
        {
          name: "شیک پروتئینی",
          desc: "شیر، عسل، کنجد، کره بادام زمینی، موز",
          price: 420,
        },
      ],
    },

    {
      title: "ماکتل",
      icon: "🍹",
      items: [
        { name: "گیان", desc: "عطری و گازدار", price: 260 },
        { name: "زرین", desc: "استوایی و لیمویی", price: 260 },
        { name: "رعنا", desc: "ترش و تند", price: 260 },
        { name: "نیل", desc: "شیرین و عطری", price: 260 },
      ],
    },

    {
      title: "بستنی",
      icon: "🍦",
      note: "اسکوپی ۱۱۰",
      items: [
        { name: "شکلاتی", price: 110 },
        { name: "کره گردو", price: 110 },
        { name: "توت فرنگی", price: 110 },
        { name: "انبه", price: 110 },
        { name: "وانیل", price: 110 },
        { name: "نوتلا", price: 110 },
        { name: "وانیل پسته", price: 110 },
        { name: "زعفران پسته", price: 110 },
      ],
    },

    {
      title: "بیکری",
      icon: "🍰",
      note: "باقلوا اصیل عربی در این خانه موجود است — سه شیر و تیرامیسو همراه با چای سرو می‌شود.",
      items: [
        {
          name: "بروکی",
          desc: "ترکیب کیک براونی و کوکی",
          price: 245,
        },
        { name: "تیرامیسو", price: 265 },
        { name: "سه شیر شکلاتی", price: 265 },
        { name: "سه شیر وانیلی", price: 265 },
        { name: "چیزکیک سن سباستین", price: 245 },
        { name: "کوکی شکلاتی و گردویی", price: 80 },
        { name: "کوکی نیویورکی", price: 80 },
        { name: "کروسان شکلات", price: 280 },
        { name: "رول نیویورکی", price: 290 },
      ],
    },

    {
      title: "بیرون‌بر و سرو",
      icon: "📦",
      items: [
        { name: "بیرون‌بر", price: "۱۰ الی ۵۰ هزار تومان" },
        { name: "سیروپ دلخواه", price: "۴۰ هزار تومان" },
      ],
    },
  ],
};


// ===== داده‌های اسلایدشو =====

const sliderData = [
  {
    image: STATIC_URL + "img/vibe-1.jpg",
    title: "فضای آرامش‌بخش گیان کافه",
    desc: "مکانی برای استراحت و لذت بردن از بهترین نوشیدنی‌ها",
  },
  {
    image: STATIC_URL + "img/vibe-4.jpg",
    title: "قهوه تخصصی ۱۰۰٪ عربیکا",
    desc: "با بهترین دانه‌های قهوه از مزارع منتخب جهان",
  },
  {
    image: STATIC_URL + "img/vibe-9.jpg",
    title: "دمنوش‌های گیاهی ویژه",
    desc: "ترکیبی منحصربه‌فرد از زعفران، هل و گل محمدی",
  },
  {
    image: STATIC_URL + "img/vibe-8.jpg",
    title: "بیکری تازه و خانگی",
    desc: "تیرامیسو، چیزکیک و شیرینی‌های روزانه",
  },
  {
    image: STATIC_URL + "img/vibe-2.jpg",
    title: "آیس کافی برای روزهای گرم",
    desc: "انواع نوشیدنی‌های سرد و خنک‌کننده",
  },
];


// ===== اجرا پس از بارگذاری صفحه =====

document.addEventListener("DOMContentLoaded", function () {
  initSlider();
  initNavigation();
  initAccordion();
  activateFirstSection();
});


// ===== اسلایدشو =====

function initSlider() {
  const slidesContainer = document.getElementById("slidesContainer");
  const sliderDots = document.getElementById("sliderDots");

  let currentSlide = 0;
  let slideInterval;

  sliderData.forEach((slide, index) => {
    const slideEl = document.createElement("div");

    slideEl.className = `slide ${index === 0 ? "active" : ""}`;

    slideEl.style.backgroundImage = `url('${slide.image}')`;

    slideEl.innerHTML = `
      <div class="slide-overlay">
        <h2 class="slide-title">${slide.title}</h2>
        <p class="slide-desc">${slide.desc}</p>
      </div>
    `;

    slidesContainer.appendChild(slideEl);

    const dot = document.createElement("div");

    dot.className = `dot ${index === 0 ? "active" : ""}`;

    dot.dataset.index = index;

    dot.addEventListener("click", () => goToSlide(index));

    sliderDots.appendChild(dot);
  });


  function goToSlide(index) {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");

    currentSlide = index;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");

    resetTimer();
  }


  function nextSlide() {
    const nextIndex = (currentSlide + 1) % sliderData.length;

    goToSlide(nextIndex);
  }


  function resetTimer() {
    clearInterval(slideInterval);

    slideInterval = setInterval(nextSlide, 5000);
  }


  resetTimer();
}


// ===== ناوبری دسته‌ها =====

function initNavigation() {
  const categoryNav = document.getElementById("categoryNav");

  menuData.categories.forEach((category, index) => {
    const button = document.createElement("button");

    button.className = "nav-btn";

    button.textContent = category.title;

    button.onclick = () => {

      document.querySelectorAll(".nav-btn").forEach((btn) => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      const section = document.getElementById(`cat-${index}`);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        if (!section.classList.contains("active")) {
          toggleAccordion(section.querySelector(".accordion-header"));
        }
      }
    };

    categoryNav.appendChild(button);
  });
}


// ===== آکاردئون =====

function initAccordion() {
  const accordionContainer =
    document.getElementById("accordionContainer");

  menuData.categories.forEach((category, index) => {

    const section = document.createElement("div");

    section.className = "accordion-section";

    section.id = `cat-${index}`;


    const header = document.createElement("div");

    header.className = "accordion-header";

    header.onclick = () => toggleAccordion(header);


    header.innerHTML = `
      <h3 class="section-title">
        <span class="section-icon">${category.icon}</span>
        ${category.title}
      </h3>

      <span class="accordion-toggle">
        <i class="fas fa-chevron-down"></i>
      </span>
    `;


    const content = document.createElement("div");

    content.className = "accordion-content";


    if (category.note) {
      const note = document.createElement("div");

      note.className = "section-note";

      note.textContent = category.note;

      content.appendChild(note);
    }


    const menuItems = document.createElement("div");

    menuItems.className = "menu-items";


    category.items.forEach((item) => {

      const itemDiv = document.createElement("div");

      itemDiv.className = "menu-item";


      let priceText;

      if (item.price === null || item.price === undefined) {
        priceText = "قیمت روز";

      } else if (typeof item.price === "string") {
        priceText = item.price;

      } else {
        priceText =
          new Intl.NumberFormat("fa-IR").format(item.price) +
          " هزار تومان";
      }


      itemDiv.innerHTML = `
        <div class="item-details">

          <div class="item-name">
            ${item.name}

            ${
              item.badge
                ? `<span class="badge">${item.badge}</span>`
                : ""
            }

          </div>

          ${
            item.desc
              ? `<div class="item-desc">${item.desc}</div>`
              : ""
          }

        </div>

        <div class="item-price">${priceText}</div>
      `;


      menuItems.appendChild(itemDiv);
    });


    content.appendChild(menuItems);


    section.appendChild(header);

    section.appendChild(content);

    accordionContainer.appendChild(section);
  });
}


// ===== باز و بسته کردن دسته =====

function toggleAccordion(header) {
  const section = header.closest(".accordion-section");

  const isActive = section.classList.contains("active");


  document.querySelectorAll(".accordion-section").forEach((sec) => {
    sec.classList.remove("active");
  });


  if (!isActive) {
    section.classList.add("active");
  }


  updateNavButtons();
}


// ===== فعال کردن اولین بخش =====

function activateFirstSection() {
  const firstSection =
    document.querySelector(".accordion-section");

  if (firstSection) {
    firstSection.classList.add("active");
  }


  const firstNavBtn =
    document.querySelector(".nav-btn");

  if (firstNavBtn) {
    firstNavBtn.classList.add("active");
  }
}


// ===== به‌روزرسانی دکمه‌های ناوبری =====

function updateNavButtons() {
  const navButtons =
    document.querySelectorAll(".nav-btn");

  const activeSection =
    document.querySelector(".accordion-section.active");

  if (!activeSection) return;


  const sectionId = activeSection.id;

  const sectionIndex =
    parseInt(sectionId.replace("cat-", ""));


  navButtons.forEach((btn, index) => {
    btn.classList.toggle(
      "active",
      index === sectionIndex
    );
  });
}