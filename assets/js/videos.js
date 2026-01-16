// ================================
// YouTube Video Loader
// Loads videos from videos.json
// ================================

async function loadVideos() {
    try {
        const response = await fetch('assets/videos.json');
        const data = await response.json();
        
        // Group videos by category
        const artVideos = data.videos.filter(v => v.category === 'art');
        const talkVideos = data.videos.filter(v => v.category === 'talk');
        const otherVideos = data.videos.filter(v => !v.category || (v.category !== 'art' && v.category !== 'talk'));
        
        // Render art videos
        if (artVideos.length > 0) {
            renderVideos('art-videos-container', artVideos);
        }
        
        // Render talk videos
        if (talkVideos.length > 0) {
            renderVideos('talk-videos-container', talkVideos);
        }
        
        // Render other videos
        if (otherVideos.length > 0) {
            renderVideos('other-videos-container', otherVideos);
        }
        
    } catch (error) {
        console.error('Error loading videos:', error);
    }
}

function renderVideos(containerId, videos) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const videoGrid = document.createElement('div');
    videoGrid.className = 'video-grid';
    
    videos.forEach(video => {
        const videoCard = createVideoCard(video);
        videoGrid.appendChild(videoCard);
    });
    
    container.appendChild(videoGrid);
}

function createVideoCard(video) {
    const card = document.createElement('div');
    card.className = 'video-card';
    
    // YouTube embed
    const embedDiv = document.createElement('div');
    embedDiv.className = 'video-embed';
    embedDiv.innerHTML = `
        <iframe 
            src="https://www.youtube.com/embed/${video.id}" 
            title="${video.title}"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    `;
    
    // Video info
    const infoDiv = document.createElement('div');
    infoDiv.className = 'video-info';
    
    const title = document.createElement('h3');
    title.textContent = video.title;
    
    const description = document.createElement('p');
    description.textContent = video.description;
    
    infoDiv.appendChild(title);
    infoDiv.appendChild(description);
    
    // Tags
    if (video.tags && video.tags.length > 0) {
        const tagsDiv = document.createElement('div');
        tagsDiv.className = 'video-tags';
        
        video.tags.forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.className = 'video-tag';
            tagSpan.textContent = tag;
            tagsDiv.appendChild(tagSpan);
        });
        
        infoDiv.appendChild(tagsDiv);
    }
    
    card.appendChild(embedDiv);
    card.appendChild(infoDiv);
    
    return card;
}

// Load videos when page is ready
document.addEventListener('DOMContentLoaded', loadVideos);

