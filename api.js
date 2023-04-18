import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";

const API_BASE_URL = "https://positiontradersacademy.com/api/v1";

// Create an instance of Axios with default settings
const apiClient = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

// Add an Axios interceptor to add the bearer token to each request
apiClient.interceptors.request.use((config) => {
	const user = sessionStorage.getItem("user");
	if (user) {
		const { access_token } = JSON.parse(user);
		config.headers.Authorization = `Bearer ${access_token}`;
	} else {
		delete config.headers.Authorization;
	}
	return config;
});

// Define API endpoints as functions that return Axios requests

export function register(data) {
	return apiClient.post("/user/register/", data);
}

export function login(data) {
	return apiClient.post("/user/login/", data);
}

export function logout() {
	return apiClient.post("/logout");
}
export function getProducts() {
	return apiClient.get("/backend/product/");
}

// Define React Query hooks for each endpoint

export function useProducts() {
	return useQuery("products", getProducts);
}

export function useRegister() {
	// const queryClient = useQueryClient();
	return useMutation(register, {
		onSuccess: (response) => {
			queryClient.invalidateQueries("user");
		},
	});
}

export function useLogin() {
	const queryClient = useQueryClient();
	return useMutation(login, {
		onSuccess: (response) => {
			// Save user data to session storage
			sessionStorage.setItem("user", JSON.stringify(response.data));
			// Invalidate all queries to update user data globally
			queryClient.invalidateQueries("user");
		},
	});
}

export function useLogout() {
	const queryClient = useQueryClient();
	return useMutation(logout, {
		onSuccess: () => {
			// Remove user data and bearer token from session storage
			sessionStorage.removeItem("user");
			// Invalidate all queries to update user data globally
			queryClient.invalidateQueries("user");
		},
	});
}

export function useUser() {
	return useQuery("user", () => {
		const userData = sessionStorage.getItem("user");
		return userData ? JSON.parse(userData) : null;
	});
}

export function useCart() {
	const queryClient = useQueryClient();

	const { data: cartData } = useQuery("cart", async () => {
		const data = sessionStorage.getItem("cart");
		return data ? JSON.parse(data) : [];
	});

	const addProductMutation = useMutation(async (product) => {
		const cartData = sessionStorage.getItem("cart");
		if (cartData) {
			const cart = JSON.parse(cartData);
			// check if the product is already in the cart
			if (cart.some((p) => p.id === product.id)) {
				throw new Error("Product is already in cart");
			}
			const updatedCart = [...cart, product];
			sessionStorage.setItem("cart", JSON.stringify(updatedCart));
			queryClient.invalidateQueries("cart");
			return updatedCart;
		} else {
			sessionStorage.setItem("cart", JSON.stringify([product]));
			queryClient.invalidateQueries("cart");
			return [product];
		}
	});

	const deleteProductMutation = useMutation(async (id) => {
		const cartData = sessionStorage.getItem("cart");
		if (cartData) {
			const cart = JSON.parse(cartData);
			const updatedCart = cart.filter((p) => p.id !== id);
			sessionStorage.setItem("cart", JSON.stringify(updatedCart));
			queryClient.invalidateQueries("cart");
			return updatedCart;
		}
		return [];
	});

	return {
		cartData,
		addProduct: addProductMutation.mutate,
		addProductLoading: addProductMutation.isLoading,
		addProductError: addProductMutation.error,
		deleteProduct: deleteProductMutation.mutate,
	};
}
// export function useCart() {
// 	const fetchProducts = async () => {
// 		const productsData = sessionStorage.getItem("products");
// 		return productsData ? JSON.parse(productsData) : [];
// 	};

// 	const deleteProduct = async (id) => {
// 		const productsData = sessionStorage.getItem("products");
// 		if (productsData) {
// 			const products = JSON.parse(productsData);
// 			const updatedProducts = products.filter((p) => p.id !== id);
// 			sessionStorage.setItem("products", JSON.stringify(updatedProducts));
// 		}
// 	};

// 	const addProduct = async (product) => {
// 		const productsData = sessionStorage.getItem("products");
// 		if (productsData) {
// 			const products = JSON.parse(productsData);
// 			const updatedProducts = [...products, product];
// 			sessionStorage.setItem("products", JSON.stringify(updatedProducts));
// 		} else {
// 			sessionStorage.setItem("products", JSON.stringify([product]));
// 		}
// 	};

// 	return {
// 		fetchProducts,
// 		deleteProduct,
// 		addProduct,
// 	};
// }

// export function useCart() {
// 	// useQuery hook fetches products data from sessionStorage and returns it
// 	// if it exists or returns an empty array if it doesn't exist
// 	const { data: productsData } = useQuery("products", async () => {
// 		const data = sessionStorage.getItem("products");
// 		return data ? JSON.parse(data) : [];
// 	});

// 	// useMutation hook creates a mutation to delete a product from sessionStorage
// 	const deleteProductMutation = useMutation(async (id) => {
// 		const productsData = sessionStorage.getItem("products");
// 		if (productsData) {
// 			const products = JSON.parse(productsData);
// 			const updatedProducts = products.filter((p) => p.id !== id);
// 			sessionStorage.setItem("products", JSON.stringify(updatedProducts));
// 			return updatedProducts;
// 		}
// 		return [];
// 	});

// 	// useMutation hook creates a mutation to add a product to sessionStorage
// 	const addProductMutation = useMutation(async (product) => {
// 		const productsData = sessionStorage.getItem("products");
// 		if (productsData) {
// 			const products = JSON.parse(productsData);
// 			// check if the product is already in the cart
// 			if (products.some((p) => p.id === product.id)) {
// 				throw new Error("Product is already in cart");
// 			}
// 			const updatedProducts = [...products, product];
// 			sessionStorage.setItem("products", JSON.stringify(updatedProducts));
// 			return updatedProducts;
// 		} else {
// 			sessionStorage.setItem("products", JSON.stringify([product]));
// 			return [product];
// 		}
// 	});

// 	return {
// 		productsData,
// 		deleteProduct: deleteProductMutation.mutate,
// 		addProduct: addProductMutation.mutate,
// 		addProductLoading: addProductMutation.isLoading,
// 		addProductError: addProductMutation.error,
// 	};
// }
