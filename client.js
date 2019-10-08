const marketCaps = {"car_companies":[{"name":"Daimler","market_capitalization_in_bn":50.96,"market_capitalization_anchor_in_bn":57.075},{"name":"Volkswagen","market_capitalization_in_bn":81.24,"market_capitalization_anchor_in_bn":91.801},{"name":"BMW","market_capitalization_in_bn":42.2,"market_capitalization_anchor_in_bn":37.558},{"name":"Toyota","market_capitalization_in_bn":223.11,"market_capitalization_anchor_in_bn":249.883},{"name":"Ford","market_capitalization_in_bn":36.2,"market_capitalization_anchor_in_bn":40.906},{"name":"General Motors","market_capitalization_in_bn":53.94,"market_capitalization_anchor_in_bn":46.388},{"name":"Ferrari","market_capitalization_in_bn":28.93,"market_capitalization_anchor_in_bn":33.27},{"name":"Fiat Chrysler Automobiles","market_capitalization_in_bn":19.29,"market_capitalization_anchor_in_bn":16.396},{"name":"Tesla","market_capitalization_in_bn":44.17,"market_capitalization_anchor_in_bn":39.311}]}
const carcompanies = marketCaps.car_companies
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
