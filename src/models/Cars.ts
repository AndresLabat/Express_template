import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm"

@Entity("cars")
class Cars extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    model!: string

    @Column()
    kilometers!: number

    @Column()
    userId!: number
}

export {Cars}