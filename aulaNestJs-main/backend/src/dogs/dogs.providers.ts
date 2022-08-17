import { DataSource } from "typeorm"

export const dogProviders{
    provide: 'DOG_REPOSITORY',
    userFactory: (DataSource: DataSource),
    

}