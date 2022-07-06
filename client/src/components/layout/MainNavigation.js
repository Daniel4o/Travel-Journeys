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
                        <a href="/travel-journeys">All Travel Journeys</a>
                    </li>
                    <li>
                        <a href="/travel-journeys/add">New Journey</a>
                    </li>
                    <li>
                        <a href='/favorites'>
                            My Favorites
                            <span className={classes.badge}>
                                {favoritesContext.totalFavorites}
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;