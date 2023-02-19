import React, { useState } from 'react';
import styles from "./styles.css"

import Card from './components/card';
import Scores from './components/scores';
import auimg1 from "./assets/among_us1.png"
import auimg2 from "./assets/among_us2.png"
import auimg3 from "./assets/among_us3.png"
import auimg4 from "./assets/among_us4.png"
import auimg5 from "./assets/among_us5.png"
import auimg6 from "./assets/among_us6.png"
import auimg7 from "./assets/among_us7.png"
import auimg8 from "./assets/among_us8.png"
import auimg9 from "./assets/among_us9.png"
import auimg10 from "./assets/among_us10.png"
import auimg11 from "./assets/among_us11.png"
import auimg12 from "./assets/among_us12.png"


function App() {
  const [images, setImages] = useState([auimg1, auimg2, auimg3, auimg4, auimg5, auimg6, auimg7, auimg8, auimg9, auimg10, auimg11, auimg12]);
  const [clicked, setClicked] = useState([]);
  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);

  function shuffle(array) {
    console.log("shuffle");
    let arrayToReturn = [...array];
    for (let i = arrayToReturn.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); 
      [arrayToReturn[i], arrayToReturn[j]] = [arrayToReturn[j], arrayToReturn[i]];
    }
    return arrayToReturn;
  }

  function handleClick(index) {
    console.log(images[index])
    for (let i = 0; i < clicked.length; i++) {
      if (images[index] == clicked[i]) {
        alert("you lose :/");
        if (score > highScore) {
          alert("new highscore!")
          setHighScore(score);
        }
        setClicked([])
        setScore(0);
        return;
      }
    }
    setImages(shuffle(images))
    setScore(score+1)
    if (score == 12) {
      alert("You made it!");
      alert("new highscore!")
      setHighScore(score);
      setClicked([])
      setScore(0);
      return;
    }
    setClicked([...clicked].concat(images[index]));
  }


  return (
    <div className="App">
      <Scores score={score} highScore={highScore}/>
      <div className='how'>
        <h3>How to Play?</h3>
        <p>When you click a picture, they will be shuffled. If you click the same picture twice, you lose.</p>
      </div>
      <div className='Cards'>
        <Card clickFunc={()=>(handleClick(0))} source={images[0]}/>
        <Card clickFunc={()=>(handleClick(1))} source={images[1]}/>
        <Card clickFunc={()=>(handleClick(2))} source={images[2]}/>
        <Card clickFunc={()=>(handleClick(3))} source={images[3]}/>
        <Card clickFunc={()=>(handleClick(4))} source={images[4]}/>
        <Card clickFunc={()=>(handleClick(5))} source={images[5]}/>
        <Card clickFunc={()=>(handleClick(6))} source={images[6]}/>
        <Card clickFunc={()=>(handleClick(7))} source={images[7]}/>
        <Card clickFunc={()=>(handleClick(8))} source={images[8]}/>
        <Card clickFunc={()=>(handleClick(9))} source={images[9]}/>
        <Card clickFunc={()=>(handleClick(10))} source={images[10]}/>
        <Card clickFunc={()=>(handleClick(11))} source={images[11]}/>
      </div>
      
    </div>
  );
}

export default App;
