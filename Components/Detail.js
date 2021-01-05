import React, { useEffect, useState } from "react";
import axios from "axios";
import dotenv from "dotenv";
import "./Detail.css";

dotenv.config();

const API_KEY = process.env.REACT_APP_API_KEY;

const Detail = ({ movie_id }) => {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  if (!location.state) {
    history.push("/");
  }
  useEffect(() => {
    const fetchDetailMovie = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
        );
        setDetail(response.data);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    };
    fetchDetailMovie();
  }, [id]);

  if (loading) {
    return (
      <div className="loader">
        <span className="loader__text">Loading...</span>
      </div>
    );
  }

  if (!detail) {
    return null;
  }

  console.log(detail);

  return (
    <div>
      <div className="detail">
        <h1 className="detail__title">{detail.title}</h1>
        <h4 className="year">Release Date: {detail.release_date}</h4>
        <div>
          production Company:{" "}
          {detail.production_companies.map((company, idx) =>
            company.logo_path ? (
              <img
                key={idx}
                className="logo"
                src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
                alt={company.name}
                title={company.name}
                style={{ width: "50px", height: "50px" }}
              />
            ) : (
              <></>
            )
          )}
        </div>
        <h4>score: {detail.vote_average}</h4>
        <h4 className="genres">
          genres: {detail.genres.map((genre) => genre.name + " ")}
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

export default Detail;
