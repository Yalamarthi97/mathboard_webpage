
import './App.css';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import React from 'react';
import Footer from './Components/Footer';
import IsPrimeBarPlot from './Components/InnerComponents/IsPrimeBarPlot'

const axios = require('axios').default;
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';


class  Home extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    number: null,
    is_prime: false,
    divisors: []
  };
  this.getData=this.getData.bind(this);
this.handleChange=this.handleChange.bind(this);
  }
  handleChange=(e)=>{
    console.log("chaning data")
    const {name,value}=e.target;
    this.setState({
      [name]:value
    })
  }

  getData() {
    console.log("getting data")
    axios.get("https://mathboard-io.herokuapp.com/" + this.state.number).then((response) => {
    // this.setState({ incomingdata: response.data })
    this.handleData(response.data)
  })
  }
  handleData=(temp)=>{
    console.log(temp)
  }

  render(){
  return (
    <div className="App">
      <Container fluid className="fullwindow">
        <Row>
          <Col md={1} style={{ border: '5px solid white',height:'975px',alignItems:'center' }}>SideBar</Col>
          <Col>
            <Row style={{height:'50px',border:'5px solid blue'}}>
              <InputGroup >
                <FormControl
                  placeholder="Enter the number "
                  name="number"
                  onChange={this.handleChange}
                />
                <Button variant="outline-secondary" onClick={this.getData}>Let's Go!</Button>
              </InputGroup>
            </Row>
            <Row style={{height:'25px'}}></Row>
            <Row style={{height:'300px',alignItems:'center',border:'5px solid orange',alignSelf:'center',justifyContent:'center'}}>4 is a number, numeral and digit. It is the natural number following 3 and preceding 5. It is the smallest composite number, and is considered unlucky in many East Asian cultures. Wikipedia</Row>
            <Row style={{height:'400px',alignItems:'center',border:'5px solid white'}}><Col md={4} style={{border:'5px solid cyan'}}> <IsPrimeBarPlot/></Col>
              <Col >Divisors card</Col></Row>

            <Row style={{ alignSelf: 'center', justifyContent: 'center' ,border:'5px solid yellow',height:'200px',alignItems:'center'}}>
              <Footer/>
            </Row></Col>
        </Row>
      </Container>
    </div>
  );
}
}

export default Home;
