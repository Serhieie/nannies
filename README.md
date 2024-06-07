# Nanny Service Application

## Project Description

This project is a web application for a company that offers nanny services. The application consists of three main pages:

1. **Home**: The home page features the site's title, the company's slogan, and a call-to-action link that directs users to the "Nannies" page.
2. **Nannies**: This page displays a list of nannies, which users can sort alphabetically, filter by price, and sort by popularity.
3. **Favorites**: A private page where users can view nannies they have added to their favorites.

## Technical Requirements

1. **Authentication**: Use Firebase for user authentication (registration, login, getting current user data, logout).
2. **Form Handling**: Implement registration/login forms with minimal validation using `react-hook-form` & `yup`. All fields are required. The modal form should close when clicking a close button, backdrop, or pressing the Esc key.
3. **Firebase Database**: Use Firebase Realtime Database to create a collection of nannies with fields: name, avatar_url, birthday, experience, reviews, education, kids_age, price_per_hour, location, about, characters, rating. Use `babysitters.json` for populating the collection.
4. **Nanny Card**: Implement a card component for displaying nanny characteristics as per the provided design.
5. **Lazy Loading**: On the "Nannies" page, initially render 3 cards and load more cards on button click, fetching additional data from the database.
6. **Favorites Handling**:
    - For non-authenticated users, display a modal or push notification indicating that the feature is available only for authenticated users.
    - For authenticated users, add the card to favorites (using localStorage or Firebase collection), and change the color of the favorite button.
7. **Persistent State**: Ensure that the state of the favorite button persists on page reload.
8. **Favorite Removal**: Allow users to remove nannies from favorites by clicking the favorite button again, changing its color back to the default state.
9. **Detailed View**: Clicking the "Read more" button should expand the card with detailed information and reviews.
10. **Appointment Form**: Clicking the "Make an appointment" button should open a modal form for scheduling a meeting with the nanny. Implement the form with minimal validation using `react-hook-form` & `yup`. All fields are required.
11. **Modal Behavior**: The appointment modal should close when clicking a close button, backdrop, or pressing the Esc key.
12. **Favorites Page**: For authenticated users, provide a private "Favorites" page to view all favorited nannies. The styling should match the "Nannies" page.

## Bonus Task

- **Routing**: Implement routing using React Router.

## Completion Criteria

- **Responsive Design**: The layout should be responsive from 320px to 1440px, and should work correctly on mobile and tablet devices.
- **No Console Errors**: Ensure there are no errors in the browser console.
- **Native JS or React**: The project should be done using native JS with a bundler (like Vite) or React.
- **Firebase Integration**: User authentication and collection handling should be done using Firebase.
- **Interactive**: All interactive elements should work as per the technical requirements.
- **Code Quality**: The code should be formatted and free of comments.
- **README**: Include a README.md file with a project description, main technologies, design, and technical requirements.
- **Deployment**: Deploy the project on GitHub Pages, Netlify, or another hosting service.

## Technologies Used

- **React**
- **Redux**
- **TypeScript**
- **Tailwind CSS**
- **Firebase**
- **react-hook-form**
- **yup**

## Project Setup

To set up the project locally:

1. Clone the repository:
    ```sh
    git clone https://github.com/Serhieie/nannies.git
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm run dev
    ```

## Deployment

The project is deployed and can be accessed at: [Project URL](https://serhieie.github.io/nannies/)

## Design and Mockup

The design and mockup for this project can be found in the `design` directory of this repository.

## License

This project is licensed under the MIT License.
