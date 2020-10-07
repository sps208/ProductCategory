import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback } from 'react-native';
import axios from 'axios'
import { connect } from 'react-redux'

import { Card, CardSection } from './common';
import ProductItem from './ProductItem'

class CategoryItem extends Component {
    state = {
        products: []
    }

    componentDidMount() {
        const categoryId = this.props.category.id
        axios.get(`https://simple-ecommerce-9999.herokuapp.com/api/v1/category/${categoryId}/product`)
        .then( response => {
            console.log(response.data.data.products)
            this.setState({ products: response.data.data.products })
        })
        .catch( error => {
            console.log(error.message)
            
        })
    }

    renderProductList() {
        const currentCategoryId = this.props.category.id
        const activeCategoryId = this.props.activeCategory
        console.log({currentCategoryId, activeCategoryId});
        
        if(currentCategoryId == activeCategoryId) {
        return this.state.products.map( item =>
            <ProductItem product={ item } key={ item.id } />
            )}
    }
    
    render(){
        const {id, name } = this.props.category
        return(
            <>
            <Card>
                <CardSection>
                    <TouchableWithoutFeedback
                    onPress={ () => this.props.dispatch({
                            type: 'SET_ACTIVE_CATEGORY',
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

function mapStateToProps(state) {
    return {
        activeCategory: state.activeCategory
    }
}



export default connect(mapStateToProps)(CategoryItem);