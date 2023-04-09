import men from "../image/mypic1.jpg";
import "../App.css";

export default function ProfileImg(){
    return (
        <div className="profile-img">
            <img src={men} alt="profile-pic" className="img" />
        </div>
    )
}
    