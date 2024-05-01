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
import { Howl, Howler } from 'howler';
import { Typewriter } from 'react-simple-typewriter';
import afroHouse from '../../img/afroHouse.png';
import mD from '../Data/musicData';

const MusicPlayer = () => {
	const [songTitle, setSongTitle] = useState('');
	const [songArtist, setSongArtist] = useState('');
	const [songCover, setSongCover] = useState('');
	const [songID, setSongID] = useState(0);
	const theme = useTheme();

	//setting volume
	Howler.volume(0.5);

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
	const playMusic = (src) => {
		const sound = new Howl({
			src: [src],
			loop: true,
			volume: 0.5,
			onplay: () => {
				console.log('Sound playing');
			},
		});

		sound.play();
	};

	return (
		<div className='container music-container mt-5 mb-5'>
			<div className='text-center typewrite'>
				<audio id='audio'></audio>
				<Typewriter
					words={['Vibe to my playlist', 'best genre to code to!']}
					loop={0}
					cursor
					typeSpeed={50}
					deleteSpeed={60}
					delaySpeed={1000}
				/>
			</div>
			<Card sx={{ display: 'flex' }} className='music'>
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
								sx={{ height: 38, width: 38 }}
								onClick={() => playMusic(mD[songID - 1]?.src)} // Pass the src of the selected music
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
