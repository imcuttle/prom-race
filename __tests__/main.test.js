/**
 * @file main
 * @author imcuttle
 * @date 2018/4/4
 */
const promRace = require('../')

const delay = ms =>
  new Promise(resolve => {
    setTimeout(resolve, ms)
  })

describe('promRace', function() {
  it('should works like Promise.race', async function() {
    expect(await promRace([delay(1000).then(() => 1), delay(200).then(() => 2)])).toBe(2)
    expect(await promRace(['okk', delay(200).then(() => 2)])).toBe('okk')
  })

  it('should works well with iterable', async function() {
    const set = new Set()
    set.add(delay(1000).then(() => 1))
    set.add(delay(200).then(() => 2))

    expect(await promRace(set)).toBe(2)
  })

  it('should works well with iterable', async function() {
    const set = new Set()
    set.add(delay(1000).then(() => 1))
    set.add(delay(200).then(() => 2))

    expect(await promRace(set)).toBe(2)
  })

  it('should works well with empty array', async function() {
    expect(await promRace([])).toBeUndefined()
  })

  it('should catch first error', async function() {
    try {
      await promRace([
        delay(1000).then(() => 1),
        delay(200).then(() => {
          throw new Error('lalala')
        })
      ])
    } catch (e) {
      expect(e).toMatchInlineSnapshot(`[Error: lalala]`)
    }
  })

  it('should cancelling the others', async function() {
    let val

    await promRace([
      Object.assign(delay(1000).then(() => 1), {
        cancel: () => {
          val = 1000
        }
      }),
      Object.assign(delay(1200).then(() => 1), {
        cancel: () => {
          val = 1200
        }
      }),
      Object.assign(delay(1200).then(() => 1), {
        cancel: () => {
          val = 1400
        }
      })
    ])

    expect(val).toBe(1400)
  })
})
