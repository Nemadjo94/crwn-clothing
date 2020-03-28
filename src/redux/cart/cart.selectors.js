// selektori su korisni ako treba isti state da prikazemo na razlicitim mestima u aplikaciji
import { createSelector } from 'reselect';  // 1. treba instalirati paket reselect i importovati createSelector metodu

const selectCart = state => state.cart; // 2. pristupamo onom delu state-a koji nas zanima (treba nam redux)

export const selectCartItems = createSelector( // 3. Primer kreiranje selektor metode, ovo je selektor koji dobavlja sve iteme u cart-u
    [selectCart], // navodimo dependency, selektori prate promene dependencija
    (cart) => cart.cartItems // vracamo iteme iz cart-a
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems], // ovde nam je dependency selektor iznad, pratimo promene selektora iznad koji prati promene redux state-a
    cartItems => 
        cartItems.reduce( // vracamo kvantitet svih item-a u cart-u
            (accumulatedQuantity, cartItem) => 
                accumulatedQuantity + cartItem.quantity,
            0
        )
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => 
                accumulatedQuantity + cartItem.quantity * cartItem.price,
                0
        )
);