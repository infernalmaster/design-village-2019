export let supportsPassive = false
try {
  var opts = Object.defineProperty({}, "passive", {
    get() {
      return (supportsPassive = true)
    },
  })
  window.addEventListener("testPassive", null, opts)
  window.removeEventListener("testPassive", null, opts)
} catch (e) {}
