import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {DUMMY_DATA} from "../../components/UI/DummyData"

export interface reminderState{
    reminder:  {
        key: number,
        title: string,
        dueDate: string,
        sentTo: string,
        nextReminder: string,
        status: string,
        statusClass: string,
      } []
}

const initialState:reminderState={
    reminder: DUMMY_DATA
}


const remindersSlice = createSlice({
    name:"reminders",
    initialState,
    reducers:{
        edit(state, action){

        }
    }
})

export const {edit} = remindersSlice.actions;
export default remindersSlice.reducer