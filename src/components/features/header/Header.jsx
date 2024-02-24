import { Row, Col } from 'antd'
import { Link } from "react-router-dom";
import logo from "../../../assets/kroll-logo.png";
import './Header.scss'

export default function CustomHeader() {
    return (
      <div className="app-header">
        <div className={'headerClass'}>
          <Row justify={"space-between"} align={"middle"} style={{ height: 60 }}>
            <Col>
              <Link to="/">
                <img src={logo} alt="Kroll Logo" className="header-logo" />
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    );
  }