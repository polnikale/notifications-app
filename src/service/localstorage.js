class LocalStorageService {
  timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async getNotifications() {
    await this.timeout(1000);
    const notifications = JSON.parse(localStorage.getItem('notifications')) || [];
    return notifications;
  }

  async appendNotification(notification) {
    await this.timeout(1000)
    const notifications = JSON.parse(localStorage.getItem('notifications')) || [];
    localStorage.setItem('notifications', JSON.stringify([...notifications, notification]));
  }

  async editNotification(notification, index) {
    console.log(index);
    await this.timeout(1000);
    const notifications = JSON.parse(localStorage.getItem('notifications')) || [];
    console.log([notifications.slice(0, index), notifications, notifications.slice(index+1)]);
    this._appendToStorage( [ ...notifications.slice(0, index), notification, ...notifications.slice(index + 1) ] );
  }

  _appendToStorage(notifications) {
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }
}

export default new LocalStorageService();