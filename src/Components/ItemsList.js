import React from 'react'
import Items from './Items'

const ItemsList = (props) => {
    return (
        <div>
            {
           props.listeproduit.map(
               (el,i)=>(
                   <Items produit ={el} key={i} funct={props.click}/>
               )



           )

}
        </div>
    )
}

export default ItemsList
