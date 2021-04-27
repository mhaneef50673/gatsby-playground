import React from "react"
import { items } from "./data"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import AImage from "./images/a.jpg"
import BImage from "./images/b.jpg"
import CImage from "./images/c.jpg"
import DImage from "./images/d.jpg"
import EImage from "./images/e.jpg"
import FImage from "./images/f.jpg"
import GImage from "./images/g.jpg"
import HImage from "./images/h.jpg"

import "./styles.css"

const getImage = id => {
  switch (id) {
    case "a":
      return AImage
    default:
      return BImage
  }
}

const Card = ({ id, title, category, theme }) => {
  return (
    <li className={`card ${theme}`}>
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={getImage(id)} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <h2>{title}</h2>
          </motion.div>
        </motion.div>
      </div>
      <Link to={id} className={`card-open-link`} />
    </li>
  )
}

const List = () => {
  return (
    <ul className="card-list">
      {items.map(card => (
        <Card key={card.id} {...card} />
      ))}
    </ul>
  )
}

export default List
