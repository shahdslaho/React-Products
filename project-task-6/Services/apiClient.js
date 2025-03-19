import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000', // تأكد من أن هذا هو عنوان الخادم الصحيح
});

export default apiClient;