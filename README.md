
# MentorMe.io


## Project Description

The aim of the project is to create a platform for mentors and mentees to build and extend their relationships through online communication. Breaking down barriers of distance and coordination, the portals can both supplement in-person relationships and facilitate proper virtual relationships.

Potential is equally distributed; opportunity is not. MentorMe aims to drive equity and close the mentoring gap through quality mentoring relationships for young people. We activate a diverse cross-sector movement that prioritizes relationships and fuels opportunity for young people everywhere they are - from colleges to workplaces, and beyond.

We provide mentorship and consulting services to help students and freshers transition comfortably into employment. Our carefully designed programmes equip students with the skills and tools necessary to chart their way to success. 
An ideal mentor would be someone motivated to help the next generation navigate their entry into the profession. One will be joining our existing mentor network consisting of professionals with a mix of academic qualifications and work experience in different fields. 

Developing a mentor program is one way of formalizing the relationship between individuals in a professional chapter and students in a college chapter. Mentor programs offer a structured setting in which to develop beneficial one-on-one relationships between students and professionals. Acting as a friend, a teacher, and a guide to the real world, mentors have the opportunity to encourage and advise students by sharing their own experiences and knowledge of the HR profession. This project provides a model of how to organize a working program and assist students with their career development and transitions. 

## Project Overview

The intended audiences of this mentorship website are two types of users. They are –

- **Mentee:** Individuals who are seeking guidance, knowledge, and support in their personal or professional development. These individuals could be students, young professionals, entrepreneurs, or anyone looking to enhance their skills and achieve their goals.

- **Mentor:** Experienced individuals in a particular field who are willing to share their knowledge and experience with others. Mentors could be industry experts, successful business owners, or seasoned professionals in their respective fields.

Both mentees and mentors would benefit from the mentorship website, as it provides a platform for mentees to connect with knowledgeable and experienced individuals, and for mentors to share their expertise and contribute to others' growth. Additionally, the website could also attract businesses and organizations that are looking for opportunities to provide mentorship programs for their employees or members.


## Project Features

The web application provides the following features:

- For Mentor:
    - Sign up and create a profile.
    - Showcase skills, expertise and experience.
    - Create and update posts.
    - Approve or reject mentorship’s request from mentees.
    - Response to the queries of mentees.

- For Mentee:
    - Sign up and create a profile.
    - Browse mentor profiles. 
    - Make a request to the mentors for their mentorship.
    - Ask doubts to mentors. 
    - View the mentor’s post.
    - Add comments to posts.

## Project Architecture:
The website is developed using **MERN**(MongoDB, Express.js, React.js, Node.js) stack. For state management, Redux is used and for UI styling, Google Material UI is used.

## Installation

1. Clone the repo 
```bash
  git clone https://github.com/dhanmoni/mentorme.git
```
2. Create a `.env` file and put the following
```bash
MONGODB_ATLAS_URI="<your_mongoDB_uri>"
JWT_TOKEN="<your_jwt_token>"
CLOUDINARY_NAME="<your_cloudinary_name>"
CLOUDINARY_API_KEY="<cloudinary_api_key>"
CLOUDINARY_SECRET="<cloudinary_secret>"
```
3. install dependencies for server and client
```bash 
    npm install
    cd client && npm install
```
4. start the server 
```bash
    nodemon server
```
5. start the client app
```bash
    npm run dev
```


## Screenshots

#### Landing Page
![landing](https://res.cloudinary.com/dmn19/image/upload/v1675603218/landing.png)

#### Create Account
![account](https://res.cloudinary.com/dmn19/image/upload/v1675603218/email-password-account-create.png)

### Mentor View:

#### Mentor Home Page
![App Screenshot](https://res.cloudinary.com/dmn19/image/upload/v1675603218/mentor-home-page.png)

#### View Questions from Mentee
![App Screenshot](https://res.cloudinary.com/dmn19/image/upload/v1675603218/view-question-from-mentee_pov-mentor.png)

#### Post by Mentor
![Post by mentor](https://res.cloudinary.com/dmn19/image/upload/v1675603217/post-by-mentor.png)

#### View pending mentorship request
![View pending mentorship request](https://res.cloudinary.com/dmn19/image/upload/v1675603216/view-pending-request_pov-mentor.png)

#### Answer Questions
![Answer Mentee Questions](https://res.cloudinary.com/dmn19/image/upload/v1675603218/answer-mentee-question_pov-mentor.png)

#### User Profile
![User Profile](https://res.cloudinary.com/dmn19/image/upload/v1675603216/user-profile.png)

### Mentee View:

#### Mentee Home Screen:
![Mentee Home Screen](https://res.cloudinary.com/dmn19/image/upload/v1675603219/view-post-from-mentors_pov-_mentee.png)

#### Find Mentors:
![Find Mentors](https://res.cloudinary.com/dmn19/image/upload/v1675603839/Screenshot_255.png)

#### Ask questions to mentors:
![Ask questions](https://res.cloudinary.com/dmn19/image/upload/v1675603220/view-mentor-profile-ask-them-question.png)
## Authors

- [@dhanmoni](https://www.github.com/dhanmoni)
- [@Sauvikn98](https://github.com/Sauvikn98)
- [@animesh449](https://github.com/animesh449)
- [@Rimpidutta](https://github.com/Rimpidutta)
