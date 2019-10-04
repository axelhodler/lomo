document.getElementById("up").addEventListener("click", () => {
  const company = carcompanies[0]
  if (company.market_capitalization_anchor_in_bn < company.market_capitalization_in_bn) {
    renderGuessedRight()
  } else {
    renderGuessedWrong()
  }
  checkForEnd()
})

document.getElementById("down").addEventListener("click", () => {
  const company = carcompanies[0]
  if (company.market_capitalization_anchor_in_bn > company.market_capitalization_in_bn) {
    renderGuessedRight()
  } else {
    renderGuessedWrong()
  }
  checkForEnd()
})

renderMarketcap()
