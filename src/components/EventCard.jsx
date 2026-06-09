function EventCard ({ title, date, category, status }) {
    return (
        <article className="event-card">
            <h2>{title}</h2>

            <p>
                <strong>Data:</strong> {date}
            </p>

            <p>
                <strong>Categoria:</strong> {category}
            </p>

            <span className="event-badge">
                {status === 'aperto' ? 'Aperto' : 'Chiuso'}
            </span>
        </article>

    );
}

export default EventCard;