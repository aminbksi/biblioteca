import axios from "axios";

//TODO: use request
export const fetchBooks = async () => {
  const response = await axios.get("http://localhost:8080/api/books");
  return response;
};
