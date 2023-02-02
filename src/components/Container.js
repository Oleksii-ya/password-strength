import React from 'react'

const containerStyle = {
  width: "1600px",
  margin: "16px auto 0"
}

const Container = ({ children }) => {
  return (
    <div
      className="container"
      style={containerStyle}
    >{children}</div>
  )
}

export default Container