// your ImageSlider code here!
import React from 'react';

class ImageSlider extends React.Component {

    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }

    render(){
        return(
            <div>I am on slide {this.state.currentSlideIndex}</div>
            )
    }    

}

export default ImageSlider

// Its initial state should have a property called currentSlideIndex that starts at 0.
// It should only render out the text 'I am on slide &lt;CURRENT_SLIDE&gt;', where <CURRENT_SLIDE> is the value of this.state.currentSlideIndex.