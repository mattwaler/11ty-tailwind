export const qs = (el, parent = document) => parent.querySelector(el)

export const qsa = (el, parent = document) =>
  Array.from(parent.querySelectorAll(el))

export const on = (event, el, fn) => el.addEventListener(event, fn)

export const run = (element, fn) => {
  const matches = qsa(element)
  if (matches.length > 0) {
    matches.forEach(match => fn(match))
  }
}
