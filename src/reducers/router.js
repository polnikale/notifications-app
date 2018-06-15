const route = (state = {name: 'NOTIFICATIONS'} , action) => {
  switch(action.type) {
    case 'NOTIFICATION_CREATE':
      return {
        name: 'NOTIFICATION_CREATE',
        ...action.payload //типа сюда, как вариант, может передаваться какой-то data по-типу ссылок, текста(если нужно отредачить уведомление)
      }
    case 'NOTIFICATIONS':
      return {
        name: 'NOTIFICATIONS' //сюда вроде ничего не можна будет передать
      }
    default:
      return state;
  }
}

export default route;