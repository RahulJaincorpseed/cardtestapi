import logo from "./logo.svg"
import "./App.css"
import CardComponent from "./Component/CardComponent"
import { useEffect, useState } from "react"
import axios from "axios"
import LoadingSpinner from "./Component/LoadingSpinner"

function App() {
  const [cardData, setCardData] = useState([])
  const [addCard, setAddCard] = useState(3)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCardData()
  }, [])

  const addCardFun = () => {
    setAddCard((prev) => prev)
  }

  const createCard = async () => {
    setAddCard((prev) => prev + 1)
  }

  const fetchCardData = async () => {
    const apiResponse = await axios.get("https://swapi.dev/api/people")
    console.log("response", apiResponse.data.results)
    setCardData(apiResponse.data.results)
    setLoading(false);
  }

  console.log("card data", cardData)

  return (
    <div className="main">
      <div className="box-heading">
        <h1 className="heading">Card Data</h1>
        <button className="card-button" onClick={(e) => createCard(e)}>
          Create card
        </button>
      </div>

      <div className="card-box">
        {loading ? (
          <LoadingSpinner />
        ) : (
          cardData
            .slice(0, addCard)
            .map((card, index) => (
              <CardComponent
                addCard={addCard}
                cardindex={index}
                cardfilms={card.films}
                cardname={card.name}
                cardheight={card.height}
                setAddCard = {setAddCard}
                
              />
            ))
        )}
      </div>
    </div>
  )
}

export default App
