import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://media.istockphoto.com/id/1038356020/vector/restaurant-icon.jpg?s=612x612&w=0&k=20&c=Tk_v3JuJA4lz_8ZRJi78xS4p75Idqt97uEtYJciVtFI="
          alt="logo"
        />
      </div>
      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  return (
    <div
      className="res-card"
      /*style={{
        backgroundColor: "#f0f0f0",
      }}*/
    >
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rating: {avgRating}</h4>
      <h4>Cost for two: {costForTwo}</h4>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "528523",
      name: "New Ambur Biryani Point",
      cloudinaryImageId: "298d65e176f27d4ba02791b5c8eed812",
      locality: "Koramangala",
      areaName: "Adugodi",
      costForTwo: "₹250 for two",
      cuisines: ["Biryani", "Chinese", "North Indian"],
      avgRating: 4.3,
    },
  },
  {
    info: {
      id: "275",
      name: "Mani's Dum Biryani",
      cloudinaryImageId:
        "FOOD_CATALOG/IMAGES/CMS/2024/3/27/bc960282-e31e-4e77-97e9-6c6ec9cec813_c46e6499-a9ca-43e8-91d5-85aa6f0afa15.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹400 for two",
      cuisines: ["Andhra", "Biryani"],
      avgRating: 4.6,
    },
  },
  {
    info: {
      id: "362457",
      name: "The Bengal Club",
      cloudinaryImageId: "0528d0ed67b259173f72fb29be4cc6b7",
      locality: "1st Stage",
      areaName: "Domlur",
      costForTwo: "₹500 for two",
      cuisines: ["Bengali"],
      avgRating: 4.2,
    },
  },
  {
    info: {
      id: "18973",
      name: "Nandhana Palace",
      cloudinaryImageId: "0387817e239462fcfb98a1f568fa1a76",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Andhra", "South Indian", "North Indian"],
      avgRating: 4.3,
    },
  },
  {
    info: {
      id: "793205",
      name: "Kuttanad Restaurant",
      cloudinaryImageId:
        "FOOD_CATALOG/IMAGES/CMS/2024/5/15/bbcc8acd-f8f0-46f5-b6f0-169d6480a3fa_ff4ef768-62f3-469f-b108-0976c65b2ba3.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹350 for two",
      cuisines: ["Kerala", "Biryani", "Seafood"],
      avgRating: 4.2,
    },
  },
  {
    info: {
      id: "108097",
      name: "Ambur Star Briyani Since 1890",
      cloudinaryImageId:
        "FOOD_CATALOG/IMAGES/CMS/2024/4/13/0f26fc1d-4055-4700-84df-503c9473ea59_049e26a5-47b6-4c7a-85a5-7e4159f254ff.jpg",
      locality: "2nd Stage",
      areaName: "BTM Layout",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Chettinad", "Andhra", "Beverages", "Seafood"],
      avgRating: 4.5,
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search-box">search</div>
      <div className="res-container">
        <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} />
        <RestaurantCard resData={resList[4]} />
        <RestaurantCard resData={resList[5]} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
