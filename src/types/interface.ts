interface ContactItem{
    id:number;
    name:string;
    detail:string;
}

interface ExperienceItem{
    id:number
    title:string,
    date:string,
    companyName:string,
    details:string,
}

interface EducationItem {
    id: number,
    degree: string,
    institution: string,
    date: string,
    details: string,
  }

export{ ContactItem,ExperienceItem,EducationItem}