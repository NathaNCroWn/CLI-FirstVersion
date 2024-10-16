import axios from 'axios';

export const sendWebhook = async (name) => {
  try {
    const url = 'https://webhook.site/ca45e28f-38f8-4b6c-b417-edcae53f5785'
    const response = await axios.post(url, {
      message: `Hello, ${name}!`,
    });

    console.log('Respuesta del webhook:', response.status, `\nPuede verificar el estado del webhook aqui:${url}`);
  } catch (error) {
    console.error('Error al hacer la solicitud:', error.message);
  }
};