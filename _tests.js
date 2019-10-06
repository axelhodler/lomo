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

class NotificationPageObject {
  // obj should contain knowledge on bootstrap classes
  _element = document.getElementById("notification")

  hasClass(clazz) {
    return this._element.getAttribute("class").includes(clazz)
  }
  hasInnerHTML(html) {
    return this._element.innerHTML === html
  }
}

QUnit.test("rendering success message", (assert) => {
  prepareCanvas()
  const message = "success"

  renderSuccessMessage(message)

  const notification = new NotificationPageObject()
  assert.ok(notification.hasClass("alert-success"))
  assert.ok(notification.hasInnerHTML(message))
  clearCanvasContents()
});

QUnit.test("rendering fail message", (assert) => {
  prepareCanvas()
  const message = "fail"

  renderFailMessage(message)

  const notification = new NotificationPageObject()
  assert.ok(notification.hasClass("alert-danger"))
  assert.ok(notification.hasInnerHTML(message))
  clearCanvasContents()
});
