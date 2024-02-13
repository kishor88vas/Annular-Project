// import React from "react";
// import { Form, Button, Row, Col } from "react-bootstrap";

// const CandidateForm = ({
//   formData,
//   handleInputChange,
//   handleCheckboxChange,
//   handleAddCollege,
//   handleCollegeInputChange,
//   handleDeleteCollege,
//   handleSubmit,
// }) => {
//   return (
//     <div className="container">
//       <h2 className="text-center text-uppercase p-4">
//         Candidate Register Page
//       </h2>
//       <Form onSubmit={handleSubmit}>
//         <Row className="justify-content-center">
//           <Col sm={10}>
//             <h5>Personal Details</h5>
//             <Form.Group controlId="formPersonalDetails">
//               {/* <Form.Label>Personal details</Form.Label> */}
//               <Form.Label className="mt-3">Name:</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//               />

//               <Form.Label className="mt-3">Location :</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Location"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleInputChange}
//               />

//               <Form.Check
//                 label="Sponsorship required"
//                 type="checkbox"
//                 name="sponsorshipRequired"
//                 checked={formData.sponsorshipRequired}
//                 onChange={handleCheckboxChange}
//                 className="mt-3"
//                 style={{
//                   paddingLeft: "24px",
//                   marginTop: "10px",
//                   marginBottom: "10px",
//                 }}
//               />
//               <Form.Label>Mobile Number:</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Mobile Number"
//                 name="phoneNumber"
//                 className="mt-1"
//                 value={formData.phoneNumber}
//                 onChange={handleInputChange}
//               />
//             </Form.Group>

//             <Form.Group controlId="formSummary" className="">
//               <Form.Label className="mt-4">Summary</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 name="summary"
//                 className="mt-1"
//                 value={formData.summary}
//                 onChange={handleInputChange}
//               />
//             </Form.Group>

//             <Form.Group controlId="formEducation">
//               <h5 className="mt-3">Education</h5>
//               <Form.Group controlId="formResume">
//                 <Form.Label className="mt-3">
//                   Upload Resume [.docx or pdf]
//                 </Form.Label>
//                 <Form.Control type="file" />
//               </Form.Group>
//               {formData.education.map((edu, index) => (
//                 <div key={index}>
//                   <Form.Label className="mt-3">College:</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="College"
//                     name="college"
//                     value={edu.college}
//                     onChange={(e) => handleCollegeInputChange(e, index)}
//                   />
//                   <Form.Label className="mt-3">Course :</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Course"
//                     name="course"
//                     value={edu.course}
//                     onChange={(e) => handleCollegeInputChange(e, index)}
//                   />
//                   <Form.Label className="mt-3">Year Of Passing:</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Year of passing"
//                     name="yearOfPassing"
//                     value={edu.yearOfPassing}
//                     onChange={(e) => handleCollegeInputChange(e, index)}
//                   />
//                 </div>
//               ))}

//               <Row className="justify-content-center">
//                 <Col sm={6} className="text-center mt-3">
//                   <div className="">
//                     <Button
//                       variant="btn btn-info"
//                       className="mt-3"
//                       onClick={handleAddCollege}
//                     >
//                       Add College
//                     </Button>
//                     {/* <Button
//                       variant="danger"
//                       className="mt-3"
//                       onClick={handleDeleteCollege}
//                     >
//                       Delete College
//                     </Button> */}
//                   </div>
//                 </Col>
//               </Row>
//             </Form.Group>
//           </Col>

//           <Col sm={10}>
//             <Form.Group controlId="formSkillset">
//               <Form.Label className="mt-3">Skillset</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Keywords for search"
//                 name="skillset"
//                 className="mt-2"
//                 value={formData.skillset}
//                 onChange={handleInputChange}
//               />
//             </Form.Group>

//             <Form.Group controlId="formTools">
//               <Form.Label className="mt-3">Tools</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Tools"
//                 name="tools"
//                 value={formData.tools}
//                 onChange={handleInputChange}
//               />
//             </Form.Group>

//             <Form.Group controlId="formCertification">
//               <Form.Label className="mt-3">Certification</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Certification"
//                 name="certification"
//                 value={formData.certification}
//                 onChange={handleInputChange}
//               />
//             </Form.Group>

//             <Form.Group controlId="formVolunteering">
//               <Form.Label className="mt-3">Volunteering</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Volunteering"
//                 name="volunteering"
//                 value={formData.volunteering}
//                 onChange={handleInputChange}
//               />
//             </Form.Group>
//           </Col>
//         </Row>

//         <Row className="justify-content-center">
//           <Col sm={6} className="text-center mt-3">
//             <Button variant="primary" type="submit" className="custom-button">
//               Submit
//             </Button>
//           </Col>
//         </Row>
//       </Form>
//     </div>
//   );
// };

// export default CandidateForm;

import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const CandidateForm = ({
  formData,
  handleInputChange,
  handleCheckboxChange,
  handleAddCollege,
  handleCollegeInputChange,
  handleSubmit,
}) => {
  return (
    <div className="container">
      <h2 className="text-center text-uppercase p-4">
        Candidate Register Page
      </h2>
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <Col sm={8}>
            <h5>Personal Details</h5>
            <Form.Group controlId="formPersonalDetails">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />

              <Form.Label className="mt-3">Location :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
              />

              <Form.Check
                label="Sponsorship required"
                type="checkbox"
                name="sponsorshipRequired"
                checked={formData.sponsorshipRequired}
                onChange={handleCheckboxChange}
                className="mt-3"
              />
              <Form.Label className="mt-3">Mobile Number:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Mobile Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formSummary" className="mb-4">
              <Form.Label className="mt-3">Summary</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="summary"
                value={formData.summary}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formEducation">
              <h5>Education</h5>
              <Form.Group controlId="formResume">
                <Form.Label>Upload Resume [.docx or pdf]</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              {formData.education.map((edu, index) => (
                <div key={index}>
                  <Form.Label className="mt-3">College:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="College"
                    name="college"
                    value={edu.college}
                    onChange={(e) => handleCollegeInputChange(e, index)}
                  />
                  <Form.Label className="mt-3">Course :</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Course"
                    name="course"
                    value={edu.course}
                    onChange={(e) => handleCollegeInputChange(e, index)}
                  />
                  <Form.Label className="mt-3">Year Of Passing:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Year of passing"
                    name="yearOfPassing"
                    value={edu.yearOfPassing}
                    onChange={(e) => handleCollegeInputChange(e, index)}
                  />
                </div>
              ))}
              <Button variant="btn btn-info mt-3" onClick={handleAddCollege}>
                Add College
              </Button>
            </Form.Group>
          </Col>

          <Col sm={8}>
            <Form.Group controlId="formSkillset">
              <Form.Label>Skillset</Form.Label>
              <Form.Control
                type="text"
                placeholder="Keywords for search"
                name="skillset"
                className="mt-2"
                value={formData.skillset}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formTools">
              <Form.Label>Tools</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tools"
                name="tools"
                value={formData.tools}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formCertification">
              <Form.Label>Certification</Form.Label>
              <Form.Control
                type="text"
                placeholder="Certification"
                name="certification"
                value={formData.certification}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formVolunteering">
              <Form.Label>Volunteering</Form.Label>
              <Form.Control
                type="text"
                placeholder="Volunteering"
                name="volunteering"
                value={formData.volunteering}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col sm={6} className="text-center mt-3">
            <Button variant="primary" type="submit" className="custom-button">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default CandidateForm;
