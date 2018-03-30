import React from 'react';

export class ImageWithFallback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onImgError = () => {
    if (this.props.fallbackSrc) {
      this.setState({ failed: true });
    }
  };

  render() {
    if (this.state.failed || !this.props.src) {
      return <img className={this.props.customClass} src={this.props.fallbackSrc} />;
    } else {
      return <img className={this.props.customClass} src={this.props.src} onError={this.onImgError} />;
    }
  }
}

ImageWithFallback.propTypes = {
  customClass: React.PropTypes.string,
  src: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.string
  ]),
  fallbackSrc: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.string
  ]).isRequired
};

export default ImageWithFallback;