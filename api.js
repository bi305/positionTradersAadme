import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";

const API_BASE_URL = "https://positiontradersacademy.com/api/v1";

// Create an instance of Axios with default settings
export const apiClient = axios.create({
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

export function subscriptions(data) {
	return apiClient.post("/backend/payment/", data);
}
export function getSubscriptionId() {
	return apiClient.get("/backend/payment/");
}
export function uploadedPaymentProof(data) {
	const formData = new FormData();
	formData.append("param", data.param);
	formData.append("payment_image", data.file);
	return apiClient.put(`/backend/payment/${data.param}`, formData, {
		headers: { "Content-Type": "multipart/form-data" },
	});
}

export function usePaymentProof() {
	const queryClient = useQueryClient();
	return useMutation(uploadedPaymentProof, {
		onSuccess: () => {
			sessionStorage.removeItem("cart");
			queryClient.invalidateQueries("subscription");
			queryClient.invalidateQueries("cart");
		},
	});
}
// Define React Query hooks for each endpoint

export function useProducts() {
	return useQuery("products", getProducts);
}

export function useRegister() {
	const queryClient = useQueryClient();
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
	try {
		sessionStorage.removeItem("user");
	} catch (error) {
		console.error("Error removing user from sessionStorage: ", error);
	}

	queryClient.invalidateQueries("user");
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
			const existingProduct = cart.find((p) => p.id === product.id);
			if (existingProduct) {
				// update subscription type and price
				const updatedProduct = {
					...existingProduct,
					subscription_type: product.subscription_type,
					subscription: product.subscription_type === "lifetime" ? 400 : 200,
				};
				const updatedCart = cart.map((p) =>
					p.id === product.id ? updatedProduct : p
				);
				sessionStorage.setItem("cart", JSON.stringify(updatedCart));
				queryClient.invalidateQueries("cart");
				return updatedCart;
			} else {
				// add new product with subscription type and subscription
				const newProduct = {
					...product,
					subscription: product.subscription_type === "lifetime" ? 400 : 200,
				};
				const updatedCart = [...cart, newProduct];
				sessionStorage.setItem("cart", JSON.stringify(updatedCart));
				queryClient.invalidateQueries("cart");
				return updatedCart;
			}
		} else {
			// create new cart with new product and subscription type and subscription
			const newProduct = {
				...product,
				subscription: product.subscription_type === "lifetime" ? 400 : 200,
			};
			const newCart = [newProduct];
			sessionStorage.setItem("cart", JSON.stringify(newCart));
			queryClient.invalidateQueries("cart");
			return newCart;
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

export function useSubscription() {
	return useMutation(subscriptions, {
		onSuccess: () => {},
	});
}

export function useGetSubscription() {
	return useQuery("subscriptionId", getSubscriptionId);
}
