import React from "react";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Web Creations</h2>
      <div className="project-container">
        <div className="project">
          <img
            src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="First Project"
          />
          <h3>First Project</h3>
          <div className="description">
            Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Asperiores Aperiam Porro Impedit Tenetur Quo Hic
            Omnis Doloribus Dolores Enim Deleniti.
          </div>
          <div className="project-icons">
            <a href="https://www.google.com/" target="_blank">
              <i className="bi bi-globe2"></i>
            </a>
            <button className="btn">
              <a href="https://github.com/" target="_blank">
                <i className="bi bi-github"></i>
              </a>
            </button>
          </div>
        </div>

        <div className="project">
          <img
            src="https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Second Project"
          />
          <h3>Second Project</h3>
          <div className="description">
            Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Asperiores Aperiam Porro Impedit Tenetur Quo Hic
            Omnis Doloribus Dolores Enim Deleniti.
          </div>
          <div className="project-icons">
            <a href="https://www.google.com/" target="_blank">
              <i className="bi bi-globe2"></i>
            </a>
            <button className="btn">
              <a href="https://github.com/" target="_blank">
                <i className="bi bi-github"></i>
              </a>
            </button>
          </div>
        </div>

        <div className="project">
          <img
            src="https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Third Project"
          />
          <h3>Third Project</h3>
          <div className="description">
            Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Asperiores Aperiam Porro Impedit Tenetur Quo Hic
            Omnis Doloribus Dolores Enim Deleniti.
          </div>
          <div className="project-icons">
            <a href="https://www.google.com/" target="_blank">
              <i className="bi bi-globe2"></i>
            </a>
            <button className="btn">
              <a href="https://github.com/" target="_blank">
                <i className="bi bi-github"></i>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
