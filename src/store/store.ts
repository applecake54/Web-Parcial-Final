import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Poem {
  id: string;
  title: string;
  excerpt?: string;
  author?: string;
  lines?: string[];
  linecount?: string;
  category?: string; 
}

const initialState: Poem[] = [];

const poemsSlice = createSlice({
  name: "poems",
  initialState,
  reducers: {
    setPoems: (state, action: PayloadAction<Poem[]>) => action.payload,
    addPoem: (state, action: PayloadAction<Poem>) => {
      state.push(action.payload);
    },
  },
});

export const { setPoems, addPoem, } = poemsSlice.actions;

export const store = configureStore({
  reducer: {
    poems: poemsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
