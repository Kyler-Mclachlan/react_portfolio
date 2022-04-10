import React from "react";

export default function Resume() {
    return (
      <div className="resumeParent">
        <div>
        <p className="ResumeTitle">Resume</p>
        <a className="resumeDownloadLink"
        href="./Kyler_McLachlan_Resume_2020.pdf"
        download
      >
        Click here to download my resume
      </a>
      <p className="ResumeTitle">
        Front-End proficiencies
        <ul className="ResumeTitleFrontEnd" >
          <li>
            HTML
          </li>
          <li>
            CSS
          </li>
          <li>
            JavaScript
          </li>
          <li>
            Responsive Design
          </li>
          <li>
            React
          </li>
          <li>
            Bootstrap
          </li>
        </ul>
      </p>
      <p className="ResumeTitle">
        Back-End proficiencies
        <ul className="ResumeTitleBackEnd" >
          <li>
            APIs
          </li>
          <li>
            Node
          </li>
          <li>
            Express
          </li>
          <li>
            MySQL
          </li>
          <li>
            Sequelize
          </li>
          <li>
            Mongo
          </li>
        </ul>
      </p>
        </div>
      </div>
    );
  }