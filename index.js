/**
 * A better `Promise.race`
 * @author imcuttle
 */

/**
 * @public
 * @param iterable {Iterable}
 * An iterable object, such as an Array.
 * @param options {{}}
 * @param [options.cancelWhenFinished=true] {boolean} - Whether call the others promises' `cancel` method.
 * @return {Promise<any>}
 */
function race(iterable, { cancelWhenFinished = true } = {}) {
  if (!iterable) {
    return Promise.resolve()
  }
  const completed = new Set()
  // Make iterable tasks as an array.
  let tasks = [...iterable]
  if (!tasks.length) {
    return Promise.resolve()
  }
  tasks = tasks.map(el => {
    if (!(el && typeof el.then === 'function')) {
      el = Promise.resolve(el)
    }

    return Promise.resolve(el).then(
      val => {
        completed.add(el)
        return val
      },
      error => {
        completed.add(el)
        throw error
      }
    )
  })

  const cancelIfFinished = () => {
    if (cancelWhenFinished) {
      for (const p of iterable) {
        if (!completed.has(p) && p && typeof p.then === 'function' && typeof p.cancel === 'function') {
          p.cancel()
        }
      }
    }
  }

  return Promise.race(tasks).then(
    bullet => {
      cancelIfFinished()
      return bullet
    },
    error => {
      cancelIfFinished()
      throw error
    }
  )
}

module.exports = race
