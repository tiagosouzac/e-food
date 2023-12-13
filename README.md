# e-food

**Technologies Used:**

This project leverages two powerful frameworks for building robust applications. The back end is developed using NestJS, a progressive Node.js framework known for its modularity and scalability. NestJS facilitates the creation of highly maintainable and organized server-side applications, making use of TypeScript for a strongly typed and object-oriented development experience.

On the front end, Next.js is employed to build a performant and modern user interface. Next.js, a React framework, offers a seamless way to build web applications with server-side rendering and automatic code splitting, optimizing both the user experience and developer workflow.

By combining NestJS for the back end and Next.js for the front end, this project benefits from a full-stack JavaScript/TypeScript solution that emphasizes efficiency and maintainability.

**Running the Back End:**

1. Navigate to the "server" directory using the command: `cd server`.
2. Start the Docker containers by running: `docker compose up`.
3. Seed the Prisma database with sample data using: `npm run prisma:seed`.
4. Launch the development server with: `npm run start:dev`.

**Running the Front End:**

1. Navigate to the "web" directory using the command: `cd web`.
2. Start the development server by running: `npm run dev`.

Make sure to follow these steps in the specified order to successfully run the project. Adjust any configuration files or environment variables as needed for your local environment.
