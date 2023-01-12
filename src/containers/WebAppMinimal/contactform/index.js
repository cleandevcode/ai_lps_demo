import "bootstrap/dist/css/bootstrap.css";
import Link from "common/components/Link";

export default function Form({ id }) {
  return (
    <div>
      <h1 className="text-center m-3">Contact Us</h1>
      <div className="d-flex align-items-center justify-content-center">
        <div class="card" style={{ width: "50rem" }}>
          <div class="card-body">
            <div class="row g-3">
              <div class="col-md-6">
                <label for="firstName" class="form-label">
                  First Name
                </label>
                <input type="text" class="form-control" id="firstName" />
              </div>
              <div class="col-md-6">
                <label for="lastName" class="form-label">
                  Last Name
                </label>
                <input type="text" class="form-control" id="lastName" />
              </div>
              <div class="col-12">
                <label for="email" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="abc@gmail.com"
                />
              </div>
              <div class="col-12">
                <label for="phoneNumber" class="form-label">
                  Phone Number
                </label>
                <input type="text" class="form-control" id="phoneNumber" />
              </div>
              <div class="col-md-12">
                <label for="department" class="form-label">
                  Inquiry
                </label>
                <select id="department" class="form-select">
                  <option selected>Choose...</option>
                  {id === "whitelabel_form" ? (
                    <>
                      <option>White Label</option>
                    </>
                  ) : (
                    <>
                      <option>Billing</option>
                      <option>General</option>
                      <option>Job Oppourtunity</option>
                      <option>Customer Support</option>
                      <option>Dashboard Help</option>
                    </>
                  )}
                </select>
              </div>

              <div class="col-12">
                <div class="input-group">
                  <span class="input-group-text">Message</span>
                  <textarea
                    class="form-control"
                    aria-label="message"
                  ></textarea>
                </div>
              </div>

              <div class="col-12">
                <a href="mailto:mujtaba@clickableman.com">
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
