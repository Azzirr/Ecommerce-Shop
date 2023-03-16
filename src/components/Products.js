import Container  from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'
export default function Products(props){
    function productRender(event){
        const value = event.target.value
        fetch(`https://fakestoreapi.com/products/${value}`)
            .then(res => res.json())
            .then(data => console.log(data.title))
            .catch(err => console.log(err))
    }

    return(
        <Container>
            <Row>
                <Col>
                    <input onChange={productRender} type="text" placeholder='input' ></input>
                    <p></p>
                </Col>
            </Row>
        </Container>
    )
}