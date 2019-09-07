import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, Dot,ButtonNext,DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class map extends React.Component {
  render() {
    return (<div>
       <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={4}
        orientation	={"horizontal"}
      >

        <Slider>
          <Slide index={0}>  
          <iframe src="https://nycplot.herokuapp.com/"  height="600" width="100%" ></iframe>
          </Slide>
          <Slide index={1}>
          <iframe src="//plot.ly/~ajakob/7.embed"  height="600" width="100%" ></iframe>

          </Slide>
          <Slide index={2}>
          <iframe src="//plot.ly/~ajakob/6.embed"  height="600" width="100%" ></iframe>

          </Slide>
          <Slide index={3}>
          <iframe src="//plot.ly/~ajakob/5.embed"  height="600" width="100%" ></iframe>
          </Slide>
        </Slider>
        <ButtonBack class="mapbutton" id="back">&#x27F5;</ButtonBack>
        <ButtonNext  class="mapbutton" id="next">&#x27F6;</ButtonNext>
      </CarouselProvider>
           
        </div>
        );
    }
}

export default map;
