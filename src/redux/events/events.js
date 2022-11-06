const LOAD_EVENTS = 'event_viewer/events/LOAD_EVENTS';
const FILTER_EVENTS = 'event_viewer/events/FILTER_EVENTS';

const initialState = [];
let eventsData = [];

export const loadEVENTS = (events) => ({
  type: LOAD_EVENTS,
  payload: events,
});

export const filterEVENTS = (city, price) => ({
  type: FILTER_EVENTS,
  payload: { city, price },
});

const getEvents = async () => {
  const request = await fetch('db.json');
  const result = await request.json();
  eventsData = result.events;
  return result.events;
};

export const loadevents = () => async (dispatch) => {
  const events = await getEvents();
  if (events) {
    dispatch(loadEVENTS(events));
  }
};

export const filterevents = (city, price) => {
  var filtered_events = eventsData;
  city = city.toLowerCase()

  if(city && price > 0){
    filtered_events = eventsData.filter((event) => event.city.toLowerCase().includes(city) && event.price <= price)
  }
  else if(city !== "" && price == 0){
    filtered_events = eventsData.filter((event) => event.city.toLowerCase().includes(city))
  }
  else if(city === "" && price >= 0){
    filtered_events = eventsData.filter((event) => event.price <= price)
  }
  
  return filtered_events;
};

const eventsReducer = (state = initialState, action) => {
  const { payload: events } = action;
  switch (action.type) {
    case LOAD_EVENTS:
      return events
    case FILTER_EVENTS:
      return filterevents(events.city, events.price)
    default:
      return eventsData;
  }
};

export default eventsReducer;