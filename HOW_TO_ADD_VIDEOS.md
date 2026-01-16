# How to Add YouTube Videos

Super simple! Just edit one file: `assets/videos.json`

## Quick Example

```json
{
  "videos": [
    {
      "id": "y_aVeya0k5U",
      "title": "Artistic Work",
      "description": "Creative exploration at the intersection of art and science",
      "category": "art",
      "tags": ["art", "creative", "experimental"]
    },
    {
      "id": "dQw4w9WgXcQ",
      "title": "Another Video",
      "description": "Description here",
      "category": "art",
      "tags": ["quantum", "talk"]
    }
  ]
}
```

## Step by Step

### 1. Get the Video ID

From YouTube URL: `https://www.youtube.com/watch?v=y_aVeya0k5U`

The video ID is: **`y_aVeya0k5U`** (everything after `v=`)

### 2. Open `assets/videos.json`

### 3. Add Your Video

Copy this template:

```json
{
  "id": "YOUR_VIDEO_ID",
  "title": "Your Video Title",
  "description": "Short description (1-2 sentences)",
  "category": "art",
  "tags": ["tag1", "tag2", "tag3"]
}
```

### 4. Choose Category

- **`"art"`** → Shows in "Artistic & Creative Work" section on Talks & Things page
- **`"talk"`** → Shows in talks section (if you create it)
- **Other values** → Will show in a general section

### 5. Add Tags (Optional)

Tags appear as colored labels under the video. Examples:
- `["art", "creative"]`
- `["quantum", "research", "talk"]`
- `["music", "AI", "livecoding"]`

### 6. Save and Refresh

Videos load automatically! Just refresh the page.

## Multiple Videos Example

```json
{
  "videos": [
    {
      "id": "y_aVeya0k5U",
      "title": "Artistic Exploration",
      "description": "Art-science fusion project",
      "category": "art",
      "tags": ["art", "creative"]
    },
    {
      "id": "abc123xyz",
      "title": "QTML Talk 2024",
      "description": "Quantum machine learning research presentation",
      "category": "talk",
      "tags": ["quantum", "ML", "research"]
    },
    {
      "id": "def456uvw",
      "title": "Sónar Hackathon Demo",
      "description": "Live music generation with RL",
      "category": "art",
      "tags": ["music", "AI", "hackathon"]
    }
  ]
}
```

## Important Notes

- Don't forget commas between videos!
- Keep the JSON format valid (use a JSON validator if unsure)
- Test locally before pushing to GitHub

## Need Help?

If the videos don't show:
1. Check browser console for errors (F12)
2. Validate your JSON at https://jsonlint.com/
3. Make sure video IDs are correct (no full URLs, just the ID)

That's it! 🎉

