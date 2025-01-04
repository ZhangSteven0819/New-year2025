// 自动播放背景音乐
const playButton = document.getElementById('playButton');
const bgMusic = document.getElementById('bgMusic');

playButton.addEventListener('click', () => {
    bgMusic.play();
    playButton.innerText = '音乐播放中...';
    playButton.disabled = true;
});

// 动态加载图片
const photoGallery = document.querySelector('.photo-gallery');
const classmates = [
    'classmate1.jpg', // 替换为你的图片文件名
    'classmate2.jpg',
    'classmate3.jpg'
];

classmates.forEach(photo => {
    const img = document.createElement('img');
    img.src = `images/${photo}`; // 确保图片放在 images 文件夹内
    img.alt = '同学照片';
    photoGallery.appendChild(img);
});
