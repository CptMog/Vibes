import "./AsideBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
function AsideBar(){

    return(
        <div className="container-aside">
            <div className="container-aside-profile">
                <div className="container-aside-usericone">
                    <FontAwesomeIcon icon={faUserCircle} id="usericon"/>
                    <div className="container-aside-usericone-info">
                        <div id="info">
                            <span>ceblaze</span>
                            <span>MyMy</span>
                        </div>
                        <span>Basculer</span>
                    </div>
                </div>
            </div>
            <div className="container-aside-suggestion"> 
                <div className="container-aside-suggestion-all">
                    <span>Suggestion pour vous</span>
                    <span>Voir tout</span>
                </div>
            </div>
        </div>
    )
}

export default AsideBar;