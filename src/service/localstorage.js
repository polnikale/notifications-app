class LocalStorageService {
    async getNotifications() {
      await timeout(1000);
      const notifications = JSON.parse(localStorage.getItem('notifications')) || [];
      return notifications;
    }
  
    async appendNotification(notification) {
      await timeout(1000)
      const notifications = JSON.parse(localStorage.getItem('notifications')) || [];
      const nextLastId = JSON.parse(localStorage.getItem('last-id')) + 1 || 0;
      const newNotification = { ...notification, id: nextLastId };
      localStorage.setItem('last-id', JSON.stringify(nextLastId));
      localStorage.setItem('notifications', JSON.stringify([...notifications, newNotification]));
      return newNotification;
    }
  
    async editNotification(notification) {
      await timeout(1000);
      const notifications = JSON.parse(localStorage.getItem('notifications')) || [];
      const newNotifications = notifications.map((existedNotification) => 
        existedNotification.id === notification.id
          ? notification
          : existedNotification
      );
      this._appendToStorage( newNotifications );
    }
  
    _appendToStorage(notifications) {
      localStorage.setItem('notifications', JSON.stringify(notifications));
    }
  }
  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  export default new LocalStorageService();