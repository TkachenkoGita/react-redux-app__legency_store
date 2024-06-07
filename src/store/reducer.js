

//Первоначальное состояние
const initialState = {
  count: 0,
  step: 1,
};
//ф-ция для изменения состояния и обработки действий
//reducer- чистая ф-ция (не обращается к глобальным параметрам) (state, action)=>newState
// action - js обьект {type: 'константа', payload-дополнительные данные}
function counterReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case "increment": {
      const { step, count } = state;
      return { ...state, count: count + step };
    }
    case "decrement": {
      const { step, count } = state;
      return { ...state, count: count - step };
    }
    case "setStep": {
      const {value}= action
      return {...state, step: value }
      }
    default:
      return state;
  }
}

export default counterReducer