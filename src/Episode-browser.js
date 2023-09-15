import React, { useState } from "react";
import Episode from "./Episode";

export default function EpisodeBrowser() {
    const episodes = [
        {
            name: "Winter Is Coming",
            episode: 0,
            cover: "https://static.wikia.nocookie.net/gameofthrones/images/0/0e/Winter_is_Coming.jpg/revision/latest?cb=20170828001642"
        },
        {
            name: "The Kingsroad",
            episode: 1,
            cover: "https://static.wikia.nocookie.net/gameofthrones/images/8/8d/The_Kingsroad.jpg/revision/latest?cb=20170828001802"
        },
        {
            name: "Lord Snow",
            episode: 2,
            cover: "https://static.wikia.nocookie.net/gameofthrones/images/8/8f/Lord_Snow.jpg/revision/latest?cb=20170828001922"
        },
    ];

    const [episode, setEpisode] = useState(0);
    const [activeEpisode, setActiveEpisode] = useState(episodes[0]);

    function nextEpisode() {
        if(episode > episodes.length -1){
            alert("No more episodes");
            return;
        }

        setEpisode(episode + 1);
        refreshEpisode();
    }

    function previousEpisode() {
        if(episode == 0){
            alert("No more episodes");
            return;
        }

        setEpisode(episode - 1);
        refreshEpisode();
    }

    function refreshEpisode() {
        setActiveEpisode(episodes[episode]);
    }

    return (
        <div className="EpisodeBrowser">
            <h1>Episode Browser</h1>
            <Episode 
                name={activeEpisode.name}
                episode={activeEpisode.episode} 
                cover={activeEpisode.cover}
                cosa={"esto va despues"} />
            <button onClick={previousEpisode}>Previous</button>
            <button onClick={nextEpisode}>Next</button>
        </div>
    );
}


