
import { server } from "../config";

// Функция для отправки GET-запроса
export const getUserByMail = async (email, token) => {
  

  try {
    const response = await server.get("/get-user", {
      params: { email: email },
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });

    if (response.data.success) {
      return response.data.user;
    } else {
      throw new Error(response.data.message || "Ошибка при получении пользователя с сервера");
    }
  } catch (error) {
    console.error("Ошибка при запросе пользователя с сервера:", error);
    throw error;
  }
};
// Функция для отправки POST-запроса
async function postData(path, data, config = {}) {
  try {
    const response = await server.post(path, data, config);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Функция для отправки PUT-запроса
async function putData(path, data, config = {}) {
  try {
    const response = await server.put(path, data, config);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Функция для отправки DELETE-запроса
async function deleteData(path, config = {}) {
  try {
    const response = await server.delete(path, config);
    return response.data;
  } catch (error) {
    throw error;
  }
}

/* Пример использования функций
async function exampleUsage() {
  try {
    const user = await getData('/user/123');
    console.log('Полученные данные пользователя:', user);

    const newData = { name: 'Новое имя' };
    const updatedUser = await putData('/user/123', newData);
    console.log('Обновленные данные пользователя:', updatedUser);

    const deletedUser = await deleteData('/user/123');
    console.log('Удален пользователь:', deletedUser);

    const postData = { name: 'Новый пользователь' };
    const createdUser = await postData('/user', postData);
    console.log('Созданный пользователь:', createdUser);
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

// Вызываем функцию для примера использования
exampleUsage();*/
