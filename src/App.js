import React from 'react'
import axios from 'axios'
import './style'

class App extends React.Components{
  constructor(props){
    super(props)
    this.state = {advice: ''}
  }

  componentDidMount(){
     this.fetchAdvice()
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then((response) => {
       const { advice } = response.data.slip
       this.setState({advice: advice})
    })
      
    .catch((error) => {
       console.log(error)
    })
  }
  
  render(){
     const{ advice } = this.state
     return(
         <div className="app>
             <div className="card">
                <div className="heading">
                    { advice }
                </div>
                <button className="button"onClick={this.feachAdvice}>
                   <span>Givi me Advice</span>
                </button>
             </div>
         </div>
     )
  }
}
