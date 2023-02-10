export default function transformObject(obj) {
    const experiences = [];
    const educations=[]
  
    for (let i = 0; i < 100; i++) {
      if (obj[`description${i}`] === undefined) break;
  
      experiences.push({
        description: obj[`description${i}`],
        employer: obj[`employer${i}`],
        finnish: obj[`finnish${i}`],
        start: obj[`start${i}`],
        position: obj[`position${i}`],
        
      });
      if (obj[`description${i}`] === undefined) break;
  
      educations.push({
        school:obj[`school${i}`],
        educationDescription:obj[`educationDescription${i}`],
        schoolFinnish:obj[`schoolFinnish${i}`],
      });
    }
  
    return {
      email: obj.email,
      name: obj.name,
      phone: obj.phone,
      surname: obj.surname,
      userInfo: obj.userInfo,
      experiences,
      educations
    };
  }