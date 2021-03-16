import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export default class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clientName: string;

  @Column()
  telphone: string;

  @Column()
  whatsApp: string;

  @Column({ type: 'date' })
  deliveryDate: Date;

  @Column()
  pasta: string;

  @Column()
  filling: string;

  @Column()
  cover: string;

  @Column()
  observation: string;
}
