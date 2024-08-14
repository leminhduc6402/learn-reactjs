import "./style.scss";

export type AlbumType = {
    id: number;
    title: string;
    thumbnailUrl: string;
};

type AlbumProps = {
    album: AlbumType;
};

function Album({ album }: AlbumProps) {
    return (
        <div className="album">
            <div className="album__thumbnail">
                <img src={album.thumbnailUrl} alt={album.title} />
            </div>
            <p className="album__name">{album.title}</p>
        </div>
    );
}

export default Album;
