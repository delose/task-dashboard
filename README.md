# TaskmasterDashboard


TaskmasterDashboard is a minimalist Angular application designed for managing tasks. The project showcases modern Angular development techniques and best practices, making it an ideal reference for developers looking to enhance their Angular skills.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.4.

## Features
- **Task Management**: Create, update, and delete tasks.
- **State Management**: The app uses BehaviorSubject for managing task state, ensuring efficient data handling without relying on local storage.
- **Lazy Loading**: The TasksModule is lazily loaded, optimizing the initial load time and improving overall performance.
- **Responsive Design**: A clean, modern UI with a responsive layout using CSS flexbox and media queries, designed to look great on any device.
- **Dynamic Navigation**: A navigation field that dynamically lists routes while excluding dynamic paths, ensuring a clean user experience.
- **Error Handling**: Implemented proper error handling for asynchronous operations, including network requests.
- **Component-Based Architecture**: Small, reusable components were created, adhering to Angular’s component-based architecture.
- **Typography & Design**: A modern, minimalist design inspired by Apple’s aesthetic, focusing on simplicity and usability.

## Screenshots
![Desktop - Task List](https://private-user-images.githubusercontent.com/7977832/365417063-b028e617-f8cc-4954-bace-a7e64470a1f8.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjU3NzUxMTEsIm5iZiI6MTcyNTc3NDgxMSwicGF0aCI6Ii83OTc3ODMyLzM2NTQxNzA2My1iMDI4ZTYxNy1mOGNjLTQ5NTQtYmFjZS1hN2U2NDQ3MGExZjgucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MDkwOCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDA5MDhUMDU1MzMxWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9M2Y1YjJjYTE3ZTdkZDZjNzJlMDk3ZThjZDUyYTIxZGViNDNiYzk5Y2I1ZTYwOTBiZmQ3MDI5NmIyODYwYmQ4NiZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.ViqvEsuOI6zEc0wAKZrbMR-qbzromhSd_MICRPpSxS8)
![Mobile - Task List](https://private-user-images.githubusercontent.com/7977832/365417082-057776c1-b9e9-4734-98e1-a22b5be7bd0c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjU3NzUxMTEsIm5iZiI6MTcyNTc3NDgxMSwicGF0aCI6Ii83OTc3ODMyLzM2NTQxNzA4Mi0wNTc3NzZjMS1iOWU5LTQ3MzQtOThlMS1hMjJiNWJlN2JkMGMucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MDkwOCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDA5MDhUMDU1MzMxWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MjY1MzZkNzY0NmFkMjhhYWQyODYxMWNmZTIxOWJlMTlkODVmZjYyNGJkOGM1ZjJjNTFlMzMwMGVhZDE4NTg5YSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.VaSzTWLKx1_RHtL9IJjPEvLU2sY3TgVr-07qMtgszLE)
![Desktop - Add Task](https://private-user-images.githubusercontent.com/7977832/365417110-b96be23f-b8b1-43fb-9546-720e78f6b24d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjU3NzUxMTEsIm5iZiI6MTcyNTc3NDgxMSwicGF0aCI6Ii83OTc3ODMyLzM2NTQxNzExMC1iOTZiZTIzZi1iOGIxLTQzZmItOTU0Ni03MjBlNzhmNmIyNGQucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MDkwOCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDA5MDhUMDU1MzMxWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9NGQ4MjhmMWY4ZThiMDIyYjFkOGIwNjhjMGMwNWE1ZTg2MGNlZDY4NTdkZTg3ZmNmNWRhOWNjYzNlYWYyMmNmMCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.nVcdaT6fZXChcPzYZEqY4Z-jER1fyV5Re7_14U3L3VU)
![Mobile - Add Task](https://private-user-images.githubusercontent.com/7977832/365417120-0606ccac-3d7b-4338-800c-1274934424aa.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjU3NzUxMTEsIm5iZiI6MTcyNTc3NDgxMSwicGF0aCI6Ii83OTc3ODMyLzM2NTQxNzEyMC0wNjA2Y2NhYy0zZDdiLTQzMzgtODAwYy0xMjc0OTM0NDI0YWEucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MDkwOCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDA5MDhUMDU1MzMxWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MDQzZjA1MGE3NTg3YzlhMzM2ZGFjMGQ2MDRhNjIyOWQ3ZTlmMTE1ZWU1MDg1ZmNiYzYxMTYwMTNmN2MxNDM0NyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.1ruvYdGgJmNRMEVXsFAyl6O0vTtXQXFe2jUFw6z-WgE)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Best Practices

- **Component-Based Architecture**: Angular’s component-based architecture promotes modularity and reusability. Each component is responsible for a specific part of the UI, making it easier to maintain and update.

- **State Management**: Used BehaviorSubject for managing task state, avoiding reliance on localStorage.

- **Lazy Loading**: The TasksModule is configured for lazy loading to improve the app’s performance.

- **Responsive and Minimalist Design**: Consistent use of modern, minimalist design principles with responsive layouts to ensure the application is accessible and user-friendly across devices.

- **Dynamic Navigation**: Created a nav-field component that dynamically lists routes, excluding paths with dynamic parameters like :id.

- **Error Handling**: Implemented error handling for asynchronous operations to ensure smooth user experience.

- **Use of trackBy in ngFor Directives**: Implemented the trackBy function to optimize rendering of lists in Angular.

- **Component-Based Architecture**: Created small, reusable components that follow Angular’s best practices for maintainability and scalability.

- **Typography & Aesthetics**: Applied modern typography and clean design, focusing on enhancing readability and overall user experience.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
