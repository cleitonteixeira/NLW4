import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
class User {

    @PrimaryColumn()
    readonly idUser: string;

    @Column()
    Nome: string;

    @Column()
    Email: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.idUser){
            this.idUser = uuid()
        }
    }
}


export {User};