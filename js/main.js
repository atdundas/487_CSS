new jBox('Tooltip', {
	attach: '.tooltip',
});

$(function () {
	$('#newsList').newsTicker();
});

$(function () {
	$('#newsList').newsTicker({
		interval: '4000', // Timeout interval between two news
		newsData: '#newsData', // Div where news will appear
		prevBtnDiv: '#prevDiv', // Prev button/div id
		nextBtnDiv: '#nextDiv', // Next button/div id
		playPauseID: '#play-pause', // Play/Pause toggle button/div id
		effect: 'fadeIn', // Transition effect
	});
});
