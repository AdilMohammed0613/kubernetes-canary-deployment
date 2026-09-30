\# 🚀 Kubernetes-Based Canary Deployment with K3s and Istio



\## 📌 Project Overview



This project demonstrates a Kubernetes-based \*\*Canary Deployment\*\* using \*\*K3s, Docker, Kubernetes, and Istio\*\*.



Two versions of a Node.js application are deployed:



\- \*\*Version 1\*\* → Stable release

\- \*\*Version 2\*\* → Canary release



Istio controls traffic between the two versions, allowing the new release to be tested with limited traffic before promotion.



\---



\## 👨‍💻 Student Details



| Field | Details |

|---|---|

| \*\*Name\*\* | ADIL MOHAMMED |

| \*\*Roll No.\*\* | 160924750050 |

| \*\*College\*\* | Lords Institute of Engineering and Technology |

| \*\*Department\*\* | Computer Science and Data Science |

| \*\*Internship\*\* | DevOps Internship - Elevate Labs |

| \*\*Project\*\* | Project 7 - Kubernetes-Based Canary Deployment |

| \*\*Date\*\* | 30 September 2026 |



\---



\## 🎯 Project Objective



The objective is to implement a practical canary deployment workflow using Kubernetes and Istio.



The project demonstrates:



\- Docker containerization

\- Kubernetes deployment

\- K3s cluster management

\- Istio service mesh

\- Traffic splitting

\- Canary testing

\- Canary promotion

\- Application rollback



\---



\## 🏗️ Architecture



```text

&#x20;                   Client

&#x20;                     |

&#x20;                     v

&#x20;            Istio Ingress Gateway

&#x20;                     |

&#x20;                     v

&#x20;             Istio VirtualService

&#x20;                /           \\

&#x20;               /             \\

&#x20;         80% /               \\ 20%

&#x20;             v                 v

&#x20;      Version 1             Version 2

&#x20;       STABLE                CANARY

&#x20;         |                     |

&#x20;         v                     v

&#x20;    Kubernetes Pods       Kubernetes Pod

&#x20;         \\                     /

&#x20;          \\                   /

&#x20;           ------ Service ------

