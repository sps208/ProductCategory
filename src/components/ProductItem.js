import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Linking } from 'react-native';

import { Card, CardSection, Button } from './common';

const style = StyleSheet.create({
    productImage: {
        height: 300,
        flex: 1
    },
    productName: {
        flex: 1,
        fontSize: 18
    },
    productPrice: {
        width: 100,
        textAlign: 'right',
        fontSize: 18,
        color: 'navy' 
    }

})

class ProductItem extends Component {
    getPricedFormatted(price) {
        if (price) {
            const pricedFormatted = price
            .toString()
            .split('')
            .reverse()
            .reduce((a,c,i) => c + (i && i % 3 == 0 ? '.' : '') + a, '');
            return `Rp${pricedFormatted}`;

        }
        return 'Rp0';
    }


    render(){
        const { name, image, price, actionlink } = this.props.product;

      return(
        <Card>
            <CardSection>
                <Image style={ style.productImage } source= { { uri:image } } /> 
            </CardSection>
            <CardSection>
                <Text style={ style.productName }>{ name }</Text>
                <Text  style={ style.productPrice }>{ this.getPricedFormatted(price) }</Text>
            </CardSection>
            <CardSection>
                <Button onPress={ () => Linking.openURL(actionlink)}>
                    Buy now
                </Button>
            </CardSection>
        </Card>
      );
    }
}

export default ProductItem;