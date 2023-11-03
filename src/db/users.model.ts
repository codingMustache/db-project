import { model } from 'mongoose';
import { UsersSchema } from './users.schema';

export const Users = model('Users', UsersSchema);
