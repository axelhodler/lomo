const prepareCanvas = () => {
  const canvas = document.getElementById("canvas")
  const component = document.createElement("div")
  component.setAttribute("id", "info")
  const filler = document.createElement("div")
  component.appendChild(filler)
  canvas.appendChild(component)
}

const clearCanvasContents = () => {
  document.getElementById("canvas").innerHTML = ""
}

QUnit.test("rendering success message", (assert) => {
  prepareCanvas()
  const message = "success"

  renderSuccessMessage(message)

  const notification = document.getElementById("notification")
  assert.ok(notification.getAttribute("class").includes("alert-success"))
  assert.ok(notification.innerHTML === message)
  clearCanvasContents()
});

QUnit.test("rendering fail message", (assert) => {
  prepareCanvas()
  const message = "fail"

  renderFailMessage(message)

  const notification = document.getElementById("notification")

  assert.ok(notification.getAttribute("class").includes("alert-danger"))
  assert.ok(notification.innerHTML === message)
  clearCanvasContents()
});
