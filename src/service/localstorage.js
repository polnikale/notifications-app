class LocalStorageService {
  async getNotifications() {
    await timeout(1000);
    const notifications = JSON.parse(localStorage.getItem('notifications')) || [];
    console.log(notifications);
    return notifications;
  }

  async appendNotification(notification) {
    console.log('APPEND', notification);
    await timeout(1000)
    const notifications = JSON.parse(localStorage.getItem('notifications')) || [];
    localStorage.setItem('notifications', JSON.stringify([...notifications, notification]));
    return notification;
  }

  async editNotification(notification, index) {
    await timeout(1000);
    console.log('EDIT', {notification, index})
    const notifications = JSON.parse(localStorage.getItem('notifications')) || [];
    console.log([notifications.slice(0, index), notifications, notifications.slice(index+1)]);
    localStorage.setItem('notifications', JSON.stringify([ ...notifications.slice(0, index), notification, ...notifications.slice(index + 1) ]) );
    return {notification, index};
  }
}

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default new LocalStorageService();