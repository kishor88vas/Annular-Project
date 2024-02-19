import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import RecruiterLoginForm from "./RecruiterLoginForm";
import { useForm } from "react-hook-form";
import axios from "axios";

const RegisterPage = () => {
  const success = useNavigate();
  const initialState = {
    isCandidate: true,
    name: "",
    place: "",
    sponership: false,
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    summary: "",
    resume: null,
    education: [{ college: "", course: "", yearOfPassing: "" }],
    skillset: "",
    tools: "",
    certification: "",
    volunteering: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
    setValue,
    setError,
    clearErrors,
  } = useForm();
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const numericValue = value.replace(/\D/, "");
    const truncatedInput = numericValue.slice(0, 10);
    setFormData({ ...formData, [name]: truncatedInput });
  };

  const handleCheckboxChange = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: !formData[name] });
  };

  const maxSizeInBytes = 1024 * 1024; // 1MB

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    clearErrors("resume");
    // File size validation
    if (file && file.size > maxSizeInBytes) {
      setValue("resume", null);
      setError("resume", {
        type: "manual",
        message: "File size exceeds the maximum limit (1MB).",
      });
    } else {
      clearErrors("file");
      setValue("file", file);
    }
  };

  const handleAddCollege = () => {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        { college: "", course: "", yearOfPassing: "" },
      ],
    });
  };

  // const handleDeleteCollege = (index) => {
  //   const updatedEducation = [...formData.education];
  //   updatedEducation.splice(index, 1);
  //   setFormData({ ...formData, education: updatedEducation });
  // };

  // const handleCollegeInputChange = (e, index) => {
  //   const { name, value } = e.target;
  //   const updatedEducation = [...formData.education];
  //   updatedEducation[index][name] = value;
  //   setFormData({ ...formData, education: updatedEducation });
  // };

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        "http://13.233.141.139:8080/LoginProject-0.0.1-SNAPSHOT/user/register",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      console.log(data);

      reset();
      success("/loginUser");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div
      className="container p-4 m-0"
      style={{
        background: "linear-gradient(45deg, #fff1eb  30%,#ace0f9  90%)",
        minWidth: "100%",
        minHeight: "100vh",
      }}
    >
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="shadow p-4 rounded">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group>
                <Form.Label>Are you a candidate or recruiter?</Form.Label>
                <div>
                  <Form.Check
                    label="Candidate"
                    type="radio"
                    name="isCandidate"
                    checked={formData.isCandidate}
                    onChange={handleCheckboxChange}
                  />

                  <Form.Check
                    label="Recruiter"
                    type="radio"
                    name="isCandidate"
                    checked={!formData.isCandidate}
                    onChange={handleCheckboxChange}
                  />
                </div>
              </Form.Group>

              {formData.isCandidate && (
                <>
                  <h2 className="text-center text-uppercase p-4">
                    Candidate Register Page
                  </h2>
                  <Row className="justify-content-center">
                    <Col sm={8}>
                      <h5>Personal Details</h5>
                      <Form.Group>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Name"
                          name="name"
                          id="name"
                          //onChange={handleInputChange}
                          {...register("name", {
                            required: "Name is required.",
                          })}
                        />
                        {errors && errors.name && (
                          <p className="error-message text-danger">
                            {errors.name.message}
                          </p>
                        )}

                        <Form.Label className="mt-3">Location :</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Location"
                          name="place"
                          id="place"
                          onChange={handleInputChange}
                          {...register("place", {
                            required: "Location is required.",
                          })}
                        />
                        {errors && errors.place && (
                          <p className="error-message text-danger">
                            {errors.place.message}
                          </p>
                        )}

                        <Form.Group controlId="sponership">
                          <Form.Check
                            label="Sponsorship"
                            type="checkbox"
                            name="sponership"
                            id="sponership"
                            {...register("sponership")}
                          />
                        </Form.Group>
                        <Form.Label className="mt-3">Mobile Number:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Mobile Number"
                          name="phoneNumber"
                          id="phoneNumber"
                          maxLength={10}
                          minLength={10}
                          onChange={handleInputChange}
                          onKeyPress={(e) => {
                            const allowedChars = /[0-9\b]/;
                            if (!allowedChars.test(e.key)) {
                              e.preventDefault();
                            }
                          }}
                          {...register("phoneNumber", {
                            required: "Mobile Number is required.",
                            minLength: {
                              value: 10,
                              message: "Mobile number must be 10 digits long.",
                            },
                            maxLength: {
                              value: 10,
                              message: "Mobile number must be 10 digits long.",
                            },
                          })}
                        />
                        {errors && errors.phoneNumber && (
                          <p className="error-message text-danger">
                            {errors.phoneNumber.message}
                          </p>
                        )}
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          name="email"
                          id="email"
                          {...register("email", {
                            required: "Email is required.",
                            pattern: {
                              value:
                                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                              message: "Invalid email address.",
                            },
                          })}
                        />
                        {errors && errors.email && (
                          <p className="error-message text-danger">
                            {errors.email.message}
                          </p>
                        )}
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          name="password"
                          id="password"
                          {...register("password", {
                            required: "Password is required.",
                            pattern: {
                              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/,
                              message:
                                "Password must contain at least one uppercase letter, one lowercase letter, one digit, and is between 8 and 12 characters long",
                            },
                            minLength: {
                              value: 6,
                              message:
                                "Password must be at least 6 characters long.",
                            },
                            maxLength: {
                              value: 12,
                              message:
                                "Password must in between 6 to 12 characters long.",
                            },
                          })}
                        />
                        {errors && errors.password && (
                          <p className="error-message text-danger">
                            {errors.password.message}
                          </p>
                        )}
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Confirm Password:</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Confirm Password"
                          name="confirmPassword"
                          id="confirmPassword"
                          {...register("confirmPassword", {
                            required: "Please confirm your password.",
                            validate: {
                              matchesPassword: (value) => {
                                const password = getValues("password");
                                if (!password)
                                  return "Please enter your password first.";
                                return (
                                  value === password ||
                                  "The passwords do not match."
                                );
                              },
                            },
                          })}
                        />
                        {errors && errors.confirmPassword && (
                          <p className="error-message text-danger">
                            {errors.confirmPassword.message}
                          </p>
                        )}
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label className="mt-3">Summary</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="summary"
                          id="summary"
                          onChange={handleInputChange}
                        />
                      </Form.Group>

                      <Form.Group>
                        <h5>Education</h5>
                        <Form.Group>
                          <Form.Label className="text-primary">
                            Upload Resume [.docx or pdf]
                          </Form.Label>
                          <Form.Control
                            type="file"
                            name="resume"
                            accept=".pdf, .doc, .docx"
                            onChange={handleFileUpload}
                            {...register("resume", {
                              required: "Resume file is required",
                            })}
                          />

                          {errors && errors.resume && (
                            <p className="error-message text-danger mb-2">
                              {errors.resume.message}
                            </p>
                          )}
                        </Form.Group>
                        {formData.education.map((edu, index) => (
                          <div key={index}>
                            <Form.Label className="mt-3">College:</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="College"
                              name={`education[${index}].college`}
                              defaultValue={edu.college}
                              {...register(`education[${index}].college`, {
                                required: "College is required",
                              })}
                            />
                            {errors &&
                              errors.education &&
                              errors.education[index] && (
                                <p className="error-message text-danger">
                                  {errors.education[index].college &&
                                    errors.education[index].college.message}
                                </p>
                              )}

                            <Form.Label className="mt-3">Course :</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Course"
                              name={`education[${index}].course`}
                              defaultValue={edu.course}
                              {...register(`education[${index}].course`, {
                                required: "Course is required",
                              })}
                            />
                            {errors &&
                              errors.education &&
                              errors.education[index] && (
                                <p className="error-message text-danger">
                                  {errors.education[index].course &&
                                    errors.education[index].course.message}
                                </p>
                              )}

                            <Form.Label className="mt-3">
                              Year Of Passing:
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Year of passing"
                              name={`education[${index}].yearOfPassing`}
                              defaultValue={edu.yearOfPassing}
                              maxLength={4}
                              onKeyPress={(e) => {
                                const isValidChar = /^\d$/.test(e.key);
                                if (!isValidChar) {
                                  e.preventDefault();
                                }
                              }}
                              {...register(
                                `education[${index}].yearOfPassing`,
                                {
                                  required: "Year of passing is required",
                                  maxLength: {
                                    value: 4,
                                    message:
                                      "Year of passing must be 4 digits long",
                                  },
                                }
                              )}
                            />
                            {errors &&
                              errors.education &&
                              errors.education[index] && (
                                <p className="error-message text-danger">
                                  {errors.education[index].yearOfPassing &&
                                    errors.education[index].yearOfPassing
                                      .message}
                                </p>
                              )}
                          </div>
                        ))}
                        <Button
                          variant="btn btn-info mt-3"
                          onClick={handleAddCollege}
                        >
                          Add College
                        </Button>
                      </Form.Group>
                    </Col>
                    <Col sm={8}>
                      <Form.Group>
                        <Form.Label>Skillset</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Keywords for search"
                          name="skillset"
                          id="skillset"
                          className="mt-2"
                          onChange={handleInputChange}
                          {...register("skillset")}
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Tools</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Tools"
                          name="tools"
                          id="tools"
                          onChange={handleInputChange}
                          {...register("tools")}
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Certification</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Certification"
                          name="certification"
                          id="certification"
                          onChange={handleInputChange}
                          {...register("certification")}
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Volunteering</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Volunteering"
                          name="volunteering"
                          id="volunteering"
                          onChange={handleInputChange}
                          {...register("volunteering")}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </>
              )}

              {!formData.isCandidate && <RecruiterLoginForm />}

              <Row className="justify-content-center">
                <Col sm={6} className="text-center mt-3">
                  <Button
                    variant="primary"
                    type="submit"
                    className="custom-button"
                  >
                    Submit
                  </Button>
                </Col>
                <div className="container d-flex justify-content-center p-2">
                  <span>
                    Already Registered?
                    <Link to="/loginUser" style={{ textDecoration: "none" }}>
                      Click here.
                    </Link>
                  </span>
                </div>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RegisterPage;
