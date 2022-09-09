import { useEffect, useState } from "react";
import styles from './JokeBlock.module.css';

export default function JokeBlock() {
    const [joke, setJoke] = useState("")

    useEffect(() => {
        fetch('/api/joke')
        .then(res => res.json())
        .then(jokeJSON=> {
            setJoke(jokeJSON)
        })
    }, []);

    return (
        <iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=3718858421/size=small/bgcol=ffffff/linkcol=0687f5/track=2846054672/transparent=true/" seamless><a href="https://heavenpierceher.bandcamp.com/album/ultrakill-imperfect-hatred">ULTRAKILL: IMPERFECT HATRED by Heaven Pierce Her</a></iframe>
    )
}