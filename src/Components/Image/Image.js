import React from 'react';
import styles from './Image.module.css'; // Import cssmodules stylesheet as styles

const Image = props => ( 
    <section className={styles.img} onClick={props.clickHandler}>
        <img src={props.src} alt="a dog"></img>
    </section>
);
     
export default Image;