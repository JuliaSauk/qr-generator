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
            imageURL: ''            
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
            if (error) console.error(error);
        });

        var opts = {
            errorCorrectionLevel: 'H',
            type: 'image/jpeg',
            quality: 1.0,
            margin: 1,
            color: {
              dark:"#000000",
              light:"#FFFFFF"
            }
          }
           
          QRCode.toDataURL(url, opts, (err, url) => {
            if (err) throw err
            this.setState({
                imageURL: url
            });
          })
    }    

    render() {
      return (
        <div class="form-content">
            <div class="wifi-input-container">
                <form>
                    <div class="input-container">
                        <label>Network Ssid:</label>
                        <input type="text" name="network" value={this.state.ssid} onChange={e => this.onChangeSsid(e)}/>
                    </div>
                    <div class="input-container">
                        <label>Password:</label>
                        <input type="text" name="password" value={this.state.password} onChange={e => this.onChangePassword(e)}/>
                    </div>
                    <div class="input-container">
                        <label>Connection Type:</label>
                        <select onChange={(e) => this.onChageConnectionType(e)} value={this.state.connectionType}>
                            <option value="WPA">WPA/WPA2</option>
                            <option value="WEP">WEP</option>
                            <option value="NONE">NONE</option>
                        </select>   
                    </div>
                    <button class="btn" onClick={(e) => this.onClickGenerate(e)}>Generate</button>
                    <button class="btn" disabled = {!this.state.imageURL}><a href={this.state.imageURL} download>Download</a></button>
                </form>
            </div>
            <div class="qr-canvas">
                <canvas ref={this.canvasRef}/>    
            </div>
        </div>
      );
    }
  }