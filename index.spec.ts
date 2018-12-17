import * as methods from './index'
import { each, sortBy, random, times, isEqual } from 'lodash'

const array = times(1e6, () => random(-1e6, 1e6))
const result = sortBy(array)

describe('Sorting methods', () => {
  let input: number[]
  beforeEach(() => {
    input = array.slice()
  })

  each(methods, (method, name) => {
    it(name, done => {
      expect(isEqual(method(input), result)).toBe(true)
      done()
    })
  })
})
