import { useState } from "react";
import { events } from "../data/events.js"

function App() {
  const [option, setOption] = useState("Tutti");

  const sortedEvents = [...events].sort((a,b) => new Date(a.date) -new Date(b.date));

  return (
    <div className="container py-4">
      <h1 className="mb-4">Lista Eventi</h1>

      <div className="row align-items-center mb-3">
        <div className="col-auto">
          <label htmlFor="filtro-categoria" className="col-form-label fw-semibold">
            Filtra per categoria:
          </label>
        </div>
        <div className="col-auto">
          <select
            id="filtro-categoria"
            className="form-select" value={option} onChange={(e) => setOption(e.target.value)}>
            <option value="Tutti">Tutti</option>
            <option value="Conferenze">Conferenze</option>
            <option value="Workshop">Workshop</option>
            <option value="Meetup">Meetup</option>
          </select>
        </div>
      </div>

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

      <p className="text-muted">
        Hai selezionato: <strong className="text-dark">{option}</strong>
      </p>

    </div>
  );
}

export default App;