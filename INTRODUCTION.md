# Upgrade Frontend Challenge

## Folder Structure

For this project, I decided to do a different folder structure (that I'm used to do) since it's a small one that I now it'll not grow. For larger project's I normally do a domain/feature based folder organization.

Inside the source folder you'll find basically two folders, **app** and **view**.

- **app**: Contains configuration (router, state, etc), bootstrap logics, test helpers, themes, api and so on.
- **view**: Contains all UI components, like layouts, common ui and pages.

## File naming convention

I used the component name as a file name, adding a index file to export/limit what I want to let other developers to use. For example:

I may have a folder for a **Chart** component, but inside of it I may have many other components that compose my chart like:
- TimeSeriesChart.jsx
- PieChart.jsx
- BubbleChart.jsx
- BaseChart.jsx
- YAxis.jsx
- XAxis.jsx
- index.jsx

**index.jsx** is the file where I export just the component's that can/should be used like the **time series**, **pie** and **bubble**, but not the other ones. 

That's a hint for other devs to not import/reference the other files directly because their are for internal use only. This also helps to keep the project dependency in a better stage, improves refactor, search/view in IDE's, and so on.

This is just a personal preference, but I've worked with other naming convetions for years and I'm fine with them as well.

## State management

For state management I used **Redux Toolkit** because this new version of Redux is way easier work with, less boilerplate files, and also consuming api with RTK gives me caching, loading state, error handler and others functionalities out of the box.

## Styles

For styling I decided to use **styled-components** since I've been working with it for years and it's a really good one. It gives you a lot of flexibility and makes the component easier to read. I created a simple theme folder with some configs like a global base style, a media query helper for responsiveness, and a file to hold some tokens for things like color, spacing, and so on.

## Testing

For testing I went with **react testing library** which is a broadly used one. It makes tests easier to write and mantain, it also have a strong focus on *behaviour testing* instead of *implementation* which is better because it helps us to test our component the same way user will interact with them. 

I also used **Mock Service Worker (msw)** because it's one of the best tools that I know to mock api calls. It's easier to use, library agnostic, fast and very customizable.

## Other tools

- I decided to use **react-hook-form** for handling form validation since I've used it before and works great, it's also very performant. To help with validation I also used  **Yup**, wich helps to create validation schemas in a easier and cleaner way.
- Used **tinycolors2** to make some changes on top of pre-defined brand colors, like make it darker or brighter or semi-transparent.
- Used **react-loading-skeleton** to make a nice loading UX for the colors select component

# What can be improved

- I like to use a **i18n** library on my project, even if I have just one language defined. It makes easier to do copy changes, and if in the future we decided to add other languages, the effort will be minimum.

- Static type checking with **Typescript**, **PropTypes** or **Flow**. I've been using typescript a lot recently, especially because I helped my team on my last two former employers to migrate to it, but since Upgrade is using JavaScript I decided to just use JavaScript here.

- Added more **test to common ui components**. Because of time I decided to just test the pages and not every common component individually.

- I almost upgraded **React version** to the last version to make usage of a few new features, also to be able to used lastest versions of react testing library as well, but decided upon not changing it.

- **Responsiveness**. I tried to style everything with a responsiveness approach, but it's not 100%.

-  **Accessibility**. I also added a couple of attributes for accessibility but there are more that could be done tto further improve it.

- Improve project with **eslint**, **prettier**, and other rules to improve developers experience.

- Better **error messaging** instead of always showing a generic one.

- Better *design system* for more consistent usage of theme, tokens, and others, like default spacings, sizes, and so on..