const useId = () => {
    let id = 0;
    const getId = () => {
        // console.log(id);
        return id++;
    }
    return getId;
}

export default useId;