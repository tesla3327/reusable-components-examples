/**
 * A helper function that stubs out a fetch
 * call so we can have dummy data in our app.
 */
import products from '../../../../components/products.json';
import users from '../../../../components/users.json';
const dataMap = {
  '/products': products,
  '/users': users,
};

/**
 * Wrap a function with a promise so we can add a delay to it
 */
const sleep = (func, delay = 1000) => async (...args) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(func(...args)), delay);
  });

/**
 * Wait until the function hasn't been called for a bit before
 * actually executing it.
 */
const debounce = (func, delay = 300) => {
  let timeout;

  return async (...args) => {
    // Cancel any existing timeout and set a new one
    clearTimeout(timeout);
    return new Promise((resolve) => {
      timeout = setTimeout(
        () => resolve(func(...args)),
        delay
      );
    });
  };
};

/**
 * Simulate fetching data from a backend with a bit of search
 * functionality built in.
 */
const fetch = (url, search) => {
  const data = dataMap[url];

  if (search === '') {
    return data;
  } else {
    return data.filter((el) =>
      // Return any object that has a value that
      // contains the search string
      Object.values(el).some((val) => {
        // We have to convert everything to a string first
        return (val + '')
          .toLowerCase()
          .includes(search.toLowerCase());
      })
    );
  }
};

export default debounce(fetch);
