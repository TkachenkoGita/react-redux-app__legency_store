import { connect } from "react-redux"


function Counter(props) {
    const { count, step, decrementCount, incrementCount, setNewStep} = props
    //Чтобы отрисовать новое состояние через action
    //вызываем dispatch
    const decCount = () =>  decrementCount()
       
    

     const incCount = () =>  incrementCount()
       
     
    
    const stepChangeHandler = ({target:{value}}) => setNewStep(Number(value))
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

const mapDispatchToProps = dispatch => {
  return {
    incrementCount: () => 
      dispatch({ type: "increment" }),
    decrementCount: () => 
      dispatch({ type: "decrement" }),
    setNewStep: (value) => dispatch({ type: "setStep", value })
    
  }
}

//Создаём компонент вышего порядка и с помощью него соеденяем стору и елемент, для получения данных через пропс.
//Функция принимает два параметра, для считывания данных из сторы= промапить
const withAccsessToStore= connect(mapStateToProps, mapDispatchToProps)
//Оборачиваем елемент в компонент
export default withAccsessToStore(Counter) 