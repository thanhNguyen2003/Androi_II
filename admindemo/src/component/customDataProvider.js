import { fetchUtils } from "react-admin";

const apiUrl = "http://localhost:8080/api";
const httpClient = fetchUtils.fetchJson;

const dataProvider = {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const url = `${apiUrl}/${resource}?page=${page - 1}&size=${perPage}`;

    return httpClient(url)
      .then(({ json }) => {
        return {
          data: json.content, 
          total: json.totalElements, 
        };
      })
      .catch((error) => {     
        throw error;
      });
  },
  getOne: (resource, params) => {
    const { id } = params;
    const url = `${apiUrl}/${resource}/${id}`;

    return httpClient(url)
      .then(({ json }) => {
        return {
          data: json, 
        };
      })
      .catch((error) => {
        throw error;
      });
  },
  getMany: (resource, params) => {
    const { ids } = params;

    const url = `${apiUrl}/${resource}?ids=${ids.join(",")}`;

    return httpClient(url)
      .then(({ json }) => {
        return {
          data: json.content, 
        };
      })
      .catch((error) => {
        throw error;
      });
  },
  update: (resource, params) => {
    const { id, data } = params;
    const url = `${apiUrl}/${resource}/${id}`;
    const options = {
      method: "PUT",
      body: JSON.stringify(data),
    };

    return httpClient(url, options)
      .then(({ json }) => {
        return {
          data: json, 
        };
      })
      .catch((error) => {
        throw error;
      });
  },
  delete: (resource, params) => {
    const { id } = params;
    const url = `${apiUrl}/${resource}/${id}`;
    const options = {
      method: "DELETE",
    };

    return httpClient(url, options)
      .then(({ json }) => {
        return {
          data: json, 
        };
      })
      .catch((error) => {
        throw error;
      });
  },
  create: (resource, params) => {
    const { data } = params;
    const url = `${apiUrl}/${resource}`;
    const options = {
      method: "POST",
      body: JSON.stringify(data),
    };

    return httpClient(url, options)
      .then(({ json }) => {
        return {
          data: { ...data, id: json.id }, 
        };
      })
      .catch((error) => {
        throw error;
      });
  },
};

export default dataProvider;
