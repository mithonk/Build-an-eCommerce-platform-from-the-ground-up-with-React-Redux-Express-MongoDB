import React, {useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'      
import Products from '../products'         


const HomeScreen = () => {
  const [products,setProducts]=useState([])




  return (
    <>
        <h1>Latest Products</h1>
        <Row>
            {Products.map(product=>(
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product}/>
                </Col>
            ))}
        </Row>
    </>
  )
}

export default HomeScreen