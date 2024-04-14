import HashMap from './hashmap.js'
import MapProto from './hashmap2.js'

const map = new HashMap()
const map2 = new MapProto()

console.log(map)

const key1 = "jp2"
const val1 = "420"
const key2 = "jp3"
const val2 = "421"

map.set(key1,val1)
map.set(key2,val2)
console.log(map)
console.log(map.values())
console.log(map.entries())


map2.set(key1,val1)
map2.set(key2,val2)
console.log(map2)
console.log(map2.values())
console.log(map2.entries())




