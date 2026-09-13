// @ts-nocheck
/**
 * Servibe interactive behaviour, ported from the original static template
 * (assets/js/main.js + assets/js/plugins/plugin-custom.js).
 *
 * Call `initServibe()` once from `onMount` in a top-level component. Every
 * DOM lookup is null-guarded, so it is safe to run on any page even if a
 * given widget is not present.
 */
import Swiper from 'swiper/bundle';
import AOS from 'aos';
import 'swiper/css/bundle';
import 'aos/dist/aos.css';

let started = false;

export function initServibe() {
  if (typeof window === 'undefined' || started) return;
  started = true;

  initInteractions();
  initSliders();
  AOS.init();
}

/* ------------------------------------------------------------------ *
 *  Interactions (from main.js)
 * ------------------------------------------------------------------ */
function initInteractions() {
  // modal toggle function
  function modalToggle(modalName, modalBox) {
    if (!modalName || !modalBox) return;
    modalName.addEventListener('click', () => {
      if (modalBox.classList.contains('modalOpen')) {
        modalBox.classList.remove('modalOpen');
        modalBox.classList.add('modalClose');
        document.removeEventListener('click', closeDropdownOutside);
      } else {
        modalBox.classList.add('modalOpen');
        modalBox.classList.remove('modalClose');
        document.addEventListener('click', closeDropdownOutside);
      }

      function closeDropdownOutside(event) {
        const isClickedInsideDropdown = modalBox.contains(event.target);
        const isClickedOnDropdownBtn = modalName.contains(event.target);
        if (!isClickedInsideDropdown && !isClickedOnDropdownBtn) {
          modalBox.classList.add('modalClose');
          modalBox.classList.remove('modalOpen');
          document.removeEventListener('click', closeDropdownOutside);
        }
      }
    });
  }

  // select item from modal
  function selectItemFromModal(items, modalBox, selectText) {
    items.forEach((e) =>
      e.addEventListener('click', () => {
        modalBox.classList.remove('modalClose');
        modalBox.classList.add('modalOpen');
        selectText.innerHTML = e.textContent;
      })
    );
  }

  const path = location.pathname;
  function activeMenuColor(menuItems, activeClassName) {
    menuItems.forEach((menuItem) => {
      const href = menuItem.getAttribute('href');
      if (!href) return;
      const newBaseUrl = href.replace('./', '').replace(/\/[^/]*$/, '');
      if (path.endsWith(newBaseUrl)) menuItem.classList.add(activeClassName);
    });
  }

  function activeSubmenuColor(subMenuItems, subMenuTitle, activeSubmenuClass, activeSubmenuTitleClass) {
    subMenuItems.forEach((subMenuItem) => {
      const href = subMenuItem.getAttribute('href');
      if (!href) return;
      const newBaseUrl = href.replace('./', '').replace(/\/[^/]*$/, '');
      if (path.endsWith(newBaseUrl)) {
        subMenuItem.classList.add(activeSubmenuClass);
        const parentDiv = subMenuItem.closest('div');
        parentDiv?.querySelector(subMenuTitle)?.classList.add(activeSubmenuTitleClass);
      }
    });
  }

  function togglePassword(togglePass, togglePassButton) {
    togglePassButton.addEventListener('click', () => {
      if (togglePass.type === 'password') {
        togglePass.type = 'text';
        togglePassButton.classList.remove('ph-eye-slash');
        togglePassButton.classList.add('ph-eye');
      } else {
        togglePass.type = 'password';
        togglePassButton.classList.add('ph-eye-slash');
        togglePassButton.classList.remove('ph-eye');
      }
    });
  }

  // header position set
  const scrollButton = document.querySelector('.scrollButton');
  window.addEventListener('scroll', function () {
    const mainHeader = document.querySelector('.header');
    if (mainHeader) {
      if (window.scrollY > 100) {
        mainHeader.classList.add('headerFixed');
        mainHeader.classList.remove('headerAbsolute');
      } else {
        mainHeader.classList.add('headerAbsolute');
        mainHeader.classList.remove('headerFixed');
      }
    }
    if (scrollButton) {
      if (window.scrollY > 200) {
        scrollButton.classList.remove('scrollButtonHide');
        scrollButton.classList.add('scrollButtonShow');
      } else {
        scrollButton.classList.remove('scrollButtonShow');
        scrollButton.classList.add('scrollButtonHide');
      }
    }
  });

  if (scrollButton) {
    if (window.scrollY > 200) {
      scrollButton.classList.remove('scrollButtonHide');
      scrollButton.classList.add('scrollButtonShow');
    } else {
      scrollButton.classList.remove('scrollButtonShow');
      scrollButton.classList.add('scrollButtonHide');
    }
    scrollButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile Menu Toggle
  const mobileMenuOpenButton = document.querySelector('.mobileMenuOpenButton');
  mobileMenuOpenButton?.addEventListener('click', () => {
    document.querySelector('.mobileMenuBg')?.classList.add('mobileMenuBgOpen');
    document.querySelector('.mobileMenuBg')?.classList.remove('mobileMenuBgClose');
    document.querySelector('.mobileMenu')?.classList.add('mobileMenuOpen');
    document.querySelector('.mobileMenu')?.classList.remove('mobileMenuClose');
  });

  const mobileMenuCloseButton = document.querySelector('.mobileMenuCloseButton');
  mobileMenuCloseButton?.addEventListener('click', () => {
    document.querySelector('.mobileMenuBg')?.classList.remove('mobileMenuBgOpen');
    document.querySelector('.mobileMenuBg')?.classList.add('mobileMenuBgClose');
    document.querySelector('.mobileMenu')?.classList.remove('mobileMenuOpen');
    document.querySelector('.mobileMenu')?.classList.add('mobileMenuClose');
  });

  const mobileSubMenu = document.querySelectorAll('.subMenuToggle');
  mobileSubMenu.forEach((el) =>
    el.addEventListener('click', () => {
      const activeSubMenu = document.querySelector('.subMenuOpen');
      const toggleClass = el.querySelector('.subMenu');
      if (!toggleClass) return;
      if (toggleClass.classList.contains('subMenuOpen')) {
        toggleClass.classList.add('subMenuClose');
        toggleClass.classList.remove('subMenuOpen');
      } else {
        activeSubMenu?.classList.remove('subMenuOpen');
        activeSubMenu?.classList.add('subMenuClose');
        toggleClass.classList.remove('subMenuClose');
        toggleClass.classList.add('subMenuOpen');
      }
    })
  );

  // Header Active Menu Color
  const menuList = document.querySelectorAll('.menuList');
  activeMenuColor(menuList, 'activeHeaderMenu');

  const subMenuItem = document.querySelectorAll('.subMenuItem');
  const mobileSubMenuItem = document.querySelectorAll('.mobileSubMenuItem');
  activeSubmenuColor(subMenuItem, '.subMenuTitle', 'text-y300', 'text-b300');
  activeSubmenuColor(mobileSubMenuItem, '.mobileSubMenuTitle', 'underline', 'underline');

  // professional service slider (tab switch)
  const professionalServiceButton = document.querySelectorAll('.professionalServiceButton');
  professionalServiceButton.forEach((el) =>
    el.addEventListener('click', () => {
      const existingActiveTab = document.querySelector('.professionalServiceActiveButton');
      if (!el.classList.contains('professionalServiceActiveButton')) {
        existingActiveTab?.classList.remove('professionalServiceActiveButton');
        el.classList.add('professionalServiceActiveButton');
      }
      const tabName = el.innerText.toLowerCase().replaceAll(' ', '-');
      const existingTab = document.querySelector('.activeTab');
      if (existingActiveTab && tabName !== existingActiveTab.innerText.toLowerCase()) {
        const tab = document.querySelector(`#${tabName}`);
        existingTab?.classList.remove('activeTab');
        existingTab?.classList.add('hiddenTab');
        tab?.classList.remove('hiddenTab');
        tab?.classList.add('activeTab');
      }
    })
  );

  // Circle text
  const circleText = document.querySelector('.circleText');
  if (circleText !== null) {
    circleText.innerHTML = circleText.innerText
      .split('')
      .map(
        (char, i) =>
          `<span class="absolute left-1/2 origin-[0_75px]" style="transform:rotate(${i * 12.3}deg)">${char}</span>`
      )
      .join('');
  }

  // Faq Toggle
  const faqItems = document.querySelectorAll('.faqItem');
  faqItems.forEach((el) =>
    el.addEventListener('click', () => {
      const faqAnswer = el.querySelector('.faqAnswer');
      const faqIcon = el.querySelector('.faqIcon');
      const activeFaqItem = document.querySelector('.faqItemOpen');
      const activeAnswer = document.querySelector('.faqOpen');
      const activeFaqIcon = document.querySelector('.faqIconRotate');

      if (el.classList.contains('faqItemOpen')) {
        faqAnswer?.classList.remove('faqOpen');
        faqAnswer?.classList.add('faqClose');
        faqIcon?.classList.remove('faqIconRotate');
        el.classList.remove('faqItemOpen');
      } else {
        activeFaqItem?.classList.remove('faqItemOpen');
        activeAnswer?.classList.remove('faqOpen');
        activeAnswer?.classList.add('faqClose');
        activeFaqIcon?.classList.remove('faqIconRotate');
        faqAnswer?.classList.remove('faqClose');
        faqAnswer?.classList.add('faqOpen');
        faqIcon?.classList.add('faqIconRotate');
        el.classList.add('faqItemOpen');
      }
    })
  );

  // odometer in view function
  document.querySelectorAll('.odometer').forEach((el) => {
    const odometerElementHeight = el.clientHeight;
    document.addEventListener('scroll', odometerFunction);
    function inView() {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition =
        el.getBoundingClientRect().top + window.scrollY + odometerElementHeight;
      return scrollPosition > elementPosition;
    }
    function odometerFunction() {
      if (inView()) el.textContent = el.getAttribute('data-odometer-final');
    }
  });

  // Location Modal
  modalToggle(
    document.querySelector('#locationModalOpenButton'),
    document.querySelector('#locationModal')
  );
  const locationItem = document.querySelectorAll('.locationItem');
  const locationText = document.querySelector('.locationText');
  if (locationItem.length && locationText) {
    selectItemFromModal(locationItem, document.querySelector('#locationModal'), locationText);
  }

  // Services Modal
  modalToggle(
    document.querySelector('#servicesModalOpenButton'),
    document.querySelector('#servicesModal')
  );
  const serviceItem = document.querySelectorAll('.serviceItem');
  const serviceText = document.querySelector('.serviceText');
  if (serviceItem.length && serviceText) {
    selectItemFromModal(serviceItem, document.querySelector('#servicesModal'), serviceText);
  }

  // How it works steps
  const stepButtons = document.querySelectorAll('.stepsButton');
  const step1 = document.querySelector('#step1');
  const step2 = document.querySelector('#step2');
  const step3 = document.querySelector('#step3');
  const stepOneData = document.querySelector('#step_one_data');
  const stepTwoData = document.querySelector('#step_two_data');
  const stepThreeData = document.querySelector('#step_three_data');
  stepButtons.forEach((e) =>
    e.addEventListener('click', () => {
      const activeTab = document.querySelector('.activeTab');
      const activeTabButton = document.querySelector('.activeButton');
      activeTab?.classList.remove('activeTab');
      activeTab?.classList.add('hiddenTab');
      activeTabButton?.classList.remove('activeButton');
      activeTabButton?.classList.add('inActiveButton');
      if (e.id === 'step1') {
        stepOneData?.classList.add('activeTab');
        stepOneData?.classList.remove('hiddenTab');
        step1?.classList.add('activeButton');
        step1?.classList.remove('inActiveButton');
      }
      if (e.id === 'step2') {
        stepTwoData?.classList.remove('hiddenTab');
        stepTwoData?.classList.add('activeTab');
        step2?.classList.add('activeButton');
        step2?.classList.remove('inActiveButton');
      }
      if (e.id === 'step3') {
        stepThreeData?.classList.remove('hiddenTab');
        stepThreeData?.classList.add('activeTab');
        step3?.classList.add('activeButton');
        step3?.classList.remove('inActiveButton');
      }
    })
  );

  // find worker filter modal
  const filterButton = document.querySelector('#filterButton');
  const filterButtonClose = document.querySelector('#filterModalCloseButton');
  const filterModalBg = document.querySelector('#filterModalBg');
  const filterModal = document.querySelector('#filterModal');
  filterButton?.addEventListener('click', () => {
    filterModalBg?.classList.remove('filterModalBgClose');
    filterModalBg?.classList.add('filterModalBgOpen');
    filterModal?.classList.remove('filterModalClose');
    filterModal?.classList.add('filterModalOpen');
  });
  filterButtonClose?.addEventListener('click', () => {
    filterModalBg?.classList.add('filterModalBgClose');
    filterModalBg?.classList.remove('filterModalBgOpen');
    filterModal?.classList.add('filterModalClose');
    filterModal?.classList.remove('filterModalOpen');
  });

  // chat sidebar toggle
  const chatSidebar = document.querySelector('#chatSidebar');
  document.querySelector('#chatSidebarOpen')?.addEventListener('click', () => {
    chatSidebar?.classList.add('chatSidebarOpen');
    chatSidebar?.classList.remove('chatSidebarClose');
  });
  document.querySelector('#chatSidebarClose')?.addEventListener('click', () => {
    chatSidebar?.classList.remove('chatSidebarOpen');
    chatSidebar?.classList.add('chatSidebarClose');
  });

  // comment reply
  for (const n of [1, 2, 3]) {
    const replyButton = document.querySelector(`#replyButton${n}`);
    const replyBox = document.querySelector(`#replyBox${n}`);
    replyButton?.addEventListener('click', () => {
      if (replyBox.classList.contains('closeReplyBox')) {
        replyBox.classList.add('openReplyBox');
        replyBox.classList.remove('closeReplyBox');
      } else {
        replyBox.classList.remove('openReplyBox');
        replyBox.classList.add('closeReplyBox');
      }
    });
  }

  // Dashboard header active menu color
  activeMenuColor(document.querySelectorAll('.dashboardMenu'), 'activeDashboardHeaderMenu');
  activeMenuColor(
    document.querySelectorAll('.dashboardMobileMenu'),
    'activeDashboardHeaderMobileMenu'
  );

  // Header profile / notification modals
  modalToggle(document.querySelector('#profileIcon'), document.querySelector('#profileModal'));
  modalToggle(document.querySelector('#notification'), document.querySelector('#notificationModal'));

  // calendar
  const daysTag = document.querySelector('.days');
  const currentDate = document.querySelector('.current-date');
  const prevNextIcon = document.querySelectorAll('.icons span');
  let currYear = new Date().getFullYear();
  let currMonth = new Date().getMonth();
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const renderCalendar = () => {
    const date = new Date(currYear, currMonth, 1);
    const firstDayofMonth = date.getDay();
    const lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    const lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
    const lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = '';
    for (let i = firstDayofMonth; i > 0; i--) {
      liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }
    for (let i = 1; i <= lastDateofMonth; i++) {
      const isToday =
        i === new Date().getDate() &&
        currMonth === new Date().getMonth() &&
        currYear === new Date().getFullYear()
          ? 'active'
          : '';
      liTag += `<li class="${isToday}">${i}</li>`;
    }
    for (let i = lastDayofMonth; i < 6; i++) {
      liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
  };
  if (currentDate && daysTag) {
    renderCalendar();
    prevNextIcon.forEach((icon) => {
      icon.addEventListener('click', () => {
        currMonth = icon.id === 'prev' ? currMonth - 1 : currMonth + 1;
        if (currMonth < 0 || currMonth > 11) {
          currYear = icon.id === 'prev' ? currYear - 1 : currYear + 1;
          currMonth = currMonth < 0 ? 11 : 0;
        }
        renderCalendar();
      });
    });
  }

  // Weekly Work / Total Earning month modals
  modalToggle(
    document.querySelector('#monthModalButton1'),
    document.querySelector('#monthModal1')
  );
  const month1 = document.querySelectorAll('.month1');
  const selectMonth1 = document.querySelector('.selectMonth1');
  if (month1.length && selectMonth1) {
    selectItemFromModal(month1, document.querySelector('#monthModal1'), selectMonth1);
  }
  modalToggle(
    document.querySelector('#monthModalButton2'),
    document.querySelector('#monthModal2')
  );
  const month2 = document.querySelectorAll('.month2');
  const selectMonth2 = document.querySelector('.selectMonth2');
  if (month2.length && selectMonth2) {
    selectItemFromModal(month2, document.querySelector('#monthModal2'), selectMonth2);
  }

  // Show / hide password
  const pw = (id, btnId) => {
    const input = document.querySelector(id);
    const btn = document.querySelector(btnId);
    if (input && btn) togglePassword(input, btn);
  };
  pw('#oldPassword', '#toggleOldPasswordButton');
  pw('#newPassword', '#toggleNewPasswordButton');
  pw('#confirmNewPassword', '#toggleConfirmNewPasswordButton');
}

/* ------------------------------------------------------------------ *
 *  Sliders (from plugin-custom.js)
 * ------------------------------------------------------------------ */
function initSliders() {
  const heroServiceSlider = document.querySelector('.hero-service-carousel');
  if (heroServiceSlider) {
    new Swiper(heroServiceSlider, {
      loop: true,
      speed: 12000,
      autoplay: { delay: 1 },
      spaceBetween: 24,
      slidesPerView: 1,
      breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 10 },
        300: { slidesPerView: 1, spaceBetween: 10 },
        350: { slidesPerView: 1.3, spaceBetween: 10 },
        450: { slidesPerView: 1.5, spaceBetween: 10 },
        700: { slidesPerView: 2, spaceBetween: 10 },
        1100: { slidesPerView: 3, spaceBetween: 24, centeredSlides: true }
      }
    });
  }

  document.querySelectorAll('.expert-slider-carousel').forEach((el) => {
    new Swiper(el, {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 12,
      navigation: {
        nextEl: el.querySelector('.ara-next'),
        prevEl: el.querySelector('.ara-prev')
      }
    });
  });

  document.querySelectorAll('.expert2-slider-carousel').forEach((el) => {
    new Swiper(el, {
      loop: true,
      slidesPerView: 1,
      centeredSlides: false,
      spaceBetween: 24,
      navigation: true,
      scrollbar: { el: '.swiper-scrollbar' },
      breakpoints: {
        600: { slidesPerView: 2, spaceBetween: 10 },
        950: { slidesPerView: 3, spaceBetween: 24, centeredSlides: true },
        1300: { slidesPerView: 4, spaceBetween: 24 }
      }
    });
  });

  document.querySelectorAll('.home-four-slider-carousel').forEach((el) => {
    new Swiper(el, {
      direction: 'vertical',
      loop: true,
      slidesPerView: 4,
      speed: 10000,
      autoplay: { delay: 1 },
      breakpoints: {
        0: { slidesPerView: 13, spaceBetween: 10 },
        350: { slidesPerView: 11, spaceBetween: 10 },
        400: { slidesPerView: 9, spaceBetween: 10 },
        500: { slidesPerView: 8, spaceBetween: 10 },
        620: { slidesPerView: 7, spaceBetween: 10 },
        880: { slidesPerView: 6, spaceBetween: 10 },
        1150: { slidesPerView: 5, spaceBetween: 24, centeredSlides: true },
        1500: { slidesPerView: 4, spaceBetween: 24 }
      }
    });
  });

  const homeThreeTestimonial = document.querySelector('.home3-testimonial-carousel');
  if (homeThreeTestimonial) {
    new Swiper(homeThreeTestimonial, {
      loop: true,
      autoplay: { delay: 3000 },
      spaceBetween: 24,
      slidesPerView: 1,
      navigation: {
        nextEl: homeThreeTestimonial.querySelector('.ara-next'),
        prevEl: homeThreeTestimonial.querySelector('.ara-prev')
      },
      pagination: { el: '.swiper-pagination', clickable: true },
      breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 24 },
        768: { slidesPerView: 2, spaceBetween: 24 },
        992: { slidesPerView: 2, spaceBetween: 100 }
      }
    });
  }

  document.querySelectorAll('.testimonial4-slider-carousel').forEach((el) => {
    new Swiper(el, {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 12,
      navigation: {
        nextEl: el.querySelector('.ara-next'),
        prevEl: el.querySelector('.ara-prev')
      }
    });
  });

  document.querySelectorAll('.login-slider1-carousel').forEach((el) => {
    new Swiper(el, {
      direction: 'vertical',
      loop: true,
      slidesPerView: 1,
      speed: 10000,
      autoplay: { delay: 1, reverseDirection: true },
      breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 10 },
        700: { slidesPerView: 2.2 }
      }
    });
  });

  document.querySelectorAll('.login-slider2-carousel').forEach((el) => {
    new Swiper(el, {
      direction: 'vertical',
      loop: true,
      slidesPerView: 1,
      speed: 10000,
      autoplay: { delay: 1 },
      breakpoints: {
        0: { slidesPerView: 1 },
        700: { slidesPerView: 2.2 }
      }
    });
  });
}
