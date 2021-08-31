const initialState = [
    { id: 1, name: "Rakesh Sharma", email: "email@email.com", phone: 1234567890 },
    { id: 2, name: "Rahul Name", email: "test@test.com", phone: 4567891230 },
  ];

  const contactReducer = (state = initialState, action) => {
    switch (action.type) {

      case "ADD_CONTACT":
        state = [...state, action.payload];
        return state;

      case "UPDATE_CONTACT":
        const contactUpdate = state.filter((contact) =>
        contact.id === action.payload.id
              ? Object.assign(contact, action.payload)
              : contact
          );
          state = contactUpdate;
          return state;
          
      case "DELETE_CONTACT":
        const contactFilter = state.filter((contact) =>
          contact.id === action.payload ? null : contact
        );
        state = contactFilter;
        return state;

      default:
        return state;
    }
  };
  export default contactReducer;