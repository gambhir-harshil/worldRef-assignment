
# WorldRef Assignment

I have created a simple NextJs application to showcase my skills of NextJs.
The application uses the **Rick and Morty Api** to get the characters of the show and some details of them on their specific route.


## Run Locally

Clone the project

```bash
  git clone https://github.com/gambhir-harshil/worldRef-assignment.git
```

Go to the project directory

```bash
  cd worldRef-assignment
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn dev
```


## Tech Stack

**Client:** NextJs, Zustand, TailwindCSS, ShadCn

**Database:** MongoDb



## Project Structure

- `pages/`: Contains Next.js pages and the API routes. Utilizes dynamic routing for characters.
- `components/`: Reusable UI components including form, button, input.
- `hooks/`: Custom React hooks, including `useAxios` for data fetching and `useAuthStore` for authentication state management.
- `styles/`: Global styles and Tailwind CSS configuration files.


## Key Features

- **Server-Side Rendering (SSR)**: Ensures fast load times and SEO optimization. Implemented in Next.js pages through `getServerSideProps`.

  Example of SSR in `getServerSideProps`:

  ```javascript
  export async function getServerSideProps(context) {
    // Fetch data for server-side rendering
  }

- **Caching**: I have also implemented caching of the home page using SSR and node-cache.

- **Auth**: Succesfully implemented Auth protected routes which are only available to authenticated users.

- **Zustand for State Management**: Zustand is used for a straightforward, hook-based state management solution. It provides an excellent developer experience and integrates seamlessly with Next.js, making state management across components a breeze.

- **Tailwind CSS for Styling**: Tailwind CSS is integrated for rapid UI development. It enables custom, utility-first styling directly in your components, leading to faster development cycles and a more consistent design system.

- **API Routes for Backend Integration**: Next.js API routes are used to create a seamless integration between the frontend and any backend logic, running server-side code directly within the Next.js app. This simplifies development by consolidating both frontend and backend logic in a single codebase..
