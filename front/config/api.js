const API_URL = process.env.NODE_ENV === 'production' 
  ? '/brainova'  // En producción usará la configuración de vercel.json
  : '/brainova'  // En desarrollo usará el proxy de Vite

export const API_ENDPOINTS = {
  chat: `${API_URL}/query`
}