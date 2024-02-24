import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const FullPageGallery = (props) => {
    
    const { photos, toggleShowGallery } = props;

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgb(43, 52, 61)", position: "fixed", left: 0, top: 0, width: "100vw", height: "100vh", zIndex: 10001}}>
            <p onClick={toggleShowGallery} style={{width: 33, height: 33, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "100%", background: "crimson", color: "white", position: "absolute", top: 10, right: 20, cursor: "pointer", zIndex: 10002}}>
                <i style={{fontSize: 12}} className="fa-solid fa-times"></i></p>
            <div style={{width: "100%", maxWidth: "900px"}}>
                <Carousel >
                    {
                        photos.map( photo_url => (
                            <img src={photo_url} alt={photo_url}/>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    );
}

export default FullPageGallery;