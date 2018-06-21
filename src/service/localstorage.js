class LocalStorageService {
  async getNotifications() {
    const notifications = await setTimeout(() => {
      return JSON.parse(localStorage.getItem('notifications'));
    }, 1000);
    return notifications;
  }

  async appendNotification(notification) {
    await setTimeout(() => {
      const notifications = JSON.parse(localStorage.getItem('notifications')) || [];
      localStorage.setItem('notifications', JSON.stringify([...notifications, notification]));
    }, 1000);
  }

  async editNotification(notification, index) {
    await setTimeout(() => {
      const notifications = JSON.parse(localStorage.getItem('notifications')) || [];
      this._appendToStorage( [ notifications.slice(0, index), notification, notifications.slice(index + 1) ] );
    }, 1000);
  }

  _appendToStorage(notifications) {
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }
}

export default new LocalStorageService();