# Weather App - React + Vite

 Setup Instructions

1. Clone the Repository  
   First, clone the repository to your local machine:
   git clone https://github.com/sammysamuti/weather-web-app.git
   

2. Navigate to the Project Directory  
   After cloning, move into the project directory:
   cd weather-web-app
   

3. Install Dependencies  
   Run the following command to install all necessary dependencies:
   npm install
   

4. Run the Project  
   Start the Vite development server:
   npm run dev
   

5. Open the App in Browser  
   The app should now be running at `http://localhost:5173` or if it's used you should either way check your terminal. So open the link in your browser to view the project in action.



 Technologies Used

- React: A JavaScript library for building user interfaces.
- Vite: A fast build tool and development server for modern web projects.
- Tailwind CSS: A utility-first CSS framework for designing responsive layouts quickly.
- Axios: A promise-based HTTP client for making requests to external APIs.
- Visual Crossing Weather API: A weather data API used to fetch real-time weather data.
- React Hooks: Used for managing state and side effects (e.g., `useState`, `useEffect`).
- Custom Hooks: `useDate` to handle dynamic time formatting in the app.



 Known Issues/Assumptions

- Limited Error Handling: While there is an error message for missing places or network issues, there could be improvements in error messaging and handling.
- Weather Data Accuracy: The weather data fetched from the Visual Crossing Weather API is dependent on their coverage and accuracy.
- API Key: An API key is required for the Visual Crossing Weather API. Ensure you have it set in your environment variables as `VITE_API_KEY`.
- Responsiveness: The app is designed to be responsive across mobile, tablet, and desktop devices. However, certain views may need further optimization for specific screen sizes (e.g., very small or very large screens).
- Testing: There are no automated tests included in this setup yet. Maybe in the future I will consider adding unit or integration tests in the future using libraries like Jest or React Testing Library.



 Contribution

If you want to contribute to this project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to your branch (`git push origin feature-branch`).
5. Create a pull request.



 License

This project is open-source.


