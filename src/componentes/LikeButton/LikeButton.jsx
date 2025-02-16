import React from 'react'
import styles from './LikeButton.module.css'
import { useState } from 'react'

function LikeButton() {
    const [likes, setLikes] = useState(0)
    const [colorIndex, setColorIndex] = useState(0);
    const cores = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

    const handleClick = () => {
        setLikes(likes + 1);
        setColorIndex((colorIndex + 1) % cores.length);
      };

  return (
        <button onClick={handleClick} style={{ backgroundColor: cores[colorIndex] }}>{likes} Likes
        </button>
  )
}

export default LikeButton