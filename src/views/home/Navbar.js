import React, { Component } from 'react';
import './Navbar.css';


class Navbar extends Component {
    constructor(){
        super();
        this.state = {
            totalItem: "0 items",
            totalPrice: "Total: $0"
        }
    }

    


    render() {
        return (
            <div className='Navbar'>
                <nav>
                    <div className="navigation">
                        <a href="gallery.html">PRODUCTS</a>
                    </div>
                
                    <div className="navigation">
                        <a href="cart.html">CART</a>
                    </div>
                </nav>

                <div>
                    <p id="total-item" className="cart-content">{this.state.totalItem}</p>
                    <p id="total-price"className="cart-content">{this.state.totalPrice}</p>
                </div>

            </div>
            
        );
    }
}

export default Navbar;