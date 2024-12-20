import React from 'react'
import PropTypes from 'prop-types'


const Card = ({ title, description, imgUrl, alt, buttonUrl }) => {
  return (<div className="col-md-6 col-lg-3 mt-4">
  <div className="card p-0 h-100" >
    <div className="ratio ratio-4x3 w-100" >
      <img src={imgUrl} className="card-img-top object-fit-cover " alt={alt} />
    </div>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
    </div>
      <div className="card-footer text-body-secondary">
        <a href={buttonUrl} className="btn btn-primary">Reserva Ya!</a>
      </div>
  </div>
  </div>)
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imgUrl: PropTypes.string,
  alt: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonUrl: PropTypes.string

}


export default Card 