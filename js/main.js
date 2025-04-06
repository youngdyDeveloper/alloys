/*global $, jQuery, alert*/
$(document).ready(function() {

  'use strict';

  // ========================================================================= //
  //  //SMOOTH SCROLL
  // ========================================================================= //


  // $(document).on("scroll", onScroll);

  // $('a[href^="#"]').on('click', function(e) {
  //   e.preventDefault();
  //   $(document).off("scroll");

  //   $('a').each(function() {
  //     $(this).removeClass('active');
  //     if ($(window).width() < 768) {
  //       $('.nav-menu').slideUp();
  //     }
  //   });

  //   $(this).addClass('active');

  //   var target = this.hash,
  //       menu = target;

  //   target = $(target);
  //   $('html, body').stop().animate({
  //     'scrollTop': target.offset().top - 80
  //   }, 500, 'swing', function() {
  //     window.location.hash = target.selector;
  //     $(document).on("scroll", onScroll);
  //   });
  // });


  // function onScroll(event) {
  //   if ($('.home').length) {
  //     var scrollPos = $(document).scrollTop();
  //     $('nav ul li a').each(function() {
  //       var currLink = $(this);
  //       var refElement = $(currLink.attr("href"));
  //     });
  //   }
  // }

  // // ========================================================================= //
  // //  //NAVBAR SHOW - HIDE
  // // ========================================================================= //


  // $(window).scroll(function() {
  //   var scroll = $(window).scrollTop();
  //   if (scroll > 200 ) {
  //     $("#main-nav, #main-nav-subpage").slideDown(700);
  //     $("#main-nav-subpage").removeClass('subpage-nav');
  //   } else {
  //     $("#main-nav").slideUp(700);
  //     $("#main-nav-subpage").hide();
  //     $("#main-nav-subpage").addClass('subpage-nav');
  //   }
  // });

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $('.responsive').on('click', function(e) {
    $('.nav-menu').slideToggle();
  });

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  // var typed = $(".typed");

  // $(function() {
  //   typed.typed({
  //     // strings: ["Alex Smith.", "Designer.", "Developer.", "Freelancer.", "Photographer"],
  //     typeSpeed: 100,
  //     loop: true,
  //   });
  // });


  // ========================================================================= //
  //  Owl Carousel Services
  // ========================================================================= //


  $('.services-carousel').owlCarousel({
      autoplay: true,
      loop: true,
      margin: 20,
      dots: true,
      nav: false,
      responsiveClass: true,
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 4 } }
    });


  // ========================================================================= //
  //  Porfolio isotope and filter
  // ========================================================================= //


  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-thumbnail',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on( 'click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });


  // ========================================================================= //
  //  magnificPopup
  // ========================================================================= //

  var magnifPopup = function() {
    $('.popup-img').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  };


  // Call the functions
  magnifPopup();

});
$(document).ready(function () {
  let data = [
    { category: "STEEL INDUSTRIES", company: "MMI STEEL LIMITED" },
    { category: "STEEL INDUSTRIES", company: "KIBOKO STEEL LIMITED" },
    { category: "STEEL INDUSTRIES", company: "STEEL MASTER LIMITED" },
    { category: "STEEL INDUSTRIES", company: "KAMAL STEEL LIMITED" },
    { category: "STEEL INDUSTRIES", company: "SITA STEEL LIMITED" },
    { category: "STEEL INDUSTRIES", company: "PIPE INDUSTRIES LIMITED" },
    { category: "STEEL INDUSTRIES", company: "TANZANIA STEEL PIPES LIMITED" },
    { category: "STEEL INDUSTRIES", company: "ALAF LIMITED" },
    { category: "FOOD INDUSTRIES", company: "KILOMBERO PLANTATIONS" },
    { category: "FOOD INDUSTRIES", company: "ALPHA CRUST LIMITED" },
    {
      category: "FOOD INDUSTRIES",
      company: "TANZANIA FISH PROCESSORS LIMITED",
    },
    { category: "FOOD INDUSTRIES", company: "MOHAMED ENTERPRISES (METL)" },
    { category: "FOOD INDUSTRIES", company: "MUSOMA FISH PROCESSERS LIMITED" },
    { category: "FOOD INDUSTRIES", company: "UNILEVER TEA TANZANIA LIMITED" },
    { category: "FOOD INDUSTRIES", company: "SAYONA FRUITS LIMITED" },
    { category: "FOOD INDUSTRIES", company: "SAYONA DRINKS LIMITED" },
    {
      category: "TRAILOR MANUFACTURERS",
      company: "SUPER DOLL TRAILOR MANUFACTURES",
    },
    {
      category: "TRAILOR MANUFACTURERS",
      company: "SIMBA TRAILOR MANUFACTURERS LTD",
    },
    {
      category: "TRAILOR MANUFACTURERS",
      company: "A.M.TRAILOR MANUFACTURERS LTD",
    },
    { category: "HVAC MAINTENANCE", company: "REMCO INTERNATIONAL" },
    { category: "HVAC MAINTENANCE", company: "ASHEREA AIR CONDITIONING" },
    { category: "PLASTIC PACKAGING INDUSTRIES", company: "KIBOKO PLASTIC LTD" },
    { category: "PLASTIC PACKAGING INDUSTRIES", company: "SILAFRICA LIMITED" },
    { category: "GOVERNMENT INSTITUTIONS", company: "TECH- COY (NAVY)" },
    {
      category: "GOVERNMENT INSTITUTIONS",
      company: "DIT-DAR ES SALAAM INSTITUTE OF TECHNOLOGY",
    },
    {
      category: "GOVERNMENT INSTITUTIONS",
      company: "VETA-VOCATIONAL EDUCATION TRAINING AUTHORITY",
    },
    { category: "GOVERNMENT INSTITUTIONS", company: "TANZANIA PORT AUTHORITY" },
  ];

  let currentPage = 1;
  let rowsPerPage = 8;

  function displayTable(page) {
    let start = (page - 1) * rowsPerPage;
    let end = start + rowsPerPage;
    let paginatedItems = data.slice(start, end);

    let tableBody = $("#companyTable tbody");
    tableBody.empty();

    paginatedItems.forEach((item) => {
      let row = `<tr>
                        <td class="red">${item.category}</td>
                        <td>${item.company}</td>
                    </tr>`;
      tableBody.append(row);
    });

    $("#pageInfo").text(
      `Page ${currentPage} of ${Math.ceil(data.length / rowsPerPage)}`
    );

    $("#prevPage").prop("disabled", currentPage === 1);
    $("#nextPage").prop(
      "disabled",
      currentPage === Math.ceil(data.length / rowsPerPage)
    );
  }

  $("#prevPage").click(function () {
    if (currentPage > 1) {
      currentPage--;
      displayTable(currentPage);
    }
  });

  $("#nextPage").click(function () {
    if (currentPage < Math.ceil(data.length / rowsPerPage)) {
      currentPage++;
      displayTable(currentPage);
    }
  });

  displayTable(currentPage);
});
