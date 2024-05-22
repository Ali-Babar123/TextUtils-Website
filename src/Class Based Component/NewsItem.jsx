

import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imgUrl,  newsUrl, author, date ,source} = this.props;
        return (
            <div className='container my-3'>
        
                <div className="card">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%',zIndex: '1'}}>
    {source}
    <span className="visually-hidden">unread messages</span>
  </span>
                    <img src={!imgUrl?"https://ichef.bbci.co.uk/news/1024/branded_news/f4e6/live/b7d47320-f6f8-11ee-91a1-f3f970b1833b.jpg":imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toUTCString()}
                        </small></p>
                        <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewsItem
