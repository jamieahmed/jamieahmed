import * as React from "react";
import { MdDownloadForOffline } from "react-icons/md";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./style.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Skill() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
