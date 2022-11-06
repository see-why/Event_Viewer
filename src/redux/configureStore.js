import { configureStore } from '@reduxjs/toolkit'
import eventsReducer from './events/events';


const store = configureStore({reducer: eventsReducer});

export default store;