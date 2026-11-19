// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import "./ArtistPage.css";

// const artists = {
//   "picasso": {
//     name: "Pablo Picasso",
//     birthDate: "October 25, 1881",
//     deathDate: "April 8, 1973",
//     bio: "A Spanish painter known for pioneering Cubism and revolutionizing modern art.",
//     coverImage: "/assets/Images/scream.jpg",
//   },
// };

// const ArtistPage = () => {
//   const { artistId } = useParams();
//   const navigate = useNavigate();
//   const artist = artists[artistId];

//   if (!artist) {
//     return <h2>Artist not found</h2>;
//   }

//   return (
//     <div className="artist-container">
//       <div className="cover">
//         <img src={artist.coverImage} alt={`${artist.name} Cover`} className="cover-img" />
//         <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
//         <h1 className="gallery-title">3D Art Gallery</h1>
//       </div>

//       <div className="artist-info">
//         <h2 className="artist-name">{artist.name}</h2>
//         <p className="artist-dates">{artist.birthDate} – {artist.deathDate || "Present"}</p>
//         <p className="artist-bio">{artist.bio}</p>

//         <div className="image-gallery">
//           <img 
//             src="/assets/Images/preview.png" 
//             alt="Gallery Preview" 
//             className="gallery-preview" 
//             onClick={() => navigate("/gallery")}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArtistPage;


// src/components/ArtistPage.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { artists } from "../data/artistsData"; // Import artists data
import "./ArtistPage.css";

const ArtistPage = () => {
  const { artistId } = useParams();
  const navigate = useNavigate();
  const artist = artists[artistId];

  if (!artist) {
    return <h2>Artist not found</h2>;
  }

  return (
    <div className="artist-container">
      <div className="cover">
        <img src={artist.coverImage} alt={`${artist.name} Cover`} className="cover-img" />
        <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
        <h1 className="gallery-title">3D Art Gallery</h1>
      </div>

      <div className="artist-info">
        <h2 className="artist-name">{artist.name}</h2>
        <p className="artist-dates">{artist.birthDate} – {artist.deathDate || "Present"}</p>
        <p className="artist-bio">{artist.bio}</p>

        <div className="image-gallery">
          <img 
            src="/assets/Images/preview.png" 
            alt="Gallery Preview" 
            className="gallery-preview" 
            onClick={() => navigate("/gallery")}
          />
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;
