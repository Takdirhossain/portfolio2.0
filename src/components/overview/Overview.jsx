import "./overview.css"
import facebook from '../../assets/facebook.png'
import github from "../../assets/github.png"
import linkeDin from "../../assets/linkedin.png"
import DownloadIcon from '@mui/icons-material/Download';
const Overview = () => {
    return (
        <div>
            <div className="overview">
            
            </div>
            <div className="overviewContent">
                <div>
                <h2>Hi, I Am Takdir Hossain</h2>
                <p>Full Stack Web Developer and Web Application specializing in front-end and back-end development. Experienced with all stages of the development cycle for dynamic websites. Well versed in numerous programming languages JavaScript ES6 Nodejs, structured language HTML5 CSS3, Libraries REACT-JS With MongoDB Database.</p>
                <div className="socialicon">
                    <a href="" target="_blank" ><img  src={facebook} alt=""  /></a>
                    <a href="" target="_blank" ><img src={linkeDin} alt=""  /></a>
                    <a href="" target="_blank" ><img src={github} alt=""  /></a>
                    
                </div>
                <button className="downloadcv"> <DownloadIcon/> Download CV</button>
                </div>
            </div>
        </div>
    )
}
export default Overview