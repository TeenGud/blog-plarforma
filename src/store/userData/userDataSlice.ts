import { createSlice } from '@reduxjs/toolkit';

interface UserDataSlice {
    user: {
        email: string | null;
        token: string | null;
        username: string | null;
        avatarUrl: string | null;
    }
}

const initialState: UserDataSlice = {
    user: {
        email: localStorage.getItem("email") !== "undefined" ? localStorage.getItem("email") : "",
        token: localStorage.getItem("token") !== "undefined" ? localStorage.getItem("token") : null,
        username: localStorage.getItem("username") !== "undefined" ? localStorage.getItem("username") : "",
        avatarUrl: localStorage.getItem("avatarUrl") !== "undefined" ? localStorage.getItem("avatarUrl") : ""
    }
};

const userDataSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addEmail: (state, action) => {
            state.user.email = action.payload
        },
        addUsername: (state, action) => {
            state.user.username = action.payload
        },
        addToken: (state, action) => {
            state.user.token = action.payload
        },
        addAvatarUrl: (state, action) => {
            state.user.avatarUrl = action.payload
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchTickets.pending, (state) => {
    //             state.status = 'loading';
    //             state.error = null;
    //         })
    //         .addCase(fetchTickets.fulfilled, (state, action: PayloadAction<[]>) => {
    //             state.status = 'resolve';
    //             // state.allTickets = sortTickets(action.payload, 'cheap') as [] | listOfTickets;
    //             state.allTickets = action.payload
    //         })
    //         .addCase(fetchTickets.rejected, (state, action) => {
    //             state.status = 'rejected';
    //             state.error = action.payload as string;
    //         });
    // },
});
// export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async (_, { rejectWithValue }) => {
//     try {
//         const tickets = await searchTickets(searchId);
//         return tickets.tickets;
//     } catch (err) {
//         return rejectWithValue(err.message);
//     }
// });

export const { addEmail, addUsername, addToken, addAvatarUrl } = userDataSlice.actions;
export default userDataSlice.reducer;
