# HackyLess

Hackyless is an innovative web application that aggregates and organizes hackathons, coding challenges, and student events from multiple sources. This platform aims to provide a streamlined user experience for students, developers, and professionals looking to participate in competitions and events.

## Goals:
- Provide a centralized hub for all upcoming hackathons, coding challenges, and student events.
- Allow users to filter events based on their interests, location, and timing.
- Offer a user-friendly, interactive, and accessible interface.
- Foster participation and learning through hackathons and challenges.

## Features
- **Event Aggregation**: Fetches data from multiple platforms and centralizes it for easy access.
- **Search and Filters**: Easily search for events based on keywords, dates, and locations.
- **Event Details**: Provides comprehensive details about each event, including dates, requirements, and registration links.
- **User Accounts**: Allows users to sign up, save events, and receive notifications.
- **Notifications**: Notify users about upcoming events, deadlines, and new challenges.
- **Responsive Design**: Works seamlessly across desktops, tablets, and mobile devices.
- **API Integration**: Fetch event data from external APIs to ensure up-to-date listings.

## Tech Stack
1. **Frontend**:
- Vite React
- Tailwind CSS
- Axios for API requests
2. **Backend**:
- Node.js
- Express.js
- MongoDB (for storing event data and user information)
- Socket.io (for real-time event updates)
3. **API Integration**:
Integration with platforms like Devpost, HackerEarth,Devfolio,Dorahacks, and others for fetching event data.

## Installation
To set up this project locally, follow these steps:

- **Prerequisites**:
- Node.js (version 14 or higher)
- MongoDB (if running locally) or MongoDB Atlas
- Git
### Installation:
1. Clone the repository:
    ```bash
    git clone https://github.com/YadavAkhileshh/HackyLess.git
    cd hackyless

2. Install dependencies for both frontend and backend:
    For frontend:
    ```bash
    cd frontend
    npm install

3. Set up environment variables:
- Create a .env file in the root of the backend folder.
- Add necessary variables (such as MongoDB connection string, API keys for external services, etc.).

4. Run the application:
    ```bash
    npm run dev

5. Open the app in your browser:

Go to http://localhost:3000 to view the platform.

## Contributing
We welcome contributions! If you'd like to contribute to the project, follow these steps:

- Fork the repository.
- Create a new branch (git checkout -b feature/your-feature).
- Make your changes.
- Commit your changes (git commit -am 'Add new feature').
- Push to your branch (git push origin feature/your-feature).
- Open a pull request.


Thank you for exploring Hackyless! We hope this platform makes discovering and participating in hackathons, coding challenges, and student-focused events easier than ever. By centralizing all the important information into one location, we aim to foster innovation, learning, and collaboration within the community.

If you encounter any issues, have suggestions, or want to contribute to the project, feel free to open an issue or submit a pull request. We are continuously working to improve the platform and would love to have you as part of this journey.

Stay tuned for updates and happy hacking!

