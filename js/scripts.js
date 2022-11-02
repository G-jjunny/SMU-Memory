window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEls) {
  new ScrollMagic.Scene({
    triggerElement: spyEls, //보여짐 여부를 감시할 요소를 지정
    triggerHooks: 0.8,
  })
    .setClassToggle(spyEls, "show")
    .addTo(new ScrollMagic.Controller());
});

const divspyEls = document.querySelectorAll("div.his-scroll-spy");
divspyEls.forEach(function (divspyEls) {
  new ScrollMagic.Scene({
    triggerElement: divspyEls, //보여짐 여부를 감시할 요소를 지정
    triggerHooks: 0.8,
  })
    .setClassToggle(divspyEls, "show")
    .addTo(new ScrollMagic.Controller());
});

const lispyEls = document.querySelectorAll("li.li-scroll-spy");
lispyEls.forEach(function (lispyEls) {
  new ScrollMagic.Scene({
    triggerElement: lispyEls, //보여짐 여부를 감시할 요소를 지정
    triggerHooks: 1,
  })
    .setClassToggle(lispyEls, "show")
    .addTo(new ScrollMagic.Controller());
});
