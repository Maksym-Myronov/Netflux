// Images
import dramaImage from '../assets/images/pictureDrama.svg';
import actionImage from '../assets/images/john-wick-2017-image-3840x2400.avif';
import adventureImage from '../assets/images/best-adventure-movies-2021-1636234616.png';
import animationImage from '../assets/images/Up-Pixar.webp';
import comedyImage from '../assets/images/jennifer-aniston-adam-sandler-murder-mystery-social-1.avif';
import crimeImage from '../assets/images/best-crime-comedy-movies-u1.jfif';
import documentaryImage from '../assets/images/1570173-h-e16bed2a0789.webp';
import familyImage from '../assets/images/classic-kids-movies-watch-with-family.jpg';
import fantasyImage from '../assets/images/dod4monKVwUmGVHWpARahm-1200-80.jpg';
import historyImage from '../assets/images/Gladiator-historical.webp';
import horrorImage from '../assets/images/346850-evil-dead-franchise.jpg';
import musicImage from '../assets/images/5122.webp';
import mysteryImage from '../assets/images/56e30080-05bc-11eb-bdfc-f696620d52aa.jfif';
import romanceImage from '../assets/images/hbz-most-romantic-movies-pride-and-prejudice-1549569450.jpg';
import scienceFictionImages from '../assets/images/2001-8k-cc-172-2000-7201b16f0e854cb4a1467b5ec856800d.jpg';
import TVMovieImage from '../assets/images/iStock-1317797291.jpg';
import thrillerImage from '../assets/images/shutter.jpg';
import warImage from '../assets/images/5b8912fa15e9f90dc90a94c1.jpg';
import sitcom from '../assets/images/Picturesitcom.svg';
import westernImage from '../assets/images/MMDBUAN_EC002-H-2022.webp';

export const useGetImage = () => {
	const renderImage = (genresImage: string) => {
		let imageSrc;
		switch (genresImage) {
			case 'Action':
				imageSrc = actionImage;
				break;
			case 'Adventure':
				imageSrc = adventureImage;
				break;
			case 'Animation':
				imageSrc = animationImage;
				break;
			case 'Comedy':
				imageSrc = comedyImage;
				break;
			case 'Crime':
				imageSrc = crimeImage;
				break;
			case 'Documentary':
				imageSrc = documentaryImage;
				break;
			case 'Drama':
				imageSrc = dramaImage;
				break;
			case 'Family':
				imageSrc = familyImage;
				break;
			case 'Fantasy':
				imageSrc = fantasyImage;
				break;
			case 'History':
				imageSrc = historyImage;
				break;
			case 'Horror':
				imageSrc = horrorImage;
				break;
			case 'Music':
				imageSrc = musicImage;
				break;
			case 'Mystery':
				imageSrc = mysteryImage;
				break;
			case 'Romance':
				imageSrc = romanceImage;
				break;
			case 'Science Fiction':
				imageSrc = scienceFictionImages;
				break;
			case 'TV Movie':
				imageSrc = TVMovieImage;
				break;
			case 'Thriller':
				imageSrc = thrillerImage;
				break;
			case 'War':
				imageSrc = warImage;
				break;
			case 'Western':
				imageSrc = westernImage;
				break;
			default:
				imageSrc = sitcom;
				break;
		}
		return imageSrc;
	};
	return [renderImage];
};
