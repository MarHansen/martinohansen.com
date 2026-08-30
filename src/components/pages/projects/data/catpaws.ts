import { ProjectData } from "./types";

const catpaws: ProjectData = {
  headTitle: "CatPaws──marhansen",
  title: "Cat Paws",
  role: "UI/UX Designer",
  developed: "February 2022",
  docs: [
    {
      label: "Medium",
      to: "https://medium.com/@marhansen/catpaws-34cb48c56f28",
    },
  ],
  aboutColor: "#B77D30",
  aboutText:
    "There are still many stray cat and dogs that need human hands to help. CatPaws is here to give a solution for those who see a stray animals that needed help but you can’t do much with it. Or you can be a animal rescue for helping the environment.",
  paragraphs: [
    "Stray animals sometimes can't adapt with our daily life and new environment leading to human care and help needs. And sometimes whenever we see stray animals in streets that in dangerous, we can't do much for them. Which lead us to create CatPaws that can help to solve the problem.\nCatPaws have 2 sides, one is from the animal rescuer and one for free user who can use the application to help the stray animals who needs help. If the user see some stray animals who need help, they can call the rescuer via application, with the details of the location and condition via maps.",
    "Animal issues was a very serious and sensitive case, which lead us to do a very technical and careful research. We've done a survey with more than 60 people to test the prototype, 90% of them supports our idea. The tricky part is to create a concept where both rescuer and normal user can have an advantage to encourage them helping more animals with fake call prevention. So we created a point system that lead user to help more animals out there and punishment system if the call was false.",
  ],
  techStack: ["figma"],
  images: [
    "/showcase/catpaws/catpaws-1.webp",
    "/showcase/catpaws/catpaws-2.webp",
    "/showcase/catpaws/catpaws-3.webp",
  ],
};

export default catpaws;
