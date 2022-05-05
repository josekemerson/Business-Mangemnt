import React from "react";
import "./Patent.css";

const Patent = () => {
  return (
    <div>
      <div class="container">
        <form id="contact" action="">
          <h3>Patent Ideas</h3>
          <br />
          <fieldset>
            <input
              placeholder="Classification"
              type="text"
              tabindex="1"
              required
              autofocus
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Filing Date"
              type="date"
              tabindex="2"
              required
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Priority Data"
              type="text"
              tabindex="3"
              required
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Applicant"
              type="text"
              tabindex="4"
              required
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Inventor"
              type="text"
              tabindex="5"
              required
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Title"
              type="text"
              tabindex="6"
              required
            />
          </fieldset>
          <fieldset>
            <textarea
              placeholder="Abstract..."
              tabindex="7"
              required
            ></textarea>
          </fieldset>
          <fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Patent;
