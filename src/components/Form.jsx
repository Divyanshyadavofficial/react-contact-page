import React from "react";
function Form(){
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "8dc5a273-c432-47dd-a03b-c45925e1ffe8");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };
    return(
        <div className="contact-container">
            <form action={onSubmit} className="contact-left">
                <div className="contact-left-title">
                    <h2>Contact</h2>
                    <hr />
                </div>
                <input type="text" name="name" placeholder="Your Name" className="contact-inputs" required/>
                <input type="email" name="email" placeholder="Your Email" className="contact-inputs" required/>
                <textarea name="message" placeholder="your Message" className="contact-inputs" required></textarea>
                <button type="submit">Submit</button>


            </form>
            <div className="contact-right"></div>

        </div>

    )
}
export default Form;