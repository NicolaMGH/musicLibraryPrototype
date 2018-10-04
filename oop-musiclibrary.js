const Library = function (name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
}

const Playlist = function (name) {
    this.name = name;
    this.tracks = [];
}

const Track = function (title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
}

Playlist.prototype.overallRating = function() {
  let overallR = 0;
  this.tracks.forEach((track) => {
    overallR += track.rating;
  })
  return overallR/this.tracks.length;
}

Playlist.prototype.totalDuration = function() {
  let totalD = 0;
  this.tracks.forEach((track) => {
    totalD += track.length;
  })
  return totalD;
}

const coolLibrary = new Library("cool", "Nick");
coolLibrary.playlists.push(new Playlist("Trending"));
coolLibrary.playlists[0].tracks.push(new Track("In my feelings", 3, 180));
coolLibrary.playlists[0].tracks.push(new Track("My Way", 5, 120));
coolLibrary.playlists[0].tracks.push(new Track("Staircase to Heaven", 2, 240));

console.log(coolLibrary.playlists[0].overallRating());
console.log(coolLibrary.playlists[0].totalDuration());

