import './../styles/NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { faCompass } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function NavBar(){
    return (
        <div className="navigator">
            <div className="container-1">
                <span id="logo">Vibes</span>
                <div className="navigator-container-1-navigation">
                    <div className="search-bloc">
                        <label htmlFor="search_bar"><FontAwesomeIcon icon={faSearch} /></label>
                        <input type="search" id="search_bar" placeholder="Rechercher"/>
                    </div>
                    <nav>
                        <ul>
                            <li><FontAwesomeIcon icon={faHome} /></li>
                            <li><FontAwesomeIcon icon={faPaperPlane} /></li>
                            <li><FontAwesomeIcon icon={faPlusSquare} /></li>
                            <li><FontAwesomeIcon icon={faCompass} /></li>
                            <li><FontAwesomeIcon icon={faHeart} /></li>
                            <li><FontAwesomeIcon icon={faUserCircle} /></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default NavBar;