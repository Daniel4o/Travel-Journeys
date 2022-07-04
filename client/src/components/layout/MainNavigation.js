import classes from './MainNavigation.module.css';

function MainNavigation() {
    return (
    <header className={classes.header}>
        <div className={classes.logo}>Travel Journeys</div>
            <nav>
                  <ul>
                    <li>
                        <a href="/travel-journeys">All Travel Journeys</a>
                    </li>
                    <li>
                        <a href="/travel-journeys">New Journey</a>
                    </li>
                    <li>
                        <a href="/favorites">Favorites</a>
                    </li>
                </ul>
            </nav>
    </header>
    )
}

export default MainNavigation;