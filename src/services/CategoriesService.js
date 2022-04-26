import axios from "axios";

const CATEGORIES_API_BASE_URL = "http://localhost:8080/api/v1/categories";

class CategoriesService {
  getCategories() {
    console.log("get categories");
    return axios.get(CATEGORIES_API_BASE_URL);
  }
}

export default new CategoriesService();
