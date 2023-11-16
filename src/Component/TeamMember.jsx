import React from "react";
import teamMemberStyle from "../Styles/TeamMember.module.css";

// {
//     name: "",
//     image: "",
//     education: "",
//     designation: "",
//     specialization: "",
//     p1: "",
//     p2: "",
//   }

export const TeamMember = ({
  index,
  name,
  image,
  education,
  designation,
  specialization,
  p1,
  p2,
  p3,
}) => {
  console.log(index);
  console.log(name, image, education, designation, specialization, p1, p2, p3);
  return (
    <div className={teamMemberStyle.container}>
      <div className={teamMemberStyle.left}>
        <img
          src={image}
          alt={name}
          style={{ width: "100%", height: "auto", borderRadius: "20px" }}
        />
      </div>
      <div className={teamMemberStyle.right}>
        <p className={teamMemberStyle.name}>{name}</p>
        <p className={teamMemberStyle.designation}>{designation}</p>
        <p className={teamMemberStyle.education}>{education}</p>
        <p className={teamMemberStyle.specialization}>{specialization}</p>
        <p className={teamMemberStyle.p1}>{p1}</p>
        <p className={teamMemberStyle.p2}>{p2}</p>
        <p className={teamMemberStyle.p3}>{p3}</p>
      </div>
    </div>
  );
};
