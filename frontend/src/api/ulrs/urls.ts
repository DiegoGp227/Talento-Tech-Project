export const API_BASE_URL = "http://localhost:5000/api/";

//Auth
export const signUpURL = `${API_BASE_URL}signup`;

export const loginUrl = `${API_BASE_URL}login`;

//Teachers
export const createTeacherUrl = `${API_BASE_URL}teacher`;

export const getTeacherUrl = (institution_id: number) =>
  `${API_BASE_URL}teacher/${institution_id}`;
