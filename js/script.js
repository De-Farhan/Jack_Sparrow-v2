// start wow js script
new WOW().init();
// end wow js script

// start preloader js
setTimeout(function () {
  $("#preloader").fadeOut();
}, 3000);
// end preloader js

// start switcher
$(".switcher .one").on("click", function () {
  // srart all theme color changed
  $(
    "#banner_part h3 span, #skills_part .t_text i, #skills_part .t_text h6 span, #works_part ul li a i, #client_part .icons i, #blog_part .blog_content span a, #footer_part p span"
  ).css({
    color: "#ff3300",
  });
  // end all theme color changed

  // start pseudo element background color changed
  $(
    "#banner_part .content, .title, #my_nav ul li a, #works_part .filter-btn, #client_part .client_items ul li a, .blog_part ul li button"
  ).append(
    "<style>.content:before, .title:before, a:before, .filter-btn:before, button:before{background: #ff3300 !important;}</style>"
  );
  // end pseudo element background color changed

  // start all hover & active color changed
  $(
    "#my_nav ul li a, #my_nav ul li .active, #works_part .filter-btn, #works_part .active, .vbox-close"
  ).append(
    "<style>#my_nav ul li a:hover, .active, .filter-btn:hover, .active-work, .vbox-close:hover{color: #ff3300 !important;}</style>"
  );
  // end all hover & active color changed

  // start section pseudo element background color changed
  $("#skills_part .skills_part, #counter_part, .blog_part").append(
    "<style>.skills_part:before, #counter_part:before, .blog_part:before, .skills_part:after, #counter_part:after, .blog_part:after{border-color: transparent #ff3300 #ff3300 transparent !important}</style>"
  );
  // end section pseudo element background color changed

  // start overlay gradient color changed
  $("#banner_part .overlay, #about_part .overlay").css({
    background:
      "linear-gradient(to bottom, rgba(255, 51, 0, 0.4), rgba(97, 114, 158, 0.4))",
  });
  // end overlay gradient color changed

  // start all button background color changed
  $(
    "#banner_part #button, #blog_part h4 a, #contact_part #submit, #footer_part #back_to_top"
  ).css({
    background: "#ff3300",
  });
  // end all button background color changed

  // start all icons background color changed
  $(
    "#about_part .icon, #counter_part .icon i, #contact_part .icon i, #footer_part .icon"
  ).css({
    background: "#ff3300",
  });
  // end all icons background color changed

  // start all overlays background color changed
  $(
    "#works_part .caption, #skills_part .top_overlay, #skills_part .barChart__barFill, #client_part .img"
  ).css({
    background: "#ff3300",
  });
  // end all overlays background color changed

  // start all border hover color changed
  $("body").append(
    "<style>.vbox-next span:hover, .vbox-prev span:hover{border-top-color: #ff3300 !important; border-right-color: #ff3300 !important;}</style>"
  );
  // end all border hover color changed
});

$(".switcher .two").on("click", function () {
  // srart all theme color changed
  $(
    "#banner_part h3 span, #skills_part .t_text i, #skills_part .t_text h6 span, #works_part ul li a i, #client_part .icons i, #blog_part .blog_content span a, #footer_part p span"
  ).css({
    color: "#4eb151",
  });
  // end all theme color changed

  // start pseudo element background color changed
  $(
    "#banner_part .content, .title, #my_nav ul li a, #works_part .filter-btn, #client_part .client_items ul li a, .blog_part ul li button"
  ).append(
    "<style>.content:before, .title:before, a:before, .filter-btn:before, button:before{background: #4EB151 !important;}</style>"
  );
  // end pseudo element background color changed

  // start all hover & active color changed
  $(
    "#my_nav ul li a, #my_nav ul li .active, #works_part .filter-btn, #works_part .active, .vbox-close"
  ).append(
    "<style>#my_nav ul li a:hover, .active, .filter-btn:hover, .active-work, .vbox-close:hover{color: #4EB151 !important;}</style>"
  );
  // end all hover & active color changed

  // start section pseudo element background color changed
  $("#skills_part .skills_part, #counter_part, .blog_part").append(
    "<style>.skills_part:before, #counter_part:before, .blog_part:before, .skills_part:after, #counter_part:after, .blog_part:after{border-color: transparent #4eb151 #4eb151 transparent !important}</style>"
  );
  // end section pseudo element background color changed

  // start overlay gradient color changed
  $("#banner_part .overlay, #about_part .overlay").css({
    background:
      "linear-gradient(to bottom, rgba(78, 177, 81, 0.4), rgba(97, 114, 158, 0.4))",
  });
  // end overlay gradient color changed

  // start all button background color changed
  $(
    "#banner_part #button, #blog_part h4 a, #contact_part #submit, #footer_part #back_to_top"
  ).css({
    background: "#4eb151",
  });
  // end all button background color changed

  // start all icons background color changed
  $(
    "#about_part .icon, #counter_part .icon i, #contact_part .icon i, #footer_part .icon"
  ).css({
    background: "#4eb151",
  });
  // end all icons background color changed

  // start all overlays background color changed
  $(
    "#works_part .caption, #skills_part .top_overlay, #skills_part .barChart__barFill, #client_part .img"
  ).css({
    background: "#4eb151",
  });
  // end all overlays background color changed

  // start all border hover color changed
  $("body").append(
    "<style>.vbox-next span:hover, .vbox-prev span:hover{border-top-color: #4eb151 !important; border-right-color: #4eb151 !important;}</style>"
  );
  // end all border hover color changed
});

$(".switcher .three").on("click", function () {
  // srart all theme color changed
  $(
    "#banner_part h3 span, #skills_part .t_text i, #skills_part .t_text h6 span, #works_part ul li a i, #client_part .icons i, #blog_part .blog_content span a, #footer_part p span"
  ).css({
    color: "#df2620",
  });
  // end all theme color changed

  // start pseudo element background color changed
  $(
    "#banner_part .content, .title, #my_nav ul li a, #works_part .filter-btn, #client_part .client_items ul li a, .blog_part ul li button"
  ).append(
    "<style>.content:before, .title:before, a:before, .filter-btn:before, button:before{background: #df2620 !important;}</style>"
  );
  // end pseudo element background color changed

  // start all hover & active color changed
  $(
    "#my_nav ul li a, #my_nav ul li .active, #works_part .filter-btn, #works_part .active, .vbox-close"
  ).append(
    "<style>#my_nav ul li a:hover, .active, .filter-btn:hover, .active-work, .vbox-close:hover{color: #df2620 !important;}</style>"
  );
  // end all hover & active color changed

  // start section pseudo element background color changed
  $("#skills_part .skills_part, #counter_part, .blog_part").append(
    "<style>.skills_part:before, #counter_part:before, .blog_part:before, .skills_part:after, #counter_part:after, .blog_part:after{border-color: transparent #df2620 #df2620 transparent !important}</style>"
  );
  // end section pseudo element background color changed

  // start overlay gradient color changed
  $("#banner_part .overlay, #about_part .overlay").css({
    background:
      "linear-gradient(to bottom, rgba(223, 38, 32, 0.4), rgba(97, 114, 158, 0.4))",
  });
  // end overlay gradient color changed

  // start all button background color changed
  $(
    "#banner_part #button, #blog_part h4 a, #contact_part #submit, #footer_part #back_to_top"
  ).css({
    background: "#df2620",
  });
  // end all button background color changed

  // start all icons background color changed
  $(
    "#about_part .icon, #counter_part .icon i, #contact_part .icon i, #footer_part .icon"
  ).css({
    background: "#df2620",
  });
  // end all icons background color changed

  // start all overlays background color changed
  $(
    "#works_part .caption, #skills_part .top_overlay, #skills_part .barChart__barFill, #client_part .img"
  ).css({
    background: "#df2620",
  });

  // start all border hover color changed
  $("body").append(
    "<style>.vbox-next span:hover, .vbox-prev span:hover{border-top-color: #df2620 !important; border-right-color: #df2620 !important;}</style>"
  );
  // end all border hover color changed

  // end all overlays background color changed
});

$(".switcher .four").on("click", function () {
  // srart all theme color changed
  $(
    "#banner_part h3 span, #skills_part .t_text i, #skills_part .t_text h6 span, #works_part ul li a i, #client_part .icons i, #blog_part .blog_content span a, #footer_part p span"
  ).css({
    color: "#ff3377",
  });
  // end all theme color changed

  // start pseudo element background color changed
  $(
    "#banner_part .content, .title, #my_nav ul li a, #works_part .filter-btn, #client_part .client_items ul li a, .blog_part ul li button"
  ).append(
    "<style>.content:before, .title:before, a:before, .filter-btn:before, button:before{background: #ff3377 !important;}</style>"
  );
  // end pseudo element background color changed

  // start all hover & active color changed
  $(
    "#my_nav ul li a, #my_nav ul li .active, #works_part .filter-btn, #works_part .active, .vbox-close"
  ).append(
    "<style>#my_nav ul li a:hover, .active, .filter-btn:hover, .active-work, .vbox-close:hover{color: #ff3377 !important;}</style>"
  );
  // end all hover & active color changed

  // start section pseudo element background color changed
  $("#skills_part .skills_part, #counter_part, .blog_part").append(
    "<style>.skills_part:before, #counter_part:before, .blog_part:before, .skills_part:after, #counter_part:after, .blog_part:after{border-color: transparent #ff3377 #ff3377 transparent !important}</style>"
  );
  // end section pseudo element background color changed

  // start overlay gradient color changed
  $("#banner_part .overlay, #about_part .overlay").css({
    background:
      "linear-gradient(to bottom, rgba(255, 51, 119, 0.4), rgba(97, 114, 158, 0.4))",
  });
  // end overlay gradient color changed

  // start all button background color changed
  $(
    "#banner_part #button, #blog_part h4 a, #contact_part #submit, #footer_part #back_to_top"
  ).css({
    background: "#ff3377",
  });
  // end all button background color changed

  // start all icons background color changed
  $(
    "#about_part .icon, #counter_part .icon i, #contact_part .icon i, #footer_part .icon"
  ).css({
    background: "#ff3377",
  });
  // end all icons background color changed

  // start all overlays background color changed
  $(
    "#works_part .caption, #skills_part .top_overlay, #skills_part .barChart__barFill, #client_part .img"
  ).css({
    background: "#ff3377",
  });

  // start all border hover color changed
  $("body").append(
    "<style>.vbox-next span:hover, .vbox-prev span:hover{border-top-color: #ff3377 !important; border-right-color: #ff3377 !important;}</style>"
  );
  // end all border hover color changed

  // end all overlays background color changed
});

$(".switcher .five").on("click", function () {
  // srart all theme color changed
  $(
    "#banner_part h3 span, #skills_part .t_text i, #skills_part .t_text h6 span, #works_part ul li a i, #client_part .icons i, #blog_part .blog_content span a, #footer_part p span"
  ).css({
    color: "#0fa395",
  });
  // end all theme color changed

  // start pseudo element background color changed
  $(
    "#banner_part .content, .title, #my_nav ul li a, #works_part .filter-btn, #client_part .client_items ul li a, .blog_part ul li button"
  ).append(
    "<style>.content:before, .title:before, a:before, .filter-btn:before, button:before{background: #0fa395 !important;}</style>"
  );
  // end pseudo element background color changed

  // start all hover & active color changed
  $(
    "#my_nav ul li a, #my_nav ul li .active, #works_part .filter-btn, #works_part .active, .vbox-close"
  ).append(
    "<style>#my_nav ul li a:hover, .active, .filter-btn:hover, .active-work, .vbox-close:hover{color: #0fa395 !important;}</style>"
  );
  // end all hover & active color changed

  // start section pseudo element background color changed
  $("#skills_part .skills_part, #counter_part, .blog_part").append(
    "<style>.skills_part:before, #counter_part:before, .blog_part:before, .skills_part:after, #counter_part:after, .blog_part:after{border-color: transparent #0fa395 #0fa395 transparent !important}</style>"
  );
  // end section pseudo element background color changed

  // start overlay gradient color changed
  $("#banner_part .overlay, #about_part .overlay").css({
    background:
      "linear-gradient(to bottom, rgba(15, 163, 148, 0.4), rgba(97, 114, 158, 0.4))",
  });
  // end overlay gradient color changed

  // start all button background color changed
  $(
    "#banner_part #button, #blog_part h4 a, #contact_part #submit, #footer_part #back_to_top"
  ).css({
    background: "#0fa395",
  });
  // end all button background color changed

  // start all icons background color changed
  $(
    "#about_part .icon, #counter_part .icon i, #contact_part .icon i, #footer_part .icon"
  ).css({
    background: "#0fa395",
  });
  // end all icons background color changed

  // start all overlays background color changed
  $(
    "#works_part .caption, #skills_part .top_overlay, #skills_part .barChart__barFill, #client_part .img"
  ).css({
    background: "#0fa395",
  });

  // start all border hover color changed
  $("body").append(
    "<style>.vbox-next span:hover, .vbox-prev span:hover{border-top-color: #0fa395 !important; border-right-color: #0fa395 !important;}</style>"
  );
  // end all border hover color changed

  // end all overlays background color changed
});

$(".switcher .six").on("click", function () {
  // srart all theme color changed
  $(
    "#banner_part h3 span, #skills_part .t_text i, #skills_part .t_text h6 span, #works_part ul li a i, #client_part .icons i, #blog_part .blog_content span a, #footer_part p span"
  ).css({
    color: "#6f4c9a",
  });
  // end all theme color changed

  // start pseudo element background color changed
  $(
    "#banner_part .content, .title, #my_nav ul li a, #works_part .filter-btn, #client_part .client_items ul li a, .blog_part ul li button"
  ).append(
    "<style>.content:before, .title:before, a:before, .filter-btn:before, button:before{background: #6f4c9a !important;}</style>"
  );
  // end pseudo element background color changed

  // start all hover & active color changed
  $(
    "#my_nav ul li a, #my_nav ul li .active, #works_part .filter-btn, #works_part .active, .vbox-close"
  ).append(
    "<style>#my_nav ul li a:hover, .active, .filter-btn:hover, .active-work, .vbox-close:hover{color: #6f4c9a !important;}</style>"
  );
  // end all hover & active color changed

  // start section pseudo element background color changed
  $("#skills_part .skills_part, #counter_part, .blog_part").append(
    "<style>.skills_part:before, #counter_part:before, .blog_part:before, .skills_part:after, #counter_part:after, .blog_part:after{border-color: transparent #6f4c9a #6f4c9a transparent !important}</style>"
  );
  // end section pseudo element background color changed

  // start overlay gradient color changed
  $("#banner_part .overlay, #about_part .overlay").css({
    background:
      "linear-gradient(to bottom, rgba(111, 76, 154, 0.4), rgba(97, 114, 158, 0.4))",
  });
  // end overlay gradient color changed

  // start all button background color changed
  $(
    "#banner_part #button, #blog_part h4 a, #contact_part #submit, #footer_part #back_to_top"
  ).css({
    background: "#6f4c9a",
  });
  // end all button background color changed

  // start all icons background color changed
  $(
    "#about_part .icon, #counter_part .icon i, #contact_part .icon i, #footer_part .icon"
  ).css({
    background: "#6f4c9a",
  });
  // end all icons background color changed

  // start all overlays background color changed
  $(
    "#works_part .caption, #skills_part .top_overlay, #skills_part .barChart__barFill, #client_part .img"
  ).css({
    background: "#6f4c9a",
  });

  // start all border hover color changed
  $("body").append(
    "<style>.vbox-next span:hover, .vbox-prev span:hover{border-top-color: #6f4c9a !important; border-right-color: #6f4c9a !important;}</style>"
  );
  // end all border hover color changed

  // end all overlays background color changed
});

$(".switcher .seven").on("click", function () {
  // srart all theme color changed
  $(
    "#banner_part h3 span, #skills_part .t_text i, #skills_part .t_text h6 span, #works_part ul li a i, #client_part .icons i, #blog_part .blog_content span a, #footer_part p span"
  ).css({
    color: "#ff9900",
  });
  // end all theme color changed

  // start pseudo element background color changed
  $(
    "#banner_part .content, .title, #my_nav ul li a, #works_part .filter-btn, #client_part .client_items ul li a, .blog_part ul li button"
  ).append(
    "<style>.content:before, .title:before, a:before, .filter-btn:before, button:before{background: #ff9900 !important;}</style>"
  );
  // end pseudo element background color changed

  // start all hover & active color changed
  $(
    "#my_nav ul li a, #my_nav ul li .active, #works_part .filter-btn, #works_part .active, .vbox-close"
  ).append(
    "<style>#my_nav ul li a:hover, .active, .filter-btn:hover, .active-work, .vbox-close:hover{color: #ff9900 !important;}</style>"
  );
  // end all hover & active color changed

  // start section pseudo element background color changed
  $("#skills_part .skills_part, #counter_part, .blog_part").append(
    "<style>.skills_part:before, #counter_part:before, .blog_part:before, .skills_part:after, #counter_part:after, .blog_part:after{border-color: transparent #ff9900 #ff9900 transparent !important}</style>"
  );
  // end section pseudo element background color changed

  // start overlay gradient color changed
  $("#banner_part .overlay, #about_part .overlay").css({
    background:
      "linear-gradient(to bottom, rgba(255, 153, 0, 0.4), rgba(97, 114, 158, 0.4))",
  });
  // end overlay gradient color changed

  // start all button background color changed
  $(
    "#banner_part #button, #blog_part h4 a, #contact_part #submit, #footer_part #back_to_top"
  ).css({
    background: "#ff9900",
  });
  // end all button background color changed

  // start all icons background color changed
  $(
    "#about_part .icon, #counter_part .icon i, #contact_part .icon i, #footer_part .icon"
  ).css({
    background: "#ff9900",
  });
  // end all icons background color changed

  // start all overlays background color changed
  $(
    "#works_part .caption, #skills_part .top_overlay, #skills_part .barChart__barFill, #client_part .img"
  ).css({
    background: "#ff9900",
  });

  // start all border hover color changed
  $("body").append(
    "<style>.vbox-next span:hover, .vbox-prev span:hover{border-top-color: #ff9900 !important; border-right-color: #ff9900 !important;}</style>"
  );
  // end all border hover color changed

  // end all overlays background color changed
});

$(".switcher .eight").on("click", function () {
  // srart all theme color changed
  $(
    "#banner_part h3 span, #skills_part .t_text i, #skills_part .t_text h6 span, #works_part ul li a i, #client_part .icons i, #blog_part .blog_content span a, #footer_part p span"
  ).css({
    color: "#4d4dff",
  });
  // end all theme color changed

  // start pseudo element background color changed
  $(
    "#banner_part .content, .title, #my_nav ul li a, #works_part .filter-btn, #client_part .client_items ul li a, .blog_part ul li button"
  ).append(
    "<style>.content:before, .title:before, a:before, .filter-btn:before, button:before{background: #4d4dff !important;}</style>"
  );
  // end pseudo element background color changed

  // start all hover & active color changed
  $(
    "#my_nav ul li a, #my_nav ul li .active, #works_part .filter-btn, #works_part .active, .vbox-close"
  ).append(
    "<style>#my_nav ul li a:hover, .active, .filter-btn:hover, .active-work, .vbox-close:hover{color: #4d4dff !important;}</style>"
  );
  // end all hover & active color changed

  // start section pseudo element background color changed
  $("#skills_part .skills_part, #counter_part, .blog_part").append(
    "<style>.skills_part:before, #counter_part:before, .blog_part:before, .skills_part:after, #counter_part:after, .blog_part:after{border-color: transparent #4d4dff #4d4dff transparent !important}</style>"
  );
  // end section pseudo element background color changed

  // start overlay gradient color changed
  $("#banner_part .overlay, #about_part .overlay").css({
    background:
      "linear-gradient(to bottom, rgba(77, 77, 255, 0.4), rgba(97, 114, 158, 0.4))",
  });
  // end overlay gradient color changed

  // start all button background color changed
  $(
    "#banner_part #button, #blog_part h4 a, #contact_part #submit, #footer_part #back_to_top"
  ).css({
    background: "#4d4dff",
  });
  // end all button background color changed

  // start all icons background color changed
  $(
    "#about_part .icon, #counter_part .icon i, #contact_part .icon i, #footer_part .icon"
  ).css({
    background: "#4d4dff",
  });
  // end all icons background color changed

  // start all overlays background color changed
  $(
    "#works_part .caption, #skills_part .top_overlay, #skills_part .barChart__barFill, #client_part .img"
  ).css({
    background: "#4d4dff",
  });

  // start all border hover color changed
  $("body").append(
    "<style>.vbox-next span:hover, .vbox-prev span:hover{border-top-color: #4d4dff !important; border-right-color: #4d4dff !important;}</style>"
  );
  // end all border hover color changed

  // end all overlays background color changed
});

$(".switcher .nine").on("click", function () {
  // srart all theme color changed
  $(
    "#banner_part h3 span, #skills_part .t_text i, #skills_part .t_text h6 span, #works_part ul li a i, #client_part .icons i, #blog_part .blog_content span a, #footer_part p span"
  ).css({
    color: "#b300b3",
  });
  // end all theme color changed

  // start pseudo element background color changed
  $(
    "#banner_part .content, .title, #my_nav ul li a, #works_part .filter-btn, #client_part .client_items ul li a, .blog_part ul li button"
  ).append(
    "<style>.content:before, .title:before, a:before, .filter-btn:before, button:before{background: #b300b3 !important;}</style>"
  );
  // end pseudo element background color changed

  // start all hover & active color changed
  $(
    "#my_nav ul li a, #my_nav ul li .active, #works_part .filter-btn, #works_part .active, .vbox-close"
  ).append(
    "<style>#my_nav ul li a:hover, .active, .filter-btn:hover, .active-work, .vbox-close:hover{color: #b300b3 !important;}</style>"
  );
  // end all hover & active color changed

  // start section pseudo element background color changed
  $("#skills_part .skills_part, #counter_part, .blog_part").append(
    "<style>.skills_part:before, #counter_part:before, .blog_part:before, .skills_part:after, #counter_part:after, .blog_part:after{border-color: transparent #b300b3 #b300b3 transparent !important}</style>"
  );
  // end section pseudo element background color changed

  // start overlay gradient color changed
  $("#banner_part .overlay, #about_part .overlay").css({
    background:
      "linear-gradient(to bottom, rgba(179, 0, 179, 0.4), rgba(97, 114, 158, 0.4))",
  });
  // end overlay gradient color changed

  // start all button background color changed
  $(
    "#banner_part #button, #blog_part h4 a, #contact_part #submit, #footer_part #back_to_top"
  ).css({
    background: "#b300b3",
  });
  // end all button background color changed

  // start all icons background color changed
  $(
    "#about_part .icon, #counter_part .icon i, #contact_part .icon i, #footer_part .icon"
  ).css({
    background: "#b300b3",
  });
  // end all icons background color changed

  // start all overlays background color changed
  $(
    "#works_part .caption, #skills_part .top_overlay, #skills_part .barChart__barFill, #client_part .img"
  ).css({
    background: "#b300b3",
  });

  // start all border hover color changed
  $("body").append(
    "<style>.vbox-next span:hover, .vbox-prev span:hover{border-top-color: #b300b3 !important; border-right-color: #b300b3 !important;}</style>"
  );
  // end all border hover color changed

  // end all overlays background color changed
});

$(".switcher .ten").on("click", function () {
  // srart all theme color changed
  $(
    "#banner_part h3 span, #skills_part .t_text i, #skills_part .t_text h6 span, #works_part ul li a i, #client_part .icons i, #blog_part .blog_content span a, #footer_part p span"
  ).css({
    color: "#00b300",
  });
  // end all theme color changed

  // start pseudo element background color changed
  $(
    "#banner_part .content, .title, #my_nav ul li a, #works_part .filter-btn, #client_part .client_items ul li a, .blog_part ul li button"
  ).append(
    "<style>.content:before, .title:before, a:before, .filter-btn:before, button:before{background: #00b300 !important;}</style>"
  );
  // end pseudo element background color changed

  // start all hover & active color changed
  $(
    "#my_nav ul li a, #my_nav ul li .active, #works_part .filter-btn, #works_part .active, .vbox-close"
  ).append(
    "<style>#my_nav ul li a:hover, .active, .filter-btn:hover, .active-work, .vbox-close:hover{color: #00b300 !important;}</style>"
  );
  // end all hover & active color changed

  // start section pseudo element background color changed
  $("#skills_part .skills_part, #counter_part, .blog_part").append(
    "<style>.skills_part:before, #counter_part:before, .blog_part:before, .skills_part:after, #counter_part:after, .blog_part:after{border-color: transparent #00b300 #00b300 transparent !important}</style>"
  );
  // end section pseudo element background color changed

  // start overlay gradient color changed
  $("#banner_part .overlay, #about_part .overlay").css({
    background:
      "linear-gradient(to bottom, rgba(0, 179, 0, 0.4), rgba(97, 114, 158, 0.4))",
  });
  // end overlay gradient color changed

  // start all button background color changed
  $(
    "#banner_part #button, #blog_part h4 a, #contact_part #submit, #footer_part #back_to_top"
  ).css({
    background: "#00b300",
  });
  // end all button background color changed

  // start all icons background color changed
  $(
    "#about_part .icon, #counter_part .icon i, #contact_part .icon i, #footer_part .icon"
  ).css({
    background: "#00b300",
  });
  // end all icons background color changed

  // start all overlays background color changed
  $(
    "#works_part .caption, #skills_part .top_overlay, #skills_part .barChart__barFill, #client_part .img"
  ).css({
    background: "#00b300",
  });

  // start all border hover color changed
  $("body").append(
    "<style>.vbox-next span:hover, .vbox-prev span:hover{border-top-color: #00b300 !important; border-right-color: #00b300 !important;}</style>"
  );
  // end all border hover color changed

  // end all overlays background color changed
});

$(".switcher .eleven").on("click", function () {
  // srart all theme color changed
  $(
    "#banner_part h3 span, #skills_part .t_text i, #skills_part .t_text h6 span, #works_part ul li a i, #client_part .icons i, #blog_part .blog_content span a, #footer_part p span"
  ).css({
    color: "#f4b63d",
  });
  // end all theme color changed

  // start pseudo element background color changed
  $(
    "#banner_part .content, .title, #my_nav ul li a, #works_part .filter-btn, #client_part .client_items ul li a, .blog_part ul li button"
  ).append(
    "<style>.content:before, .title:before, a:before, .filter-btn:before, button:before{background: #f4b63d !important;}</style>"
  );
  // end pseudo element background color changed

  // start all hover & active color changed
  $(
    "#my_nav ul li a, #my_nav ul li .active, #works_part .filter-btn, #works_part .active, .vbox-close"
  ).append(
    "<style>#my_nav ul li a:hover, .active, .filter-btn:hover, .active-work, .vbox-close:hover{color: #f4b63d !important;}</style>"
  );
  // end all hover & active color changed

  // start section pseudo element background color changed
  $("#skills_part .skills_part, #counter_part, .blog_part").append(
    "<style>.skills_part:before, #counter_part:before, .blog_part:before, .skills_part:after, #counter_part:after, .blog_part:after{border-color: transparent #f4b63d #f4b63d transparent !important}</style>"
  );
  // end section pseudo element background color changed

  // start overlay gradient color changed
  $("#banner_part .overlay, #about_part .overlay").css({
    background:
      "linear-gradient(to bottom, rgba(244, 183, 61, 0.4), rgba(97, 114, 158, 0.4))",
  });
  // end overlay gradient color changed

  // start all button background color changed
  $(
    "#banner_part #button, #blog_part h4 a, #contact_part #submit, #footer_part #back_to_top"
  ).css({
    background: "#f4b63d",
  });
  // end all button background color changed

  // start all icons background color changed
  $(
    "#about_part .icon, #counter_part .icon i, #contact_part .icon i, #footer_part .icon"
  ).css({
    background: "#f4b63d",
  });
  // end all icons background color changed

  // start all overlays background color changed
  $(
    "#works_part .caption, #skills_part .top_overlay, #skills_part .barChart__barFill, #client_part .img"
  ).css({
    background: "#f4b63d",
  });

  // start all border hover color changed
  $("body").append(
    "<style>.vbox-next span:hover, .vbox-prev span:hover{border-top-color: #f4b63d !important; border-right-color: #f4b63d !important;}</style>"
  );
  // end all border hover color changed

  // end all overlays background color changed
});

$(".switcher .twelve").on("click", function () {
  // srart all theme color changed
  $(
    "#banner_part h3 span, #skills_part .t_text i, #skills_part .t_text h6 span, #works_part ul li a i, #client_part .icons i, #blog_part .blog_content span a, #footer_part p span"
  ).css({
    color: "#9d4b48",
  });
  // end all theme color changed

  // start pseudo element background color changed
  $(
    "#banner_part .content, .title, #my_nav ul li a, #works_part .filter-btn, #client_part .client_items ul li a, .blog_part ul li button"
  ).append(
    "<style>.content:before, .title:before, a:before, .filter-btn:before, button:before{background: #9d4b48 !important;}</style>"
  );
  // end pseudo element background color changed

  // start all hover & active color changed
  $(
    "#my_nav ul li a, #my_nav ul li .active, #works_part .filter-btn, #works_part .active, .vbox-close"
  ).append(
    "<style>#my_nav ul li a:hover, .active, .filter-btn:hover, .active-work, .vbox-close:hover{color: #9d4b48 !important;}</style>"
  );
  // end all hover & active color changed

  // start section pseudo element background color changed
  $("#skills_part .skills_part, #counter_part, .blog_part").append(
    "<style>.skills_part:before, #counter_part:before, .blog_part:before, .skills_part:after, #counter_part:after, .blog_part:after{border-color: transparent #9d4b48 #9d4b48 transparent !important}</style>"
  );
  // end section pseudo element background color changed

  // start overlay gradient color changed
  $("#banner_part .overlay, #about_part .overlay").css({
    background:
      "linear-gradient(to bottom, rgba(157, 75, 72, 0.4), rgba(97, 114, 158, 0.4))",
  });
  // end overlay gradient color changed

  // start all button background color changed
  $(
    "#banner_part #button, #blog_part h4 a, #contact_part #submit, #footer_part #back_to_top"
  ).css({
    background: "#9d4b48",
  });
  // end all button background color changed

  // start all icons background color changed
  $(
    "#about_part .icon, #counter_part .icon i, #contact_part .icon i, #footer_part .icon"
  ).css({
    background: "#9d4b48",
  });
  // end all icons background color changed

  // start all overlays background color changed
  $(
    "#works_part .caption, #skills_part .top_overlay, #skills_part .barChart__barFill, #client_part .img"
  ).css({
    background: "#9d4b48",
  });

  // start all border hover color changed
  $("body").append(
    "<style>.vbox-next span:hover, .vbox-prev span:hover{border-top-color: #9d4b48 !important; border-right-color: #9d4b48 !important;}</style>"
  );
  // end all border hover color changed

  // end all overlays background color changed
});

// start switcher

// start fixed nav
window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("my_nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed_menu");
  } else {
    navbar.classList.remove("fixed_menu");
  }
}
// end fixed nav

// start navbar collapse js
$("#my_nav ul li a").on("click", function () {
  $("#my_nav .navbar-collapse").collapse("hide");
});
// end navbar collapse js

// // Add scrollspy to <body> start
$(document).ready(function () {
  $("body").scrollspy({ target: "#my_nav", offset: 10 });
});
// // Add scrollspy to <body> end

// Add smooth scrolling on all links inside the navbar start
$(document).ready(function () {
  $("#my_nav ul li a, #ani_button").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1000,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
// Add smooth scrolling on all links inside the navbar end

// start ani_button js
// // Add scrollspy to <body> start
$(document).ready(function () {
  $("body").scrollspy({ target: "#banner_part", offset: 10 });
});
// // Add scrollspy to <body> end
// end ani_button js

// barchart js start
jQuery("#skills_part .barChart").barChart({
  easing: "easeOutQuart",
});
// barchart js end

// start filter tabs js
$(document).ready(function () {
  $(".portfolios").filterData({
    aspectRatio: "8:5",
    nOfRow: 3,
    itemDistance: 0,
  });
  $(".portfolio-controllers button").on("click", function () {
    $(".portfolio-controllers button").removeClass("active-work");
    $(this).addClass("active-work");
  });
});
// end filter tabs js

//  start venobox js
$(document).ready(function () {
  $("#works_part .work .portfolio-image .venobox").venobox();
});
// end venobox js

// start counter
$("#counter_part .counter").counterUp({
  delay: 10,
  time: 1000,
});
// end counter

// start client
$("#client_part .client_items").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  centerMode: true,
  centerPadding: "0",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
// end client

// start blog
$("#blog_part .blog_items").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
// end blog

// start back to top button
$("#back_to_top").on("click", function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    1000
  );
});
// end back to top button
