const menuData = {
  categories: [
    {
      title: "نوشیدنی بر پایه اسپرسو",
      icon: "☕",
      items: [
        { name: "اسپرسو", price:100-120 },
        { name: "اسپرسو 50.50", price: 135 },
        {
          name: "قهوه تخصصی (۱۰۰٪ عربیکا)",
          price: 170,
          badge: "پیشنهاد باریستا",
        },
        { name: "اسپرسو رومانو", price: 145 },
        { name: "اسپرسو ماکیاتو", price: 145 },
        { name: "آمریکانو", price: 175 },
        { name: "کورتادو", price: 165 },
        { name: "لته", price: 210 },
        { name: "موکا", price: 230 },
        { name: "کارامل ماکیاتو", price: 135 },
        { name: "کاپوچینو", price: 210 },
      ],
    },
    {
      title: "نوشیدنی گرم",
      icon: "🔥",
      items: [
        { name: "هات چاکلت", price: 190 },
        { name: "شیر عسل", price: 190 },
        { name: "ماسالا", price: 185 },
        { name: "وایت چاکلت", price: 185 },
        { name: "شیرکاکائو", price: 190 },
        { name: "ماچا لته", price: 230 },
        { name: "اسپرولینا", price: 230 },
        { name: "چای کرک", price: 190 },
      ],
    },
    {
      title: "دمنوش",
      icon: "🌿",
      items: [
        {
          name: "گیان",
          desc: "زعفران، هل، غنچه گل محمدی",
          price: 180,
          badge: "محصول ویژه",
        },
        { name: "نگار", desc: "بهار نارنج، به‌لیمو، آویشن", price: 170 },
        { name: "کژال", desc: "گل گاوزبان، به‌لیمو، گل سرخ", price: 170 },
        { name: "چای سبز", price: 150 },
        { name: "چای سیاه", price: 110 },
        { name: "چای ترش", price: 150 },
        { name: "چای کوهی", price: 130 },
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
      title: "آیس کافی",
      icon: "🧊",
      items: [
        { name: "آیس لته", price: 195 },
        { name: "آیس لته فندقی", price: 230 },
        { name: "آیس کارامل ماکیاتو", price: 230 },
        { name: "آیس موکا", price: 230 },
        { name: "آیس آمریکانو", price: 175 },
        { name: "آیس چاکلت", price: 230 },
        { name: "آیس ماچا لته", price: 240 },
        { name: "ماچابری", price: 330 },
        { name: "آیس اسپرولینا", price: 240 },
        { name: "خلیج", desc: "اسپرولینا، انبه، یخ‌شیر", price: 330 },
      ],
    },
    {
      title: "شیک",
      icon: "🥤",
      items: [
        { name: "موز شکلات", price: 310 },
        { name: "انبه (با تکه‌های میوه)", price: 310, badge: "جدید" },
        { name: "توت فرنگی", price: 310 },
        { name: "لوتوس", price: 310 },
        { name: "کره گردو", price: 310 },
        { name: "گیان", price: 310 },
        { name: "شیک پروتئینی", desc: "شیر، عسل، کره بادام زمینی", price: 380 },
      ],
    },
    {
      title: "ماکتل",
      icon: "🍹",
      items: [
        { name: "گیان", desc: "عطری و گازدار", price: 240 },
        { name: "زرین", desc: "استوایی و لیمویی", price: 240 },
        { name: "رعنا", desc: "ترش و تند", price: 240 },
        { name: "نیل", desc: "شیرین و عطری", price: 240 },
      ],
    },
    {
      title: "ژلاتو",
      icon: "🍨",
      items: [
        { name: "آفوگاتو", desc: "وانیل، شکلات", price: 245 },
        { name: "استوایی", desc: "موز، آناناس، انبه، پسته", price: 295 },
      ],
    },
    {
      title: "بستنی",
      icon: "🍦",
      items: [
        { name: "شکلاتی", price: 110 },
        { name: "کره گردو", price: 110 },
        { name: "توت فرنگی", price: 110 },
        { name: "انبه", price: 110 },
        { name: "وانیل", price: 110 },
        { name: "کیک پسته", price: 110 },
        { name: "آلبالو", price: 110 },
        { name: "وانیل پسته", price: 110 },
        { name: "زعفران پسته", price: 110 },
      ],
    },
    {
      title: "کوکی",
      icon: "🍪",
      items: [
        { name: "کوکی شکلاتی", price: 70 },
        { name: "کوکی کشمشی", price: 70 },
        { name: "کوکی جوی شکلاتی (رژیمی)", price: 85 },
      ],
    },
    {
      title: "نان‌ها",
      icon: "🥐",
      items: [
        { name: "کرافین پسته", price: 370 },
        { name: "کرافین شکلات", price: 310 },
        { name: "کرافین لوتوس", price: 370 },
        { name: "رول نیویورکی پسته", price: 370 },
        { name: "رول نیویورکی شکلات", price: 310 },
        { name: "رول نیویورکی لوتوس", price: 370 },
        { name: "چاکلت توئیست", price: 0 },
      ],
    },
    {
      title: "بیکری و چیزکیک",
      icon: "🍰",
      note: "تیرامیسو و کیک سه شیر با چای رایگان سرو می‌شوند",
      items: [
        { name: "کیک خیس شکلاتی", price: 190 },
        { name: "تیرامیسو", price: 190, badge: "پرفروش" },
        { name: "کیک سه شیر", price: 190 },
        { name: "چیزکیک روز", price: 230 },
        { name: "دبی چاکلت", price: 260 },
        { name: "چیزکیک پسته", price: 360 },
      ],
    },
    {
      title: "سرو و بیرون‌بر",
      icon: "📦",
      items: [
        { name: "سیروپ به‌دلخواه", price: 20 },
        { name: "بیرون بر", price: "۱۰ الی ۴۰ هزار تومان" },
        { name: "باقلوا اصل عربی", price: null },
      ],
    },
  ],
};
// ===== داده‌های اسلایدشو =====
const sliderData = [
  {
    image: STATIC_URL + 'img/vibe-1.jpg',
    title: 'فضای آرامش‌بخش گیان کافه',
    desc: 'مکانی برای استراحت و لذت بردن از بهترین نوشیدنی‌ها',
  },
  {
    image: STATIC_URL + 'img/vibe-4.jpg',
    title: 'قهوه تخصصی ۱۰۰٪ عربیکا',
    desc: 'با بهترین دانه‌های قهوه از مزارع منتخب جهان',
  },
  {
    image: STATIC_URL + 'img/vibe-9.jpg',
    title: 'دمنوش‌های گیاهی ویژه',
    desc: 'ترکیبی منحصربه‌فرد از زعفران، هل و گل محمدی',
  },
  {
    image: STATIC_URL + 'img/vibe-8.jpg',
    title: 'بیکری تازه و خانگی',
    desc: 'تیرامیسو، چیزکیک و شیرینی‌های روزانه',
  },
  {
    image: STATIC_URL + 'img/vibe-2.jpg',
    title: 'آیس کافی برای روزهای گرم',
    desc: 'انواع نوشیدنی‌های سرد و خنک‌کننده',
  },
];

// ===== اجرا پس از بارگذاری صفحه =====
document.addEventListener("DOMContentLoaded", function () {
  // 1. ساخت اسلایدشو
  initSlider();

  // 2. ساخت دکمه‌های ناوبری
  initNavigation();

  // 3. ساخت آکاردئون
  initAccordion();

  // 4. فعال‌سازی اولین بخش
  activateFirstSection();
});

// ===== تابع‌های اصلی =====
function initSlider() {
  const slidesContainer = document.getElementById("slidesContainer");
  const sliderDots = document.getElementById("sliderDots");

  let currentSlide = 0;
  let slideInterval;

  // ساخت اسلایدها و نقاط
  sliderData.forEach((slide, index) => {
    // ساخت اسلاید
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

    // ساخت نقاط
    const dot = document.createElement("div");
    dot.className = `dot ${index === 0 ? "active" : ""}`;
    dot.dataset.index = index;
    dot.addEventListener("click", () => goToSlide(index));
    sliderDots.appendChild(dot);
  });

  // تابع تغییر اسلاید
  function goToSlide(index) {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    // غیرفعال کردن قبلی
    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");

    // فعال کردن جدید
    currentSlide = index;
    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");

    // ریست تاینر
    resetTimer();
  }

  // اسلاید بعدی
  function nextSlide() {
    const nextIndex = (currentSlide + 1) % sliderData.length;
    goToSlide(nextIndex);
  }

  // ریست تایمر
  function resetTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
  }

  // شروع تایمر
  resetTimer();
}

function initNavigation() {
  const categoryNav = document.getElementById("categoryNav");

  menuData.categories.forEach((category, index) => {
    const button = document.createElement("button");
    button.className = "nav-btn";
    button.textContent = category.title;
    button.onclick = () => {
      // حذف کلاس active از همه دکمه‌ها
      document.querySelectorAll(".nav-btn").forEach((btn) => {
        btn.classList.remove("active");
      });

      // اضافه کردن کلاس active به دکمه کلیک شده
      button.classList.add("active");

      // اسکرول به بخش مورد نظر
      const section = document.getElementById(`cat-${index}`);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });

        // باز کردن بخش اگر بسته است
        if (!section.classList.contains("active")) {
          toggleAccordion(section.querySelector(".accordion-header"));
        }
      }
    };
    categoryNav.appendChild(button);
  });
}

function initAccordion() {
  const accordionContainer = document.getElementById("accordionContainer");

  menuData.categories.forEach((category, index) => {
    const section = document.createElement("div");
    section.className = "accordion-section";
    section.id = `cat-${index}`;

    // هدر آکاردئون
    const header = document.createElement("div");
    header.className = "accordion-header";
    header.onclick = () => toggleAccordion(header);

    header.innerHTML = `
        <h3 class="section-title">
          <span class="section-icon">${category.icon}</span>
          ${category.title}
        </h3>
        <span class="accordion-toggle"><i class="fas fa-chevron-down"></i></span>
      `;

    // محتوای آکاردئون
    const content = document.createElement("div");
    content.className = "accordion-content";

    // نکته ویژه (اگر وجود دارد)
    if (category.note) {
      const note = document.createElement("div");
      note.className = "section-note";
      note.textContent = category.note;
      content.appendChild(note);
    }

    // آیتم‌های منو
    const menuItems = document.createElement("div");
    menuItems.className = "menu-items";

    category.items.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "menu-item";

      // فرمت قیمت
      let priceText;
      if (item.price === null || item.price === undefined) {
        priceText = "قیمت روز";
      } else if (typeof item.price === "string") {
        priceText = item.price;
      } else {
        priceText =
          new Intl.NumberFormat("fa-IR").format(item.price) + " تومان";
      }

      // ساختار آیتم
      itemDiv.innerHTML = `
          <div class="item-details">
            <div class="item-name">
              ${item.name}
              ${item.badge ? `<span class="badge">${item.badge}</span>` : ""}
            </div>
            ${item.desc ? `<div class="item-desc">${item.desc}</div>` : ""}
          </div>
          <div class="item-price">${priceText}</div>
        `;

      menuItems.appendChild(itemDiv);
    });

    content.appendChild(menuItems);

    // مونتاژ نهایی
    section.appendChild(header);
    section.appendChild(content);
    accordionContainer.appendChild(section);
  });
}

// تابع کلیک بر هدر آکاردئون
function toggleAccordion(header) {
  const section = header.closest(".accordion-section");
  const isActive = section.classList.contains("active");

  // بستن همه بخش‌ها
  document.querySelectorAll(".accordion-section").forEach((sec) => {
    sec.classList.remove("active");
  });

  // اگر بخش کلیک شده قبلاً باز نبود، آن را باز کن
  if (!isActive) {
    section.classList.add("active");
  }

  // به‌روزرسانی دکمه‌های ناوبری
  updateNavButtons();
}

// فعال‌سازی اولین بخش
function activateFirstSection() {
  const firstSection = document.querySelector(".accordion-section");
  if (firstSection) {
    firstSection.classList.add("active");
  }

  // فعال‌سازی اولین دکمه ناوبری
  const firstNavBtn = document.querySelector(".nav-btn");
  if (firstNavBtn) {
    firstNavBtn.classList.add("active");
  }
}

// به‌روزرسانی دکمه‌های ناوبری بر اساس بخش فعال
function updateNavButtons() {
  const navButtons = document.querySelectorAll(".nav-btn");
  const activeSection = document.querySelector(".accordion-section.active");

  if (!activeSection) return;

  const sectionId = activeSection.id;
  const sectionIndex = parseInt(sectionId.replace("cat-", ""));

  navButtons.forEach((btn, index) => {
    btn.classList.toggle("active", index === sectionIndex);
  });
}
