interface Action {
  type: "increment" | "decrement";
}

// type Action = {
//   type: "increment" | "decrement";
// };

function reducer(state: number, action: Action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

reducer(5, { type: "decrement" });
