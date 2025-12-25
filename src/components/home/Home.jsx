import React from "react";
import "./Home.css";
import boy from "../../assets/boy.png"
import eboy from "../../assets/picture.png"
import logos from "../../assets/Logo Container.png"
import you from "../../assets/youtube.png"
import face from "../../assets/facebook.png"
import twit from "../../assets/twitter.png"
import ins from "../../assets/instagram.png"
import lind from "../../assets/linkedin.png"

const Home = () => {
  return (
    <>
      <div className="basic">
        <div className="basic_text">
          <h4>Caption</h4>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
            amet at molestie mattis.
          </h1>
          <p>
            Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum
            sit nunc in eros scelerisque sed. Commodo in viverra nunc,
            ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis,
            pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo
            eleifend ultricies purus iaculis.
          </p>
          <div className="btns">
            <button>Primary Action</button>
            <button>Secondary Action</button>
          </div>
        </div>
        <div className="basic_img">
            <img src={boy} alt="" />
        </div>
      </div>
      <div className="basic eboy">
        <div className="basic_text">
          <h4>Caption</h4>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
            amet at molestie mattis.
          </h1>
          <p>
            Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum
            sit nunc in eros scelerisque sed. Commodo in viverra nunc,
            ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis,
            pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo
            eleifend ultricies purus iaculis.
          </p>
          <div className="btns">
            <button>Primary Action</button>
            <button>Secondary Action</button>
          </div>
        </div>
        <div className="basic_img">
            <img src={eboy} alt="" />
        </div>
      </div>
      <div className="b_input">
        <div className="input">
            <h2>Contact Me</h2>
            <h1>Bibendum amet at molestie mattis.</h1>
            <h3>Label Name</h3>
            <input type="text" placeholder="Placeholder"/>
             <h3>Label Name</h3>
            <input type="text" placeholder="Placeholder"/>
             <h3>Label Name</h3>
            <input type="text" placeholder="Placeholder"/>
             <h3>Label Name</h3>
            <input type="text" placeholder="Placeholder"/>
            
        </div>
      </div>
      <footer>
        <div className="logos">
          <img src={logos} alt="" />
          <div className="l_btn">
            <input type="text" placeholder="Enter your email to get the latest news..." />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="line"></div>
        <div className="links">
          <div className="link">
            <h2>Column One</h2>
            <p>Twenty One</p>
            <p>Thirty Two</p>
            <p>Fourty Three</p>
            <p>Fifty Four</p>
          </div>
          <div className="link">
            <h2>Column two</h2>
            <p>Twenty One</p>
            <p>Thirty Two</p>
            <p>Fourty Three</p>
            <p>Fifty Four</p>
          </div>
          <div className="link">
            <h2>Column three</h2>
            <p>Twenty One</p>
            <p>Thirty Two</p>
            <p>Fourty Three</p>
            <p>Fifty Four</p>
          </div>
          <div className="link">
            <h2>Join Us</h2>
            <div className="imgss">
              <img src={you} alt="" />
              <img src={face} alt="" />
              <img src={twit} alt="" />
              <img src={ins} alt="" />
              <img src={lind} alt="" />
              
            </div>
          </div>
        </div>
        <div className="line"></div>
       <div className="info">
        <h3>CompanyName @ 202X. All rights reserved.</h3>
        <div className="p">
          <p>Eleven</p>
          <p>Twelve</p>
          <p>Thirteen</p>
        </div>
       </div>
      </footer>
    </>
  );
};

export default Home;
