import { createSelector } from "@reduxjs/toolkit";

const selectErrorForm = ({
  rootReducer: {
    ui: { msgError },
  },
}) => {
  return msgError;
};

export const selectError = createSelector([selectErrorForm], (error) => error);
