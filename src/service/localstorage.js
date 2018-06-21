class LocalStorageService {
  async getNotifications() {
    const notifications = await setTimeout(() => {
      return JSON.parse(localStorage.getItem('notifications'));
    }, 500);
  }

  async appendNotification(notification) {
    await setTimeout(() => {
      const notifications = JSON.parse(localStorage.getItem('notifications'));
      localStorage.setItem('notifications', JSON.stringify([...notifications, notification]));
    });
  }

  async editNotification(notification, index) {
    await setTimeout(() => {
      const notifications = JSON.parse(localStorage.getItem('notifications'));
      this._appendToStorage( [ notifications.slice(0, index), notification, notifications.slice(index + 1) ] );
    })
  }

  _appendToStorage(notifications) {
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }
}