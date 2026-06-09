
import { events } from "../data/events";

function App() {
  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (

    <main>
      <h1>EventBoard</h1>

      <p>Eventi trovati: {sortedEvents.length}</p>

      <ul>
        {sortedEvents.map((event) => (
          <li key={event.id}>
            <h2>{event.title}</h2>
            <p>Data: {event.date}</p>
            <p>Categoria: {event.category}</p>
            <p>Stato: {event.status}</p>
          </li>
        ))}
      </ul>
    </main>
  );

}
export default App;
