import "./../styles/AsideBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
function AsideBar(){
    const tab =['ratcjo', 'basilik','mart85','momo47','hectore_blue']
    return(
        <div className="container-aside">
            <div className="container-aside-profile">
                <div className="container-aside-usericone">
                    <FontAwesomeIcon icon={faUserCircle} id="usericon"/>
                    <div className="container-aside-usericone-info">
                        <div id="info">
                            <span>Astro14</span>
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
                
                {
                    tab.map((elem ,i) => ( 
                        <div key={i} className="container-aside-suggestion-friends">
                           <FontAwesomeIcon icon={faUserCircle} className="friends-icon"/>
                           <div className="container-info-friends">
                                <div className="info-friends">
                                    <span>{elem}</span>
                                    <span>Suggestion</span>
                                </div>
                                <span>S'abonner</span>
                           </div>
                        </div>
                       
                    ))
                }

            </div>
        </div>
    )
}

export default AsideBar;