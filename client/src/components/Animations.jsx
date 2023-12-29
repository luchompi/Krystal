import {useEffect, useRef} from "react";
import {Player} from "@lordicon/react";
import PropTypes from "prop-types";

export default function PlayOnce({ICON}) {
    const playerRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            playerRef.current.playFromBeginning();
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return <Player ref={playerRef} icon={ICON} size={100}/>;
}

PlayOnce.propTypes = {
    ICON: PropTypes.object.isRequired,
};
