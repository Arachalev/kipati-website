import { useEffect } from "react";
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
import Search from "../../UI/Search";
import { DUMMY_DATA } from "../../UI/DummyData";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store";

let pageSize = 10;

const Reminders = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const reminderData = useSelector(
    (state: RootState) => state.reminders.reminder
  );

  const loadReminders = reminderData.map((reminder) => {
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
  });


  const [allReminders, setAllReminders] = useState(loadReminders);


  const filteredReminders = (reminderData: any) => {
    const finalReminders = reminderData.map((reminder: any) => {
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
    });

    setAllReminders(finalReminders);
    console.log(allReminders);
  };

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return DUMMY_DATA.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div className={classes.reminders}>
      <HeaderLogged />
      <div className={classes.remindersContainer}>
        <Search inputData={reminderData} filteredData={filteredReminders} />
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
            {allReminders}
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
