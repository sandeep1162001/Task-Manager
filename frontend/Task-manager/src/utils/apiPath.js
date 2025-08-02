export const BASE_URL = "https://task-manager-backend-9iat.onrender.com";

export const API_PATHS = {
  AUTH: {
    REGISTER: "/api/auth/register",
    LOGIN: "/api/auth/login",
    GET_PROFILE: "/api/auth/profile",
  },

  USERS: {
    GET_ALL_USERS: "/api/users", // Get all users
    GET_USER_BY_ID: (userId) => `/api/users/${userId}`, // Get user by ID
    CREATE_USER: "/api/users", // Create a new user
    UPDATE_USER: (userId) => `/api/users/${userId}`, // Update a user
    DELETE_USER: (userId) => `/api/users/${userId}`, // Delete a user
  },

  TASKS: {
    GET_DASHBOARD_DATA: "/api/tasks/dashboard-data", // Get Dashboard Data
    GET_USER_DASHBOARD_DATA: "/api/tasks/user-dashboard-data", // Get User Dashboard Data
    GET_ALL_TASKS: "/api/tasks", // Get all tasks (Admin: all, User: only assigned)
    GET_TASK_BY_ID: (taskId) => `/api/tasks/${taskId}`, // Get task by ID
    CREATE_TASK: "/api/tasks", // Create a new task (Admin only)
    UPDATE_TASK: (taskId) => `/api/tasks/${taskId}`, // Update task details
    DELETE_TASK: (taskId) => `/api/tasks/${taskId}`, // Delete a task (Admin only)
    UPDATE_TASK_STATUS: (taskId) => `/api/tasks/${taskId}/status`, // Update task status
    UPDATE_TODO_CHECKLIST: (taskId) => `/api/tasks/${taskId}/todo`, // Update todo checklist
  },

  REPORTS: {
    EXPORT_TASKS: "/api/reports/export/tasks", // Download all tasks as an Excel file
    EXPORT_USERS: "/api/reports/export/users", // Download user-task report
  },

  IMAGE: {
    UPLOAD_IMAGE: "/api/auth/upload-image", // Upload profile image
  },
};
