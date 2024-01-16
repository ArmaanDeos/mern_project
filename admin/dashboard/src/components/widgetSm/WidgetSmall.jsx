import "./widgetsm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";

const WidgetSmall = () => {
  return (
    <div className="widgetSm">
      <span className="widgetsmTitle">New Join Members</span>
      <ul className="widgetList">
        <li className="widgetListItem">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png"
            alt=""
            className="widgetImg"
          />
          <div className="widgetUser">
            <span className="widgetUserName"> Anna Keller</span>
            <span className="widgetUserTitle"> Software Engineer</span>
          </div>
          <button className="widgetSmbtn">
            <VisibilityIcon className="widgetIcon" />
            Display
          </button>
        </li>
        <li className="widgetListItem">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png"
            alt=""
            className="widgetImg"
          />
          <div className="widgetUser">
            <span className="widgetUserName"> Anna Keller</span>
            <span className="widgetUserTitle"> Software Engineer</span>
          </div>
          <button className="widgetSmbtn">
            <VisibilityIcon className="widgetIcon" />
            Display
          </button>
        </li>
        <li className="widgetListItem">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png"
            alt=""
            className="widgetImg"
          />
          <div className="widgetUser">
            <span className="widgetUserName"> Anna Keller</span>
            <span className="widgetUserTitle"> Software Engineer</span>
          </div>
          <button className="widgetSmbtn">
            <VisibilityIcon className="widgetIcon" />
            Display
          </button>
        </li>
        <li className="widgetListItem">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png"
            alt=""
            className="widgetImg"
          />
          <div className="widgetUser">
            <span className="widgetUserName"> Anna Keller</span>
            <span className="widgetUserTitle"> Software Engineer</span>
          </div>
          <button className="widgetSmbtn">
            <VisibilityIcon className="widgetIcon" />
            Display
          </button>
        </li>
        <li className="widgetListItem">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png"
            alt=""
            className="widgetImg"
          />
          <div className="widgetUser">
            <span className="widgetUserName"> Anna Keller</span>
            <span className="widgetUserTitle"> Software Engineer</span>
          </div>
          <button className="widgetSmbtn">
            <VisibilityIcon className="widgetIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSmall;
