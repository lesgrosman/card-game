
export const images = [
  {src: 'https://image.freepik.com/free-photo/vertical-cityscape-with-tall-skyscrapers-new-york-usa_181624-6511.jpg', id: 1},
  {src: 'https://24.media.tumblr.com/0edd893308b3fcb1d9df047ca8242b4d/tumblr_mulq0clDQ71reae9uo1_500.jpg', id: 2},
  {src: 'https://25.media.tumblr.com/77d4fc3ded25fbd06058bab47bce8c31/tumblr_mhvre36sw61r52c5io1_500.jpg', id: 3},
  {src: 'https://cupcakesandcashmere.com/.image/t_share/MTM5OTIyMzE1NjQyMjE3NTEz/paris-verticaljpg.jpg', id: 4},
  {src: 'https://s3.envato.com/files/163309399/zxgsr1(133).jpg', id: 5},
  {src: 'https://i.pinimg.com/originals/38/32/ef/3832efa1be2a07192a3704d0e3430e57.jpg', id: 6},
  {src: 'https://image.freepik.com/free-photo/vertical-cityscape-with-tall-skyscrapers-new-york-usa_181624-6511.jpg', id: 1},
  {src: 'https://24.media.tumblr.com/0edd893308b3fcb1d9df047ca8242b4d/tumblr_mulq0clDQ71reae9uo1_500.jpg', id: 2},
  {src: 'https://25.media.tumblr.com/77d4fc3ded25fbd06058bab47bce8c31/tumblr_mhvre36sw61r52c5io1_500.jpg', id: 3},
  {src: 'https://cupcakesandcashmere.com/.image/t_share/MTM5OTIyMzE1NjQyMjE3NTEz/paris-verticaljpg.jpg', id: 4},
  {src: 'https://s3.envato.com/files/163309399/zxgsr1(133).jpg', id: 5},
  {src: 'https://i.pinimg.com/originals/38/32/ef/3832efa1be2a07192a3704d0e3430e57.jpg', id: 6}
]

export function shuffleImages(images) {
  for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
  }
  return images;
}