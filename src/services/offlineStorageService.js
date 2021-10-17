export class OfflineStorageService {
  static getItem (key) {
    const rawValue = localStorage.getItem(key)
    if (rawValue) return JSON.parse(rawValue)
    return null
  }

  static setItem (key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  static removeItem (key) {
    localStorage.removeItem(key)
  }
}
