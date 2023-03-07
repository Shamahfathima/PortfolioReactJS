import React from "react";
import "./index.css";
import ProfilePic from "../assets/img/1674667933757 - Copy.jpg";
import Icon from "../assets/img/01-excited-programmer-comic.png";

function HomePage(){
    return(
      <section style={{backgroundColor: '#3f3b3b'}} id="about">
      <div className="container is-vcentred">
        {/*Project-1*/}
        <div className="columns is-multiline-is-vcentered">
          <div className="column p-widescreen-4">
            <article> 
              <figure className="image is-1.5by2.5">
                <img src={ProfilePic} alt="Project-1" />
              </figure>
            </article>
          </div>
          <div className="class column p-widescreen-4 is-half">
            <section style={{backgroundColor: '#faf1f1'}} id="about">
              <p className="content is-large text-color:">
                Hello! I'm <strong> Shamah </strong> popularly known as the <em> Codist </em>
              </p><br />
              <p className="content is-medium ">
                I am a <strong> Full-stack Developer </strong> and a <strong> Freelancer</strong> in Colombo and this is all I do, write code for living.
                I specialize in building hybrid and native apps assisting. If I am not writing , I will be probably go for <strong>hiking</strong> and <strong> reading </strong> 
              </p>
              <article> 
                <figure className="image is-2.5by3.5">
                  <img src={Icon} alt="Project-1" />
                </figure>
              </article>
            </section>
          </div>
        </div>
      </div>
    </section>
    );
}

export default HomePage;