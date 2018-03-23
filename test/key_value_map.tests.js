
import key_value_map from '../functions/key_value_map'
import compare    from './utils/compare'

it("key_value_map", () => {
  compare.as_json(key_value_map((v) => v, (v) => v+2, [1, 2, 3]), {1:3, 2:4, 3:5})
  compare.as_json(key_value_map((v) => v, (v) => v+2, 1), {1:3})
})

it("key_value_map indexed", () => {
  compare.as_json(key_value_map((v, i) => i+1, (v, i) => v+2, [4, 5, 6]), {1:6, 2:7, 3:8})
  compare.as_json(key_value_map((v, i) => i+1, (v, i) => v+2, 3), {1:5})
})