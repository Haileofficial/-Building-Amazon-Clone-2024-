// // Header.js
// import React from 'react';
// import styles from './Header.module.css';
// import { SlLocationPin } from "react-icons/sl";
// import { BiCart } from "react-icons/bi";



// function Header() {
//   return (
//     <header className={styles.header}>
//       <div className={styles.headerContainer}>
//         <a href="/" className={styles.headerLogo}>
//           <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" />
//         </a>
//         <div className={styles.headerSearch}>
//           <input type="text" placeholder="Search Amazon" />
//           <button className={styles.headerSearchButton}>
//             <i className="fas fa-search"></i>
//           </button>
//         </div>
//         <div className={styles.headerNav}>
//           <a href="#" className={styles.headerNavLink}>
//             <i className="fas fa-map-marker-alt"></i>
//             <span>Deliver to</span>
//             <SlLocationPin size={25}/><>Ethiopia</>
//           </a>
//           <a href="#" className={styles.headerNavLink}>
//             <i className="fas fa-user"></i>
//             <span>Hello, Sign in</span>
//           </a>
//           <a href="#" className={styles.headerNavLink}>
//             <i className="fas fa-shopping-cart"></i>
//             <span>0</span>
//             <BiCart size={35}/>
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;


// Header.js
import React from 'react';
import styles from './Header.module.css';
import { BiCart } from "react-icons/bi";


import { SlLocationPin } from "react-icons/sl";
import { FiSearch } from "react-icons/fi";



function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <a href="/" className={styles.headerLogo}>
          <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" />
        </a>
        <div className={styles.headerLocationAndSearch}>
            <div className={styles.headerLocation}>
              <span><SlLocationPin size={17} className={styles.headerLocationIcon}/></span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
            <div className={styles.headerSearch}>
                <select>
                  <option value= ""> All</option>
                </select>
                <input type="text" placeholder="Search Amazon" />
            <button className={styles.headerSearchButton}>
            <FiSearch />
            </button>
              </div>
        </div>
        <div className={styles.headerNavigation}>
        <a href="/" >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1024px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="/" />
        </a>
                <a href=''>
                <select>
                  <option value= ""> EN</option>
                </select>
                </a>
          <a href="#" className={styles.headerNavLink}>
            <div>
                <p>Hello, sign in</p>
                <select>
                  <option value= ""> Account & Lits</option>
                </select>
            </div>
            <div className={styles.headerNavLink_returns}>
                <div>Returns</div>
                
                  <p>& Orders</p>
                
            </div>
            
          </a>
          <a href="#" className={styles.headerNavLink_cart}>
            <div>
              <span>0</span>
              <BiCart size={35}/>
            </div>
            
            <p>Cart</p>

          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;