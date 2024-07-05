
export const Url = {
    users: {
        all:'/users',
        oneUser: (id: number) => '/users/' + id,
        posts:  (id:number) => '/users/' + id + '/posts'
    }
}