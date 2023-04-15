import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";

const API_BASE_URL = "http://13.49.159.135/api/v1";

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
		const { token } = JSON.parse(user);
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

// Define API endpoints as functions that return Axios requests

export function register(data) {
	return apiClient.post("/register/", data);
}

export function login(data) {
	return apiClient.post("/login", data);
}

export function logout() {
	return apiClient.post("/logout");
}

// Define React Query hooks for each endpoint

export function useRegister() {
	// const queryClient = useQueryClient();
	return useMutation(register, {
		onSuccess: (response) => {
			// Save user data to session storage
			sessionStorage.setItem("user", JSON.stringify(response.data));
			// Invalidate all queries to update user data globally
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
			sessionStorage.removeItem("bearerToken");
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
