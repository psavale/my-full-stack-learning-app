# CSS concepts

```markdown
1. CSS-in-JS & Styled Components (styled-jsx)
2. Sass ( format - .scss) - https://sass-lang.com/ 
    - variables
        - To access the values of your variables object use “mapObject” function. It has two parameters: the first one is an object, the second one is a key in this object. Both parameters are required.
    - nesting
    - partials
        -  A partial is a Sass file named with a leading underscore. You might name it something like _partial.scss
    - modules
    - functions 
        - flex-width(), 
    - mixins
        - some of the popular mixins are 
            - “respond-to”: this mixin is for writing media queries
            - Flex mixins - this mixin is for writing different flex styles
            - 
    - inheritance
        Using @extend lets you share a set of CSS properties from one selector to another.
        - Note that you can not set parameters in extend directive like in mixins.
    - operators
        - Sass has a handful of standard math operators like +, -, *, math.div(), and %.
    $helper-styles Sass Map: 
     - The map holds common design tokens like spacing, colors, and shadows for consistency across the project.
     - You can use loops in Sass to generate utility classes dynamically based on the map's data.
     - Updates to the design tokens in one place ($helper-styles) automatically propagate throughout the project.
     - You can easily extend or override the $helper-styles map by merging another map with it:
     - 


3. 
```
