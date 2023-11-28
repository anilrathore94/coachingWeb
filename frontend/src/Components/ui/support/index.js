import React, { useEffect, useState } from "react";
import { AddSupport } from "../../../services/support.service";
import { HotToaster } from "../../../utils/Toaster";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
const FeedbackForm = (props) => {
  const [name, setName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isOpenFeedback, setIsOpenFeedback] = useState(false);


  useEffect(() => {
    setIsOpenFeedback(props.isOpenFeedback);
  }, [props]);

  const handleCloseDialogFeedback = (event, reason) => {
    setIsOpenFeedback(false);
  };


  const handleChange = async (e) => {


    let name = e.target.name;
    let value = e.target.value;
    switch (name) {
      case "email":
        return setEmailId(value);
      case "mobile":
        return setMobileNumber(value);
      case "inquiry_message":
        return setMessage(value);
      default:
        return value;
    }
  };
  const emptyState = () => {
    setEmailId("");
    setMobileNumber("");
    setMessage("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      emailId: emailId,
      mobileNumber: mobileNumber,
      message: message,
    };
    let result = await AddSupport(data);
    HotToaster(result.status, result.message);
    emptyState();
  };

  return (
    <Dialog open={isOpenFeedback} onClose={handleCloseDialogFeedback}>
      <DialogActions>
        <Button onClick={handleCloseDialogFeedback} className="close-btn"><i class="fa fa-times-circle-o" aria-hidden="true"></i></Button>
      </DialogActions>
      <DialogContent>
        <p className="cust-p">
          <b>DEAR VALUED COACHING / TEACHER,</b><br></br>
          Your satisfaction is the top-most priority for us. We respect your valuable time spent on our website.
          Please visit our FAQs section for general queries. If our FAQs are not able to deliver the best, feel free
          to drop in your query below. You can also write to us at care@coachingtest.in or WhatsApp or call us
          at +91 7017944662, +91 7417109998<br></br>
          Each query is a special case to us. We assure a satisfactory response within 1 working days*
          Sincerely yours,
          Coaching test & Notes
        </p>
          
         <div className="feed-form-main row"> 

        <form style={{ margin: "10px", padding: "5px,5px,5px,5px" }}>
          <div className="form-group">
            <label for="staticEmail" class="col-sm-12 col-form-label"> Type<span>*</span></label>
            <select className="col-sm-12">
              <option value="enquiry">Enquiry</option>
              <option value="feedback">Feedback</option>
            </select>
          </div>

          <div className="form-group">
            <label>Related to<span>*</span></label>
            <select name="inquiry_related_to" id="inquiry_related_to" required="" className="col-sm-12">
              <option value="">-- Select --</option>
              <option value="Sales (for dealers, agents, etc only)">Sales (for dealers, agents, etc only)</option>
              <option value="Sales (for customers)">Sales (for customers)</option>
              <option value="Magazine subscription">Magazine subscription</option>
              <option value="Business association/ corporate communication/ advertisement, etc.">Business association/ corporate communication/ advertisement, etc.</option>
              <option value="Editorial/ publication queries">Editorial/ publication queries</option>
              <option value="Website/ Online sales">Website/ Online sales</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="form-group">
            <label>
              Teacher Name/Coaching Name<span>*</span>
            </label>
             <input type="name" name="name" required/>
          </div>
          <div class="form-group row">
            <label for="inputEmail" class="col-sm-12 col-form-label">Email<span>*</span></label>
            <div class="col-sm-12">
              <input type="text" class="form-control" required id="staticEmail" placeholder="email@example.com" />
            </div>
          </div>
          <div className="form-group">
              <label>Mob. No.<span>*</span></label>
              <input type="tel" name="mobile" className="col-sm-12"/>
          </div> 
          <div className="form-group">
             <label>Message<span>*</span></label>
             <textarea className="col-sm-12" >

             </textarea>
          </div>        

          <div className="field-button" style={{ position: 'relative' }}>
          <button className="btn-blue esub" type="cancel">
              Cancel
            </button>
            <button className="btn-blue esub" type="submit" onClick={handleSubmit}>
              Submit
            </button>
            <span className="loader"></span>
          </div>
          <span id="nmsg"></span>
        </form>

        </div>

      </DialogContent>
    </Dialog>
  );
};

export default FeedbackForm;
