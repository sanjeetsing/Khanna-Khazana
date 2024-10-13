import { useEffect, useState } from "react";
import RestaurantCard from "./ResturantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  //Local state variable
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filteredResturants, setFilteredResturants] = useState([]);

  const [searchText, setSearchText] = useState("");

  //when ever state variable update , react triggers a reconciliation cycle(re-renders the components)
  console.log("body renders");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfResturants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResturants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    //conditional rendering
    //if (listOfResturants.length == 0) {
    //  return <Shimmer />;
    //}
  };

  return listOfResturants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              //Filter the resturant card and update the ui
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //Filter the resturant card and update the ui
              console.log(searchText);

              const filteredResturants = listOfResturants.filter((res) =>
                res.info.name.toLowerCase.includes(searchText.toLowerCase())
              );

              setFilteredResturants(filteredResturants);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfResturants.filter(
              (res) => res.info.avgRating > 3
            );
            setListOfResturants(filteredList);
          }}
        >
          Top Rated Resturant
        </button>
      </div>
      <div className="res-container">
        {filteredResturants.map((resturant) => (
          <RestaurantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
