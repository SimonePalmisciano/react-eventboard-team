import EventCard from "./EventCard";


function EventList({ events }) {

    if (!events || events.length === 0) {
        return <p>Nessun evento trovato</p>;
    }

    return (
        <ul>
            {events.map(event => {
                return (
                    <EventCard
                        title={event.title}
                        date={event.date}
                        category={event.category}
                        status={event.status}
                    />
                )
            })}
        </ul>
    );
}
export default EventList