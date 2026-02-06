import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 1. Create the async thunk
// The first argument is the action type prefix.
// The second argument is the payload creator (async function).
export const fetchLogs = createAsyncThunk("logs/fetchLogs", async () => {
  // Simulate an API call
  // const response = await fetch("https://api.example.com/logs");
  // if (!response.ok) throw new Error("Failed to fetch");
  // return response.json();

  // Mock data for demonstration
  return new Promise((resolve) =>
    setTimeout(() => resolve([
      { id: 1, activity: "Commute", carbon: 2.5 },
      { id: 2, activity: "Lunch", carbon: 0.5 },
    ]), 1000)
  );
});

const logSlice = createSlice({
  name: "logs",
  initialState: {
    data: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLogs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchLogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default logSlice.reducer;
