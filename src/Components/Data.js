export const workExperienceData = [
  {
    company: "WISH",
    title: "Security Infrastructure Engineer Intern",
    date_location: "Jan 2021 - Present | Remote",
    responsibilities: [
      "Built a log analysis tool using Python and AWS Athena that allows for easy querying, aggregating and parsing of logs",
      "Developed and deployed a CLI wrapper for SSH access into instances using Go",
      "Deployed the required infrastructure for the above projects (AWS EKS clusters, DynamoDB tables, S3, IAM roles/policies) using TerraForm",
    ],
  },
  {
    company: "NETFLIX",
    title: "Cloud Infrastructure Security Engineer Intern",
    date_location: "May 2020 - Aug 2020 | Remote\n",
    responsibilities: [
      "Implemented a multi-account AWS management system using Python and React that allows for role creation, cloning, deletion, and policy application across multiple AWS accounts from the convenience of one framework - ConsoleMe",
      "Discovered critical AuthZ and XSS security bugs, and thereafter patched them",
    ],
    link: "https://github.com/Netflix/consoleme",
  },
  {
    company: "WISH",
    title: "Security Infrastructure Engineer Intern",
    date_location: "Sep 2019 - Dec 2019 | San Francisco, California, USA",
    responsibilities: [
      "Researched, designed and deployed a Hashicorp Vault cluster with etcd backend in production using Salt and Terraform on AWS to manage secrets",
      "Wrote applications in Go that sync the local users in Vault with OIDC to ensure fine grained authorization controls and collect Prometheus metrics",
      "Constructed a proxy server in Go and deployed it on a Kubernetes cluster",
      "Created an application in Go that applies principle of least privilege by purging unused permissions from AWS IAM policies by using Athena and Cloudtrail",
    ],
  },
  {
    company: "ECOBEE",
    title: "Software Security Developer Intern",
    date_location: "Jan 2019 - Apr 2019 | Toronto, ON, Canada",
    responsibilities: [
      "Developed an automated tool using Bash and YAML to scan for security bugs in code",
      "Integrated the security tool with CircleCI to allow for continuous testing and deployment through the configuration file",
      "Incorporated the security tool with Slack by performing curl requests to the Slack API",
      "Developed automated security tool to analyze security metrics using Prometheus, Grafana and GraphQL in Go",
      "Found several critical security vulnerabilities, triaged them using CVSS scores, resolved them and verified the patches",
      "Won an internal award and recognition for finding a significant security vulnerability",
      "Deployed HashiCorp Vault on a Kubernetes cluster using GCP and Terraform",
    ],
  },
  {
    company: "BLACKBERRY",
    title: "Security Researcher and Developer Intern",
    date_location: "May 2018 - Aug 2018 | Waterloo, ON, Canada",
    responsibilities: [
      "Planned, designed and developed the fullstack implementation of a security framework for fuzzing",
      "Utilized Java and Spring to develop server side implementation of framework",
      "Implemented the front end interface using JavaScript, HTML/CSS and Thymeleaf",
      "Designed and created a native library API in C",
      "Created a command line interface tool for QNX in C++",
      "Performed vulnerability assessments through fuzzing and source code review to find and triage several critical security bugs",
    ],
  },
];

export const projectsData = [
  {
    name: "Smile4Real",
    description: "Java - Android Application",
    image_link: "/img/portfolio/android.jpg",
    github_link: "https://github.com/jaydhulia/smile4real",
    modalData: [
      "Ranked 2nd place at DeltaHacks with 100+ teams participating",
      "Collaborated to create a positive social impact android app to help individuals struggling with suicidal thoughts",
      "Implemented features such as making API calls, parsing JSON data, and infinite scrolling of images and text",
    ],
  },
  {
    name: "Facebook iOS App bug",
    description: "My first Security bug!",
    image_link: "/img/portfolio/fb.jpg",
    modalData: [
      "Detected a security crash on the Facebook iOS app and submitted to their Whitehat program (marked as informative and patched)",
      "The issue was a double free, which was resulting in a segmentation fault",
      "This was the first security bug I found and it sparked my interest in Software security!",
    ],
  },
  {
    name: "Corona Escape - 3D VR interactive escape room",
    description: "A - Frame / Three.js",
    image_link: "/img/portfolio/corona_escape.png",
    github_link: "https://github.com/jaydhulia/corona_escape",
    play_link: "https://jaydhulia.com/corona_escape/",
    modalData: [
      "Developed a fully immersive interactive 3D VR escape room that has multiple clues that the user must solve in order to escape!",
      "Users can pan and look around using their mouse, and move around the room using the keyboard.",
      "Used A-Frame and supporting libraries to implement features such as collision detection, gravity physics, object movement and interactions!",
      "You can play the game by clicking the play button below. Can you escape?",
    ],
  },
  {
    name: "Security Challenges",
    description: "Assembly and Web Security Challenges, CTFs",
    image_link: "/img/portfolio/secure.jpg",
    modalData: [
      "CMD+CTRL OWASP Bay Area CTF: Ranked 4th in CTF, by solving various challenges including broken access control, sensitive data exposure, XSS and SQLi",
      "Microcorruption CTF: Debugged and exploited security vulnerabilities such as memory corruption and buffer overflows, through skills in Assembly and gdb-like debugger",
      "OWASP Security Challenges: Identified security vulnerabilities (XSS, SQL injections, intercepting requests) in insecure web applications such as WebGoat and JuiceShop",
    ],
  },
  {
    name: "Lerminal - CLI tool to learn Terminal",
    description: "TypeScript",
    image_link: "/img/portfolio/terminal.jpg",
    github_link: "https://github.com/jaydhulia/lerminal",
    modalData: [
      "A terminal command line tool designed to help you learn terminal quickly!",
      "Easy to download and use",
      'Want to retry a command? Now includes a "stepper" mode to repeat commands!',
    ],
  },
  {
    name: "Hand-Gesture Controlled Tank Game",
    description: "C / Arduino",
    image_link: "/img/portfolio/tank.jpg",
    modalData: [
      "Constructed a hand-gesture controlled two-player tank game using Arduino and C equipped with lasers and IR",
      "Integrated the tanks with Bluetooth and accelerometer modules to provide control through hand gestures",
      "Implemented a multi-stage design; players would receive power-ups and health packs if they performed certain patterns of actions",
    ],
  },
  {
    name: "Security Bug Bounties!",
    description: "HackerOne, Bugcrowd",
    image_link: "/img/portfolio/security.jpeg",
    bug_link: "https://hackerone.com/forthegreatergood?type=user",
    modalData: [
      "Continued participation in bug bounty programs offered by HackerOne and Bugcrowd",
      "Found security bugs in many websites and reported them to the respective companies, often also verifying the fix once it has been patched",
    ],
  },
  {
    name: "Web Development",
    description: "React, Javascript, HTML/CSS, Bootstrap",
    image_link: "/img/portfolio/rflo.png",
    github_link: "https://github.com/jaydhulia/jaydhulia.github.io",
    modalData: [
      "Online portfolioss: Designed and developed my personal website on GitHub Pages using React",
      "Mission Medical Clinic: Developed a company website (missionmedicalclinic.ca) using HTML/CSS, JavaScript and Bootstrap",
      "Website for Run for Little Ones: Designed and developed an appealing website for a non-profit organization from initial planning to publishing using Wix",
    ],
  },
];
