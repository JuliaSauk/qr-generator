import React, {Component} from 'react';
import './../App.css';
import QRCode from 'qrcode'

export default class GenerationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ssid: '',
            password: '',
            connectionType: 'WPA',
            qrCode: null
        };

        this.canvasRef = React.createRef();
    }

    onChangeSsid(event) {
        this.setState({
            ssid: event.target.value
        });
    }

    onChangePassword(event) {
        this.setState({
            password: event.target.value
        });
    }

    onChageConnectionType(e) {
        this.setState({
            connectionType: e.target.value
        });
    }

    onClickGenerate (e) {
        e.preventDefault();
        const url = `WIFI:T:${this.state.connectionType};S:${this.state.ssid};P:${this.state.password};`;
        QRCode.toCanvas(this.canvasRef.current, url, {width: 300}, (error) => {
            if (error) console.error(error)
            console.log('success!');
        });
    }

    render() {
      return (
        <div style={{display: 'flex',  flexDirection: 'row', justifyContent: 'center'}}>
            <div style={{display: 'flex'}}>
                <form>
                <p>Network Ssid:</p>
                <input type="text" name="network" value={this.state.ssid} onChange={e => this.onChangeSsid(e)}/>
                <p>Password:</p>
                <input type="text" name="password" value={this.state.password} onChange={e => this.onChangePassword(e)}/>
                <p>Connection Type:</p>
                <select onChange={(e) => this.onChageConnectionType(e)} value={this.state.connectionType}>
                    <option value="WPA">WPA/WPA2</option>
                    <option value="WEP">WEP</option>
                    <option value="NONE">NONE</option>
                </select>
                <button style={{margin: '5px'}} onClick={(e) => this.onClickGenerate(e)}>Generate!</button>
                </form>
            </div>
            <div style={{display: 'flex'}}>
                <canvas ref={this.canvasRef}/>
            </div>
        </div>
      );
    }
  }