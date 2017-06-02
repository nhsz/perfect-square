import test from 'ava'
import perfectSquare from '../lib'

test(t => {
  t.false(perfectSquare(-1))
})

test(t => {
  t.true(perfectSquare(0))
})

test(t => {
  t.true(perfectSquare(1))
})

test(t => {
  t.false(perfectSquare(1.5))
})

test(t => {
  t.false(perfectSquare(2))
})

test(t => {
  t.true(perfectSquare(4))
})

test(t => {
  t.true(perfectSquare(9))
})
