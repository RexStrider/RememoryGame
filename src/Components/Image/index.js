import React from 'react';
import Image from "./Image";

const ImgUrls = [
    {id: `A`, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRWAm4FAXnpTB0VKnZ_WK9oQyHFWwcKniHX5PsHmnIdCPHWsHJJg'},
    {id: `B`, url: 'https://www.what-dog.net/Images/faces2/scroll008.jpg'},
    {id: `C`, url: 'https://blog.pawstruck.com/wp-content/uploads/2016/01/puppy-dog-eyes.jpg'},
    {id: `D`, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuFYDhtlcow3WRj7PVIQDVJWab0_297Hja69ML63OpyxHzle7SdQ'},
    {id: `E`, url: 'https://www.statnews.com/wp-content/uploads/2019/01/GettyImages-453338433-645x645.jpg'},
    {id: `F`, url: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-09/11/11/asset/buzzfeed-prod-web-03/sub-buzz-27923-1536678906-2.jpg?downsize=700:*&output-format=auto&output-quality=auto'},
    {id: `G`, url: 'https://i.kym-cdn.com/entries/icons/facebook/000/010/346/gdggfjjgfjgfgg.jpg'},
    {id: `H`, url: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/airedale-terrier-700x700.jpg'},
    {id: `I`, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRSRslPrB4H7zAGtLYyQlb8YzfVMdhqaxPOTYwN6aTPlnnVggH'},
    {id: `J`, url: 'https://usercontent2.hubstatic.com/5111143_f520.jpg'},
    {id: `K`, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSveaCqxeujAaa7gDWiE-KeeI7fRJAOccyh6GZZxayetOw6DM44Q'},
    {id: `L`, url: 'https://g.petango.com/photos/1686/86723e26-36e5-4566-aa47-a92e18dcd2cf.jpg'}
]

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
    return <section>
        {
            images.map( (img) => (
            <Image
                key={img.id}
                clickHandler={() => props.clickHandler(img.id)}
                src={img.url}
            />))
        }
    </section>
}

export default ImageWrapper;