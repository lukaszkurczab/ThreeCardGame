class ThreeCards extends React.Component {
  state = {
    deal: true,
    schuffle: true,
    result: ""
  }

  selectCard = (card) => {
    if (card.srcElement.id == "kier") {
      this.setState({
        schuffle: !this.state.schuffle,
        result: "win"
      })
    } else {
      this.setState({
        schuffle: !this.state.schuffle,
        result: "lose"
      })
    }

    card.srcElement.classList.add("deal")
  }

  componentDidMount() {
    setTimeout(
      () => {
        this.setState({
          deal: !this.state.deal
        })
      }, 1000)
    setTimeout(
      () => {
        this.setState({
          schuffle: !this.state.schuffle
        })
      }, 5000)
  }

  render() {
    const cards = document.querySelectorAll(".card")

    cards.forEach(card => card.addEventListener("mouseover", this.selectCard))

    return (
      <>
        <div id="kier" className={`card kier ${this.state.deal ? "deal" : ""}`}></div>
        <div id="pikOne" className="card pik"></div>
        <div id="pikTwo" className="card pik"></div>
        <div className="resultText">{this.state.result}</div>
        {this.state.schuffle ? <div className="wrapper"></div> : null}
      </>
    )
  }
}

ReactDOM.render(<ThreeCards />, document.querySelector('.table'))

const kier = document.querySelector('#kier');
const pikOne = document.querySelector('#pikOne');
const pikTwo = document.querySelector('#pikTwo');

kier.style.transform = "translateX(0)";
pikOne.style.transform = "translateX(110%)";
pikTwo.style.transform = "translateX(-110%)";

function shuffle() {
  const option = Math.floor(Math.random() * 6)
  switch (option) {
    case 1: kier.style.transform = "translateX(-110%)"
      pikOne.style.transform = "translateX(110%)"
      pikTwo.style.transform = "translateX(0)"
      break;
    case 2: kier.style.transform = "translateX(-110%)"
      pikOne.style.transform = "translateX(0)"
      pikTwo.style.transform = "translateX(110%)"
      break;
    case 3: kier.style.transform = "translateX(0)"
      pikOne.style.transform = "translateX(-110%)"
      pikTwo.style.transform = "translateX(110%)"
      break;
    case 4: kier.style.transform = "translateX(0)"
      pikTwo.style.transform = "translateX(-110%)"
      pikOne.style.transform = "translateX(110%)"
      break;
    case 5: pikOne.style.transform = "translateX(-110%)"
      pikTwo.style.transform = "translateX(0)"
      kier.style.transform = "translateX(110%)"
      break;
    case 6: pikTwo.style.transform = "translateX(-110%)"
      pikOne.style.transform = "translateX(0)"
      kier.style.transform = "translateX(110%)"
      break;
  }
}

setTimeout(() => {
  const interval = setInterval(shuffle, 400)
  setTimeout(() => { clearInterval(interval) }, 4000)
}, 1000)
