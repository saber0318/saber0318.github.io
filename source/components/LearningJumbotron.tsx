import React from 'react'
import Container from 'react-bootstrap/Container'
import styles from './LearningJumbotron.module.css'

const Jumbotron = () => {
  return (
    <div className={styles.jumbotron}>
      <Container>
        <h1 className="display-4 text-light text-center">学无止境</h1>
        <p className="lead mt-2 text-light text-center">Stay hungry. Stay foolish.</p>
      </Container>
    </div>
  )
}

export default Jumbotron
