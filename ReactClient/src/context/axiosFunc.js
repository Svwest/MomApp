import { server } from './ваш_путь_к_файлу_с_axios_instance';

// Функция для отправки GET-запроса по указанному пути
async function getData(path, config = {}) {
  try {
    const response = await server.get(path, config);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Функция для отправки POST-запроса по указанному пути с данными
async function postData(path, data, config = {}) {
  try {
    const response = await server.post(path, data, config);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Функция для отправки PUT-запроса по указанному пути с данными
async function putData(path, data, config = {}) {
  try {
    const response = await server.put(path, data, config);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Функция для отправки DELETE-запроса по указанному пути
async function deleteData(path, config = {}) {
  try {
    const response = await server.delete(path, config);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export {
  getData,
  postData,
  putData,
  deleteData,
};
