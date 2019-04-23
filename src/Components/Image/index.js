import React from 'react';
import Image from "./Image";

const ImgUrls = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRWAm4FAXnpTB0VKnZ_WK9oQyHFWwcKniHX5PsHmnIdCPHWsHJJg',
    'https://www.what-dog.net/Images/faces2/scroll008.jpg',
    'https://blog.pawstruck.com/wp-content/uploads/2016/01/puppy-dog-eyes.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuFYDhtlcow3WRj7PVIQDVJWab0_297Hja69ML63OpyxHzle7SdQ',
    'https://www.statnews.com/wp-content/uploads/2019/01/GettyImages-453338433-645x645.jpg',
    'https://img.buzzfeed.com/buzzfeed-static/static/2018-09/11/11/asset/buzzfeed-prod-web-03/sub-buzz-27923-1536678906-2.jpg?downsize=700:*&output-format=auto&output-quality=auto',
    'https://i.kym-cdn.com/entries/icons/facebook/000/010/346/gdggfjjgfjgfgg.jpg',
    'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/airedale-terrier-700x700.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRSRslPrB4H7zAGtLYyQlb8YzfVMdhqaxPOTYwN6aTPlnnVggH',
    'https://usercontent2.hubstatic.com/5111143_f520.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSveaCqxeujAaa7gDWiE-KeeI7fRJAOccyh6GZZxayetOw6DM44Q',
    'https://g.petango.com/photos/1686/86723e26-36e5-4566-aa47-a92e18dcd2cf.jpg'
]

const ImageWrapper = props => (
    <section>
        {ImgUrls.map( (url, index) => (<Image key={index} clickHandler={props.clickHandler} src={url} />))}
    </section>
)

export default ImageWrapper;