import React from "react"
import { motion } from "framer-motion"
import { LoremIpsum } from "react-lorem-ipsum"
import { Link } from "gatsby"
import AImage from "../components/images/a.jpg"

import Layout from "../components/layout"
import Seo from "../components/seo"

const H = () => {
  const { category, title, id } = {
    id: "h",
    category: "Photography",
    title: "The Latest Ultra-Specific Photography Editing Apps",
    pointOfInterest: 150,
    backgroundColor: "#FA6779",
  }
  return (
    <Layout>
      <Seo title="A page" />
      <h1>A page</h1>
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          transition={{ duration: 0.2, delay: 0.15 }}
          style={{ pointerEvents: "auto" }}
          className="overlay"
        >
          <Link to="/" />
        </motion.div>
        <div className="card-content-container open">
          <motion.div
            className="card-content"
            layoutId={`card-container-${id}`}
          >
            <motion.div
              className="card-image-container"
              layoutId={`card-image-container-${id}`}
            >
              <img className="card-image" src={AImage} alt="" />
            </motion.div>
            <motion.div
              className="title-container"
              layoutId={`title-container-${id}`}
            >
              <span className="category">{category}</span>
              <h2>{title}</h2>
            </motion.div>
            <motion.div className="content-container" animate>
              <LoremIpsum
                p={6}
                avgWordsPerSentence={6}
                avgSentencesPerParagraph={4}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}

export default H
