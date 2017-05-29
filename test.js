import test from 'ava'
import perfectSquare from './'

test(t => {
  t.true(perfectSquare(9))
})

test(t => {
  t.false(perfectSquare(11))
})

test(t => {
  t.true(perfectSquare(25))
})

test(t => {
  t.true(perfectSquare(36))
})

test(t => {
  t.true(perfectSquare(0))
})

test(t => {
  t.true(perfectSquare(1))
})

test(t => {
  t.false(perfectSquare(-1))
})

test(t => {
  t.false(perfectSquare(7.5))
})
