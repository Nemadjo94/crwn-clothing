import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/original.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

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

const mapStateToProps = createStructuredSelector({ // structured selector automatski prosledjuje state da ne bi smo pisali za svaki props
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header); 
