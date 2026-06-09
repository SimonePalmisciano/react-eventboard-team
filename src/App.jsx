import { useState } from "react";

const events = [
  { id: 1, title: "Frontend Conference", date: "2026-06-20", category: "Conferenze", status: "aperto" },
  { id: 2, title: "React Workshop", date: "2026-07-05", category: "Workshop", status: "aperto" },
  { id: 3, title: "CSS Meetup", date: "2026-07-12", category: "Meetup", status: "chiuso" },
  { id: 4, title: "Node.js Workshop", date: "2026-07-18", category: "Workshop", status: "aperto" },
  { id: 5, title: "Vue.js Meetup", date: "2026-08-02", category: "Meetup", status: "chiuso" },
  { id: 6, title: "Web Performance Conference", date: "2026-08-15", category: "Conferenze", status: "aperto" },
];

function App() {
  const [option, setOption] = useState("Tutti");

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

      <p className="text-muted">
        Hai selezionato: <strong className="text-dark">{option}</strong>
      </p>

    </div>
  );
}

export default App;