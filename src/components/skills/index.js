import React from "react";
import "./index.css";


function Skills(){
    return(
      <section className="section has-background-light" id="work">
      <div className="container">
        <p className="subtitle has-text-weight-semibold is-size-3 has-text-left mb-3">
          What I can build
        </p><br />
        <class className="columns is has-background-maroon">
          {/* WebApps */}
          <div className="column">
            <div className="card">
              <div className="card content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">
                      Web Apps
                    </p>
                  </div>
                </div>
                <div className="content pl-4 pr-4 p-4 is-text-justify is-background is-black">
                  Web apps have the typical front-end and back-end web development technologies. In theory, web apps are closely related to websites, thus web app development and web development share many characteristics.
                  On the front-end, for instance, web app developers utilize JavaScript, CSS, and HTML. The back-end for web apps might similarly use the same server-side languages developers use to build websites such as Ruby or Python.This field is my very first field. so I am have more experiences in it. 
                </div>
              </div>
            </div>
          </div>
          {/* MobileApps */}
          <div className="column">
            <div className="card">
              <div className="card content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">
                      Mobile Apps
                    </p>
                  </div>
                </div>
                <div className="content pl-4 pr-4 p-4 is-text-justify">
                  Mobile application development is the set of processes and procedures involved in writing software for small, wireless computing devices, such as smartphones and other hand-held devices.
                  Like web application development, mobile application development has its roots in more traditional software development. One critical difference, however, is that mobile apps are often 
                  written specifically to take advantage of the unique features of a particular mobile device
                </div>
              </div>
            </div>
          </div>
          {/* Desktop Apps */}
          <div className="column">
            <div className="card">
              <div className="card content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">
                      Desktop Apps
                    </p>
                  </div>
                </div>
                <div className="content pl-4 pr-4 p-4 is-text-justify">
                  Desktop applications usually differ in terms of complexity and functionality. For instance, gaming software focuses on one specific set of features while other programs like Microsoft Office allow you to access numerous features. Some programs are easy to use. Others require particular skills and knowledge to operate.
                  Operating systems also determine how desktop applications run. Some programs only need the basic permissions allowed by the OS.The difference is 
                </div>
              </div>
            </div>
          </div>
        </class>
      </div>
    </section>
    );
}

export default Skills;