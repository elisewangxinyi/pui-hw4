import React, { Component } from 'react';
import './Homepage.css';
import Item from './Item';
import Navbar from './Navbar';

class Roll {
    glazingToPrice = {
        "Keep original": 0,
        "Sugar milk": 0,
        "Vanilla milk": 0.5,
        "Double chocolate": 1.5
    }
    constructor(imageURL, bunName, altText, basePrice){
        this.imageURL = imageURL;
        this.bunName = bunName;
        this.altText = altText;
        this.basePrice = basePrice;
        this.glazing = "Keep original";
        this.packSize = 1;
        this.price = basePrice
    }

    glazingChange = (event) => {
        const glazingSelected = event.target;
        const glazingName = glazingSelected.options[glazingSelected.selectedIndex].text;

        this.glazing = glazingName;
        this.getPrice();
        console.log(this.glazing);
    }

    sizeChange = (event) => {
        this.packSize = event.target.value;
        console.log(this.packSize);
        this.getPrice();
    }

    getPrice = () => {
        const price = this.packSize * (this.glazingToPrice[this.glazing] + this.basePrice);
        this.price = price.toFixed(2);
    }

}

class Homepage extends Component {
    constructor(props){
        super(props);
        this.state = {
            itemData: [
            new Roll("/assets/original-cinnamon-roll.jpg",
                     "Original cinnamon roll", 
                     "original cinnamon roll on a plate",
                     2.49),
            new Roll("/assets/apple-cinnamon-roll.jpg",
                     "Apple cinnamon roll",
                     "apple cinnamon roll with a fork",
                     3.49),
            new Roll("/assets/raisin-cinnamon-roll.jpg",
                     "Raisin cinnamon roll",
                     "raisin cinnamon roll",
                     2.99),
            new Roll("/assets/walnut-cinnamon-roll.jpg",
                     "Walnut cinnamon roll",
                     "a walnut cinnamon roll with a fork",
                     3.49),
            new Roll("/assets/double-chocolate-cinnamon-roll.jpg",
                     "Double-chocolate cinnamon roll",
                     "a double chocolate cinnamon roll in a wrapper",
                     3.99),
            new Roll("/assets/strawberry-cinnamon-roll.jpg",
                     "Strawberry cinnamon roll",
                     "multiple strawberry cinnamon rolls",
                     3.99)
            ],

            cart: []
        }
    }

    setGlazingState = (index,event) => {
        let newItemData = this.state.itemData;
        console.log(index)
        console.log(newItemData[index]);
        newItemData[index].glazingChange(event);

        this.setState({ itemData: [ ...newItemData ]})
    }

    setSizeState = (index,event) => {
        let newItemData = this.state.itemData;
        console.log(index)
        console.log(newItemData[index]);
        newItemData[index].sizeChange(event);

        this.setState({ itemData: [ ...newItemData ]})
    }

    render(){
        return (
            <div className="Homepage">
                <header>
                    <div id='header-logo'>
                        <img src={"/assets/logo-01.svg"} 
                             alt="Logo of Bun Bun Bake Shop"/>
                    </div>
                    
                    <div id="header-content">
                        <Navbar />
                        <hr className="divider"/>
                        <h1>Our hand-made cinnamon rolls</h1>
                    </div>
                </header>

                <div id='product-list'>
                    <Item
                        bunIndex = {0}
                        imageURL ={this.state.itemData[0].imageURL}
                        bunName = {this.state.itemData[0].bunName}
                        altText = {this.state.itemData[0].altText}
                        price = {this.state.itemData[0].price}
                        onGlazingChange = {this.setGlazingState}
                        onSizeChange = {this.setSizeState}/>
                    <Item
                        bunIndex = {1}
                        imageURL ={this.state.itemData[1].imageURL}
                        bunName = {this.state.itemData[1].bunName}
                        altText = {this.state.itemData[1].altText}
                        price = {this.state.itemData[1].price}
                        onGlazingChange = {this.setGlazingState}
                        onSizeChange = {this.setSizeState}/>
                    <Item
                        bunIndex = {2}
                        imageURL ={this.state.itemData[2].imageURL}
                        bunName = {this.state.itemData[2].bunName}
                        altText = {this.state.itemData[2].altText}
                        price = {this.state.itemData[2].price}
                        onGlazingChange = {this.setGlazingState}
                        onSizeChange = {this.setSizeState}/>
                    <Item
                        bunIndex = {3}
                        imageURL ={this.state.itemData[3].imageURL}
                        bunName = {this.state.itemData[3].bunName}
                        altText = {this.state.itemData[3].altText}
                        price = {this.state.itemData[3].price}
                        onGlazingChange = {this.setGlazingState}
                        onSizeChange = {this.setSizeState}/>
                    <Item
                        bunIndex = {4}
                        imageURL ={this.state.itemData[4].imageURL}
                        bunName = {this.state.itemData[4].bunName}
                        altText = {this.state.itemData[4].altText}
                        price = {this.state.itemData[4].price}
                        onGlazingChange = {this.setGlazingState}
                        onSizeChange = {this.setSizeState}/>
                    <Item
                        bunIndex = {5}
                        imageURL ={this.state.itemData[5].imageURL}
                        bunName = {this.state.itemData[5].bunName}
                        altText = {this.state.itemData[5].altText}
                        price = {this.state.itemData[5].price}
                        onGlazingChange = {this.setGlazingState}
                        onSizeChange = {this.setSizeState}/>
                </div>
            </div>
        );
    }
}

export default Homepage;