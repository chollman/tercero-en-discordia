import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Spinner from "react-bootstrap/Spinner";

const ImageLoader = (props) => {
    const [show, setShow] = useState(false);

    const onImageLoad = () => {
        setShow(true);
        if (props.callback) props.callback();
    };

    const { callback, ...imageProps } = props;

    return (
        <>
            {!show && (
                <div
                    className="img-placeholder"
                    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                >
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Cargando imagen...</span>
                    </Spinner>
                </div>
            )}
            <Image hidden={!show} onLoad={onImageLoad} {...imageProps} />
        </>
    );
};

export default ImageLoader;
