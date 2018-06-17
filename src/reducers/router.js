const NOTIFICATION_CREATE = 'NOTIFICATION_CREATE';
const RETURN_BACK = 'RETURN_BACK';

const initialState = {
  page: 'NOTIFICATIONS'
}

const reducer = (state = initialState , action) => {
  switch(action.type) {
    case NOTIFICATION_CREATE:
      return {
        page: NOTIFICATION_CREATE,
        notification: action.notification, //типа сюда, как вариант, может передаваться какой-то data по-типу ссылок, текста(если нужно отредачить уведомление)
      };
    case RETURN_BACK:
      return {
        page: RETURN_BACK,
        notification: {
          heading: '',
          description: '',
          pictures: []
        }
      };
    default:
      return state;
  }
}

export default reducer;