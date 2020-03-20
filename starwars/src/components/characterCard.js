import React from "react"
import Reactstrap from "reactstrap"
import styled from "styled-components"
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Col
  } from "reactstrap";

  const Div = styled.div `
    display: flex;
    flex-direction: column;
    // width: 20%;
    // height: 10vh;
    justify-content: center;
    margin: 2%;
    border: 1px solid white;
    background-color: black;
    width: 30%;
    color: orange;

    

    
    
    
  `

  const P = styled.p `
   
  
  `


const CharacterCard = props => {
    console.log(props)
    return(
        <Div> 
        <Card>
           
        <CardBody >
    <CardTitle>{props.data.name}</CardTitle>
          <CardText>
           <P> Height :{props.data.height}</P>
          </CardText>
          <CardText>
            Mass: {props.data.mass}
            </CardText>
            <CardText>
            Hair-Color: {props.data.hair_color}
            </CardText>
            <CardText>
            Skin-Color: {props.data.skin_color}
            </CardText>
            <CardText>
            Eye-Color: {props.data.eye_color}
            </CardText>
            <CardText>
            Birth-Year: {props.data.birth_year}
            </CardText>
            <CardText>
            Gender: {props.data.gender}
            </CardText>
            <CardText>
            HomeWorld: {props.data.homeworld}
            </CardText>
            <CardText>
            
            </CardText>
            <CardText>
            
            </CardText>
            <CardText>
            
            </CardText>
            <CardText>
            
            </CardText>
         
          <Button>Button</Button>
        </CardBody>
        
   
        
        </Card>
        </Div> 
    )
}


export default CharacterCard