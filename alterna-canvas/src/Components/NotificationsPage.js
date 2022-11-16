
import React from 'react'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'bootstrap/dist/css/bootstrap.css';



class Example extends React.Component {
  createNotification = (type) => {
    return () => {
      switch (type) {
        case 'infoUser':
          NotificationManager.info('New Information From User Interface');
          break;
        
        case 'infoGraph':
          NotificationManager.info('New Information From Computer Graphics');
          break;
        
        case 'infoSenior':
          NotificationManager.info('New Information From Senior Design');
          break;
        
        case 'successUser':
          NotificationManager.success('Assignment Graded In User Interfaces', '');
          break;
        
        case 'successGraph':
          NotificationManager.success('Assignment Graded In Computer Graphics', '');
          break;
          
        case 'successSenior':
          NotificationManager.success('Assignment Graded In Senior Design', '');
          break;
          
        case 'warningUser':
          NotificationManager.warning('Missing Assignment In User Interfaces',);
          break;

        case 'warningGraph':
          NotificationManager.warning('Missing Assignment In User Interfaces',);
          break;
        
        case 'warningSenior':
          NotificationManager.warning('Missing Assignment In User Interfaces',);
          break;
        
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
    };
  };



  render() {
    return (
      <div class="home-content">
        <h3>User Interfaces:</h3>
        <h4>Class canceled today</h4>
        <button className='btn btn-info'
          onClick={this.createNotification('infoUser')}>Test
        </button>
        <hr/>
        <h3>Computer Graphics:</h3>
        <h4>Class canceled today</h4>
        <button className='btn btn-info'
          onClick={this.createNotification('infoGraph')}>Test
        </button>
        <hr/>
        <h3>Senior Design:</h3>
        <h4>Class canceled today</h4>
        <button className='btn btn-info'
          onClick={this.createNotification('infoSenior')}>Test
        </button>
        <hr/>
       
        <h3>User Interfaces:</h3>
        <h4>Assignment Graded
        </h4>
        <button className='btn btn-info'
          onClick={this.createNotification('successUser')}>Test
        </button>
        <hr/>
        <h3>Computer Graphics:</h3>
        <h4>Assignment Graded</h4>
        <button className='btn btn-info'
          onClick={this.createNotification('successGraph')}>Test
        </button>
        <hr/>
        <h3>Senior Design:</h3>
        <h4>Assignment Graded</h4>
        <button className='btn btn-info'
          onClick={this.createNotification('successSenior')}>Test
        </button>
        <hr/>

        <h3>User Interfaces:</h3>
        <h4>Missing Assignment</h4>
        <button className='btn btn-info'
          onClick={this.createNotification('warningUser')}>Test
        </button>
        <hr/>
        <h3>Computer Graphics:</h3>
        <h4>Missing Assignment</h4>
        <button className='btn btn-info'
          onClick={this.createNotification('warningGraph')}>Test
        </button>
        <hr/>
        <h3>Senior Design:</h3>
        <h4>Missing Assignment</h4>
        <button className='btn btn-info'
          onClick={this.createNotification('warningSenior')}>Test
        </button>
        <hr/>
        <NotificationContainer/>
      </div>
    );
  }
}



export default Example;