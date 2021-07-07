class Calculator {
    constructor(num) {
        this.calcNum = num;
        this.calcNum1 = `calcNum1-${this.calcNum}`;
        this.calcNum2 = `calcNum2-${this.calcNum}`;
        this.operator = `operator-${this.calcNum}`;
        this.resolve = `resolve-${this.calcNum}`;
    }


    createElement = () => {

        let firstDiv = document.createElement('div');
        firstDiv.classList.add('container');
        document.body.prepend(firstDiv);
        let input = document.createElement('input');
        input.setAttribute('type', 'number');
        input.value = '2';
        input.id = this.calcNum1;
        firstDiv.append(input);
        let addOper = document.createElement('input');
        addOper.setAttribute('type', 'text');
        addOper.value = '+';
        addOper.id = this.operator;
        firstDiv.append(addOper);
        let input1 = document.createElement('input');
        input1.setAttribute('type', 'number');
        input1.value = '3';
        input1.id = this.calcNum2;
        firstDiv.append(input1);
        let addBtn = document.createElement('button');
        addBtn.innerHTML = 'solve';
        addBtn.addEventListener('click', this.solve)
        firstDiv.append(addBtn)
        let resolve = document.createElement('span')
        resolve.id = this.resolve
        firstDiv.append(resolve)
    }

    solve = () => {
        let num1 = document.getElementById(this.calcNum1);
        let operator = document.getElementById(this.operator);
        let num2 = document.getElementById(this.calcNum2);
        let resolve = document.getElementById(this.resolve);
        switch (operator.value) {
            case '+':
                resolve.innerHTML = parseInt(num1.value) + parseInt(num2.value);
                    break;
            case '-':
                resolve.innerHTML = parseInt(num1.value) - parseInt(num2.value);
                break;
            case '/':
                resolve.innerHTML = parseInt(num1.value) / parseInt(num2.value);
                break;
            case '*':
                resolve.innerHTML = parseInt(num1.value) * parseInt(num2.value);
                break;
            default:
                break    
        }
    }
};
const calc = new Calculator(1);
calc.createElement();
const calc2 = new Calculator(2);
calc2.createElement();
