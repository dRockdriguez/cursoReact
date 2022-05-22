import { createSelector } from "@reduxjs/toolkit";

const selectErrorForm = ({
  rootReducer: {
    ui: { msgError },
  },
}) => {
  return msgError;
};

const isLoading = ({
  rootReducer: {
    ui: { loading },
  },
}) => {
  return loading;
};

export const selectError = createSelector([selectErrorForm], (error) => error);
export const selectLoading = createSelector([isLoading], (loading) => loading);
