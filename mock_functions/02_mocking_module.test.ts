import axios from 'axios';
import { Users } from './02_mocking_module';

jest.mock('axios');

test('should fetch users', async () => {
  const users = [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
  ];
  const resp = { data: users };

  // Mock axios.get to resolve with the expected result
  (axios.get as jest.Mock).mockResolvedValue(resp);

  // call the function and verify the result
  const data = await Users.all();
  console.log(data, users);
  expect(data).toEqual(users);
});
