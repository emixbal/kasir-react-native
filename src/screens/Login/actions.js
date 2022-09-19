const key = "LOGIN"

export const type = {
  RESET: `${key}_RESET`,
  CHANGE_LOADING: `${key}_CHANGE_LOADING`,
  CHANGE_USERNAME: `${key}_CHANGE_USERNAME`,
  CHANGE_PASSOWRD: `${key}_CHANGE_PASSOWRD`,
};

export const reset = (value) => ({
  type: type.RESET,
  value,
});

export const change_loading = (value) => ({
  type: type.CHANGE_LOADING,
  value,
});

export const change_username = (value) => ({
  type: type.CHANGE_USERNAME,
  value,
});

export const change_password = (value) => ({
  type: type.CHANGE_PASSOWRD,
  value,
});



export default type;