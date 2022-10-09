# Orderly

[Orderly deployed on Vercel](https://orderly-cogluca.vercel.app/)

Minimal prototype simulating a rubber duck 🐤 questioning process. The intent is to disengage the developer from its current problem solving to instead work
on reducing some emotional friction that is holding him back in the moment.

The process is facilitated by images that are then analyzed through a questionnaire to discover what is the emotional difficulty at hand.

## Tools
The front end has been developed with HTML, CSS, React with functional components. On some instances some DOM manipulation through Javascript has been necessary.

I chose to implement the persistence level on local storage for maintanence ease and to keep the learning plan scope intact, otherwise it would have needed some backend as a service
like Firebase

## What I learned


- Learned to use props for parent-child unidirectional communication (passing down functions, variables and states)


- Learned the use of some React Hooks for the component lifecycle
   - Learned how to handle state through useState and how to lift state up to allow more than simple unidirectional (from parent to child and between siblings) communication
   - Learned how to use useEffect for dynamic rendering on state changes, essentially reproducing the observer observable pattern
   - Learned how to create a custom Hook to allow personalized functions


- Learned to use a debouncer to ease the number of calls on the API and limit resource usage, I used it on the search function and needed to understand a proper wait time
  for the user not to feel like he has been waiting for too much, for this reason I've chose 400ms as a debouncer wait time according to Doherty's Treshold (a UX Rule): a maximum wait time for the
  user not to feel like the system has been taking too much


- Learned how to create an incremental form that displays questions progressively to ease the cognitive load on the user


- Reviewed how to make API calls through the native Fetch function in order to grab images from a third-party API and serve them to the user


- Learned how to change the cursor on component mouse over to signal to the user that an action is possible


- Reviewed some basic functions on Javascript


- Learned how to hide API Keys with environmental variables and .env files and serve them through process.env in both Js and React



