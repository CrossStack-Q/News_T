// import { getByTitle } from "@testing-library/react";
import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, publishedAt } = this.props;
    return (
      <div className="my-3">
        <div className="card ">
          <img
            src={
              !imageUrl
                ? "https://st1.latestly.com/wp-content/uploads/2021/06/TW-Reuters-5-784x441.png"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">{publishedAt.slice(0, 10)}</small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary"
            >
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
