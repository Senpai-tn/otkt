import "./style.css";
import { useEffect } from "react";
import $ from "jquery"; // Import jQuery

function App() {
  useEffect(() => {
    $(document).ready(function () {
      // jQuery logic inside document ready
      let landingLogoImg = $(".landing_logo img");
      let landingLogo = $(".landing_logo");

      if (landingLogoImg.height() > landingLogoImg.width()) {
        var setASize = landingLogoImg.height();
      } else {
        var setASize = landingLogoImg.width();
      }

      landingLogo.width(setASize).height(setASize);

      setTimeout(function () {
        $(".custom_bg").animate({ opacity: "1" }, 1000);
      }, 500);

      setTimeout(function () {
        startPreloader();
      }, 500);

      $(window).on("resize", function () {
        // Resize event if needed
      });
    });

    function startPreloader() {
      $(".landing_preloader").animate(
        {
          width: "100%",
        },
        3000,
        function () {
          $(".landing_logo").removeClass("loading"); // Corrected to removeClass
        }
      );
    }
  }, []); // Empty dependency array ensures this effect runs only once
  return (
    <>
      <div className="home page-template page-template-page-landing1 page-template-page-landing1-php page page-id-26 page_with_custom_background_image">
        <div className="landing_preloader"></div>
        <a
          href="#"
          className="landing_logo loading type1 circle"
          style={{ background: "#151516" }}
        >
          <img
            src="https://livewp.site/wp/md/soho/wp-content/themes/soho/img/landing_logo.png"
            alt="Logo"
            width="140"
            height="100"
            className="logo_def"
          />
          <img
            src="https://livewp.site/wp/md/soho/wp-content/themes/soho/img/retina/landing_logo.png"
            alt="Logo"
            width="140"
            height="100"
            className="logo_retina"
          />
        </a>

        <div className="custom_bg img_bg"></div>

        <div className="gt3_tools_bar__sidebar-cover"></div>

        <script
          type="text/javascript"
          src="https://livewp.site/wp/md/soho/wp-content/themes/soho/js/chart.js?ver=6.5.5"
          id="gt3_chart_js-js"
        ></script>
        <script
          type="text/javascript"
          src="https://livewp.site/wp/md/soho/wp-content/plugins/contact-form-7/includes/swv/js/index.js?ver=5.9.6"
          id="swv-js"
        ></script>
        <script type="text/javascript" id="contact-form-7-js-extra"></script>
        <script
          type="text/javascript"
          src="https://livewp.site/wp/md/soho/wp-content/plugins/contact-form-7/includes/js/index.js?ver=5.9.6"
          id="contact-form-7-js"
        ></script>
        <script
          type="text/javascript"
          src="https://livewp.site/wp/md/soho/wp-content/themes/soho/js/jquery.mousewheel.js?ver=6.5.5"
          id="gt3_mousewheel_js-js"
        ></script>
        <script
          type="text/javascript"
          src="https://livewp.site/wp/md/soho/wp-content/themes/soho/js/theme.js?ver=6.5.5"
          id="gt3_theme_js-js"
        ></script>
      </div>
    </>
  );
}

export default App;
