/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './MusicPlayer.css';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Typewriter } from 'react-simple-typewriter';
import afroHouse from '../../img/afroHouse.png';
import mD from '../Data/musicData';
import sound from '../../../public/black.mp3'

const MusicPlayer = () => {
	const [songTitle, setSongTitle] = useState('');
	const [songArtist, setSongArtist] = useState('');
	const [songCover, setSongCover] = useState('');
	const [songID, setSongID] = useState(0);
	const theme = useTheme();


	useEffect(() => {
		// Set initial state based on the first item in the music data array
		const firstSong = mD[0];
		setSongTitle(firstSong.title);
		setSongArtist(firstSong.artist);
		setSongCover(firstSong.cover);
		setSongID(firstSong.id);
	}, []); // Empty dependency array ensures the effect runs only once on component mount
	const song = document.getElementById('audio');
	let currentMusic = 0;
	// Function to handle play state
	const playMusic = () => {

		new Audio (sound).play()
		

		
	};

	return (
		<div className='container mt-2 mb-5 d-flex flex-column h-auto w-auto'>
			<div className='text-center typewrite display 5 h-auto'>
				
				<Typewriter
					words={['Vibe to my playlist', 'best genre to code to!']}
					loop={0}
					cursor
					typeSpeed={50}
					deleteSpeed={60}
					delaySpeed={1000}
				/>
			</div>
			<Card sx={{ display: 'flex', height: 'auto' }} className='position-relative'>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<CardContent sx={{ flex: '1 0 auto' }}>
						<Typography component='div' variant='h5'>
							{songTitle}
						</Typography>
						<Typography
							variant='subtitle1'
							color='text.secondary'
							component='div'>
							{songArtist}
						</Typography>
					</CardContent>
					<Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
						<IconButton aria-label='previous'>
							{theme.direction === 'rtl' ? (
								<SkipNextIcon />
							) : (
								<SkipPreviousIcon />
							)}
						</IconButton>
						<IconButton aria-label='play/pause' id='play'>

							<PlayArrowIcon
								id = 'audio'
								sx={{ height: 38, width: 38 }}
								onClick={playMusic} // Pass the src of the selected music
							/>
							
						</IconButton>
						<IconButton aria-label='next'>
							{theme.direction === 'rtl' ? (
								<SkipPreviousIcon />
							) : (
								<SkipNextIcon />
							)}
						</IconButton>
					</Box>
				</Box>
				<CardMedia
					component='img'
					sx={{ width: 151 }}
					image={afroHouse}
					alt=''
				/>
			</Card>
		</div>
	);
};

export default MusicPlayer;
