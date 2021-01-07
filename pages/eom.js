import React from "react";
import styles from "../styles/EOM.module.css";
import Toolbar from "../components/Toolbar";

const EOM = ({ employee }) => {
  console.log(employee);
  return (
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        <h1 className="">Employee of the Month</h1>
        <div className={styles.employeeOfTheMonth}>
          <h3>{employee.name}</h3>
          <h6>{employee.position}</h6>
          <img src={employee.image} alt={employee.name} />
          <p>{employee.description}</p>
        </div>
      </div>
    </div>
  );
};

// If you export an async function called getServerSideProps from a page,
// Next.js will pre-render this page on each request using the data returned by getServerSideProps.
export async function getServerSideProps(context) {
  const apiResponse = await fetch(
    "https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth"
  );
  const employee = await apiResponse.json();
  return {
    props: {
      employee,
    }, // will be passed to the page component as props
  };
}

export default EOM;
