import React from "react";

export default function Map() {
  // return <div></div>
  return (
    <iframe
      width="600"
      height="450"
      style={{ border: '0' }}
      loading="lazy"
      allowFullscreen
      referrerPolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBTdA_CZDkBE3mEJKA7f_9BB9k092w390Q&q=Vietnam+hospital+police">
    </iframe>
    // <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfcoleH1fpMe3rOhKazZPWr0VICSiaZG--deXohnG1SrjF0bw/viewform?embedded=true" width="640" height="382" frameborder="0" marginheight="0" marginwidth="0">로드 중…</iframe>
  )
}

