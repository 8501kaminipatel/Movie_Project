import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BASEURL = import.meta.env.VITE_BASEURL;

const MovieCard = ({ movieId, title, genre, director, releaseYear, description, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {


    console.log("Sending DELETE request for movieId:", movieId);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.delete(BASEURL + `/movie/deleteMovie/${movieId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        withCredentials: true,
      });
      console.log("Delete response:", res.data);
      alert("Movie deleted successfully!");
      onDelete?.(); // Refresh movie list
    } catch (error) {
      console.log("Failed to delete movie:", error);
      alert("Failed to delete movie.");
    }
  };

  const handleUpdate = () => {
    navigate(`/update/${movieId}`, {
      state: {
        title,
        genre,
        director,
        releaseYear,
        description,
      },
    });
  };

  return (
    <div className="card shadow-sm border-primary mb-4" style={{ width: "100%", maxWidth: "400px" }}>
      <div className="card-body">
        <h5 className="card-title text-primary">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {genre} | {releaseYear}
        </h6>
        <p className="card-text"><strong>Director:</strong> {director}</p>
        <p className="card-text">{description}</p>
        <div className="d-grid gap-2">
          <button onClick={handleDelete} className="btn btn-danger">
            Delete Movie
          </button>
          <button onClick={handleUpdate} className="btn btn-success">
            Update Movie
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
