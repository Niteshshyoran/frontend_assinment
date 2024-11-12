import React, { useEffect, useState } from 'react';
import './AlbumGallery.css';

const AlbumGallery = () => {
    const [albums, setAlbums] = useState([]);
    const [newAlbumTitle, setNewAlbumTitle] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/albums");
                if (!response.ok) throw new Error("Error fetching albums");
                const data = await response.json();
                setAlbums(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchAlbums();
    }, []);

    const addAlbum = async (e) => {
        e.preventDefault();
        if (!newAlbumTitle) return;

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/albums", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title: newAlbumTitle })
            });
            if (!response.ok) throw new Error("Error adding album");

            const addedAlbum = await response.json();
            setAlbums([addedAlbum, ...albums]);
            setNewAlbumTitle("");
        } catch (error) {
            setError("Failed to add album");
        }
    };

    if (loading) return <p>Loading albums...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="album-gallery-container">
            <h1>Album Gallery</h1>
            <form onSubmit={addAlbum} className="album-form">
                <input 
                    type="text"
                    placeholder="Album Title"
                    value={newAlbumTitle}
                    onChange={(e) => setNewAlbumTitle(e.target.value)}
                    className="album-input"
                />
                <button type="submit" className="album-button">Add Album</button>
            </form>
            <div className="album-grid">
                {albums.map(album => (
                    <div key={album.id} className="album-card">
                        <img src="https://via.placeholder.com/100" alt="Album Icon" className="album-icon"/>
                        <h3>{album.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AlbumGallery;
