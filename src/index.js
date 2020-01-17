import React, { Component } from "react";
import PropTypes from "prop-types";

const scrollStyle = ({
  width,
  height = "3",
  color = "red",
  duration = "1",
  zIndex = "99"
}) => ({
  position: "fixed",
  top: 0,
  margin: 0,
  padding: 0,
  backgroundColor: color,
  height: `${height}px`,
  width,
  transitionProperty: "width",
  transitionDuration: `${duration}s`,
  transitionTimingFunction: "ease-out",
  zIndex
});

const getDocHeight = () =>
  Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );

const calculateScrollDistance = debug => {
  const scrollTop = window.pageYOffset || document.body.scrollTop;
  const winHeight = window.innerHeight || document.body.clientHeight;
  const docHeight = getDocHeight();
  const totalDocScrollLength = docHeight - winHeight;
  const scrollPos = Math.floor((scrollTop / totalDocScrollLength) * 100);
  debug && console.log({ scrollPos });
  return scrollPos;
};

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "0"
    };
    this.getScroll = this.getScroll.bind(this);
  }

  getScroll() {
    const { debug } = this.props;
    if (calculateScrollDistance() > 0) {
      this.setState({ width: `${calculateScrollDistance(debug)}%` });
    } else {
      this.setState({ width: "0" });
    }
  }

  componentDidMount() {
    const { debug } = this.props;
    try {
      window.addEventListener("scroll", this.getScroll);
    } catch (oError) {
      debug && console.log(oError);
    }
  }

  componentWillUnmount() {
    const { debug } = this.props;
    try {
      window.removeEventListener("scroll", this.getScroll);
    } catch (oError) {
      debug && console.log(oError);
    }
  }

  render() {
    const { width } = this.state;
    const { height, color, duration, zIndex } = this.props;
    return (
      <div
        style={scrollStyle({
          width,
          height,
          color,
          duration,
          zIndex
        })}
      />
    );
  }
}

ProgressBar.propTypes = {
  debug: PropTypes.bool,
  height: PropTypes.string,
  duration: PropTypes.string,
  color: PropTypes.string,
  zIndex: PropTypes.string
};

export default ProgressBar;
