import '../styles/App.css';
import Event from './event'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadevents } from '../redux/events/events';
import SearchBar from '../components/searchBar'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadevents());
  });

  return (
    <div className="App">
     <h1> Events </h1>
     <SearchBar />
     <Event />
    </div>
  );
}

export default App;
