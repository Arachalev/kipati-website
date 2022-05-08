import classes from "./Reminders.module.css";
import HeaderLogged from "../../UI/HeaderLogged";
import Menu from "../../UI/Menu";
import SingleReminders from "./SingleReminder";
import { BsSearch } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Pagination from "../../UI/Pagination";
import { useState, useMemo } from "react";

let pageSize = 10;
const DUMMY_DATA = [
  {
    key: 1,
    title: "Driver's License",
    dueDate: "Sept. 14, 2022",
    sentTo: "Samuel A. ,Claire I, FRSC Ikeja command, Lagos",
    nextReminder: "Oct. 14, 2022",
    status: "Due",
    statusClass: "bg-blue-500 ",
  },
  {
    key: 2,
    title: "Driver's License",
    dueDate: "Sept. 14, 2022",
    sentTo: "Samuel A. ,Claire I, FRSC Ikeja command, Lagos",
    nextReminder: "Oct. 14, 2022",
    status: "Due",
    statusClass: "bg-blue-500 ",
  },
  {
    key: 3,
    title: "Driver's License",
    dueDate: "Sept. 14, 2022",
    sentTo: "Samuel A. ,Claire I, FRSC Ikeja command, Lagos",
    nextReminder: "Oct. 14, 2022",
    status: "Due",
    statusClass: "bg-blue-500 ",
  },
  {
    key: 4,
    title: "Driver's License",
    dueDate: "Sept. 14, 2022",
    sentTo: "Samuel A. ,Claire I, FRSC Ikeja command, Lagos",
    nextReminder: "Oct. 14, 2022",
    status: "Due",
    statusClass: "bg-blue-500 ",
  },
  {
    key: 5,
    title: "Driver's License",
    dueDate: "Sept. 14, 2022",
    sentTo: "Samuel A. ,Claire I, FRSC Ikeja command, Lagos",
    nextReminder: "Oct. 14, 2022",
    status: "Due",
    statusClass: "bg-blue-500 ",
  },
  {
    key: 6,
    title: "Driver's License",
    dueDate: "Sept. 14, 2022",
    sentTo: "Samuel A. ,Claire I, FRSC Ikeja command, Lagos",
    nextReminder: "Oct. 14, 2022",
    status: "Due",
    statusClass: "bg-blue-500 ",
  },
];

const Reminders = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return DUMMY_DATA.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div>
      <HeaderLogged />

      <div className={classes.remindersContainer}>
        <div className={classes.remindersSearch}>
          <BsSearch className={classes.search} />
          <input type="text" placeholder="Search Here..." />
        </div>

        <div className={classes.allReminders}>
          <div className={classes.sortContainer}>
            <div className={classes.sortReminders}>
              <h2>Reminders</h2>
              <span className={classes.sortSelector}>
                <h4>SORT BY: ALL</h4> <IoIosArrowDown className="text-xl" />
              </span>
            </div>
            <hr />
          </div>

          <div className={classes.reminders}>
            {currentTableData.map((reminder) => {
              return (
                <SingleReminders
                  key={reminder.key}
                  title={reminder.title}
                  dueDate={reminder.dueDate}
                  sentTo={reminder.sentTo}
                  nextReminder={reminder.nextReminder}
                  status={reminder.status}
                  statusClass={reminder.statusClass}
                />
              );
            })}
          </div>
          {/* <div className={classes.remindersPagination}> */}
            <Pagination
              className={classes.pagination}
              currentPage={currentPage}
              totalCount={DUMMY_DATA.length}
              pageSize={pageSize}
              onPageChange={(page: number) => {
                setCurrentPage(page);
              }}
            />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Reminders;