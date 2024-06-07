import { connect } from "react-redux"


function Counter(props) {
    const { count, step, dispatch } = props
    //Чтобы отрисовать новое состояние через action
    //вызываем dispatch
    const decCount = () => {
        const action = { type: 'decrement' }
        dispatch(action);
    }

     const incCount = () => {
       const action = { type: "increment" };
       dispatch(action);
     };
    
    const stepChangeHandler = ({target:{value}}) => {
        const action = { type: "setStep", value: Number(value) };
        dispatch(action);
    }
  return (
    <div>
      Counter: {count}
      <button onClick={decCount}>-</button>
          <button onClick={incCount}>+</button>
          <input type="number" value={step} onChange={stepChangeHandler}/>
    </div>
  );
}



//ф-ция для получения всего состояния из сторыб можно передавать обьектом или всё сразу
const mapStateToProps = (state) => {
    return state;
}

//Создаём компонент вышего порядка и с помощью него соеденяем стору и елемент, для получения данных через пропс.
//Функция принимает два параметра, для считывания данных из сторы= промапить
const withAccsessToStore= connect(mapStateToProps)
//Оборачиваем елемент в компонент
export default withAccsessToStore(Counter) 