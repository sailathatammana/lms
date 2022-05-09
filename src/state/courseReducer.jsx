export default function courseReducer(state, action) {
  switch (action.type) {
    case "ADD_COURSE":
      return addCourse(state, action);
    case "SET_COURSES":
      return setCourses(state, action);
    case "UPDATE_COURSE":
      return updateCourse(state, action);
    default:
      throw new Error("no action type found");
  }

  function addCourse(state, action) {
    const { payload } = action;
    if (payload !== null) return [...state, payload];
    return state;
  }

  function setCourses(state, action) {
    const { payload } = action;
    if (payload !== null) return payload;
    return state;
  }

  function updateCourse(state, action) {
    const { payload } = action;
    const course = payload;
    const newState = [...state];
    const index = newState.findIndex((item) => item.id === course.id);

    newState[index] = { ...course };
    return newState;
  }
}
