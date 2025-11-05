import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id_user: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  identification: string;
  
  @Column()
  birth_date: Date;
  
  @Column()
  photo: string;

  @Column()
  phone: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @Column()
  deleted_at: Date;
}
