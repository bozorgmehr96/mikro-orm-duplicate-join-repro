import { Entity, ManyToOne, PrimaryKey, Property, Ref, ref, wrap } from '@mikro-orm/core';
import { User } from './user.entity';

@Entity()
export class Address {

  @PrimaryKey()
  id!: number;

  @ManyToOne()
  user: User

  @Property()
  state: string;

  @Property()
  zipCode: number;

  constructor(user: User, state: string, zipCode: number) {
    this.user = user;
    this.state = state;
    this.zipCode = zipCode;
  }

}
