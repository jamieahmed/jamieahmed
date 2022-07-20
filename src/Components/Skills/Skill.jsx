import * as React from "react";
import { MdDownloadForOffline } from "react-icons/md";
import "./style.css";

export default function Skill() {
  return (
    <div className="resume-controller">
      <h2 className="Resume-title">Resume</h2>
      <div class="resume-container">
        {/* Eduction */}
        <button
          className="resume-child "
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <div>
            <h3 className="icon-title">Eduction</h3>
            <img
              src="../Images/education-logo.png"
              alt="education-logo"
              className="resume-images"
            />
          </div>
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h3>Eduction</h3>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">Description</div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">
                  <a href="Resume.pdf" download="jamie-resume.pdf">
                    <MdDownloadForOffline />
                    Download Resume!
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Skills */}
        <button
          className="resume-child "
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <div>
            <h3 className="icon-title">Skills</h3>
            <img
              src="../Images/education-logo.png"
              alt="education-logo"
              className="resume-images"
            />
          </div>
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h3> Skills</h3>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">Description</div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">
                  <a href="Resume.pdf" download="jamie-resume.pdf">
                    <MdDownloadForOffline />
                    Download Resume!
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Experience */}
        <button
          className="resume-child "
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <div>
            <h3 className="icon-title">Experience</h3>
            <img
              src="../Images/education-logo.png"
              alt="education-logo"
              className="resume-images"
            />
          </div>
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h3>Experience</h3>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">Description lor</div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">
                  <a href="Resume.pdf" download="jamie-resume.pdf">
                    <MdDownloadForOffline />
                    Download Resume!
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
