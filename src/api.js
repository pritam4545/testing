// src/api.js
import axios from 'axios';

const API_BASE_URL = 'https://your-api-gateway-url'; // Replace with actual API Gateway URL

export const fetchFoodItems = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/getFoodItems`);
        return response.data;
    } catch (error) {
        console.error('Error fetching food items:', error);
        return [];
    }
};

export const placeOrder = async (orderData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/placeOrder`, orderData);
        return response.data;
    } catch (error) {
        console.error('Error placing order:', error);
        throw error;
    }
};
