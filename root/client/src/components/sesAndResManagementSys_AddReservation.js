// // // import React, { useState, useEffect } from "react";
// // // import Nav from "./sesAndResManagementSys_Nav";
// // // import { useNavigate, useLocation } from "react-router-dom";
// // // import axios from "axios";
// // // import DatePicker from "react-datepicker";
// // // import TimePicker from "react-time-picker";

// // // function AddReservation() {
// // //   const history = useNavigate();
// // //   const location = useLocation();
// // //   const [inputs, setInputs] = useState({
// // //     stdname: "",
// // //     sessionID: "",
// // //     date: "",
// // //     time: "",
// // //     numOfParticipents: "",
// // //     contactNum: "",
// // //     email: "",
// // //     amount: "",
// // //     refID: ""
// // //   });

// // //   useEffect(() => {
// // //     const searchParams = new URLSearchParams(location.search);
// // //     const sessionIDParam = searchParams.get("sessionID");
// // //     const dateParam = searchParams.get("date");
// // //     const timeParam = searchParams.get("time");
// // //     if (sessionIDParam) {
// // //       setInputs((prevInputs) => ({
// // //         ...prevInputs,
// // //         sessionID: sessionIDParam,
// // //         date: dateParam || "",
// // //         time: timeParam || "",
// // //       }));
// // //     }
// // //     const randomNum = Math.floor(10000 + Math.random() * 90000); // Generates random 5-digit number
// // //     setInputs((prevInputs) => ({
// // //       ...prevInputs,
// // //       refID: "RES" + randomNum,
// // //     }));
// // //   }, [location.search]);

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setInputs((prevState) => ({
// // //       ...prevState,
// // //       [name]: value,
// // //     }));
// // //     if (name === "numOfParticipents") {
// // //       const amount = parseInt(value) * 5000;
// // //       setInputs((prevState) => ({
// // //         ...prevState,
// // //         amount: amount,
// // //       }));
// // //     }
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     console.log(inputs);
// // //     sendRequest().then(() => history("/sesAndResManagement/reservationdetails"));
// // //   };

// // //   const sendRequest = async () => {
// // //     await axios.post("http://localhost:4000/reservations", inputs);
// // //   };

// // //   return (
// // //     <div>
// // //       <Nav />
// // //       <h1>Add Reservation</h1>
// // //       <form onSubmit={handleSubmit}>
// // //         {/* Hidden input field for refID */}
// // //         <input
// // //           type="hidden"
// // //           name="refID"
// // //           value={inputs.refID}
// // //           onChange={handleChange}
// // //         />

// // //         <div className="mb-3">
// // //           <label htmlFor="stdname" className="form-label">
// // //             Name
// // //           </label>
// // //           <input
// // //             type="text"
// // //             className="form-control"
// // //             name="stdname"
// // //             onChange={handleChange}
// // //             value={inputs.stdname}
// // //             required
// // //           />
// // //         </div>

// // //         <div className="mb-3">
// // //           <label htmlFor="sessionID" className="form-label">
// // //             Session ID
// // //           </label>
// // //           <input
// // //             type="text"
// // //             className="form-control"
// // //             name="sessionID"
// // //             onChange={handleChange}
// // //             value={inputs.sessionID}
// // //             disabled
// // //           />
// // //         </div>

// // //         <div className="mb-3">
// // //           <label className="form-label">Date</label>
// // //           <br />
// // //           <DatePicker
// // //             selected={inputs.date ? new Date(inputs.date) : null}
// // //             onChange={handleChange}
// // //             dateFormat="yyyy-MM-dd"
// // //             className="form-control"
// // //             disabled
// // //           />
// // //         </div>

// // //         <div className="mb-3">
// // //           <label className="form-label">Time</label>
// // //           <br />
// // //           <TimePicker
// // //             onChange={handleChange}
// // //             value={inputs.time}
// // //             className="form-control"
// // //             disabled
// // //           />
// // //         </div>

// // //         <div className="mb-3">
// // //           <label htmlFor="numOfParticipents" className="form-label">
// // //             Number of Participants
// // //           </label>
// // //           <input
// // //             type="number"
// // //             className="form-control"
// // //             name="numOfParticipents"
// // //             onChange={handleChange}
// // //             value={inputs.numOfParticipents}
// // //             required
// // //           />
// // //         </div>

// // //         <div className="mb-3">
// // //           <label htmlFor="contactNum" className="form-label">
// // //             Contact Number
// // //           </label>
// // //           <input
// // //             type="text"
// // //             className="form-control"
// // //             name="contactNum"
// // //             onChange={handleChange}
// // //             value={inputs.contactNum}
// // //             required
// // //           />
// // //         </div>

// // //         <div className="mb-3">
// // //           <label htmlFor="email" className="form-label">
// // //             Email
// // //           </label>
// // //           <input
// // //             type="email"
// // //             className="form-control"
// // //             name="email"
// // //             onChange={handleChange}
// // //             value={inputs.email}
// // //             required
// // //           />
// // //         </div>

// // //         <div className="mb-3">
// // //           <label htmlFor="amount" className="form-label">
// // //             Amount
// // //           </label>
// // //           <input
// // //             type="number"
// // //             className="form-control"
// // //             name="amount"
// // //             onChange={handleChange}
// // //             value={inputs.amount}
// // //             required
// // //             readOnly
// // //           />
// // //         </div>

// // //         <button type="submit" className="btn btn-primary">
// // //           Submit
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // }

// // // export default AddReservation;
// // import React, { useState, useEffect } from "react";
// // import Nav from "./sesAndResManagementSys_Nav";
// // import { useNavigate, useLocation } from "react-router-dom";
// // import axios from "axios";
// // import DatePicker from "react-datepicker";
// // import TimePicker from "react-time-picker";

// // function AddReservation() {
// //   const history = useNavigate();
// //   const location = useLocation();
// //   const [inputs, setInputs] = useState({
// //     stdname: "",
// //     sessionID: "",
// //     date: "",
// //     time: "",
// //     numOfParticipents: "",
// //     contactNum: "",
// //     email: "",
// //     amount: "",
// //     refID: ""
// //   });
// //   const [isValidContact, setIsValidContact] = useState(true);
// //   const [isNumberValid, setIsNumberValid] = useState(true);

// //   useEffect(() => {
// //     const searchParams = new URLSearchParams(location.search);
// //     const sessionIDParam = searchParams.get("sessionID");
// //     const dateParam = searchParams.get("date");
// //     const timeParam = searchParams.get("time");
// //     if (sessionIDParam) {
// //       setInputs((prevInputs) => ({
// //         ...prevInputs,
// //         sessionID: sessionIDParam,
// //         date: dateParam || "",
// //         time: timeParam || "",
// //       }));
// //     }
// //     const randomNum = Math.floor(10000 + Math.random() * 90000); // Generates random 5-digit number
// //     setInputs((prevInputs) => ({
// //       ...prevInputs,
// //       refID: "RES" + randomNum,
// //     }));
// //   }, [location.search]);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setInputs((prevState) => ({
// //       ...prevState,
// //       [name]: value,
// //     }));

// //     if (name === "contactNum") {
// //       // Contact number validation
// //       if (/^\d{10}$/.test(value)) {
// //         setIsValidContact(true);
// //       } else {
// //         setIsValidContact(false);
// //       }
// //     } else if (name === "numOfParticipents") {
// //       // Number of participants validation
// //       if (!isNaN(value) && value !== "") {
// //         setIsNumberValid(true);
// //       } else {
// //         setIsNumberValid(false);
// //       }
// //       // Calculate amount
// //       const amount = isNaN(value) ? "" : parseInt(value) * 5000;
// //       setInputs((prevState) => ({
// //         ...prevState,
// //         amount: amount,
// //       }));
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     console.log(inputs);
// //     if (isValidContact && isNumberValid) {
// //       sendRequest().then(() => history("/sesAndResManagement/reservationdetails"));
// //     }
// //   };

// //   const sendRequest = async () => {
// //     await axios.post("http://localhost:4000/reservations", inputs);
// //   };

// //   return (
// //     <div>
// //       <Nav />
// //       <h1>Add Reservation</h1>
// //       <form onSubmit={handleSubmit}>
// //         {/* Hidden input field for refID */}
// //         <input
// //           type="hidden"
// //           name="refID"
// //           value={inputs.refID}
// //           onChange={handleChange}
// //         />

// //         <div className="mb-3">
// //           <label htmlFor="stdname" className="form-label">
// //             Name
// //           </label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             name="stdname"
// //             onChange={handleChange}
// //             value={inputs.stdname}
// //             required
// //           />
// //         </div>

// //         <div className="mb-3">
// //           <label htmlFor="sessionID" className="form-label">
// //             Session ID
// //           </label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             name="sessionID"
// //             onChange={handleChange}
// //             value={inputs.sessionID}
// //             disabled
// //           />
// //         </div>

// //         <div className="mb-3">
// //           <label className="form-label">Date</label>
// //           <br />
// //           <DatePicker
// //             selected={inputs.date ? new Date(inputs.date) : null}
// //             onChange={handleChange}
// //             dateFormat="yyyy-MM-dd"
// //             className="form-control"
// //             disabled
// //           />
// //         </div>

// //         <div className="mb-3">
// //           <label className="form-label">Time</label>
// //           <br />
// //           <TimePicker
// //             onChange={handleChange}
// //             value={inputs.time}
// //             className="form-control"
// //             disabled
// //           />
// //         </div>

// //         <div className="mb-3">
// //           <label htmlFor="numOfParticipents" className="form-label">
// //             Number of Participants
// //           </label>
// //           <input
// //             type="text"
// //             className={`form-control ${isNumberValid ? "" : "is-invalid"}`}
// //             name="numOfParticipents"
// //             onChange={handleChange}
// //             value={inputs.numOfParticipents}
// //             required
// //           />
// //           {!isNumberValid && <div className="invalid-feedback">Please enter a valid number</div>}
// //         </div>

// //         <div className="mb-3">
// //           <label htmlFor="contactNum" className="form-label">
// //             Contact Number
// //           </label>
// //           <div className="input-group">
// //             <input
// //               type="text"
// //               className={`form-control ${isValidContact ? "" : "is-invalid"}`}
// //               name="contactNum"
// //               onChange={handleChange}
// //               value={inputs.contactNum}
// //               required
// //             />
// //             <div className="input-group-append">
// //               <select className="form-select" onChange={handleChange}>
// //                 <option value="+1">+1 (US)</option>
// //                 <option value="+91">+91 (India)</option>
// //                 {/* Add more options for different country codes */}
// //               </select>
// //             </div>
// //             {!isValidContact && <div className="invalid-feedback">Please enter a valid contact number</div>}
// //           </div>
// //         </div>

// //         <div className="mb-3">
// //           <label htmlFor="email" className="form-label">
// //             Email
// //           </label>
// //           <input
// //             type="email"
// //             className="form-control"
// //             name="email"
// //             onChange={handleChange}
// //             value={inputs.email}
// //             required
// //           />
// //         </div>

// //         <div className="mb-3">
// //           <label htmlFor="amount" className="form-label">
// //             Amount
// //           </label>
// //           <input
// //             type="number"
// //             className="form-control"
// //             name="amount"
// //             onChange={handleChange}
// //             value={inputs.amount}
// //             required
// //             readOnly
// //           />
// //         </div>

// //         <button type="submit" className="btn btn-primary">
// //           Submit
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default AddReservation;
// import React, { useState, useEffect } from "react";
// import Nav from "./sesAndResManagementSys_Nav";
// import { useNavigate, useLocation } from "react-router-dom";
// import axios from "axios";
// import DatePicker from "react-datepicker";
// import TimePicker from "react-time-picker";

// function AddReservation() {
//   const history = useNavigate();
//   const location = useLocation();
//   const [inputs, setInputs] = useState({
//     stdname: "",
//     sessionID: "",
//     date: "",
//     time: "",
//     numOfParticipents: "",
//     contactNum: "",
//     email: "",
//     amount: "",
//     refID: ""
//   });
//   const [isValidContact, setIsValidContact] = useState(true);
//   const [isNumberValid, setIsNumberValid] = useState(true);
//   const [isEmailValid, setIsEmailValid] = useState(true);

//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     const sessionIDParam = searchParams.get("sessionID");
//     const dateParam = searchParams.get("date");
//     const timeParam = searchParams.get("time");
//     if (sessionIDParam) {
//       setInputs((prevInputs) => ({
//         ...prevInputs,
//         sessionID: sessionIDParam,
//         date: dateParam || "",
//         time: timeParam || "",
//       }));
//     }
//     const randomNum = Math.floor(10000 + Math.random() * 90000); // Generates random 5-digit number
//     setInputs((prevInputs) => ({
//       ...prevInputs,
//       refID: "RES" + randomNum,
//     }));
//   }, [location.search]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputs((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));

//     if (name === "contactNum") {
//       // Contact number validation
//       if (/^\d{10}$/.test(value)) {
//         setIsValidContact(true);
//       } else {
//         setIsValidContact(false);
//       }
//     } else if (name === "numOfParticipents") {
//       // Number of participants validation
//       if (!isNaN(value) && value !== "") {
//         setIsNumberValid(true);
//       } else {
//         setIsNumberValid(false);
//       }
//       // Calculate amount
//       const amount = isNaN(value) ? "" : parseInt(value) * 5000;
//       setInputs((prevState) => ({
//         ...prevState,
//         amount: amount,
//       }));
//     } else if (name === "email") {
//       // Email validation
//       const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       setIsEmailValid(regex.test(value));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(inputs);
//     if (isValidContact && isNumberValid && isEmailValid) {
//       sendRequest().then(() => history("/sesAndResManagement/reservationdetails"));
//     }
//   };

//   const sendRequest = async () => {
//     await axios.post("http://localhost:4000/reservations", inputs);
//   };

//   return (
//     <div>
//       <Nav />
//       <h1>Add Reservation</h1>
//       <form onSubmit={handleSubmit}>
//         {/* Hidden input field for refID */}
//         <input
//           type="hidden"
//           name="refID"
//           value={inputs.refID}
//           onChange={handleChange}
//         />

//         <div className="mb-3">
//           <label htmlFor="stdname" className="form-label">
//             Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             name="stdname"
//             onChange={handleChange}
//             value={inputs.stdname}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="sessionID" className="form-label">
//             Session ID
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             name="sessionID"
//             onChange={handleChange}
//             value={inputs.sessionID}
//             disabled
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Date</label>
//           <br />
//           <DatePicker
//             selected={inputs.date ? new Date(inputs.date) : null}
//             onChange={handleChange}
//             dateFormat="yyyy-MM-dd"
//             className="form-control"
//             disabled
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Time</label>
//           <br />
//           <TimePicker
//             onChange={handleChange}
//             value={inputs.time}
//             className="form-control"
//             disabled
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="numOfParticipents" className="form-label">
//             Number of Participants
//           </label>
//           <input
//             type="text"
//             className={`form-control ${isNumberValid ? "" : "is-invalid"}`}
//             name="numOfParticipents"
//             onChange={handleChange}
//             value={inputs.numOfParticipents}
//             required
//           />
//           {!isNumberValid && <div className="invalid-feedback">Please enter a valid number</div>}
//         </div>

//         <div className="mb-3">
//           <label htmlFor="contactNum" className="form-label">
//             Contact Number
//           </label>
//           <div className="input-group">
//             <input
//               type="text"
//               className={`form-control ${isValidContact ? "" : "is-invalid"}`}
//               name="contactNum"
//               onChange={handleChange}
//               value={inputs.contactNum}
//               required
//             />
//             <div className="input-group-append">
//               <select className="form-select" onChange={handleChange}>
//                 <option value="+1">+1 (US)</option>
//                 <option value="+91">+91 (India)</option>
//                 {/* Add more options for different country codes */}
//               </select>
//             </div>
//             {!isValidContact && <div className="invalid-feedback">Please enter a valid contact number</div>}
//           </div>
//         </div>

//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email
//           </label>
//           <input
//             type="email"
//             className={`form-control ${isEmailValid ? "" : "is-invalid"}`}
//             name="email"
//             onChange={handleChange}
//             value={inputs.email}
//             required
//           />
//           {!isEmailValid && <div className="invalid-feedback">Please enter a valid email address</div>}
//         </div>

//         <div className="mb-3">
//           <label htmlFor="amount" className="form-label">
//             Amount
//           </label>
//           <input
//             type="number"
//             className="form-control"
//             name="amount"
//             onChange={handleChange}
//             value={inputs.amount}
//             required
//             readOnly
//           />
//         </div>

//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddReservation;
import React, { useState, useEffect } from "react";
import Nav from "./sesAndResManagementSys_Nav";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";

function AddReservation() {
  const history = useNavigate();
  const location = useLocation();
  const [inputs, setInputs] = useState({
    stdname: "",
    sessionID: "",
    date: "",
    time: "",
    numOfParticipents: "",
    contactNum: "",
    email: "",
    amount: "",
    refID: ""
  });
  const [isValidContact, setIsValidContact] = useState(true);
  const [isNumberValid, setIsNumberValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const sessionIDParam = searchParams.get("sessionID");
    const dateParam = searchParams.get("date");
    const timeParam = searchParams.get("time");
    if (sessionIDParam) {
      setInputs((prevInputs) => ({
        ...prevInputs,
        sessionID: sessionIDParam,
        date: dateParam || "",
        time: timeParam || "",
      }));
    }
    const randomNum = Math.floor(10000 + Math.random() * 90000); // Generates random 5-digit number
    setInputs((prevInputs) => ({
      ...prevInputs,
      refID: "RES" + randomNum,
    }));
  }, [location.search]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "contactNum") {
      // Contact number validation
      if (/^\d{10}$/.test(value)) {
        setIsValidContact(true);
      } else {
        setIsValidContact(false);
      }
    } else if (name === "numOfParticipents") {
      // Number of participants validation
      if (!isNaN(value) && value !== "") {
        setIsNumberValid(true);
      } else {
        setIsNumberValid(false);
      }
      // Calculate amount
      const amount = isNaN(value) ? "" : parseInt(value) * 5000;
      setInputs((prevState) => ({
        ...prevState,
        amount: amount,
      }));
    } else if (name === "email") {
      // Email validation
      const regex = /@gmail\.com$|@icloud\.com$/;
      setIsEmailValid(regex.test(value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    if (isValidContact && isNumberValid && isEmailValid) {
      sendRequest().then(() => history("/sesAndResManagement/reservationdetails"));
    }
  };

  const sendRequest = async () => {
    await axios.post("http://localhost:4000/reservations", inputs);
  };

  return (
    <div>
      <Nav />
      <h1>Add Reservation</h1>
      <form onSubmit={handleSubmit}>
        {/* Hidden input field for refID */}
        <input
          type="hidden"
          name="refID"
          value={inputs.refID}
          onChange={handleChange}
        />

        <div className="mb-3">
          <label htmlFor="stdname" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="stdname"
            onChange={handleChange}
            value={inputs.stdname}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="sessionID" className="form-label">
            Session ID
          </label>
          <input
            type="text"
            className="form-control"
            name="sessionID"
            onChange={handleChange}
            value={inputs.sessionID}
            disabled
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Date</label>
          <br />
          <DatePicker
            selected={inputs.date ? new Date(inputs.date) : null}
            onChange={handleChange}
            dateFormat="yyyy-MM-dd"
            className="form-control"
            disabled
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Time</label>
          <br />
          <TimePicker
            onChange={handleChange}
            value={inputs.time}
            className="form-control"
            disabled
          />
        </div>

        <div className="mb-3">
          <label htmlFor="numOfParticipents" className="form-label">
            Number of Participants
          </label>
          <input
            type="text"
            className={`form-control ${isNumberValid ? "" : "is-invalid"}`}
            name="numOfParticipents"
            onChange={handleChange}
            value={inputs.numOfParticipents}
            required
          />
          {!isNumberValid && <div className="invalid-feedback">Please enter a valid number</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="contactNum" className="form-label">
            Contact Number
          </label>
          <input
            type="text"
            className={`form-control ${isValidContact ? "" : "is-invalid"}`}
            name="contactNum"
            onChange={handleChange}
            value={inputs.contactNum}
            required
          />
          {!isValidContact && <div className="invalid-feedback">Please enter a valid contact number with 10 digits</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${isEmailValid ? "" : "is-invalid"}`}
            name="email"
            onChange={handleChange}
            value={inputs.email}
            required
          />
          {!isEmailValid && <div className="invalid-feedback">Please enter a valid email address ending with "@gmail.com" or "@icloud.com"</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            type="number"
            className="form-control"
            name="amount"
            onChange={handleChange}
            value={inputs.amount}
            required
            readOnly
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddReservation;
