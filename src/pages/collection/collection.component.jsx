import React from 'react';
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = ({ collection }) => {
    return (
        <div className='collection-page'>
            
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({ // own props znaci da prosledjujemo propertije koji se prosledjuju komponenti u ovom slucaju posto komponentu iznad imamo Router onda nam se prosledjuje match prop
    collection: selectCollection(ownProps.match.params.collectionId)(state) // a na osnovu match.params.collectionid-a prikazujemo odredjenu kolekciju
});

export default connect(mapStateToProps)(CollectionPage);
