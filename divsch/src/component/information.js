import React, { Component } from 'react'
import '../css/information.css'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class information extends React.Component {
  
  render() {
    return (
       <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={3}
        orientation	={"vertical"}
      >
        <Slider>
          <Slide index={0}>  
            <h2>Only 7 Black Students Got Into Stuyvesant, N.Y.’s Most Selective High School, Out of 895 Spots</h2>
            <h3><i><small>These numbers come despite Mayor Bill de Blasio’s vow to diversify the specialized high schools, which have long been seen as a ticket for low-income and immigrant students to enter the nation’s best colleges and embark on successful careers.
                        Sign up for the New York Today Newsletter
                        Each morning, get the latest on New York businesses, arts, sports, dining, style and more.
            </small></i></h3>
          </Slide>
          <Slide index={1}>
            <h2>That's why we are using NYC Open Data to figure out the source of the problem</h2>
            <h3><i><small>These numbers come despite Mayor Bill de Blasio’s vow to diversify the specialized high schools, which have long been seen as a ticket for low-income and immigrant students to enter the nation’s best colleges and embark on successful careers.
                      
            </small></i></h3>
            <img id="nycopen" src="https://data.cityofnewyork.us/api/assets/3FF54443-CD9C-4E56-8A20-8D2BD245BD1A?nyclogo300.png" />
            
          </Slide>
          <Slide index={2}>
            <h2>Only 7 Black Students Got Into Stuyvesant, N.Y.’s Most Selective High School, Out of 895 Spots</h2>
            <h3><i><small>These numbers come despite Mayor Bill de Blasio’s vow to diversify the specialized high schools, which have long been seen as a ticket for low-income and immigrant students to enter the nation’s best colleges and embark on successful careers.
                        Sign up for the New York Today Newsletter
                        Each morning, get the latest on New York businesses, arts, sports, dining, style and more.
            </small></i></h3>
          </Slide>
        </Slider>
        <ButtonBack class="progressbutton" id="back">Back</ButtonBack>
        <ButtonNext  class="progressbutton" id="next">Next</ButtonNext>
      </CarouselProvider>
    /*  <div id="informationmain">
          <div className="slide" id="slide1">
            
          </div>   
      </div>  */
    );
  }
}

export default information