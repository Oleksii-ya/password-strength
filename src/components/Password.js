import React, { useState } from "react"

import "./password.css"

const Password = () => {
  const [password, setPassword] = useState("")
  const [strength, setStrength] = useState(
    {
      quantity: "",
      easy: "",
      medium: "",
      strong: ""
    })
  const [typeButton, setTypeButton] = useState('password')

  const inputHandler = (e) => {
    const curWord = e.target.value

    if (curWord[curWord.length - 1].match(/[а-я]/i)) {
      alert('Please use Latin')
      return
    }


    const isQuantity = curWord.length > 0 && curWord.length < 8
    const isNumber = !!curWord.match(/[0-9]/)
    const isLetter = !!curWord.match(/[A-Z]/i)
    const isSymbol = !!curWord.match(/[^\d\sA-Z]/i)

    const isEasy = curWord.length > 7 && (isNumber || isLetter || isSymbol)
    const isMedium = curWord.length > 7 && (isLetter && isSymbol || isLetter && isNumber || isNumber && isSymbol)
    const isStrong = curWord.length > 7 && isNumber && isLetter && isSymbol

    const newStrength = {
      quantity: isQuantity ? "quantity" : "",
      easy: isEasy ? "easy" : "",
      medium: isMedium ? "medium" : "",
      strong: isStrong ? "strong" : ""
    }
    setPassword(curWord)
    setStrength(newStrength)
  }
  const { quantity, easy, medium, strong } = strength

  return (
    <>
      <input
        className="pass-word"
        type={typeButton}
        placeholder="Enter Password"
        value={password}
        onChange={inputHandler}
      />
      <button
        className="show-password"
        onClick={() => { setTypeButton(typeButton === 'password' ? 'text' : 'password') }}
        type="text">Show</button>
      <div className="strength-wrapper">
        <span className={`strength ${quantity} ${easy} ${medium} ${strong}`}></span>
        <span className={`strength ${quantity} ${medium} ${strong}`}></span>
        <span className={`strength ${quantity} ${strong}`}></span>
      </div>
    </>
  )
}

export default Password