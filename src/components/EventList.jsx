function EventList({ events }) {
    
    if (!events || events.length === 0) {
        return <p>Nessun evento trovato</p>;
    }

    return (
        <ul>
            {events.map((event) => (
                <li key={event.id}>
                    <h1>INSERIRE COMPONENTE CARD</h1>
                </li>
            ))}
        </ul>
    );
}
export default EventList