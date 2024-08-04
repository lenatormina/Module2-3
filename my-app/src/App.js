import styles from './App.module.css';
import { useState } from 'react';

const buttons = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export const App = () => {
	const [operand1, setOperand1] = useState('0');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');

	const displayValue = operand1 + operator + operand2;

	const [isFinish, setIsFinish] = useState(false);

	const handleClick = (item) => {
		if (operand1 === '0') {
			setOperand1(item);
		} else if (operator) {
			setOperand2((prevState) => prevState + item);
		} else {
			setOperand1((prevState) => prevState + item);
		}
	};

	const handleButtonOperand = (op) => {
		switch (op) {
			case '+':
				setOperator('+');
				break;
			case '-':
				setOperator('-');
				break;
		}
	};

	const handleSet = () => {
		switch (operator) {
			case '+':
				setOperand1(Number(operand1) + Number(operand2));
				setOperand2('');
				setOperator('');
				setIsFinish(true);
				break;
			case '-':
				setOperand1(Number(operand1) - Number(operand2));
				setOperand2('');
				setOperator('');
				setIsFinish(true);
				break;
		}
	};

	const handleClear = () => {
		setOperand1('0');
		setOperand2('');
		setOperator('');
		setIsFinish(false);
	};

	return (
		<div className={styles.App}>
			<div className={styles.Wrapper}>
				<div className={`${styles.Display} ${isFinish ? styles.Finish : ''}`}>
					{displayValue}
				</div>
				<div className={styles.Buttons}>
					{buttons.map((button, index) => (
						<button
							className={styles.Button}
							onClick={() => handleClick(button)}
							key={index}
						>
							{button}
						</button>
					))}
					<button
						className={styles.Button}
						onClick={() => handleButtonOperand('+')}
					>
						+
					</button>
					<button
						className={styles.Button}
						onClick={() => handleButtonOperand('-')}
					>
						-
					</button>
					<button className={styles.Button} onClick={handleSet}>
						=
					</button>
					<button className={styles.Button} onClick={handleClear}>
						C
					</button>
				</div>
			</div>
		</div>
	);
};
