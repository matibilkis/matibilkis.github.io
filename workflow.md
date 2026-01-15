# Website Maintenance Workflow

## Overview
This Jekyll-based personal website showcases Matías Bilkis's multi-faceted professional profile: Academic, Business (QutSur), Developer, Ecosystem Builder, and Speaker/Outreach.

## Project Structure

```
matibilkis.github.io/
├── _config.yml              # Site configuration
├── _data/                   # Data files (YAML) - EASY TO EDIT
│   ├── nav.yml             # Navigation menu
│   ├── publications.yml     # Research papers
│   ├── talks.yml           # Talks and presentations
│   ├── activities.yml      # Activities, conferences, events
│   ├── projects.yml        # Developer projects (NEW)
│   ├── qutsur.yml          # QutSur business info (NEW)
│   └── ecosystem.yml       # Ecosystem building activities (NEW)
├── _pages/                  # Page content (Markdown)
│   ├── index.md            # Homepage
│   ├── research.md         # Research/publications
│   ├── talks.md            # Talks page
│   ├── activities.md       # Activities page
│   ├── projects.md         # Developer portfolio (NEW)
│   ├── qutsur.md           # QutSur business page (NEW)
│   ├── ecosystem.md        # Ecosystem building (NEW)
│   ├── milestones.md       # Academic milestones
│   └── contact.md          # Contact form
├── _layouts/               # Page templates
├── _includes/              # Reusable components
├── assets/                 # Static assets
│   ├── css/               # Stylesheets
│   └── images/            # Images (including profile photo)
└── conf/                   # Configuration/docs (not public)
```

## Adding New Content

### 1. Adding a New Publication
Edit `_data/publications.yml`:
```yaml
- type: paper
  title: "Your Paper Title"
  order: 9  # Use next available number
  url: "https://arxiv.org/pdf/..."
  description: "Abstract or description here"
  year: 2025
  authors: "Author1, Author2, ..."
```

### 2. Adding a New Talk
Edit `_data/talks.yml`:
```yaml
- type: talk
  title: "Talk Title"
  order: 11  # Use next available number
  url: "https://youtube.com/..."
  description: "Description here"
  event: "Event name"
  year: 2025
  month: 1
  day: 15
  location: "Location"
```

### 3. Adding a New Activity
Edit `_data/activities.yml`:
```yaml
- type: talk  # or panel, poster, etc.
  title: "Activity Title"
  event: "Event name"
  year: 2025
  month: 1
  day: 15
  location: "Location"
  description: "Description"
  links:
    - name: "Link name"
      url: "https://..."
```

### 4. Adding a New Developer Project
Edit `_data/projects.yml`:
```yaml
- title: "Project Name"
  description: "Short description"
  github: "username/repo"
  url: "https://..."  # Optional: live demo
  tech: ["Python", "Quantum", "ML"]
  order: 1
```

### 5. Updating QutSur Information
Edit `_data/qutsur.yml`:
```yaml
description: "Company description"
services:
  - name: "Service 1"
    description: "..."
team:
  - name: "Name"
    role: "Role"
```

## Content Organization Principles

1. **Data-Driven**: All dynamic content goes in `_data/*.yml` files
2. **Modular**: Each professional profile has its own data file and page
3. **Consistent**: Use consistent YAML structure across similar content types
4. **Ordered**: Use `order` field to control display order

## Professional Profiles

### 1. Academic Profile
- **Data**: `_data/publications.yml`
- **Page**: `_pages/research.md`
- **Content**: Papers, research group, academic milestones

### 2. Business Profile (QutSur)
- **Data**: `_data/qutsur.yml` (NEW)
- **Page**: `_pages/qutsur.md` (NEW)
- **Content**: Company info, services, team

### 3. Developer Profile
- **Data**: `_data/projects.yml` (NEW)
- **Page**: `_pages/projects.md` (NEW)
- **Content**: GitHub projects, coding portfolio, HPC work

### 4. Ecosystem Builder
- **Data**: `_data/ecosystem.yml` (NEW)
- **Page**: `_pages/ecosystem.md` (NEW)
- **Content**: Edge City Esmeralda, partnerships, initiatives

### 5. Speaker & Outreach
- **Data**: `_data/talks.yml`, `_data/activities.yml`
- **Page**: `_pages/talks.md`, `_pages/activities.md`
- **Content**: Talks, panels, outreach events

## Navigation Structure

The navigation (`_data/nav.yml`) should reflect all major sections:
- Home (about)
- Research
- Projects (Developer)
- QutSur (Business)
- Ecosystem
- Talks
- Activities
- Contact

## Styling Guidelines

- **Color Scheme**: Professional blue (#223568) with accents
- **Typography**: Clean, readable sans-serif
- **Layout**: Card-based, responsive
- **Images**: Profile photo in header, project screenshots where relevant

## Local Development

```bash
# Install dependencies
bundle install

# Run local server
bundle exec jekyll serve

# Or use the watch script
./watch.sh
```

## Deployment

The site is hosted on GitHub Pages. Push to `main` branch to deploy automatically.

## Best Practices

1. **Keep YAML files organized**: Use consistent structure
2. **Use order fields**: Control display order explicitly
3. **Add descriptions**: Make content self-explanatory
4. **Include links**: Always provide relevant URLs
5. **Update regularly**: Keep content fresh and current
6. **Test locally**: Always test changes before pushing

## Common Tasks

### Updating Profile Photo
1. Replace `assets/images/mati_web.png`
2. Ensure it's square or portrait-oriented
3. Recommended size: 300x300px or larger

### Adding a New Section
1. Create data file in `_data/`
2. Create page in `_pages/`
3. Add to navigation in `_data/nav.yml`
4. Update homepage if needed

### Changing Site Title/Description
Edit `_config.yml`:
```yaml
title: "Your Title"
jekyllacademic:
  homepage_title: "Your Homepage Title"
```

## Notes

- The `conf/` directory contains private documents (PDFs) and is not deployed
- Use relative URLs for internal links
- External links should open in new tab (`target="_blank"`)
- Always test on mobile devices

