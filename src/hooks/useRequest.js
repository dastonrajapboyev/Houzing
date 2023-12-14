// import { useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL } = process.env;


export const useRequest = () => {

  const request = async ({ url, method = "GET", body = {}, token, headers = {} }) => {
    headers["Content-Type"] = "application/json";
    if (token) headers.Authorization = `Bearer ${token}`;

    // Convert the body object to a query string
    const queryString = Object.keys(body).map(key => key + "=" + body[key]).join('&');

    return fetch(`${REACT_APP_BASE_URL}${url}?${queryString}`, {
      method,
      headers,
      // Include the body only for POST, PUT, PATCH requests
      body: method !== "GET" ? JSON.stringify(body) : undefined,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          // If res exists, navigate to '/signin'
          // Make sure 'navigate' is properly defined
          // navigate('/signin');
        }
        return res; // Return the response data
      });
  };

  return request; // Return the request function
};

export default useRequest;

// =================


// const { REACT_APP_BASE_URL } = process.env;

// // Separate functions for GET and POST requests
// const useGet = async (url, headers) => {
//   return fetch(`${REACT_APP_BASE_URL}${url}`, {
//     method: "GET",
//     headers,
//   }).then((res) => res.json());
// };

// const usePost = async (url, body, headers) => {
//   return fetch(`${REACT_APP_BASE_URL}${url}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       ...headers,
//     },
//     body: JSON.stringify(body),
//   }).then((res) => res.json());
// };

// // Use the functions based on the desired method
// export const useRequest = (method, url, body, headers, token) => {
//   switch (method.toUpperCase()) {
//     case "GET":
//       return useGet(url, headers, token);
//     case "POST":
//       return usePost(url, body, headers, token);
//     default:
//       throw new Error(`Unsupported request method: ${method}`);
//   }
// };

// // Export the functions for use
// export { useGet, usePost };
// export default useRequest