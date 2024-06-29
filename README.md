# Rento - Tenant Management App for Landlords
Rento is a React application designed for landlords to manage tenants efficiently. It features a login screen and three main tabs: Messaging, Invoice, and Survey. This README provides an overview of the app, its functionality, and how to navigate through it.
## Live Demo: https://rento-tenant-management-app-for-landlords.vercel.app/
## UI Design and User Flow
Mock-up: The UI design is implemented based on the Figma mock-up available here.
User Flow: Routing between screens and tabs is described in the user flow diagram available here.
Features
### Login Screen
Separate screen with fields for username and password.
Validation against hardcoded credentials: {name: ‘ethan.hunt’, password: ‘entity!2025’}.
Successful login redirects to the main app; otherwise, displays an error message.
### Main App - Three Tabs
Messages

Displays chat threads of three separate users by default.
Click on a chat thread to open the texting interface.
Type and send messages, which get added to the chat thread.

Invoice

Shows a thread of existing bill receipts with details {id, tenant, amount, status, date}.
Click 'Create Invoice' to open a new window within the screen.
Fill in invoice details and submit. The new entry appears in the existing thread.

Survey

Presents one question with four radio options for responses.
User selects an option and clicks 'Submit' to record the response.
Displays a visual chart (bar, pie, column) representing responses per option.

Additional Notes

Variable Sharing: Ensure consistent variable sharing between screens/tabs.
State Persistence: Use local storage or AsyncStorage to prevent loss of variable state on page refresh.
User Interaction: Focus on smooth, fast, and fully functional interactions with screens, tabs, and app flows.
Enhancements: Consider adding animations, loaders, or pop-up messages for a richer user experience.

### Installation
To run the Rento app locally:

### Clone this repository.
Navigate to the project directory.
Install dependencies using npm install.
Start the development server with npm start.
Technologies Used
React Native
React Navigation
AsyncStorage (for state persistence)
Styled Components (for styling)
Contributing
Contributions are welcome! Please open an issue or submit a pull request for any new features, enhancements, or bug fixes.

### License
This project is licensed under the MIT License - see the LICENSE file for details.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
