### Styles

- Styles if they are not scoped will affect the entire project. For example, if you have a style defined for an h1 tag it will affect all h1 tags
- To ensure this doesn’t happen make sure styles are “scoped”. This of course prevents styles from leaking out of a file but does not prevent styles from leaking in. As a practice ensure that all styles are scoped
- While applying styles, ensure that you target classes instead of element types for speed.
