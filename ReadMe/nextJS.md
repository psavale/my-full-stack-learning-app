
# NextJS supports the below rendering technique, allowing developers to select the best approach for their use case

```markdown
1. Rendering 
Server-Side Rendering (SSR): Pages are rendered on the server at request time.
Static Site Generation (SSG): Pages are pre-rendered at build time for better performance.
Incremental Static Regeneration (ISR): Enables updating static content on demand without rebuilding the whole site.
Client-Side Rendering (CSR): Components or parts of the page can be hydrated client-side.


2. File based routting
3. Api routes 
    - Build serverless API endpoints using the pages/api/ directory
4. Image Optimization
5. Automatic Code Splitting
    - Only loads the JavaScript required for the page, reducing the initial load time and improving performance.
6. Built-In Internationalization (i18n)
    - Provides an easy way to handle multiple languages using the i18n configuration in next.config.js.
7. TypeScript Support
    - First-class support for TypeScript with automatic type-checking and better integration.
8. Next.js 15 introduces asynchronous APIs for server-side data handling, transitioning away from synchronous methods for cookies, headers, and request parameters.
9. Caching: fetch requests, GET Route Handlers, and client navigations are no longer cached by default
10. In the NextJS 15, there is React server components and client components

    React Server Components (RSC)
    - server components are rendered execusively on the server
    - server components are default in nextjs15 and server components are never sent to the client
    - use can't use interactive features like useState and useEffect in server components
    - server can be used to fetch data from the server, accessign backend resources 
    - keeping the sensitive information on the server

    Clinet components
    - client components are rendered in the browser and add "use client" directive at the top of the file.
    - 
```

## NextJs methods/Concepts

```markdown
1. route groups 
    - route groups are introduced in NextJS 13. Route groups allow developers to group and organize their route files into folders for better maintainability, but these folders do not affect the URL path. Essentially, route groups make it easier to handle complex routing in large applications while keeping the URLs clean.
    - You can assign layouts to specific route groups by including a layout.js file in the group. This ensures only the grouped routes share the same layout.
    - When navigating between the pages, only page components updates, shared layout doesn't re-render.

2. usePathname
- You can use usePathname to determine the current page and highlight the active link in a navigation bar.
- The usePathname hook can only be used inside client components because it relies on browser-based navigation.

3. userRouter 
- In Next.js, both useRouter and Link are used for navigation, but they serve different purposes and are used in different contexts.
- use useRouter when you need to navigate programmatically in response to some logic, such as after form submission, API call completion, or when a button is clicked.
- useRouter does not preload pages by default.

4. Link
- use Link when you need to navigate users to other pages using static or dynamic links in the UI.
- Automatically preloads linked pages in the background.

5. App Router vs Api route
API Routes (Pages Router)
- Defined in pages/api. Requires custom implementation.
- 
Route Handlers (App Router)
- Defined in app/api. Built-in integration with Next.js middleware.
- With route handlers in the App Router, Next.js provides a modern, clean, and optimized way to handle backend API logic. This approach is especially powerful when combined with Next.js's server and client rendering capabilities.
-If you're working on a large-scale app, the modular architecture of the App Router makes the codebase easier to organize, scale, and maintain.
- For SEO-critical applications (blogs, e-commerce), the App Router makes it easier to serve pre-rendered content and improve SEO.
- The App Router is the future of Next.js applications and is highly recommended for modern web development. It provides scalability, better performance, and seamless integration of React Server Components, making it ideal for most new and growing projects.

6. Server actions 
7. Dynamic Routes
8. parallel routes 
- You can use Parallel Routes to conditionally render routes based on certain conditions, such as user role. For example, to render a different dashboard page for the /admin or /user roles:
9. 

```

## important usage points

```markdown
1. You cannot import a Server Component into a Client Component as it's not supported instead you can pass Server Components as a prop to a Client Component.

2. Run times (node.js runtime, edge runtime and serverless)
- 
```

## Vs code extension

```markdown
Thunder Client - Lightweight rest api client for VS Code. 
Json Placeholder - Free fake and reliable API for testing and prototyping.
mockapi.io - 
NextJS - https://www.youtube.com/playlist?list=PLC3y8-rFHvwhIEc4I4YsRz5C7GOBnxSJY
Clerk - Authentication with nextJS projects, Clerk allows sign in , sign up, manage account, protect route based on auth status, signout. 
-
```

## Interview questions

```markdown
1. What is Middleware in Next.js?
    - Middleware is a function that runs before a request completes. It allows you to modify the response or redirect users dynamically.
2. What is App Router (app/) vs. Pages Router (pages/) in Next.js 13+?
3. How do you fetch data in Server Components vs. Client Components?
4. How does next/image differ from <img>?
    - Next.js provides the <Image> component from next/image, which is an optimized replacement for the standard <img> tag. It improves performance by handling lazy loading, automatic resizing, optimization, and caching.

5. How to Optimize Performance in Next.js?
    ✔️ Use ISR (revalidate in getStaticProps)
    ✔️ Use next/image for better images
    ✔️ Enable React.lazy() for component lazy loading
    ✔️ Use Edge Middleware for faster API responses
6. What happens if getServerSideProps and getStaticProps exist in the same file?
    ✔️ Can we use localStorage inside getServerSideProps?
    ✔️ How does Next.js prefetch links with <Link>?
    ✔️ Difference between getInitialProps and getServerSideProps?
7. 



Flatten Deeply Nested Array
[1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]]

Debounce in JavaScript (with Code Examples)
- 

```
