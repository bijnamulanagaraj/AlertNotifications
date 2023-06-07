// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotification = () => (
  <div className="main-container">
    <h1 className="main-heading">Alert Notifications</h1>
    <Notification>
      <AiFillCheckCircle className="success-icon" />
      <div className="content-container">
        <h1 className="success-heading">Success</h1>
        <p className="notification-para">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>

    <Notification>
      <RiErrorWarningFill className="error-icon" />
      <div className="content-container">
        <h1 className="error-heading">Error</h1>
        <p className="notification-para">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>

    <Notification>
      <MdWarning className="warning-icon" />
      <div className="content-container">
        <h1 className="warning-heading">Warning</h1>
        <p className="notification-para">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>

    <Notification>
      <MdInfo className="info-icon" />
      <div className="content-container">
        <h1 className="info-heading">Info</h1>
        <p className="notification-para">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  </div>
)

export default AlertNotification
