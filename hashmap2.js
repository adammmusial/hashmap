class Map {
    constructor() {
      this.hashmap = new Map();
    }
    get(key) {
      return this.hashmap.get(key);
    }
    set(key, value) {
      this.hashmap.set(key, value);
    }
    delete(key) {
      this.hashmap.delete(key);
    }
    clear() {
      this.hashmap.clear();
    }
    size() {
      return this.hashmap.size;
    }
    has(key) {
      return this.hashmap.has(key);
    }
  }
  
  module.exports = Map;
  