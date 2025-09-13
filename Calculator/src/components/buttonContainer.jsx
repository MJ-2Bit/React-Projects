import styles from "./buttonContainer.module.css"


const ButtonContainer = ({btnClick }) => {
 const buttonNames = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']


return  <div className={styles.buttonscontainer}>

{buttonNames.map((buttonName)=> <button className={styles.button} onClick={() => btnClick(buttonName)}>{buttonName}</button>)}


</div>
}
export default ButtonContainer;