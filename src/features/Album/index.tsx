import React from "react";
import AlbumList from "./components/AlbumList";

function AlbumFeature() {
    const albumList = [
        {
            id: 1,
            title: "Title 1",
            thumbnailUrl:
                "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/7/3/c/173ce5cfc42b83b9ebe59d4441fbae60.jpg",
        },
        {
            id: 3,
            title: "Title 2",
            thumbnailUrl:
                "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/7/3/c/173ce5cfc42b83b9ebe59d4441fbae60.jpg",
        },
        {
            id: 2,
            title: "Title 3",
            thumbnailUrl:
                "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/7/3/c/173ce5cfc42b83b9ebe59d4441fbae60.jpg",
        },
    ];
    return (
        <>
            <h3>Album Feature</h3>
            <AlbumList albumList={albumList} />
        </>
    );
}

export default AlbumFeature;
