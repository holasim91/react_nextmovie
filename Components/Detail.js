import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({ detail }) => {
  if (!detail.production_companies) {
    return null;
  }
  return (
    <div>
      <div>
        <h1>{detail.title}</h1>
        <h4>Release Date: {detail.release_date}</h4>
        <div>
          production Company:
          {detail.production_companies.map((company, idx) => (company.logo_path ? (
            <img
              key={idx}
              className="logo"
              src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
              alt={company.name}
              title={company.name}
              style={{ width: '50px', height: '50px' }}
            />
          ) : (
            <></>
          )))}
        </div>
        <h4>score: {detail.vote_average}</h4>
        <h4 className="genres">
          genres:
          {detail.genres.map((genre, i) => (
            <h3 key={i}>{ genre.name }</h3>
          ))}
        </h4>
        <div className="summary">
          <p style={{ fontWeight: 300 }}>Description:</p> {detail.overview}
        </div>
        <h4>status : {detail.status}</h4>
      </div>
      <img
        className="poster"
        src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`}
        alt={detail.title}
        title={detail.title}
      />
    </div>
  );
};

Detail.propTypes = {
  detail: PropTypes.object.isRequired,
};

export default Detail;
