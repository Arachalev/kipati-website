import classes from "./Dashboard.module.css";
import HeaderLogged from "../../UI/HeaderLogged";
import SingleReminders from "../Reminders/SingleReminder";
import Search from "../../UI/Search";
import DashboardCard from "./DashboardCard";
import DashboardReminders from "./DashboardReminders";
import DashboardNotifications from "./DashboardNotifications";
import DashboardCalendar from "./DashboardCalendar";


const DummyData = [
  {
    id: 1,
    amount: 5,
    text: "Reminders due in 7 days",
    link: "/home/user/reminder",
    linkText: "View All Reminders",
  },
  {
    id: 2,
    amount:2,
    text: " Days until the next due date",
    link: "/home/user/reminder",
    linkText: "View All Reminders",
  },
  {
    id: 3,
    amount: 7,
    text: "7 Recipients on your list",
    link: "/home/user/reminder",
    linkText: "Add to you Contacts",
  },
];

const cards = DummyData.map((item) => (
  <DashboardCard
    key={item.id}
    amount={item.amount}
    text={item.text}
    link={item.link}
    linkText={item.linkText}
  />
));

const Dashboard = () => {
  return (
    <div className="max-w-[100vw] overflow-hidden">
      <HeaderLogged />
      <div className={classes.dashboardContainer}>
        <div className={classes.leftDashboard}>
        <div className={classes.search}>
          <Search />
          <div className={classes.cards}>
              {cards}
          </div>
        </div>
        <div>
            <DashboardReminders/>
        </div>
        </div>
        <div className={classes.rightDashboard}>
          <DashboardCalendar/>
          <DashboardNotifications/>
        </div>
       
      </div>
    </div>
  );
};

export default Dashboard;
