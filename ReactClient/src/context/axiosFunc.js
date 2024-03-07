import { server } from './ваш_путь_к_файлу_с_axios_instance';

// Функция для отправки GET-запроса по указанному пути
async function getData(path, config = {}, callback) {
  try {
    const response = await server.get(path, config);
    callback(response.data, null);
  } catch (error) {
    callback(null, error);
  }
}

// Функция для отправки POST-запроса по указанному пути с данными
async function postData(path, data, config = {}, callback) {
  try {
    const response = await server.post(path, data, config);
    callback(response.data, null);
  } catch (error) {
    callback(null, error);
  }
}

// Функция для отправки PUT-запроса по указанному пути с данными
async function putData(path, data, config = {}, callback) {
  try {
    const response = await server.put(path, data, config);
    callback(response.data, null);
  } catch (error) {
    callback(null, error);
  }
}

// Функция для отправки DELETE-запроса по указанному пути
async function deleteData(path, config = {}, callback) {
  try {
    const response = await server.delete(path, config);
    callback(response.data, null);
  } catch (error) {
    callback(null, error);
  }
}

export {
  getData,
  postData,
  putData,
  deleteData,
};
