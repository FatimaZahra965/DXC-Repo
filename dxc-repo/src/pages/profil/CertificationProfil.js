import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import img from "../../../src/cert.png";
import {Row,Col} from "reactstrap";
import { getCertificationsAction } from '../../services/Actions/certificationsActions';
import Blog from "./Blog";
function CertificationProfil(props) {
  const dispatch = useDispatch();
  const certifications = useSelector((state) => state.certifications.certifications);
  useEffect(() => {
    const loadCertifications = () => dispatch(getCertificationsAction());
    loadCertifications();
  }, []);

  const loading = useSelector((state) => state.certifications.loading);
  
    return (
        <Row lg="12">
        {certifications.map((certification) => (
          <Col sm="6" lg="4"  >
            <Blog className="p-4"
             title={certification.titre} 
             code={certification.code}
             image={img}
             text={certification.datecertification} 
             color="primary"
            />
          </Col>
       ))}  
      </Row>
    );
}

export default CertificationProfil;