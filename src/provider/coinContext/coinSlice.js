import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchCoin, fetchCoins } from "./coinService";

const coinSlice = createSlice({
  name: "coin",
  initialState: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    coins: [],
    coin: null,
    message: "",
  },

  extraReducers: (builder) => {
    builder
      // GET COINS
      .addCase(getCoins.pending, (curState) => {
        curState.isLoading = true;
        curState.isError = false;
        curState.isSuccess = false;
      })
      .addCase(getCoins.fulfilled, (curState, action) => {
        curState.isLoading = false;
        curState.isError = false;
        curState.isSuccess = true;
        curState.coins = action.payload;
      })
      .addCase(getCoins.rejected, (curState, action) => {
        curState.isError = true;
        curState.isLoading = false;
        curState.isSuccess = false;
        curState.message = action.payload;
      })
      // GET SINGLE COIN
      .addCase(getCoin.pending, (curState) => {
        curState.isLoading = true;
        curState.isError = false;
        curState.isSuccess = false;
      })
      .addCase(getCoin.fulfilled, (curState, action) => {
        curState.isLoading = false;
        curState.isError = false;
        curState.isSuccess = true;
        curState.coin = action.payload;
      })
      .addCase(getCoin.rejected, (curState, action) => {
        curState.isError = true;
        curState.isLoading = false;
        curState.isSuccess = false;
        curState.message = action.payload;
      });
  },
});

export default coinSlice.reducer;

export const getCoins = createAsyncThunk("FETCH/COINS", async (_, thunkAPI) => {
  try {
    return await fetchCoins();
  } catch (error) {
    const message = error.response.data.message;
    return thunkAPI.rejectWithValue(message);
  }
});
export const getCoin = createAsyncThunk("FETCH/COIN", async (id, thunkAPI) => {
  try {
    return await fetchCoin(id);
  } catch (error) {
    const message = error.response.data.message;
    return thunkAPI.rejectWithValue(message);
  }
});
