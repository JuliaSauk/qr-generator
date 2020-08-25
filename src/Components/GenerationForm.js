import React, {Component} from 'react';
import './../App.css';
import QRCode from 'qrcode'

export default class GenerationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            connectionType: 'wpa',
            qrCode: null
        };
    }

    onChangeName(event) {
        this.setState({
            name: event.target.value
        });
    }

    onChangePassword(event) {
        this.setState({
            password: event.target.value
        });
    }

    onClickGenerate (e) {
        e.preventDefault();
        console.log(this.state.name);
    }

    render() {
      return (
        <form>
          <h1>Generate QR Code For Your Wi-Fi</h1>
            <p>Network Name:</p>
            <input type="text" name="network" value={this.state.name} onChange={e => this.onChangeName(e)}/>
            <p>Password:</p>
            <input type="text" name="password" value={this.state.password} onChange={e => this.onChangePassword(e)}/>
            <p>Connection Type:</p>
            <select>
                <option value="wpa">WPA/WPA2</option>
                <option value="wep">WEP</option>
                <option value={null}>NONE</option>
            </select>
            <button onClick={(e) => this.onClickGenerate(e)}>Generate!</button>
        </form>
      );
    }
  }