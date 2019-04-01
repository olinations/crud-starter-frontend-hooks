# CRUD Starter Frontend with Hooks

![image](https://github.com/olinations/crud-starter-frontend-hooks/blob/master/template.png)

This is a converted version of the [Crud Starter Frontend](https://github.com/olinations/crud-starter-frontend). It goes from using React Component classes to functional componenents with hooks. Specific changes include the implementation of useState() to replace constructor functions and state declarations and useEffect() to replace componentDidMount() and componentDidUpdate().

**CRUD Starter Frontend with Hooks** plays nicely with the [CRUD Starter API backend](https://github.com/olinations/crud-starter-api). It can, however, be easily edited and used as a starter frontend for any app that features get, post, put and delete requests or other API calls.

This frontend CRUD app uses Bootstrap styles with reactstrap (a Bootstrap component plugin) to create a responsive data table that displays all data from a table in a database. It has a Modal component with a form for adding and editing items, a delete and edit button in each item row, and a button to download the entire database table into a CSV file.

It uses react-csv to create the CSV download button.

## Instructions

**1. Clone this repo**

```
git clone https://github.com/olinations/crud-starter-frontend-hooks.git
```

**2. NPM install React and dependencies**

```
npm install
```

## Notes

Read about the changes made from the frontend that uses Component classes to this one that uses hooks [here](https://medium.com/@olinations/10-steps-to-convert-a-react-class-component-to-a-functional-component-with-hooks-ab198e0fa139?source=friends_link&sk=c9c23dd964348d89a1269eb919c878ec).
