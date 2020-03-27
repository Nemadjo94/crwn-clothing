import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/original.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => {
    console.log(currentUser);
    return (
        <div className='header'>
            <Link className='logo-container' to='/' >
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
                {
                    currentUser 
                    ? (<Link className='option' to='/' onClick={() => auth.signOut()}>SIGN OUT</Link>)
                    : (<Link className='option' to='/signin'>SIGN IN</Link>)
                }
                <CartIcon />
            </div>
            {
                hidden 
                ? null
                : (<CartDropdown />)
            }
        </div>
    )
};
// state is for rootReducer
const mapStateToProps = ({ user: { currentUser}, cart: { hidden } }) => ({ // this is how components get the state from reducer and they listen to reducer and their state change triggers the re-render
    currentUser, // get the current user we need from root reducer which calls user reducer because state(rootReducer).user(userReducer) currentUser
    hidden
})

export default connect(mapStateToProps)(Header); // Connect component to the reducer
// when connecting component to redux reducer two things are needed, in the first () goes the function that gets the state from reducer 
// in second () goes our component