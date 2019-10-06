const prepareCanvas = () => {
  const canvas = document.getElementById("canvas")
  const component = document.createElement("div")
  component.setAttribute("id", "info")
  const filler = document.createElement("div")
  component.appendChild(filler)
  canvas.appendChild(component)
}

const removeCanvas = () => {
  document.getElementById("canvas").remove()
}

QUnit.test("rendering success message", (assert) => {
  prepareCanvas()
  const message = "success"

  renderSuccessMessage(message)

  assert.ok(document.getElementById("notification").innerHTML === message)
  removeCanvas()
});
