import classes from "./Profile.module.css";
import { Fragment } from "react";
import HeaderLogged from "../../UI/HeaderLogged";
import Menu from "../../UI/Menu";
import profile from "../../../assets/images/testimony.png";
import ProfileInfo from "./ProfileInfo";
import Button from "../../UI/Button";
import {IoIosArrowForward} from "react-icons/io"

const Profile = () => {
  return (
    <Fragment>
      <HeaderLogged />
      <Menu />
      <div className={classes.profile}>
        <div>
          <p>My Account</p>
        </div>

        <div className={classes.profileContainer}>
          <div className={classes.ProfileIntro}>
            <span className={classes.profileImage}>
              <img src={profile} />
            </span>
            <div>
              <h4>Ajadioni Francis</h4>
              <p>Project Manager</p>
            </div>
          </div>
          <div className={classes.profileInfoContainer}>
            <ProfileInfo
              title1="First Name"
              title2="Last Name"
              detail1="Francis"
              detail2="Ajadioni"
              buttonText="Edit"
            />
            <ProfileInfo
              title1="Email"
              title2="Password"
              detail1="Francis"
              detail2="************"
              buttonText="Change"
            />
            <ProfileInfo
              title1="Kiapti NG"
              title2="Role"
              detail1="The Company"
              detail2="Project Manager"
              buttonText="Edit"
            />
            <div className={classes.benefits}>
              <div>
              <span>
                <h4>View Pro Benefits </h4>
                <IoIosArrowForward />
              </span>
              <hr />
              <p>
                You are currently using the free version of this app, upgrade to
                the Premium plan and get more benefits
              </p>


              </div>
              
            <Button text="Go Premium" className="py-2 px-4 min-w-fit  whitespace-nowrap self-end "/>

            </div>
          </div>
        </div>
        <div className={classes.info}>

            <div>
                </div>

        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
