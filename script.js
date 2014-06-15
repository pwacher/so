var wrapper = document.querySelector('.wrapper');
var article = document.querySelector('article');
var ul = document.querySelector('ul');
var epTitle = document.querySelector('.epTitle');
var epArtist = document.querySelector('.epArtist');


for (var i = 0; i < release.releases.length; i++) {
	epTitle.textContent = release.releases[i].title;
	epArtist.textContent = release.releases[i].artist;
};


//ul.appendChild(li);
