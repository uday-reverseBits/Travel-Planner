import { Props } from './Time'

export const Entry = ({ entry }: EntryProps) => {

    return (
        <article className="card">
            <div className="image">
                <img src={entry.img} alt="" />
            </div>
            <div className="info">
                <div className="japan">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                        </svg>
                    </span>
                    <h2>{entry.country_name}</h2>
                    <a href="">View on Google Maps</a>
                </div>

                <h2>{entry.place}</h2>
                <h3>{entry.time}</h3>
                <p>{entry.about}</p>
                <Props />
            </div>

        </article>
    )
}

type EntryProps = {
    entry: {
        img: string,
        country_name: string,
        place: string,
        time: string | number,
        about: string
    }

}

