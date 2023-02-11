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

//  const data = {

//     "name": "დავით",
//     "surname": "ონიანი",
//     "email": "davitoniani@redberry.ge",
//     "phone_number": "+995598123456",
//     "experiences": [
//       {
//         "position": "back-end developer",
//         "employer": "Redberry",
//         "start_date": "2019/09/09",
//         "due_date": "2020/09/23",
//         "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare nunc dui, a pellentesque magna blandit dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis diam nisi, at venenatis dolor aliquet vel. Pellentesque aliquet leo nec tortor pharetra, ac consectetur orci bibendum."
//       }
//     ],
//     "educations": [
//       {
//         "institute": "თსუ",
//         "degree": "სტუდენტი",
//         "due_date": "2017/06/25",
//         "description": "სამართლის ფაკულტეტის მიზანი იყო მიგვეღო ფართო თეორიული ცოდნა სამართლის არსის, სისტემის, ძირითადი პრინციპების, სამართლებრივი სისტემების, ქართული სამართლის ისტორიული წყაროების, კერძო, სისხლის და საჯარო სამართლის სფეროების ძირითადი თეორიების, პრინციპებისა და რეგულირების თავისებურებების შესახებ."
//       }
//     ],
//     "image": "/storage/images/0rI7LyNRJRrokoSKUTb9EKvNuyYFKOvUmDQWoFt6.png",
//     "about_me": "ეს არის აღწერა ჩემს შესახებ"
//   }
