import React from 'react'
import Card from "./Card"
import products from "./products"

function CardSection() {

    return (
        <div className="container ">
            <div className='d-flex flex-wrap justify-content-around align-items-center '>
                {
                    products.map((items, index) => {
                        return (
                            <Card
                                img={products[index].img}
                                name={products[index].name}
                                price={products[index].price}
                                dec={products[index].dec}

                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CardSection