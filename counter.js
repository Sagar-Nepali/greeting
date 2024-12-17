// Check if 'views' key exists in localStorage
let views = localStorage.getItem('views');

// If not, initialize the counter to 0
if (!views) {
  views = 0;
} else {
  views = parseInt(views);
}

// Increment the view count
views++;

// Store the updated count back in localStorage
localStorage.setItem('views', views);

// Log the view count to the console (for your reference)
console.log(`This page has been viewed ${views} times.`);
