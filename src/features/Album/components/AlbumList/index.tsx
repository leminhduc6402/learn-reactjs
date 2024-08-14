import Album, { AlbumType } from "../Album";
import "./style.scss";

type AlbumProps = {
    albumList: AlbumType[];
};

function AlbumList({ albumList }: AlbumProps) {
    return (
        <div>
            <ul className="album-list">
                {albumList.map((album, index) => (
                    <li key={index}>
                        <Album album={album} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AlbumList;
