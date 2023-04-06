import React, { Component } from 'react'


export class Newscontent extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, date, author } = this.props;
    return (
      <div>
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p class="card-text"><small class="text-body-secondary"><strong>By {author}</strong></small></p>
            <p class="card-text"><small class="text-body-secondary"><strong>{new Date(date).toDateString()}</strong></small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Read</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newscontent
