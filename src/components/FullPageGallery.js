const FullPageGallery = (props) => {
    
    const { toggleShowGallery } = props;

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.9)", position: "fixed", left: 0, top: 0, width: "100vw", height: "100vh", zIndex: 10001}}>
            <p onClick={toggleShowGallery} style={{width: 33, height: 33, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "100%", background: "crimson", color: "white", position: "absolute", top: 10, right: 30, cursor: "pointer"}}>
                <i style={{fontSize: 12}} className="fa-solid fa-times"></i></p>
            <h1 style={{color: "white"}}>Gallery</h1>
        </div>
    );
}

export default FullPageGallery;