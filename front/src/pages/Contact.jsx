import React from "react";
import "../style.css";

const Contact = () => {
  return (
    <div style={{ padding: "0px 10px", marginTop: "10vh" }}>
      <div className="span12 first-module module_number_1 module_cont title_square module_text_area">
        <div className="bg_title">
          <h4 className="headInModule">GET IN TOUCH WITH US</h4>
        </div>
        <div className="module_content">
          <p>
            Nullam a massa tellus. Nulla tempor velit non tincidunt
            facilisis&nbsp;nec&nbsp;sapien augue, finibus nec quam in,
            condimentum iaculis sem. Duis lobortis fermentum pulvinar. Proin sed
            posuere sapien. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae. Nunc tempor nisi vitae nibh
            tincidunt, eget posuere dolor lacinia. Ut ante mauris, ullamcorper
            sed scelerisque id, sodales et nulla&nbsp;aliquam egestas eget dui
            ipsum.
          </p>
        </div>
      </div>
      <div
        className="span6  module_number_2 module_cont  module_html"
        style={{ width: "calc( 100vw - 60px )", padding: "0 15px" }}
      >
        <div className="module_content">
          <div
            className="wpcf7 js"
            id="wpcf7-f132-p133-o1"
            lang="en-US"
            dir="ltr"
          >
            <div className="screen-reader-response">
              <p role="status" aria-live="polite" aria-atomic="true"></p>{" "}
              <ul></ul>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="wpcf7-form init"
              aria-label="Contact form"
              novalidate="novalidate"
              data-status="init"
            >
              <div>
                <input type="hidden" name="_wpcf7" value="132" />
                <input type="hidden" name="_wpcf7_version" value="5.9.6" />
                <input type="hidden" name="_wpcf7_locale" value="en_US" />
                <input
                  type="hidden"
                  name="_wpcf7_unit_tag"
                  value="wpcf7-f132-p133-o1"
                />
                <input type="hidden" name="_wpcf7_container_post" value="133" />
                <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
              </div>
              <p>
                <span className="wpcf7-form-control-wrap" data-name="your-name">
                  <input
                    size="40"
                    maxlength="80"
                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                    aria-required="true"
                    aria-invalid="false"
                    value="Name *"
                    type="text"
                    name="your-name"
                  />
                </span>
              </p>
              <p>
                <span
                  className="wpcf7-form-control-wrap"
                  data-name="your-email"
                >
                  <input
                    size="40"
                    maxlength="80"
                    className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                    aria-required="true"
                    aria-invalid="false"
                    value="Email *"
                    type="email"
                    name="your-email"
                  />
                </span>
              </p>
              <p>
                <span
                  className="wpcf7-form-control-wrap"
                  data-name="your-subject"
                >
                  <input
                    size="40"
                    maxlength="80"
                    className="wpcf7-form-control wpcf7-text"
                    aria-invalid="false"
                    value="Subject"
                    type="text"
                    name="your-subject"
                  />
                </span>
              </p>
              <p>
                <span
                  className="wpcf7-form-control-wrap"
                  data-name="your-message"
                >
                  <textarea
                    cols="40"
                    rows="10"
                    maxlength="400"
                    className="wpcf7-form-control wpcf7-textarea"
                    aria-invalid="false"
                    name="your-message"
                  ></textarea>
                </span>
              </p>
              <p>
                <input
                  className="wpcf7-form-control wpcf7-submit has-spinner"
                  type="submit"
                  value="Submit"
                />
                <span className="wpcf7-spinner"></span>
              </p>
              <div className="wpcf7-response-output" aria-hidden="true"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
