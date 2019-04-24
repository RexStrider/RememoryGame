import React from 'react';
import Image from "./Image";
import ImgUrls from "../../assets/images";
import styles from "./Image.module.css"

const shuffle = array => {
    let shuffleArray = array.slice();
    let i = 0, j = 0, temp = null;
  
    for (i = shuffleArray.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = shuffleArray[i]
      shuffleArray[i] = shuffleArray[j]
      shuffleArray[j] = temp
    }

    return shuffleArray;
}

const ImageWrapper = props => {
    const images = shuffle(ImgUrls);
    return <section className={styles.imgWrapper}>
        {
            images.map( img => (
            <Image
                key={img.id}
                clickHandler={() => props.clickHandler(img.id)}
                src={img.url}
            />))
        }
    </section>
}

export default ImageWrapper;