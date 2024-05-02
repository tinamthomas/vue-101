### Styles

- Styles if they are not scoped will affect the entire project. For example, if you have a style defined for an h1 tag it will affect all h1 tags
- To ensure this doesn’t happen make sure styles are “scoped”. This of course prevents styles from leaking out of a file but does not prevent styles from leaking in. As a practice ensure that all styles are scoped
- While applying styles, ensure that you target classes instead of element types for speed.

### Tailwind CSS

- Provides you a bunch of CSS utilty classes
- Allows you to extend the classes. Ex, you can define a custom color you want and tailwind would generate a bunch of useful CSS classes to use.

### Components

There are two approaches to writing components. Composition API and Options API. Compositions API is neweer and supported in Vue 3.

- Vue lets you automatically use kebab case for components

### Important JS concepts

- Object shorthand syntax
