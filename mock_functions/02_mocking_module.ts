import axios from 'axios';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

class Users {
  static async all(): Promise<Todo[]> {
    try {
      const response = await axios.get<Todo[]>(
        'https://jsonplaceholder.typicode.com/todos'
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export { Users };
