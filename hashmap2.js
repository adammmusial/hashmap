export default class MapProto {
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
    keys(){
        return Array.from(this.hashmap.keys());
    }

    values(){
        return this.hashmap.values();
    }

    entries(){
        return Array.from(this.hashmap.entries())
    }

  }


  