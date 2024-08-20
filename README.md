# Finofo Demo

## Features
Have you ever wanted to learn about your favorite fruits? This app does just that! Learn about the Genus, Order, and Family that belongs to your favorite fruit.

#### Tech stack
- Fruit sourced from https://www.fruityvice.com/
- ReactQuery
- Axios
- Vite + TypeScript
- ShadCN
- Tailwind

#### Getting started
```
git clone https://github.com/krishokr/finofo-demo.git
```

Start UI:
```
cd finofo-demo
```
```
npm install
```
```
npm run dev
```

Start proxy server in new terminal:
```
cd finofo-demo/server
```
```
npm install
```
```
node server.ts
```

### Video demo
https://github.com/user-attachments/assets/e58ed930-0647-4113-ad70-2f1c17a2b349

### Challenges and Decisions
#### A. FruityVice API CORS Issue
When fetching fruit data directly from the UI, I ran into the following error: `Access to fetch at 'https://www.fruityvice.com/api/fruit/all' from origin 'http://localhost:5173' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.`

If I am running into errors when fetching data, I like to isolate the issue to determine where to spend my time debugging. My first instinct was to determine if this was an error in my code, or an issue with the FruityVice API. To test this, I used Postman and sent a GET request at `https://www.fruityvice.com/api/fruit/all`. In addition, I also did some brief research on this specific CORS error and found that the Fruityvice API server is likely not sending the necessary CORS headers to allow requests from my origin http://localhost:5173. To fix this, I created a simple proxy server that would forward requests from my origin to the FruityVice API. This fixed the issue and I was able to successfully get fruit data.


#### B. Tech stack
1. Vite: I am familiar with the advantages of Vite over create-react-app as it leverages ES modules to create a fast development server (faster than Webpack, which is what CRA uses).
2. ShadCN: I recently learned about ShadCN from YouTube, and started using it in a personal project I've been working on - it is incredibly easy to use, customizable, and looks great. It is built on Radix components and encourages you to create your own design system.
3. ReactQuery: ReactQuery is a powerful tool used for data fetching and mutations - it eliminates the need to wrap all your requests in a useEffect, and makes it easy to handle loading and error states. Additionally, it caches data - as long as the data key does not change, it will use the data. This means it can act as a state manager and be used across multiple components without the extra request.
