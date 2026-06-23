# Kids All-in-One Learning Hub

A unique and colorful kids learning website that organizes YouTube educational videos in one place. Parents can add YouTube links and categorize videos by age group, learning topic, and audience.

## Live Website Idea

This project is designed to be deployed on GitHub Pages. After uploading the files to GitHub, you can get a live public website link.

## Features

- Beautiful kid-friendly landing page
- YouTube video embed cards
- Search videos by title or topic
- Filter by age group
- Filter by boys, girls, or both
- Category buttons for rhymes, letters, numbers, stories, science, drawing, good habits, and general knowledge
- Easy video upload by editing only `videos.js`
- Mobile responsive design
- GitHub Pages ready

## Categories

- Rhymes
- Letters
- Numbers
- Stories
- Science
- Drawing
- Good Habits
- General Knowledge

## Age Groups

- Ages 2-4
- Ages 5-7
- Ages 8-10

## How to Add a YouTube Video

Open `videos.js` and add a new object:

```js
{
  title: "Kids Learning Video",
  youtubeId: "mbPNkDEN3Ps",
  age: "2-4",
  category: "Rhymes",
  audience: "Both",
  description: "Educational video for kids."
}
```

For this YouTube link:

```text
https://youtu.be/mbPNkDEN3Ps?si=ciZ5Hmb_39EsVZ1B
```

Use only:

```text
mbPNkDEN3Ps
```

## Files

```text
kids-all-in-one-learning-hub/
├── index.html
├── style.css
├── script.js
├── videos.js
└── README.md
```

## How to Deploy on GitHub Pages

1. Create a new GitHub repository.
2. Upload all files.
3. Go to Settings.
4. Click Pages.
5. Select Deploy from branch.
6. Select branch: main.
7. Select folder: root.
8. Click Save.
9. Your live link will look like:

```text
https://yourusername.github.io/repository-name/
```

## Project Description

Kids All-in-One Learning Hub is a kid-friendly educational video website that helps parents organize YouTube learning videos by age, topic, and audience in one clean searchable platform.

## Author

Sushma Neduganti
