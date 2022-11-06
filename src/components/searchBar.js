import React from 'react';
import { useDispatch } from 'react-redux';
import { loadevents, filterEVENTS } from '../redux/events/events';

const SearchBar = () => {
  const dispatch = useDispatch();

  const filterData = () => {
    var city = document.getElementById("city_bar").value
    var price = document.getElementById("price_bar").value
    
    city ||= ""
    price ||= 0

    if (city || price) {
      dispatch(filterEVENTS(city, price));
    } else {
      dispatch(loadevents());
    }
  };


  return(
    <div>
      <input type="text" id="city_bar" placeholder="city"/>
      <input type="number" min="0" id="price_bar" placeholder="price"/>
      <button id="search_button" onClick={filterData}>Search</button>
    </div>
  )
}

export default SearchBar;