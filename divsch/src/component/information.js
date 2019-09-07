import React, { Component } from 'react'
import '../css/information.css'
import { CarouselProvider, Slider, Slide, ButtonBack, Dot,ButtonNext,DotGroup } from 'pure-react-carousel';
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

        <div id="dotcontainer">
          <Dot slide={0}/>
          <Dot slide={1}/>
          <Dot slide={2}/>
        </div>
        
        <Slider>
          <Slide index={0}>  
            <h2>Only 7 Black Students Got Into Stuyvesant, N.Y.’s Most Selective High School, Out of 895 Spots</h2>
              <h3><i><small>These numbers come despite Mayor Bill de Blasio’s vow to diversify the specialized high schools, 
              which have long been seen as a ticket for low-income and immigrant students to enter the nation’s best colleges and 
              embark on successful careers.
            </small></i></h3>
          </Slide>
          <Slide index={1}>
            <h2>That's why we're using NYC Open Data</h2>
              <h3><i><small>Using an open dataset provided by the City of New York, we're visualizing educational attainment in NYC's 
              public high schools by looking at three key metrics: College Readiness Index, Post-Secondary Enrollment after 18 months, 
              and College Persistence, to track how many kids enroll in, stay in, and succeed in college.
            </small></i></h3>
            <img id="nycopen" src="https://data.cityofnewyork.us/api/assets/3FF54443-CD9C-4E56-8A20-8D2BD245BD1A?nyclogo300.png" />
            
          </Slide>
          <Slide index={2}>
            <h2>We found that high schools that are more racially representative of NYC (50-90% Black and Hispanic) tend to do worse.</h2>
            <h3><i><small>
              This was surprising, seeing as the overwhelming consensus amongst educators is that more diverse environments promote 
              achievement for students of all backgrounds. This shows that NYC has a long way to go when it comes to serving its "minority" students.
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
