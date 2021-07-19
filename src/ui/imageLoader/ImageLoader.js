import React, { useState } from 'react';
import { Image, Placeholder } from 'semantic-ui-react';

const ImageLoader = props => {
    const [show, setShow] = useState(false);
    let width = 'auto';
    let height = 'auto';

    if (props.size && props.size === 'mini') {
        width = '35px';
        height = '35px';
    }

    return (
        <>
            {!show && (
                <Placeholder
                    style={{
                        borderRadius: props.circular ? '50%' : '0',
                        marginRight: props.spaced === 'right' ? '.5em' : '0',
                        marginLeft: props.spaced === 'left' ? '.5em' : '0',
                        verticalAlign: 'middle',
                        display: 'inline-block',
                        width: width,
                        height: height,
                        fontSize: '.78571429rem',
                    }}
                >
                    <Placeholder.Image square />
                </Placeholder>
            )}
            <Image hidden={!show} onLoad={() => setShow(true)} {...props} />
        </>
    );
};

export default ImageLoader;
