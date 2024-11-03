import { CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

/** Base entity for all entities in DataBase */
export abstract class BaseEntity {
  /** id in uuid format */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /** Created at */
  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
  })
  createdAt: Date;

  /** updated at */
  @CreateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
  })
  updatedA: Date;
}
