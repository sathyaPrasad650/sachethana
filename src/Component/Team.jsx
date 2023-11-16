import React from "react";
import teamStyle from "../Styles/Team.module.css";
import { TeamMember } from "./TeamMember";

let teamData = [
  {
    name: "Apurva Rajashekar",
    image: "/Images/TeamMembers/apurvaRajashekar.jpg",
    education: "M.Sc., M.Phil., QHHT (UK)",
    designation: "Psychologist",
    specialization: "Quantum Healing Hypnosis Practitioner",
    p1: "Apurva, is a professional Quantum Healing Hypnosis Practitioner. She has to her credit a Master’s degree in Philosophy and Psychology. She is currently practicing Quantum Healing Hypnosis Technique (QHHT) and Cognitive Behaviour Therapy (CBT). She also conducts lecture-demonstrations and workshops at different places on the subject of Quantum Healing Hypnosis and mental health. She has already conducted lectures and healing sessions at various places including Bangalore, Hyderabad, Pune, Goa, Coimbatore, and New Delhi. She offers her services to a wide range of age groups including adults, children, couples, families, and elderly citizens. She addresses both neurotic and psychotic cases in the mode that is best suited for each individual.",
    p2: "Presently, she continues her private practice at Sachethana, Mental Health Clinic, Bangalore. She is also a school counsellor at The Valley School, Bangalore. She worked for a decade as a consultant psychologist at Human Potential India, Bangalore. She has carried out research in the field of ‘Subjective Experiences of individuals during hypnosis’. She has worked with ‘iact’ (International Academy for Creative Teaching, JGI) as a psychologist for a considerable period of 3 years. She was involved in various projects including Implementation of ‘Life Skills Programme’ at Public and International Schools, Training teachers and children on ‘Life Skills’ at schools and colleges, Developing ‘Life Skills’ curriculum for Children. Her interaction with clients during counselling and training programmes has been found to be very courteous and friendly.",
  },
  {
    name: "Alina Tulsiani",
    image: "/Images/TeamMembers/alinaTulsiani.jpg",
    education: "M.A",
    designation: "Psychologist",
    p1: "Alina holds a Master’s degree in Psychology, Diploma in Child Psychology and Educational Psychology. She is a certified Therapeutic Art Life Coach and has completed certification in foundation course on Education for Children with Disabilities.",
    p2: "Alina’s professional journey into the realm of psychology began in 2010, with teaching students of a junior college level, and subsequently progressed into a fulfilling career graph-where she has been privileged enough to teach and practice as a psychologist in inclusive, multidisciplinary setups and conduct workshops. The eclectic nature of responsibilities has made my experience both enjoyable and enriching. Presently, she is working as an independent Consultant Psychologist with Aris-Tot-Lers Global Preschool, while enjoying her journey of parenting.",
    p3: "She believes that learning never stops, no matter what stage you are in life. Psychology for her is the potential to empower individuals and help them self-optimise; and with the right guide the results can be truly amazing.",
  },
  {
    name: "Arpana Jain",
    education: "M.A",
    designation: "Psychologist",
    specialization: "Counselling Psychologist",
    p1: "Arpana Jain is a Counselling Psychologist with over 6 years of experience in helping people with a wide variety of mental health difficulties. She has a Master's in Psychology and has undergone intensive training in counselling a varied population. A considerable amount of her work in the past has been done at a well-known School and College. She also helpsAdults and Couples manage their psychological well-being. Arpana believes that every individual can get through life's difficulties and genuinely beliefs in the innate goodness of people.",
  },
  {
    name: "Mohan Raju S ",
    image: "/Images/TeamMembers/mohanRaju.jpg",
    education: "M.Phil (NIMHANS)",
    designation: "Psychologist",
    specialization: "Clinical Psychologist ",
    p1: "Mohan Raju S is a Clinical Psychologist in the Department of Psychiatry, Ramaiah Medical College and Hospitals, Bangalore. He completed M.Sc in Psychology from Bangalore and M.Phil in Clinical Psychology from the National Institute of Mental Health and Neurosciences (NIMHANS), Bangalore. After a brief stint in teaching postgraduates in Psychology at the Department of Psychology, Bangalore University, he moved to Ramaiah Medical College and Hospitals in 2012 where he is engaged in teaching and supervisingpostgraduates from the streams of psychiatry, psychology, medicine, dentistry, nursing and physiotherapy at both undergraduate and postgraduate levels. He is also a clinical consultant offering services that include psychological testing and psychological therapies and is part of several research activities in the institution. He has a keen interest and expertise in issues related to gender, sex and sexuality and has an advanced certification in couples and family therapies. He is also a United Nations (Critical Incident Stress Management Unit) certified Stress Counsellor.",
  },
  {
    name: "Dr. Sampath V",
    image: "/Images/TeamMembers/sampathV.jpg",
    education: "MD, DNB",
    designation: "Consultant Psychiatrist",
    specialization: "Certified in Positive Psychology (University of Penn)",
    p1: "Dr. Sampath, is Certified in Positive Psychology (University of Penn) and is a Consultant Psychiatrist and Professor in Physiology.Currently, he is associated as a professor and consultant psychiatrist at St.Peter's medical College and research hospital, Hosur. Consultant psychiatrist at Life care hospital, Sahakarnagar and Agastya multi- speciality Clinic. He is a visiting professor at Shota Batumi University, Georgia; Geomedi Medical University, Tblisi, Georgia and St. Thereasa medical College, Armenia.He has worked as Pharmacovigilance specialist for Johnson and Johnson, Pennsylvania, USA. He worked as a professor at International American University, St.Lucia; Sridevi medical College, Tumkur; Associate professor at MVJ Medical College, Hoskote; Assistant professor at Sri Devaraj Urs Medical College, kolar. He has worked as Pharmacovigilance specialist and trainer in Quintiles.He conducts free mental health camp every 2nd Sunday of the month at Sargur and HD Kote, Mysore District. He has 8 publications in national and international journals.",
    p2: `His expertise includes adult psychiatry (Depression, Anxiety disorders, OCD, Schizophrenia and Bipolar disorder, Addiction disorders) and also in working with children and the elderly
    mental health.`,
  },
  {
    name: "Rakshitha Vinod NR",
    image: "",
    education: "",
    designation: "Counselling Psychologist",
    specialization: "",
    p1: `Rakshitha has a keen interest in human behaviour. An engineer turned counsellor, has experience working with well-known hospitals and freelancing as a Counselling psychologist.
    Has pursued Master of Arts in Psychology Counselling(2020-2023) `,
    p2: "She is passionate about empowering individuals to overcome challenges and improve their well-being, committed to their personal and professional growth.",
    p3: "She is well trained in Cognitive Behavior Therapy (CBT), role play, Reframing Technique, Systematic Desensitization, school counselling, and other therapeutic techniques. She works well with children",
  },
];

// {
//     name: "",
//     image: "",
//     education: "",
//     designation: "",
//     specialization: "",
//     p1: "",
//     p2: "",
//   }

export const Team = () => {
  return (
    <div className={teamStyle.container}>
      <p>TEAM</p>
      {teamData.map((member, index) => (
        <TeamMember key={index} {...member} />
      ))}
    </div>
  );
};
