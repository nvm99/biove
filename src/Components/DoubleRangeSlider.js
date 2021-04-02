import React from "react";
import addDots from "../helpers/addDotsToNumber"
export default class DoubleRangeSlider extends React.Component {
  state = {
    sliderWidth: 0,
    offsetSliderWidth: 0,
    min: 0,
    max: 2000,
    minValueBetween: 1,
    currentMin: 50,
    currentMax: 1000,
    currentBudgetMax:"1.000.000",
    currentBudgetMin:"50.000"
  };

  componentDidMount() {
    const { currentMin, currentMax, max } = this.state;

    this.minValue.style.width = (currentMin * 100) / max + "%";
    this.maxValue.style.width = (currentMax * 100) / max + "%";
    this.setState({
      sliderWidth: this.slider.offsetWidth,
      offsetSliderWidth: this.card.offsetLeft,
    });
  }

  changeMinValue = (e) => {
    e.preventDefault();

    document.addEventListener("mousemove", this.onMouseMoveMin);
    document.addEventListener("mouseup", this.onMouseUpMin);

    document.addEventListener("touchmove", this.onMouseMoveMin);
    document.addEventListener("touchend", this.onMouseUpMin);
  };

  onMouseMoveMin = (e) => {
    const {
      min,
      max,
      currentMax,
      minValueBetween,
      sliderWidth,
      offsetSliderWidth,
    } = this.state;
    const draggedWidth = e.clientX - offsetSliderWidth ;
    
    const draggedWidthInPercent = (draggedWidth * 100) / sliderWidth;
    
    const currentMin = Math.abs(parseInt((max * draggedWidthInPercent) / 100));
   
    const deltaMin = parseInt((max * draggedWidthInPercent) / 100);
    const currentBudgetMin=addDots(Math.floor(currentMin/10)*10000)
    if (deltaMin >= min && currentMin <= currentMax - minValueBetween) {
      this.minValue.style.width = draggedWidthInPercent + "%";
      this.minValue.dataset.content = currentMin;
      this.setState({
        currentMin,
        inputMin: currentMin,
        currentBudgetMin
      });
    }
  };

  onMouseUpMin = () => {
    document.removeEventListener("mouseup", this.onMouseUp);
    document.removeEventListener("mousemove", this.onMouseMoveMin);

    document.removeEventListener("touchend", this.onMouseUp);
    document.removeEventListener("touchmove", this.onMouseMoveMin);
  };

  changeMaxValue = (e) => {
    e.preventDefault();

    document.addEventListener("mousemove", this.onMouseMoveMax);
    document.addEventListener("mouseup", this.onMouseUpMax);

    document.addEventListener("touchmove", this.onMouseMoveMax);
    document.addEventListener("touchend", this.onMouseUpMax);
  };

  onMouseMoveMax = (e) => {
    const {
      max,
      currentMin,
      minValueBetween,
      sliderWidth,
      offsetSliderWidth,
    } = this.state;
    const draggedWidth = e.clientX - offsetSliderWidth;
    const draggedWidthInPercent = (draggedWidth * 100) / sliderWidth;
    const currentMax = Math.abs(parseInt((max * draggedWidthInPercent) / 100));
    const currentBudgetMax=addDots(Math.floor(currentMax/10)*10000)
    if (currentMax >= currentMin + minValueBetween && currentMax <= max) {
      this.maxValue.style.width = draggedWidthInPercent + "%";
      this.maxValue.dataset.content = currentMax;
      this.setState({
        currentMax,
        inputMax: currentMax,
        currentBudgetMax
      });
    }
  };

  onMouseUpMax = () => {
    document.removeEventListener("mouseup", this.onMouseUp);
    document.removeEventListener("mousemove", this.onMouseMoveMax);

    document.removeEventListener("touchend", this.onMouseUp);
    document.removeEventListener("touchmove", this.onMouseMoveMax);
  };

  render() {
    const { currentMin, currentMax, currentBudgetMax, currentBudgetMin } = this.state;

    return (
      <div ref={(ref) => (this.card = ref)} className="card">
        <div ref={(ref) => (this.slider = ref)} id="slider">
          <div
            ref={(ref) => (this.minValue = ref)}
            id="min"
            data-content={currentMin}
          >
            <div
              ref={(ref) => (this.minValueDrag = ref)}
              id="min-drag"
              onMouseDown={this.changeMinValue}
              onTouchStart={this.changeMinValue}
            ></div>
          </div>
          <div
            ref={(ref) => (this.maxValue = ref)}
            id="max"
            data-content={currentMax}
          >
            <div
              ref={(ref) => (this.maxValueDrag = ref)}
              id="max-drag"
              onMouseDown={this.changeMaxValue}
              onTouchStart={this.changeMaxValue}
            ></div>
          </div>
        </div>
        <div className="values">
          <div>{currentBudgetMin}</div>
          <div>{currentBudgetMax}</div>
        </div>
      </div>
    );
  }
}
