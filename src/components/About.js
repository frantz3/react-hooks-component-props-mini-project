import React from 'react'

function About( {pTag, img="https://via.placeholder.com/215"} ) {
    console.log(img)
  return (
    <aside>
        <img src={img} alt='blog logo'></img>
        <p>{pTag}</p>
    </aside>
  )
}

export default About