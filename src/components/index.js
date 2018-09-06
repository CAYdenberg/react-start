import React from 'react'

import Presentation from './Presentation'

import screenshot from '../img/screenshot.png'
import immortalGame from '../img/immortal-game.png'
import activationEnergy from '../img/activation-energy.png'

function App() {

  return (
    <Presentation>

      <section>
        <h1>Why and How to Start With React</h1>
        <p>by Casey Ydenberg</p>
      </section>

      <section>
        <h2>Why does React exist?</h2>
        <img src={screenshot} alt="Imperative code" />
      </section>

      <section>
        <h2>javascript structures (objects/arrays) => "HTML"</h2>
        <img src={immortalGame} alt="The Immortal Game - white to play and win" />
      </section>

      <section>
        <h2>Sure, but how do you do that?</h2>
        <p><a href="https://github.com/CAYdenberg/react-start" target="_blank">https://github.com/CAYdenberg/react-start</a></p>
      </section>

      <section>
        <h2>How to start with React</h2>
        <img src={activationEnergy} alt="Activation energy diagram" />
        <p>
          npm install --save react react-dom babel-cli babel-preset-react babel-preset-es2015 babel-preset-env eslint eslint-plugin-react eslint-babel webpack babel-loader css-loader redux redux-thunk redux-saga react-redux react-router react-router-redux jest react-jest enzyme left-pad
        </p>
      </section>

      <section>
        <h2>Five dependency setup:</h2>
        <ul className="has-text-left">
          <li>React</li>
          <li>React DOM - separate package that mounts React initially</li>
          <li>Babel - compiles "JavaScript-like" code to JavaScript</li>
          <li>Babel preset React - babel plugin for JSX</li>
          <li>Parcel - "zero-configuration" bundler for web resources</li>
        </ul>
      </section>

      <section>
        <h2>Where to go next</h2>
        <p><a href="https://reactjs.org/tutorial/tutorial.html" target="_blank">https://reactjs.org/tutorial/tutorial.html</a></p>
      </section>

      <section className="has-text-left">
        <ul>
          <li>Twitter - @CAYdenberg</li>
          <li>GitHub - CAYdenberg</li>
          <li>Email - ydenberg@gmail.com</li>
          <li>Web - https://caseyy.org</li>
        </ul>
      </section>

    </Presentation>
  )
}

export default App
