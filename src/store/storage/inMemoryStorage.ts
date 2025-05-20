interface InMemoryStorageType {
  [key: string]: string;
}

export class InMemoryStorage {
  private storage: InMemoryStorageType = {};

  setItem(key: string, value: string) {
    this.storage[key] = value;
  }

  getItem(key: string): string | null {
    return this.storage.hasOwnProperty(key) ? this.storage[key] : null;
  }

  removeItem(key: string) {
    delete this.storage[key];
  }

  clear() {
    this.storage = {} as Storage;
  }

  get length() {
    return Object.keys(this.storage).length;
  }

  key(index: number): string | null {
    const keys = Object.keys(this.storage);
    return keys[index] || null;
  }
}
