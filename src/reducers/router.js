const route = (state = 'NOTIFICATIONS' , action) => {
  switch(action.type) {
    case 'NOTIFICATION_CREATE':
      return 'NOTIFICATION_CREATE';
    case 'NOTIFICATIONS':
      return 'NOTIFICATIONS';
    default:
      return state;
  }
}

export default route;