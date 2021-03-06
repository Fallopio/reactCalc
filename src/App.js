import React from 'react';
import './App.css';
import Button from './Components/Button';
import InputField from './Components/inputField'
import EvalButton from './Components/Eval'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      operator: '',
      input2: '',
    }
    this.handleInputClick = this.handleInputClick.bind(this)
    this.handleOperationClick = this.handleOperationClick.bind(this)
    this.handleResetClick = this.handleResetClick.bind(this)
    this.handleEval = this.handleEval.bind(this)
  }
  handleInputClick(value) {
    if (this.state.operator == '') {
      this.setState({ input: this.state.input + value })
    }
    else if (this.state.input != '' && this.state.operator != '') {
      this.setState({ input2: this.state.input2 + value })
    }

  }

  handleOperationClick(value) {
    if (this.state.input != '' && this.state.input2 == '') {
      this.setState({ operator: value })
    }
  }

  handleResetClick() {
    this.setState({
      input: '',
      operator: '',
      input2: '',
    })
  }

  handleEval() {
    if (this.state.input != '' && this.state.operator == " + " && this.state.input2 != '') {
      this.setState({
        input: parseFloat(this.state.input) + parseFloat(this.state.input2),
        operator: '',
        input2: '',
      })
    }
    else if (this.state.input != '' && this.state.operator == " - " && this.state.input2 != '') {
      this.setState({
        input: parseFloat(this.state.input) - parseFloat(this.state.input2),
        operator: '',
        input2: '',
      })
    }
    else if (this.state.input != '' && this.state.operator == " * " && this.state.input2 != '') {
      this.setState({
        input: parseFloat(this.state.input) * parseFloat(this.state.input2),
        operator: '',
        input2: '',
      })
    }
    else if (this.state.input != '' && this.state.operator == " / " && this.state.input2 != '') {
      this.setState({
        input: parseFloat(this.state.input) / parseFloat(this.state.input2),
        operator: '',
        input2: '',
      })
    }
  }

  render() {
    return (
      <div className="numPad">
        <InputField className="inputField" enteredInput={this.state.input}
          enteredOp={this.state.operator} enteredIn2={this.state.input2} />
        <Button className='numberButton' buttonValue='1' click={this.handleInputClick} />
        <Button className="numberButton" buttonValue='2' click={this.handleInputClick} />
        <Button className="numberButton" buttonValue='3' click={this.handleInputClick} />
        <Button className="opButton" buttonValue=" + " click={this.handleOperationClick} />
        <Button className="numberButton" buttonValue='4' click={this.handleInputClick} />
        <Button className="numberButton" buttonValue='5' click={this.handleInputClick} />
        <Button className="numberButton" buttonValue='6' click={this.handleInputClick} />
        <Button className="opButton" buttonValue=' - ' click={this.handleOperationClick} />
        <Button className="numberButton" buttonValue='7' click={this.handleInputClick} />
        <Button className="numberButton" buttonValue='8' click={this.handleInputClick} />
        <Button className="numberButton" buttonValue='9' click={this.handleInputClick} />
        <Button className="opButton" buttonValue=' * ' click={this.handleOperationClick} />
        <Button className="numberButton" buttonValue='0' click={this.handleInputClick} />
        <Button className="opButton" buttonValue='.' click={this.handleInputClick} />
        <Button className="opButton" buttonValue='C' click={this.handleResetClick} />
        <Button className="opButton" buttonValue=' / ' click={this.handleOperationClick} />
        <EvalButton className="evalButton" buttonValue='=' click={this.handleEval} />
      </div>
    )
  }
}

export default App;
//222


