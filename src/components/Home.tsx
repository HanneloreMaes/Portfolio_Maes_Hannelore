import '../css/Home.scss';
import LinkedInL from '../assets/linkedIn_light.png';
import githubL from '../assets/github_light.png';
import mailL from '../assets/mail_light.png';
import LinkedInD from '../assets/linkedIn_dark.png';
import githubD from '../assets/github_dark.png';
import mailD from '../assets/mail_dark.png';
import expoQR from '../assets/expo-qr.svg';
import { useThemeDetector } from './DarkTheme';

export default function Home(){

    const isDarkTheme = useThemeDetector();

    return(
        <div>
            <div className="homeContainerWeb">
                <h1 className="homeTitleH1">Hannelore Maes</h1>
                <h3 className="homeTitleH3">Developer (Mobile)</h3>

                <div className='contact'>
                    <a href="http://www.linkedin.com/in/hannelore-maes-a308791b9/" target="_blank" rel="noreferrer"><img className='iconContact' src={ isDarkTheme? LinkedInL : LinkedInD} alt="linkedIn_logo_black" /></a>
                    <a href="http://github.com/HanneloreMaes" target="_blank" rel="noreferrer"><img className='iconContact' src={ isDarkTheme? githubL : githubD} alt="github_logo_black" /></a>
                    <a href="mailto:Hannelore-Maes@outlook.be" target="_blank" rel="noreferrer"><img className='iconContact mail' src={ isDarkTheme? mailL : mailD} alt="mail_logo_black" /></a>
                </div>
                <div className="scanContainer">
                    <p className='infoScan' >Scan QR-code with your phone</p>
                    <p className='infoScan marginElement'>Make sure you have <span className='expoGo'>Expo Go</span> installed</p>
                    <img className='imgQR' src={expoQR} alt="expo-qr" />
                </div>
            </div>

            <div className="homeContainerMob">
                <h1 className="homeTitleH1">Hannelore</h1>
                <h1 className="homeTitleH1 lastName">Maes</h1>
                <h3 className="homeTitleH3 developerMob">Developer (Mobile)</h3>

                <div className='contact'>
                    <a href="http://www.linkedin.com/in/hannelore-maes-a308791b9/" target="_blank" rel="noreferrer"><img className='iconContact' src={ isDarkTheme? LinkedInL : LinkedInD} alt="linkedIn_logo_black" /></a>
                    <a href="http://github.com/HanneloreMaes" target="_blank" rel="noreferrer"><img className='iconContact' src={ isDarkTheme? githubL : githubD} alt="github_logo_black" /></a>
                    <a href="mailto:Hannelore-Maes@outlook.be" target="_blank" rel="noreferrer"><img className='iconContact mail' src={ isDarkTheme? mailL : mailD} alt="mail_logo_black" /></a>
                </div>

                <div className="scanContainer">
                    <div className="scanMobile">
                        <p className='infoScan'>Open the link with your phone</p>
                        <p className='infoScan marginElement'>Make sure you have <span className='expoGo'>Expo Go</span> installed</p>
                    </div>
                    <button className='btnPortfolio'>
                        <a className='linkPortfolio' href="exp://exp.host/@hannelore-maes/Portfolio-RN?release-channel=default" >View Portfolio</a>
                    </button>
                </div>
            </div>
        </div>
    )
}
