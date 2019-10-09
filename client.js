const smileys = document.getElementById("smileys")

const clearChildren = (node) => {
  while (node && node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

const renderSuccessMessage = (message) => {
  const notification = document.createElement("div")
  const infoBox = document.getElementById("info")
  clearChildren(infoBox)
  notification.setAttribute("id", "notification")
  notification.setAttribute("class", "alert alert-success")
  notification.innerHTML = message
  infoBox.appendChild(notification)
}

const renderFailMessage = (message) => {
  const notification = document.createElement("div")
  const infoBox = document.getElementById("info")
  clearChildren(infoBox)
  notification.setAttribute("id", "notification")
  notification.setAttribute("class", "alert alert-danger")
  notification.innerHTML = message
  infoBox.appendChild(notification)
}

const renderGuessedRight = () => {
  const smiley = document.createElement("span")
  smiley.innerHTML = "✅"
  smileys.appendChild(smiley)
  renderSuccessMessage(`Yes. ${buildMessage()}`)
}

const buildMessage = () => {
  let company = carcompanies[0]
  return `The marketcap of ${company.name} is <b>${company.market_capitalization_in_bn}bn </b> (Displayed anchor was ${company.market_capitalization_anchor_in_bn})`
}

const renderGuessedWrong = () => {
  const smiley = document.createElement("span")
  smiley.innerHTML = "❌"
  smileys.appendChild(smiley)
  let company = carcompanies[0]
  renderFailMessage(`No. ${buildMessage()}`)
}

const renderMarketcap = () => {
  const capName = document.getElementById("currentCapName")
  const capNameText = document.createElement("div")
  const nextCompany = carcompanies[0]
  capNameText.innerHTML = nextCompany.name
  clearChildren(capName)
  capName.appendChild(capNameText)
  const capAnchor = document.getElementById("currentCapAnchor")
  const capAnchorText = document.createElement("div")
  capAnchorText.innerText = nextCompany.market_capitalization_anchor_in_bn + " billions"
  capAnchor.innerHTML = ""
  capAnchor.appendChild(capAnchorText)
}

const checkForEnd = () => {
  if (carcompanies.length === 1) {
    document.getElementById("game").innerHTML = "Thanks for playing"
  } else {
    carcompanies.shift()
    renderMarketcap()
  }
}
