import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Notifications.css";

export function Notification() {
    const { user } = useSelector((state) => state.user);

    return (
    <div className=" notification">
      <a
        class=" nav-link"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
    <i className="fa-solid fa-bell fs-4"></i>
      </a>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">Notifications</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
        {user &&  user.notifications?.map((notification) => (
            <div className=" card">
            <p>{notification.description}</p>
            <Link to={notification.link} className=" text-decoration-none link">Click here for further informations</Link>
        </div>
          ))}
        </div>
      </div>
    </div>
  );
}
