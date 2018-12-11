import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
import ScienceCard from './components/ScienceCard.js'
import HistoryCard from './components/HistoryCard.js'
import MathCard from './components/MathCard';
import EnglishCard from './components/EnglishCard';
import ArtCard from './components/ArtCard';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const MondayContent = () => {
  return (
          <div>
          <ScienceCard></ScienceCard>
          <HistoryCard></HistoryCard>
          <MathCard></MathCard>
          <EnglishCard></EnglishCard>
          <ArtCard></ArtCard>
          </div>
  )}

  const TuesdayContent = () => {
    return (
            <div>
            <HistoryCard></HistoryCard>
            <MathCard></MathCard>
            <EnglishCard></EnglishCard>
            </div>
   )}

  const WednesdayContent = () => {
    return (
            <div>
            <HistoryCard></HistoryCard>
            <EnglishCard></EnglishCard>
            </div>
    )}

  const ThursdayContent = () => {
    return (
            <div>
            <ScienceCard></ScienceCard>
            <HistoryCard></HistoryCard>
            <EnglishCard></EnglishCard>
            <ArtCard></ArtCard>
            </div>
    )}

    const FridayContent = () => {
      return (
              <div>
              <h2>NO HOMEWORK ON FRIDAY, ENJOY THE WEEKEND</h2>
              </div>
      )}

const ScienceContent = () => {
  return (
    <div>
      <h2>Science Homework</h2>
      <ul>
        <li>Complete pages 11 and 12 in your science text book and be ready to turn in by the beginning of class tomorrow.</li>
        <li>Make sure to study for the test tomorrow!</li>
      </ul>
    </div>
  )
}

const HistoryContent = () => {
  return (
    <div>
      <h2>History Homework</h2>
      <ul>
        <li>No homework</li>
        <li>Be prepared to present your projects tomorrow.</li>
      </ul>
    </div>
  )
}

const MathContent = () => {
  return (
    <div>
      <h2>Math Homework</h2>
      <ul>
        <li>Complete the worksheet that was handed out in class today.</li>
      </ul>
    </div>
  )
}

const EnglishContent = () => {
  return (
    <div>
      <h2>English Homework</h2>
      <ul>
        <li>Students write a 2 page paper on what you learned from the book.</li>
      </ul>
    </div>
  )
}

const ArtContent = () => {
  return (
    <div>
      <h2>Art Homework</h2>
      <ul>
        <li>Work on your canvas.</li>
      </ul>
    </div>
  )
}

class Monday extends Component {
  render() {
    return (
      <Router>
      <div>
      <NavBar />
      <Route path="/monday" component={MondayContent} />      
      <Route path="/tuesday" component={TuesdayContent} />
      <Route path="/wednesday" component={WednesdayContent} />
      <Route path="/thursday" component={ThursdayContent} />
      <Route path="/friday" component={FridayContent} />

      <Route path="/homework-science" component={ScienceContent} />
      <Route path="/homework-history" component={HistoryContent} />
      <Route path="/homework-math" component={MathContent} />
      <Route path="/homework-english" component={EnglishContent} />
      <Route path="/homework-art" component={ArtContent} />


      </div>
      </Router>
    );
  }
}

export default Monday;
