import * as moment from 'moment';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { Todo } from '../../todo/entities/todo.entity';
/**
 * Model Class for TypeORM Entity
 * Entity - User
 */
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, unique: true })
  userName: string;

  @Column({ type: 'varchar', length: 50 })
  password: string;

  @Column({ default: false })
  isModified: boolean;

  // soft delete flag
  @Column({ default: false })
  isDeleted: boolean;

  @Column({
    type: 'varchar',
    length: 30,
    default: moment().format('MMMM Do YYYY, h:mm:ss a'),
  })
  createdDate: string;

  @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo[];
}
