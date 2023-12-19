import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

import "./Contact.scss";

const Contact = () => {
    return (
        <div className="contact">
            <div className="wrapper">
                <span>BE IN TOUCH WITH US:</span>
                <div className="mail">
                    <input type="text" placeholder="Enter Your Email..." />
                    <button>JOIN US</button>
                </div>
                <div className="icons">
                    <FacebookIcon className="icon" />
                    <InstagramIcon className="icon" />
                    <TwitterIcon className="icon" />
                    <PinterestIcon className="icon" />
                </div>
            </div>
        </div>
    );
};

export default Contact;
