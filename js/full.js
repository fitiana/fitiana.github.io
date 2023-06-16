//JQuery Module Pattern

// An object literal
var app = {
  init: function () {
    app.functionOne();
  },
  functionOne: function () {},
};
$("document").ready(function () {
  app.init();
});

(function ($) {
  "use strict";
  /*--------------------------------------------------------
        / 11. Fixed Header
        /----------------------------------------------------------*/
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 130) {
      $(".head-sticky").addClass("fix-header");
      $(".header-content").addClass("animated slideInDown");
    } else {
      $(".head-sticky").removeClass("fix-header animated slideInDown");
      $(".header-content").removeClass("animated slideInDown");
    }
  });

  $(".hamburger-menu").on("click", function () {
    $("body").toggleClass("mobile-menu-visible");
    $(this).toggleClass("active");
  });

  $("a.page-scroll").bind("click", function (event) {
    var $anchor = $(this);
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    $("html, body").animate(
      {
        scrollTop: target.offset().top - 8,
      },
      1200,
      "easeInOutExpo"
    );
    event.preventDefault();
  });

  $("a.nav-scroll").bind("click", function (event) {
    var $anchor = $(this);
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    $("html, body").animate(
      {
        scrollTop: target.offset().top - 25,
      },
      1200,
      "easeInOutExpo"
    );
    $("body").toggleClass("mobile-menu-visible");
    event.preventDefault();
  });

  // Scroll to a Specific Div
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        1500
      );
    });
  }

  $(".input-numeric").on("keyup", function (e) {
    var input = $(this);
    var val = input.val();
    var correctedVal = val.replace(/\D/g, "");
    if (correctedVal != val) input.val(correctedVal);
  });

  /***** Contact Input Animation *******/
  $("input.form-input").bind("focusin focus", function (e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    console.log("focusin");
    return false;
  });
  $(".textarea-input").bind("focusin focus", function (e) {
    e.preventDefault("focusin");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return false;
  });

  $(".contact-form_input").on("change paste keyup", function (e) {
    const val = $(this).val();

    if (val) {
      $(this).parent().addClass("has-value");
    } else {
      $(this).parent().removeClass("has-value");
    }
  });

  //Contact Popup
  if ($(".contact-box-btn").length) {
    //Show Popup
    $(".contact-box-btn").on("click", function () {
      $(".contact-popup").addClass("popup-visible");
      $("body").addClass("body-overlay");
      $("#contact-group").show();
      $("#contact-success").hide();
      grecaptcha.reset(contact_id);
    });

    //Hide Popup
    $(".contact-close-btn").on("click", function () {
      $(".contact-popup").removeClass("popup-visible");
      $("body").removeClass("body-overlay");
      //$("#contact-group").delay(8000).show();
      //$("#contact-success").delay(8000).hide();
      // $("#contact-form").trigger("reset");
      $("#contact-form .form_group").removeClass("error_form");
      //$("#contact-form .form_group").removeClass("has-value");
      $(".error-1-caption").addClass("invalid-feedback");
      $(".contact-1-btn").html("Valider");
      $("#contact-recaptcha #contact_element").removeClass("errorcaptcha");
      $("#contact_element").empty();
      console.log(":: END C ::");
      //grecaptcha.reset(contact_id);
    });
  }

  // hide modal
  function hideModal() {
    console.log(":: START ::");
    $(".espace-popup").removeClass("popup-visible");
    $("body").removeClass("body-overlay");
    //$("#espace-group").delay(8000).show();
    //$("#espace-success").delay(8000).hide();
    //$("#espace-form").trigger("reset");
    $("#espace-form .form_group").removeClass("error_form");
    //$("#espace-form .form_group").removeClass("has-value");
    //$(".contact-2-btn").html("Valider");
    $(".error-2-caption").addClass("invalid-feedback");
    $(".form-terms").removeClass("terms-invalid");
    $("#espace-form #espace_element").removeClass("errorcaptcha");
    $("#espace-form").removeClass("errorcaptcha");
    //grecaptcha.reset(espace_id);

    console.log(":: END ::");
  }

  //Mon espace Popup
  if ($(".espace-box-btn, .btn-mespace, .demande-acces-link").length > 1) {
    //Show Popup
    $(".espace-box-btn, .btn-mespace, .demande-acces-link").on(
      "click",
      function () {
        $(".espace-popup").addClass("popup-visible");
        $("body").addClass("body-overlay");
        $("#espace-group").show();
        $("#espace-success").hide();
        $(".contact-2-btn").html("Valider");
        grecaptcha.reset(espace_id);
      }
    );

    //Hide Popup
    $(".espace-close-btn").on("click", function () {
      hideModal();
    });
  }

  /*$(".form_btn .contact-1-btn_").click(function (event) {
    var isAllComplete = true;

    if (validatePhone() == false) {
      $("#form-1-tel").parent().addClass("error_form");
      $(".contact-popup .invalid-feedback").removeClass("invalid-feedback");
      isAllComplete = false;
    }

    if (validateContrat() == false) {
      $("#form-1-contrat").parent().addClass("error_form");
      $(".contact-popup .invalid-feedback").removeClass("invalid-feedback");
      isAllComplete = false;
    }

    if (isAllComplete == false) {
      return false;
    }
  });*/

  // --------------------------------- Marquage Box
  var marquageSituation = $("#marquage-button"),
    mainMarquage = $("#marquageWrapper"),
    close = $(".marquage-close");
  if (marquageSituation.length) {
    marquageSituation.on("click", function () {
      mainMarquage.addClass("show-box");
      $(".main-page-wrapper").addClass("blury-bg");
      $("body").addClass("body-overlay");
    });
    close.on("click", function () {
      mainMarquage.removeClass("show-box");
      $(".main-page-wrapper").removeClass("blury-bg");
      $("body").removeClass("body-overlay");
    });
  }


})(jQuery);
