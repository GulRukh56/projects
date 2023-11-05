"use strict";
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function make_album(artist, title, tracks) {
    const album = {
        artist,
        title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create album objects
const album1 = make_album("Artist1", "Album1");
const album2 = make_album("Artist2", "Album2", 12); // Example with the number of tracks
const album3 = make_album("Artist3", "Album3");
// Print the album objects
console.log(album1);
console.log(album2);
console.log(album3);
