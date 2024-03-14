import {useDispatch} from "react-redux";
import {removeMoviesFromArray} from "../../../../store/watchListSlice.ts";
// Styles
import styles from "../index.module.scss";

interface ObjectData {
    id: number | string
    title: string,
    posterPath: string,
    rating: number
}

const WatchlistCards = ({ id, title, posterPath, rating }: ObjectData) => {

    const dispatch = useDispatch()

    const handleDeleteMoviesFromArray = () => {
        dispatch(removeMoviesFromArray(id))
    }

    return (
        <div className={styles.watchlist__parent}>
            <div className={styles.watchlist__cards}>
                <div className={styles.watchlist__card}>
                    <p className={styles.watchlist__movie__name}>{title.length > 17 ? `${title.slice(0, 15)}...` : title}</p>
                    <div className={styles.watchlist__episode__count}>
                        <p className={styles.watchlist__episode__name}>Rating</p>
                        <p className={styles.watchlist__episode__name}>{Math.ceil(rating)}/10 stars</p>
                    </div>
                    <div className={styles.watchlist__episode__btn}>
                        <button onClick={handleDeleteMoviesFromArray} className={styles.watchlist__plus__btn}>-</button>
                        <button className={styles.watchlist__wathc__btn}>Watch</button>
                    </div>
                </div>
                <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt="rick" className={styles.watchlist__list__image}/>
            </div>
        </div>
    );
};

export default WatchlistCards;