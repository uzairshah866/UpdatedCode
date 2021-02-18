// import React from "react";
// import { Row, Col } from "antd";

// const ContactForm = () => {
//   return (
//     <>
//       <div
//         style={{
//           width: "100%",
//           height: "500px",
//           backgroundColor: "#fafbfc",
//         }}
//       >
//         <h1 className="text-center pt-5">Contact Form</h1>
//         <div class="row g-3 align-items-center pt-5 justify-content-center">
//           <div class="col-auto">
//             <input
//               type="text"
//               class="form-control"
//               placeholder="Email Address"
//               style={{ width: "300px" }}
//             />
//           </div>
//           <div class="col-auto">
//             <input
//               type="text"
//               class="form-control"
//               placeholder="Name"
//               style={{ width: "300px" }}
//             />
//           </div>
//         </div>
//         <div class="row g-3 align-items-center mt-2 justify-content-center">
//           <div class="col-auto">
//             <input
//               type="text"
//               class="form-control"
//               placeholder="Enter Subject here"
//               style={{ width: "617px" }}
//             />
//           </div>
//         </div>
//         <div class="row g-3 align-items-center mt-2 justify-content-center">
//           <div class="col-auto">
//             <textarea
//               type="text"
//               class="form-control"
//               placeholder="Let us know how we can help you!"
//               style={{ width: "617px", height: "100px" }}
//             />
//           </div>
//         </div>
//         <div class="row g-3 align-items-center mt-2 justify-content-center">
//           <div class="col-auto mt-5">
//             <button
//               type="button"
//               style={{
//                 backgroundColor: "#0a2c66",
//                 color: "white",
//                 width: "150px",
//                 height: "40px",
//                 borderRadius: "5px",
//                 justifyContent: "center",
//               }}
//             >
//               Send Message
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default ContactForm;

import React from "react";
import { Form, Input } from "antd";

const FormControl = () => {
  const [form] = Form.useForm();

  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        backgroundColor: "#fafbfc",
      }}
    >
      <h1 className="text-center pt-5">Contact Form</h1>
      <Form
        form={form}
        name="horizontal_login"
        layout="inline"
        className="mt-5"
      >
        <Form.Item name="email">
          <Input placeholder="Email Address" size="large" className="px-5" />
        </Form.Item>
        <Form.Item name="name">
          <Input className="px-5" placeholder="Name" size="large" />
        </Form.Item>
      </Form>
      <Form form={form} className="mt-3">
        <Form.Item name="subject">
          <Input
            className="px-5"
            placeholder="Enter Subject Here"
            size="large"
          />
        </Form.Item>
        <Form.Item name="help">
          <Input
            className="px-5"
            placeholder="Let us know how we can help you!"
            size="large"
            style={{ height: "120px" }}
          />
        </Form.Item>
      </Form>
      <div className="text-center">
        <button
          type="button"
          style={{
            backgroundColor: "#0a2c66",
            color: "white",
            width: "150px",
            height: "35px",
            borderRadius: "5px",
          }}
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default FormControl;
