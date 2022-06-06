import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DUMMY_DATA2 } from "../../components/UI/DummyData";

export interface notificationState{
    notification:{
        key:number,
        title:string,
        text:string,
        time:string
    }[]
}

const initialState:notificationState={
    notification:DUMMY_DATA2
}

const notificationSlice = createSlice({
    name:"notifications",
    initialState,
    reducers:{
        edit(state,action){

        }
    }
})

export const {edit} = notificationSlice.actions;
export default notificationSlice.reducer;



// {
//     key: 1,
//     title: "Reminder Accepted",
//     text: "Babajide accepted to be reminded about the renewal of your Driver’s License. They will now be able to recieve an Email alert on",
//     time: "1hr ago",
//   }