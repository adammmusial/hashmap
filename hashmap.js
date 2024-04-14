export default class HashMap {
    constructor() {
        this.buckets = []
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    set(key, value) {

        const index = this.hash(key);

        // Check if there is already a bucket (array) at the calculated index in the hash table.
        // If there isn't a bucket (i.e., it's undefined), we need to initialize one.
        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }

        const bucket = this.buckets[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value;
                return;
            }
        }
        bucket.push([key, value])

    }

    get(key){
        const index = this.hash(key)
        const buckets = this.buckets[index]
        if (!buckets){
            return null
        }

        for (let i = 0; i < buckets.length; i++){
            if (buckets[i][0] === key){
                return buckets[i][1];
            }
        }

        return null
    }

    has(key){
        const index = this.hash(key)
        const bucket = this.buckets[index]
        if (bucket = true){
         return true
        }
        else {
            return false
        }
    }

    remove(key){
        const index = this.hash(key)
        const bucket = this.buckets[index]


        if (!bucket){
            return null
        }

        for (let i = 0; i < bucket.length; i++){
            if (bucket[i][0] === key){
                bucket.splice(i,0);
                return;
            }
        }

    }

    count(){
        var count = 0;
        for ( property in hash_table ) count++;
    }
}


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
  module.exports = Cache;
  