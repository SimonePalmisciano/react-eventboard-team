
import { events } from "../data/events";

function App() {
  return (

    <main>
      <h1>EventBoard</h1>

      <p>Eventi trovati: {events.length}</p>

      <ul>
        {events.map((event) => (
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
