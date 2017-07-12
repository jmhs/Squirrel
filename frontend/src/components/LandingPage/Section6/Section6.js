import React, {PropTypes} from 'react';
import Slider from 'react-slick';

import './Section6.css';

export default class Section6 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: true,
      centerMode: true,
    };
    return (
      <div className="row">
        <div className="S6carousel">
          <Slider {...settings}>
            <div className="container-fluid">
            <div className="carouselH row">
              <div className="col-md-2 col-md-offset-1">
                <img className="carouselIcon" src="https://image.ibb.co/bSid4a/user_2.jpg" alt="1 of us"/>
              </div>
              <div className="col-md-8 carouselWord">
                <div className="container-fluid">
                  <div className="row">
                    <h3>"You open peek, welcoming content is people who are live now at specific locations. You go “Wow”. You’ve been waiting for this for years. You little stalker."</h3>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <p className="carouselAuthor"><span className="carouselAuthorName">Isaac K.</span>, XYZ Inc</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div className="container-fluid">
            <div className="carouselH row">
              <div className="col-md-2 col-md-offset-1">
                <img className="carouselIcon" src="https://image.ibb.co/emLQja/user_3.jpg" alt="1 of us"/>
              </div>
              <div className="col-md-8 carouselWord">
                <div className="container-fluid">
                  <div className="row">
                    <h3>"Then you search for the nightclub you wanted to go for weeks to see who’s live. That would adequately answer “who’s there” and “how’s the place”. Cool."</h3>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <p className="carouselAuthor"><span className="carouselAuthorName">M. Han</span>, ABC Pte Ltd</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div className="container-fluid">
            <div className="carouselH row">
              <div className="col-md-2 col-md-offset-1">
                <img className="carouselIcon" src="https://image.ibb.co/in9UAF/user.jpg" alt="1 of us"/>
              </div>
              <div className="col-md-8 carouselWord">
                <div className="container-fluid">
                  <div className="row">
                    <h3>"Bars, clubs, pubs, restaurants, festivals, premieres, ceremonies, private parties, exclusive events… Anywhere in the world. Now. Anywhere. Live. Now. Okay that’s enough."</h3>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <p className="carouselAuthor"><span className="carouselAuthorName">Justin C.</span>, A Team</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Slider>
        </div>
      </div>
    );
  }
}

Section6.propTypes = {
};
