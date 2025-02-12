# React JS questions

```markdown
1. Why is useState not updating immediately? 
    - React batches updates and updates state asynchronously.

    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
        console.log(count); 
    };
    setCount(prev => prev + 1);

     // 🛑 Still old value (0)!

2. How does React handle re-renders?
    - React re-renders a component when state or props change, but it does not always re-render child components unless needed.
    - Use React.memo to prevent unnecessary renders

3. Why do we use key in React lists?
    - Keys help React identify which items changed, are added, or removed, optimizing re-renders.

4. What happens if you update state inside useEffect without dependencies?
    - If you call setState() inside useEffect() without dependencies, it causes an infinite re-render.

  // 🛑 This runs infinitely!
    useEffect(() => {
    setCount(count + 1); 
    });
5. What is the difference between React.Fragment and <> ?
    - React.Fragment supports key attributes (<React.Fragment key="x">), but <> does not.
6. How does useRef prevent re-renders?
    - useRef persists values across renders but does not cause re-renders.
7. What is useCallback and when to use it?
    - useCallback caches function references to prevent unnecessary re-renders in child components
8. What is the difference between context and Redux? 
    - use redux when State is shared across many components.
    - when you need middleware (e.g., Redux-Thunk) for side effects
9. How does React’s Virtual DOM improve performance?
    - React’s Virtual DOM minimizes direct manipulation of the real DOM by batching updates and only re-rendering changed components.
10. What is useCallback and how is it different from useMemo?
    - useCallback memoizes functions, while useMemo memoizes values.
11. Can a custom hook call another custom hook?
    - Yes! A custom hook can call other hooks, including built-in hooks and other custom hooks.

12.  How do you share state between components using a custom hook? 
    - You can use React Context within a custom hook.
    - Custom hooks increase reusability, optimize performance, and simplify complex logic in React applications. Understanding them deeply will help you write scalable and maintainable React apps.

13. Tell me some of the react hooks rules 
    1.  Always call hooks at the top level of your component or another hook.
    - Hooks should not be called inside loops, conditions, or nested functions.
    // ❌ This will break React's hook order tracking
        function MyComponent({ condition }) {
        if (condition) {
            const [count, setCount] = useState(0); 
        }
        return <div>Component</div>;
    }
     
    2. Only call hooks inside React functions 
        - Calling hooks in a regular JS function ❌
    3. Use hooks only in functional components or custom hooks	
        - Using useState outside of a function ❌
    4. Custom hooks should start with use
        - Naming a hook fetchData instead of useFetchData ❌
    5. Use useEffect dependencies correctly	
        - Missing the dependency array ❌
    6. Optimize performance with useCallback and useMemo
    7. Do not mutate state directly
```
