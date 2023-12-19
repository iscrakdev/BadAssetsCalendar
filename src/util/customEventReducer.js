function customEventReducer(state, action) {
  console.log('reducer was called')
  switch (action.type) {
    case "LOAD_EVENTS": {
      return JSON.parse(localStorage.getItem("customEvents"));
    }
    case "CREATE_EVENT": {
      console.log('reducer was triggered')
      const newEvent = action.payload;
      const updatedState = [...state, newEvent];
      localStorage.setItem("customEvents", JSON.stringify(updatedState));
      return updatedState;
    }
    case "EDIT_EVENT": {
      const updatedEvent = action.payload;
      const updatedState = state.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      );
      localStorage.setItem("customEvents", JSON.stringify(updatedState));
      return updatedState;
    }
    case "DELETE_EVENT": {
      const eventToDelete = action.payload;
      const updatedState = state.filter(
        (event) => event.id !== eventToDelete
      );
      localStorage.setItem("customEvents", JSON.stringify(updatedState));
      return updatedState;
    }
    default: {
      return state;
    }
  }
}

export default customEventReducer;
