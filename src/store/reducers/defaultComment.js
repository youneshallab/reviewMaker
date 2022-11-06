const defaultComment = (state = "", action) => {
    switch(action.type){
        default:
            return "Lorem ipsum dolor sit amet, consectetur adipiscing elit."+
            " Maecenas a urna lorem. Pellentesque sed sollicitudin erat. Donec tincidunt"+
            " dictum purus, et porttitor quam fermentum a. Proin feugiat condimentum lacus"+
            " at viverra. Vivamus egestas suscipit neque, quis tincidunt felis hendrerit id.";
    }
}

export default defaultComment;
