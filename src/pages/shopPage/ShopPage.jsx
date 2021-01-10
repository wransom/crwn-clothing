import React from 'react';

import './ShopPage.scss';

import SHOP_DATA from './shop.data.js';

import CollectionPreview from '../../components/collection-preview/Collection-Preview'

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const  {collections} = this.state;
        return (
            <div>
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps}  />
                    ))
                }
            </div>
            
        )
    }
}

export default ShopPage;