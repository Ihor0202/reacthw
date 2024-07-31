
const helpRetrive = <T,>(key:string) => {
    let keyJSON = localStorage.getItem(key) || ''
    if (!key) {
        return {} as T
    } else {
       let pairToken = JSON.parse(keyJSON) || ''
        return pairToken as T
    }


};

export default helpRetrive;