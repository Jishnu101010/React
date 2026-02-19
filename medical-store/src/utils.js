export const getUsers = () =>
  JSON.parse(localStorage.getItem("users")) || [];

export const saveUsers = (users) =>
  localStorage.setItem("users", JSON.stringify(users));

export const getMedicines = () =>
  JSON.parse(localStorage.getItem("medicines")) || [];

export const saveMedicines = (meds) =>
  localStorage.setItem("medicines", JSON.stringify(meds));
