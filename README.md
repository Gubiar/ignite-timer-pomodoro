# Ignite Timer Pomodoro

![Timer Pomodoro](https://opengraph.b-cdn.net/production/images/ffa113ee-2371-4a0a-ba21-1c3141d97be9.png?token=Y81So2QfdfZDWSIR7EIINXXl_AxFn50Ewi-M8aPsSeA&height=675&width=1200&expires=33259581037)

Ignite Timer Pomodoro is a Pomodoro-style timer built with React and Vite. The application allows users to create tasks, set focus times, and track their progress.

The design of this project was created as part of an activity in the **Formação em React** course offered by Rocketseat. Learn more at [Rocketseat](https://app.rocketseat.com.br/).

## Features

- **Create Tasks**: Users can create new tasks with a name and a focus time (1 to 60 minutes).
- **Pomodoro Timer**: A countdown timer helps users stay focused on their tasks.
- **History Tracking**: Users can view the history of their tasks, including the status (In Progress, Completed, or Interrupted).

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Next-generation frontend tooling for building React applications.
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Zod**: Schema declaration and validation library.
- **React Hook Form**: Form validation and handling library.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Gubiar/ignite-timer-pomodoro.git
   ```
2. Navigate to the project directory:

   ```bash
   cd ignite-timer-pomodoro
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development

To start the development server, run:

```bash
npm run dev
```

## Project Structure

- **Home Page**: Includes the task creation form and the Pomodoro timer.
- **History Page**: Displays a history of created tasks and their status.

## Validation

Form input validation is handled using **Zod** with the following schema:

## To-Do List

Here are some potential improvements for the project:

- **Persist Tasks in a Database**: Implement an API to save tasks in a database, allowing users to retrieve their history across different devices.
- **Local Storage**: Add functionality to persist tasks in local storage to retain data even after refreshing the browser.
- **User Authentication**: Add user authentication to allow multiple users to manage their tasks independently.
- **Notifications**: Integrate notifications to alert users when their focus time is up.
- **Statistics and Reports**: Provide statistics and reports on completed tasks and productivity.
- **Dark Mode**: Add a dark mode for better accessibility and user preference.

## License

This project is licensed under the MIT License.
