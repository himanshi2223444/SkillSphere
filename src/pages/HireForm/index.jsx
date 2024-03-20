import React from 'react'
import { useState } from 'react';
const Hireform = () => {
  let [modelstatus, setmodelstatus] = useState(false);
      const [formData, setFormData] = useState({
        jobType: '',
        duration: '',
        payScale: ''
      });

      const onshow = () => {
        setmodelstatus(true);
      }

      const onHide = () => {
        setmodelstatus(false);
      };

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform actions with the form data here, like
//sending it to the server
        console.log(formData);
        onHide(); // Close the modal after form submission
      };
      return (
        <div className="App">
          <button className='w-fit' onClick={onshow}>click me</button>
          {modelstatus && (
            <div className='modeloverlay w-[100%] h-[100%] bg-gray-300
bg-opacity-50 fixed'>

              <div className='w-[620px] h-[620px] rounded bg-black
fixed left-[32%] translate-[50%]
                translate-y-[15%] transition duration-300 ease-in-out '>

                <form onSubmit={handleSubmit} className="flex justify-center">
                  <div className="w-full max-w-xl px-6 py-8">
                    <div className="flex flex-col items-center gap-8">
                      <div className="flex items-center gap-4">
                        <h3 className="text-3xl font-medium
text-white">You are hiring Denis Kravets</h3>
                        <button className="text-white"
onClick={onHide}>&times;</button>
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <div className="text-center text-white ">You
need a *</div>
                        <div className="rounded-full overflow-hidden">
                          <select className="w-64 rounded-full py-2
px-4 pr-8" name="jobType" value={formData.jobType}
onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="Full-time">web Developer</option>
                            <option value="Part-time">app developer</option>
                            <option value="Contract">Digital Marketer</option>
                          </select>
                        </div>
                        <div className="text-center text-white">For
how long *</div>
                        <div className="rounded-full overflow-hidden">
                          <select className="w-64 rounded-full py-2
px-4 pr-8" name="duration" value={formData.duration}
onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="1 month">1-15days</option>
                            <option value="3 months">more then 15 days</option>
                            <option value="6 months">more then a month</option>
                          </select>
                        </div>
                        <div className="text-center text-white">Payscale *</div>
                        <div className="rounded-full overflow-hidden">
                          <select className="w-64 py-2 px-4 pr-8
rounded-md border-white" name="payScale" value={formData.payScale}
onChange={handleChange} style={{ fontSize: "16px" }}>
                            <option value="">Select</option>
                            <option value="Annually">less then 1k</option>
                            <option value="Hourly">1k-3k</option>
                            <option value="Monthly">3k-10k</option>
                            <option value="Monthly">more then 10k</option>
                          </select>
                        </div>
                      </div>
                      <button type="submit" className="px-6 py-2
text-white bg-blue-500 rounded-xl">Send</button>
                    </div>
                  </div>
                </form>

              </div>
            </div>
          )}
        </div>
      );
          }

export default Hireform