import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import * as moment from 'moment';

/**
 * Model Class for TypeORM Entity
 * Entity - Todo
 */
@Entity()
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  state: string;

  @ManyToOne(() => User, (user) => user.todos)
  user: User;

  @Column({
    type: 'varchar',
    length: 30,
    default: moment().format('MMMM Do YYYY, h:mm:ss a'),
  })
  createdDate: string;

  @Column({ default: false })
  isModified: boolean;

  // soft delete flag
  @Column({ default: false })
  isDeleted: boolean;
}
