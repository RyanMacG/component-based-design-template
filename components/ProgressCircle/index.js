import React from 'react'
import { string } from 'prop-types'

const circle = {
  radius: 60,
  strokeWidth: 2
}

export default class ProgressCircle extends React.Component {
  static propTypes = {
    progress: string.isRequired,
    break: string.isRequired,
  }

  position () {
    return circle.radius + circle.strokeWidth
  }

  polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    const angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }

  describeArc(x, y, radius, startAngle, endAngle){
    const start = this.polarToCartesian(x, y, radius, endAngle);
    const end = this.polarToCartesian(x, y, radius, startAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    const d = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");

    return d;
  }

  calculateAngle (progress) {
    return ((progress/100)*360)
  }

  render () {
    return (
      <svg>
        <circle 
          cx={this.position()}
          cy={this.position()}
          r={circle.radius}
          stroke="#ffdbb4"
          strokeWidth={circle.strokeWidth}
          fill="#fff6ed"
        />
        <path
          fill="none"
          strokeWidth="38"
          stroke="#c7e9c2"
          d={this.describeArc(
              this.position(),
              this.position(),
              circle.radius-20,
              this.calculateAngle(100-this.props.break),
              360
            )} 
          />
        <path
          fill="none"
          strokeWidth="38"
          stroke="rgba(224, 175, 122, 0.8)"
          d={this.describeArc(
              this.position(),
              this.position(),
              circle.radius-20,
              0,
              this.calculateAngle(this.props.progress)
            )} 
          />
      </svg>
    )
  }
}
