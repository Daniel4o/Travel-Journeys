import classes from './MainNavigation.module.css';
import GetFavoritesForm from '../forms/favorites/GetFavoritesForm';

function MainNavigation() {
    const { favoritesLength } = GetFavoritesForm();
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
                                {favoritesLength}
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;