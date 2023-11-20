import axios from "axios";
import { useQuery } from "react-query";

const api = axios.create({
  baseURL: "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1",
  timeout: 5000,
});

const useFetchProducts = () => {
  const {
    data,
    isLoading,
  } = useQuery(
    "products",
    async () => {
      try {
        const res = await api.get(
          "/products?page=1&rows=8&sortBy=id&orderBy=DESC"
        );
        return res.data;
      } catch (error) {
        console.error("Erro na busca de produtos:", error);
        throw error;
      }
    },
    {
      retry: 3,
    }
  );

  return { data, isLoading };
};

export default useFetchProducts;
