const initialState = {
  username: '',
  id: 0,
  profile_image: ''
}


const UPDATE_USER = 'UPDATE_USER'

export function updateUser({id, username, profile_image}){
  return{
    type: UPDATE_USER,
    payload: {id, username, profile_image}
  }
}



export default function reducer(state = initialState, action) {
  const {type, payload} = action
  switch(type) {
    case UPDATE_USER: 
      const {id, username, profile_image} = payload
      return {...state, id, username, profile_image}
    default:
      return state
  }
}
