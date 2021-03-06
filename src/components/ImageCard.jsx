import React from 'react';

class ImageCard extends React.Component {
  render() {
    const { description, urls } = this.props;

    return (
      <div>
        <img alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
