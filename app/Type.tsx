export type RootStackParamList = {
    Login : undefined,
    Home : {token: string, user: any, product: any},
    Product : {brand: any, description:any, id:any, name:any, price:any, stock:any, createdAt:any},
    User : {id:any, name: any, age:any, email:any, address: any, createdAt:any}
}