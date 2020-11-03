/**
 * A set of helper functions to help facilitate the demos.
 * None of the code in here is necessary to understand the
 * course material, but feel free to look around :)
 */
import products from '../../../../components/products.json';
import users from '../../../../components/users.json';
import planets from '../../../../components/planets.json';

// Add IDs to each entry using the index of the array
const addIds = (arr) =>
  arr.map(
    (el, id) =>
      Array.isArray(el)
        ? [id, ...el] // Add the ID as the first entry if we have an array
        : { ...el, id } // Add as a new field if we have an object
  );

const dataMap = {
  '/products': addIds(products),
  '/users': addIds(users),
  '/planets': addIds(planets),
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
const _fetch = (url, search) => {
  const data = dataMap[url];

  if (search === '') {
    return data.slice(0, 10);
  } else {
    return data
      .filter((el) =>
        // Return any object that has a value that
        // contains the search string
        Object.values(el).some((val) => {
          // We have to convert everything to a string first
          return (val + '')
            .toLowerCase()
            .includes(search.toLowerCase());
        })
      )
      .slice(0, 10);
  }
};

// Match on all search tags, not just the one search p
const _fetchByTags = (url, tags) => {
  const data = dataMap[url];

  if (tags.length === 0) {
    return data.slice(0, 10);
  } else {
    return data
      .filter((el) => {
        // Return any object that has a value that
        // contains the search string
        const values = Object.values(el);

        return tags.every((tag) => {
          const exists = values.some((val) => {
            // We have to convert everything to a string first
            return (val + '')
              .toLowerCase()
              .includes(tag.toLowerCase());
          });
          return exists;
        });
      })
      .slice(0, 10);
  }
};

/**
 * Simulate deleting an item
 */
export const deleteItemById = (url, id) => {
  // Find the index of the item
  const index = dataMap[url].findIndex((el) =>
    Array.isArray(el) ? el[0] === id : el.id === id
  );

  // Remove the item from our temporary cache
  dataMap[url].splice(index, 1);
};

export const fetch = debounce(_fetch);
export const fetchByTags = debounce(_fetchByTags);
