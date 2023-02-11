export default function transformObject(obj, degree_id) {
  const experiences = [];
  const educations = [];

  for (let i = 0; i < 100; i++) {
    if (obj[`description${i}`] === undefined) break;

    experiences.push({
      description: obj[`description${i}`],
      employer: obj[`employer${i}`],
      due_date: obj[`due_date${i}`],
      start_date: obj[`start_date${i}`],
      position: obj[`position${i}`],
    });
  }

  for (let i = 0; i < 100; i++) {
    if (obj[`institute${i}`] === undefined) break;

    educations.push({
      institute: obj[`institute${i}`],
      description: obj[`educationDescription${i}`],
      due_date: obj[`institute_due_date${i}`],
      degree_id: degree_id,
    });
  }

  return {
    email: obj.email,
    name: obj.name,
    phone_number: obj.phone_number,
    surname: obj.surname,
    experiences,
    educations,
    about_me: obj.about_me,
  };
}

