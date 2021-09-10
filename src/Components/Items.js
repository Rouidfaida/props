import React from 'react'
import PropTypes from 'prop-types'; // ES6

import  Table  from 'react-bootstrap/Table'

const Items= ({produit,funct,titel})=> {
const {name,imgSrc,price} =produit

    return (
        <div>
           {
           <Table striped bordered hover>
    <tr>
    <th><h6>{titel}</h6> </th>
      <th>{name}</th>
      <th><img style={{width:100}} src={imgSrc} alt="" srcset="" /></th>
      <th> {price}</th>
      <th> <button onClick={()=>funct(name,price)}>info</button>
</th>
    </tr>
  
</Table>  }
        </div>
    )

    }
    Items.defaultProps = {
        titel :"this is default props"}
        Items.propTypes = {
            produit: PropTypes.func,

        }
export default Items
