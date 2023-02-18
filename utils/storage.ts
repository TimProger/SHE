interface IStorage {
  set: (name: string, item: any) => void;
  get: (name: string) => any;
  delete: (name: string) => void;
}

/**
 * Класс используемый для взаимодействия с localStorage
 */
export const Storage: IStorage = {
  /**
   * Добавление элемента в хранилище
   *
   * @param name Ключ поля в хранилище
   * @param item Значение поля в хранилище
   */
  set: (name, item) => {
    localStorage.setItem("tmshe_" + name, JSON.stringify(item));
  },
  /**
   * Получение элемента из хранилища
   * @param {string} name Ключ поля в хранилище
   */
  get: (name) => {
    const item = localStorage.getItem("tmshe_" + name);

    if (item) {
      return JSON.parse(item);
    }
  },
  /**
   * Добавление элемента в хранилище
   * @param {string} name Ключ поля в хранилище
   * @param {string} item Значение поля в хранилище
   */
  delete: (name) => {
    localStorage.removeItem("tmshe_" + name);
  },
};
