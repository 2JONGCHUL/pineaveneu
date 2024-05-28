console.clear();

// fullpage
$(document).ready(function () {
  $("#fullpage").fullpage({
    responsiveWidth: 1279, //fullpage 해제
    scrollingSpeed: 1000,
    anchors: ["section-1", "section-2", "section-3", "section-4", "section-5"],
    afterLoad: function (origin, destination, direction) {
      var logo = document.getElementsByClassName("header-logo")[0];
      // 해당 섹션 인덱스에 따라 헤더의 색상을 변경
      if (destination.index == 0) {
        // 첫 번째 섹션인 경우
        document.querySelector("header").style.backgroundColor = ""; // 원하는 색상으로 변경
        $(".header-wrap").removeClass("on");
        $(".header-nav > ul").removeClass("on");
        $(".bar").removeClass("on");
        logo.src = "https://ifh.cc/g/RSA2xW.png";
      } else if (destination.index == 1) {
        // 두 번째 섹션인 경우
        $(".header-wrap").addClass("on");
        $(".header-nav > ul").addClass("on");
        $(".bar").addClass("on");
        logo.src = "https://ifh.cc/g/pSLgqN.png";
      } else if (destination.index == 2) {
        $(".header-wrap").removeClass("on");
        $(".header-nav > ul").removeClass("on");
        $(".bar").removeClass("on");
        logo.src = "https://ifh.cc/g/RSA2xW.png";
        // 세 번째 섹션인 경우
      }
    },
  });
});

// partners 탭메뉴
function tap_menu_on() {
  $(".floor-tap-box > ul > li").click(function () {
    $(".floor-tap-box > ul > li").removeClass("on");
    $(this).addClass("on");

    var i = $(this).index();

    // $('.tap').hide();
    $(".floor-img").addClass("active");
    $(".floor-img").eq(i).removeClass("active");

    return false;
  });
}

tap_menu_on();
