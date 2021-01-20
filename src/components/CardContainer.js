import { Component } from 'react'
import { Card } from './Card'

export class CardContainer extends Component {

    state = {
        cards:[]
    }

    fetchCards = () => {
        fetch('http://localhost:3000/displays')
            .then(response => response.json())
            .then(response => {
                this.setState({cards: response})
            })
    }

    componentDidMount = () =>{
        this.fetchCards()
    }

    displayCard = () =>  this.state.cards.map(card => (
            <Card props={card}/>
            ))
    
    
        render(){
        return(
            <div className="card-container">
                {this.displayCard()}
            </div>
        )
    }
}

// git@github.com:lukethinnes/Hackathon.git