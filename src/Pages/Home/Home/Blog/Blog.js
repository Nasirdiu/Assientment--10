import React from "react";

const Blog = () => {
  return (
    <div className="container">
      <div className="text-center w-75 bg-light mt-4 p-3">
        <h4>Difference between authorization and authentication?</h4>
        <p>
          Ans: the process of verifying and confirming employees ID and
          passwords in an organization is called authentication, but determining
          which employee has access to which floor is called authorization
        </p>
      </div>
      <div className="text-center w-75 bg-light mt-4 p-3">
        <h4>
          Why are you using firebase? What other options do you have to
          implement authentication??
        </h4>
        <p>
          Ans: Firebase manages all data real-time in the database. So, the
          exchange of data to and fro from the database is easy and quick.
          Hence, if you are looking to develop mobile apps such as live
          streaming, chat messaging, etc., you can use Firebase. <br />
          Usually, authentication by a server entails the use of a user name and
          password. Other ways to authenticate can be through cards, retina
          scans, voice recognition, and fingerprints.
        </p>
      </div>
      <div className="text-center w-75 bg-light mt-4 p-3">
        <h4>
          What other services does firebase provide other than authentication?
        </h4>
        <p>
          Ans: There are many services which Firebase provides, Most useful of
          them are: Cloud Firestore. Cloud Functions. Authentication. Hosting.
          Cloud Storage. Google Analytics. Predictions. Cloud Messaging.
        </p>
      </div>
    </div>
  );
};

export default Blog;
