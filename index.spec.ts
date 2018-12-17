import * as methods from './index'
import { each, sortBy, random, times, isEqual } from 'lodash'

const array = times(1e6, () => random(-1e6, 1e6))
const result = sortBy(array)

describe('Sorting methods', () => {
  each(methods, (method, name) => {
    it('hello world', done => {
      expect(isEqual(method(array), result)).toBe(true)
      done()
    })
  })
})
