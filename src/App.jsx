import { useState } from 'react';
import events from './data/events';
import EventList from './components/EventList';

function App() {
  const [eventSelected, setEventSelected] = useState('');

  const filteredEvents = events.filter(event => {
    if (eventSelected === '') {
      return true;
    }
    return event.category === eventSelected;
  });

  return 
  
}

export default App;
