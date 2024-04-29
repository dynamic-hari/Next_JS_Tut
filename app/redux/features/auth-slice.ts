import { createSlice, PayloadAction } from "@reduxjs/toolkit"
type InitialState = {
    value: AuthState;
}
type AuthState = {
    isAuth: boolean;
    username: string;
    uid: string;
    isModerator: boolean
}

const initialState = {
    value: {
        isAuth: false,
        username: "",
        uid: "",
        isModerator: false,
    } as AuthState,
} as InitialState

export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: () => {
            return initialState
        },
        logIn: (state: any, action: PayloadAction<string>) => {
            return {
                value: {
                    isAuth: true,
                    username: action.payload,
                    uid: "fjshdyfgjhsgf",
                    isModerator: false,
                }
            }
        },
        toggleModerator: (state: any) => {
            state.value.isModerator = !state.value.isModerator
        }
    }

});

export const { logOut, logIn, toggleModerator } = auth.actions
export default auth.reducer