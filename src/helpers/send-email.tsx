let qs = require("qs");
import { Linking } from "react-native";

const composeString = (state: any): string => {
  const letter = `
  \n Full Name: ${state.step1.fullName}
  \n Birthday: ${state.step1.fullName}
  \n City: ${state.step1.city}
  \n Number: ${state.step1.number}
  \n Education Institution: ${state.step2.educationalInstitution || "—"}
  \n Education Specialization: ${state.step2.educationalSpecialization || "—"}
  \n Education Graduated Year: ${state.step2.educationalGraduatedYear || "—"}
  \n Course Educational Organization: ${
    state.step2.courseEducationalOrganization || "—"
  }
  \n Course: ${state.step3.course || "—"}
  \n Course Finish Date: ${state.step3.courseFinishDate || "—"}
  \n Course Finish Date: ${state.step3.courseFinishDate || "—"}
  \n Work Place: ${state.step4.workPlace || "—"}
  \n Work Position Held: ${state.step4.workPositionHeld || "—"}
  \n Work Place: ${state.step4.workPlace || "—"}
  \n Work Start Date: ${state.step4.workStartDate || "—"}
  \n Work End Date: ${state.step5.workEndDate || "—"}
  \n Free time spend info: ${state.step5.freeTimeSpendInfo || "—"}
  \n Questions to us: ${state.step5.questionsToUs || "—"}
  `;
  return letter;
};

export async function sendEmail(
  to: string,
  subject: string,
  state: object,
) {
  let url: string = `mailto:${to}`;
  const query = qs.stringify({
    subject: subject,
    body: composeString(state),
  });

  if (query.length) {
    url += `?${query}`;
  }
  const canOpen = await Linking.canOpenURL(url);
  if (!canOpen) {
    throw new Error("Provided URL can not be handled");
  }
  return Linking.openURL(url);
}
