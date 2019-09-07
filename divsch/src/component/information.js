import React, { Component } from 'react'
import '../css/information.css'
import { CarouselProvider, Slider, Slide, ButtonBack, Dot,ButtonNext,DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class information extends React.Component {
  
  render() {
    return (
       <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={54}
        totalSlides={5}
        orientation	={"vertical"}
      >

        <div id="dotcontainer">
          <Dot slide={0}/>
          <Dot slide={1}/>
          <Dot slide={2}/>
          <Dot slide={3}/>
          <Dot slide={4}/>
        </div>
        
        <Slider>
          <Slide index={0}>  
            <h2><i>Only 7 Black Students Got Into Stuyvesant, N.Y.’s Most Selective High School, Out of 895 Spots</i></h2>
              <h3>These numbers come despite Mayor Bill de Blasio’s vow to diversify the specialized high schools, 
              which have long been seen as a ticket for low-income and immigrant students to enter the nation’s best colleges and 
              embark on successful careers.
            </h3>
          </Slide>
          <Slide index={1}>
            <h2><i>That's why we're using NYC Open Data</i></h2>
              <h3>Using an open dataset provided by the City of New York, we're visualizing educational attainment in NYC's 
              public high schools by looking at three key metrics: College Readiness Index, Post-Secondary Enrollment after 18 months, 
              and College Persistence, to track how many kids enroll in, stay in, and succeed in college.
           </h3>
            <img id="nycopen" src="https://data.cityofnewyork.us/api/assets/3FF54443-CD9C-4E56-8A20-8D2BD245BD1A?nyclogo300.png" />
            
          </Slide>
          <Slide index={2}>
            <h2><i>We found that high schools that are more racially representative of NYC (50-90% Black and Hispanic) tend to do worse.</i></h2>
            <h3>
              This was surprising, seeing as the overwhelming consensus amongst educators is that more diverse environments promote 
              achievement for students of all backgrounds. This shows that NYC has a long way to go when it comes to serving its "minority" students.
           </h3>
          </Slide>
          <Slide index={3}>
            <h2><i>Why is this true?</i></h2>
            <h3>
              There are multitude of factors that lead to this.
           </h3>
          </Slide>
          <Slide index={4}>
            <h2><i>How did we build this?</i></h2>
            <h3 id="page5">
                We decided that for rapid prototyping and ease of access, building an webapp would be the best choice. The code is hosted
                on heroku, a cloud platform that can host and deploy javascript. The framework we used for building a front-end webpage is 
                React. The plots are constructed using Plot.ly, an open source python graphing library.
            </h3>
            <img id="reactlogo"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/>
            <img id="herokulogo" src="https://miro.medium.com/max/3600/1*fIjRtO5P8zc3pjs0E5hYkw.png" />
            <img id="plotlylogo" src="https://upload.wikimedia.org/wikipedia/commons/3/37/Plotly-logo-01-square.png"/>
           </Slide>
        </Slider>
        <ButtonBack class="progressbutton" id="back">&#x27F5;</ButtonBack>
        <ButtonNext  class="progressbutton" id="next">&#x27F6;</ButtonNext>
      </CarouselProvider>
    /*  <div id="informationmain">
          <div className="slide" id="slide1">
            
          </div>   
      </div>  */
    );
  }
}

export default information
