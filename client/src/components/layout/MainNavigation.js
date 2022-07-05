import classes from './MainNavigation.module.css';
import { Link } from 'react-router-dom';
import {useContext} from 'react';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {
    const favoritesContext = useContext(FavoritesContext);
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Travel Journeys</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/travel-journeys">All Travel Journeys</Link>
                    </li>
                    <li>
                        <Link to="/travel-journeys/add">New Journey</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>
                            My Favorites
                            <span className={classes.badge}>
                                {favoritesContext.totalFavorites}
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;