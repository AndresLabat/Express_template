import { Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm"

@Entity("users")
class Users extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    age!: number;
}

export {Users}
