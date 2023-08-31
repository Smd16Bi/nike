import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

export const fetchLocales = createAsyncThunk("data/fetchLocalesStatus", async (path: string, thunkAPI) => {
  const response = await axios.get(path);

  if (response.data.length === 0) {
    return thunkAPI.rejectWithValue("");
  }
  return thunkAPI.fulfillWithValue(response.data);
});

type Locales = {
  banner: {
    currency: string;
    size: string;
    more: string;
    color: string,
    avalible_color: string;
    avalible_size: string;
    material: string;
  };
};

interface LocalesinitialState {
  status: "loading" | "success" | "error";
  locales: Locales;
}

const initialState: LocalesinitialState = {
  status: "loading",
  locales: {
    banner: {
      currency: "",
      size: "",
      color: "",
      more: "",
      avalible_color: "",
      avalible_size: "",
      material: ""
    },
  },
};

const localesSlice = createSlice({
  name: "locales",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLocales.rejected, (state) => {
      state.status = "error";
    });
    builder.addCase(fetchLocales.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchLocales.fulfilled, (state, action) => {
      state.locales = action.payload;
      state.status = "success";
    });
  },
});

export const selectlocales = (state: RootState) => state.locales;

export default localesSlice.reducer;
