import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback } from 'react-native';
import axios from 'axios'

import { Card, CardSection } from './common';
import ProductItem from './ProductItem'

class CategoryItem extends Component {
    state = {
        products: []
    }

    componentDidMount() {
        const categoryId = this.props.category.id
        axios.get(`https;//simple-ecommerce-9999.herokuapp.com/api/v1/category/${categoryId}/product`)
        .then( response => {
            console.log(response.data)
            this.setState({ products: response.data.data })
        })
        .catch( error => {
            console.log(error.message)
        })
    }

    renderProductList() {
        return this.state.products.map( item =>
            <ProductItem product={ item } key={ item.id } />
            )
    }
    
    render(){
        const {id, name } = this.props.category
        return(
            <>
            <Card>
                <CardSection>
                    <TouchableWithoutFeedback
                    onPress={ () => this.props.dispatch({
                            type: 'SET_ACTIVECATEGORY',
                            payload: id
                    })}>
                    <Text>{ name }</Text>
                    </TouchableWithoutFeedback>
                </CardSection>
            </Card>
                { this.renderProductList() }
            </>
        );
    }
} 



export default CategoryItem;