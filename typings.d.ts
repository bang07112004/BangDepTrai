interface SanityBody{
    _createdAt: string;
    _id:string;
    _rev: string;
    _updatedAt: string;
}

interface Image{
    _type: "image";
    asset: {
        _ref: string;
        _type: ReferenceError;
    };
}

export interface PageInfo extends SanityBody{
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
}

export interface Skill extends SanityBody{
    [x: string]: any;
    _type: "skill";
    image: Image;
    mastery: string;
    title: string;
}

export interface Experience extends SanityBody{
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted: date;
    dateEnded: date;
    isCurrentWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}

export interface Project extends SanityBody{
    title: string;
    _type: "project";
    image: Image;
    linktoBuild: string;
    summary: string;
    technologies: Technology[];
}

export interface Social extends SanityBody{
    url: string | undefined;
    _type: "social";
    title: string;
    urlFor: string;
}