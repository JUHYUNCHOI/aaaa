import React from "react";

export default function Map() {
  return (
    // <iframe
    //   width="600"
    //   height="450"
    //   style={{ border: "0" }}
    //   loading="lazy"
    //   allowFullscreen
    //   referrerPolicy="no-referrer-when-downgrade"
    //   src="https://www.google.com/maps/embed/v1/view?key=AIzaSyBTdA_CZDkBE3mEJKA7f_9BB9k092w390Q&center=10.762622,106.660172&zoom=15"
    // ></iframe>
    <div className="map_container">
      <iframe
        loading="lazy"
        // allowFullscreen
        aria-hidden="false"
        style={{ border: "0", marginTop: "-60px" }}
        src="https://www.google.com/maps/d/u/0/embed?mid=103yAYr1USJhOLyJR0wGPfFVgzJ3ry-k&ehbc=2E312F&source=embed&output=embed"
        width="640"
        height="480"
      ></iframe>
    </div>
    // <iframe
    //   width="600"
    //   height="450"
    //   style={{ border: "0" }}
    //   loading="lazy"
    //   allowFullscreen
    //   referrerPolicy="no-referrer-when-downgrade"
    //   src="https://www.google.com/maps/embed?q=https://www.google.com/maps/@10.7632986,106.6547935,13z/data=!4m3!11m2!2skeq0_AIKwRZ7qDFg-iE1RgmBZ3QfHg!3e1&key=AIzaSyBTdA_CZDkBE3mEJKA7f_9BB9k092w390Q"
    // ></iframe>
    // <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfcoleH1fpMe3rOhKazZPWr0VICSiaZG--deXohnG1SrjF0bw/viewform?embedded=true" width="640" height="382" frameborder="0" marginheight="0" marginwidth="0">로드 중…</iframe>
  );
}
