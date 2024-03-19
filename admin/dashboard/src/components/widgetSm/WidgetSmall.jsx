import { useEffect, useState } from "react";
import "./widgetsm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { userRequest } from "../../utilities/requestMethods";

const WidgetSmall = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUser(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetsmTitle">New Join Members</span>
      <ul className="widgetList">
        {users?.map((user) => (
          <li className="widgetListItem" key={user._id}>
            <img
              src={
                user.img ||
                "https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png"
              }
              alt=""
              className="widgetImg"
            />
            <div className="widgetUser">
              <span className="widgetUserName"> {user.username}</span>
            </div>
            <button className="widgetSmbtn">
              <VisibilityIcon className="widgetIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSmall;
