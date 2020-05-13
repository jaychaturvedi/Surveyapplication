import axios from "axios";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: "fetch_user", payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: "fetch_user", payload: res.data });
};


export const submitSurvey = (values, history) => async dispatch =>{
  const res = await axios.post("/api/surveys", values);
  history.push('/surveys')
  dispatch({ type: "fetch_user", payload: res.data });

}


export const fetchSurveys = () => async dispatch =>{
  const res = await axios.get("/api/surveys");
  dispatch({ type: "fetch_surveys", payload: res.data });
}

export const deleteSurvey = (surveyId) => async dispatch =>{
  const url = "/api/surveys/" + surveyId
  await axios.delete(url);
  const res = await axios.get("/api/surveys");
  dispatch({ type: "fetch_surveys", payload: res.data });
}