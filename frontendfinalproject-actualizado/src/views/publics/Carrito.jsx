import React, { useContext, useEffect } from 'react'
import Context from '../../Context'
import { ListGroup, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


function Carrito() {
    const { cart, increment, decrement, items, total, settotal } = useContext(Context)
    settotal(cart.reduce((acum, { count, price }) => acum + price * count, 0))
    useEffect(() => {}, [cart, items, total])
    return (
        <>
            <ListGroup variant='flush'>
                {cart.map((pizza, i) => (
                    <ListGroup.Item className='rounded text-capitalize bg-dark text-light m-1 shadow d-flex justify-content-between py-2' key={i}>
                        <img src={pizza.img} style={{ width: 50 }} alt='' />
                        <h6 className='mb-0 text-capitalize p-2'>{pizza.name}</h6>
                        <h6 className='mb-0 p-2 text-success'>${(pizza.price)}</h6>
                        <div className='d-flex justify-content-end align-items-center'>
                            <h6 className='mb-0 p-2 text-success'>${(pizza.price * pizza.count)}</h6>
                            <Button variant='outline-danger' onClick={() => decrement(i)}>-</Button>
                            <b className='mx-2'>{pizza.count}</b>
                            <Button variant='outline-primary' onClick={() => increment(i)}>+</Button>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <div className='d-flex justify-content-end pt-5'>
                <h2 className='my-4 mx-4'>Items:{items}</h2>
                <h2 className='my-4 mx-4'>Total: ${total}</h2>
                <div className='pt-4 mx-2'>
                    <Button variant='outline-success'>Ir a Pagar</Button>
                </div>
                <div className='pt-4 mx-2'>
                    <NavLink to='/'><Button variant='outline-primary'>Volver</Button></NavLink>
                </div>
            </div>
        </>
    )
}
export default Carrito