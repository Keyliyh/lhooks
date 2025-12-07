import { describe, it, expect } from 'vitest'
import { sum } from '../index'

describe('hello', () => {
  it('should work', () => {
    expect(sum(1, 2)).toEqual(3)
  })
})

