import React, {useState} from 'react'
import { motion } from 'framer-motion';
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { photos } from '../constants';

// import lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const Gallery = () => {
    const [index, setIndex] = useState(-1);
    return (
        <div>
            <h2 className={styles.sectionHeadText}>Gallery</h2>
            <PhotoAlbum layout="rows" photos={photos} onClick={({ index }) => setIndex(index)} />
            <Lightbox
                slides={photos}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
        </div>
    )
}

export default SectionWrapper(Gallery, 'Gallery')