import React from 'react'

const Box = ({box}) => {
  const boxStyle = {
    backgroundColor: `${ box.color }`,
    height: `${box.size}px`,
    width: `${box.size}px`,
  }
  return (
      <div style={ boxStyle }></div>
  )
}

export default Box