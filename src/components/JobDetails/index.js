import React from "react";

const JobDetails = props => {
  // const jobListing = props.job.map(jobInfo => {
  //     return
  // })

  return (
    <section id="job-details">
      <h2>Job Details</h2>
      <h4>{props.job.title}</h4>
      <p>{props.job.description}</p>
    </section>
  );
};

export default JobDetails;
