import React from "react";

class Card extends React.Component {
  render() {
    let typeColor = `btn btn-${this.props.colorType}`;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={this.props.imageLink}
          title={this.props.imageTitle}
          alt={this.props.imageTitle}
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.cardTitle}</h5>
          <p className="card-text">{this.props.cardText}</p>
          <a href={this.props.btnLink} className={typeColor}>
            {this.props.btnTitle}
          </a>
        </div>
      </div>
    );
  }
}

export default Card;
