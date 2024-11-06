import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, register } from "./authService";

const userExist = JSON.parse(localStorage.getItem("user"));

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: userExist || null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
  },

  // curState ===>>> not the actual State but a DRAFT, therefore we are not directly mutating the state.
  // Immer ===> modifies the state accordingly || we only specify what we want to modify.
  // DRAFT ==>> A mutable copy of the state, created using Immer's "Produce" function

  extraReducers: (builder) => {
    builder
      // REGISTER USER
      .addCase(registerUser.pending, (curState) => {
        curState.isLoading = true;
        curState.isError = false;
        curState.isSuccess = false;
      })
      .addCase(registerUser.fulfilled, (curState, action) => {
        // might look like we are DIRECTLY mutating the state, BUT we are NOT.
        curState.isLoading = false;
        curState.isError = false;
        curState.isSuccess = true;
        curState.user = action.payload;
      })
      .addCase(registerUser.rejected, (curState, action) => {
        curState.isLoading = false;
        curState.isError = true;
        curState.isSuccess = false;
        curState.message = action.payload;
      })
      // LOGIN USER
      .addCase(loginUser.pending, (curState) => {
        curState.isLoading = true;
        curState.isError = false;
        curState.isSuccess = false;
      })
      .addCase(loginUser.fulfilled, (curState, action) => {
        curState.isLoading = false;
        curState.isError = false;
        curState.isSuccess = true;
        curState.user = action.payload;
      })
      .addCase(loginUser.rejected, (curState, action) => {
        curState.isLoading = false;
        curState.isError = true;
        curState.isSuccess = false;
        curState.message = action.payload;
      })
      // LOGOUT USER
      .addCase(logoutUser.fulfilled, (curState) => {
        curState.isLoading = false;
        curState.isError = false;
        curState.isSuccess = false;
        curState.user = null;
      });
  },
});

// Register
export const registerUser = createAsyncThunk(
  "AUTH/REGISTER",
  async (formData, thunkAPI) => {
    try {
      return await register(formData);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Login
export const loginUser = createAsyncThunk(
  "AUTH/LOGIN",
  async (formData, thunkAPI) => {
    try {
      return await login(formData);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Logout
export const logoutUser = createAsyncThunk("AUTH/LOGOUT", async () => {
  localStorage.removeItem("user");
});

export default authSlice.reducer;
