import { Link } from "react-router-dom";
const Footer = () => 
{
    return (
        <div className="footer">
            <div className="footerText">Kitchen Web-App Managed by thisisamitt</div>
            <div className="icons">
                <Link to="#"><i className="fa fa-instagram"></i></Link>
                <Link to="#"><i className="fa fa-whatsapp"></i></Link>
                <Link to="#"><i className="fa fa-facebook"></i></Link>
                <Link to="#"><i className="fa fa-twitter"></i></Link>
            </div>
        </div>
    );
};
export default Footer;