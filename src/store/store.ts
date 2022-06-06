import { configureStore } from "@reduxjs/toolkit";
import reminderReducer from "./slices/remindersSlice"
import notificationsReducer from "./slices/notificationSlice"

export const store = configureStore({
    reducer:{
       reminders: reminderReducer,
       notification: notificationsReducer   
    }

})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store