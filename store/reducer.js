import { IMG_URI } from "./actions";

const initialData = {
    clickedImg: null
}

const ImageReducers = (state = initialData, action) => {
    switch (action.type) {
        case IMG_URI: 
          state = {...state, clickedImg: action.clickedImg};
          return state;
        default :
           return state;
    }
}
export default ImageReducers;
