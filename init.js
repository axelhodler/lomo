const getNextButton = () => {
  return document.getElementById("next")
}

const hideDecisionButtons = () => {
  document.getElementById("decisions").style.display = "none"
}

const showDecisionButtons = () => {
  document.getElementById("decisions").style.display = "inline"
}

async function initGame() {
  const response = await fetch('https://d1p2el6716rm7u.cloudfront.net/');
  const marketCaps = await response.json()
  carcompanies = marketCaps.car_companies

  document.getElementById("up").addEventListener("click", () => {
    const company = carcompanies[0]
    if (company.market_capitalization_anchor_in_bn < company.market_capitalization_in_bn) {
      renderGuessedRight()
    } else {
      renderGuessedWrong()
    }
    checkForEnd()
    hideDecisionButtons()
    const nextButton = getNextButton()
    nextButton.style.display = "inline"
  })

  document.getElementById("down").addEventListener("click", () => {
    const company = carcompanies[0]
    if (company.market_capitalization_anchor_in_bn > company.market_capitalization_in_bn) {
      renderGuessedRight()
    } else {
      renderGuessedWrong()
    }
    checkForEnd()
    hideDecisionButtons()
    const nextButton = getNextButton()
    nextButton.style.display = "inline"
  })

  document.getElementById("next").addEventListener("click", () => {
    const nextButton = getNextButton()
    nextButton.style.display = "none"
    nextCap()
    showDecisionButtons()
  });

  renderMarketcap()
}

initGame()


