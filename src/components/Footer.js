import { Link } from "react-router-dom";
const Footer = () => 
{
    return (
        <div className="footer">
            <div className="footerText">Kitchen Web-App Managed by thisisamitt</div>
            <div className="icons">
                <Link to="https://www.instagram.com/thisisamitt/"><i className="fa fa-instagram purple"></i></Link>
                <Link to="#"><i className="fa fa-whatsapp"></i></Link>
                <Link to="https://www.facebook.com/profile.php?id=100077191418175"><i className="fa fa-facebook"></i></Link>
                <Link to="https://twitter.com/thisisamittt"><i className="fa fa-twitter"></i></Link>
            </div>
        </div>
    );
};
export default Footer;