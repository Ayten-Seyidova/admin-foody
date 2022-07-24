import { Axios, AxiosMockCreate } from "../../mocks";
import categoryData from "../../mocks/category/category.json";

AxiosMockCreate.onGet("/category").reply((configAxiosMockCreate) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { category: categoryData }]);
    }, 2000);
  });
});

AxiosMockCreate.onPost("/category").reply((config) => {
  console.log("config", config);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([201, { message: "Created", result: JSON.parse(config.data) }]);
    }, 2000);
  });
});

AxiosMockCreate.onDelete(/\/category\/\d+/).reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { message: "Success" }]);
    }, 2000);
  });
});

export const categoryAPI = Axios.get("/category");
export const categoryDeleteAPI = (id) => Axios.delete(`/category/${id}`);
export const categoryCreateAPI = (item) => Axios.post(`/category`, item);