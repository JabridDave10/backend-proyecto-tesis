import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import { User } from './user.entity';

@Entity('credentials')
export class Credentials {
  @PrimaryGeneratedColumn()
  id_credentials: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  id_user: number;
  
  @Column()
  created_at: Date;
  
  @Column()
  updated_at: Date;

  @Column()
  deleted_at: Date;

  @Column()
  is_active: boolean;


  @ManyToOne(() => User, (user) => user.id_user)
  @JoinColumn({ name: 'id_user' })
  user: User;
}
